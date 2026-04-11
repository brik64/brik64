import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const homeFiles = [
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/components/StructuredData.tsx",
  "src/components/Navbar.tsx",
  "src/components/ProblemSection.tsx",
  "src/components/HardwareDisciplineSection.tsx",
  "src/components/PCDSection.tsx",
  "src/components/WorkflowSection.tsx",
  "src/components/PlatformSection.tsx",
  "src/components/AINativeSection.tsx",
  "src/components/HomeClaimBoundariesSection.tsx",
  "src/components/CTASection.tsx",
] as const;

const bannedPhrases = [
  "The AI-native synthetic language",
  "Teach your agent PCD. Install the official skills now.",
  "CAD for software",
  "Tell your AI what to build. The compiler proves it's correct.",
  "the first programming language",
  "designed for AI",
  "zero runtime surprises",
  "if it compiles, it's correct",
  "zero defects by design",
] as const;

describe("Home editorial refactor guard", () => {
  it("removes the old homepage framing and metadata slogans", () => {
    for (const file of homeFiles) {
      const content = read(file);
      for (const phrase of bannedPhrases) {
        expect(content).not.toContain(phrase);
      }
    }
  });

  it("keeps the formal-layer thesis, workflow, and boundary anchors visible", () => {
    const hero = read("src/components/HeroSection.tsx");
    const workflow = read("src/components/WorkflowSection.tsx");
    const boundaries = read("src/components/HomeClaimBoundariesSection.tsx");

    expect(hero).toContain("BRIK64 is the formal layer");
    expect(workflow).toContain("Lift, model, check, emit, and publish in one visible chain.");
    expect(boundaries).toContain("What the formal layer proves, and where the boundary stops.");
  });

  it("keeps home page composition focused on thesis, hardware-style discipline, workflow, platform, AI, and boundaries", () => {
    const page = read("src/app/page.tsx");
    expect(page).toContain("<ProblemSection />");
    expect(page).toContain("<HardwareDisciplineSection />");
    expect(page).toContain("<PCDSection />");
    expect(page).toContain("<WorkflowSection />");
    expect(page).toContain("<PlatformSection />");
    expect(page).toContain("<AINativeSection />");
    expect(page).toContain("<HomeClaimBoundariesSection />");
    expect(page).not.toContain("<LanguagesSection />");
    expect(page).not.toContain("<ComplianceSection />");
  });
});
