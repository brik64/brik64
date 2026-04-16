import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

const auditedWrapperKeys = [
  "about",
  "contact",
  "download",
  "legal",
] as const;

const bannedWrapperPhrases = [
  "The page should",
  "This page should",
  "This route",
  "Use this page",
  "Use the",
  "Proof strip",
  "page surface",
  "utility surface",
  "action rail",
  "docs rail",
];

describe("Public wrapper editorial language", () => {
  for (const key of auditedWrapperKeys) {
    it(`${key} no longer ships meta copy or system labels`, () => {
      const visibleCopy = JSON.stringify(utilityPages[key]);

      for (const phrase of bannedWrapperPhrases) {
        expect(visibleCopy).not.toContain(phrase);
      }

      expect(/\bsurface\b/i.test(visibleCopy)).toBe(false);
      expect(/\bartifact\b/i.test(visibleCopy)).toBe(false);
    });
  }

  it("about explains the company through the public stack", () => {
    const about = utilityPages.about;
    expect(about.hero.description).toContain("formal language");
    expect(about.primarySurface.title).toContain("compiler path");
    expect(about.cta?.actions.map((action) => action.href)).toContain("/platform");
  });
});
