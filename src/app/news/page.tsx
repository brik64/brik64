import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
  EditorialHeroVNext, 
  FeaturedPostCard, 
  PostCardVNext
} from "@/components/vnext/editorial";
import { SupportingSurface } from "@/components/vnext/primitives";
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
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Navbar />
      
      <main className="flex-1">
        <EditorialHeroVNext
          eyebrow="News"
          title="Launches, platform updates, and public milestones."
          description="News keeps the same design grammar as the blog, but with lighter density and faster scanning. The two sections are aligned visually and differentiated editorially."
          topics={["LAUNCH", "PLATFORM", "DOCS", "COMMUNITY"]}
        />

        <SupportingSurface className="relative border-t border-white/5 bg-black py-24">
          <div className="mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
            <FeaturedPostCard item={featuredArticle} hrefBase="/news" />

            <div className="mt-24">
              <div className="flex flex-wrap items-center justify-between gap-6 pb-12">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Recent updates</p>
                  <h2 className="text-3xl font-bold tracking-tight text-white">What shipped</h2>
                </div>
                <p className="text-sm font-medium text-white/40">{newsArticles.length} public updates</p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {restArticles.map((article) => (
                  <PostCardVNext key={article.slug} item={article} hrefBase="/news" />
                ))}
              </div>
            </div>
          </div>
        </SupportingSurface>
      </main>

      <Footer />
    </div>
  );
}
