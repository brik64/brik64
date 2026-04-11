import { WorkflowRailArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function WorkflowSection() {
  return (
    <section id="workflow" className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[03] · WORKFLOW"
          title="One reviewable path from source to evidence."
          description="Connect a repo or start from a fresh blueprint. Lift or author the logic. Check closure and declared domains. Certify the bounded artifact. Emit supported targets. Publish the review object where engineering already works."
        />

        <div className="mt-10">
          <WorkflowRailArtifact />
        </div>
      </div>
    </section>
  );
}
