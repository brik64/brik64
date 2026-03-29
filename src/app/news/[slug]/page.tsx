import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { newsArticles, getNewsArticle } from "@/lib/news-data";
import { newsContent } from "@/lib/news-content";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const tagColors: Record<string, string> = {
  LAUNCH: "bg-green-100 text-green-700",
  PLATFORM: "bg-sky-100 text-sky-700",
  DOCS: "bg-blue-100 text-blue-700",
  TOOLS: "bg-amber-100 text-amber-700",
  "OPEN SOURCE": "bg-purple-100 text-purple-700",
  COMMUNITY: "bg-rose-100 text-rose-700",
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — BRIK-64 News`,
    description: article.excerpt,
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

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          {/* Back link */}
          <a
            href="/news"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to News
          </a>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  tagColors[article.tag] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {article.tag}
              </span>
              <span className="text-sm text-[#322F2D]/40">{article.date}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1817] sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg text-[#322F2D]/60">
              {article.excerpt}
            </p>
          </header>

          {/* Content */}
          <div className="prose-brik">
            {Content ? <Content /> : (
              <p className="text-[#322F2D]/60">Content coming soon.</p>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
