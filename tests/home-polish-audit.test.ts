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
    expect(home).toContain("1. Download the CLI");
    expect(home).toContain("2. Add the skill to your AI agent");
    expect(home).toContain("3. Register in the platform");
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
    expect(home).toContain("flex flex-nowrap items-center gap-4");
    expect(home).toContain("min-h-[64px] w-fit items-center gap-2.5 rounded-[22px]");
    expect(home).toContain('font-mono text-[14px] font-semibold');
    expect(home).toContain("h-12 w-12 shrink-0 items-center justify-center rounded-[16px]");
    expect(home).not.toContain("lg:text-7xl");
    expect(home).not.toContain("h-16 w-16");
  });

  it("uses the darker add-skills CTA in the hero instead of the older teal get-skills button", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("Grab Skill");
    expect(home).toContain("tone=\"secondary\"");
    expect(home).toContain("min-h-[60px] w-fit justify-start rounded-[22px]");
    expect(home).toContain("GitHubMark className=\"h-5 w-5\"");
    expect(home).toContain("href=\"https://github.com/brik64-org/skills\"");
    expect(home).toContain("bg-[#1b2940]");
    expect(home).not.toContain(">GET SKILLS<");
  });

  it("keeps a third hero action for platform registration", () => {
    const home = read("src/components/vnext/home.tsx");

    expect(home).toContain("Sign Up");
    expect(home).toContain('href="/signup"');
    expect(home).toContain("tone=\"secondary\"");
    expect(home).toContain('src="/brand/b64-icon-alpha.png"');
  });

  it("keeps Grab Skill and Sign Up with matching CTA footprint", () => {
    const home = read("src/components/vnext/home.tsx");

    const sharedWidthClassMatches = home.match(/w-fit/g) ?? [];
    expect(sharedWidthClassMatches.length).toBeGreaterThanOrEqual(2);
    expect(home).not.toContain("w-[272px]");
    expect(home).toContain("Grab Skill");
    expect(home).toContain("Sign Up");
    expect(home).toContain("alt=\"B64 icon\"");
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

describe("Home polish audit — monomer section stays balanced", () => {
  it("splits monomer matrices and the data tile into two responsive columns", () => {
    const home = read("src/components/vnext/home.tsx");
    const tile = read("src/components/vnext/monomer-tile.tsx");

    expect(home).toContain("grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:items-center");
    expect(home).toContain("mt-14 flex w-full justify-center");
    expect(home).toContain("mt-10 flex w-full flex-wrap justify-center gap-4 lg:justify-start");
    expect(home).toContain('className="mx-auto"');
    expect(home).not.toContain("hidden lg:block shrink-0");
    expect(tile).toContain("w-full max-w-[360px] min-h-[340px]");
  });
});

describe("Home polish audit — regulated industries section stays credible", () => {
  it("renders the six regulated industry cards with qualified badge language", () => {
    const regulated = read("src/components/vnext/regulated-industries-section.tsx");

    expect(regulated).toContain("Regulated Environments");
    expect(regulated).toContain("Built for review-critical industry surfaces.");
    expect(regulated).toContain("Aerospace");
    expect(regulated).toContain("Healthcare");
    expect(regulated).toContain("Automotive");
    expect(regulated).toContain("Finance");
    expect(regulated).toContain("Government");
    expect(regulated).toContain("Engineering");
    expect(regulated).toContain("DO-178C Evidence Support");
    expect(regulated).toContain("IEC 62304 Aligned");
    expect(regulated).toContain("ISO 26262 Support");
    expect(regulated).toContain("PCI DSS Evidence");
    expect(regulated).toContain("FedRAMP Readiness");
    expect(regulated).toContain("IEC 61508-Oriented");
    expect(regulated).toContain("frameworkLabel: \"FedRAMP\"");
    expect(regulated).toContain("shortLabel: \"GOVRNMT\"");
    expect(regulated).toContain("panelLabel: \"Security Review\"");
  });

  it("avoids prohibited certification language inside the regulated industries section", () => {
    const regulated = read("src/components/vnext/regulated-industries-section.tsx");

    expect(regulated).not.toContain("Officially compliant");
    expect(regulated).not.toContain("Approved by");
    expect(regulated).not.toContain("Accredited by");
    expect(regulated).not.toContain("Authorized by");
    expect(regulated).not.toContain("Guaranteed compliance");
    expect(regulated).not.toContain("official certification");
    expect(regulated).not.toContain("References to industry frameworks describe support for evidence workflows");
  });

  it("places the regulated industries section after the route chooser at the bottom of the homepage", () => {
    const home = read("src/components/vnext/home.tsx");
    const routeChooserIndex = home.indexOf('{/* Section 10: Route Chooser */}');
    const industriesIndex = home.indexOf("<RegulatedIndustriesSection />");

    expect(routeChooserIndex).toBeGreaterThan(-1);
    expect(industriesIndex).toBeGreaterThan(-1);
    expect(industriesIndex).toBeGreaterThan(routeChooserIndex);
  });

  it("uses the smaller technical badge as a secondary marker below the copy block", () => {
    const regulated = read("src/components/vnext/regulated-industries-section.tsx");

    expect(regulated).toContain("mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between");
    expect(regulated).toContain("sm:max-w-[60%]");
    expect(regulated).toContain("max-w-[188px] shrink-0");
    expect(regulated).toContain("text-[18px] font-black uppercase");
  });

  it("keeps all industry badges as single-line standardized chips", () => {
    const regulated = read("src/components/vnext/regulated-industries-section.tsx");

    expect(regulated).toContain("flex flex-col gap-2.5 sm:max-w-[60%]");
    expect(regulated).toContain("h-9 w-[214px] items-center justify-center whitespace-nowrap");
    expect(regulated).toContain("text-[10px] font-semibold uppercase tracking-[0.12em]");
  });
});

describe("Home polish audit — bounded and extended monomer language stays aligned", () => {
  it("mentions the 64 extended monomers in the atomic logic and agentic capability sections", () => {
    const home = read("src/components/vnext/home.tsx");

    expect(home).toContain("plus 64 extended monomers for open interaction surfaces");
    expect(home).toContain("plus 64 extended monomers for controlled open interaction");
  });
});

describe("Home polish audit — engineering grid pattern stays layered", () => {
  it("keeps minor grid, major grid, and crosshair markers in both hero and blueprint backgrounds", () => {
    const globals = read("src/app/globals.css");

    expect(globals).toContain("--hero-grid-minor: 24px");
    expect(globals).toContain("--hero-grid-major: 120px");
    expect(globals).toContain("--hero-grid-cross");
    expect(globals).toContain("ellipse 9px 1px at 50% 50%");
    expect(globals).toContain("ellipse 1px 9px at 50% 50%");

    expect(globals).toContain("--blueprint-grid-minor: 24px");
    expect(globals).toContain("--blueprint-grid-major: 120px");
    expect(globals).toContain("--blueprint-grid-cross");
    expect(globals).toContain("ellipse 7px 1px at 50% 50%");
    expect(globals).toContain("ellipse 1px 7px at 50% 50%");
    expect(globals).toContain("calc(var(--hero-grid-major) / -2) calc(var(--hero-grid-major) / -2)");
    expect(globals).toContain("calc(var(--blueprint-grid-major) / -2) calc(var(--blueprint-grid-major) / -2)");
  });
});
