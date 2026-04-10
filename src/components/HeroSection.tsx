import { ExternalLink } from "lucide-react";
import { HeroWireframe } from "@/components/HeroWireframe";
import { MonomerGrid } from "@/components/MonomerGrid";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

export function HeroSection() {
  return (
    <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
      <HeroWireframe />

      <div className="pointer-events-none relative z-10 px-6 pt-20 pb-16 md:px-12 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-16 lg:pt-28 lg:pb-20">
        <div className="relative z-20 max-w-2xl">
          <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-[3px]">
            THE AI-NATIVE SYNTHETIC LANGUAGE
          </p>

          <h1 className="max-w-xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            BRIK64 is the first programming language{" "}
            <span className="text-teal">designed for AI.</span>
          </h1>

          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed md:text-lg">
            64 certified operations. 64 extended. An AI learns the entire language in one prompt, then compiles, certifies, and publishes through the same explicit grammar your team reviews.
          </p>

          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.24em] text-teal/80">
            Compile · Certify · Publish
          </p>

          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <HomePrimaryButton href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer">
              Start building &mdash; free
            </HomePrimaryButton>
            <HomeSecondaryButton
              href="https://digitalcircuitality.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100"
            >
              Learn the theory
              <ExternalLink className="h-3.5 w-3.5" />
            </HomeSecondaryButton>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Operations</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">128</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">64 core and 64 extended, all named and bounded.</p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Closure</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Φc = 1</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Closed circuits expose proof state instead of hidden runtime drift.</p>
            </div>
            <div className="rounded-3xl border border-border/80 bg-background/85 p-5 shadow-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Targets</p>
              <p className="mt-3 text-2xl font-semibold tracking-tight text-foreground">14</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">One blueprint emits across deterministic compilation targets.</p>
            </div>
          </div>
        </div>

        <div className="relative mt-12 min-h-[360px] lg:mt-0">
          <div className="absolute inset-0 rounded-[2rem] border border-teal/15 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.08),transparent_40%),linear-gradient(180deg,rgba(0,229,255,0.04),rgba(255,255,255,0.02))] shadow-[0_24px_80px_rgba(0,0,0,0.10)]" />
          <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
            <MonomerGrid variant="hero" />
          </div>
          <div className="absolute inset-x-6 bottom-6 z-10 rounded-[1.5rem] border border-border/80 bg-background/92 p-4 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Live surface</p>
                <p className="mt-2 text-sm font-semibold text-foreground">Representative monomer families, proof state, and outputs stay visible.</p>
              </div>
              <div className="rounded-full border border-teal/20 bg-teal/[0.08] px-3 py-1 text-xs font-semibold text-teal">
                Ready now
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
