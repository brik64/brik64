import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const homeFiles = [
  "src/components/HeroSection.tsx",
  "src/components/ProblemSection.tsx",
  "src/components/HardwareDisciplineSection.tsx",
  "src/components/PCDSection.tsx",
  "src/components/WorkflowSection.tsx",
  "src/components/PlatformSection.tsx",
  "src/components/AINativeSection.tsx",
  "src/components/HomeClaimBoundariesSection.tsx",
  "src/components/CTASection.tsx",
] as const;

const blockedFrames = [
  "The AI-native synthetic language",
  "the first programming language",
  "designed for AI",
  "CAD for software",
  "zero runtime surprises",
  "if it compiles, it's correct",
  "zero defects by design",
] as const;

describe("Home brand posture", () => {
  it("anchors the site on the formal-layer thesis", () => {
    const hero = read("src/components/HeroSection.tsx");
    expect(hero).toContain("BRIK64 is the formal layer");
    expect(hero).toContain("for AI-era programming");
    expect(hero).toContain("formal language, a canonical blueprint, and a compilation path");
  });

  it("answers the hardware-style discipline question explicitly", () => {
    const hardware = read("src/components/HardwareDisciplineSection.tsx");
    expect(hardware).toContain("What if software behaved more like hardware?");
    expect(hardware).toContain("Not as a literal equivalence.");
    expect(hardware).toContain("Blueprint before emission");
    expect(hardware).toContain("Reuse with identity");
  });

  it("removes blocked home frames from source", () => {
    const combined = homeFiles.map((file) => read(file)).join("\n");

    for (const phrase of blockedFrames) {
      expect(combined).not.toContain(phrase);
    }
  });

  it("keeps the home order aligned to the formal-layer narrative", () => {
    const page = read("src/app/page.tsx");
    const expectedOrder = [
      "<ProblemSection />",
      "<HardwareDisciplineSection />",
      "<PCDSection />",
      "<WorkflowSection />",
      "<PlatformSection />",
      "<AINativeSection />",
      "<HomeClaimBoundariesSection />",
      "<CTASection />",
    ];

    const positions = expectedOrder.map((token) => page.indexOf(token));
    expect(positions.every((position) => position >= 0)).toBe(true);

    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1]);
    }
  });
});
