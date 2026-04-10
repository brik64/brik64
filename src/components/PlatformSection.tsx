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
    title: "Personal Library",
    description:
      "Reuse certified circuits by project without lifting proven work again.",
  },
  {
    icon: <Globe className="h-5 w-5 text-teal" />,
    title: "Public Registry",
    description:
      "Search certified circuits before rewriting solved logic.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "Visual Composition",
    description:
      "Compose with explicit EVA boundaries instead of loose diagrams.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
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
