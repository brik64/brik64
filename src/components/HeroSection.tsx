"use client";

import dynamic from "next/dynamic";
import { BookOpen } from "lucide-react";

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
          <p className="text-muted-foreground mb-4 text-sm font-medium tracking-wide">
            The AI-native programming language
          </p>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The first language where AI-generated code is{" "}
            <span className="text-teal">mathematically correct.</span>
          </h1>

          <p className="text-muted-foreground mt-5 max-w-lg text-base leading-relaxed md:text-lg">
            128 operations an AI learns completely. Domain constraints the compiler
            enforces automatically. If it compiles, it works.
          </p>

          <div className="pointer-events-auto mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex h-11 max-w-sm items-center border border-teal/30 bg-background pr-1.5 pl-4 shadow-sm">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-full min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder-teal/40 outline-none"
              />
              <button className="inline-flex h-8 cursor-pointer items-center justify-center rounded-md bg-teal px-4 text-sm font-medium text-white transition-colors hover:bg-teal-hover">
                Get early access
              </button>
            </div>
          </div>
          <div className="pointer-events-auto mt-3 flex items-center gap-5">
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Read the docs <BookOpen className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
