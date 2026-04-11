import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const bannedClaims = [
  "No other compiler on earth",
  "100% liftability guarantee",
  "Proven for ALL possible inputs",
  "never needs debugging",
  "unhackable",
  "every AI on earth",
  "verified software engineer",
  "out of the box",
  "The parser IS the product",
  "Ship code that never needs debugging",
];

const auditedSourceFiles = [
  "src/app/about/page.tsx",
  "src/app/pricing/page.tsx",
  "src/app/download/page.tsx",
  "src/app/faq/page.tsx",
  "src/app/investors/page.tsx",
  "src/app/enterprise/page.tsx",
  "src/app/ai-agents/page.tsx",
  "src/app/foundations/page.tsx",
  "src/app/bpu/page.tsx",
  "src/app/pcd/page.tsx",
  "src/app/lifter/page.tsx",
  "src/app/transpiler/page.tsx",
  "src/lib/utility-page-data.ts",
  "src/lib/risk-page-data.ts",
  "src/lib/blog-data.ts",
] as const;

const requiredBoundarySignals: Array<{ file: string; checks: RegExp[] }> = [
  { file: "src/app/about/page.tsx", checks: [/model-level closure condition/i, /not a blanket claim/i] },
  { file: "src/app/enterprise/page.tsx", checks: [/review-ready evidence/i, /not automatic program certification/i] },
  { file: "src/app/ai-agents/page.tsx", checks: [/verification remains external/i, /bounded/i] },
  { file: "src/app/transpiler/page.tsx", checks: [/outside this boundary/i, /bounded intermediate/i] },
  { file: "src/app/lifter/page.tsx", checks: [/benchmark liftability/i, /universal guarantee/i] },
];

describe("Public editorial qualified claims", () => {
  it("audited sources do not ship blocked absolute claims", () => {
    for (const file of auditedSourceFiles) {
      const source = read(file);
      for (const claim of bannedClaims) {
        expect(source).not.toContain(claim);
      }
    }
  });

  it("critical routes contain explicit claim-boundary language", () => {
    for (const entry of requiredBoundarySignals) {
      const source = read(entry.file);
      for (const check of entry.checks) {
        expect(source).toMatch(check);
      }
    }
  });

  it("about and foundations do not mix conflicting headline test counts", () => {
    const about = read("src/app/about/page.tsx");
    const foundations = read("src/app/foundations/page.tsx");
    const joined = `${about}\n${foundations}`;

    expect(joined.includes("110K+")).toBe(false);
    expect(joined.includes("110,000+")).toBe(false);
  });
});
