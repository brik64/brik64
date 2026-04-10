import { ArrowRight, FileCode, Shield, Maximize2 } from "lucide-react";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts.client";
import { PhiC } from "@/components/PhiC";
import { FeatureMatrixSurface, HomeSectionHeader } from "@/components/PageArtifacts";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

const keyPoints = [
  {
    icon: <FileCode className="h-5 w-5 text-teal" />,
    title: "Shared grammar",
    desc: "A finite syntax an LLM can learn end to end.",
  },
  {
    icon: <Shield className="h-5 w-5 text-teal" />,
    title: "Verified operations",
    desc: "Core ops are proven; extended ops stay contract-bounded.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-teal" />,
    title: "Closure before shipping",
    desc: (
      <>
        If the blueprint stays open (<PhiC /> ≠ 1), it never ships.
      </>
    ),
  },
  {
    icon: <Maximize2 className="h-5 w-5 text-teal" />,
    title: "Domain Constraints",
    desc: "Every input range is explicit and compiler-enforced.",
  },
];

export function PCDSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[02] · THE BLUEPRINT"
          title="Teach your agent PCD. Install the official skills now."
          description="BRIK64 ships official skills so your agent learns the same PCD grammar, EVA composition, and BRIK64 operations your team uses instead of guessing a looser approximation."
        />

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <HomePrimaryButton
            href="https://github.com/brik64-admin/brik64-skills"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brands/github.svg" alt="" aria-hidden="true" className="h-4 w-4" />
            Install AI skills
          </HomePrimaryButton>
          <HomeSecondaryButton
            href="https://github.com/brik64-admin/brik64-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-85"
          >
            Browse the skill repo
          </HomeSecondaryButton>
        </div>

        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
          Give your agent the official BRIK64 skills and it can start learning PCD, EVA composition, and BRIK64 operations immediately.
        </p>

        <div className="mt-12">
          <BlueprintHubArtifact />
        </div>

        <div className="mt-12">
          <FeatureMatrixSurface
            eyebrow="Blueprint Surface"
            title="The skill install is only useful because the grammar stays finite, closed, and reviewable."
            description="The same payload that makes PCD learnable for an agent also makes it inspectable for a staff engineer reviewing proof, domains, and composition."
            metrics={[
              { label: "Grammar", value: "finite", detail: "A bounded syntax an LLM and a reviewer can both hold." },
              { label: "Closure", value: <><PhiC /> = 1</>, detail: "Open blueprints stop before shipping." },
              { label: "Domains", value: "explicit", detail: "Input envelopes are compiler-visible, not implied." },
            ]}
            rows={keyPoints.map((point) => ({
              title: point.title,
              body: typeof point.desc === "string" ? point.desc : "If the blueprint stays open, it never ships.",
              state: point.title === "Closure before shipping" ? "accent" : "default",
            }))}
          />
        </div>

        <p className="mt-14 mx-auto max-w-3xl text-center text-sm italic leading-relaxed text-muted-foreground">
          &ldquo;An AI doesn&apos;t need a better language. It needs a language where incorrect programs cannot compile.&rdquo;
        </p>
      </div>
    </section>
  );
}
