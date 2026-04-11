import { ProblemFrameArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { CircuitDivider } from "@/components/ui/pixel-perfect/circuit-divider";

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[01] · PROBLEM"
          title="AI accelerates output. Teams still need a formal layer for review, reuse, and handoff."
          description="Mainstream languages optimize expression. Technical leaders still need a bounded way to model generated and existing logic so migration, governance, audit, and reuse do not depend on hidden assumptions."
        />

        <div className="mt-10">
          <ProblemFrameArtifact />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Review before trust",
            "Explicit boundaries",
            "Reuse without drift",
          ].map((point) => (
            <div
              key={point}
              className="rounded-full border border-border/80 bg-muted/20 px-4 py-2 text-xs font-medium text-muted-foreground shadow-sm"
            >
              {point}
            </div>
          ))}
        </div>

        <div className="mt-12">
          <CircuitDivider />
        </div>
      </div>
    </section>
  );
}
