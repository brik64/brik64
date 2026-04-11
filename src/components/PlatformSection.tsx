import { ArrowRight, BadgeCheck, FolderOpen, GitBranch, Globe } from "lucide-react";
import { RegistryWorkbenchArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import type { ReactNode } from "react";

interface FeatureCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const features: FeatureCard[] = [
  {
    icon: <FolderOpen className="h-5 w-5 text-teal" />,
    title: "Workspace library",
    description:
      "Teams keep private blueprints, versions, and review state visible instead of scattering them across tools.",
  },
  {
    icon: <Globe className="h-5 w-5 text-teal" />,
    title: "Registry rows",
    description:
      "Public and shared packages keep hashes, versions, closure state, and target posture attached to the same package identity.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "Publication path",
    description:
      "Publication, PR review, and package updates stay aligned to the same canonical blueprint instead of creating parallel stories.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
    title: "Governed reuse",
    description:
      "Teams reuse reviewed logic without losing provenance, boundary notes, or package state.",
  },
];

export function PlatformSection() {
  return (
    <section id="platform" className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[05] · PLATFORM"
          title="The platform is where blueprints are published, discovered, and governed."
          description="Platform is the product layer where teams keep workspace state, package identity, registry discovery, and publication workflow aligned to the same canonical blueprint."
        />

        <div className="mt-10">
          <RegistryWorkbenchArtifact />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-3xl border border-border/80 bg-background p-6 shadow-sm transition-colors hover:border-teal/30"
            >
              <div className="mb-3 flex items-center gap-2.5">
                {f.icon}
                <span className="text-sm font-semibold">{f.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <span className="rounded-full border border-teal/30 bg-teal/10 px-3.5 py-1 text-xs font-medium text-teal">
            PRODUCT LAYER &mdash; /platform + /registry
          </span>
          <a
            href="/registry"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-teal transition-colors hover:text-teal/80"
          >
            Browse registry rows
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
