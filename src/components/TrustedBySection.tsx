export function TrustedBySection() {
  const industries = [
    "Platform Engineering",
    "AI Engineering",
    "Developer Tools",
    "Formal Methods",
    "High-Assurance Systems",
    "Infrastructure Teams",
    "Technical Leadership",
    "Runtime Owners",
  ];

  return (
    <section className="relative z-10 border-border mx-auto w-full max-w-7xl border-x border-t bg-background">
      <div className="px-6 py-8 md:px-12 md:py-10">
        <div className="overflow-hidden rounded-[1.5rem] border border-border/80 bg-background/90">
          <div className="border-b border-border/70 px-5 py-4 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground/60">
              BUILT FOR
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              The public surface is calibrated for technical buyers who need determinism, traceability, and bounded operational claims.
            </p>
          </div>
          <div className="grid gap-0 md:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className={`px-5 py-4 text-sm font-medium uppercase tracking-widest text-muted-foreground/70 ${index >= 2 ? "border-t border-border/70" : ""} ${index % 2 === 1 ? "md:border-l md:border-border/70" : ""}`}
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
