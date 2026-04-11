import { describe, expect, it } from "vitest";

import atoms from "./fixtures/public-content-atoms.json";
import {
  PUBLIC_ROUTE_EDITORIAL_SPECS,
  type ContentAtom,
} from "@/lib/public-site-editorial-contracts";
import { utilityPages } from "@/lib/utility-page-data";
import { read } from "./site-grammar";

const atomList = atoms as ContentAtom[];

const routeToFile: Record<string, string> = {
  "/ai-agents": "src/app/ai-agents/page.tsx",
  "/pricing": "src/app/pricing/page.tsx",
  "/investors": "src/app/investors/page.tsx",
  "/enterprise": "src/app/enterprise/page.tsx",
  "/foundations": "src/app/foundations/page.tsx",
  "/bpu": "src/app/bpu/page.tsx",
  "/pcd": "src/app/pcd/page.tsx",
  "/lifter": "src/app/lifter/page.tsx",
  "/transpiler": "src/app/transpiler/page.tsx",
  "/cli": "src/app/cli/page.tsx",
};

const routeToUtilityKey: Record<string, keyof typeof utilityPages> = {
  "/about": "about",
  "/download": "download",
  "/faq": "faq",
  "/shop": "shop",
};

function readRouteContent(route: string): string {
  const utilityKey = routeToUtilityKey[route];
  if (utilityKey) {
    return JSON.stringify(utilityPages[utilityKey]);
  }
  return read(routeToFile[route]);
}

const keywordAnchors: Array<{ route: string; checks: RegExp[] }> = [
  { route: "/about", checks: [/\bbounded\b/i, /\bPCD\b/, /compiler/i, /platform/i] },
  { route: "/pricing", checks: [/\bFree\b/, /\bTeam\b/, /Enterprise/i, /comparison/i] },
  { route: "/download", checks: [/\bCLI\b/, /SDK/i, /platform/i] },
  { route: "/enterprise", checks: [/SSO|SAML|OIDC/i, /audit/i, /compliance/i, /does not certify organizations/i] },
  { route: "/investors", checks: [/verified software infrastructure/i, /system form/i, /roadmap/i, /truth boundary/i] },
  { route: "/ai-agents", checks: [/policy/i, /workflow/i, /agent/i, /No trust by default/i] },
  { route: "/foundations", checks: [/formal/i, /analogy/i, /boundary/i] },
  { route: "/bpu", checks: [/roadmap/i, /software/i, /FPGA/i] },
  { route: "/pcd", checks: [/\bPCD\b/, /domain/i, /\bEVA\b/] },
];

describe("Content preservation no-loss", () => {
  it("all baseline atoms are marked preserve=true and mapped to real files", () => {
    for (const atom of atomList) {
      expect(atom.preserve).toBe(true);
      expect(routeToFile[atom.route] || routeToUtilityKey[atom.route]).toBeTruthy();
      expect(readRouteContent(atom.route).length).toBeGreaterThan(0);
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
      const source = readRouteContent(entry.route);
      for (const check of entry.checks) {
        expect(source).toMatch(check);
      }
    }
  });
});
