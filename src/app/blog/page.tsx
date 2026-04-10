import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  EditorialCard,
  EditorialHero,
  FeaturedEditorialCard,
  PaginationRail,
} from "@/components/EditorialSystem";
import { blogPosts } from "@/lib/blog-data";
import { paginateItems } from "@/lib/editorial-utils";

const POSTS_PER_PAGE = 9;

export const metadata: Metadata = {
  title: "Engineering Blog — BRIK64",
  description:
    "Technical writing, product notes, research, and proof-driven engineering articles from the BRIK64 team.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  const [featuredPost, ...restPosts] = blogPosts;
  const pagination = paginateItems(restPosts, 1, POSTS_PER_PAGE - 1);

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <EditorialHero
            eyebrow="Blog"
            title="Proof-first engineering, compiler rigor, and the operating model behind BRIK64."
            description="The blog now behaves like an editorial surface: one featured artifact, compact metadata, paginated archives, and local covers that make every post scannable before you read a line."
            chips={["VISION", "ENGINEERING", "AI SAFETY", "PLATFORM"]}
          />

          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <FeaturedEditorialCard item={featuredPost} hrefBase="/blog" />

              <div className="mt-12 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Archive
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">
                    Latest posts
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {pagination.totalItems + 1} posts total. Page 1 of {pagination.totalPages}.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {pagination.items.map((post) => (
                  <EditorialCard key={post.slug} item={post} hrefBase="/blog" />
                ))}
              </div>

              <PaginationRail basePath="/blog" page={1} totalPages={pagination.totalPages} />
            </div>
          </section>
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
