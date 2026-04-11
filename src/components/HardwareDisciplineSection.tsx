import { CircuitDivider } from "@/components/ui/pixel-perfect/circuit-divider";
import { HomeSectionHeader } from "@/components/PageArtifacts";

const principles = [
  {
    title: "Finite building blocks",
    body: "Hardware starts from explicit parts. BRIK64 brings the same discipline to software by modeling logic with named operations and declared domains.",
  },
  {
    title: "Blueprint before emission",
    body: "Hardware is reviewed as a blueprint before it is manufactured. BRIK64 uses PCD as the canonical blueprint before supported targets are emitted.",
  },
  {
    title: "Review before trust",
    body: "Hardware teams inspect structure and limits before deployment. BRIK64 keeps closure, constraints, and policy checks visible before code is promoted.",
  },
  {
    title: "Reuse with identity",
    body: "Hardware components keep part identity across reuse. BRIK64 carries package, hash, and publication state so the same logic stays legible across teams.",
  },
] as const;

export function HardwareDisciplineSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[02] · HARDWARE-STYLE DISCIPLINE"
          title="What if software behaved more like hardware?"
          description="Not as a literal equivalence. As an engineering posture: bounded parts, a canonical blueprint before emission, visible review state, and governed reuse after publication."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="rounded-3xl border border-border/80 bg-background/90 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{principle.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {principle.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <CircuitDivider />
        </div>
      </div>
    </section>
  );
}
