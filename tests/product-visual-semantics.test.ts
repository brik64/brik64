import { describe, expect, it } from "vitest";

import {
  productCorePages,
  productMigratedPages,
  productRestoredPages,
  read,
  utilityRestoredPages,
} from "./site-grammar";

describe("Product cluster — core routes keep their canonical artifacts", () => {
  it("platform now routes through a bounded vNext product wrapper", () => {
    const content = read("src/app/platform/page.tsx");
    expect(content).toContain("UtilityPageView");
    expect(content).toContain("platformPage");
    expect(content).toContain("Open registry");
    expect(content).toContain("Read docs");
    expect(content).not.toContain("HeroWireframe");
  });

  it("registry still uses canonical evidence surfaces instead of monomer noise", () => {
    const content = read("src/app/registry/page.tsx");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).not.toContain("MonomerShowcase");
  });

  it("pcd keeps the blueprint, syntax, domain, and EVA artifacts", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("function SyntaxWorkbench");
    expect(content).toContain("function DomainSurface");
    expect(content).toContain("function MonomerCatalogSurface");
    expect(content).toContain("function EvaAlgebraArtifact");
    expect(content).toContain("<BlueprintHubArtifact compact />");
    expect(content).toContain("<MonomerFamilyBoard />");
    expect(content).not.toContain("MonomerShowcase");
    expect(content).not.toContain("CopyableCode");
  });

  it("lifter, transpiler, sdks, bpu, features, and foundations still expose proof-first surfaces", () => {
    for (const file of productCorePages) {
      const content = read(file);
      if (file === "src/app/page.tsx" || file === "src/app/platform/page.tsx" || file === "src/app/registry/page.tsx" || file === "src/app/pcd/page.tsx") {
        continue;
      }
      expect(
        content.includes("EvidenceSurface") ||
          content.includes("FeatureMatrixSurface") ||
          content.includes("ComparisonSurface"),
        `${file} should keep canonical product surfaces`,
      ).toBe(true);
    }
  });

  it("features now routes its clusters through bounded surfaces instead of legacy bullet clouds", () => {
    const content = read("src/app/features/page.tsx");
    expect(content).toContain("renderFeatureSurface");
    expect(content).toContain("FeatureSectionBlock");
    expect(content).toContain("ConstraintEnvelopeSurface");
    expect(content).toContain("ScenarioFlowSurface");
    expect(content).not.toContain("section.features.map(");
    expect(content).not.toContain("Why this page changed");
  });
});

describe("Product cluster — migrated pages adopt the shared cadence", () => {
  for (const file of productMigratedPages) {
    it(`${file} uses the canonical page shell`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageLayout");
      expect(content).toContain("CanonicalPageHero");
      expect(content).toContain("CanonicalSection");
      expect(content).toContain("ArchetypeSectionHeader");
      expect(content).not.toContain("CopyableCode");
    });
  }

  it("cli now uses a bounded install artifact instead of terminal stacks", () => {
    const content = read("src/app/cli/page.tsx");
    expect(content).toContain("ConstraintEnvelopeSurface");
    expect(content).toContain("ScenarioFlowSurface");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("brikc quickstart");
    expect(content).not.toContain("CopyableCode");
  });

  it("compliance now uses the evidence dossier grammar", () => {
    const content = read("src/app/compliance/page.tsx");
    expect(content).toContain("RiskEvidenceSurface");
    expect(content).toContain("ConstraintEnvelopeSurface");
    expect(content).toContain("Evidence path");
    expect(content).not.toContain("full regulatory certification");
  });

  it("utility dataset remains the content source of truth for migrated utility-product routes", () => {
    const data = read("src/lib/utility-page-data.ts");
    expect(data).toContain("enterprise:");
    expect(data).toContain("aiAgents:");
    expect(data.length).toBeGreaterThan(25000);
  });
});

describe("Product and commercial routes — restored direct pages keep substantive structure", () => {
  for (const file of [...productRestoredPages, ...utilityRestoredPages]) {
    it(`${file} is a direct page instead of a wrapper shell`, () => {
      const content = read(file);
      expect(content).not.toContain("UtilityPageView");
      expect(content).toContain("Navbar");
      expect(content).toContain("Footer");
    });
  }

  it("pricing now routes through the utility wrapper dataset", () => {
    const content = read("src/app/pricing/page.tsx");
    expect(content).toContain("UtilityPageView");
    expect(content).toContain("utilityPages.pricing");
  });

  it("enterprise now routes through the utility wrapper dataset", () => {
    const content = read("src/app/enterprise/page.tsx");
    expect(content).toContain("UtilityPageView");
    expect(content).toContain("utilityPages.enterprise");
  });

  it("investors now routes through the utility wrapper dataset", () => {
    const content = read("src/app/investors/page.tsx");
    expect(content).toContain("UtilityPageView");
    expect(content).toContain("utilityPages.investors");
  });

  it("ai-agents restores the richer technical reference surface", () => {
    const content = read("src/app/ai-agents/page.tsx");
    expect(content).toContain("Agent setup matrix");
    expect(content).toContain("Machine-readable reference");
    expect(content).toContain("policy circuits");
    expect(content).toContain("structured diagnostics");
    expect(content).toContain("No trust by default");
  });
});
