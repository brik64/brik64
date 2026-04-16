"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock3, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { renderBrandText, ChipVNext, ButtonVNext } from "./primitives";

export interface EditorialItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  category?: string;
  coverImage: string;
  coverAlt: string;
}

export function EditorialTopic({ label }: { label: string }) {
  return (
    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
      {label}
    </span>
  );
}

export function EditorialHeroVNext({
  eyebrow,
  title,
  description,
  topics,
}: {
  eyebrow: string;
  title: string;
  description: string;
  topics: string[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0b0b0f] pb-32 pt-48">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[color:var(--accent)]">
            {renderBrandText(eyebrow)}
          </p>
          <h1 className="mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl">
            {renderBrandText(title)}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
            {renderBrandText(description)}
          </p>
          
          <div className="mt-12 flex flex-wrap gap-2.5">
            {topics.map((topic) => (
              <ChipVNext key={topic} variant="active" className="bg-white/5 border-white/10 text-white/50 text-[10px] py-1">
                {topic}
              </ChipVNext>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FeaturedPostCard({ item, hrefBase }: { item: EditorialItem; hrefBase: string }) {
  return (
    <Link
      href={`${hrefBase}/${item.slug}`}
      className="group relative flex flex-col lg:flex-row overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#05080c]/60 transition-all duration-300 hover:border-[color:var(--accent-soft)]/40 hover:bg-[#071019] hover:shadow-[0_24px_80px_rgba(0,0,0,0.3)]"
    >
      <div className="relative aspect-[16/10] lg:aspect-auto lg:w-1/2 overflow-hidden bg-black">
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent lg:bg-gradient-to-r" />
      </div>
      
      <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
        <div className="flex items-center gap-4">
          <EditorialTopic label={item.tag} />
          {item.category && (
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
              {item.category}
            </span>
          )}
        </div>
        
        <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl lg:text-4xl transition-colors group-hover:text-[color:var(--accent)]">
          {item.title}
        </h2>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/50">
          {item.excerpt}
        </p>
        
        <div className="mt-10 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-medium text-white/30">
            <Clock3 className="h-4 w-4" />
            {item.date}
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[color:var(--accent)] opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Read Archive <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function PostCardVNext({ item, hrefBase }: { item: EditorialItem; hrefBase: string }) {
  return (
    <Link
      href={`${hrefBase}/${item.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/5 bg-[#05080c]/60 transition-all duration-300 hover:border-[color:var(--accent-soft)]/20 hover:bg-[#071019]"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <Image
          src={item.coverImage}
          alt={item.coverAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      
      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-center gap-3">
          <EditorialTopic label={item.tag} />
          {item.category && (
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/20">
              {item.category}
            </span>
          )}
        </div>
        
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-white transition-colors group-hover:text-[color:var(--accent)]">
          {item.title}
        </h3>
        <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/40">
          {item.excerpt}
        </p>
        
        <div className="mt-8 flex items-center justify-between text-[12px] font-medium text-white/30">
          <span>{item.date}</span>
          <span className="font-black uppercase tracking-widest transition-colors group-hover:text-white">
            Open
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ArchivePagination({
  page,
  totalPages,
  onPageChange,
}: {
  page: number;
  totalPages: number;
  onPageChange?: (p: number) => void;
}) {
  if (totalPages <= 1) return null;

  return (
    <nav className="flex items-center justify-center gap-4 py-12">
      <button 
        disabled={page === 1}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-white/40 transition-all hover:border-white/20 hover:text-white disabled:opacity-20"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      
      <div className="flex items-center gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            className={cn(
              "h-10 min-w-[40px] rounded-full text-sm font-black transition-all",
              p === page 
                ? "bg-[color:var(--accent)] text-black" 
                : "text-white/40 hover:text-white hover:bg-white/5"
            )}
          >
            {p}
          </button>
        ))}
      </div>
      
      <button 
        disabled={page === totalPages}
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/5 bg-white/[0.02] text-white/40 transition-all hover:border-white/20 hover:text-white disabled:opacity-20"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </nav>
  );
}

export function EditorialArticleHeroVNext({
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
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0b0b0f] pb-16 pt-32 lg:pb-20 lg:pt-40">
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-8 lg:px-12">
        <Link href={href} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/30 transition-colors hover:text-[color:var(--accent)] mb-12">
          <ChevronLeft className="h-4 w-4" />
          Back to Archive
        </Link>
        
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] lg:items-center">
          <div>
            <div className="flex items-center gap-4">
              <EditorialTopic label={tag} />
              {category && (
                <span className="text-[10px] font-medium uppercase tracking-widest text-white/30">
                  {category}
                </span>
              )}
            </div>
            
            <h1 className="mt-8 text-balance text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              {renderBrandText(title)}
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/60">
              {renderBrandText(excerpt)}
            </p>
            
            <div className="mt-10 flex items-center gap-3 text-sm font-medium text-white/30">
              <Clock3 className="h-4 w-4 text-[color:var(--accent)]" />
              {date}
            </div>
          </div>
          
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] border border-white/10 bg-black shadow-[0_40px_120px_rgba(0,0,0,0.5)]">
            <Image
              src={coverImage}
              alt={coverAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
