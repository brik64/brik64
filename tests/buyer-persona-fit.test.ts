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
    expect(content).toContain("Representative monomer families, proof state, and outputs stay visible.");
  });

  it("PCD speaks to teams and agents, not only to AI hype", () => {
    const content = read("src/components/PCDSection.tsx");
    expect(content).toContain("Teach your agent PCD. Install the official skills now.");
    expect(content).toContain("same PCD grammar, EVA composition, and BRIK64 operations");
    expect(content).toContain("Shared grammar");
    expect(content).toContain("Closure before shipping");
  });

  it("Platform frames the workbench around proof and reuse", () => {
    const content = read("src/components/PlatformSection.tsx");
    expect(content).toContain("CAD for software, built for teams that need proof.");
    expect(content).toContain("inspectable workbench");
    expect(content).toContain("Browse the registry");
    expect(content).toContain("Reuse certified circuits by project");
  });

  it("TrustedBySection names technical audiences instead of broad consumer industries", () => {
    const content = read("src/components/TrustedBySection.tsx");
    expect(content).toContain("Platform Engineering");
    expect(content).toContain("AI Engineering");
    expect(content).toContain("Formal Methods");
    expect(content).toContain("Runtime Owners");
  });

  it("Enterprise and verticals stay scoped and technical", () => {
    const enterprise = read("src/components/EnterpriseSection.tsx");
    const verticals = read("src/components/VerticalsSection.tsx");
    expect(enterprise).toContain("Request architecture review");
    expect(enterprise).toContain("Platform teams need explicit scope");
    expect(verticals).toContain("High-assurance domains need explicit scope.");
    expect(verticals).toContain("runtime bugs are not acceptable");
  });
});
