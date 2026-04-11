import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const pageFile = path.join(ROOT, "src/app/page.tsx");
const heroFile = path.join(ROOT, "src/components/HeroSection.tsx");
const problemFile = path.join(ROOT, "src/components/ProblemSection.tsx");
const pcdFile = path.join(ROOT, "src/components/PCDSection.tsx");
const workflowFile = path.join(ROOT, "src/components/WorkflowSection.tsx");
const platformFile = path.join(ROOT, "src/components/PlatformSection.tsx");
const aiFile = path.join(ROOT, "src/components/AINativeSection.tsx");
const boundariesFile = path.join(ROOT, "src/components/HomeClaimBoundariesSection.tsx");
const ctaFile = path.join(ROOT, "src/components/CTASection.tsx");
const artifactFile = path.join(ROOT, "src/components/HomeProofArtifacts.tsx");
const artifactClientFile = path.join(ROOT, "src/components/HomeProofArtifacts.client.tsx");
const trustedByFile = path.join(ROOT, "src/components/TrustedBySection.tsx");

function read(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

describe("Home semantics — official closure notation", () => {
  const files = [
    ["Workflow", workflowFile],
    ["AI", aiFile],
    ["Artifacts", artifactFile],
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

describe("Home narrative — master refactor alignment", () => {
  it("hero keeps the previous hook and proof framing", () => {
    const content = read(heroFile);
    expect(content).toContain("the first programming language");
    expect(content).toContain("designed for AI");
    expect(content).toContain("learns the entire language in one prompt");
    expect(content).toContain("Compile · Certify · Publish");
    expect(content).toContain('<MonomerGrid variant="hero" />');
    expect(content).not.toContain("Live surface");
  });

  it("problem section frames semantic drift instead of generic language marketing", () => {
    const content = read(problemFile);
    expect(content).toContain("AI accelerates output. It also accelerates semantic drift.");
    expect(content).toContain("Mainstream languages optimize expression.");
    expect(content).toContain("Finite surface");
    expect(content).toContain("Explicit domains");
    expect(content).toContain("Closure before promotion");
  });

  it("PCD section frames the blueprint as the review anchor", () => {
    const section = read(pcdFile);
    const artifact = read(artifactClientFile);
    expect(section).toContain("PCD is the review anchor.");
    expect(section).toContain("Source notation can change. The bounded blueprint stays legible.");
    expect(section).toContain("One canonical blueprint");
    expect(section).toContain("Closure before promotion");
    expect(section).toContain("<BlueprintHubArtifact />");
    expect(artifact).toContain("PCD is the review anchor between source logic and emitted targets.");
  });

  it("workflow section makes the full review chain visible", () => {
    const section = read(workflowFile);
    const artifact = read(artifactFile);
    expect(section).toContain("One reviewable path from source to evidence.");
    expect(section).toContain("<WorkflowRailArtifact />");
    expect(artifact).toContain("Repository or PCD");
    expect(artifact).toContain("Canonical blueprint");
    expect(artifact).toContain("Closure + domains");
    expect(artifact).toContain("Evidence state");
    expect(artifact).toContain("Supported targets");
    expect(artifact).toContain("PR + registry");
  });

  it("platform section keeps the artifact and its proof state together", () => {
    const section = read(platformFile);
    const artifact = read(artifactFile);
    expect(section).toContain("Proof state should stay attached to the artifact.");
    expect(section).toContain("Reviewable registry rows");
    expect(section).toContain("Traceable package state");
    expect(section).toContain("Reusable bounded assets");
    expect(section).toContain("<RegistryWorkbenchArtifact />");
    expect(artifact).toContain("Proof state stays attached to the artifact.");
  });

  it("AI section keeps trust outside the model", () => {
    const section = read(aiFile);
    const artifact = read(artifactFile);
    expect(section).toContain("Use AI as a producer. Keep trust outside the model.");
    expect(section).toContain("Candidate logic, not trusted truth");
    expect(section).toContain("External verification loop");
    expect(section).toContain("Diagnostics drive repair");
    expect(section).toContain('href="/ai-agents"');
    expect(artifact).toContain("Generated logic enters an external verification loop.");
    expect(artifact).toContain("operator-visible state");
  });

  it("claim boundaries section states what is in and out of scope", () => {
    const content = read(boundariesFile);
    expect(content).toContain("What BRIK64 claims, and what it does not.");
    expect(content).toContain("Core operations");
    expect(content).toContain("Extended operations");
    expect(content).toContain("Blueprint checks");
    expect(content).toContain("Runtime and external systems");
    expect(content).toContain("Scope boundary");
  });

  it("closing CTA starts with a bounded workflow rather than a generic build prompt", () => {
    const content = read(ctaFile);
    expect(content).toContain("Start with one bounded workflow,");
    expect(content).toContain("Open the CLI");
    expect(content).toContain("Read PCD");
    expect(content).toContain("View platform");
    expect(content).toContain('title: "CLI"');
    expect(content).toContain('title: "PCD"');
    expect(content).toContain('title: "Platform"');
  });
});

describe("Home composition — section order matches the new thesis map", () => {
  it("page.tsx preserves the reduced homepage sequence", () => {
    const content = read(pageFile);
    const expectedOrder = [
      "<ProblemSection />",
      "<PCDSection />",
      "<WorkflowSection />",
      "<PlatformSection />",
      "<AINativeSection />",
      "<HomeClaimBoundariesSection />",
    ];

    const positions = expectedOrder.map((token) => content.indexOf(token));
    expect(positions.every((position) => position >= 0)).toBe(true);

    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1]);
    }

    expect(content).not.toContain("<LanguagesSection />");
    expect(content).not.toContain("<WorldModelsSection />");
    expect(content).not.toContain("<IntegrationsSection />");
    expect(content).not.toContain("<EditorsSection />");
    expect(content).not.toContain("<EnterpriseSection />");
    expect(content).not.toContain("<ComplianceSection />");
    expect(content).not.toContain("<VerticalsSection />");
  });
});

describe("Home buyer framing — technical audiences stay explicit", () => {
  it("trusted-by strip keeps technical buyers, not consumer-style sectors", () => {
    const content = read(trustedByFile);
    expect(content).toContain("Platform Engineering");
    expect(content).toContain("AI Engineering");
    expect(content).toContain("Formal Methods");
    expect(content).not.toContain("Aerospace");
    expect(content).not.toContain("Healthcare");
  });
});
