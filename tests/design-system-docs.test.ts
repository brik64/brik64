import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Design system docs — vNext canonical grammar", () => {
  it("marks the previous design system as legacy and points to vNext", () => {
    const legacy = read("docs/DESIGN-SYSTEM.md");
    expect(legacy).toContain("Legacy");
    expect(legacy).toContain("docs/DESIGN-SYSTEM-VNEXT.md");
    expect(legacy).toContain("Jura");
  });

  it("documents the vNext shell, tokens, and composition rules", () => {
    const content = read("docs/DESIGN-SYSTEM-VNEXT.md");
    expect(content).toContain("docs/brik_64_final_positioning_brand_web_cmo_system.md");
    expect(content).toContain("dark-first runtime");
    expect(content).toContain("Inter");
    expect(content).toContain("Manrope");
    expect(content).toContain("Geist Mono");
    expect(content).toContain("Jura reserved for visible `BRIK64` / `BRIK-64` brand wordmarks");
    expect(content).toContain("GitHub + stars");
    expect(content).toContain("Product");
    expect(content).toContain("Industries");
    expect(content).toContain("Docs");
    expect(content).toContain("Shop");
    expect(content).toContain("Pricing");
    expect(content).toContain("Blog");
    expect(content).toContain("opens `https://docs.brik64.dev` in a new tab");
    expect(content).toContain("first viewport reads as one composition");
    expect(content).toContain("full-bleed hero");
    expect(content).toContain("no hero cards by default");
    expect(content).toContain("no stats, rails, chip soup, or logo clouds in the hero");
    expect(content).toContain("official brand teal accent: `#00E5FF`");
    expect(content).toContain("brand wordmark: `Jura`");
    expect(content).toContain("announcement pills:");
    expect(content).toContain("must visually cut off any grid, glow, or hero texture behind them");
    expect(content).toContain("## Teal Taxonomy");
    expect(content).toContain("### 1. Announcement");
    expect(content).toContain("### 2. Status");
    expect(content).toContain("### 3. Section Label");
    expect(content).toContain("### 4. Chip");
    expect(content).toContain("blue-teal `Login` CTA");
    expect(content).toContain("Product` and `Industries` open mega dropdowns");
    expect(content).toContain("Pricing` and `Blog` stay as direct links");
  });
});
