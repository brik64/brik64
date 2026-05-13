import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("Proof Notes public page", () => {
  const page = readFileSync(join(process.cwd(), "src/app/proof-notes/page.tsx"), "utf8");

  it("links to the public verifier domain", () => {
    expect(page).toContain("https://brik64.dev/proofs/");
  });

  it("keeps Proof Note claims bounded", () => {
    expect(page).not.toMatch(/guaranteed correct|fully certified PR|zero bugs/i);
    expect(page).toContain("does not cover");
    expect(page).toContain("Submitted code requires no BRIK64 dependency");
  });
});
