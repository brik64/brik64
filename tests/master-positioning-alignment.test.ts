import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Master positioning alignment", () => {
  it("stores the new master positioning document inside the repo", () => {
    const master = read("docs/brik_64_final_positioning_brand_web_cmo_system.md");

    expect(master).toContain("working master document for BRIK64");
    expect(master).toContain("BRIK64 is the formal layer for AI-era software.");
    expect(master).toContain("BRIK64 is the operational distillation");
    expect(master).toContain("Staff Engineer");
    expect(master).toContain("Principal Engineer");
    expect(master).toContain("Platform Lead");
  });

  it("aligns scope, design, cmo, and research docs to the new master source", () => {
    const scope = read("docs/content-marketing-scope.md");
    const cmo = read("docs/perspectives/03-CMO.md");
    const design = read("docs/DESIGN-SYSTEM-VNEXT.md");
    const research = read("docs/research/brik64-content.md");

    expect(scope).toContain("docs/brik_64_final_positioning_brand_web_cmo_system.md");
    expect(scope).toContain("Canonical Strategy Source");
    expect(cmo).toContain("supporting perspective, not the master");
    expect(cmo).toContain("docs/brik_64_final_positioning_brand_web_cmo_system.md");
    expect(design).toContain("Strategic parent document");
    expect(design).toContain("docs/brik_64_final_positioning_brand_web_cmo_system.md");
    expect(research).toContain("historical content extraction");
    expect(research).toContain("docs/brik_64_final_positioning_brand_web_cmo_system.md");
  });
});
