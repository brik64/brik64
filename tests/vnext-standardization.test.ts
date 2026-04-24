import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

const ROOT = path.resolve(__dirname, "..");

function read(relativePath: string): string {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf-8");
}

describe("UI Standardization — Global Navigation & Brand", () => {
  it("Site config includes Shop and Docs in primary navigation", () => {
    const content = read("src/lib/site-config.ts");
    expect(content).toContain('label: "Shop"');
    expect(content).toContain('href: "/shop"');
    expect(content).toContain('label: "Docs"');
    expect(content).toContain('href: "https://docs.brik64.dev"');
  });

  it("Footer architecture is balanced with 4 clear columns", () => {
    const content = read("src/lib/site-config.ts");
    expect(content).toContain('title: "Product"');
    expect(content).toContain('title: "Company"');
    expect(content).toContain('title: "Legal & Trust"');
    expect(content).toContain('title: "Resources"');
  });

  it("Navbar implements the scaled-up institutional logo size", () => {
    const content = read("src/components/Navbar.tsx");
    expect(content).toContain('className="h-10 w-auto"');
  });
});

describe("Homepage Narrative — High Impact & Authority", () => {
  it("Hero subtitle uses the concise, high-velocity version and larger font", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("BRIK64 turns generated and existing software into canonical, reviewable blueprints.");
    expect(content).toContain("Turn generated and existing code into canonical blueprints that teams can review, certify, and govern.");
    expect(content).toContain('text-xl leading-relaxed text-white/60');
  });

  it("PCD section subtitle is optimized for brevity", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("Canonical software blueprints for review, certification, and portable emission.");
  });

  it("Agentic capability subtitle is technically optimized", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("Agents work against bounded operations, not loose generated text.");
  });
});

describe("Visual Polish — Carousel & New Philosophy Section", () => {
  it("ToolRail implements a seamless loop with 12 color logos from brand assets", () => {
    const content = read("src/components/vnext/primitives.tsx");
    expect(content).toContain('src={`/brands/${logo.id}.${logo.ext ?? "svg"}`}');
    expect(content).toContain('id: "rust", name: "Rust", ext: "png"');
    expect(content).toContain('animate={{ x: [0, -1056] }}'); // Recalculated for 12 items (12 * 88)
    expect(content).toContain('[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'); // Fade effect
    expect(content).toContain('ease: "linear"'); // Essential for seamless continuous motion
    expect(content).toContain('duration: 25'); // Controlled speed
    expect(content).toContain('h-10 w-10'); // Scaled up icons
  });

  it("PageHeaderVNext supports centered alignment via prop", () => {
    const content = read("src/components/vnext/primitives.tsx");
    expect(content).toContain("eyebrow: string | ReactNode;");
    expect(content).toContain('centered?: boolean;');
    expect(content).toContain('centered && "mx-auto text-center"');
  });

  it("Manifesto section for Digital Circuitality exists at the end of the page", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("Digital Circuitality.");
    expect(content).toContain("https://digitalcircuitality.com");
    expect(content).toContain("centered");
  });
});

describe("Industry Hero Backgrounds — Aerospace", () => {
  it("Risk page archetype supports optional hero background artwork", () => {
    const content = read("src/components/PageArchetypes.tsx");
    expect(content).toContain("backgroundImageSrc?: string;");
    expect(content).toContain("backgroundImageSrc={page.hero.backgroundImageSrc}");
    expect(content).toContain("style={{ backgroundImage: `url(${backgroundImageSrc})` }}");
    expect(content).toContain("opacity-[0.56]");
    expect(content).toContain("bg-[rgba(1,4,8,0.1)]");
    expect(content).toContain("blueprint-grid opacity-[0.08]");
  });

  it("Aerospace industry page binds the generated hero background image", () => {
    const content = read("src/lib/risk-page-data.ts");
    expect(content).toContain('heroBackgroundImageSrc: "/generated/aerospace-hero-bg.png"');
  });

  it("Aerospace hero keeps the stack higher in the viewport and removes duplicated metric cards", () => {
    const archetypes = read("src/components/PageArchetypes.tsx");
    const artifacts = read("src/components/HomeProofArtifacts.tsx");

    expect(archetypes).toContain('pt-20 pb-24 md:pt-32 md:pb-32 lg:pt-36 lg:pb-40');
    expect(archetypes).toContain('mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row');
    expect(archetypes).not.toContain('mx-auto mt-14 grid max-w-5xl gap-4 sm:grid-cols-3');
    expect(archetypes).toContain('mx-auto mt-16 max-w-4xl border-t border-white/10 pt-10');
    expect(artifacts).toContain("className?: string;");
    expect(artifacts).toContain("className,");
    expect(artifacts).toContain('dark ? "border-white/12 bg-[#0f1a28]" : "border-border/80 bg-background/90"');
  });
});
