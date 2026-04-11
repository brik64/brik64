import { describe, expect, it } from "vitest";

import {
  productCorePages,
  productMigratedPages,
  read,
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

  it("enterprise route delegates to the shared utility grammar with substantive dataset content", () => {
    const content = read("src/app/enterprise/page.tsx");
    const data = read("src/lib/utility-page-data.ts");
    expect(content).toContain("UtilityPageView");
    expect(content).toContain("utilityPages.enterprise");
    expect(data).toContain("Private delivery, identity controls");
    expect(data).toContain("SSO / SAML / OIDC + SCIM");
    expect(data).toContain("supports audit and review workflows; it does not certify organizations by itself");
  });

  it("compliance now uses the evidence dossier grammar", () => {
    const content = read("src/app/compliance/page.tsx");
    expect(content).toContain("RiskEvidenceSurface");
    expect(content).toContain("ConstraintEnvelopeSurface");
    expect(content).toContain("Evidence path");
    expect(content).not.toContain("full regulatory certification");
  });

  it("ai-agents route is a direct technical reference with setup detail", () => {
    const content = read("src/app/ai-agents/page.tsx");
    expect(content).toContain("CanonicalPageLayout");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("ConstraintEnvelopeSurface");
    expect(content).toContain("ScenarioFlowSurface");
    expect(content).toContain("Agent setup matrix");
    expect(content).toContain("No trust by default");
    expect(content).not.toContain("UtilityPageView");
  });

  it("utility dataset remains the content source of truth for migrated utility-product routes", () => {
    const data = read("src/lib/utility-page-data.ts");
    expect(data).toContain("enterprise:");
    expect(data).toContain("aiAgents:");
    expect(data.length).toBeGreaterThan(25000);
  });
});
