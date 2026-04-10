import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("Buyer persona fit — Staff / Principal Engineer", () => {
  it("frames the problem as drift, ambiguity and review-path failure", () => {
    const problem = read("src/components/ProblemSection.tsx");
    expect(problem).toContain("Teams still need certifiable structure.");
    expect(problem).toContain("finite material, explicit domains, and circuits that must close before they ship.");
  });

  it("keeps PCD focused on shared grammar, closure and domains", () => {
    const pcd = read("src/components/PCDSection.tsx");
    expect(pcd).toContain("same PCD grammar, EVA composition, and BRIK64 operations");
    expect(pcd).toContain("Grammar");
    expect(pcd).toContain("Closure");
    expect(pcd).toContain("Domains");
  });

  it("frames platform and enterprise around proof, review path and scope", () => {
    const platform = read("src/components/PlatformSection.tsx");
    const enterprise = read("src/components/EnterpriseSection.tsx");
    expect(platform).toContain("teams that need proof");
    expect(platform).toContain("Review path");
    expect(enterprise).toContain("Platform teams need explicit scope");
    expect(enterprise).toContain("Request architecture review");
  });

  it("keeps technical audiences explicit in the closing surfaces", () => {
    const trusted = read("src/components/TrustedBySection.tsx");
    const cta = read("src/components/CTASection.tsx");
    expect(trusted).toContain("Platform Engineering");
    expect(trusted).toContain("AI Engineering");
    expect(cta).toContain("verify the proof chain before you change your workflow");
  });
});
