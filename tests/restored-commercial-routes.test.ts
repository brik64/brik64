import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const directRouteFiles = [
  "src/app/ai-agents/page.tsx",
] as const;

const blockedClaims = [
  "every line of code is mathematically proven correct",
  "formal verification as a service",
  "code that doesn’t reach Φc = 1 never reaches production",
  "The future of software is verified.",
  "Start building — free",
] as const;

describe("Restored commercial and AI routes", () => {
  it("keeps ai-agents as a direct page while commercial routes move to wrappers", () => {
    for (const file of directRouteFiles) {
      const source = read(file);
      expect(source).not.toContain("UtilityPageView");
      expect(source).toContain("Navbar");
      expect(source).toContain("Footer");
    }

    for (const file of [
      "src/app/pricing/page.tsx",
      "src/app/investors/page.tsx",
      "src/app/enterprise/page.tsx",
    ] as const) {
      const source = read(file);
      expect(source).toContain("UtilityPageView");
    }
  });

  it("pricing keeps the vNext pricing wrapper and dataset hook", () => {
    const source = read("src/app/pricing/page.tsx");
    expect(source).toContain("UtilityPageView");
    expect(source).toContain("utilityPages.pricing");
  });

  it("investors keeps the vNext investors wrapper and dataset hook", () => {
    const source = read("src/app/investors/page.tsx");
    expect(source).toContain("UtilityPageView");
    expect(source).toContain("utilityPages.investors");
  });

  it("enterprise keeps the vNext enterprise wrapper and dataset hook", () => {
    const source = read("src/app/enterprise/page.tsx");
    expect(source).toContain("UtilityPageView");
    expect(source).toContain("utilityPages.enterprise");
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
    const combined = [
      ...directRouteFiles,
      "src/app/pricing/page.tsx",
      "src/app/investors/page.tsx",
      "src/app/enterprise/page.tsx",
    ].map((file) => read(file)).join("\n");
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
          expect(html).toContain("Pricing");
          expect(html).toContain("Enterprise");
        }
      });
    }
  }
});
