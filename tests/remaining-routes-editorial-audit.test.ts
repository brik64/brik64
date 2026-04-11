import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";
import { utilityPages } from "@/lib/utility-page-data";
import { useCasePages } from "@/lib/risk-page-data";

const bannedMetaCopy = [
  "The page should",
  "This page should",
  "This route",
  "Use this page",
  "Use the CI/CD page",
  "Use the COBOL page",
  "Use the transpilation page",
  "page surface",
  "utility surface",
  "action rail",
  "docs rail",
  "promissory copy",
];

const bannedClaims = [
  "100% liftability",
  "never needs debugging",
  "No software can override it",
  "The chip says no, and that's final",
];

const auditedUtilityKeys = [
  "faq",
  "docs",
  "playground",
  "changelog",
  "login",
  "signup",
] as const;

const auditedUseCaseKeys = [
  "aiSafety",
  "ciCdIntegration",
  "cobolMigration",
  "formalVerification",
  "universalTranspilation",
] as const;

const sourceFiles = [
  "src/app/cli/page.tsx",
  "src/app/languages/[slug]/page.tsx",
  "src/app/lifter/page.tsx",
  "src/lib/utility-page-data.ts",
  "src/lib/risk-page-data.ts",
] as const;

const runtimeRoutes = [
  "/changelog",
  "/docs",
  "/faq",
  "/playground",
  "/login",
  "/signup",
  "/cli",
  "/lifter",
  "/transpiler",
  "/platform",
  "/registry",
  "/sdks",
  "/news",
  "/news/launch",
  "/languages/javascript",
  "/use-cases/ai-safety",
  "/use-cases/ci-cd-integration",
  "/use-cases/cobol-migration",
  "/use-cases/formal-verification",
  "/use-cases/universal-transpilation",
  "/industries/ai",
  "/industries/finance",
  "/industries/healthcare",
  "/industries/engineering",
  "/industries/government",
  "/industries/science",
  "/industries/aerospace",
  "/industries/automotive",
] as const;

describe("Remaining public routes audit", () => {
  it("source for remaining routes omits blocked meta copy and blocked claims", () => {
    for (const file of sourceFiles) {
      const content = read(file);
      for (const phrase of bannedMetaCopy) {
        expect(content).not.toContain(phrase);
      }
    }

    for (const key of auditedUtilityKeys) {
      const content = JSON.stringify(utilityPages[key]);
      for (const phrase of bannedMetaCopy) {
        expect(content).not.toContain(phrase);
      }
    }

    for (const key of auditedUseCaseKeys) {
      const content = JSON.stringify(useCasePages[key]);
      for (const phrase of bannedMetaCopy) {
        expect(content).not.toContain(phrase);
      }
    }

    const lifterContent = read("src/app/lifter/page.tsx");
    for (const phrase of bannedClaims) {
      expect(lifterContent).not.toContain(phrase);
    }
  });

  const baseUrl = process.env.SITE_BASE_URL;

  if (baseUrl) {
    for (const route of runtimeRoutes) {
      it(`runtime HTML for ${route} omits blocked meta copy`, async () => {
        const response = await fetch(`${baseUrl}${route}`);
        expect(response.ok).toBe(true);
        const html = await response.text();

        for (const phrase of bannedMetaCopy) {
          expect(html).not.toContain(phrase);
        }
      });
    }
  }
});
