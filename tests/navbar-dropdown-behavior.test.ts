import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Navbar dropdown behavior", () => {
  it("uses one controlled dropdown state so only one panel can stay open", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("const [activeDropdown, setActiveDropdown] = useState<DropdownKey | null>(null);");
    expect(navbar).toContain("const closeDropdowns = () => setActiveDropdown(null);");
    expect(navbar).toContain('onMouseLeave={closeDropdowns}');
    expect(navbar).toContain('onMouseEnter={() => setActiveDropdown("product")}');
    expect(navbar).toContain('onMouseEnter={() => setActiveDropdown("industries")}');
    expect(navbar).toContain('active={activeDropdown === "product"}');
    expect(navbar).toContain('active={activeDropdown === "industries"}');
    expect(navbar).toContain('activeDropdown === "product"');
    expect(navbar).toContain('activeDropdown === "industries"');
    expect(navbar).not.toContain("group-hover:visible group-hover:opacity-100 group-hover:translate-y-0");
  });

  it("keeps desktop dropdown groups horizontal and width-bounded like the InsForge reference", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("grid w-[calc(100vw-2rem)] max-w-[920px] grid-cols-1 bg-neutral-900 lg:grid-cols-2");
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
