"use client";

import { PhiC } from "@/components/PhiC";
import {
  Cpu,
  ShieldCheck,
  ArrowUpDown,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";
import type { ReactNode } from "react";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { Crosshair } from "@/components/ui/pixel-perfect/crosshair";
import { GridDots } from "@/components/ui/pixel-perfect/grid-dots";

interface CardData {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: ReactNode;
  href: string;
}

const cards: CardData[] = [
  {
    title: "Compile",
    icon: Cpu,
    description: "Write PCD once, emit verified binaries to any target. One blueprint, every language.",
    href: "/foundations",
  },
  {
    title: "Verify",
    icon: ShieldCheck,
    description: "Mathematical proof — not just tests. Structural certainty for every verified operation.",
    href: "/foundations",
  },
  {
    title: "Lift",
    icon: ArrowUpDown,
    description: "Import existing code from any mainstream language into PCD. No manual rewriting required.",
    href: "/foundations",
  },
  {
    title: "Certify",
    icon: BadgeCheck,
    description: (
      <>
        <PhiC /> = 1 means zero uncertainty — every operation closed, every path verified.
      </>
    ),
    href: "/foundations",
  },
];

interface FamilyInfo {
  name: string;
  desc: string;
}

const coreFamilies: FamilyInfo[] = [
  { name: "Arithmetic", desc: "Integer math with wrapping semantics" },
  { name: "Logic", desc: "Bitwise operations for digital circuits" },
  { name: "Memory", desc: "Stack and heap management" },
  { name: "Control", desc: "Branching, loops, and flow control" },
  { name: "I/O", desc: "Input and output streams" },
  { name: "String", desc: "Text processing with verified boundaries" },
  { name: "Crypto", desc: "Hashing, encryption, and signatures" },
  { name: "System", desc: "Host environment and diagnostics" },
];

const extendedFamilies: FamilyInfo[] = [
  { name: "Float64", desc: "IEEE 754 decimal math" },
  { name: "Math", desc: "Scientific computation" },
  { name: "Network", desc: "TCP, HTTP, DNS" },
  { name: "Graphics", desc: "Visual output" },
  { name: "Audio", desc: "Sound processing" },
  { name: "Filesystem", desc: "Persistent storage" },
  { name: "Concurrency", desc: "Parallel execution" },
  { name: "Interop", desc: "Connecting systems" },
];

function FamilyList({ families, tier }: { families: FamilyInfo[]; tier: "core" | "extended" }) {
  const isCore = tier === "core";

  return (
    <div className="grid grid-cols-2 gap-px sm:grid-cols-4">
      {families.map((family) => (
        <div
          key={family.name}
          className={cn(
            "bg-background px-4 py-3",
            isCore ? "hover:bg-teal/[0.03]" : "hover:bg-amber-500/[0.03]"
          )}
        >
          <span className="text-sm font-medium text-foreground">
            {family.name}
          </span>
          <p className="mt-0.5 text-[11px] text-muted-foreground">
            {family.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

export function WorldModelsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-3 md:mb-14">
          <Crosshair size={20} />
          <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
            [05] · THE FOUNDATION
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <GridDots className="absolute -top-4 -right-4 hidden opacity-50 md:block" cols={6} rows={4} />
          {/* Left */}
          <div>
            <h2 className="max-w-4xl text-2xl font-semibold leading-[40px] tracking-[-0.9px] text-balance md:text-4xl">
              <TextReveal>One compiler. Every guarantee.</TextReveal>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              64 Core = mathematically certified. 64 Extended = bridge to the real world.
              Write once in PCD, compile to any target, and ship with proof that every input is handled, every path verified. No runtime surprises.
            </p>
          </div>

          {/* Right — 4 Cards */}
          <div className="border-border/70 mt-16 overflow-hidden border">
            <div className="grid grid-cols-2">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={cn(
                      "group flex flex-col items-start p-5",
                      (index === 0 || index === 1) && "border-b border-border/70",
                      (index === 0 || index === 2) && "border-r border-border/70"
                    )}
                  >
                    <div className="flex w-full items-start justify-between">
                      <div className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-teal/30 bg-teal/10">
                        <Icon className="h-4 w-4 text-teal" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      {card.title}
                    </p>
                    <p className="mt-1.5 max-w-[220px] text-[11px] leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom — Operation Families */}
        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[2px] text-muted-foreground">
            Operation families
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            128 operations total, organized into 16 families. 64 Core = formally proven. 64 Extended = bounds-checked, zero panic paths.
          </p>

          {/* Core — Certified */}
          <div className="mt-8 overflow-hidden border border-teal/20">
            <div className="flex items-center gap-3 border-b border-teal/10 bg-teal/[0.03] px-4 py-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal">
                Core · Certified
              </span>
              <span className="text-xs text-muted-foreground">
                64 operations, formally proven
              </span>
            </div>
            <FamilyList families={coreFamilies} tier="core" />
          </div>

          {/* Extended — Contract */}
          <div className="mt-3 overflow-hidden border border-border/50">
            <div className="flex items-center gap-3 border-b border-border/30 bg-muted px-4 py-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Extended · Contract
              </span>
              <span className="text-xs text-muted-foreground">
                Bounds-checked, zero panic paths
              </span>
            </div>
            <FamilyList families={extendedFamilies} tier="extended" />
          </div>
        </div>
      </div>
    </section>
  );
}
