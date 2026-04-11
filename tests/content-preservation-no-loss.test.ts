import { describe, expect, it } from "vitest";

import atoms from "./fixtures/public-content-atoms.json";
import {
  PUBLIC_ROUTE_EDITORIAL_SPECS,
  type ContentAtom,
} from "@/lib/public-site-editorial-contracts";
import { read } from "./site-grammar";

const atomList = atoms as ContentAtom[];

const routeToFile: Record<string, string> = {
  "/about": "src/app/about/page.tsx",
  "/pricing": "src/app/pricing/page.tsx",
  "/download": "src/app/download/page.tsx",
  "/faq": "src/app/faq/page.tsx",
  "/shop": "src/app/shop/page.tsx",
  "/investors": "src/app/investors/page.tsx",
  "/enterprise": "src/app/enterprise/page.tsx",
  "/ai-agents": "src/app/ai-agents/page.tsx",
  "/foundations": "src/app/foundations/page.tsx",
  "/bpu": "src/app/bpu/page.tsx",
  "/pcd": "src/app/pcd/page.tsx",
  "/lifter": "src/app/lifter/page.tsx",
  "/transpiler": "src/app/transpiler/page.tsx",
  "/cli": "src/app/cli/page.tsx",
};

const keywordAnchors: Array<{ route: string; checks: RegExp[] }> = [
  { route: "/about", checks: [/Digital Circuitality/i, /\bPCD\b/, /compiler/i, /platform/i] },
  { route: "/pricing", checks: [/\bCLI\b/, /\bTeam\b/, /Enterprise/i, /comparison/i] },
  { route: "/download", checks: [/\bCLI\b/, /SDK/i, /platform/i] },
  { route: "/enterprise", checks: [/SSO|SAML|OIDC/i, /audit/i, /compliance/i] },
  { route: "/ai-agents", checks: [/policy/i, /workflow/i, /agent/i] },
  { route: "/foundations", checks: [/formal/i, /analogy/i, /boundary/i] },
  { route: "/bpu", checks: [/roadmap/i, /software/i, /FPGA/i] },
  { route: "/pcd", checks: [/\bPCD\b/, /domain/i, /\bEVA\b/] },
];

describe("Content preservation no-loss", () => {
  it("all baseline atoms are marked preserve=true and mapped to real files", () => {
    for (const atom of atomList) {
      expect(atom.preserve).toBe(true);
      expect(routeToFile[atom.route]).toBeTruthy();
      expect(() => read(routeToFile[atom.route])).not.toThrow();
    }
  });

  it("route specs reference atoms that exist in the baseline", () => {
    const ids = new Set(atomList.map((atom) => atom.id));
    for (const spec of PUBLIC_ROUTE_EDITORIAL_SPECS) {
      for (const id of spec.mustPreserveAtoms) {
        expect(ids.has(id)).toBe(true);
      }
      expect(spec.buyer).toBe("cto_vp_eng");
      expect(spec.requiredBoundaries.length).toBeGreaterThan(0);
      expect(spec.ctaTargets.length).toBeGreaterThan(0);
    }
  });

  it("critical routes still contain the preserved technical anchors", () => {
    for (const entry of keywordAnchors) {
      const file = routeToFile[entry.route];
      const source = read(file);
      for (const check of entry.checks) {
        expect(source).toMatch(check);
      }
    }
  });
});
