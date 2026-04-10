import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

const productPages = [
  "src/app/platform/page.tsx",
  "src/app/registry/page.tsx",
  "src/app/pcd/page.tsx",
  "src/app/cli/page.tsx",
  "src/app/lifter/page.tsx",
  "src/app/transpiler/page.tsx",
  "src/app/sdks/page.tsx",
  "src/app/bpu/page.tsx",
  "src/app/features/page.tsx",
  "src/app/foundations/page.tsx",
] as const;

function productPagesWithH2() {
  return productPages.filter((file) => read(file).includes("<h2"));
}

describe("Product cluster — section titles stay centered and teal", () => {
  it("keeps all product h2 section headings teal in source", () => {
    for (const file of productPagesWithH2()) {
      const content = read(file);
      const offending = content
        .split("\n")
        .filter((line) => line.includes("<h2") && !line.includes("text-teal"));

      expect(offending, `${file} has non-teal section titles`).toEqual([]);
      expect(content, `${file} should keep section titles centered`).toContain("text-center");
    }
  });
});

describe("Product cluster — monomer showcase regressions are removed", () => {
  for (const file of productPages) {
    it(`${file} no longer renders the legacy monomer showcase`, () => {
      expect(read(file)).not.toContain("MonomerShowcase");
    });
  }
});

describe("Product cluster — each route now leans on canonical artifacts", () => {
  it("platform removes the old forge/analyzer sections and keeps the workbench narrative", () => {
    const content = read("src/app/platform/page.tsx");
    expect(content).toContain("<RegistryWorkbenchArtifact />");
    expect(content).toContain("<WorkflowRailArtifact />");
    expect(content).toContain("<MonomerSpotlightPair");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).not.toContain("<ForgeSection");
    expect(content).not.toContain("<CircuitAnalyzerSection");
  });

  it("registry uses evidence and feature surfaces instead of monomer noise", () => {
    const content = read("src/app/registry/page.tsx");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).toContain("EvidenceSurface");
    expect(content).not.toContain("MonomerShowcase");
  });

  it("pcd promotes the blueprint artifact before the family board", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("<BlueprintHubArtifact compact />");
    expect(content).toContain("<MonomerFamilyBoard />");
    expect(content).not.toContain("MonomerShowcase");
  });

  it("pcd replaces legacy code stacks with centered syntax and domain artifacts", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("function SyntaxWorkbench");
    expect(content).toContain("function DomainSurface");
    expect(content).toContain("mx-auto mt-8 grid max-w-6xl gap-6");
    expect(content).toContain("A small grammar with explicit circuit boundaries.");
    expect(content).toContain("Domains define the legal input envelope before evaluation starts.");
    expect(content).not.toContain('CopyableCode title="Program Structure"');
    expect(content).not.toContain('CopyableCode title="Domain Syntax"');
  });

  it("pcd gives EVA algebra a single protagonist artifact instead of three flat cards", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("function EvaAlgebraArtifact");
    expect(content).toContain("Three operators build larger circuits without changing the proof model.");
    expect(content).toContain("A small policy circuit using all EVA operators");
    expect(content).toContain("FlowNode");
    expect(content).not.toContain('{evaOps.map((op) => (');
  });

  it("lifter, transpiler, sdks, and bpu each retain proof-first surfaces", () => {
    expect(read("src/app/lifter/page.tsx")).toContain("EvidenceSurface");
    expect(read("src/app/transpiler/page.tsx")).toContain("EvidenceSurface");
    expect(read("src/app/sdks/page.tsx")).toContain("EvidenceSurface");
    expect(read("src/app/bpu/page.tsx")).toContain("EvidenceSurface");
  });

  it("bpu removes the chip diagram and keeps the roadmap as the primary visual artifact", () => {
    const content = read("src/app/bpu/page.tsx");
    expect(content).toContain("ROADMAP");
    expect(content).toContain("Roadmap surface");
    expect(content).toContain("The enforcement boundary at a glance.");
    expect(content).not.toContain("function BpuChipDiagram");
    expect(content).not.toContain("<BpuChipDiagram />");
    expect(content).not.toContain("64 MONOMER GATES");
    expect(content).not.toContain("TOP-DOWN ENFORCEMENT MAP");
  });

  it("transpiler upgrades the matrix and demo into centered artifacts", () => {
    const content = read("src/app/transpiler/page.tsx");
    expect(content).toContain("mx-auto mt-8 max-w-5xl overflow-hidden rounded-[1.9rem] border border-teal/15");
    expect(content).toContain("Verified intermediate substrate");
    expect(content).toContain("A migration run with proof attached");
    expect(content).toContain("100% migrated");
    expect(content).toContain("rounded-[1.75rem] border border-border/80 bg-background");
  });

  it("transpiler keeps validation and comparison as centered artifact surfaces", () => {
    const content = read("src/app/transpiler/page.tsx");
    expect(content).toContain("These three surfaces separate what the transpiler preserves, what changes in the target, and what remains outside the certified scope.");
    expect(content).toContain("mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br");
    expect(content).toContain("Formal reading");
    expect(content).toContain("text-center text-xs leading-relaxed italic");
    expect(content).not.toContain("The demo should read like an operational migration artifact");
  });

  it("sdks consolidates selector, install, and code into a single centered workbench", () => {
    const content = read("src/app/sdks/page.tsx");
    expect(content).toContain("[01] SDK WORKBENCH");
    expect(content).toContain("One substrate. Three host languages.");
    expect(content).toContain("mx-auto mt-8 max-w-5xl rounded-[1.9rem] border border-border/80 bg-gradient-to-br");
    expect(content).toContain("Selected runtime");
    expect(content).toContain("Core + bounded bridges");
    expect(content).toContain("These are the three composition moves exposed by the SDKs");
    expect(content).toContain("Composition surface");
    expect(content).not.toContain("The SDK page should read like a host-language control surface");
  });

  it("cli centers the install narrative and uses the newer install artifact treatment", () => {
    const content = read("src/app/cli/page.tsx");
    expect(content).toContain("mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground");
    expect(content).toContain("mx-auto mt-8 max-w-3xl");
    expect(content).toContain("flex flex-wrap justify-center gap-2");
    expect(content).toContain("rounded-[1.75rem] border border-border/80 bg-gradient-to-br");
    expect(content).not.toContain("flex border-b border-border bg-muted/30");
  });
});
