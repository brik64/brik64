import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const tagColorMap: Record<string, string> = {
  VISION: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-400",
  TUTORIAL: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  "DEEP DIVE": "border-sky-500/20 bg-sky-500/10 text-sky-400",
  PRODUCT: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
  VERIFICATION: "border-rose-500/20 bg-rose-500/10 text-rose-400",
  MIGRATION: "border-orange-500/20 bg-orange-500/10 text-orange-400",
  HARDWARE: "border-amber-500/20 bg-amber-500/10 text-amber-500",
  "AI AGENTS": "border-indigo-500/20 bg-indigo-500/10 text-indigo-400",
  RESEARCH: "border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]",
  "AI SAFETY": "border-pink-500/20 bg-pink-500/10 text-pink-400",
  TOOLING: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  REVOLUTION: "border-violet-500/20 bg-violet-500/10 text-violet-400",
  SDKS: "border-lime-500/20 bg-lime-500/10 text-lime-400",
  ENGINEERING: "border-slate-500/20 bg-slate-500/10 text-slate-400",
  PLATFORM: "border-sky-500/20 bg-sky-500/10 text-sky-400",
  LAUNCH: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  DOCS: "border-[color:var(--accent-soft)]/20 bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]",
  TOOLS: "border-amber-500/20 bg-amber-500/10 text-amber-400",
  "OPEN SOURCE": "border-purple-500/20 bg-purple-500/10 text-purple-400",
  COMMUNITY: "border-rose-500/20 bg-rose-500/10 text-rose-400",
};

export function TopicPill({ label }: { label: string }) {
  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]",
        tagColorMap[label] ?? "border-border/80 bg-muted/60 text-muted-foreground",
      )}
    >
      {label}
    </span>
  );
}

export function EditorialHero({
  eyebrow,
  title,
  description,
  chips,
}: {
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
}) {
  return (
    <section className="border-b border-white/5 bg-black px-6 py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--accent)]">{eyebrow}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/50">
              {description}
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
            <p className="text-[10px] font-bold uppercase tracking-widest text-[#2BB6AC]">
              Editorial system
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <TopicPill key={chip} label={chip} />
              ))}
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/40">
              Featured artifact, compact metadata, clear hierarchy, and one protagonist surface per page.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface EditorialCardItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category?: string;
  coverImage: string;
  coverAlt: string;
}

export function FeaturedEditorialCard({
  item,
  hrefBase,
}: {
  item: EditorialCardItem;
  hrefBase: "/blog" | "/news";
}) {
  return (
    <Link
      href={`${hrefBase}/${item.slug}`}
      className="group grid overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[minmax(0,1.19fr)_minmax(18rem,0.81fr)]"
    >
      <div className="relative min-h-[22rem] bg-black">
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          priority
          className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
      </div>
      <div className="flex flex-col justify-between gap-8 p-8 lg:p-10">
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <TopicPill label={item.tag} />
            {item.category ? (
              <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                {item.category}
              </span>
            ) : null}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white transition-colors group-hover:text-[color:var(--accent)] sm:text-4xl">
            {item.title}
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-white/50">{item.excerpt}</p>
        </div>
        <div className="flex items-center justify-between gap-4 pt-4">
          <div className="inline-flex items-center gap-2.5 text-sm font-medium text-white/40">
            <Clock3 className="h-4 w-4" />
            {item.date}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2BB6AC]">
            Entry <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function EditorialCard({
  item,
  hrefBase,
}: {
  item: EditorialCardItem;
  hrefBase: "/blog" | "/news";
}) {
  return (
    <Link
      href={`${hrefBase}/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
    >
      <div className="relative aspect-[16/10] bg-black">
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          className="object-cover transition-transform duration-700 grayscale group-hover:grayscale-0 group-hover:scale-[1.05]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <TopicPill label={item.tag} />
          {item.category ? (
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
              {item.category}
            </span>
          ) : null}
        </div>
        <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors group-hover:text-[color:var(--accent)]">
          {item.title}
        </h3>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/50">{item.excerpt}</p>
        <div className="mt-8 flex items-center justify-between gap-4 pt-4 border-t border-white/5">
          <span className="text-xs font-medium text-white/30">{item.date}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2BB6AC]">
            Open <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PaginationRail({
  basePath,
  page,
  totalPages,
}: {
  basePath: "/blog";
  page: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const pageHref = (targetPage: number) =>
    targetPage === 1 ? basePath : `${basePath}/page/${targetPage}`;

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[1.4rem] border border-border/80 bg-card/65 px-5 py-4"
    >
      <Link
        href={page > 1 ? pageHref(page - 1) : "#"}
        aria-disabled={page === 1}
        className={cx(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors",
          page === 1 ? "pointer-events-none text-muted-foreground/40" : "text-foreground hover:text-[color:var(--accent)]",
        )}
      >
        <ArrowLeft className="h-4 w-4" />
        Previous
      </Link>
      <div className="flex flex-wrap items-center justify-center gap-2">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((targetPage) => (
          <Link
            key={targetPage}
            href={pageHref(targetPage)}
            aria-current={page === targetPage ? "page" : undefined}
            className={cx(
              "inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-medium transition-colors",
              page === targetPage
                ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-white"
                : "border-white/10 bg-black text-white/50 hover:border-white/20 hover:text-white",
            )}
          >
            {targetPage}
          </Link>
        ))}
      </div>
      <Link
        href={page < totalPages ? pageHref(page + 1) : "#"}
        aria-disabled={page === totalPages}
        className={cx(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors",
          page === totalPages ? "pointer-events-none text-muted-foreground/40" : "text-foreground hover:text-[color:var(--accent)]",
        )}
      >
        Next
        <ArrowRight className="h-4 w-4" />
      </Link>
    </nav>
  );
}

export function EditorialArticleHero({
  href,
  eyebrow,
  title,
  excerpt,
  date,
  tag,
  category,
  coverImage,
  coverAlt,
}: {
  href: string;
  eyebrow: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category?: string;
  coverImage: string;
  coverAlt: string;
}) {
  return (
    <div className="border-b border-white/5 bg-black px-6 py-10 lg:px-16 lg:py-14">
      <div className="mx-auto max-w-6xl">
        <Link href={href} className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/40 transition-colors hover:text-[color:var(--accent)]">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.8fr)] lg:items-center">
          <div className="space-y-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--accent)]">{eyebrow}</p>
            <div className="flex flex-wrap items-center gap-3">
              <TopicPill label={tag} />
              {category ? (
                <span className="text-[11px] font-bold uppercase tracking-widest text-white/30">
                  {category}
                </span>
              ) : null}
            </div>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-white/50">
              {excerpt}
            </p>
            <div className="inline-flex items-center gap-2.5 text-sm font-medium text-white/40">
              <Clock3 className="h-4 w-4" />
              {date}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
            <Image
              src={coverImage}
              alt={coverAlt}
              fill
              priority
              className="object-cover grayscale"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
