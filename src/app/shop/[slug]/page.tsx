import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CanonicalPageLayout } from "@/components/PageArchetypes";
import { ButtonVNext, ChipVNext } from "@/components/vnext/primitives";
import {
  getPrintfulStorefront,
  getShopProductBySlug,
  type ShopProduct,
} from "@/lib/printful";

type ShopProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPrice(minPrice: number, maxPrice: number, currency: string): string {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });

  if (minPrice === maxPrice) {
    return formatter.format(minPrice);
  }

  return `${formatter.format(minPrice)} - ${formatter.format(maxPrice)}`;
}

function getProductGallery(product: ShopProduct): string[] {
  return product.galleryImages.length > 0 ? product.galleryImages : [product.imageUrl];
}

export async function generateStaticParams() {
  const storefront = await getPrintfulStorefront();

  return storefront.products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ShopProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found — BRIK64 Shop",
    };
  }

  return {
    title: `${product.name} — BRIK64 Shop`,
    description: `Product details, gallery, and variant information for ${product.name}.`,
  };
}

export default async function ShopProductPage({ params }: ShopProductPageProps) {
  const { slug } = await params;
  const product = await getShopProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const gallery = getProductGallery(product);
  const mosaicImages = gallery.slice(0, 3);

  return (
    <CanonicalPageLayout>
      <section className="border-b border-white/8 bg-[#05080c]">
        <div className="mx-auto max-w-[1480px] px-6 pb-16 pt-18 md:px-8 lg:px-14 lg:pb-24 lg:pt-24">
          <Link
            href="/shop"
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48 transition-colors hover:text-white/72"
          >
            Back to shop
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,0.92fr)]">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[28px] border border-black/8 bg-white">
                <Image
                  src={gallery[0]}
                  alt={product.name}
                  width={960}
                  height={960}
                  className="aspect-square h-auto w-full object-cover"
                  unoptimized
                />
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {gallery.map((imageUrl, index) => (
                  <div
                    key={`${imageUrl}-${index}`}
                    className="min-w-[220px] overflow-hidden rounded-[18px] border border-black/8 bg-white sm:min-w-[240px]"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} view ${index + 1}`}
                      width={480}
                      height={480}
                      className="aspect-square h-auto w-full object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {mosaicImages.map((imageUrl, index) => (
                  <div
                    key={`mosaic-${imageUrl}-${index}`}
                    className="overflow-hidden rounded-[18px] border border-black/8 bg-white"
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.name} mockup ${index + 1}`}
                      width={480}
                      height={480}
                      className="aspect-square h-auto w-full object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-white/8 bg-[#06090e] p-7">
              <div className="flex flex-wrap gap-2.5">
                <ChipVNext variant="accent">Product detail</ChipVNext>
                <ChipVNext variant="neutral">{product.variants.length} variants</ChipVNext>
              </div>

              <h1 className="mt-6 text-4xl font-semibold text-white">{product.name}</h1>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-white/74">
                {formatPrice(product.minPrice, product.maxPrice, product.currency)}
              </p>
              <p className="mt-5 max-w-[56ch] text-base leading-8 text-white/60">
                Product gallery, available variants, and order details in one place.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.variants.map((variant) => (
                  <div key={variant.id} className="rounded-[16px] border border-white/8 bg-[#0a0f14] p-4">
                    <p className="text-sm font-semibold text-white">{variant.size ?? variant.name}</p>
                    <p className="mt-2 text-sm text-white/56">{variant.color ?? "Standard finish"}</p>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.12em] text-white/82">
                      {formatPrice(variant.price, variant.price, variant.currency)}
                    </p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/42">
                      SKU {variant.sku}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonVNext href="/contact-sales" tone="primary">
                  Request this item
                </ButtonVNext>
                <ButtonVNext href="/contact" tone="secondary">
                  Team order
                </ButtonVNext>
              </div>
            </div>
          </div>
        </div>
      </section>
    </CanonicalPageLayout>
  );
}
