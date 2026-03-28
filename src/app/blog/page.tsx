"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts, getAllTags, getAllCategories } from "@/lib/blog-data";

const tagColors: Record<string, string> = {
  VISION: "bg-purple-100 text-purple-700",
  TUTORIAL: "bg-green-100 text-green-700",
  "DEEP DIVE": "bg-blue-100 text-blue-700",
  PRODUCT: "bg-cyan-100 text-cyan-700",
  VERIFICATION: "bg-red-100 text-red-700",
  MIGRATION: "bg-orange-100 text-orange-700",
  HARDWARE: "bg-yellow-100 text-yellow-800",
  "AI AGENTS": "bg-indigo-100 text-indigo-700",
  RESEARCH: "bg-teal-100 text-teal-700",
  "AI SAFETY": "bg-rose-100 text-rose-700",
  TOOLING: "bg-amber-100 text-amber-700",
  REVOLUTION: "bg-fuchsia-100 text-fuchsia-700",
  SDKS: "bg-lime-100 text-lime-700",
  ENGINEERING: "bg-slate-100 text-slate-700",
  PLATFORM: "bg-sky-100 text-sky-700",
};

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const tags = getAllTags();
  const categories = getAllCategories();

  const filtered = blogPosts.filter((post) => {
    if (activeTag && post.tag !== activeTag) return false;
    if (activeCategory && post.category !== activeCategory) return false;
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-[#EEEEEE] bg-white px-6 py-20">
          <div className="mx-auto max-w-5xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[#00b8d4]">
              BLOG
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[#1A1817] sm:text-5xl">
              Stories from the frontier
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#322F2D]/60">
              Thoughts on verification, composition, coherence, and the future
              of software that works like hardware.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-[#EEEEEE] bg-[#FAFAFA] px-6 py-6">
          <div className="mx-auto max-w-6xl">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/40">
                Category:
              </span>
              <button
                onClick={() => setActiveCategory(null)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !activeCategory
                    ? "bg-[#1A1817] text-white"
                    : "bg-white text-[#322F2D]/60 hover:text-[#1A1817]"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() =>
                    setActiveCategory(activeCategory === cat ? null : cat)
                  }
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-[#1A1817] text-white"
                      : "bg-white text-[#322F2D]/60 hover:text-[#1A1817]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/40">
                Tag:
              </span>
              <button
                onClick={() => setActiveTag(null)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  !activeTag
                    ? "bg-[#1A1817] text-white"
                    : "bg-white text-[#322F2D]/60 hover:text-[#1A1817]"
                }`}
              >
                All
              </button>
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() =>
                    setActiveTag(activeTag === tag ? null : tag)
                  }
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    activeTag === tag
                      ? "bg-[#1A1817] text-white"
                      : "bg-white text-[#322F2D]/60 hover:text-[#1A1817]"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <p className="mb-8 text-sm text-[#322F2D]/40">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((post) => (
                <a
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-xl border border-[#EEEEEE] bg-white p-6 transition-all hover:border-[#00b8d4]/30 hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                        tagColors[post.tag] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {post.tag}
                    </span>
                  </div>
                  <h2 className="mb-2 text-lg font-semibold leading-snug text-[#1A1817] group-hover:text-[#00b8d4] transition-colors">
                    {post.title}
                  </h2>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-[#322F2D]/60">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[#322F2D]/30">{post.date}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
