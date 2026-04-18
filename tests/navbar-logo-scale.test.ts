import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Navbar logo scale", () => {
  it("uses the sticker logo asset at a half-scale footprint in the shell", () => {
    const navbar = read("src/components/Navbar.tsx");

    expect(navbar).toContain("/brand/brik64-logo-white-sticker.png");
    expect(navbar).toContain("relative h-6 w-[120px] overflow-hidden");
    expect(navbar).not.toContain("/brand/brik64-logo-white-teal.png");
  });
});
