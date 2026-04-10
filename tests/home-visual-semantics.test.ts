import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const pageFile = path.join(ROOT, "src/app/page.tsx");
const workflowFile = path.join(ROOT, "src/components/WorkflowSection.tsx");
const aiNativeFile = path.join(ROOT, "src/components/AINativeSection.tsx");
const complianceFile = path.join(ROOT, "src/components/ComplianceSection.tsx");
const verticalsFile = path.join(ROOT, "src/components/VerticalsSection.tsx");
const pcdFile = path.join(ROOT, "src/components/PCDSection.tsx");
const problemFile = path.join(ROOT, "src/components/ProblemSection.tsx");
const languagesFile = path.join(ROOT, "src/components/LanguagesSection.tsx");
const artifactFile = path.join(ROOT, "src/components/HomeProofArtifacts.tsx");
const designKitFile = path.join(ROOT, "src/components/DesignKitSection.tsx");
const foundationFile = path.join(ROOT, "src/components/WorldModelsSection.tsx");
const integrationsFile = path.join(ROOT, "src/components/IntegrationsSection.tsx");
const editorsFile = path.join(ROOT, "src/components/EditorsSection.tsx");
const enterpriseFile = path.join(ROOT, "src/components/EnterpriseSection.tsx");
const customerStoriesFile = path.join(ROOT, "src/components/CustomerStoriesSection.tsx");
const forgeFile = path.join(ROOT, "src/components/forge/ForgeSection.tsx");
const circuitAnalyzerFile = path.join(ROOT, "src/components/forge/CircuitAnalyzerSection.tsx");
const phiCFile = path.join(ROOT, "src/components/PhiC.tsx");
const monomerArtifactsFile = path.join(ROOT, "src/components/MonomerArtifacts.tsx");

