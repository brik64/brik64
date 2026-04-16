import { describe, expect, it } from "vitest";

import { footerGroups } from "@/lib/site-config";

import { read } from "./site-grammar";

describe("Shop storefront", () => {
  it("renders /shop as a direct storefront instead of a utility wrapper", () => {
    const page = read("src/app/shop/page.tsx");

    expect(page).toContain("CanonicalPageLayout");
    expect(page).toContain("getPrintfulStorefront");
    expect(page).toContain("Core pieces with simple product pages");
    expect(page).toContain('href={`/shop/${product.slug}`}');
    expect(page).not.toContain("UtilityPageView");
    expect(page).not.toContain("utilityPages.shop");
  });

  it("keeps Printful integration isolated in a typed helper with safe fallback behavior", () => {
    const source = read("src/lib/printful.ts");

    expect(source).toContain("PRINTFUL_API_TOKEN");
    expect(source).toContain("PRINTFUL_STORE_ID");
    expect(source).toContain('source: "fallback"');
    expect(source).toContain('source: "live"');
    expect(source).toContain("/store/products");
    expect(source).toContain("PRINTFUL_API_TOKEN is not configured");
  });

  it("keeps public shop copy free of supplier references and uses dark cards with white image stage", () => {
    const page = read("src/app/shop/page.tsx");

    expect(page).not.toContain("Printful-backed");
    expect(page).not.toContain("Fulfillment: Printful");
    expect(page).not.toContain("live Printful data");
    expect(page).not.toContain("Store highlights");
    expect(page).not.toContain("Focused drop, simple layout, direct support.");
    expect(page).not.toContain("Request merch");
    expect(page).not.toContain("Need a custom run");
    expect(page).toContain('className="rounded-[24px] border border-white/8 bg-[#070b11] p-5 transition-colors hover:border-[color:var(--accent)]/28"');
    expect(page).toContain('className="overflow-hidden rounded-[18px] border border-black/8 bg-white"');
  });

  it("adds a dedicated product detail page with gallery, carousel rail, mockup mosaic, and order actions", () => {
    const detailPage = read("src/app/shop/[slug]/page.tsx");

    expect(detailPage).toContain("generateStaticParams");
    expect(detailPage).toContain("getShopProductBySlug");
    expect(detailPage).toContain("Request this item");
    expect(detailPage).toContain("Team order");
    expect(detailPage).toContain("gallery.map");
    expect(detailPage).toContain("overflow-x-auto");
    expect(detailPage).toContain("mosaicImages.map");
  });

  it("adds local mockup assets to the sticker product override so listing and detail use branded photography", () => {
    const source = read("src/lib/printful.ts");

    expect(source).toContain("PRODUCT_IMAGE_OVERRIDES");
    expect(source).toContain("/shop/stickers/kiss-cut-stickers-white-3x3-lifestyle-2.png");
    expect(source).toContain("/shop/stickers/kiss-cut-stickers-white-5_5-front.png");
    expect(source).toContain("/shop/stickers/kiss-cut-stickers-white-5_5-lifestyle-1.png");
    expect(source).toContain("primaryImageUrl");
    expect(source).toContain("mockupImages");
  });

  it("adds Shop to the footer resources group", () => {
    expect(footerGroups[1].links.map((item) => item.label)).toContain("Shop");
  });
});
