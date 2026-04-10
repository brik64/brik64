import { IntegrationRelayArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function IntegrationsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[07] · INTEGRATIONS"
          title="GitHub stays the source of truth."
          description="BRIK64 lifts, certifies, comments on the PR, and emits packages without forcing a parallel workflow."
        />

        <div className="mt-10">
          <IntegrationRelayArtifact />
        </div>
      </div>
    </section>
  );
}
