import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

import { auditedUtilityWrapperPages, read } from "./site-grammar";

describe("Public wrapper visual grammar", () => {
  for (const [file, key] of auditedUtilityWrapperPages) {
    it(`${file} stays on the shared utility wrapper`, () => {
      const content = read(file);
      expect(content).toContain("UtilityPageView");
      expect(content).toContain(`utilityPages.${key}`);
    });
  }

  it("CanonicalPageHero now uses the dark-first vNext hero grammar", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("radial-gradient(circle_at_top,rgba(0,229,255,0.16)");
    expect(content).toContain("hero-light-grid");
    expect(content).toContain("hero-light-glow");
    expect(content).not.toContain("HeroWireframeClient");
    expect(content).not.toContain("from-[#f0fdff]");
  });

  it("utility surfaces keep explicit kind routing", () => {
    expect(utilityPages.docs.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.login.secondarySurface?.kind).toBe("action");
    expect(utilityPages.contactSales.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.support.secondarySurface?.kind).toBe("docs");
  });
});
