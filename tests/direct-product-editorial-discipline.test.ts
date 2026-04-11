import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Direct product editorial discipline", () => {
  it("foundations distinguishes theorem, analogy, implication, and claim boundary", () => {
    const content = read("src/app/foundations/page.tsx");
    expect(content).toContain("Theorem, analogy, product implication, and claim boundary");
    expect(content).toContain("SEQ, PAR, and COND are the three composition moves the formal model needs");
    expect(content).not.toContain("The science is real.");
    expect(content).not.toContain("110,000+ tests");
    expect(content).not.toContain("0 admits");
    expect(content).not.toContain("guaranteed to work");
  });

  it("bpu is framed as software now and hardware roadmap later", () => {
    const content = read("src/app/bpu/page.tsx");
    expect(content).toContain("hardware roadmap");
    expect(content).toContain("Current availability is software-based");
    expect(content).not.toContain("No software can override it");
    expect(content).not.toContain("The chip says no, and that's final");
  });

  it("pcd stays a technical reference page instead of an ad", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("A bounded computational format");
    expect(content).toContain("Agent-readable format");
    expect(content).toContain("Read the format, then install the toolchain.");
    expect(content).not.toContain("The math is the guarantee");
    expect(content).not.toContain("Generate certified PCD in seconds");
    expect(content).not.toContain("Start building");
  });
});
