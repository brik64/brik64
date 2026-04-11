import { HomeSectionHeader } from "@/components/PageArtifacts";

const boundaryItems = [
  {
    title: "Core operations",
    body: "Formally proven under the public model. This is where the strongest proof claims belong.",
  },
  {
    title: "Extended operations",
    body: "Explicitly contract-bounded. They stay inside stated assumptions and review scope.",
  },
  {
    title: "Blueprint checks",
    body: "CLI and compiler checks apply to the modeled circuit and its declared domains.",
  },
  {
    title: "Runtime and external systems",
    body: "Host runtime behavior, deployment infrastructure, and external APIs require separate controls.",
  },
];

export function HomeClaimBoundariesSection() {
  return (
    <section id="boundaries" className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[07] · CLAIM BOUNDARIES"
          title="What the formal layer proves, and where the boundary stops."
          description="The strongest claims belong to the modeled circuit and declared domains. Extended operations remain contract-bounded, and runtime, infrastructure, and external side effects still require separate engineering controls."
        />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {boundaryItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-border/80 bg-background/90 p-6 shadow-sm"
            >
              <p className="text-sm font-semibold text-foreground">{item.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-teal/20 bg-teal/[0.05] p-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal/80">
            Scope boundary
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-foreground">
            The boundary is operational, not decorative: BRIK64 can produce a
            review-ready blueprint and package state for modeled logic, but deployment posture,
            runtime behavior, and unmanaged side effects still require separate
            engineering controls.
          </p>
        </div>
      </div>
    </section>
  );
}
