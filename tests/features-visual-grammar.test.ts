import { describe, expect, it } from "vitest";

import {
  featureCta,
  featureSections,
} from "../src/lib/features-page-data";
import { read } from "./site-grammar";

const pageContent = read("src/app/features/page.tsx");
const dataContent = read("src/lib/features-page-data.ts");
const combinedSource = `${pageContent}\n${dataContent}`;

describe("Features visual grammar", () => {
  it("drops the old legacy feature-grid renderer", () => {
    expect(pageContent).toContain("renderFeatureSurface");
    expect(pageContent).toContain("FeatureSectionBlock");
    expect(pageContent).not.toContain("section.features.map(");
    expect(pageContent).not.toContain("grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3");
  });

  it("removes meta migration copy from the visible source", () => {
    expect(combinedSource).not.toContain("Core Surfaces");
    expect(combinedSource).not.toContain("Why this page changed");
    expect(combinedSource).not.toContain(
      "The old feature page explained too much before showing anything concrete.",
    );
    expect(combinedSource).not.toContain("What this page is promising");
  });

  it("keeps the eight feature anchors while routing them through bounded section specs", () => {
    expect(featureSections.map((section) => section.id)).toEqual([
      "compilation",
      "verification",
      "domain-constraints",
      "lifting",
      "transpilation",
      "platform",
      "ai-native",
      "enterprise",
    ]);
  });

  it("gives every section one protagonist surface, one supporting surface, and a visible boundary", () => {
    for (const section of featureSections) {
      expect(section.primarySurface.kind).toBe(section.primarySurfaceKind);
      expect(section.supportingSurface.kind).toBe(section.supportingSurfaceKind);
      expect(section.claimBoundary.length).toBeGreaterThan(40);
      expect(section.workflowFocus.length).toBeGreaterThan(30);
      expect(section.integrationPoint.length).toBeGreaterThan(30);
      expect(section.evidenceOutputs.length).toBeGreaterThanOrEqual(3);
    }
  });

  it("moves the page CTA away from pricing and back onto product surfaces", () => {
    expect(pageContent).not.toContain('href="/pricing"');
    expect(pageContent).not.toContain('href="/pricing"');
    expect(featureCta.actions).toEqual([
      { label: "Install the CLI", href: "/cli", tone: "primary" },
      { label: "Explore the platform", href: "/platform", tone: "secondary" },
    ]);
  });
});
