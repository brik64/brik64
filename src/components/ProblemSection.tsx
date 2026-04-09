"use client";

import { ShieldCheck, Puzzle, ScanLine, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { AnimatedCard } from "@/components/ui/pixel-perfect/animated-card";
import { CircuitDivider } from "@/components/ui/pixel-perfect/circuit-divider";
import { Crosshair } from "@/components/ui/pixel-perfect/crosshair";

const cards: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    title: "128 Operations. Total.",
    desc: "A finite language an LLM can learn completely.",
  },
  {
    icon: <Puzzle className="h-5 w-5 text-teal" />,
    title: "Algebra, Not Duct Tape",
    desc: "EVA composition preserves correctness across joins.",
  },
  {
    icon: <ScanLine className="h-5 w-5 text-teal" />,
    title: "If It Compiles, It Works",
    desc: "Open circuits fail at compile time, not in production.",
  },
  {
    icon: <TrendingUp className="h-5 w-5 text-teal" />,
    title: "Certified Once. Trusted Forever.",
    desc: "Certified components stay reusable instead of decaying.",
  },
];

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-3">
          <Crosshair size={20} />
          <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] · THE PROBLEM
          </p>
        </div>

        <h3 className="max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          <TextReveal>Every other language lets you ship bugs.</TextReveal>
          <br />
          <span className="text-teal"><TextReveal delay={0.5}>This one doesn&apos;t.</TextReveal></span>
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          Python has 80,000+ built-in functions and no guarantees. JavaScript has 1,200 edge cases in type coercion alone. Every mainstream language was designed for humans to express ideas &mdash; not for machines to verify them.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <AnimatedCard key={card.title}>
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                {card.icon}
              </div>
              <p className="text-sm font-medium">{card.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
            </AnimatedCard>
          ))}
        </div>

        <div className="mt-12">
          <CircuitDivider />
        </div>
      </div>
    </section>
  );
}
