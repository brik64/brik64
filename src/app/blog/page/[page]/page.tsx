import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  EditorialCard,
  EditorialHero,
  PaginationRail,
} from "@/components/EditorialSystem";
import { blogPosts } from "@/lib/blog-data";
import { paginateItems } from "@/lib/editorial-utils";

const POSTS_PER_PAGE = 9;
const ARCHIVE_POSTS = blogPosts.slice(1);
const TOTAL_PAGES = Math.max(1, Math.ceil(ARCHIVE_POSTS.length / (POSTS_PER_PAGE - 1)));

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, TOTAL_PAGES - 1) }, (_, index) => ({
    page: String(index + 2),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > TOTAL_PAGES) {
    return {};
  }

  return {
    title: `Engineering Blog — Page ${pageNumber} — BRIK64`,
    description: `Archive page ${pageNumber} of the BRIK64 engineering blog.`,
    alternates: {
      canonical: `/blog/page/${pageNumber}`,
    },
  };
}

export default async function BlogArchivePage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const pageNumber = Number(page);

  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > TOTAL_PAGES) {
    notFound();
  }

  const pagination = paginateItems(ARCHIVE_POSTS, pageNumber, POSTS_PER_PAGE - 1);

  return (
    <>
      <Navbar />
      <main className="relative z-10 flex-1">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <EditorialHero
            eyebrow={`Blog Archive · Page ${pageNumber}`}
            title="The BRIK64 archive stays navigable as it grows."
            description="Static pagination keeps the archive indexable, predictable, and readable without collapsing the listing into one infinite wall."
            chips={["ARCHIVE", "ENGINEERING", "PLATFORM", "RESEARCH"]}
          />

          <section className="px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Archive page
                  </p>
                  <h1 className="mt-2 text-center text-2xl font-semibold tracking-tight text-foreground sm:text-left">
                    Page {pageNumber}
                  </h1>
                </div>
                <p className="text-sm text-muted-foreground">
                  Showing posts {pagination.start + 2}-{pagination.end + 1} of {ARCHIVE_POSTS.length + 1}.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {pagination.items.map((post) => (
                  <EditorialCard key={post.slug} item={post} hrefBase="/blog" />
                ))}
              </div>

              <PaginationRail basePath="/blog" page={pageNumber} totalPages={pagination.totalPages} />
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
