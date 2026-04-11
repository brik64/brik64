import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const directRouteFiles = [
  "src/app/pricing/page.tsx",
  "src/app/investors/page.tsx",
  "src/app/enterprise/page.tsx",
  "src/app/ai-agents/page.tsx",
] as const;

const blockedClaims = [
  "UtilityPageView",
  "every line of code is mathematically proven correct",
  "formal verification as a service",
  "code that doesn’t reach Φc = 1 never reaches production",
  "The future of software is verified.",
  "Start building — free",
] as const;

describe("Restored commercial and AI routes", () => {
  it("remain direct pages instead of collapsing back into wrappers", () => {
    for (const file of directRouteFiles) {
      const source = read(file);
      expect(source).not.toContain("UtilityPageView");
      expect(source).toContain("Navbar");
      expect(source).toContain("Footer");
    }
  });

  it("pricing keeps tier detail, matrix detail, and FAQ detail", () => {
    const source = read("src/app/pricing/page.tsx");
    expect(source).toContain("Free");
    expect(source).toContain("Pro");
    expect(source).toContain("Team");
    expect(source).toContain("Enterprise");
    expect(source).toContain("Core");
    expect(source).toContain("Platform");
    expect(source).toContain("Team & Governance");
    expect(source).toContain("COMMERCIAL FAQ");
  });

  it("investors keeps thesis, moat, roadmap, and IP posture without absolute market claims", () => {
    const source = read("src/app/investors/page.tsx");
    expect(source).toContain("[01] THE OPPORTUNITY");
    expect(source).toContain("[05] COMPETITIVE MOAT");
    expect(source).toContain("[06] ROADMAP");
    expect(source).toContain("[07] INTELLECTUAL PROPERTY");
    expect(source).toContain("Truth boundary");
  });

  it("enterprise keeps workflow and standards mapping without fake form theater", () => {
    const source = read("src/app/enterprise/page.tsx");
    expect(source).toContain("[02] WORKFLOW");
    expect(source).toContain("Standards mapping and claim boundary");
    expect(source).toContain("Request architecture review");
    expect(source).not.toContain('placeholder="Your name"');
    expect(source).not.toContain("Request Demo");
  });

  it("ai-agents keeps setup, machine-readable reference, and boundary language", () => {
    const source = read("src/app/ai-agents/page.tsx");
    expect(source).toContain("Agent setup matrix");
    expect(source).toContain("Machine-readable reference");
    expect(source).toContain("policy circuits");
    expect(source).toContain("No trust by default");
    expect(source).toContain("structured diagnostics");
  });

  it("blocked historical claims do not reappear in the restored routes", () => {
    const combined = directRouteFiles.map((file) => read(file)).join("\n");
    for (const phrase of blockedClaims) {
      expect(combined).not.toContain(phrase);
    }
  });

  const baseUrl = process.env.SITE_BASE_URL;

  if (baseUrl) {
    for (const route of ["/pricing", "/investors", "/enterprise", "/ai-agents"] as const) {
      it(`runtime HTML for ${route} keeps restored detail without blocked claims`, async () => {
        const response = await fetch(`${baseUrl}${route}`);
        expect(response.ok).toBe(true);
        const html = await response.text();

        for (const phrase of blockedClaims) {
          expect(html).not.toContain(phrase);
        }

        if (route === "/pricing") {
          expect(html).toContain("COMMERCIAL FAQ");
          expect(html).toContain("Enterprise");
        }
      });
    }
  }
});
