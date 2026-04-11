import { AgentProofLoopArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";
import { HomeSecondaryButton } from "@/components/ui/pixel-perfect/home-buttons";

export function AINativeSection() {
  return (
    <section id="ai" className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[06] · AI WORKFLOWS"
          title="AI can produce candidate logic. The formal layer decides what can be trusted."
          description="Agents can propose bounded logic. BRIK64 constrains that output with explicit grammar, policy circuits, compiler checks, and structured diagnostics so approval stays outside the model itself."
        />

        <div className="mt-8">
          <AgentProofLoopArtifact />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Candidate logic, not trusted truth",
              body: "The model can draft logic quickly, but the approval path still depends on explicit blueprints, checks, and review.",
            },
            {
              title: "External verification loop",
              body: "Diagnostics, closure state, and policy circuits keep validation outside the model and visible to the engineering team.",
            },
            {
              title: "Diagnostics drive repair",
              body: "Compiler rejection becomes the next operator-visible revision loop instead of hidden guesswork or optimistic retry.",
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
