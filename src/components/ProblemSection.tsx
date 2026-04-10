import { ProblemFrameArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { CircuitDivider } from "@/components/CircuitDivider";

export function ProblemSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[01] · THE PROBLEM"
          title="Mainstream languages optimize expression. Teams still need certifiable structure."
          description="Ad hoc rules drift across teams, and AI makes that variation faster. BRIK64 starts from the opposite constraint: finite material, explicit domains, and circuits that must close before they ship."
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
