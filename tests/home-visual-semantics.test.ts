import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");
const pageFile = path.join(ROOT, "src/app/page.tsx");
const homeFile = path.join(ROOT, "src/components/vnext/home.tsx");

function read(filePath: string): string {
  return fs.readFileSync(filePath, "utf-8");
}

describe("Home semantics — vNext poster-first landing", () => {
  it("routes the homepage through the vNext home component", () => {
    const page = read(pageFile);
    expect(page).toContain("VNextHome");
    expect(page).not.toContain("HeroSection");
    expect(page).not.toContain("ProblemSection");
    expect(page).not.toContain("CTASection");
  });

  it("keeps the new hero proposition and bounded CTA budget", () => {
    const home = read(homeFile);
    expect(home).toContain("Compile, certify, publish.");
    expect(home).toContain("Open platform");
    expect(home).toContain("Read docs");
    expect(home).not.toContain("TrustedBySection");
    expect(home).not.toContain("HomeClaimBoundariesSection");

    const primaryButtons = (home.match(/<ButtonVNext href=/g) ?? []).length;
    expect(primaryButtons).toBeGreaterThanOrEqual(2);
  });

  it("uses product-led surfaces instead of hero card soup", () => {
    const home = read(homeFile);
    expect(home).toContain("ProductFrame");
    expect(home).toContain("The front door shows the system before the theory.");
    expect(home).toContain("Four product objects. One operating model.");
    expect(home).toContain("Choose your path");
    expect(home).toContain("CommandChip");
  });
});
