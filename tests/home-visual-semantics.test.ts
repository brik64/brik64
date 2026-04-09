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

function read(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

describe("Home semantics — official circuit closure notation", () => {
  const files = [
    ["Workflow", workflowFile],
    ["AI Native", aiNativeFile],
    ["Verticals", verticalsFile],
  ] as const;

  const forbiddenPatterns = [
    /\bPhi_c\b/,
    /\bΦ_c\b/,
    /\b1\.000\b/,
    /Φc\s*=\s*1\.000/,
    /Phi_c\s*=\s*1/,
  ];

  for (const [label, file] of files) {
    const content = read(file);

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
  it("PCD keeps the blueprint map connected to the code view", () => {
    const content = read(pcdFile);
    expect(content).toContain("Blueprint map");
    expect(content).toContain("One semantic circuit. Many materials.");
    expect(content).toContain("What PCD preserves");
    expect(content).toContain("View blueprint");
    expect(content).toContain("Compile to");
    expect(content).toContain("Active view");
    expect(content).toContain("Canonical representation");
    expect(content).toContain("Select the blueprint or a target.");
  });

  it("PCD no longer uses the old disconnected slogan-only chip cloud", () => {
    const content = read(pcdFile);
    expect(content).not.toContain("One blueprint. Any material.");
    expect(content).not.toContain("Visual analogy");
  });

  it("Workflow keeps state panels for all three stages", () => {
    const content = read(workflowFile);
    expect(content).toContain("Connection state");
    expect(content).toContain("Certification state");
    expect(content).toContain("Registry state");
    expect(content).toContain("Next stage");
  });

  it("AI Native keeps flow and proof panels", () => {
    const content = read(aiNativeFile);
    expect(content).toContain("Intent");
    expect(content).toContain("Blueprint");
    expect(content).toContain("Check");
    expect(content).toContain("Proof");
    expect(content).toContain("Closure proof");
  });

  it("Compliance keeps evidence-sheet presentation", () => {
    const content = read(complianceFile);
    expect(content).toContain("Evidence package");
    expect(content).toContain("Report snapshot");
    expect(content).toContain("Ready for audit");
    expect(content).toContain("not blanket compliance");
  });

  it("Verticals keeps critical constraint presentation", () => {
    const content = read(verticalsFile);
    expect(content).toContain("Critical constraint");
    expect(content).toContain("Proof signal");
    expect(content).toContain("Capital exposure bounded");
    expect(content).toContain("Device bounds explicit");
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