function read(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

describe("Home semantics — official circuit closure notation", () => {
  const files = [
    ["Workflow", workflowFile],
    ["AI Native", aiNativeFile],
    ["Verticals", verticalsFile],
    ["Home Proof Artifacts", artifactFile],
  ] as const;

  const forbiddenPatterns = [
    /\bPhi_c\b/,
    /\bΦ_c\b/,
    /\b1\.000\b/,
    /Φc\s*=\s*1\.000/,
    /Phi_c\s*=\s*1/,
  ];

  for (const [label, file] of files) {
    const content = `${read(file)}\n${read(artifactFile)}`;

    it(`${label} uses the official closure notation`, () => {
      expect(content.includes("<PhiC /> = 1") || content.includes("Φc = 1")).toBe(true);
    });

    for (const pattern of forbiddenPatterns) {
      it(`${label} rejects forbidden notation ${pattern}`, () => {
        expect(pattern.test(content)).toBe(false);
      });
    }
  }
});

describe("Site semantics — legacy closure notation stays out of product components", () => {
  const siteSemanticFiles = [
    ["Customer Stories", customerStoriesFile],
    ["Forge", forgeFile],
    ["Circuit Analyzer", circuitAnalyzerFile],
    ["PhiC primitive", phiCFile],
  ] as const;

  const forbiddenPatterns = [
    /\bPhi_c\b/,
    /\bΦ_c\b/,
    /\b1\.0000\b/,
    /Φc\s*=\s*1\.0000/,
  ];

  for (const [label, file] of siteSemanticFiles) {
    const content = read(file);

    it(`${label} rejects legacy closure notation`, () => {
      for (const pattern of forbiddenPatterns) {
        expect(pattern.test(content)).toBe(false);
      }
    });
  }
});

describe("Home visuals — sections migrated away from terminal demos", () => {
  const migratedSections = [
    ["Workflow", workflowFile],
    ["AI Native", aiNativeFile],
    ["Compliance", complianceFile],
    ["Verticals", verticalsFile],
  ] as const;

  const forbiddenTerminalMarkers = [
    "TERMINAL",
    "brikc ai",
    "brikc certify",
    "$ brikc",
    "#ff5f57",
    "#febc2e",
    "#28c840",
    "terminal:",
  ];

  for (const [label, file] of migratedSections) {
    const content = read(file);

    it(`${label} no longer contains terminal window chrome`, () => {
      for (const marker of forbiddenTerminalMarkers) {
        expect(content.includes(marker)).toBe(false);
      }
    });
  }
});

describe("Home visuals — new narrative panels remain present", () => {
  it("Hero keeps the hype hook but adds technical proof language", () => {
    const content = read(path.join(ROOT, "src/components/HeroSection.tsx"));
    expect(content).toContain("the first programming language");
    expect(content).toContain("designed for AI");
    expect(content).toContain("learns the entire language in one prompt");
    expect(content).toContain("Compile · Certify · Publish");
    expect(content).toContain("Representative monomer families, proof state, and outputs stay visible.");
  });

  it("PCD keeps the blueprint map connected to the code view", () => {
    const content = read(path.join(ROOT, "src/components/HomeProofArtifacts.client.tsx"));
    expect(content).toContain("Blueprint Hub");
    expect(content).toContain("PCD is the canonical circuit between languages.");
    expect(content).toContain("Active Blueprint View");
    expect(content).toContain("Select representation");
    expect(read(pcdFile)).toContain("<BlueprintHubArtifact />");
  });

  it("PCD no longer uses the old disconnected slogan-only chip cloud", () => {
    const content = read(artifactFile);
    expect(content).not.toContain("One blueprint. Any material.");
    expect(content).not.toContain("Visual analogy");
  });

  it("Workflow keeps state panels for all three stages", () => {
    const content = read(artifactFile);
    expect(content).toContain("Workflow Rail");
    expect(content).toContain("GitHub push");
    expect(content).toContain("brikc lift");
    expect(content).toContain("TCE proof");
    expect(read(workflowFile)).toContain("<WorkflowRailArtifact />");
  });

  it("AI Native keeps flow and proof panels", () => {
    const content = read(artifactFile);
    expect(content).toContain("Agent Proof Loop");
    expect(content).toContain("Compiler diagnostic");
    expect(content).toContain("Certified revision");
    expect(read(aiNativeFile)).toContain("<AgentProofLoopArtifact />");
  });

  it("Compliance keeps evidence-sheet presentation", () => {
    const content = read(artifactFile);
    expect(content).toContain("Evidence Dossier");
    expect(content).toContain("Report snapshot");
    expect(content).toContain("not a marketing claim");
    expect(read(complianceFile)).toContain("<EvidenceDossierArtifact />");
  });

  it("Verticals keeps critical constraint presentation", () => {
    const content = read(artifactFile);
    expect(content).toContain("Risk Case Board");
    expect(content).toContain("risk, constraint and proof");
    expect(content).toContain("capital exposure bounded");
    expect(content).toContain("device bounds explicit");
    expect(read(verticalsFile)).toContain("<RiskCaseBoardArtifact />");
  });

  it("Platform uses the registry workbench artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Registry Workbench");
    expect(content).toContain("auth/oauth2-handler");
    expect(content).toContain("certification metadata");
    expect(read(path.join(ROOT, "src/components/PlatformSection.tsx"))).toContain("<RegistryWorkbenchArtifact />");
    expect(read(path.join(ROOT, "src/components/PlatformSection.tsx"))).not.toContain("<MonomerShowcase");
  });

  it("Problem uses the problem frame artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Problem Frame");
    expect(content).toContain("verification gap");
    expect(content).toContain("Mainstream languages optimize expression. Teams still need certifiable structure.");
    expect(read(problemFile)).toContain("<ProblemFrameArtifact />");
  });

  it("Languages uses the language exchange artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Language Exchange");
    expect(content).toContain("Many source materials. One canonical circuit. Fourteen emission targets.");
    expect(content).toContain("PCD Blueprint");
    expect(read(languagesFile)).toContain("<LanguageExchangeArtifact />");
  });

  it("Foundation uses the guarantee matrix artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Guarantee Matrix");
    expect(content).toContain("One compiler. Every guarantee.");
    expect(content).toContain("Tier summary");
    expect(read(foundationFile)).toContain("<GuaranteeMatrixArtifact />");
  });

  it("Foundation now documents operation families through the monomer board", () => {
    const content = read(monomerArtifactsFile);
    expect(content).toContain("Operation Families");
    expect(content).toContain("Core · Certified");
    expect(content).toContain("Extended · Contract");
    expect(read(foundationFile)).toContain("<MonomerFamilyBoard />");
    expect(read(path.join(ROOT, "src/components/WorldModelsSection.tsx"))).not.toContain("<MonomerShowcase");
  });

  it("Integrations uses the integration relay artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Integration Relay");
    expect(content).toContain("Your code stays in GitHub. BRIK64 attaches proof to the same path.");
    expect(content).toContain("PR evidence");
    expect(read(integrationsFile)).toContain("<IntegrationRelayArtifact />");
  });

  it("Editors uses the editor control artifact", () => {
    const content = read(artifactFile);
    expect(content).toContain("Editor Control");
    expect(content).toContain("IDE workflow stays intact");
    expect(content).toContain("brikc lsp");
    expect(read(editorsFile)).toContain("<EditorControlArtifact />");
  });

  it("Enterprise now uses product surfaces instead of a flat feature grid", () => {
    const content = read(enterpriseFile);
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).toContain("Commercial support wraps around the same certifiable core.");
    expect(content).toContain("The commercial story stays bounded by the technical one.");
  });

  it("Platform and product pages expose the monomer surface artifact", () => {
    const monomerContent = read(monomerArtifactsFile);
    expect(monomerContent).toContain("Positive + Negative");
    expect(monomerContent).toContain("usageCount");
    expect(monomerContent).toContain("MonomerSvg");
    expect(monomerContent).toContain("MonomerSpotlightPair");
    expect(monomerContent).toContain("detail={monomer.signature.replace(\" → \", \" to \")}");
    expect(monomerContent).toContain("SolidMonomerTile");
    expect(read(path.join(ROOT, "src/app/platform/page.tsx"))).toContain("<MonomerSpotlightPair");
    expect(read(path.join(ROOT, "src/app/pcd/page.tsx"))).toContain("<BlueprintHubArtifact compact />");
    expect(read(path.join(ROOT, "src/app/pcd/page.tsx"))).not.toContain("<MonomerShowcase");

    const svgContent = read(path.join(ROOT, "src/components/MonomerSvg.tsx"));
    expect(svgContent).toContain('viewBox="0 0 340 340"');
    expect(svgContent).toContain('fontFamily=\'var(--font-jura), "Jura", system-ui, sans-serif\'');
    expect(svgContent).toContain('r="52"');
    expect(read(path.join(ROOT, "src/app/platform/page.tsx"))).toContain("leftOfficialNumber={0}");
    expect(read(path.join(ROOT, "src/app/platform/page.tsx"))).toContain("rightOfficialNumber={67}");
  });

  it("TrustedBySection now speaks to technical buyers rather than broad industries", () => {
    const content = read(path.join(ROOT, "src/components/TrustedBySection.tsx"));
    expect(content).toContain("Platform Engineering");
    expect(content).toContain("AI Engineering");
    expect(content).toContain("Formal Methods");
    expect(content).not.toContain("Aerospace");
    expect(content).not.toContain("Healthcare");
  });
});

