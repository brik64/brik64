import { describe, expect, it } from "vitest";

import { utilityPages } from "@/lib/utility-page-data";

import { read, utilityWrapperPages } from "./site-grammar";

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
  for (const [file, key] of utilityWrapperPages) {
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
      Object.fromEntries(utilityWrapperPages.map(([, key]) => [key, utilityPages[key]])),
    );

    for (const phrase of bannedPlaceholderPhrases) {
      expect(asText).not.toContain(phrase);
    }
  });
});
