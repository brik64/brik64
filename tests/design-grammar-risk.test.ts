import { describe, expect, it } from "vitest";

import {
  industryEditorialBlueprints,
  industryPages,
  thesisPages,
  useCasePages,
} from "@/lib/risk-page-data";

import { read, riskDirectPages, riskWrapperPages } from "./site-grammar";

describe("Design grammar — risk and use-case family", () => {
  for (const [file, pageRef] of riskWrapperPages) {
    it(`${file} delegates to the shared risk view`, () => {
      const content = read(file);
      expect(content).toContain("RiskPageView");
      expect(content).toContain(pageRef);
      expect(content).not.toContain("HeroWireframeClient");
      expect(content).not.toContain("CopyableCode");
    });
  }

  for (const file of riskDirectPages) {
    it(`${file} keeps the direct language-exchange grammar`, () => {
      const content = read(file);
      expect(content).toContain("CanonicalPageLayout");
      expect(content).toContain("CanonicalPageHero");
      expect(content).toContain("LanguageExchangeSurface");
      expect(content).toContain("DocsRailSurface");
      expect(content).not.toContain("CopyableCode");
    });
  }

  it("PageArchetypes exports the required risk surfaces", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("export function RiskEvidenceSurface");
    expect(content).toContain("export function ConstraintEnvelopeSurface");
    expect(content).toContain("export function ScenarioFlowSurface");
    expect(content).toContain("export function LanguageExchangeSurface");
    expect(content).toContain("risk evidence");
    expect(content).toContain('codeEyebrow ?? "Bounded example"');
  });

  it("risk page data stays populated with bounded domain language", () => {
    const finance = industryPages.finance;
    const financeBlueprint = industryEditorialBlueprints.finance;
    const aiUseCase = useCasePages.aiSafety;
    const aiThesis = thesisPages.ai;

    expect(finance.sectionHeader.title).toContain("Transaction");
    expect(finance.constraint.footer).toContain("does not satisfy");
    expect(finance.hero.proofStripTitle).toContain("payment rules");
    expect(finance.cta.actions.map((action) => action.label)).toEqual([
      ...financeBlueprint.ctaPair,
    ]);
    expect(aiUseCase.sectionHeader.title).toContain("bounded workflow");
    expect(aiUseCase.scenario.footer).toContain("organizational control");
    expect(aiThesis.sectionHeader.title).toContain("constraints");
    expect(aiThesis.constraint.footer).toContain("domain aspiration");
  });
});
