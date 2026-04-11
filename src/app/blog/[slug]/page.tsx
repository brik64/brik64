import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EditorialArticleHero, EditorialCard } from "@/components/EditorialSystem";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";

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
  const relatedPosts = blogPosts.filter((candidate) => candidate.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <EditorialArticleHero
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

          <article className="px-6 py-12 lg:px-16">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="prose-brik min-w-0">
                {Content ? <Content /> : <p className="text-muted-foreground">Content coming soon.</p>}
              </div>
              <aside className="space-y-5">
                <div className="rounded-[1.6rem] border border-border/80 bg-muted/30 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Reading context
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    This article sits inside the BRIK64 archive of foundations essays, product notes, and engineering reports. Related posts continue the same themes from a different technical angle.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-border/80 bg-background p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Related posts
                  </p>
                  <div className="mt-4 space-y-4">
                    {relatedPosts.map((related) => (
                      <a
                        key={related.slug}
                        href={`/blog/${related.slug}`}
                        className="block rounded-[1.1rem] border border-border/80 bg-muted/20 p-4 transition-colors hover:border-teal/30"
                      >
                        <p className="text-sm font-semibold text-foreground">{related.title}</p>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{related.excerpt}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </article>

          <section className="border-t border-border px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Continue reading
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">More from the archive</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedPosts.map((related) => (
                  <EditorialCard key={related.slug} item={related} hrefBase="/blog" />
                ))}
              </div>
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
