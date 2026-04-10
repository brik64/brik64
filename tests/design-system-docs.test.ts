import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("Design system docs — canonical site grammar", () => {
  it("documents the current site grammar and the audience calibration", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("Current canonical site grammar");
    expect(content).toContain("Audience calibration");
    expect(content).toContain("Staff / Principal Engineer");
    expect(content).toContain("CLI -> PCD -> platform -> registry -> proof");
    expect(content).toContain("generic feature clouds");
  });

  it("makes the current canon win over the legacy notes", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("the canon above wins");
    expect(content).toContain("REGLA LEGACY");
    expect(content).toContain("Inconsistencias legacy");
  });

  it("keeps the PCD product canon explicit", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("Format Surface");
    expect(content).toContain("Syntax Workbench");
    expect(content).toContain("Domain Surface");
    expect(content).toContain("EvaAlgebraArtifact");
    expect(content).toContain("Extended Monomers");
  });
});

describe("Design system rollout notes stay historical", () => {
  it("points readers at the live grammar instead of the rollout draft", () => {
    if (fs.existsSync(path.join(ROOT, "docs/DESIGN-SYSTEM-ROLLOUT.md"))) {
      const rollout = read("docs/DESIGN-SYSTEM-ROLLOUT.md");
      expect(rollout).toContain("Historical rollout notes");
      expect(rollout).toContain("current canonical site grammar now lives in the live design system page");
    }
  });
});
