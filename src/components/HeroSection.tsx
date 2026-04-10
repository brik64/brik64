"use client";

import dynamic from "next/dynamic";
import { ExternalLink } from "lucide-react";
import { TextGradient } from "@/components/ui/pixel-perfect/text-gradient";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { TextSlideUp } from "@/components/ui/pixel-perfect/text-slide-up";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const MonomerGrid = dynamic(
  () => import("@/components/MonomerGrid").then((m) => m.MonomerGrid),
  { ssr: false }
);

export function HeroSection() {
  return (
    <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
      {/* Layer 1: Animated wave background */}
      <HeroWireframe />

      {/* Layer 2: MonomerGrid — right half, above waves, captures mouse */}
      <div className="absolute top-0 right-0 bottom-0 z-10 hidden w-1/2 md:block">
        <MonomerGrid />
      </div>

      {/* Layer 3: Text content — left side, pointer-events-none so mouse passes to grid */}
      <div className="pointer-events-none relative z-20 px-6 pt-20 pb-16 md:px-12 lg:px-18 lg:pt-28 lg:pb-20">
        <div className="max-w-lg">
          <p className="text-muted-foreground mb-4 text-sm font-medium uppercase tracking-[3px]">
            <TextSlideUp delay={0.1}>THE AI-NATIVE SYNTHETIC LANGUAGE</TextSlideUp>
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            <TextReveal delay={0.3}>BRIK64 is the first programming language</TextReveal>{" "}
            <TextGradient className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              designed for AI.
            </TextGradient>
          </h1>

          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed md:text-lg">
            <TextReveal delay={1.0}>64 certified operations. 64 extended. An AI learns the entire language in one prompt. The compiler proves every program is correct. Free. Ready today.</TextReveal>
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
        </div>
      </div>
    </section>
  );
}
