export function TrustedBySection() {
  return (
    <section className="border-border mx-auto w-full max-w-7xl border-x border-t">
      <div className="px-6 py-10 md:px-12 md:py-14">
        <p className="mb-8 text-center text-[10px] font-medium uppercase tracking-[3px] text-muted-foreground/60">
          Trusted by engineering teams at
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-14">
          <span className="text-base font-normal text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            Cloudflare
          </span>
          <span className="text-base font-bold uppercase text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            NVIDIA
          </span>
          <span className="text-base text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            Lockheed{" "}
            <span className="font-light">Martin</span>
          </span>
          <span className="text-base font-medium text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            Meta
          </span>
          <span className="text-base font-normal uppercase tracking-wide text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            Tesla
          </span>
          <span className="text-base font-bold uppercase text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            SpaceX
          </span>
          <span className="text-base font-bold uppercase tracking-[3px] text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            NASA
          </span>
          <span className="text-base font-normal text-muted-foreground/40 transition-opacity hover:text-muted-foreground/70">
            Apple
          </span>
        </div>
      </div>
    </section>
  );
}
