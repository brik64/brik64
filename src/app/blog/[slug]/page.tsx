import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { EditorialArticleHeroVNext, PostCardVNext } from "@/components/vnext/editorial";
import { SupportingSurface } from "@/components/vnext/primitives";
import { CanonicalPageLayout } from "@/components/PageArchetypes";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return {
    title: `${post.title} — BRIK64 Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} — BRIK64 Blog`,
      description: post.excerpt,
      images: [{ url: post.coverImage, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const Content = blogContent[slug];
  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== slug).slice(0, 4);

  return (
    <CanonicalPageLayout>
      <main className="flex-1">
        <EditorialArticleHeroVNext
          href="/blog"
          eyebrow="Blog Article"
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          tag={post.tag}
          category={post.category}
          coverImage={post.coverImage}
          coverAlt={post.coverAlt}
        />

        <article className="py-24">
          <div className="mx-auto grid max-w-[1400px] px-6 md:px-8 lg:px-12 gap-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="prose-brik min-w-0">
              {Content ? <Content /> : <p className="text-white/40 italic">Content coming soon.</p>}
            </div>
            
            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-white/5 bg-[#05080c]/60 p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Reading context
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-white/40">
                  This article sits inside the BRIK64 archive of foundations essays, product notes, and engineering reports. Related posts continue the same themes from a different technical angle.
                </p>
              </div>
              
              <div className="rounded-[2rem] border border-white/5 bg-white/[0.02] p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Related posts
                </p>
                <div className="mt-8 space-y-6">
                  {relatedPosts.slice(0, 3).map((related) => (
                    <a
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="group block space-y-2 opacity-60 transition-opacity hover:opacity-100"
                    >
                      <p className="text-sm font-bold text-white group-hover:text-[color:var(--accent)] transition-colors">{related.title}</p>
                      <p className="text-xs leading-relaxed text-white/40 line-clamp-2">{related.excerpt}</p>
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </article>

        <SupportingSurface className="border-t border-white/5 bg-[#0b0b0f] py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 pb-12">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">More reading</p>
                <h2 className="text-3xl font-bold tracking-tight text-white">Continue the archive</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedPosts.map((related) => (
                <PostCardVNext key={related.slug} item={related} hrefBase="/blog" />
              ))}
            </div>
          </div>
        </SupportingSurface>
      </main>
    </CanonicalPageLayout>
  );
}
