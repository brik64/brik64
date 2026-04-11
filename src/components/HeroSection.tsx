"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { HeroWireframe } from "@/components/HeroWireframe";
import { MonomerGrid } from "@/components/MonomerGrid";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

type HeroSlide = {
  eyebrow: string;
  headline: string;
  lead: string;
  ctas: Array<{ label: string; href: string }>;
};

const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: "THE FORMAL LAYER FOR AI-ERA PROGRAMMING",
    headline: "BRIK64 turns generated and existing software into formal, portable, testable blueprints.",
    lead: "A bounded language, a canonical blueprint, and a compilation path for teams that need logic to be reviewable before it is trusted, reused, or exported.",
    ctas: [
      { label: "Inspect the workflow", href: "/platform" },
      { label: "Open the CLI", href: "/cli" },
      { label: "Read the blueprint", href: "/pcd" },
    ],
  },
  {
    eyebrow: "BEYOND VIBE CODING",
    headline: "Software generation got fast. BRIK64 makes it formal.",
    lead: "Give AI-generated and existing code a bounded language, a canonical blueprint, and a multilang path to software that can be reviewed, optimized, tested, and reused with explicit structure.",
    ctas: [
      { label: "Start with the CLI", href: "/cli" },
      { label: "Explore the platform", href: "/platform" },
      { label: "Learn the theory", href: "/foundations" },
    ],
  },
];

export function HeroSection() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = HERO_SLIDES[activeSlideIndex];
  const headlineParts = activeSlide.headline.split("BRIK64");

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveSlideIndex((previous) => (previous + 1) % HERO_SLIDES.length);
    }, 10000);

    return () => window.clearInterval(rotation);
  }, []);

  return (
    <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
      <HeroWireframe />

      <div className="pointer-events-none relative z-10 px-6 pt-20 pb-16 md:px-12 lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(28rem,0.98fr)] lg:items-center lg:gap-8 lg:px-16 lg:pt-28 lg:pb-20 xl:gap-12">
        <div className="relative z-20 max-w-2xl">
          <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-[3px]">
            {activeSlide.eyebrow}
          </p>

          <h1 className="max-w-xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {headlineParts.map((part, index) => (
              <Fragment key={`${activeSlideIndex}-${index}`}>
                {index > 0 ? <span className="text-teal">BRIK64</span> : null}
                {part}
              </Fragment>
            ))}
          </h1>

          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed md:text-lg">
            {activeSlide.lead}
          </p>

          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HomePrimaryButton href={activeSlide.ctas[0]?.href ?? "/platform"}>
              {activeSlide.ctas[0]?.label ?? "Inspect the workflow"}
            </HomePrimaryButton>
            <HomeSecondaryButton
              href={activeSlide.ctas[1]?.href ?? "/cli"}
              className="opacity-90 hover:opacity-100"
            >
              {activeSlide.ctas[1]?.label ?? "Open the CLI"}
            </HomeSecondaryButton>
            <Link
              href={activeSlide.ctas[2]?.href ?? "/foundations"}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
            >
              {activeSlide.ctas[2]?.label ?? "Read the foundations"}
            </Link>
          </div>

          <div className="pointer-events-auto mt-4 flex items-center gap-2" aria-label="Hero option selector">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.eyebrow}
                type="button"
                onClick={() => setActiveSlideIndex(index)}
                className={`h-2.5 w-7 rounded-full border transition-colors ${
                  index === activeSlideIndex
                    ? "border-teal/50 bg-teal/70"
                    : "border-border bg-muted/40 hover:border-teal/30"
                }`}
                aria-label={`Show hero option ${index + 1}`}
                aria-pressed={index === activeSlideIndex}
              />
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Formal layer</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Generated + existing software</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The same layer can lift current code or author new bounded logic without changing the review posture.</p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Canonical blueprint</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">PCD</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">One blueprint keeps domains, composition, closure, and target emission attached to the same review object.</p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Governed delivery</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">CLI → platform → registry</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">The same chain can move from local review into publication, reuse, and enterprise handoff without hiding state.</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex min-h-[420px] items-center justify-center lg:mt-0 lg:min-h-[520px] lg:justify-end">
          <MonomerGrid variant="hero" />
        </div>
      </div>
    </section>
  );
}
