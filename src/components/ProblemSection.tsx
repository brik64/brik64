import { ProblemFrameArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { CircuitDivider } from "@/components/ui/pixel-perfect/circuit-divider";

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[01] · PROBLEM"
          title="AI accelerates output. It also accelerates semantic drift."
          description="Mainstream languages optimize expression. Engineering teams still need a bounded way to model, review, and reuse logic that must survive migration, handoff, and audit."
        />

        <div className="mt-10">
          <ProblemFrameArtifact />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {[
            "Finite surface",
            "Explicit domains",
            "Closure before promotion",
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
