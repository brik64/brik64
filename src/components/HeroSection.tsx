import Link from "next/link";
import { HeroWireframe } from "@/components/HeroWireframe";
import { MonomerGrid } from "@/components/MonomerGrid";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

export function HeroSection() {
  return (
    <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
      <HeroWireframe />

      <div className="pointer-events-none relative z-10 px-6 pt-20 pb-16 md:px-12 lg:grid lg:grid-cols-[minmax(0,1.02fr)_minmax(28rem,0.98fr)] lg:items-center lg:gap-8 lg:px-16 lg:pt-28 lg:pb-20 xl:gap-12">
        <div className="relative z-20 max-w-2xl">
          <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-[3px]">
            THE FORMAL LAYER FOR AI-ERA PROGRAMMING
          </p>

          <h1 className="max-w-xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            BRIK64 is the formal layer
            <span className="text-teal"> for AI-era programming.</span>
          </h1>

          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed md:text-lg">
            BRIK64 gives generated and existing software a formal language, a canonical blueprint, and a compilation path that makes logic reviewable, portable, testable, and governable before teams trust, reuse, or export it.
          </p>

          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            What if software behaved more like hardware? Not literally. As a designed system with explicit parts, a blueprint before emission, and review before promotion.
          </p>

          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HomePrimaryButton href="/cli">
              Open the CLI
            </HomePrimaryButton>
            <HomeSecondaryButton href="/platform" className="opacity-90 hover:opacity-100">
              Open platform
            </HomeSecondaryButton>
            <Link
              href="/foundations"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-teal"
            >
              Read the foundations
            </Link>
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
