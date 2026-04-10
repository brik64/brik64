import { describe, expect, it } from "vitest";

import { editorialPages, read } from "./site-grammar";

describe("Design grammar — editorial family", () => {
  for (const file of editorialPages) {
    it(`${file} stays on the editorial system instead of adopting product shells`, () => {
      const content = read(file);
      expect(content).toContain("Editorial");
      expect(content).not.toContain("CanonicalPageLayout");
      expect(content).not.toContain("UtilityPageView");
      expect(content).not.toContain("RiskPageView");
    });
  }

  it("archive pages keep the editorial hero and pagination rail", () => {
    const blogArchive = read("src/app/blog/page.tsx");
    const paginatedArchive = read("src/app/blog/page/[page]/page.tsx");
    expect(blogArchive).toContain("EditorialHero");
    expect(blogArchive).toContain("FeaturedEditorialCard");
    expect(blogArchive).toContain("PaginationRail");
    expect(paginatedArchive).toContain("EditorialHero");
    expect(paginatedArchive).toContain("PaginationRail");
  });

  it("detail pages keep article hero metadata and related-card rails", () => {
    const blogDetail = read("src/app/blog/[slug]/page.tsx");
    const newsDetail = read("src/app/news/[slug]/page.tsx");
    expect(blogDetail).toContain("EditorialArticleHero");
    expect(blogDetail).toContain("coverImage");
    expect(blogDetail).toContain("coverAlt");
    expect(newsDetail).toContain("EditorialArticleHero");
    expect(newsDetail).toContain("coverImage");
    expect(newsDetail).toContain("coverAlt");
  });

  it("editorial data keeps cover metadata available to the system", () => {
    const blogData = read("src/lib/blog-data.ts");
    const newsData = read("src/lib/news-data.ts");
    expect(blogData).toContain("EditorialCoverMeta");
    expect(blogData).toContain("getEditorialCover");
    expect(newsData).toContain("EditorialCoverMeta");
    expect(newsData).toContain("getEditorialCover");
  });
});
