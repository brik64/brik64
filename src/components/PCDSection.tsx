import { ArrowRight, FileCode, Maximize2, Shield } from "lucide-react";
import { BlueprintHubArtifact } from "@/components/HomeProofArtifacts";
import { PhiC } from "@/components/PhiC";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { HomePrimaryButton, HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

const keyPoints = [
  {
    icon: <FileCode className="h-5 w-5 text-teal" />,
    title: "AI-native language",
    desc: "A finite syntax an LLM can learn end to end.",
  },
  {
    icon: <Shield className="h-5 w-5 text-teal" />,
    title: "Verified operations",
    desc: "Core ops are proven; extended ops stay contract-bounded.",
  },
  {
    icon: <ArrowRight className="h-5 w-5 text-teal" />,
    title: "Verified by design",
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
          description="BRIK64 ships the skills that give your agent the ability to program in PCD and BRIK64 from this instant, so it can learn the system instead of guessing it."
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

        <p className="mt-14 mx-auto max-w-3xl text-center text-sm italic leading-relaxed text-muted-foreground">
          &ldquo;An AI doesn&apos;t need a better language. It needs a language where incorrect programs cannot compile.&rdquo;
        </p>
      </div>
    </section>
  );
}
