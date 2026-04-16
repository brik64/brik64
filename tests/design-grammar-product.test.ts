import { describe, expect, it } from "vitest";

import {
  featureCta,
  featureHero,
  featureOverview,
  featureSections,
} from "../src/lib/features-page-data";
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

  it("core product routes still expose product surfaces or route through vNext product wrappers", () => {
    for (const file of productCorePages) {
      if (file === "src/app/page.tsx") continue;
      const content = read(file);
      expect(
        content.includes("FeatureMatrixSurface") ||
          content.includes("EvidenceSurface") ||
          content.includes("ComparisonSurface") ||
          content.includes("PageSectionHeader") ||
          content.includes("Artifact") ||
          content.includes("HeroSection") ||
          content.includes("UtilityPageView"),
        `${file} should expose canonical product surfaces`,
      ).toBe(true);
    }
  });

  it("ActionAnchor infers external affordances for absolute, mailto, and tel links", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("/^(https?:|mailto:|tel:)/.test(action.href)");
    expect(content).toContain("<ExternalLink");
    expect(content).not.toContain("Proof strip");
    expect(content).not.toContain("utility surface");
    expect(content).not.toContain("action rail");
    expect(content).not.toContain("docs rail");
  });

  it("features keeps claim discipline and product-directed CTA routing", () => {
    const page = read("src/app/features/page.tsx");
    const visibleRuntimeText = JSON.stringify({
      hero: featureHero,
      overview: featureOverview,
      sections: featureSections,
      cta: featureCta,
    });

    expect(visibleRuntimeText).not.toContain("No other compiler on earth");
    expect(visibleRuntimeText).not.toContain("100% liftability guarantee");
    expect(visibleRuntimeText).not.toContain("What this page is promising");
    expect(visibleRuntimeText).not.toContain("30 seconds");
    expect(visibleRuntimeText).toContain('"href":"/platform"');
    expect(page).not.toContain('href="/pricing"');
  });
});
