import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { newsArticles } from "@/lib/news-data";

const tagColors: Record<string, string> = {
  LAUNCH: "bg-green-100 text-green-700",
  PLATFORM: "bg-sky-100 text-sky-700",
  DOCS: "bg-blue-100 text-blue-700",
  TOOLS: "bg-amber-100 text-amber-700",
  "OPEN SOURCE": "bg-purple-100 text-purple-700",
  COMMUNITY: "bg-rose-100 text-rose-700",
};

export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-background border-b border-[#EEEEEE] bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00b8d4]">
              NEWS
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1817] sm:text-5xl">
              What&apos;s new at BRIK-64
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#322F2D]/60">
              Announcements, releases, and milestones from the Digital
              Circuitality project.
            </p>
          </div>
        </section>

        {/* Articles */}
        <section className="bg-background bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl space-y-6">
            {newsArticles.map((article) => (
              <a
                key={article.slug}
                href={`/news/${article.slug}`}
                className="group block border border-[#EEEEEE] p-6 transition-all hover:border-[#00b8d4]/30 hover:shadow-md"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                      tagColors[article.tag] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {article.tag}
                  </span>
                  <span className="text-xs text-[#322F2D]/30">
                    {article.date}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-[#1A1817] group-hover:text-[#00b8d4] transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm leading-relaxed text-[#322F2D]/60">
                  {article.excerpt}
                </p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
