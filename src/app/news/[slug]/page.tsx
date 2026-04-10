import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EditorialArticleHero, EditorialCard } from "@/components/EditorialSystem";
import { newsArticles, getNewsArticle } from "@/lib/news-data";
import { newsContent } from "@/lib/news-content";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) return {};

  return {
    title: `${article.title} — BRIK64 News`,
    description: article.excerpt,
    alternates: {
      canonical: `/news/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} — BRIK64 News`,
      description: article.excerpt,
      images: [{ url: article.coverImage, alt: article.coverAlt }],
    },
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) notFound();

  const Content = newsContent[slug];
  const relatedArticles = newsArticles.filter((candidate) => candidate.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <EditorialArticleHero
            href="/news"
            eyebrow="News Item"
            title={article.title}
            excerpt={article.excerpt}
            date={article.date}
            tag={article.tag}
            coverImage={article.coverImage}
            coverAlt={article.coverAlt}
          />

          <article className="px-6 py-12 lg:px-16">
            <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
              <div className="prose-brik min-w-0">
                {Content ? <Content /> : <p className="text-muted-foreground">Content coming soon.</p>}
              </div>
              <aside className="space-y-5">
                <div className="rounded-[1.6rem] border border-border/80 bg-muted/30 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Update scope
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    News is intentionally lighter than the blog: same polished shell, faster payload, and no pagination until volume requires it.
                  </p>
                </div>
              </aside>
            </div>
          </article>

          <section className="border-t border-border px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Related updates
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {relatedArticles.map((related) => (
                  <EditorialCard key={related.slug} item={related} hrefBase="/news" />
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
