import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Teal taxonomy", () => {
  it("documents the four short-label families and their current mapping", () => {
    const docs = read("docs/DESIGN-SYSTEM-VNEXT.md");

    expect(docs).toContain("## Teal Taxonomy");
    expect(docs).toContain("### 1. Announcement");
    expect(docs).toContain("### 2. Status");
    expect(docs).toContain("### 3. Section Label");
    expect(docs).toContain("### 4. Chip");
    expect(docs).toContain("`AnnouncementPill` → `Announcement`");
    expect(docs).toContain("`StatusPill` / `ProofBadge` → `Status`");
    expect(docs).toContain("`ChipVNext` / `CommandChip` → `Chip`");
    expect(docs).toContain("Never use a filled teal pill as a generic fallback");
  });

  it("keeps announcements, status pills, and section labels structurally distinct", () => {
    const primitives = read("src/components/vnext/primitives.tsx");
    const proofArtifacts = read("src/components/HomeProofArtifacts.tsx");
    const pageArtifacts = read("src/components/PageArtifacts.tsx");

    expect(primitives).toContain("export function AnnouncementPill");
    expect(primitives).toContain("bg-[#11161d]");
    expect(primitives).not.toContain('h-2 w-2 rounded-full bg-[color:var(--accent)]');
    expect(proofArtifacts).toContain("export function StatusPill");
    expect(proofArtifacts).toContain("uppercase tracking-[0.14em]");
    expect(proofArtifacts).toContain("export function ProofBadge");
    expect(pageArtifacts).toContain("text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground");
    expect(pageArtifacts).not.toContain("rounded-full border");
  });
});
