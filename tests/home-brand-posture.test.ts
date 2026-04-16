import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const homeFiles = [
  "src/app/page.tsx",
  "src/components/vnext/home.tsx",
  "src/components/Navbar.tsx",
  "src/components/Footer.tsx",
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
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("Compile, certify, publish.");
    expect(home).toContain("bounded blueprints teams can review");
    expect(home).toContain("Keep one canonical blueprint between source and targets.");
    expect(home).toContain("Open platform");
  });

  it("keeps the product-first posture explicit", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("The front door shows the system before the theory.");
    expect(home).toContain("Four product objects. One operating model.");
    expect(home).toContain("Why teams use it");
  });

  it("removes blocked home frames from source", () => {
    const combined = homeFiles.map((file) => read(file)).join("\n");

    for (const phrase of blockedFrames) {
      expect(combined).not.toContain(phrase);
    }
  });

  it("keeps the home order aligned to the vNext poster-first narrative", () => {
    const page = read("src/app/page.tsx");
    const expectedOrder = [
      "<Navbar />",
      "<VNextHome />",
      "<Footer />",
    ];

    const positions = expectedOrder.map((token) => page.indexOf(token));
    expect(positions.every((position) => position >= 0)).toBe(true);

    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1]);
    }
  });
});
