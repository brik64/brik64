import { AgentProofLoopArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

export function AINativeSection() {
  return (
    <section id="ai" className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[05] · AI"
          title="Use AI as a producer. Keep trust outside the model."
          description="Agents can propose bounded logic. BRIK64 constrains that output with explicit grammar, policy circuits, compiler checks, and structured diagnostics so the review object stays outside the model itself."
        />

        <div className="mt-8">
          <AgentProofLoopArtifact />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Candidate logic, not trusted truth",
              body: "The model can draft bounded logic, but trust still depends on explicit checks and review.",
            },
            {
              title: "External verification loop",
              body: "Diagnostics, closure state, and policy circuits keep the validation path outside the model.",
            },
            {
              title: "Diagnostics drive repair",
              body: "Compiler rejection becomes the next operator-visible revision loop instead of hidden guesswork.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/80 bg-muted/30 p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <HomeSecondaryButton href="/ai-agents" className="opacity-90">
            See agent workflows
          </HomeSecondaryButton>
        </div>
      </div>
    </section>
  );
}
