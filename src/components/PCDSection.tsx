import { ArrowRight, FileCode, Maximize2, Shield } from "lucide-react";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts.client";
import { PhiC } from "@/components/PhiC";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

const keyPoints = [
  {
    icon: <FileCode className="h-5 w-5 text-teal" />,
    title: "One canonical blueprint",
    desc: "Source notation can change while the canonical review object stays stable.",
  },
  {
    icon: <Shield className="h-5 w-5 text-teal" />,
    title: "Declared domains stay visible",
    desc: "Inputs, ranges, and composition stay readable before emission.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-teal" />,
    title: "Model before emission",
    desc: (
      <>
        If the blueprint stays open (<PhiC /> ≠ 1), it stops before promotion.
      </>
    ),
  },
  {
    icon: <Maximize2 className="h-5 w-5 text-teal" />,
    title: "Supported target emission",
    desc: "One bounded review object emits across supported targets.",
  },
];

export function PCDSection() {
  return (
    <section id="blueprint" className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[03] · CANONICAL BLUEPRINT"
          title="PCD is the canonical blueprint."
          description="BRIK64 lifts existing logic or authors new logic into PCD so teams can inspect domains, composition, and closure before supported targets are emitted. The syntax can change; the blueprint should stay stable."
        />

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <HomePrimaryButton href="/pcd">
            Read PCD
          </HomePrimaryButton>
          <HomeSecondaryButton href="/foundations" className="opacity-85">
            Read the foundations
          </HomeSecondaryButton>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          PCD keeps the formal review object stable while teams lift from existing code,
          model declared domains, and emit supported targets from the same
          bounded chain.
        </p>

        <div className="mt-12">
          <BlueprintHubArtifact />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
          {keyPoints.map((kp) => (
            <div
              key={kp.title}
              className="group rounded-3xl border border-border/80 bg-muted/70 p-6 shadow-sm transition-colors hover:border-teal/30 hover:bg-teal/[0.03]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-teal/20 bg-teal/[0.05]">
                {kp.icon}
              </div>
              <p className="text-sm font-medium">{kp.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {kp.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Source syntax can change. The canonical blueprint should not.
        </p>
      </div>
    </section>
  );
}
