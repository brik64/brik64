import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

import {
  read,
  utilityDirectPages,
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

  it("PageArchetypes exports the utility-specific surfaces", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("export function UtilitySurface");
    expect(content).toContain("export function CompanyThesisSurface");
    expect(content).toContain("export function ActionSurface");
    expect(content).toContain("export function DocsRailSurface");
    expect(content).toContain("export function UtilityPageView");
  });

  it("utility page data keeps the route-specific grammar explicit", () => {
    expect(utilityPages.about.primarySurface.thesis).toBe(true);
    expect(utilityPages.contact.secondarySurface?.kind).toBe("action");
    expect(utilityPages.docs.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.shop.primarySurface.title).toContain("responsibly communicate");
    expect(utilityPages.login.sectionHeader.eyebrow).toBe("Auth Surface");
    expect(utilityPages.signup.sectionHeader.eyebrow).toBe("Auth Surface");
  });
});
