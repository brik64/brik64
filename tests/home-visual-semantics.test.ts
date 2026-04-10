import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("Home semantics — canonical artifact grammar", () => {
  it("keeps the hero hook but anchors it in the proof chain", () => {
    const hero = read("src/components/HeroSection.tsx");
    expect(hero).toContain("the first programming language");
    expect(hero).toContain("designed for AI");
    expect(hero).toContain("learns the entire language in one prompt");
    expect(hero).toContain("Compile · Certify · Publish");
    expect(hero).toContain("Operator proof chain");
  });

  it("keeps platform centered on the registry workbench plus one supporting surface", () => {
    const platform = read("src/components/PlatformSection.tsx");
    expect(platform).toContain("<RegistryWorkbenchArtifact />");
    expect(platform).toContain("FeatureMatrixSurface");
    expect(platform).toContain("Platform Surface");
    expect(platform).toContain("Browse the registry");
  });

  it("keeps blueprint installation tied to one bounded payload surface", () => {
    const pcd = read("src/components/PCDSection.tsx");
    expect(pcd).toContain("<BlueprintHubArtifact />");
    expect(pcd).toContain("FeatureMatrixSurface");
    expect(pcd).toContain("Blueprint Surface");
    expect(pcd).toContain("Teach your agent PCD. Install the official skills now.");
  });

  it("keeps editors and compliance on evidence-oriented surfaces", () => {
    const editors = read("src/components/EditorsSection.tsx");
    const compliance = read("src/components/ComplianceSection.tsx");
    expect(editors).toContain("<EditorControlArtifact />");
    expect(editors).toContain("EvidenceSurface");
    expect(compliance).toContain("<EvidenceDossierArtifact />");
    expect(compliance).toContain("Evidence mapping");
  });
});

describe("Home semantics — artifact-led sections remain present", () => {
  it("keeps workflow, integrations, problem, verticals and foundation on protagonist artifacts", () => {
    expect(read("src/components/WorkflowSection.tsx")).toContain("<WorkflowRailArtifact />");
    expect(read("src/components/IntegrationsSection.tsx")).toContain("<IntegrationRelayArtifact />");
    expect(read("src/components/ProblemSection.tsx")).toContain("<ProblemFrameArtifact />");
    expect(read("src/components/VerticalsSection.tsx")).toContain("<RiskCaseBoardArtifact />");
    expect(read("src/components/WorldModelsSection.tsx")).toContain("<GuaranteeMatrixArtifact />");
  });

  it("keeps trusted-by as a structured technical audience strip", () => {
    const trusted = read("src/components/TrustedBySection.tsx");
    expect(trusted).toContain("BUILT FOR");
    expect(trusted).toContain("Platform Engineering");
    expect(trusted).toContain("Technical Leadership");
    expect(trusted).toContain("bounded operational claims");
  });
});
