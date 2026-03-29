import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const APP_DIR = path.resolve(__dirname, "../src/app");

describe("Page Completeness — All expected routes exist", () => {
  const expectedRoutes = [
    "page.tsx", // home
    "about/page.tsx",
    "cli/page.tsx",
    "pcd/page.tsx",
    "platform/page.tsx",
    "lifter/page.tsx",
    "transpiler/page.tsx",
    "sdks/page.tsx",
    "bpu/page.tsx",
    "registry/page.tsx",
    "pricing/page.tsx",
    "enterprise/page.tsx",
    "features/page.tsx",
    "foundations/page.tsx",
    "investors/page.tsx",
    "faq/page.tsx",
    "contact/page.tsx",
    "changelog/page.tsx",
    "ai-agents/page.tsx",
    "blog/page.tsx",
    "blog/[slug]/page.tsx",
    "news/page.tsx",
    "news/[slug]/page.tsx",
    "login/page.tsx",
    "legal/page.tsx",
    "not-found.tsx",
    "layout.tsx",
  ];

  for (const route of expectedRoutes) {
    it(`route ${route} exists`, () => {
      const fullPath = path.join(APP_DIR, route);
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  }
});

describe("Page Completeness — Industry pages exist", () => {
  const industries = [
    "ai",
    "aerospace",
    "automotive",
    "engineering",
    "finance",
    "government",
    "healthcare",
    "science",
  ];

  for (const industry of industries) {
    it(`industry/${industry} exists`, () => {
      const fullPath = path.join(APP_DIR, "industries", industry, "page.tsx");
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  }
});

describe("Page Completeness — Use-case pages exist", () => {
  const useCases = [
    "ai-safety",
    "ci-cd-integration",
    "cobol-migration",
    "formal-verification",
    "universal-transpilation",
  ];

  for (const uc of useCases) {
    it(`use-cases/${uc} exists`, () => {
      const fullPath = path.join(APP_DIR, "use-cases", uc, "page.tsx");
      expect(fs.existsSync(fullPath)).toBe(true);
    });
  }
});

describe("Page Completeness — Blog posts have content", () => {
  const blogContentPath = path.resolve(
    __dirname,
    "../src/lib/blog-content.tsx"
  );
  const blogDataPath = path.resolve(__dirname, "../src/lib/blog-data.ts");

  it("blog-content.tsx exists and is substantial", () => {
    const content = fs.readFileSync(blogContentPath, "utf-8");
    expect(content.length).toBeGreaterThan(10000);
  });

  it("blog-data.ts exists and has posts", () => {
    const content = fs.readFileSync(blogDataPath, "utf-8");
    const slugMatches = content.match(/slug:/g);
    expect(slugMatches).not.toBeNull();
    expect(slugMatches!.length).toBeGreaterThanOrEqual(20);
  });

  it("all blog data slugs have content entries", () => {
    const dataContent = fs.readFileSync(blogDataPath, "utf-8");
    const contentContent = fs.readFileSync(blogContentPath, "utf-8");

    const slugs =
      dataContent.match(/slug:\s*"([^"]+)"/g)?.map((m) => {
        const match = m.match(/"([^"]+)"/);
        return match ? match[1] : "";
      }) || [];

    for (const slug of slugs) {
      if (!slug) continue;
      expect(
        contentContent.includes(`"${slug}":`),
        `Missing content for blog slug: ${slug}`
      ).toBe(true);
    }
  });
});

describe("Page Completeness — News articles have content", () => {
  const newsContentPath = path.resolve(
    __dirname,
    "../src/lib/news-content.tsx"
  );
  const newsDataPath = path.resolve(__dirname, "../src/lib/news-data.ts");

  it("news-content.tsx exists", () => {
    expect(fs.existsSync(newsContentPath)).toBe(true);
  });

  it("news-data.ts exists and has articles", () => {
    const content = fs.readFileSync(newsDataPath, "utf-8");
    const slugMatches = content.match(/slug:/g);
    expect(slugMatches).not.toBeNull();
    expect(slugMatches!.length).toBeGreaterThanOrEqual(5);
  });
});

describe("Page Completeness — Pages are non-trivial", () => {
  function getAllPageFiles(dir: string): string[] {
    const results: string[] = [];
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) results.push(...getAllPageFiles(fullPath));
      else if (entry.name === "page.tsx") results.push(fullPath);
    }
    return results;
  }

  const pages = getAllPageFiles(APP_DIR);

  for (const file of pages) {
    const relPath = path.relative(APP_DIR, file);
    // Skip docs redirect and thin wrapper pages
    if (relPath.includes("docs/")) continue;
    if (relPath === "design-system/page.tsx") continue;
    // Home page.tsx is a thin wrapper that imports components
    if (relPath === "page.tsx") continue;

    it(`${relPath} has substantial content (>50 lines)`, () => {
      const content = fs.readFileSync(file, "utf-8");
      const lines = content.split("\n").length;
      expect(lines).toBeGreaterThan(50);
    });
  }
});
