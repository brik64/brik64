import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Design system docs — canonical site grammar", () => {
  it("defines the current grammar, archetypes, and migration criteria", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("Current canonical site grammar");
    expect(content).toContain("Page archetypes");
    expect(content).toContain("Product Surface");
    expect(content).toContain("Editorial Surface");
    expect(content).toContain("Risk / Use-Case Surface");
    expect(content).toContain("Utility / Company Surface");
    expect(content).toContain("Retired Route");
    expect(content).toContain("What counts as migrated");
    expect(content).toContain("CLI -> PCD -> platform -> registry -> proof");
  });

  it("documents prohibited patterns and the CTA canon", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("CTA canon");
    expect(content).toContain("primary: teal background, white text");
    expect(content).toContain("external links: visible arrow or external-link icon");
    expect(content).toContain("Prohibited patterns");
    expect(content).toContain("grids of 3-6 equivalent cards as the main object of a section");
    expect(content).toContain("HeroWireframe");
  });

  it("keeps qualified claims and historical notes separated from the live canon", () => {
    const content = read("docs/DESIGN-SYSTEM.md");
    expect(content).toContain("Qualified claims");
    expect(content).toContain("Historical appendix");
    expect(content).toContain("Earlier versions of the site experimented");
  });
});

describe("Design system rollout notes stay historical", () => {
  it("points readers to the live grammar and preserves the PCD-specific migration notes", () => {
    const rollout = read("docs/DESIGN-SYSTEM-ROLLOUT.md");
    expect(rollout).toContain("Historical rollout notes");
    expect(rollout).toContain("current canonical site grammar now lives in the live design system page");
    expect(rollout).toContain("PCD page migration");
    expect(rollout).toContain("Format Surface");
    expect(rollout).toContain("Syntax Workbench");
    expect(rollout).toContain("Domain Surface");
    expect(rollout).toContain("EvaAlgebraArtifact");
    expect(rollout).toContain("Do not reintroduce `CopyableCode`");
  });
});
