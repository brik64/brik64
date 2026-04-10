import { describe, expect, it } from "vitest";
import path from "path";

import {
  getAllPageFiles,
  productMigratedPages,
  read,
  riskDirectPages,
  utilityDirectPages,
} from "./site-grammar";

const archetypesFile = "src/components/PageArchetypes.tsx";

describe("Alignment — canonical shell lives in the shared archetype layer", () => {
  const content = read(archetypesFile);

  it("CanonicalPageLayout owns Navbar, Footer, and the max-width shell", () => {
    expect(content).toContain("export function CanonicalPageLayout");
    expect(content).toContain("<Navbar />");
    expect(content).toContain("<Footer />");
    expect(content).toContain("mx-auto max-w-7xl border-x border-border bg-background");
  });

  it("CanonicalPageHero keeps centered title and subtitle rhythm", () => {
    expect(content).toContain("export function CanonicalPageHero");
    expect(content).toContain("mx-auto max-w-5xl text-center");
    expect(content).toContain("mx-auto mt-6 max-w-2xl");
  });

  it("ArchetypeSectionHeader routes through PageSectionHeader instead of local one-off h2 blocks", () => {
    expect(content).toContain("export function ArchetypeSectionHeader");
    expect(content).toContain("<PageSectionHeader");
  });
});

describe("Alignment — migrated direct pages use the canonical layout primitives", () => {
  const directPages = [
    ...productMigratedPages,
    ...riskDirectPages,
    ...utilityDirectPages,
  ];

  for (const file of directPages) {
    it(`${file} uses the canonical page layout`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageLayout");
    });
  }

  for (const file of productMigratedPages) {
    it(`${file} keeps the canonical hero and section cadence`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageHero");
      expect(content).toContain("CanonicalSection");
      expect(content).toContain('className="mx-auto mt-10');
    });
  }
});

describe("Alignment — wrapper pages point into the canonical views", () => {
  const wrapperPages = getAllPageFiles().filter((file) => {
    const rel = path.relative(path.resolve(__dirname, ".."), file);
    const content = read(rel);
    return content.includes("UtilityPageView") || content.includes("RiskPageView");
  });

  it("keeps a large set of wrapper routes routed through shared views", () => {
    expect(wrapperPages.length).toBeGreaterThanOrEqual(25);
  });

  for (const file of wrapperPages) {
    const rel = path.relative(path.resolve(__dirname, ".."), file);
    it(`${rel} does not inline its own Navbar/Footer because the shared view owns them`, () => {
      const content = read(rel);
      expect(content.includes("<Navbar")).toBe(false);
      expect(content.includes("<Footer")).toBe(false);
    });
  }
});

describe("Alignment — unexpected blue accents stay out of route files", () => {
  const forbiddenPatterns = [
    /text-blue-400/,
    /text-blue-500/,
    /text-blue-700/,
    /bg-blue-500/,
    /border-blue-500/,
  ];

  const routeFiles = getAllPageFiles();

  for (const file of routeFiles) {
    const rel = path.relative(path.resolve(__dirname, ".."), file);
    it(`${rel} avoids legacy blue utility classes`, () => {
      const content = read(rel);
      for (const pattern of forbiddenPatterns) {
        expect(pattern.test(content)).toBe(false);
      }
    });
  }
});
