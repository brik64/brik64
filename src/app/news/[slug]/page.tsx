import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EditorialArticleHeroVNext, PostCardVNext } from "@/components/vnext/editorial";
import { SupportingSurface } from "@/components/vnext/primitives";
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
  const relatedArticles = newsArticles.filter((candidate) => candidate.slug !== slug).slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-1">
        <EditorialArticleHeroVNext
          href="/news"
          eyebrow="News Entry"
          title={article.title}
          excerpt={article.excerpt}
          date={article.date}
          tag={article.tag}
          category={article.category}
          coverImage={article.coverImage}
          coverAlt={article.coverAlt}
        />

        <article className="py-24">
          <div className="mx-auto grid max-w-[1400px] px-6 md:px-8 lg:px-12 gap-16 lg:grid-cols-[minmax(0,1fr)_22rem]">
            <div className="prose-brik min-w-0">
              {Content ? <Content /> : <p className="text-white/40 italic">Content coming soon.</p>}
            </div>
            
            <aside className="space-y-8">
              <div className="rounded-[2rem] border border-white/5 bg-[#05080c]/60 p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
                  Update scope
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-white/40">
                  News is intentionally lighter than the blog: same polished shell, faster payload, and no pagination until volume requires it.
                </p>
              </div>
            </aside>
          </div>
        </article>

        <SupportingSurface className="border-t border-white/5 bg-[#0b0b0f] py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <div className="flex flex-wrap items-center justify-between gap-6 pb-12">
              <div className="space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Related updates</p>
                <h2 className="text-3xl font-bold tracking-tight text-white">What else shipped</h2>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {relatedArticles.map((related) => (
                <PostCardVNext key={related.slug} item={related} hrefBase="/news" />
              ))}
            </div>
          </div>
        </SupportingSurface>
      </main>

      <Footer />
    </div>
  );
}
