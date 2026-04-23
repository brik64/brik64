import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Alternative home route", () => {
  it("keeps the evaluation route separate from the canonical homepage and disables indexing", () => {
    const page = read("src/app/home-alt/page.tsx");

    expect(page).toContain('title: "Homepage Alternative"');
    expect(page).toContain("index: false");
    expect(page).toContain("follow: false");
    expect(page).toContain("<Navbar />");
    expect(page).toContain("<AlternativeHome />");
  });

  it("implements the ten-section public-first homepage structure", () => {
    const source = read("src/components/vnext/alternative-home.tsx");

    const requiredAnchors = [
      'id="hero"',
      'id="two-layers"',
      'id="why-now"',
      'id="how-it-works"',
      'id="core-capabilities"',
      'id="boundaries-trust"',
      'id="proof-surfaces"',
      'id="incremental-adoption"',
      'id="platform-staff-teams"',
      'id="final-cta"',
    ];

    for (const anchor of requiredAnchors) {
      expect(source).toContain(anchor);
    }

    expect(source).toContain("Two layers. One formal system.");
    expect(source).toContain("Software generation became cheap. Formal control and governance did not.");
    expect(source).toContain("One formal chain. From generation to governed artifact.");
    expect(source).toContain("Ready to formalize your generated software?");
  });

  it("keeps claim discipline and the strategic footer links visible", () => {
    const source = read("src/components/vnext/alternative-home.tsx");

    const banned = [
      "free forever",
      "effortless",
      "revolutionary",
      "zero config",
      "world-leading",
    ];

    for (const phrase of banned) {
      expect(source.toLowerCase()).not.toContain(phrase);
    }

    expect(source).toContain("contract-bounded");
    expect(source).toContain("Trust & Boundaries");
    expect(source).toContain("CLI & SDKs");
    expect(source).toContain("Theory (Digital Circuitality)");
    expect(source).toContain("Status");
  });
});