describe("Home visuals — section titles are standardized", () => {
  const sectionFiles = [
    ["Problem", problemFile],
    ["PCD", pcdFile],
    ["Languages", languagesFile],
    ["Platform", path.join(ROOT, "src/components/PlatformSection.tsx")],
    ["Foundation", foundationFile],
    ["Workflow", workflowFile],
    ["Integrations", integrationsFile],
    ["Editors", editorsFile],
    ["Enterprise", enterpriseFile],
    ["AI Native", aiNativeFile],
    ["Compliance", complianceFile],
    ["Verticals", verticalsFile],
  ] as const;

  for (const [label, file] of sectionFiles) {
    const content = read(file);

    it(`${label} uses the centered teal home header`, () => {
      expect(content).toContain("HomeSectionHeader");
      expect(content).not.toContain("<PageSectionHeader");
    });
  }

  it("HomeSectionHeader and PageSectionHeader both render titles in teal", () => {
    const content = read(path.join(ROOT, "src/components/PageArtifacts.tsx"));
    expect(content).toContain("HomeSectionHeader");
    expect(content).toContain("PageSectionHeader");
    expect(content).toContain('titleClassName="text-teal"');
  });
});

describe("Home visuals — CTA buttons share one base", () => {
  it("Hero and CTA use the shared home button component", () => {
    const hero = read(path.join(ROOT, "src/components/HeroSection.tsx"));
    const cta = read(path.join(ROOT, "src/components/CTASection.tsx"));
    expect(hero).toContain("HomePrimaryButton");
    expect(hero).toContain("HomeSecondaryButton");
    expect(hero).not.toContain("BorderGradientButton");
    expect(hero).toContain("ExternalLink");
    expect(hero).toContain('className="opacity-80 hover:opacity-100"');
    expect(cta).toContain("HomePrimaryButton");
    expect(cta).not.toContain("StripeButton");
  });
});

describe("Blueprint CTA — AI skills onboarding", () => {
  it("PCD section points to the official skills repo", () => {
    const content = read(pcdFile);
    expect(content).toContain("Teach your agent PCD. Install the official skills now.");
    expect(content).toContain("github.com/brik64-admin/brik64-skills");
    expect(content).toContain("Install AI skills");
    expect(content).toContain("Give your agent the official BRIK64 skills");
  });
});

describe("Enterprise CTA — no black oval button", () => {
  it("Enterprise uses the shared secondary button instead of the old dark CTA", () => {
    const content = read(enterpriseFile);
    expect(content).toContain("HomeSecondaryButton");
    expect(content).toContain("Request architecture review");
    expect(content).not.toContain("rounded-full border border-foreground bg-foreground");
  });
});

describe("Design system — home proof artifacts are documented first", () => {
  it("DesignKitSection exposes the proof artifact family", () => {
    const content = read(designKitFile);
    expect(content).toContain("HOME PROOF ARTIFACTS");
    expect(content).toContain("Certification Artifacts");
    expect(content).toContain("SITE GRAMMAR");
    expect(content).toContain("<HomeProofArtifactsShowcase />");
    expect(content).toContain("HomePrimaryButton");
    expect(content).toContain("HomeSecondaryButton");
    expect(content).toContain("Problem Frame");
    expect(content).toContain("Language Exchange");
    expect(content).toContain("Guarantee Matrix");
    expect(content).toContain("Integration Relay");
    expect(content).toContain("Editor Control");
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
