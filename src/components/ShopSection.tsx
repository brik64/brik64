"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function ShopSection() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background px-6 py-20 md:px-12 md:py-28 lg:px-18">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,229,255,0.10),transparent_44%),linear-gradient(180deg,rgba(0,229,255,0.04),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/25 bg-teal/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-teal">
            <Sparkles className="h-3.5 w-3.5" />
            Merch coming soon
          </div>

          <h2 className="mt-6 text-4xl font-black uppercase tracking-[-0.04em] text-balance sm:text-5xl md:text-7xl">
            Coming soon.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            We are preparing a new merchandise space for the BRIK64 community. The page will go
            live when the storefront is ready for public access.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Get notified <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to the main site
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
