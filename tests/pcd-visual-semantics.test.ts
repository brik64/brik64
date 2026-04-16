import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const pcdPage = path.join(ROOT, "src/app/pcd/page.tsx");
const designSystemDoc = path.join(ROOT, "docs/DESIGN-SYSTEM-VNEXT.md");
const rolloutDoc = path.join(ROOT, "docs/DESIGN-SYSTEM-ROLLOUT.md");

function read(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

describe("PCD page — canonical visual system", () => {
  it("keeps the new protagonist artifacts in source", () => {
    const content = read(pcdPage);

    expect(content).toContain("function SyntaxWorkbench");
    expect(content).toContain("function DomainSurface");
    expect(content).toContain("function MonomerCatalogSurface");
    expect(content).toContain("function EvaAlgebraArtifact");
    expect(content).toContain("<PageSectionHeader");
  });

  it("does not regress to legacy syntax/domain code blocks", () => {
    const content = read(pcdPage);

    expect(content).not.toContain("CopyableCode");
    expect(content).not.toContain('{evaOps.map((op) => (');
    expect(content).not.toContain("Program Structure");
    expect(content).not.toContain("Variables & Functions");
    expect(content).not.toContain("Loops & Closures");
  });

  it("documents vNext as the live canon while keeping rollout notes historical", () => {
    const designSystem = read(designSystemDoc);
    const rollout = read(rolloutDoc);

    expect(designSystem).toContain("Surface Grammar");
    expect(designSystem).toContain("Chip System");
    expect(designSystem).not.toContain("HeroWireframe");
    expect(rollout).toContain("PCD page migration");
    expect(rollout).toContain("Format Surface");
    expect(rollout).toContain("Syntax Workbench");
    expect(rollout).toContain("Domain Surface");
    expect(rollout).toContain("EvaAlgebraArtifact");
    expect(rollout).toContain("Do not reintroduce `CopyableCode`");
  });
});
