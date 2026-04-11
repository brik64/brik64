import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

import { read } from "./site-grammar";

const redesignedRoutes = [
  ["src/app/about/page.tsx", "about"],
  ["src/app/contact/page.tsx", "contact"],
  ["src/app/download/page.tsx", "download"],
  ["src/app/pricing/page.tsx", "pricing"],
  ["src/app/faq/page.tsx", "faq"],
  ["src/app/legal/page.tsx", "legal"],
  ["src/app/investors/page.tsx", "investors"],
  ["src/app/shop/page.tsx", "shop"],
  ["src/app/enterprise/page.tsx", "enterprise"],
] as const;

const bannedPlaceholderPhrases = [
  "This route",
  "The page should",
  "This page should",
  "Use this page",
  "utility surface",
  "action rail",
  "docs rail",
];

describe("Wrapper route redesign coverage", () => {
  for (const [file, key] of redesignedRoutes) {
    it(`${file} is wired to UtilityPageView and utilityPages.${key}`, () => {
      const source = read(file);
      expect(source).toContain("UtilityPageView");
      expect(source).toContain(`utilityPages.${key}`);
      expect(source.includes("<Navbar")).toBe(false);
      expect(source.includes("<Footer")).toBe(false);
    });
  }

  it("dataset content for redesigned routes avoids placeholder language", () => {
    const asText = JSON.stringify(
      Object.fromEntries(redesignedRoutes.map(([, key]) => [key, utilityPages[key]])),
    );

    for (const phrase of bannedPlaceholderPhrases) {
      expect(asText).not.toContain(phrase);
    }
  });
});
