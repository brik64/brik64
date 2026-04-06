"use client";

import { useState } from "react";
import { MonomerCell } from "./MonomerCell";
import { AnimatedTabs } from "@/components/ui/pixel-perfect/animated-tabs";
import { TextReveal } from "@/components/ui/pixel-perfect/text-reveal";
import { Crosshair } from "@/components/ui/pixel-perfect/crosshair";
import {
  CORE_MONOMERS,
  EXTENDED_MONOMERS,
  DEMO_POLYMERS,
} from "@/lib/monomer-data";

export function ForgeSection() {
  const [polymerIdx, setPolymerIdx] = useState(0);
  const polymer = DEMO_POLYMERS[polymerIdx];

  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex items-center gap-3 md:mb-14">
          <Crosshair size={20} />
          <p className="text-xs font-medium tracking-[2px] text-muted-foreground">
            [04.1] · THE FORGE
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              <TextReveal>Compose polymers visually.</TextReveal>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Every polymer is a recipe of monomers. The forge shows which
              operations are used and how many times. Select a polymer to see
              its composition.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <AnimatedTabs
              tabs={DEMO_POLYMERS.map((p) => p.name)}
              defaultIndex={0}
              onChange={setPolymerIdx}
            />
            <span className="rounded-md bg-foreground px-3 py-1.5 font-mono text-xs font-semibold text-teal">
              Φ_c = {polymer.phiC} ✓
            </span>
          </div>
        </div>

        {/* Grids */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Core */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-sm bg-teal" />
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-teal">
                Core · Certified
              </span>
              <span className="text-[10px] text-muted-foreground">
                64 monomers
              </span>
            </div>
            <div className="rounded-lg border border-teal/15 bg-teal/[0.02] p-2">
              <div className="grid grid-cols-8 gap-1">
                {CORE_MONOMERS.map((m) => {
                  const count =
                    (polymer.core as Record<number, number>)[m.id] ?? 0;
                  return (
                    <MonomerCell
                      key={m.id}
                      id={m.id}
                      prefix={m.prefix}
                      name={m.name}
                      family={m.family}
                      active={count > 0}
                      count={count}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* Extended */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-sm bg-gold" />
              <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-muted-foreground">
                Extended · Contract
              </span>
              <span className="text-[10px] text-muted-foreground">
                64 monomers
              </span>
            </div>
            <div className="rounded-lg border border-border p-2">
              <div className="grid grid-cols-8 gap-1">
                {EXTENDED_MONOMERS.map((m) => {
                  const count =
                    (polymer.extended as Record<number, number>)[m.id] ?? 0;
                  return (
                    <MonomerCell
                      key={m.id}
                      id={m.id}
                      prefix={m.prefix}
                      name={m.name}
                      family={m.family}
                      active={count > 0}
                      count={count}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center justify-center gap-6 text-[10px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm bg-foreground" />
            Active (used)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-block h-3 w-3 rounded-sm border border-border bg-secondary/30" />
            Idle
          </span>
          <span className="flex items-center gap-1.5">
            <span className="inline-flex h-3 min-w-[12px] items-center justify-center rounded-full bg-circuit-red px-0.5 text-[7px] font-bold text-white">
              3
            </span>
            Count
          </span>
        </div>
      </div>
    </section>
  );
}
