import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const files = [
  "src/app/cli/page.tsx",
  "src/app/platform/page.tsx",
  "src/app/registry/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/enterprise/page.tsx",
  "src/app/investors/page.tsx",
  "src/app/ai-agents/page.tsx",
] as const;

const blockedFrames = [
  "CAD for software",
  "npm for verified code",
  "Every package carries a mathematical proof",
  "the first programming language",
  "designed for AI",
  "zero runtime surprises",
  "if it compiles, it's correct",
  "zero defects by design",
] as const;

describe("Core route brand posture", () => {
  it("keeps blocked legacy slogans out of the core routes", () => {
    const combined = files.map((file) => read(file)).join("\n");
    for (const phrase of blockedFrames) {
      expect(combined).not.toContain(phrase);
    }
  });

  it("positions cli as the entry point into the formal layer", () => {
    const content = read("src/app/cli/page.tsx");
    expect(content).toContain("Entry point into the");
    expect(content).toContain("formal layer.");
    expect(content).toContain("lift → model → check");
  });

  it("positions platform and registry as product layers instead of slogan routes", () => {
    const platform = read("src/app/platform/page.tsx");
    const registry = read("src/app/registry/page.tsx");

    expect(platform).toContain("UtilityPageView");
    expect(platform).toContain("governed packages");
    expect(registry).toContain("Reusable packages with");
    expect(registry).toContain("visible blueprint state.");
  });

  it("keeps pricing, enterprise, and investors aligned to the same formal-layer thesis", () => {
    const pricing = read("src/app/pricing/page.tsx");
    const enterprise = read("src/app/enterprise/page.tsx");
    const investors = read("src/app/investors/page.tsx");

    expect(pricing).toContain("UtilityPageView");
    expect(enterprise).toContain("UtilityPageView");
    expect(investors).toContain("UtilityPageView");
  });

  it("keeps ai agents subordinate to the formal-layer story", () => {
    const content = read("src/app/ai-agents/page.tsx");
    expect(content).toContain("The formal layer decides what can be trusted.");
    expect(content).toContain("external verification loop");
    expect(content).toContain("No trust by default");
  });
});
