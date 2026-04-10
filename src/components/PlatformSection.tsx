import { ArrowRight } from "lucide-react";
import { RegistryWorkbenchArtifact } from "@/components/HomeProofArtifacts";
import { FeatureMatrixSurface, HomeSectionHeader } from "@/components/PageArtifacts";

interface FeatureCard {
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    title: "Personal Library",
    description:
      "Reuse certified circuits by project without lifting proven work again.",
  },
  {
    title: "Public Registry",
    description:
      "Search certified circuits before rewriting solved logic.",
  },
  {
    title: "Visual Composition",
    description:
      "Compose with explicit EVA boundaries instead of loose diagrams.",
  },
  {
    title: "Certification Badges",
    description:
      "Live proof invalidates the moment the circuit drifts.",
  },
];

export function PlatformSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[04] · THE PLATFORM"
          title="CAD for software, built for teams that need proof."
          description="The platform is not just a registry UI. It is the inspectable workbench where monomers, blueprints, packages, and proof metadata become one operational surface."
        />

        <div className="mt-10">
          <RegistryWorkbenchArtifact />
        </div>

        <div className="mt-8">
          <FeatureMatrixSurface
            eyebrow="Platform Surface"
            title="One workbench holds reuse, proof state, and publication."
            description="The registry workbench is the protagonist. The supporting payload explains how packages, proof, and composition stay attached to the same operational object."
            metrics={[
              { label: "Registry", value: "Live", detail: "Packages retain closure and export metadata." },
              { label: "Review path", value: "Inspectable", detail: "Teams review the same object they publish." },
              { label: "Reuse", value: "Bounded", detail: "Certified circuits survive across projects without semantic drift." },
            ]}
            rows={features.map((feature) => ({
              title: feature.title,
              body: feature.description,
              state: feature.title === "Certification Badges" ? "accent" : "default",
            }))}
          />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
            REGISTRY LIVE &mdash; registry.brik64.dev
          </span>
          <a
            href="/registry"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80"
          >
            Browse the registry
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
