import { describe, expect, it } from "vitest";

import {
  featureClaimMatrix,
  featureHero,
  featureOverview,
  featureSectionBlueprints,
  featureCta,
  featureSections,
} from "../src/lib/features-page-data";

const visibleRuntimeText = JSON.stringify({
  hero: featureHero,
  overview: featureOverview,
  sections: featureSections,
  cta: featureCta,
  blueprints: featureSectionBlueprints,
}).toLowerCase();

describe("Features editorial language", () => {
  it("removes blocked hype and internal migration language", () => {
    const bannedPatterns = [
      /no other compiler on earth/i,
      /the parser is the product/i,
      /impossible\./i,
      /100% liftability guarantee/i,
      /proven for all possible inputs\. forever\./i,
      /every ai on earth/i,
      /verified software engineer/i,
      /out of the box/i,
      /magic/i,
      /never needs debugging/i,
      /30 seconds/i,
      /this page/i,
      /what this page is promising/i,
      /why this page changed/i,
    ];

    for (const pattern of bannedPatterns) {
      expect(pattern.test(visibleRuntimeText), `${pattern} should stay out of features`).toBe(false);
    }
  });

  it("keeps the hero anchored to the product flow rather than to test counts or speed claims", () => {
    expect(featureHero.description).toContain("PCD");
    expect(featureHero.description).toContain("closure");
    expect(featureHero.description).toContain("domains");
    expect(featureHero.description).toContain("Compile across supported targets");
    expect(featureHero.description).toContain("platform and enterprise workflows");
    expect(featureHero.description).not.toContain("15,424");
    expect(featureHero.description).not.toContain("110K");
  });

  it("gives every section an explicit claim boundary", () => {
    for (const section of featureSections) {
      expect(/does not|do not/i.test(section.claimBoundary)).toBe(true);
    }
  });

  it("keeps platform, AI, and enterprise language qualified", () => {
    expect(featureSectionBlueprints.platform.claimBoundary).toContain("does not imply");
    expect(featureSectionBlueprints["ai-native"].claimBoundary).toContain("does not make");
    expect(featureSectionBlueprints.enterprise.claimBoundary).toContain("does not by itself certify");
  });

  it("tracks approved claims and explicitly documents removed ones", () => {
    expect(featureClaimMatrix.approvedClaims.map((claim) => claim.id)).toEqual([
      "operations-128",
      "targets-14",
      "source-languages-10",
      "proof-files-207",
      "fixpoint-consistency",
      "liftability-projects",
      "audit-posture",
    ]);

    expect(featureClaimMatrix.droppedClaims.map((claim) => claim.id)).toContain("tests-count");
    expect(featureClaimMatrix.droppedClaims.map((claim) => claim.id)).toContain("enterprise-certification");
    expect(featureClaimMatrix.droppedClaims.map((claim) => claim.id)).toContain("ai-hype");
  });

  it("keeps test-count conflict out of the page source for this iteration", () => {
    expect(visibleRuntimeText).not.toContain("110k");
    expect(visibleRuntimeText).not.toContain("110,000");
    expect(visibleRuntimeText).not.toContain("15,424");
  });
});
