import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("Design system docs — canonical grammar", () => {
  it("documents the current site grammar and the technical audience calibration", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("Current canonical site grammar");
    expect(content).toContain("Audience calibration");
    expect(content).toContain("Staff / Principal Engineer");
    expect(content).toContain("CLI -> PCD -> platform -> registry -> proof");
    expect(content).toContain("Resource shelves without a clear protagonist surface");
  });

  it("makes the current canon win over the legacy notes", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("the canon above wins");
    expect(content).toContain("REGLA LEGACY");
    expect(content).toContain("Inconsistencias legacy");
  });
});
