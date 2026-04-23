import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

import { ROOT, read } from "./site-grammar";

const routeToAsset = new Map<string, string>([
  ["src/app/platform/page.tsx", "/generated/platform-hero-bg.png"],
  ["src/app/registry/page.tsx", "/generated/registry-hero-bg.png"],
  ["src/app/pcd/page.tsx", "/generated/pcd-hero-bg.png"],
  ["src/app/cli/page.tsx", "/generated/cli-hero-bg.png"],
  ["src/app/sdks/page.tsx", "/generated/sdks-hero-bg.png"],
  ["src/app/bpu/page.tsx", "/generated/bpu-hero-bg.png"],
  ["src/app/compliance/page.tsx", "/generated/compliance-hero-bg.png"],
  ["src/app/lifter/page.tsx", "/generated/lifter-hero-bg.png"],
  ["src/app/transpiler/page.tsx", "/generated/transpiler-hero-bg.png"],
  ["src/app/features/page.tsx", "/generated/features-hero-bg.png"],
  ["src/app/foundations/page.tsx", "/generated/foundations-hero-bg.png"],
]);

describe("Product hero imagery", () => {
  it("utility product wrappers keep background image support in the shared hero contract", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("backgroundImageSrc?: string;");
    expect(content).toContain("backgroundImageSrc={hero.backgroundImageSrc}");
    expect(content).toContain("opacity-[0.84]");
    expect(content).toContain("mix-blend-screen opacity-[0.26]");
    expect(content).toContain("blueprint-grid opacity-[0.08]");
  });

  it("product routes wire dedicated generated hero assets", () => {
    for (const [route, asset] of routeToAsset.entries()) {
      const content = read(route);
      expect(content).toContain(asset);
    }
  });

  it("all generated product hero assets exist in the public tree", () => {
    for (const asset of routeToAsset.values()) {
      expect(
        fs.existsSync(path.join(ROOT, "public", asset.replace(/^\//, ""))),
        `Missing generated product hero asset for ${asset}`,
      ).toBe(true);
    }
  });

  it("dark metric cards use an opaque base fill instead of a translucent overlay", () => {
    const content = read("src/components/HomeProofArtifacts.tsx");
    expect(content).toContain('dark ? "border-white/12 bg-[#0f1a28]" : "border-border/80 bg-background/90"');
  });
});
