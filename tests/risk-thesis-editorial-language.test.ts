import { describe, expect, it } from "vitest";

import { thesisPages } from "@/lib/risk-page-data";

const auditedThesisKeys = ["ai", "blockchain", "safetyCritical"] as const;

const bannedThesisPhrases = [
  "The page should",
  "This page should",
  "Use this page",
  "Use the blockchain page",
  "promissory copy",
];

describe("Risk thesis editorial language", () => {
  for (const key of auditedThesisKeys) {
    it(`${key} keeps domain language bounded and public`, () => {
      const page = thesisPages[key];
      const visibleCopy = JSON.stringify(page);

      for (const phrase of bannedThesisPhrases) {
        expect(visibleCopy).not.toContain(phrase);
      }

      expect(/\bsurface\b/i.test(visibleCopy)).toBe(false);
      expect(/\bartifact\b/i.test(visibleCopy)).toBe(false);
      expect(page.hero.metrics.some((metric) => metric.label === "Where BRIK-64 enters")).toBe(
        true,
      );
      expect(page.hero.metrics.some((metric) => metric.label === "Workflow")).toBe(true);
      expect(page.sectionHeader.title).toContain("software boundary");
      expect(page.scenario.title).toContain("engineering loop");
    });
  }

  it("each thesis page includes an explicit claim boundary", () => {
    const pages = auditedThesisKeys.map((key) => thesisPages[key]);
    for (const page of pages) {
      const claimText = page.constraint.constraints.map((row) => row.body).join(" ");
      expect(claimText).toContain("does not");
    }
  });
});
