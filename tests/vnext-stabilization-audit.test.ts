import { describe, expect, it } from "vitest";
import { read, productCorePages, productMigratedPages } from "./site-grammar";

describe("VNext Stabilization Regression Guard", () => {
  it("PageArchetypes.tsx correctly imports the Layers icon", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("Layers");
    expect(content).toContain('import {');
    expect(content).toContain('} from "lucide-react"');
  });

  it("foundations/page.tsx does not contain unescaped '>' characters in body text", () => {
    const content = read("src/app/foundations/page.tsx");
    // Should use &gt; or {'>'} or similar if needed, but not raw > in problematic context
    // We fixed: Uncertainty remains &gt; 0
    expect(content).not.toContain("Uncertainty remains > 0");
    expect(content).toContain("Uncertainty remains &gt; 0");
  });

  it("shop/page.tsx has clean syntax and correct export", () => {
    const content = read("src/app/shop/page.tsx");
    expect(content).toContain("export default async function ShopPage()");
    // Should not have the corrupted concatenation
    expect(content).not.toContain("}export default async function ShopPage()");
  });
});

describe("VNext Product Route Integrity", () => {
  const allProductPages = [...productCorePages, ...productMigratedPages];
  
  it("all primary product routes use VNext archetypes", () => {
    const essentialArchetypes = [
      "CanonicalPageLayout",
      "UtilityPageView",
      "RiskPageView",
      "EditorialHeroVNext",
      "VNextHome"
    ];

    for (const pagePath of allProductPages) {
      const content = read(pagePath);
      const usesArchetype = essentialArchetypes.some(archetype => content.includes(archetype));
      expect(usesArchetype, `${pagePath} should use a VNext archetype`).toBe(true);
    }
  });

  it("foundations/page.tsx uses ActionAnchor from PageArchetypes", () => {
    const content = read("src/app/foundations/page.tsx");
    expect(content).toContain('from "@/components/PageArchetypes"');
    expect(content).toContain('ActionAnchor');
  });

  it("pcd/page.tsx uses ActionAnchor from PageArchetypes", () => {
    const content = read("src/app/pcd/page.tsx");
    expect(content).toContain('from "@/components/PageArchetypes"');
    expect(content).toContain('ActionAnchor');
  });

  it("sdks/page.tsx uses ActionAnchor from PageArchetypes", () => {
    const content = read("src/app/sdks/page.tsx");
    expect(content).toContain('from "@/components/PageArchetypes"');
    expect(content).toContain('ActionAnchor');
  });
});
