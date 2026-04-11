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

  it("CanonicalPageHero no longer emits generic proof-strip copy by default", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).not.toContain("Proof strip");
    expect(content).not.toContain("One bounded object summarises the page before the body expands it.");
    expect(content).not.toContain("The hero keeps the hook, but the proof strip carries state");
    expect(content).not.toContain("page surface");
  });

  it("utility surfaces require explicit status labels instead of generic pills", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("status={statusLabel ? (");
    expect(content).not.toContain("utility surface");
    expect(content).not.toContain("action rail");
    expect(content).not.toContain("docs rail");
  });

  it("company thesis surfaces no longer force a proof badge by default", () => {
    const content = read("src/components/PageArchetypes.tsx");
    const companyThesisBlock = content.split("export function CompanyThesisSurface")[1]?.split(
      "export function ActionSurface",
    )[0];
    expect(companyThesisBlock).toBeTruthy();
    expect(companyThesisBlock).toMatch(/status=\{\s*status \?\?/);
    expect(companyThesisBlock).not.toContain("ProofBadge");
  });

  it("audited wrappers keep route-specific shapes after the rewrite", () => {
    expect(utilityPages.about.primarySurface.thesis).toBe(true);
    expect(utilityPages.contact.secondarySurface?.kind).toBe("action");
    expect(utilityPages.download.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.pricing.secondarySurface?.kind).toBe("action");
    expect(utilityPages.investors.primarySurface.thesis).toBe(true);
    expect(utilityPages.shop.cta?.actions[0]?.href).toBe("/contact");
  });
});
