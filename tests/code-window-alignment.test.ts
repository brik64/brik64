import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

describe("standalone code windows", () => {
  it("keep standalone terminal/code surfaces centered in the main routes that expose them", () => {
    const expectations: Array<[string, string]> = [
      ["src/app/cli/page.tsx", "mx-auto mt-8 max-w-3xl"],
      ["src/app/registry/page.tsx", "mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]"],
      ["src/app/lifter/page.tsx", "mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl"],
      ["src/app/transpiler/page.tsx", "mx-auto max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl"],
      ["src/app/ai/page.tsx", "mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl"],
      ["src/app/blockchain/page.tsx", "mx-auto mt-4 max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl"],
      ["src/app/v2-jobs/page.tsx", "mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl"],
      ["src/app/languages/[slug]/page.tsx", "mx-auto mt-6 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]"],
    ];

    for (const [file, marker] of expectations) {
      expect(read(file), `${file} should center standalone code windows`).toContain(marker);
    }
  });

  it("centers the explanatory text that introduces blockchain gas estimation", () => {
    const content = read("src/app/blockchain/page.tsx");
    expect(content).toContain('mx-auto text-center text-xl font-medium tracking-tight text-teal');
    expect(content).toContain('mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground');
  });
});
