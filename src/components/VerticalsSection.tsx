import { RiskCaseBoardArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function VerticalsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[12] · VERTICALS"
          title="Industries where a bug can kill."
          description="Range types, exhaustive matching, and formal verification for domains where runtime bugs are unacceptable."
        />

        <div className="mt-8">
          <RiskCaseBoardArtifact />
        </div>
      </div>
    </section>
  );
}
