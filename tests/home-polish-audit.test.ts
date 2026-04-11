import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

describe("Home polish audit — section headers stay visually stable", () => {
  it("uses a wider balanced header container across home and page sections", () => {
    const content = read("src/components/PageArtifacts.tsx");
    expect(content).toContain("max-w-4xl text-center");
    expect(content).toContain("text-balance");
    expect(content).toContain("max-w-2xl text-sm leading-relaxed");
  });
});

describe("Home polish audit — hero density stays controlled", () => {
  it("renders core + extended 8x8 monomer matrices with interactive inspection", () => {
    const hero = read("src/components/HeroSection.tsx");
    const grid = read("src/components/MonomerGrid.tsx");
    expect(hero).toContain('<MonomerGrid variant="hero" />');
    expect(grid).toContain('const HERO_CORE_MONOMERS = CORE_MONOMERS.slice(0, 64);');
    expect(grid).toContain('const HERO_EXTENDED_MONOMERS = EXTENDED_MONOMERS.slice(0, 64);');
    expect(grid).toContain('className="grid grid-cols-8');
    expect(grid).toContain("onMouseOver={() => setActiveMonomerId(track, monomer.id)}");
    expect(grid).toContain("onMouseEnter={() => setActiveMonomerId(track, monomer.id)}");
    expect(grid).toContain("onFocus={() => setActiveMonomerId(track, monomer.id)}");
    expect(grid).toContain('translateX(-${activeTrackIndex * 100}%)');
    expect(grid).toContain("CORE CERTIFIED");
    expect(grid).toContain("EXTENDED CONTRACT");
    expect(grid).not.toContain("Hover or focus any core monomer");
  });

  it("uses four hero cards and rotates two at a time in sync with the active title", () => {
    const hero = read("src/components/HeroSection.tsx");
    expect(hero).toContain("const HERO_SIGNAL_CARDS");
    expect(hero).toContain("cardIndexes: [0, 1]");
    expect(hero).toContain("cardIndexes: [2, 3]");
    expect(hero).toContain("Core model signals");
    expect(hero).toContain("Adoption signals");
    expect(hero).toContain("md:grid-cols-2");
    expect(hero).toContain("Generated + existing software");
    expect(hero).toContain("PCD");
    expect(hero).toContain("CLI + platform");
    expect(hero).toContain("Registry + handoff");
  });

  it("removes the old floating live-surface callout from the hero", () => {
    const hero = read("src/components/HeroSection.tsx");
    expect(hero).not.toContain("Live surface");
    expect(hero).not.toContain("Ready now");
    expect(hero).toContain("lg:justify-end");
  });
});

describe("Home polish audit — closing CTA stays technical, not ornamental", () => {
  it("removes the animated rainbow brand treatment from the closing CTA", () => {
    const cta = read("src/components/CTASection.tsx");
    expect(cta).not.toContain("animate-[rainbow_6s_linear_infinite]");
    expect(cta).not.toContain("text-transparent");
    expect(cta).not.toContain("bg-clip-text");
  });

  it("routes the closing CTA toward CLI, PCD, and platform instead of generic growth prompts", () => {
    const cta = read("src/components/CTASection.tsx");
    expect(cta).toContain('title: "CLI"');
    expect(cta).toContain('title: "Platform"');
    expect(cta).toContain('title: "Foundations"');
    expect(cta).toContain("Open the CLI");
    expect(cta).toContain("Open platform");
    expect(cta).not.toContain('title: "Discord"');
    expect(cta).toContain("evaluate the blueprint-to-publication chain on real logic");
  });
});
