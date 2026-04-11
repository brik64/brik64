import { WorkflowRailArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function WorkflowSection() {
  return (
    <section id="workflow" className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[04] · WORKFLOW"
          title="Lift, model, check, emit, and publish in one visible chain."
          description="Start from source or a draft blueprint. Recover the logic, model it in PCD, check closure and declared domains, emit supported targets, and publish the same review state where engineering already works."
        />

        <div className="mt-10">
          <WorkflowRailArtifact />
        </div>
      </div>
    </section>
  );
}
