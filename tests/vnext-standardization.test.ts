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
    // Logo should have a height of ~42px (30% increase from previous size)
    expect(content).toContain('h-[42px]');
  });
});

describe("Homepage Narrative — High Impact & Authority", () => {
  it("Hero subtitle uses the concise, high-velocity version and larger font", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("Formalizes software as an information circuit, providing verified and hash-locked logic certification.");
    expect(content).toContain('text-xl leading-relaxed text-white/60');
  });

  it("PCD section subtitle is optimized for brevity", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("A formal intermediate representation built for strict trust, certification, and exact cross-target portability.");
  });

  it("Agentic capability subtitle is technically optimized", () => {
    const content = read("src/components/vnext/home.tsx");
    expect(content).toContain("A finite, 64-monomer vocabulary mathematically optimized for rule-based reasoning and Agentic code authoring.");
  });
});

describe("Visual Polish — Carousel & New Philosophy Section", () => {
  it("ToolRail implements a seamless loop with 12 color logos from brand assets", () => {
    const content = read("src/components/vnext/primitives.tsx");
    expect(content).toContain('src={`/brands/${logo.id}.${(logo as any).ext || \'svg\'}`}');
    expect(content).toContain('id: "rust", name: "Rust", ext: "png"');
    expect(content).toContain('animate={{ x: [0, -1056] }}'); // Recalculated for 12 items (12 * 88)
    expect(content).toContain('[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'); // Fade effect
    expect(content).toContain('ease: "linear"'); // Essential for seamless continuous motion
    expect(content).toContain('duration: 25'); // Controlled speed
    expect(content).toContain('h-10 w-10'); // Scaled up icons
  });

  it("PageHeaderVNext supports centered alignment via prop", () => {
    const content = read("src/components/vnext/primitives.tsx");
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
