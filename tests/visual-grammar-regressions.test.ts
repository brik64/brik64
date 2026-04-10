import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("Visual grammar regressions — product surfaces stay unified", () => {
  it("platform no longer uses a primary two-column feature-card grid", () => {
    const content = read("src/components/PlatformSection.tsx");
    expect(content).not.toContain("sm:grid-cols-2");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).not.toContain("hover:border-teal/30");
  });

  it("pcd section no longer renders a four-card key-point cloud", () => {
    const content = read("src/components/PCDSection.tsx");
    expect(content).not.toContain("lg:grid-cols-4");
    expect(content).not.toContain("group rounded-3xl");
    expect(content).toContain("FeatureMatrixSurface");
  });

  it("editors no longer renders a chip-band as its supporting payload", () => {
    const content = read("src/components/EditorsSection.tsx");
    expect(content).not.toContain("flex flex-wrap justify-center gap-x-8");
    expect(content).toContain("EvidenceSurface");
  });

  it("compliance no longer leads with a standards grid and progress bars", () => {
    const content = read("src/components/ComplianceSection.tsx");
    expect(content).not.toContain("lg:grid-cols-3");
    expect(content).not.toContain("style={{ width:");
    expect(content).toContain("Evidence mapping");
    expect(content).toContain("<EvidenceDossierArtifact />");
  });

  it("cta no longer renders three standalone resource cards", () => {
    const content = read("src/components/CTASection.tsx");
    expect(content).not.toContain("sm:grid-cols-3");
    expect(content).toContain("ArtifactFrame");
    expect(content).toContain("ExternalLink");
  });

  it("trusted-by no longer renders a pure typographic cloud", () => {
    const content = read("src/components/TrustedBySection.tsx");
    expect(content).not.toContain("flex flex-wrap items-center justify-center");
    expect(content).toContain("bounded operational claims");
    expect(content).toContain("grid gap-0 md:grid-cols-2");
  });
});

describe("Visual grammar regressions — pcd route stays aligned with home", () => {
  it("uses structured surfaces instead of key-property card clouds", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain("FeatureMatrixSurface");
    expect(content).not.toContain("sm:grid-cols-2 lg:grid-cols-3");
    expect(content).toContain("PCD Next Step");
  });
});
