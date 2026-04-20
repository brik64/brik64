import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Navbar logo scale", () => {
  it("uses the same primary white wordmark and scale as the footer", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("/brand/brik64-logo-primary-horizontal-white.svg");
    expect(navbar).toContain("width={184}");
    expect(navbar).toContain("height={36}");
    expect(navbar).toContain('className="h-10 w-auto"');
    expect(navbar).toContain("unoptimized");
    expect(navbar).not.toContain("/brand/brik64-logo-primary-horizontal-menu.svg");
    expect(navbar).not.toContain("/brand/brik64-logo-white-sticker.png");
    expect(navbar).not.toContain("/brand/brik64-logo-white-teal.png");
  });
});
