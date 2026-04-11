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
  "src/app/layout.tsx",
  "src/app/foundations/page.tsx",
  "src/app/bpu/page.tsx",
  "src/app/pcd/page.tsx",
  "src/app/lifter/page.tsx",
  "src/app/transpiler/page.tsx",
  "src/components/StructuredData.tsx",
  "src/components/Navbar.tsx",
  "src/components/HeroSection.tsx",
  "src/components/PCDSection.tsx",
  "src/components/PlatformSection.tsx",
  "src/components/AINativeSection.tsx",
  "src/components/HomeClaimBoundariesSection.tsx",
  "src/lib/utility-page-data.ts",
  "src/lib/risk-page-data.ts",
  "src/lib/blog-data.ts",
] as const;

const requiredBoundarySignals: Array<{ file: string; checks: RegExp[] }> = [
  { file: "src/lib/utility-page-data.ts", checks: [/claim posture.*Qualified/i, /does not certify organizations by itself/i] },
  { file: "src/lib/utility-page-data.ts", checks: [/No trust by default/i, /does not make underlying models trustworthy by default/i] },
  { file: "src/app/transpiler/page.tsx", checks: [/outside this boundary/i, /bounded intermediate/i] },
  { file: "src/app/lifter/page.tsx", checks: [/benchmark liftability/i, /universal guarantee/i] },
  { file: "src/components/HomeClaimBoundariesSection.tsx", checks: [/Core operations/i, /Runtime and external systems/i] },
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
    const about = read("src/lib/utility-page-data.ts");
    const foundations = read("src/app/foundations/page.tsx");
    const joined = `${about}\n${foundations}`;

    expect(joined.includes("110K+")).toBe(false);
    expect(joined.includes("110,000+")).toBe(false);
  });
});
