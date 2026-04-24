import { describe, expect, it } from "vitest";

import {
  industryEditorialBlueprints,
  industryPages,
} from "@/lib/risk-page-data";

import { read, riskWrapperPages } from "./site-grammar";

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") {
    return [value];
  }
  if (Array.isArray(value)) {
    return value.flatMap((entry) => collectStrings(entry));
  }
  if (value && typeof value === "object") {
    return Object.values(value).flatMap((entry) => collectStrings(entry));
  }
  return [];
}

const industryEntries = Object.entries(industryPages);
const industryStrings = industryEntries.map(([key, page]) => [
  key,
  collectStrings(page),
] as const);
type IndustryKey = keyof typeof industryPages;

describe("Industries content audit", () => {
  it("industry wrappers still delegate to RiskPageView", () => {
    const industryWrappers = riskWrapperPages.filter(([file]) =>
      file.includes("/industries/"),
    );

    expect(industryWrappers).toHaveLength(8);

    for (const [file, pageRef] of industryWrappers) {
      const content = read(file);
      expect(content).toContain("RiskPageView");
      expect(content).toContain(pageRef);
    }
  });

  it("enforces the image-backed visual contract on every industry page", () => {
    const heroImages = new Set<string>();
    const bannerImages = new Set<string>();
    const ctaImages = new Set<string>();

    for (const [industryKey, page] of industryEntries as Array<
      [IndustryKey, (typeof industryPages)[IndustryKey]]
    >) {
      expect(
        page.hero.backgroundImageSrc,
        `${industryKey} hero background image missing`,
      ).toMatch(/^\/generated\/.+\.png$/);
      heroImages.add(page.hero.backgroundImageSrc ?? "");

      expect(page.realWorldBanner, `${industryKey} real-world banner missing`).toBeTruthy();
      expect(
        page.realWorldBanner?.imageSrc,
        `${industryKey} real-world banner image missing`,
      ).toMatch(/^\/generated\/.+\.png$/);
      expect(
        page.realWorldBanner?.description,
        `${industryKey} real-world banner should not render lower subtitle strip`,
      ).toBeFalsy();
      bannerImages.add(page.realWorldBanner?.imageSrc ?? "");

      expect(
        page.cta.backgroundImageSrc,
        `${industryKey} CTA background image missing`,
      ).toMatch(/^\/generated\/.+\.png$/);
      ctaImages.add(page.cta.backgroundImageSrc ?? "");
    }

    expect(heroImages.size).toBe(industryEntries.length);
    expect(bannerImages.size).toBe(industryEntries.length);
    expect(ctaImages.size).toBe(industryEntries.length);
  });

  it("keeps an explicit editorial blueprint for every industry", () => {
    const blueprintKeys = Object.keys(industryEditorialBlueprints).sort();
    const pageKeys = Object.keys(industryPages).sort();

    expect(blueprintKeys).toEqual(pageKeys);

    for (const [industryKey, blueprint] of Object.entries(
      industryEditorialBlueprints,
    ) as Array<[IndustryKey, (typeof industryEditorialBlueprints)[IndustryKey]]>) {
      expect(blueprint.buyer, `${industryKey} buyer`).toBeTruthy();
      expect(blueprint.primaryWorkflow, `${industryKey} primary workflow`).toBeTruthy();
      expect(blueprint.workflowExample, `${industryKey} workflow example`).toBeTruthy();
      expect(blueprint.primarySurface, `${industryKey} primary surface`).toBeTruthy();
      expect(blueprint.secondarySurface, `${industryKey} secondary surface`).toBeTruthy();
      expect(blueprint.standardsContext, `${industryKey} standards context`).toBeTruthy();
      expect(blueprint.claimBoundary, `${industryKey} claim boundary`).toMatch(
        /does not/i,
      );
      expect(blueprint.ctaPair).toHaveLength(2);
    }
  });

  it("removes meta copy and archetype placeholders from industry data", () => {
    const bannedPatterns = [
      /proof strip/i,
      /one bounded object summarises the page before the body expands it\./i,
      /the hero keeps the hook/i,
      /page surface/i,
      /this page/i,
      /the page should/i,
      /use the [a-z-]+ page/i,
      /use the industry surface/i,
      /review object/i,
      /constraint set/i,
      /evidence path/i,
      /software evidence surface/i,
      /decision envelope/i,
      /risk surface/i,
      /control object/i,
    ];

    for (const [industryKey, strings] of industryStrings) {
      const blob = strings.join("\n");
      for (const pattern of bannedPatterns) {
        expect(
          blob,
          `${industryKey} still contains placeholder pattern: ${pattern}`,
        ).not.toMatch(pattern);
      }
    }
  });

  it("gives every industry unique visible titles across hero and surfaces", () => {
    const heroTitles = new Set<string>();
    const proofStripTitles = new Set<string>();
    const sectionTitles = new Set<string>();
    const evidenceTitles = new Set<string>();
    const constraintTitles = new Set<string>();
    const scenarioTitles = new Set<string>();

    for (const [, page] of industryEntries) {
      heroTitles.add(`${page.hero.title} ${page.hero.highlight ?? ""}`.trim());
      proofStripTitles.add(page.hero.proofStripTitle ?? "");
      sectionTitles.add(page.sectionHeader.title);
      evidenceTitles.add(page.evidence.title);
      constraintTitles.add(page.constraint.title);
      scenarioTitles.add(page.scenario.title);
    }

    expect(heroTitles.size).toBe(industryEntries.length);
    expect(proofStripTitles.size).toBe(industryEntries.length);
    expect(sectionTitles.size).toBe(industryEntries.length);
    expect(evidenceTitles.size).toBe(industryEntries.length);
    expect(constraintTitles.size).toBe(industryEntries.length);
    expect(scenarioTitles.size).toBe(industryEntries.length);
  });

  it("keeps CTA actions contextual and aligned with the editorial blueprint", () => {
    const ctaPairs = new Set<string>();

    for (const [industryKey, page] of industryEntries as Array<
      [IndustryKey, (typeof industryPages)[IndustryKey]]
    >) {
      const pair = page.cta.actions.map((action) => action.label);
      expect(pair).toEqual([...industryEditorialBlueprints[industryKey].ctaPair]);
      ctaPairs.add(page.cta.actions.map((action) => `${action.label}:${action.href}`).join("|"));
    }

    expect(ctaPairs.size).toBe(industryEntries.length);
  });

  it("ties each industry to its declared product surfaces and workflow", () => {
    for (const [industryKey, page] of industryEntries as Array<
      [IndustryKey, (typeof industryPages)[IndustryKey]]
    >) {
      const blob = collectStrings(page).join("\n");
      const blueprint = industryEditorialBlueprints[industryKey];
      const renderedBoundary = `${page.constraint.footer ?? ""}\n${page.scenario.footer ?? ""}`;

      expect(blob).toContain(blueprint.primarySurface);
      expect(blob.toLowerCase()).toContain(blueprint.secondarySurface.toLowerCase());
      expect(renderedBoundary).toMatch(/does not/i);
      expect(page.scenario.title).toBeTruthy();
      expect(page.scenario.description).toBeTruthy();
      expect(page.scenario.steps).toHaveLength(4);
      expect(page.scenario.steps.map((step) => step.title)).toEqual(
        expect.arrayContaining([
          expect.stringMatching(/define|select|declare/i),
          expect.stringMatching(/encode|lift/i),
          expect.stringMatching(/check|emit/i),
        ]),
      );
    }
  });

  it("stays inside qualified-evidence claims", () => {
    const blockedClaims = [
      "world-leading",
      "guaranteed compliance",
      "guaranteed certification",
      "fully certified",
      "certification complete",
      "ready for certification",
      "market leader",
      "best-in-class",
      "nasa",
      "lockheed",
      "spacex",
      "palantir",
      "clinical efficacy",
      "proves scientific truth",
      "autonomous-driving certainty",
    ];

    for (const [industryKey, strings] of industryStrings as Array<
      [IndustryKey, string[]]
    >) {
      const blob = strings.join("\n").toLowerCase();
      for (const claim of blockedClaims) {
        expect(blob, `${industryKey} contains blocked claim: ${claim}`).not.toContain(
          claim,
        );
      }
      expect(blob).toMatch(/does not/i);
    }
  });

  it("keeps each industry grounded in concrete domain signals", () => {
    const domainSignals: Record<string, string[]> = {
      aerospace: ["avionics", "flight", "do-178c"],
      ai: ["generated", "agent", "policy"],
      automotive: ["actuation", "sensor", "asil"],
      engineering: ["simulation", "material", "calculation"],
      finance: ["transaction", "ledger", "audit"],
      government: ["eligibility", "rules", "oversight"],
      healthcare: ["dose", "clinical", "iec 62304"],
      science: ["reproducible", "calibration", "publication"],
    };

    for (const [industryKey, page] of industryEntries as Array<
      [IndustryKey, (typeof industryPages)[IndustryKey]]
    >) {
      const blob = collectStrings(page).join("\n").toLowerCase();
      const hits = domainSignals[industryKey].filter((signal) =>
        blob.includes(signal),
      );
      expect(
        hits.length,
        `${industryKey} needs at least 3 concrete domain signals`,
      ).toBeGreaterThanOrEqual(3);
    }
  });

  it("keeps differentiation across workflow examples, standards, and claim boundaries", () => {
    const workflowExamples = new Set<string>();
    const standardsContexts = new Set<string>();
    const claimBoundaries = new Set<string>();

    for (const blueprint of Object.values(industryEditorialBlueprints)) {
      workflowExamples.add(blueprint.workflowExample);
      standardsContexts.add(blueprint.standardsContext);
      claimBoundaries.add(blueprint.claimBoundary);
    }

    expect(workflowExamples.size).toBe(industryEntries.length);
    expect(standardsContexts.size).toBe(industryEntries.length);
    expect(claimBoundaries.size).toBe(industryEntries.length);
  });
});
