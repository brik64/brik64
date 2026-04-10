import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

function readSource(relPath: string) {
  return fs.readFileSync(path.join(process.cwd(), relPath), "utf8");
}

describe("performance guardrails", () => {
  it("keeps the global layout free of the full-page static circuit grid", () => {
    const source = readSource("src/app/layout.tsx");
    expect(source).not.toContain("StaticCircuitGrid");
  });

  it("keeps the hero free of heavy animation libraries", () => {
    const source = readSource("src/components/HeroSection.tsx");
    expect(source).not.toContain("framer-motion");
    expect(source).not.toContain("TextReveal");
    expect(source).not.toContain("TextSlideUp");
    expect(source).not.toContain("three");
  });

  it("keeps the CTA section free of motion wrappers", () => {
    const source = readSource("src/components/CTASection.tsx");
    expect(source).not.toContain("AnimatedCard");
    expect(source).not.toContain("framer-motion");
  });

  it("keeps the hero wireframe implementation static", () => {
    const source = readSource("src/components/HeroWireframe.tsx");
    expect(source).not.toContain("three");
    expect(source).not.toContain("requestAnimationFrame");
    expect(source).not.toContain("useEffect");
  });

  it("keeps the monomer grid implementation static", () => {
    const source = readSource("src/components/MonomerGrid.tsx");
    expect(source).not.toContain("canvas");
    expect(source).not.toContain("requestAnimationFrame");
    expect(source).not.toContain("getContext");
  });
});
