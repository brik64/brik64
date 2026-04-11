import { describe, expect, it } from "vitest";

import {
  productCorePages,
  productMigratedPages,
  productRestoredPages,
  read,
  utilityRestoredPages,
} from "./site-grammar";

describe("Product cluster — core routes keep their canonical artifacts", () => {
  it("platform still exposes the workbench and monomer spotlight surfaces", () => {
    const content = read("src/app/platform/page.tsx");
    expect(content).toContain("<RegistryWorkbenchArtifact />");
    expect(content).toContain("<WorkflowRailArtifact />");
    expect(content).toContain("<MonomerSpotlightPair");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).not.toContain("<ForgeSection");
    expect(content).not.toContain("<CircuitAnalyzerSection");
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

  it("pricing restores detailed tiers, comparison, and FAQ", () => {
    const content = read("src/app/pricing/page.tsx");
    expect(content).toContain("Free");
    expect(content).toContain("Pro");
    expect(content).toContain("Team");
    expect(content).toContain("Enterprise");
    expect(content).toContain("FEATURE COMPARISON");
    expect(content).toContain("COMMERCIAL FAQ");
  });

  it("enterprise restores capabilities, workflow, use cases, and compliance boundary", () => {
    const content = read("src/app/enterprise/page.tsx");
    expect(content).toContain("[01] CAPABILITIES");
    expect(content).toContain("[02] WORKFLOW");
    expect(content).toContain("[03] USE CASES");
    expect(content).toContain("[04] COMPLIANCE");
    expect(content).toContain("does not certify organizations by itself");
  });

  it("investors restores category thesis, system form, roadmap, and IP posture", () => {
    const content = read("src/app/investors/page.tsx");
    expect(content).toContain("[01] THE OPPORTUNITY");
    expect(content).toContain("[02] THE PRODUCT");
    expect(content).toContain("[04] BUSINESS MODEL");
    expect(content).toContain("[06] ROADMAP");
    expect(content).toContain("[07] INTELLECTUAL PROPERTY");
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
