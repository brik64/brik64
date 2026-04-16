import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const homeFiles = [
  "src/app/page.tsx",
  "src/app/layout.tsx",
  "src/components/StructuredData.tsx",
  "src/components/Navbar.tsx",
  "src/components/vnext/home.tsx",
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

  it("keeps the new proposition, product path, and bounded entry anchors visible", () => {
    const home = read("src/components/vnext/home.tsx");

    expect(home).toContain("Compile, certify, publish.");
    expect(home).toContain("The front door shows the system before the theory.");
    expect(home).toContain("Keep one canonical blueprint between source and targets.");
    expect(home).toContain("Choose your path");
  });

  it("keeps home page composition focused on the vNext poster-first structure", () => {
    const page = read("src/app/page.tsx");
    expect(page).toContain("<VNextHome />");
    expect(page).toContain("<Navbar />");
    expect(page).toContain("<Footer />");
    expect(page).not.toContain("<ProblemSection />");
    expect(page).not.toContain("<PlatformSection />");
  });
});
