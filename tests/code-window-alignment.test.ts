import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Code surfaces — embedded proof panels replace standalone terminal windows", () => {
  it("shared archetype surfaces embed code through CodeProofPanel", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("export function ConstraintEnvelopeSurface");
    expect(content).toContain("export function LanguageExchangeSurface");
    expect(content).toContain("<CodeProofPanel");
    expect(content).toContain('codeEyebrow ?? "Bounded example"');
    expect(content).toContain('eyebrow="Language example"');
  });

  it("cli, compliance, and language routes no longer depend on raw CopyableCode blocks", () => {
    const files = [
      "src/app/cli/page.tsx",
      "src/app/compliance/page.tsx",
      "src/app/languages/[slug]/page.tsx",
    ] as const;

    for (const file of files) {
      const content = read(file);
      expect(content, `${file} should use archetype surfaces instead of CopyableCode`).not.toContain("CopyableCode");
    }
  });

  it("risk and utility wrappers now delegate code rendering to archetype surfaces instead of local terminal chrome", () => {
    const files = [
      "src/app/ai/page.tsx",
      "src/app/blockchain/page.tsx",
      "src/app/industries/finance/page.tsx",
      "src/app/use-cases/cobol-migration/page.tsx",
      "src/app/about/page.tsx",
      "src/app/docs/page.tsx",
    ] as const;

    for (const file of files) {
      const content = read(file);
      expect(content.includes("bg-[#0a0e14]"), `${file} should not inline raw terminal chrome`).toBe(false);
    }
  });
});
