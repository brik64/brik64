import { ExternalLink } from "lucide-react";
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
            THE AI-NATIVE SYNTHETIC LANGUAGE
          </p>

          <h1 className="max-w-xl text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            BRIK64 is the first programming language
            <span className="text-teal"> designed for AI.</span>
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

        <div className="relative mt-12 flex min-h-[420px] items-center justify-center lg:mt-0 lg:min-h-[520px] lg:justify-end">
          <MonomerGrid variant="hero" />
        </div>
      </div>
    </section>
  );
}
