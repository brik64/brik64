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
    expect(content).toContain("max-w-3xl");
    expect(content).toContain("text-balance");
    expect(content).toContain("max-w-2xl text-base leading-7");
  });
});

describe("Home polish audit — hero density stays controlled", () => {
  it("uses the vNext hero instead of the rotating monomer hero system", () => {
    const page = read("src/app/page.tsx");
    const home = read("src/components/vnext/home.tsx");
    expect(page).toContain("<VNextHome />");
    expect(home).toContain("Trust infrastructure for software.");
    expect(home).toContain("INSTALL THE BRIK64 ECOSYSTEM");
    expect(home).not.toContain("MonomerGrid");
  });

  it("keeps the first viewport free of rotating card stacks", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).not.toContain("HERO_SIGNAL_CARDS");
    expect(home).not.toContain("cardIndexes:");
    expect(home).not.toContain("TrustedBySection");
  });

  it("keeps the hero copy aligned to the poster-first direction", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("Formalizes software as an information circuit");
    expect(home).toContain("Grab the {renderBrandText(\"BRIK64\")} CLI and get the Skills for your agent");
  });

  it("keeps the hero announcement pill solid and free of decorative status markers", () => {
    const primitives = read("src/components/vnext/primitives.tsx");
    expect(primitives).toContain('bg-[#11161d]');
    expect(primitives).toContain('hover:bg-[#141b24]');
    expect(primitives).not.toContain('h-2 w-2 rounded-full bg-[color:var(--accent)]');
    expect(primitives).not.toContain('<ArrowRight className="h-4 w-4 text-white/56" />');
  });

  it("adds a lit grid mesh that fades out before the black background takes over", () => {
    const home = read("src/components/vnext/home.tsx");
    const globals = read("src/app/globals.css");
    expect(home).toContain("hero-light-grid");
    expect(home).toContain("hero-light-glow");
    expect(globals).toContain(".hero-light-grid");
    expect(globals).toContain("repeating-linear-gradient(");
    expect(globals).toContain("transparent 92%");
  });

  it("keeps the install command inside a compact command pill instead of oversized headline text", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("min-h-[64px] items-center gap-3 rounded-[22px]");
    expect(home).toContain("font-mono text-[15px] font-semibold");
    expect(home).toContain("h-12 w-12 items-center justify-center rounded-[16px]");
    expect(home).not.toContain("lg:text-7xl");
    expect(home).not.toContain("h-16 w-16");
  });
});

describe("Home polish audit — closing CTA stays technical, not ornamental", () => {
  it("keeps the final CTA inside the vNext home shell", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("VISIT DIGITALCIRCUITALITY.COM");
    expect(home).toContain("digitalcircuitality.com");
  });

  it("routes the closing CTA toward product and docs instead of growth prompts", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain('href="https://digitalcircuitality.com"');
    expect(home).toContain('href="/platform"');
    expect(home).not.toContain('title: "Discord"');
  });
});
