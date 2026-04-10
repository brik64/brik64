import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

// File paths from the other agent's context (inferred from common structures)
const artifactFile = "src/components/HomeProofArtifacts.client.tsx";
const pageFile = "src/app/page.tsx";
const pcdFile = "src/components/PCDSection.tsx";
const platformFile = "src/components/PlatformSection.tsx";
const enterpriseFile = "src/components/EnterpriseSection.tsx";

describe("Home semantics — official circuit closure notation", () => {
  it("uses the official closure notation", () => {
    const artifactContent = read(artifactFile);
    expect(artifactContent.includes("<PhiC /> = 1") || artifactContent.includes("Φc = 1")).toBe(true);
  });
});

describe("Home visuals — new narrative panels remain present", () => {
  it("Hero keeps the hype hook but adds technical proof language", () => {
    const content = read("src/components/HeroSection.tsx");
    expect(content).toContain("the first programming language");
    expect(content).toContain("designed for AI");
    expect(content).toContain("Compile · Certify · Publish");
    expect(content).toContain("Ready now");
  });

  it("PCD keeps the blueprint map and AI skills onboarding", () => {
    const content = read(pcdFile);
    expect(content).toContain("<BlueprintHubArtifact />");
    expect(content).toContain("Teach your agent PCD. Install the official skills now.");
    expect(content).toContain("github.com/brik64-admin/brik64-skills");
  });

  it("Platform uses the registry workbench artifact", () => {
    const content = read(platformFile);
    expect(content).toContain("<RegistryWorkbenchArtifact />");
    expect(content).not.toContain("<MonomerShowcase");
  });

  it("Enterprise now uses product surfaces instead of a flat feature grid", () => {
    const content = read(enterpriseFile);
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).toContain("Commercial support wraps around the same certifiable core.");
  });
});

describe("Site grammar — headers and buttons", () => {
  it("Home sections use HomeSectionHeader", () => {
    const content = read(pcdFile);
    expect(content).toContain("HomeSectionHeader");
    expect(content).not.toContain("<PageSectionHeader");
  });

  it("Hero and CTA use the shared home button component", () => {
    const hero = read("src/components/HeroSection.tsx");
    const cta = read("src/components/CTASection.tsx");
    expect(hero).toContain("HomePrimaryButton");
    expect(hero).toContain("HomeSecondaryButton");
    expect(cta).toContain("HomePrimaryButton");
  });
});

describe("Home composition — canonical section order stays intact", () => {
  it("page.tsx preserves the reviewed section order", () => {
    const content = read(pageFile);
    const expectedOrder = [
      "<ProblemSection />",
      "<PCDSection />",
      "<LanguagesSection />",
      "<PlatformSection />",
      "<WorldModelsSection />",
      "<WorkflowSection />",
      "<IntegrationsSection />",
      "<EditorsSection />",
      "<EnterpriseSection />",
      "<AINativeSection />",
      "<ComplianceSection />",
      "<VerticalsSection />",
    ];

    const positions = expectedOrder.map((token) => content.indexOf(token));
    expect(positions.every((position) => position >= 0)).toBe(true);

    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1]);
    }
  });
});
