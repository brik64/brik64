import { describe, expect, it } from "vitest";

import {
  productCorePages,
  productMigratedPages,
  read,
} from "./site-grammar";

describe("Design grammar — product family", () => {
  const productPages = [...productCorePages, ...productMigratedPages];

  for (const file of productPages) {
    it(`${file} stays out of the legacy code-window grammar`, () => {
      const content = read(file);
      expect(content).not.toContain("CopyableCode");
      expect(content).not.toContain("MonomerShowcase");
    });
  }

  for (const file of productMigratedPages) {
    it(`${file} uses the canonical product shell`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageLayout");
      expect(content).toContain("CanonicalPageHero");
      expect(content).toContain("ArchetypeSectionHeader");
      expect(content).toContain('className="mx-auto mt-10 grid max-w-6xl gap-6"');
    });
  }

  it("core product routes still expose product surfaces or artifacts, not generic wrappers", () => {
    for (const file of productCorePages) {
      const content = read(file);
      expect(
        content.includes("FeatureMatrixSurface") ||
          content.includes("EvidenceSurface") ||
          content.includes("ComparisonSurface") ||
          content.includes("PageSectionHeader") ||
          content.includes("Artifact") ||
          content.includes("HeroSection"),
        `${file} should expose canonical product surfaces`,
      ).toBe(true);
    }
  });

  it("ActionAnchor infers external affordances for absolute, mailto, and tel links", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("/^(https?:|mailto:|tel:)/.test(action.href)");
    expect(content).toContain("<ExternalLink");
  });
});
