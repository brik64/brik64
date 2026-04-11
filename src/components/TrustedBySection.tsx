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
        <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground/60">
          DESIGNED FOR
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
          {industries.map((industry) => (
            <span
              key={industry}
              className="text-xs font-medium uppercase tracking-widest text-muted-foreground/50 transition-colors hover:text-foreground/70"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
