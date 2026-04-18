import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Navbar dropdown behavior", () => {
  it("uses one controlled dropdown state so only one panel can stay open", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);");
    expect(navbar).toContain("const closeDropdowns = () => setActiveDropdown(null);");
    expect(navbar).toContain('className="relative mx-auto max-w-[1520px]"');
    expect(navbar).toContain('onMouseLeave={closeDropdowns}');
    expect(navbar).toContain('onMouseEnter={() => setActiveDropdown("product")}');
    expect(navbar).toContain('onMouseEnter={() => setActiveDropdown("industries")}');
    expect(navbar).toContain('active={isProductActive}');
    expect(navbar).toContain('active={isIndustriesActive}');
    expect(navbar).toContain('isOpen={activeDropdown === "product"}');
    expect(navbar).toContain('isOpen={activeDropdown === "industries"}');
    expect(navbar).toContain('activeDropdown === "product"');
    expect(navbar).toContain('activeDropdown === "industries"');
    expect(navbar).not.toContain("group-hover:visible group-hover:opacity-100 group-hover:translate-y-0");
  });

  it("keeps desktop dropdown groups horizontal and width-bounded like the InsForge reference", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("w-[min(920px,calc(100vw-2rem))]");
    expect(navbar).toContain("rounded-[20px] border border-white/10 bg-[rgba(8,14,22,0.72)]");
    expect(navbar).toContain("max-h-[560px] opacity-100 translate-y-0");
    expect(navbar).toContain("absolute left-0 right-0 top-full hidden pt-2 xl:block");
    expect(navbar).toContain("relative z-20 rounded-[24px]");
    expect(navbar).toContain("lg:border-r lg:last:border-r-0");
    expect(navbar).toContain('title: "Industries"');
    expect(navbar).toContain('title: "Systems"');
    expect(navbar).not.toContain("2xl:flex-row");
    expect(navbar).not.toContain("max-w-[1112px]");
  });

  it("renders Docs as a new-tab external link in the top menu and mobile menu", () => {
    const siteConfig = read("src/lib/site-config.ts");
    const navbar = read("src/components/Navbar.tsx");
    expect(navbar).toContain('external={"external" in item && Boolean(item.external)}');
    expect(navbar).toContain('target="_blank"');
    expect(navbar).toContain("ArrowUpRight");
    expect(siteConfig).toContain('label: "Docs"');
    expect(siteConfig).toContain("https://docs.brik64.dev");
  });
});
