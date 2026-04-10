"use client";

import { ProblemFrameArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { CircuitDivider } from "@/components/ui/pixel-perfect/circuit-divider";

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[01] · THE PROBLEM"
          title="Mainstream languages optimize expression, not certifiable structure."
          description="Python has 80,000+ built-in functions and no guarantees. JavaScript has 1,200 edge cases in type coercion alone. BRIK64 starts from the opposite constraint: finite material, explicit domains, and circuits that must close before they ship."
        />

        <div className="mt-10">
          <ProblemFrameArtifact />
        </div>

        <div className="mt-12">
          <CircuitDivider />
        </div>
      </div>
    </section>
  );
}
