import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";

import { ROOT, read } from "./site-grammar";
import { industryPages } from "@/lib/risk-page-data";

const industryKeys = [
  "aerospace",
  "ai",
  "automotive",
  "engineering",
  "finance",
  "government",
  "healthcare",
  "science",
] as const;

describe("Industry hero imagery", () => {
  it("all industry pages declare a dedicated hero background image", () => {
    for (const key of industryKeys) {
      expect(
        industryPages[key].hero.backgroundImageSrc,
        `Missing hero background for ${key}`,
      ).toMatch(/^\/generated\/.+\.png$/);
    }
  });

  it("all industry hero background assets exist in the public tree", () => {
    for (const key of industryKeys) {
      const asset = industryPages[key].hero.backgroundImageSrc;
      expect(asset, `Missing hero background for ${key}`).toBeTruthy();
      expect(
        fs.existsSync(path.join(ROOT, "public", asset!.replace(/^\//, ""))),
        `Missing generated industry hero asset for ${key}: ${asset}`,
      ).toBe(true);
    }
  });

  it("the shared risk hero contract keeps visible background support enabled", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("backgroundImageSrc={page.hero.backgroundImageSrc}");
    expect(content).toContain("opacity-[0.56]");
    expect(content).toContain("mix-blend-screen opacity-[0.16]");
    expect(content).toContain("blueprint-grid opacity-[0.08]");
  });
});
