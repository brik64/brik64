import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const bannedByRoute: Array<{ file: string; banned: string[] }> = [
  {
    file: "src/app/foundations/page.tsx",
    banned: ["110,000+ tests", "0 admits", "guaranteed to work"],
  },
  {
    file: "src/app/bpu/page.tsx",
    banned: ["The chip says no, and that's final", "No software can override it"],
  },
  {
    file: "src/app/pcd/page.tsx",
    banned: ["The math is the guarantee", "Generate certified PCD in seconds", "Start building — free"],
  },
  {
    file: "src/app/transpiler/page.tsx",
    banned: ["With mathematical proof. Free CLI.", "Not tested. Proven."],
  },
];

describe("Direct product claim boundaries", () => {
  it("direct product routes remove blocked absolute claims", () => {
    for (const entry of bannedByRoute) {
      const source = read(entry.file);
      for (const banned of entry.banned) {
        expect(source).not.toContain(banned);
      }
    }
  });

  it("foundations distinguishes formal claim from scope boundary", () => {
    const source = read("src/app/foundations/page.tsx");
    expect(source).toMatch(/formal/i);
    expect(source).toMatch(/analogy/i);
    expect(source).toMatch(/boundary/i);
  });

  it("bpu presents software-now and roadmap-later framing", () => {
    const source = read("src/app/bpu/page.tsx");
    expect(source).toMatch(/software today/i);
    expect(source).toMatch(/FPGA/i);
    expect(source).toMatch(/silicon/i);
    expect(source).toMatch(/roadmap/i);
  });

  it("pcd remains a technical reference with domain and composition language", () => {
    const source = read("src/app/pcd/page.tsx");
    expect(source).toMatch(/\bPCD\b/);
    expect(source).toMatch(/domain/i);
    expect(source).toMatch(/\bEVA\b/);
  });
});

