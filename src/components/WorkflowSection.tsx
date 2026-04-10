import { WorkflowRailArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function WorkflowSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[06] · WORKFLOW"
          title="Lift, certify, publish. Without leaving the review loop."
          description="Connect the repo, lift changed logic, certify the circuit, then publish the proof where review already happens."
        />

        <div className="mt-10">
          <WorkflowRailArtifact />
        </div>
      </div>
    </section>
  );
}
