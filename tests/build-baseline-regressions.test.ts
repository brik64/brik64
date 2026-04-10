import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(__dirname, "..");

function exists(relativePath: string) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function read(relativePath: string) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

describe("build baseline regressions", () => {
  it("restores the minimum app shell files Next needs", () => {
    expect(exists("src/app/page.tsx")).toBe(true);
    expect(exists("src/app/globals.css")).toBe(true);
    expect(exists("src/components/Navbar.tsx")).toBe(true);
    expect(exists("src/components/Footer.tsx")).toBe(true);
    expect(exists("src/components/CookieBanner.tsx")).toBe(true);
    expect(exists("src/components/StructuredData.tsx")).toBe(true);
  });

  it("restores local component primitives referenced by the product surfaces", () => {
    expect(exists("src/components/PhiC.tsx")).toBe(true);
    expect(exists("src/components/MonomerSvg.tsx")).toBe(true);
    expect(exists("src/lib/monomer-data.ts")).toBe(true);
    expect(read("src/components/MonomerArtifacts.tsx")).toContain("MonomerSvg");
  });

  it("restores path alias and static export configuration", () => {
    expect(read("tsconfig.json")).toContain('"@/*"');
    expect(read("next.config.mjs")).toContain('output: "export"');
  });
});
