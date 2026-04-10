import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const APP_DIR = path.join(ROOT, "src", "app");
const COMPONENTS_DIR = path.join(ROOT, "src", "components");
const PUBLIC_DIR = path.join(ROOT, "public");

function getAllPageFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllPageFiles(fullPath));
      continue;
    }
    if (entry.name === "page.tsx") {
      results.push(fullPath);
    }
  }
  return results;
}

describe("Recovery guardrails — public tree is not collapsed", () => {
  const pageFiles = getAllPageFiles(APP_DIR);

  it("keeps a full public route surface instead of a reduced shell", () => {
    expect(pageFiles.length).toBeGreaterThanOrEqual(45);
  });

  it("keeps the critical product routes recovered from history", () => {
    const criticalRoutes = [
      "platform/page.tsx",
      "registry/page.tsx",
      "cli/page.tsx",
      "pcd/page.tsx",
      "sdks/page.tsx",
      "transpiler/page.tsx",
      "bpu/page.tsx",
      "features/page.tsx",
      "foundations/page.tsx",
      "lifter/page.tsx",
    ];

    for (const route of criticalRoutes) {
      expect(fs.existsSync(path.join(APP_DIR, route)), `Missing route: ${route}`).toBe(true);
    }
  });

  it("keeps editorial and support routes that disappeared in the collapsed tree", () => {
    const supportRoutes = [
      "about/page.tsx",
      "contact/page.tsx",
      "enterprise/page.tsx",
      "industries/finance/page.tsx",
      "news/page.tsx",
      "blog/page.tsx",
      "use-cases/ai-safety/page.tsx",
      "playground/page.tsx",
    ];

    for (const route of supportRoutes) {
      expect(fs.existsSync(path.join(APP_DIR, route)), `Missing support route: ${route}`).toBe(true);
    }
  });
});

describe("Recovery guardrails — public shell and branding remain intact", () => {
  it("keeps the shared shell components in source", () => {
    const requiredComponents = [
      "Navbar.tsx",
      "Footer.tsx",
      "CookieBanner.tsx",
      "StructuredData.tsx",
      "PhiC.tsx",
    ];

    for (const file of requiredComponents) {
      expect(fs.existsSync(path.join(COMPONENTS_DIR, file)), `Missing shell component: ${file}`).toBe(true);
    }
  });

  it("keeps the global style entrypoint and official logo assets", () => {
    const requiredAssets = [
      path.join(APP_DIR, "globals.css"),
      path.join(PUBLIC_DIR, "brand", "brik64-logo-primary-horizontal-menu.svg"),
      path.join(PUBLIC_DIR, "brand", "brik64-logo-primary-horizontal-black.svg"),
      path.join(PUBLIC_DIR, "brand", "brik64-logo-favicon-b64-master.svg"),
      path.join(PUBLIC_DIR, "seo", "brik64-opengraph-stacked.png"),
    ];

    for (const file of requiredAssets) {
      expect(fs.existsSync(file), `Missing asset: ${path.relative(ROOT, file)}`).toBe(true);
    }
  });
});

describe("Recovery guardrails — deploy contract remains canonical", () => {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(ROOT, "package.json"), "utf-8")
  ) as {
    scripts?: Record<string, string>;
  };

  it("keeps a production deploy script targeting the Pages project", () => {
    expect(packageJson.scripts?.deploy).toContain("wrangler pages deploy out");
    expect(packageJson.scripts?.deploy).toContain("brik64-web-brik64com");
  });
});
