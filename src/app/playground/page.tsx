"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Terminal, Copy, Check, ArrowRight } from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

export default function PlaygroundPage() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("curl -L https://brik64.dev/install | sh");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <section className="bg-background border-border mx-auto max-w-7xl border-x px-6 pt-32 pb-32 md:px-12 lg:px-18 text-center relative overflow-hidden">
          <HeroWireframe />
          {/* Badge */}
          <span className="inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-500">
            Coming Soon
          </span>

          {/* Heading */}
          <h1 className="mt-8 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            PCD <span className="text-teal">Playground</span>
          </h1>

          {/* Subtitle */}
          <p className="text-muted-foreground mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg">
            Write PCD in your browser. Compile, certify, and export &mdash; all without installing anything.
          </p>

          {/* Terminal */}
          <div className="relative z-10 mx-auto mt-12 max-w-xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30 font-mono">terminal</span>
            </div>
            <div className="flex items-center gap-3 px-5 py-5">
              <Terminal className="h-4 w-4 shrink-0 text-teal" />
              <code className="flex-1 text-left font-mono text-sm text-emerald-400">
                <span className="text-teal">$</span> curl -L https://brik64.dev/install | sh
              </code>
              <button onClick={copy} className="cursor-pointer text-zinc-500 hover:text-white transition-colors">
                {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              In the meantime, install the CLI <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
