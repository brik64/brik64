import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

import { industryPages, thesisPages, useCasePages } from "@/lib/risk-page-data";
import { utilityPages } from "@/lib/utility-page-data";

import {
  APP_DIR,
  ROOT,
  editorialPages,
  getAllPageFiles,
  productCorePages,
  productMigratedPages,
  productRestoredPages,
  read,
  retiredPages,
  riskDirectPages,
  riskWrapperPages,
  utilityDirectPages,
  utilityRestoredPages,
  utilityWrapperPages,
} from "./site-grammar";

describe("Page completeness — recovered public tree remains intact", () => {
  const expectedRouteFiles = [
    "src/app/page.tsx",
    ...productCorePages,
    ...productMigratedPages,
    ...productRestoredPages,
    ...editorialPages,
    ...utilityDirectPages,
    ...utilityRestoredPages,
    ...utilityWrapperPages.map(([file]) => file),
    ...riskDirectPages,
    ...riskWrapperPages.map(([file]) => file),
    ...retiredPages,
    "src/app/layout.tsx",
    "src/app/not-found.tsx",
  ];

  for (const file of expectedRouteFiles) {
    it(`${file} exists`, () => {
      expect(fs.existsSync(path.join(ROOT, file))).toBe(true);
    });
  }

  it("keeps a full public route surface instead of the collapsed shell", () => {
    expect(getAllPageFiles().length).toBeGreaterThanOrEqual(50);
  });
});

describe("Page completeness — wrapper architecture is explicit", () => {
  for (const [file, key] of utilityWrapperPages) {
    it(`${file} delegates to UtilityPageView using utilityPages.${key}`, () => {
      const content = read(file);
      expect(content).toContain('import { UtilityPageView } from "@/components/PageArchetypes"');
      expect(content).toContain("return <UtilityPageView");
      expect(content).toContain(`utilityPages.${key}`);
    });
  }

  for (const [file, pageRef] of riskWrapperPages) {
    it(`${file} delegates to RiskPageView using ${pageRef}`, () => {
      const content = read(file);
      expect(content).toContain('import { RiskPageView } from "@/components/PageArchetypes"');
      expect(content).toContain("return <RiskPageView");
      expect(content).toContain(pageRef);
    });
  }

  for (const file of retiredPages) {
    it(`${file} is retired via redirect instead of rendering a legacy shell`, () => {
      const content = read(file);
      expect(content).toContain('import { redirect } from "next/navigation"');
      expect(content).toContain('redirect("/")');
    });
  }

  it("languages/[slug] remains a dynamic route with precomputed params", () => {
    const content = read("src/app/languages/[slug]/page.tsx");
    expect(content).toContain("generateStaticParams");
    expect(content).toContain("LanguageExchangeSurface");
    expect(content).toContain("DocsRailSurface");
  });

  it("legacy restored buckets are now migrated into wrapper architecture", () => {
    expect(utilityRestoredPages.length).toBe(0);
    expect(productRestoredPages.length).toBe(0);
  });
});

describe("Page completeness — shared archetype data stays populated", () => {
  it("utility page specs cover every utility wrapper route", () => {
    const expectedKeys = utilityWrapperPages.map(([, key]) => key);
    const actualKeys = Object.keys(utilityPages);
    for (const key of expectedKeys) {
      expect(actualKeys).toContain(key);
    }
    expect(actualKeys.length).toBeGreaterThanOrEqual(expectedKeys.length);
  });

  it("industry page specs cover all industry routes", () => {
    expect(Object.keys(industryPages).sort()).toEqual(
      [
        "aerospace",
        "ai",
        "automotive",
        "engineering",
        "finance",
        "government",
        "healthcare",
        "science",
      ].sort(),
    );
  });

  it("use-case page specs cover all use-case routes", () => {
    expect(Object.keys(useCasePages).sort()).toEqual(
      [
        "aiSafety",
        "ciCdIntegration",
        "cobolMigration",
        "formalVerification",
        "universalTranspilation",
      ].sort(),
    );
  });

  it("applied thesis page specs stay populated", () => {
    expect(Object.keys(thesisPages).sort()).toEqual(
      ["ai", "blockchain", "safetyCritical"].sort(),
    );
  });
});

describe("Page completeness — editorial content remains substantive", () => {
  const blogContentPath = path.resolve(ROOT, "src/lib/blog-content.tsx");
  const blogDataPath = path.resolve(ROOT, "src/lib/blog-data.ts");
  const newsContentPath = path.resolve(ROOT, "src/lib/news-content.tsx");
  const newsDataPath = path.resolve(ROOT, "src/lib/news-data.ts");

  it("blog content remains substantial", () => {
    const content = fs.readFileSync(blogContentPath, "utf-8");
    expect(content.length).toBeGreaterThan(10000);
  });

  it("blog data still contains a meaningful number of posts", () => {
    const content = fs.readFileSync(blogDataPath, "utf-8");
    const slugMatches = content.match(/slug:/g);
    expect(slugMatches).not.toBeNull();
    expect(slugMatches!.length).toBeGreaterThanOrEqual(20);
  });

  it("all blog data slugs still have content entries", () => {
    const dataContent = fs.readFileSync(blogDataPath, "utf-8");
    const contentContent = fs.readFileSync(blogContentPath, "utf-8");
    const slugs =
      dataContent.match(/slug:\s*"([^"]+)"/g)?.map((match) => {
        const inner = match.match(/"([^"]+)"/);
        return inner ? inner[1] : "";
      }) ?? [];

    for (const slug of slugs) {
      if (!slug) continue;
      expect(
        contentContent.includes(`"${slug}":`),
        `Missing content for blog slug: ${slug}`,
      ).toBe(true);
    }
  });

  it("news content and metadata remain present", () => {
    expect(fs.existsSync(newsContentPath)).toBe(true);

    const content = fs.readFileSync(newsDataPath, "utf-8");
    const slugMatches = content.match(/slug:/g);
    expect(slugMatches).not.toBeNull();
    expect(slugMatches!.length).toBeGreaterThanOrEqual(5);
  });
});

describe("Page completeness — public app shell stays canonical", () => {
  it("keeps the global app layout and not-found entrypoint", () => {
    expect(fs.existsSync(path.join(APP_DIR, "layout.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(APP_DIR, "not-found.tsx"))).toBe(true);
  });
});
