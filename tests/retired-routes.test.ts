import { describe, expect, it } from "vitest";

import { read, retiredPages } from "./site-grammar";

describe("Retired routes", () => {
  for (const file of retiredPages) {
    it(`${file} redirects to home instead of rendering a legacy public surface`, () => {
      const content = read(file);
      expect(content).toContain('import { redirect } from "next/navigation"');
      expect(content).toContain('redirect("/")');
      expect(content).not.toContain("CanonicalPageLayout");
      expect(content).not.toContain("UtilityPageView");
      expect(content).not.toContain("RiskPageView");
    });
  }
});
