import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const blockedReportedPhrases = [
  "The operator path starts with one bounded command workflow.",
  "The CLI route shows the install path, command grammar, and verification loop in one consistent product cadence.",
  "This route explains what enterprise teams can operationalize today and where legal/compliance programs require separate controls.",
  "Hover or focus any core monomer in the matrix to inspect its family, signature, and proof posture.",
  "live surface",
] as const;

const contentAnchors: Record<string, readonly string[]> = {
  "src/app/pricing/page.tsx": [
    "PACKAGING MODEL",
    "FEATURE COMPARISON",
    "COMMERCIAL FAQ",
    "Free",
    "Pro",
    "Team",
    "Enterprise",
  ],
  "src/app/investors/page.tsx": [
    "[01] THE OPPORTUNITY",
    "[04] BUSINESS MODEL",
    "[05] COMPETITIVE MOAT",
    "[06] ROADMAP",
    "[07] INTELLECTUAL PROPERTY",
  ],
  "src/app/enterprise/page.tsx": [
    "[01] CAPABILITIES",
    "[03] USE CASES",
    "[04] COMPLIANCE",
    "[05] ENTERPRISE HANDOFF",
  ],
  "src/app/ai-agents/page.tsx": [
    "Agent setup matrix",
    "Machine-readable reference",
    "policy circuits",
    "No trust by default",
  ],
  "src/components/HeroSection.tsx": [
    "THE FORMAL LAYER FOR AI-ERA PROGRAMMING",
    "BEYOND VIBE CODING",
    "BRIK64 turns generated and existing software into formal, portable, testable blueprints.",
    "Software generation got fast. BRIK64 makes it formal.",
  ],
  "src/components/MonomerGrid.tsx": [
    "onMouseOver",
    "Inspect monomer MC",
  ],
};

describe("User reported regression guard", () => {
  it("keeps blocked placeholder phrases out of the edited sources", () => {
    const combined = Object.keys(contentAnchors).map((file) => read(file)).join("\n");

    for (const phrase of blockedReportedPhrases) {
      expect(combined).not.toContain(phrase);
    }
  });

  it("keeps recovered content anchors for core commercial and AI routes", () => {
    for (const [file, anchors] of Object.entries(contentAnchors)) {
      const source = read(file);
      for (const anchor of anchors) {
        expect(source).toContain(anchor);
      }
    }
  });

  const baseUrl = process.env.SITE_BASE_URL;

  if (baseUrl) {
    for (const route of ["/", "/pricing", "/investors", "/enterprise", "/ai-agents", "/cli"] as const) {
      it(`runtime HTML for ${route} excludes reported placeholders`, async () => {
        const response = await fetch(`${baseUrl}${route}`);
        expect(response.ok).toBe(true);
        const html = await response.text();

        for (const phrase of blockedReportedPhrases) {
          expect(html).not.toContain(phrase);
        }
      });
    }
  }
});
