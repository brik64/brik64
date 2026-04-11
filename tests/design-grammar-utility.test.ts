import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

import {
  read,
  utilityDirectPages,
  utilityRestoredPages,
  utilityWrapperPages,
} from "./site-grammar";

describe("Design grammar — utility and company family", () => {
  for (const [file, key] of utilityWrapperPages) {
    it(`${file} delegates to the shared utility view`, () => {
      const content = read(file);
      expect(content).toContain("UtilityPageView");
      expect(content).toContain(`utilityPages.${key}`);
      expect(content).not.toContain("CopyableCode");
    });
  }

  for (const file of utilityDirectPages) {
    it(`${file} still uses the canonical utility shell`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageLayout");
      expect(content).toContain("CanonicalPageHero");
      expect(content).toContain("DocsRailSurface");
    });
  }

  for (const file of utilityRestoredPages) {
    it(`${file} is a restored direct page and not a wrapper`, () => {
      const content = read(file);
      expect(content).not.toContain("UtilityPageView");
      expect(content).toContain("Navbar");
      expect(content).toContain("Footer");
    });
  }

  it("PageArchetypes exports the utility-specific surfaces", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("export function UtilitySurface");
    expect(content).toContain("export function CompanyThesisSurface");
    expect(content).toContain("export function ActionSurface");
    expect(content).toContain("export function DocsRailSurface");
    expect(content).toContain("export function UtilityPageView");
  });

  it("utility page data keeps the route-specific grammar explicit", () => {
    expect(utilityPages.playground.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.docs.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.login.sectionHeader.eyebrow).toBe("Auth Surface");
    expect(utilityPages.signup.sectionHeader.eyebrow).toBe("Auth Surface");
  });
});
