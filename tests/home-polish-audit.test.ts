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
  it("renders the reduced hero monomer grid variant instead of the full grid", () => {
    const hero = read("src/components/HeroSection.tsx");
    const grid = read("src/components/MonomerGrid.tsx");
    expect(hero).toContain('<MonomerGrid variant="hero" />');
    expect(grid).toContain('variant = "default"');
    expect(grid).toContain("const HERO_FAMILIES = [");
    expect(grid).toContain('variant === "hero" ? "grid-cols-6" : "grid-cols-8"');
  });

  it("keeps the hero metrics precise and bounded", () => {
    const hero = read("src/components/HeroSection.tsx");
    expect(hero).toContain("md:grid-cols-3");
    expect(hero).toContain("64 core and 64 extended, all named and bounded.");
    expect(hero).toContain("Closed circuits expose proof state instead of hidden runtime drift.");
    expect(hero).toContain("One blueprint emits across deterministic compilation targets.");
  });
});

describe("Home polish audit — closing CTA stays technical, not ornamental", () => {
  it("removes the animated rainbow brand treatment from the closing CTA", () => {
    const cta = read("src/components/CTASection.tsx");
    expect(cta).not.toContain("animate-[rainbow_6s_linear_infinite]");
    expect(cta).not.toContain("text-transparent");
    expect(cta).not.toContain("bg-clip-text");
  });

  it("routes the closing CTA toward docs, registry, and GitHub instead of community-first links", () => {
    const cta = read("src/components/CTASection.tsx");
    expect(cta).toContain('title: "Docs"');
    expect(cta).toContain('title: "Registry"');
    expect(cta).toContain('title: "GitHub"');
    expect(cta).toContain("Read the docs");
    expect(cta).not.toContain('title: "Discord"');
    expect(cta).toContain("inspect the registry, and verify the proof chain");
  });
});
