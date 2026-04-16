import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

function listAppTsxFiles(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listAppTsxFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".tsx")) {
      files.push(fullPath);
    }
  }

  return files;
}

describe("Editorial system — pagination and covers", () => {
  it("blog includes a paginated archive route", () => {
    expect(fs.existsSync(path.join(ROOT, "src/app/blog/page/[page]/page.tsx"))).toBe(true);
  });

  it("blog data includes editorial cover metadata", () => {
    const content = read("src/lib/blog-data.ts");
    expect(content).toContain("EditorialCoverMeta");
    expect(content).toContain("coverTheme");
    expect(content).toContain("getEditorialCover");
  });

  it("news data also carries editorial covers", () => {
    const content = read("src/lib/news-data.ts");
    expect(content).toContain("EditorialCoverMeta");
    expect(content).toContain("coverTheme");
    expect(content).toContain("getEditorialCover");
  });

  it("blog listing renders featured artifact plus pagination rail", () => {
    const content = read("src/app/blog/page.tsx");
    expect(content).toContain("FeaturedEditorialCard");
    expect(content).toContain("PaginationRail");
    expect(content).toContain("EditorialHero");
  });

  it("blog detail renders the editorial hero with cover metadata", () => {
    const content = read("src/app/blog/[slug]/page.tsx");
    expect(content).toContain("EditorialArticleHero");
    expect(content).toContain("coverImage");
    expect(content).toContain("coverAlt");
    expect(content).toContain("openGraph");
  });
});

describe("Design system — page and editorial artifacts are documented", () => {
  it("design kit exposes page artifacts showcase", () => {
    const content = read("src/components/DesignKitSection.tsx");
    expect(content).toContain("PAGE ARTIFACTS");
    expect(content).toContain("PageArtifactsShowcase");
    expect(content).toContain("Product, Evidence, and Editorial Surfaces");
    expect(content).toContain("SITE GRAMMAR");
    expect(content).toContain("No isolated black oval CTA");
  });

  it("page artifacts define comparison, matrix, and evidence surfaces", () => {
    const content = read("src/components/PageArtifacts.tsx");
    expect(content).toContain("ComparisonSurface");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).toContain("PageArtifactsShowcase");
    expect(content).toContain("text-[color:var(--accent)]");
  });
});

describe("Secondary pages — previously thin routes now carry substantive content", () => {
  it("shop route is now a direct storefront backed by Printful catalog data", () => {
    const page = read("src/app/shop/page.tsx");
    const printful = read("src/lib/printful.ts");
    expect(page).toContain("CanonicalPageLayout");
    expect(page).toContain("getPrintfulStorefront");
    expect(page).toContain("BrandWordmark");
    expect(printful).toContain("PRINTFUL_API_TOKEN");
    expect(printful).toContain("/store/products");
  });
});

describe("Site grammar — legacy blue accents are removed from public routes", () => {
  const forbiddenPatterns = [
    /#00b8d4/,
    /#00a0bc/,
    /text-blue-400/,
    /text-blue-500/,
    /text-blue-700/,
    /bg-blue-500/,
    /border-blue-500/,
  ];

  const routeFiles = listAppTsxFiles(path.join(ROOT, "src/app")).filter((file) => {
    const rel = path.relative(ROOT, file);
    return !rel.includes("layout.tsx") && !rel.includes("not-found.tsx");
  });

  for (const file of routeFiles) {
    const rel = path.relative(ROOT, file);

    it(`${rel} uses the canonical teal/orange palette`, () => {
      const content = fs.readFileSync(file, "utf-8");
      for (const pattern of forbiddenPatterns) {
        expect(pattern.test(content)).toBe(false);
      }
    });
  }
});
