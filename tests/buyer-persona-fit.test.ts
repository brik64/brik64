import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

describe("Buyer persona fit — Staff / Principal Engineer", () => {
  it("Hero anchors the site on the formal-layer thesis", () => {
    const content = read("src/components/HeroSection.tsx");
    expect(content).toContain("BRIK64 is the formal layer");
    expect(content).toContain("for AI-era programming");
    expect(content).toContain("formal language, a canonical blueprint, and a compilation path");
    expect(content).toContain("What if software behaved more like hardware?");
    expect(content).toContain('<MonomerGrid variant="hero" />');
    expect(content).not.toContain("Live surface");
  });

  it("PCD speaks to canonical blueprints and source stability", () => {
    const content = read("src/components/PCDSection.tsx");
    expect(content).toContain("PCD is the canonical blueprint.");
    expect(content).toContain("The syntax can change; the blueprint should stay stable.");
    expect(content).toContain("One canonical blueprint");
    expect(content).toContain("Model before emission");
  });

  it("Platform frames the workbench around publication, registry state, and reuse", () => {
    const content = read("src/components/PlatformSection.tsx");
    expect(content).toContain("The platform is where blueprints are published, discovered, and governed.");
    expect(content).toContain("Workspace library");
    expect(content).toContain("Registry rows");
    expect(content).toContain("Governed reuse");
  });

  it("TrustedBySection names technical audiences instead of broad consumer industries", () => {
    const content = read("src/components/TrustedBySection.tsx");
    expect(content).toContain("DESIGNED FOR");
    expect(content).toContain("Platform Engineering");
    expect(content).toContain("AI Engineering");
    expect(content).toContain("Formal Methods");
    expect(content).toContain("Runtime Owners");
  });

  it("Home exposes explicit claim boundaries for technical evaluation", () => {
    const boundaries = read("src/components/HomeClaimBoundariesSection.tsx");
    expect(boundaries).toContain("What the formal layer proves, and where the boundary stops.");
    expect(boundaries).toContain("Core operations");
    expect(boundaries).toContain("Extended operations");
    expect(boundaries).toContain("Runtime and external systems");
  });
});
