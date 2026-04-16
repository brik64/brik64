import { describe, expect, it } from "vitest";

import { footerGroups, industryDropdownItems, primaryNav, productDropdownItems, socialLinks } from "@/lib/site-config";
import { githubStarsSnapshot } from "@/lib/github-stars-snapshot";

import { read } from "./site-grammar";

describe("vNext shell", () => {
  it("keeps the canonical top-level nav and right rail", () => {
    const siteConfig = read("src/lib/site-config.ts");
    expect(primaryNav.map((item) => item.label)).toEqual([
      "Product",
      "Industries",
      "Pricing",
      "Blog",
      "Docs",
    ]);
    expect(productDropdownItems.map((item) => item.label)).toEqual([
      "Overview",
      "Workflow",
      "Platform",
      "CLI",
      "PCD",
      "Developer Stack",
    ]);
    expect(industryDropdownItems.map((item) => item.label)).toEqual([
      "Aerospace & Defense",
      "Healthcare",
      "Banking & Finance",
      "Automotive",
      "AI & Machine Learning",
      "Engineering",
      "Science & Research",
      "Government",
    ]);

    const navbar = read("src/components/Navbar.tsx");
    expect(navbar).toContain("GitHubStarBadge");
    expect(navbar).toContain("Login");
    expect(navbar).toContain("Sign Up");
    expect(navbar).toContain("socialLinks.discord");
    expect(navbar).toContain("Product");
    expect(navbar).toContain("Industries");
    expect(navbar).toContain("DropdownPanel");
    expect(navbar).toContain("MobileSection");
    expect(navbar).toContain("ArrowUpRight");
    expect(navbar).toContain("max-w-[920px]");
    expect(navbar).toContain("lg:grid-cols-2");
    expect(navbar).toContain("text-sm font-medium transition-all duration-200 select-none");
    expect(navbar).toContain("h-6 w-[100px]");
    expect(navbar).toContain("bg-[color:var(--accent)]");
    expect(navbar).toContain('target="_blank"');
    expect(navbar).not.toContain("Use cases");
    expect(siteConfig).toContain('label: "Docs"');
    expect(siteConfig).toContain("https://docs.brik64.dev");
  });

  it("keeps the footer groups and exact requested coverage", () => {
    expect(footerGroups.map((group) => group.title)).toEqual(["Company", "Resources", "Community"]);
    expect(footerGroups[1].links.map((item) => item.label)).toContain("Shop");
    expect(footerGroups[0].links.map((item) => item.label)).toContain("Privacy Policy");
    expect(footerGroups[0].links.map((item) => item.label)).toContain("Terms of Use");
    expect(footerGroups[1].links.map((item) => item.label)).toContain("PostgreSQL Tutorial");
    expect(footerGroups[2].links.map((item) => item.label)).toContain("YouTube");
  });

  it("uses a snapshot for GitHub stars instead of client-side runtime fetch", () => {
    expect(githubStarsSnapshot.repo).toBe("brik64/brik64");
    expect(githubStarsSnapshot.stars).toBeGreaterThanOrEqual(0);
    const navbar = read("src/components/Navbar.tsx");
    expect(navbar).not.toContain("useEffect(() => fetch");
    expect(navbar).not.toContain("fetch(\"https://api.github.com");
  });

  it("keeps social links configurable in site config", () => {
    expect(socialLinks.discord).toContain("discord");
    expect(socialLinks.githubRepo).toContain("github.com/brik64/brik64");
    expect(socialLinks.x).toContain("x.com");
    expect(socialLinks.githubOrg).toContain("github.com/brik64");
  });

  it("locks the shell to the slimmer InsForge-style proportions and avoids the older pill nav", () => {
    const navbar = read("src/components/Navbar.tsx");
    const layout = read("src/app/layout.tsx");
    const globals = read("src/app/globals.css");
    const primitives = read("src/components/vnext/primitives.tsx");

    expect(navbar).toContain("h-12 bg-[#0f0f0f]");
    expect(navbar).toContain("ml-10 hidden items-center gap-12");
    expect(navbar).toContain("ChevronDown");
    expect(navbar).toContain("h-6 w-[100px]");
    expect(navbar).toContain("w-[calc(100vw-2rem)] max-w-[920px]");
    expect(navbar).toContain("h-8 items-center justify-center rounded px-4 text-sm font-semibold leading-5");
    expect(navbar).toContain("border border-white bg-transparent px-4 text-sm font-semibold leading-5");
    expect(primitives).toContain("h-9 w-9 p-2 text-[#b4b4b4]");
    expect(primitives).toContain("min-w-[70px]");
    expect(primitives).toContain("viewBox=\"0 0 20 20\"");
    expect(navbar).not.toContain("backdrop-blur-xl");
    expect(navbar).not.toContain("text-[18px] font-bold");
    expect(navbar).not.toContain("2xl:flex-row");
    expect(layout).toContain("Inter");
    expect(layout).toContain("Jura");
    expect(layout).toContain("Manrope");
    expect(globals).toContain('\"Inter\"');
    expect(globals).toContain('\"Manrope\"');
    expect(globals).toContain("--font-brand");
    expect(globals).toContain("#00e5ff");
    expect(globals).toContain("rgba(0, 229, 255, 0.5)");
    expect(primitives).toContain("brand-wordmark");
  });

  it("renders the footer with a separate legal column and branded community icons", () => {
    const footer = read("src/components/Footer.tsx");
    expect(footer).toContain("<FooterColumn title=\"Legal\">");
    expect(footer).toContain("socialIconMap");
    expect(footer).toContain("DiscordMark");
    expect(footer).toContain("GitHubMark");
    expect(footer).toContain("LinkedInMark");
    expect(footer).toContain("YouTubeMark");
    expect(footer).toContain("<BrandWordmark>BRIK64</BrandWordmark>");
  });

  it("applies the brand wordmark renderer to shared visible brand copy", () => {
    const home = read("src/components/vnext/home.tsx");
    const footer = read("src/components/Footer.tsx");
    const archetypes = read("src/components/PageArchetypes.tsx");

    expect(home).toContain("renderBrandText(");
    expect(footer).toContain("renderBrandText(\"© 2026 BRIK64. All rights reserved.\")");
    expect(archetypes).toContain('typeof title === "string" ? renderBrandText(title) : title');
    expect(archetypes).toContain('typeof description === "string" ? renderBrandText(description) : description');
  });
});
