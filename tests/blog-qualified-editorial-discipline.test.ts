import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const bannedBlogClaims = [
  "Zero Bugs",
  "If it compiles, it works",
  "No other tool on Earth",
  "impossible",
  "unhackable",
  "Ready today",
  "proves your code correct",
];

describe("Blog qualified editorial discipline", () => {
  it("blog seeds keep publishable qualified language", () => {
    const source = read("src/lib/blog-data.ts");

    for (const banned of bannedBlogClaims) {
      expect(source).not.toContain(banned);
    }
  });

  it("index hero describes editorial lines, not the rendering system", () => {
    const source = read("src/app/blog/page.tsx");
    expect(source).toContain("Proof-first engineering");
    expect(source).not.toContain("editorial system");
    expect(source).not.toContain("CMS");
  });

  it("article sidebar gives reading context by topic, not implementation internals", () => {
    const source = read("src/app/blog/[slug]/page.tsx");
    expect(source).toContain("Reading context");
    expect(source).not.toContain("how this page renders");
    expect(source).not.toContain("template behavior");
  });
});

