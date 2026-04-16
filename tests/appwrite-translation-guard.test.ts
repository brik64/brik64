import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Appwrite translation guard", () => {
  it("keeps the hero aligned to a single announcement pill instead of chip soup", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("AnnouncementPill");
    expect(home).toContain("Platform, registry, and bounded blueprint workflow");
    expect(home).not.toContain("heroSignals");
  });

  it("keeps the home equipped with a tool rail under the hero", () => {
    const home = read("src/components/vnext/home.tsx");
    expect(home).toContain("ToolRail");
    expect(home).toContain("Designed for the systems you already run");
    expect(home).toContain("TypeScript");
    expect(home).toContain("PostgreSQL");
  });

  it("records the extracted Appwrite component grammar in repo docs", () => {
    const research = read("docs/research/appwrite-visual-component-inventory.md");
    expect(research).toContain("Component Inventory");
    expect(research).toContain("Hero announcement pill");
    expect(research).toContain("Tool/framework rail");
    expect(research).toContain("Large multi-column footer");
  });
});
