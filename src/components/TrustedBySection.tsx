export function TrustedBySection() {
  const industries = [
    "Aerospace",
    "Fintech",
    "Healthcare",
    "Automotive",
    "AI & ML",
    "Government",
    "Engineering",
    "Science",
  ];

  return (
    <section className="relative z-10 border-border mx-auto w-full max-w-7xl border-x border-t bg-background">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground/60">
          BUILT FOR
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
