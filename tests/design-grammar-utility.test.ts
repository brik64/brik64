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
      expect(content).not.toContain("<Navbar");
      expect(content).not.toContain("<Footer");
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

  it("all restored commercial routes now sit on the shared wrapper", () => {
    expect(utilityRestoredPages).toHaveLength(0);
    expect(utilityWrapperPages).toContainEqual(["src/app/pricing/page.tsx", "pricing"]);
    expect(utilityWrapperPages).toContainEqual(["src/app/investors/page.tsx", "investors"]);
    expect(utilityWrapperPages).toContainEqual(["src/app/enterprise/page.tsx", "enterprise"]);
  });

  it("utility page data includes the new footer routes", () => {
    expect(utilityPages.contactSales.hero.eyebrow).toBe("Contact Sales");
    expect(utilityPages.privacyPolicy.hero.eyebrow).toBe("Privacy Policy");
    expect(utilityPages.startups.hero.eyebrow).toBe("Startups");
    expect(utilityPages.communityGuides.secondarySurface?.kind).toBe("docs");
    expect(utilityPages.login.sectionHeader.eyebrow).toBe("Auth");
    expect(utilityPages.signup.sectionHeader.eyebrow).toBe("Auth");
  });
});
