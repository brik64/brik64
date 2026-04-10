import { BookOpen, ExternalLink, Globe } from "lucide-react";
import { ArtifactFrame, ArtifactHeader, StatusPill } from "@/components/HomeProofArtifacts";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/HomeButtons";

/* eslint-disable @next/next/no-img-element */
const resources = [
  {
    title: "Docs",
    href: "https://docs.brik64.dev",
    icon: <BookOpen className="h-5 w-5 text-teal" />,
    description: "docs.brik64.dev",
  },
  {
    title: "Registry",
    href: "/registry",
    icon: <Globe className="h-5 w-5 text-teal" />,
    description: "registry.brik64.dev",
  },
  {
    title: "GitHub",
    href: "https://github.com/brik64",
    icon: <img src="/brands/github.svg" alt="" aria-hidden="true" className="h-5 w-5" style={{ filter: "brightness(0) saturate(100%) invert(58%) sepia(78%) saturate(1640%) hue-rotate(152deg) brightness(101%) contrast(101%)" }} />,
    description: "github.com/brik64",
  },
];

export function CTASection() {
  return (
    <div className="px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="mx-auto max-w-5xl">
        <ArtifactFrame className="space-y-6">
          <ArtifactHeader
            eyebrow="Technical next step"
            title={<span className="text-balance text-3xl font-bold tracking-tight md:text-5xl">Start building with <span className="text-teal">BRIK64.</span></span>}
            description="Read the spec, inspect the registry, and verify the proof chain before you change your workflow."
            status={<StatusPill tone="teal">next step</StatusPill>}
          />

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <HomePrimaryButton href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer">
              Read the docs
            </HomePrimaryButton>
            <HomeSecondaryButton href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer">
              Learn the theory
              <ExternalLink className="h-3.5 w-3.5" />
            </HomeSecondaryButton>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-background/80">
            {resources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`grid gap-3 px-5 py-4 transition-colors hover:bg-teal/[0.03] md:grid-cols-[auto_120px_1fr_auto] md:items-center ${index > 0 ? "border-t border-border/70" : ""}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  {resource.icon}
                </div>
                <p className="text-sm font-semibold text-foreground">{resource.title}</p>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-teal">
                  Open
                  <ExternalLink className="h-3.5 w-3.5" />
                </span>
              </a>
            ))}
          </div>
        </ArtifactFrame>
      </div>
    </div>
  );
}
