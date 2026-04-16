import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import { paginateItems } from "@/lib/editorial-utils";
import { 
  EditorialHeroVNext, 
  FeaturedPostCard, 
  PostCardVNext, 
  ArchivePagination 
} from "@/components/vnext/editorial";
import { SupportingSurface } from "@/components/vnext/primitives";
import { CanonicalPageLayout } from "@/components/PageArchetypes";

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
    <CanonicalPageLayout>
      <EditorialHeroVNext 
        eyebrow="Engineering Blog"
        title="Technical writing, research, and proof-driven engineering."
        description="Notes from the BRIK64 team regarding formal verification, systems architecture, and the future of certified software execution."
        topics={["Verification", "Rust", "Systems", "Security"]}
      />

      <SupportingSurface className="relative bg-transparent py-24">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
          <FeaturedPostCard item={featuredPost} hrefBase="/blog" />

          <div className="mt-24">
            <div className="flex flex-wrap items-center justify-between gap-6 pb-12">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Archive</p>
                <h2 className="text-3xl font-bold tracking-tight text-white">Latest posts</h2>
              </div>
              <div className="text-right">
                 <p className="text-sm font-medium text-white/40">
                  Showing {pagination.totalItems + 1} posts total
                </p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--accent)] mt-1">
                  Page 1 of {pagination.totalPages}
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {pagination.items.map((post) => (
                <PostCardVNext key={post.slug} item={post} hrefBase="/blog" />
              ))}
            </div>

            <div className="mt-20 border-t border-white/5 pt-12">
              <ArchivePagination page={1} totalPages={pagination.totalPages} />
            </div>
          </div>
        </div>
      </SupportingSurface>
    </CanonicalPageLayout>
  );
}
