import { describe, expect, it } from "vitest";

import {
  auditedDirectProductPages,
  auditedMigratedProductPages,
  read,
} from "./site-grammar";
import { utilityPages } from "@/lib/utility-page-data";
import { thesisPages } from "@/lib/risk-page-data";

const bannedPublicCopy = [
  "Proof strip",
  "page surface",
  "utility surface",
  "risk evidence",
  "action rail",
  "docs rail",
  "The page should",
  "This page should",
  "This route",
  "Use this page",
  "promissory copy",
  "The operator path starts with one bounded command workflow.",
  "The CLI route shows the install path, command grammar, and verification loop in one consistent product cadence.",
  "One install and workflow route",
  "This route explains what enterprise teams can operationalize today and where legal/compliance programs require separate controls.",
  "The AI-native synthetic language",
  "the first programming language",
  "Teach your agent PCD. Install the official skills now.",
  "CAD for software",
  "npm for verified code",
  "Every package carries a mathematical proof",
  "zero runtime surprises",
  "if it compiles, it's correct",
  "zero defects by design",
  "Tell your AI what to build. The compiler proves it's correct.",
  "Start building with",
  "Write once, verify everywhere.",
];

const sourceFiles = [
  "src/app/page.tsx",
  "src/components/PageArchetypes.tsx",
  "src/app/layout.tsx",
  "src/components/StructuredData.tsx",
  "src/components/Navbar.tsx",
  "src/components/HeroSection.tsx",
  "src/components/HardwareDisciplineSection.tsx",
  "src/components/PCDSection.tsx",
  "src/components/PlatformSection.tsx",
  "src/components/AINativeSection.tsx",
  "src/components/HomeClaimBoundariesSection.tsx",
  "src/components/CTASection.tsx",
  "src/lib/blog-data.ts",
  "src/app/blog/page.tsx",
  "src/app/blog/[slug]/page.tsx",
  ...auditedDirectProductPages,
  ...auditedMigratedProductPages,
] as const;

const auditedUtilityKeys = [
  "about",
  "contact",
  "download",
  "pricing",
  "legal",
  "investors",
  "shop",
] as const;

const auditedRiskKeys = ["ai", "blockchain", "safetyCritical"] as const;

const runtimeRoutes = [
  "/",
  "/pricing",
  "/download",
  "/about",
  "/contact",
  "/legal",
  "/investors",
  "/shop",
  "/ai",
  "/blockchain",
  "/safety-critical",
  "/compliance",
  "/enterprise",
  "/ai-agents",
  "/blog",
  "/foundations",
  "/bpu",
  "/pcd",
  "/cli",
] as const;

describe("Public copy guard", () => {
  it("source files for audited routes do not contain banned public copy", () => {
    for (const file of sourceFiles) {
      const content = read(file);
      for (const phrase of bannedPublicCopy) {
        expect(content).not.toContain(phrase);
      }
    }

    for (const key of auditedUtilityKeys) {
      const content = JSON.stringify(utilityPages[key]);
      for (const phrase of bannedPublicCopy) {
        expect(content).not.toContain(phrase);
      }
    }

    for (const key of auditedRiskKeys) {
      const content = JSON.stringify(thesisPages[key]);
      for (const phrase of bannedPublicCopy) {
        expect(content).not.toContain(phrase);
      }
    }
  });

  const baseUrl = process.env.SITE_BASE_URL;

  if (baseUrl) {
    for (const route of runtimeRoutes) {
      it(`runtime HTML for ${route} omits banned public copy`, async () => {
        const response = await fetch(`${baseUrl}${route}`);
        expect(response.ok).toBe(true);
        const html = await response.text();

        for (const phrase of bannedPublicCopy) {
          expect(html).not.toContain(phrase);
        }
      });
    }
  }
});
