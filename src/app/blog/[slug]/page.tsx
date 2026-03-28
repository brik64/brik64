import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog-data";
import { blogContent } from "@/lib/blog-content";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

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

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — BRIK-64 Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const Content = blogContent[params.slug];

  return (
    <>
      <Navbar />
      <main className="bg-background flex-1">
        <article className="mx-auto max-w-3xl px-6 py-16">
          {/* Back link */}
          <a
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </a>

          {/* Header */}
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                  tagColors[post.tag] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {post.tag}
              </span>
              <span className="text-sm text-[#322F2D]/40">{post.date}</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1817] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-[#322F2D]/60">{post.excerpt}</p>
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
