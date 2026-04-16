type PrintfulStore = {
  id: number;
  name: string;
  type: string;
};

type PrintfulProductSummary = {
  id: number;
  name: string;
  thumbnail_url: string | null;
  variants: number;
  synced: number;
  is_ignored: boolean;
};

type PrintfulVariant = {
  id: number;
  name: string;
  retail_price: string;
  currency: string;
  sku: string;
  size?: string | null;
  color?: string | null;
  availability_status: string;
  product: {
    image?: string | null;
    name: string;
  };
  files?: Array<{
    preview_url?: string | null;
    thumbnail_url?: string | null;
  }>;
};

type PrintfulProductDetail = {
  sync_product: PrintfulProductSummary;
  sync_variants: PrintfulVariant[];
};

type PrintfulEnvelope<T> = {
  code: number;
  result: T;
};

export type ShopVariant = {
  id: number;
  name: string;
  price: number;
  currency: string;
  sku: string;
  size: string | null;
  color: string | null;
  availability: string;
  imageUrl: string;
};

export type ShopProduct = {
  id: number;
  slug: string;
  name: string;
  imageUrl: string;
  galleryImages: string[];
  minPrice: number;
  maxPrice: number;
  currency: string;
  variants: ShopVariant[];
};

export type ShopStorefront = {
  source: "live" | "fallback";
  storeName: string;
  products: ShopProduct[];
  note: string;
};

const PRINTFUL_API_BASE = "https://api.printful.com";
const FALLBACK_NOTE =
  "Catalog data is powered by the connected Printful store. Public checkout is staged through merch support while the storefront pipeline is finalized.";

const PRODUCT_IMAGE_OVERRIDES: Record<
  number,
  {
    primaryImageUrl: string;
    mockupImages: string[];
  }
> = {
  428071134: {
    primaryImageUrl: "/shop/stickers/kiss-cut-stickers-white-3x3-lifestyle-2.png",
    mockupImages: [
      "/shop/stickers/kiss-cut-stickers-white-3x3-lifestyle-2.png",
      "/shop/stickers/kiss-cut-stickers-white-5_5-front.png",
      "/shop/stickers/kiss-cut-stickers-white-5_5-lifestyle-1.png",
    ],
  },
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-");
}

export function getShopProductSlug(name: string, id: number): string {
  return `${slugify(name)}-${id}`;
}

function getPrintfulToken(): string | null {
  return process.env.PRINTFUL_API_TOKEN ?? process.env.PRINTFUL_TOKEN ?? null;
}

function getPrintfulStoreId(): string | null {
  return process.env.PRINTFUL_STORE_ID ?? null;
}

async function printfulFetch<T>(path: string): Promise<T> {
  const token = getPrintfulToken();
  if (!token) {
    throw new Error("PRINTFUL_API_TOKEN is not configured");
  }

  const response = await fetch(`${PRINTFUL_API_BASE}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Printful request failed: ${response.status} ${response.statusText}`);
  }

  const payload = (await response.json()) as PrintfulEnvelope<T>;
  return payload.result;
}

function normalizeImageUrl(product: PrintfulProductSummary, variant: PrintfulVariant): string {
  const previewUrl = variant.files?.find((file) => file.preview_url)?.preview_url;
  const thumbUrl = variant.files?.find((file) => file.thumbnail_url)?.thumbnail_url;
  return previewUrl ?? thumbUrl ?? variant.product.image ?? product.thumbnail_url ?? "";
}

function normalizeProduct(detail: PrintfulProductDetail): ShopProduct {
  const variants = detail.sync_variants
    .filter((variant) => variant.availability_status === "active")
    .map((variant) => ({
      id: variant.id,
      name: variant.name,
      price: Number(variant.retail_price),
      currency: variant.currency,
      sku: variant.sku,
      size: variant.size ?? null,
      color: variant.color ?? null,
      availability: variant.availability_status,
      imageUrl: normalizeImageUrl(detail.sync_product, variant),
    }));

  const prices = variants.map((variant) => variant.price);
  const currency = variants[0]?.currency ?? "USD";
  const override = PRODUCT_IMAGE_OVERRIDES[detail.sync_product.id];
  const remoteGalleryImages = Array.from(
    new Set(variants.map((variant) => variant.imageUrl).filter(Boolean)),
  );
  const galleryImages = Array.from(
    new Set([...(override?.mockupImages ?? []), ...remoteGalleryImages]),
  );

  return {
    id: detail.sync_product.id,
    slug: getShopProductSlug(detail.sync_product.name, detail.sync_product.id),
    name: detail.sync_product.name,
    imageUrl:
      override?.primaryImageUrl ??
      variants[0]?.imageUrl ??
      detail.sync_product.thumbnail_url ??
      "",
    galleryImages,
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 0,
    currency,
    variants,
  };
}

export async function getPrintfulStorefront(): Promise<ShopStorefront> {
  const token = getPrintfulToken();
  if (!token) {
    return {
      source: "fallback",
      storeName: "BRIK64 Official Web Shop",
      products: [],
      note: "Printful credentials are not configured for this build, so the merch catalog cannot be loaded yet.",
    };
  }

  try {
    const configuredStoreId = getPrintfulStoreId();
    const store = configuredStoreId
      ? await printfulFetch<PrintfulStore>(`/stores/${configuredStoreId}`)
      : (await printfulFetch<PrintfulStore[]>("/stores"))[0];

    const products = await printfulFetch<PrintfulProductSummary[]>("/store/products");
    const visibleProducts = products.filter((product) => !product.is_ignored && product.synced > 0);
    const details = await Promise.all(
      visibleProducts.map((product) =>
        printfulFetch<PrintfulProductDetail>(`/store/products/${product.id}`),
      ),
    );

    return {
      source: "live",
      storeName: store?.name ?? "BRIK64 Official Web Shop",
      products: details.map(normalizeProduct),
      note: FALLBACK_NOTE,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown Printful error";
    return {
      source: "fallback",
      storeName: "BRIK64 Official Web Shop",
      products: [],
      note: `Printful catalog could not be loaded for this build: ${message}.`,
    };
  }
}

export async function getShopProductBySlug(slug: string): Promise<ShopProduct | null> {
  const storefront = await getPrintfulStorefront();
  return storefront.products.find((product) => product.slug === slug) ?? null;
}
