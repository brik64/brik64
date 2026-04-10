import { describe, expect, it } from "vitest";
import fs from "fs";
import path from "path";

import { formatUsageCount } from "@/components/MonomerArtifacts";

const ROOT = path.resolve(__dirname, "..");

describe("Monomer badge count formatting", () => {
  it("keeps three-digit counts literal", () => {
    expect(formatUsageCount(21)).toBe("21");
    expect(formatUsageCount(999)).toBe("999");
  });

  it("compresses thousand-range counts to K notation", () => {
    expect(formatUsageCount(1000)).toBe("1K");
    expect(formatUsageCount(1999)).toBe("1K");
    expect(formatUsageCount(2000)).toBe("2K");
    expect(formatUsageCount(3456)).toBe("3K");
  });
});

describe("Monomer SVG geometry", () => {
  it("renders a fixed 340x340 SVG tile for the showcase", () => {
    const content = fs.readFileSync(path.join(ROOT, "src/components/MonomerSvg.tsx"), "utf-8");
    expect(content).toContain('viewBox="0 0 340 340"');
    expect(content).toContain('fontSize="200"');
    expect(content).toContain('fontSize="60"');
    expect(content).toContain('r="52"');
  });
});
