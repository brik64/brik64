import { PhiC } from "@/components/PhiC";

export function AgentsSection() {
  return (
    <section className="border-border border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[2px] text-muted-foreground">
              [06] · START BUILDING
            </p>
            <h2 className="mt-3 max-w-4xl text-balance text-2xl font-semibold leading-[40px] tracking-[-0.9px] tracking-tight md:text-4xl">
              Download the CLI. Use the SDKs.
            </h2>
          </div>
          <div>
            <p className="text-base leading-relaxed text-muted-foreground">
              The brikc compiler is a single binary. Drop verified PCD
              operations into your existing codebase — Rust, JavaScript, or Python.
            </p>
          </div>
        </div>

        {/* Two Feature Cards */}
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {/* Card 1 — The CLI */}
          <div className="group block overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-medium tracking-tight md:text-xl">
                The CLI
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Parses PCD, plans execution, generates code for multiple targets, and
                verifies certification.
              </p>
            </div>
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-muted-foreground">
                    Terminal
                  </span>
                  <span className="text-muted-foreground">bash</span>
                </div>
                <div className="mt-3 space-y-2 font-mono">
                  <p className="text-sm text-foreground">
                    <span className="text-muted-foreground">$</span> curl -L
                    https://brik64.dev/install | sh
                  </p>
                  <p className="text-xs text-green-600">
                    ✓ brikc v5.1.0 installed
                  </p>
                  <div className="mt-2 border-t border-border pt-2">
                    <p className="text-sm text-foreground">
                      <span className="text-muted-foreground">$</span> brikc
                      compile main.pcd --target js
                    </p>
                    <p className="text-xs text-green-600">
                      ✓ <PhiC /> = 1 — circuit closed
                    </p>
                  </div>
                  <div className="mt-2 border-t border-border pt-2">
                    <p className="text-sm text-foreground">
                      <span className="text-muted-foreground">$</span> brikc
                      lift app.ts --to pcd
                    </p>
                    <p className="text-xs text-green-600">
                      ✓ 42 operations lifted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — The SDKs */}
          <div className="group block overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg">
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-medium tracking-tight md:text-xl">
                The SDKs
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Verified operations in your language of choice.
              </p>
            </div>
            <div className="px-6 pb-6 md:px-8 md:pb-8">
              <div className="rounded-xl border border-border bg-secondary/30 p-4 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-muted-foreground">
                    Install
                  </span>
                  <span className="text-muted-foreground">package managers</span>
                </div>
                <div className="mt-3 space-y-3 font-mono">
                  <div>
                    <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Rust
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      <span className="text-muted-foreground">$</span> cargo add
                      brik64-core
                    </p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      JavaScript
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      <span className="text-muted-foreground">$</span> npm install
                      @brik64/core
                    </p>
                  </div>
                  <div className="border-t border-border pt-3">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                      Python
                    </p>
                    <p className="mt-1 text-sm text-foreground">
                      <span className="text-muted-foreground">$</span> pip install
                      brik64
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
