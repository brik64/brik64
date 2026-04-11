import { describe, expect, it } from "vitest";

import { blogPosts } from "@/lib/blog-data";

import { read } from "./site-grammar";

const bannedBlogPhrases = [
  "Zero Bugs",
  "If it compiles, it works",
  "No other tool on Earth",
  "unhackable",
  "Ready today",
  "proves your code correct",
];

describe("Blog editorial discipline", () => {
  it("blog index no longer describes the editorial system itself", () => {
    const content = read("src/app/blog/page.tsx");
    expect(content).toContain(
      "Essays, product notes, engineering reports, and research writing",
    );
    expect(content).not.toContain("editorial surface");
    expect(content).not.toContain("featured artifact");
  });

  it("blog article sidebar no longer explains the rendering system", () => {
    const content = read("src/app/blog/[slug]/page.tsx");
    expect(content).toContain("foundations essays, product notes, and engineering reports");
    expect(content).not.toContain("editorial system stays coherent");
  });

  it("blog corpus removes blocked hype phrases", () => {
    const corpus = JSON.stringify(blogPosts);
    for (const phrase of bannedBlogPhrases) {
      expect(corpus).not.toContain(phrase);
    }
    expect(/\bimpossible\b/i.test(corpus)).toBe(false);
  });

  it("blog corpus keeps strong but publicable reference headlines", () => {
    const titles = blogPosts.map((post) => post.title);
    expect(titles).toContain("What Digital Circuitality Tries to Formalize");
    expect(titles).toContain("One Blueprint Across Multiple Targets");
    expect(titles).toContain("BPU: Policy Enforcement as a Hardware Roadmap");
  });
});
