import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

describe("Buyer persona fit — Staff / Principal Engineer", () => {
  it("Hero keeps the marketing hook while anchoring the proof chain", () => {
    const content = read("src/components/HeroSection.tsx");
    expect(content).toContain("the first programming language");
    expect(content).toContain("designed for AI");
    expect(content).toContain("learns the entire language in one prompt");
    expect(content).toContain("Compile · Certify · Publish");
    expect(content).toContain("same explicit grammar your team reviews");
    expect(content).toContain('<MonomerGrid variant="hero" />');
    expect(content).not.toContain("Live surface");
  });

  it("PCD speaks to reviewability and source stability", () => {
    const content = read("src/components/PCDSection.tsx");
    expect(content).toContain("PCD is the review anchor.");
    expect(content).toContain("Source notation can change. The bounded blueprint stays legible.");
    expect(content).toContain("One canonical blueprint");
    expect(content).toContain("Closure before promotion");
  });

  it("Platform frames the workbench around artifact state and reuse", () => {
    const content = read("src/components/PlatformSection.tsx");
    expect(content).toContain("Proof state should stay attached to the artifact.");
    expect(content).toContain("Traceable package state");
    expect(content).toContain("Browse the registry");
    expect(content).toContain("Reusable bounded assets");
  });

  it("TrustedBySection names technical audiences instead of broad consumer industries", () => {
    const content = read("src/components/TrustedBySection.tsx");
    expect(content).toContain("Platform Engineering");
    expect(content).toContain("AI Engineering");
    expect(content).toContain("Formal Methods");
    expect(content).toContain("Runtime Owners");
  });

  it("Home exposes explicit claim boundaries for technical evaluation", () => {
    const boundaries = read("src/components/HomeClaimBoundariesSection.tsx");
    expect(boundaries).toContain("What BRIK64 claims, and what it does not.");
    expect(boundaries).toContain("Core operations");
    expect(boundaries).toContain("Extended operations");
    expect(boundaries).toContain("Runtime and external systems");
  });
});
