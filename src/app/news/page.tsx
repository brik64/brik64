import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EditorialCard, EditorialHero, FeaturedEditorialCard } from "@/components/EditorialSystem";
import { newsArticles } from "@/lib/news-data";

export const metadata: Metadata = {
  title: "News — BRIK64",
  description: "Launches, platform updates, documentation drops, and community milestones from BRIK64.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  const [featuredArticle, ...restArticles] = newsArticles;

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <EditorialHero
            eyebrow="News"
            title="Launches, platform updates, and public milestones without the flat release-list feel."
            description="News keeps the same design grammar as the blog, but with lighter density and faster scanning. The two sections are aligned visually and differentiated editorially."
            chips={["LAUNCH", "PLATFORM", "DOCS", "COMMUNITY"]}
          />

          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <FeaturedEditorialCard item={featuredArticle} hrefBase="/news" />

              <div className="mt-12 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Recent updates
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">What shipped</h2>
                </div>
                <p className="text-sm text-muted-foreground">{newsArticles.length} public updates</p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {restArticles.map((article) => (
                  <EditorialCard key={article.slug} item={article} hrefBase="/news" />
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
