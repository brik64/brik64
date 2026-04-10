"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CircuitGrid } from "@/components/CircuitGrid";
import { ArrowRight } from "lucide-react";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ────────────────────────────────────────────────────────────
   V2 HOMEPAGE — Steve Jobs version
   Show the product. Make them want it. Make them understand
   they can use it TODAY.
   ──────────────────────────────────────────────────────────── */

export default function HomeV2() {
  return (
    <>
      <CircuitGrid />
      <Navbar />
      <main className="relative z-10">

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
            HERO — The one thing you need to understand
            ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="border-border relative mx-auto w-full max-w-7xl overflow-hidden border-x bg-background">
          <HeroWireframe />
          <div className="relative z-10 px-6 py-24 md:px-16 md:py-32 lg:py-40">
            <div className="max-w-3xl">

              <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl lg:text-left">
                The first programming language{" "}
                <span className="text-teal">designed for AI.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                128 operations. An AI learns the entire language in one prompt.
                The compiler mathematically proves every program is correct.
                Free. Open. Ready to use today.
              </p>

              {/* The killer line */}
              <p className="mt-6 text-sm font-medium text-teal">
                If it compiles, it works. On every input. Every time. On every machine.
              </p>

              {/* CTAs — Jobs always had ONE clear action */}
              <div className="mt-10 flex items-center gap-6">
                <a
                  href="https://docs.brik64.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-teal px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
                >
                  Start building — free
                </a>
                <a
                  href="/pcd"
                  className="text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
                >
                  See the language <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl border-x border-border bg-background">

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              1. THE DEMO — Show, don't tell
              Jobs always demoed. Always.
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 md:px-16 md:py-28">

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              This is PCD.
            </h2>

            <p className="text-foreground/60 mt-3 max-w-xl text-base md:text-lg">
              A programming language with 128 operations, domain constraints on every input,
              and mathematical verification at compile time. An AI agent can learn it completely
              from a single prompt.
            </p>

            {/* Side by side: PCD code + what you get */}
            <div className="mt-12 grid gap-6 lg:grid-cols-2">

              {/* Left: PCD code */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">speed_controller.pcd</span>
                </div>
                <pre className="overflow-x-auto p-5 text-[12px] leading-relaxed text-teal/80">{`PC speed_controller {
    domain speed: Range [0, 900];
    domain wind:  Range [0, 200];

    fn safe_speed(v: speed, w: wind) -> speed {
        let adjusted = SUB8(v, MUL8(w, 2));
        let clamped  = MAX(adjusted, 0);
        return clamped;
    }

    // Φc = 1 — every input produces
    // a bounded, valid output.
    // The compiler proves this.
}`}</pre>
              </div>

              {/* Right: What happens */}
              <div className="flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="border-l-2 border-teal pl-4">
                    <p className="text-xs font-medium text-teal">THE COMPILER PROVES</p>
                    <p className="text-foreground/80 mt-1 text-sm">
                      Every combination of speed (0-900) and wind (0-200) produces a valid output
                      in the range [0, 900]. No exceptions. No undefined behavior. Mathematical proof.
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="text-xs font-medium text-foreground/50">THEN COMPILES TO</p>
                    <p className="text-foreground/80 mt-1 text-sm">
                      Rust, JavaScript, Python, C, C++, Go, WASM, native x86-64, and 6 more targets.
                      Same proof. Same guarantees. Any language.
                    </p>
                  </div>
                  <div className="border-l-2 border-foreground/20 pl-4">
                    <p className="text-xs font-medium text-foreground/50">WORKS WITH YOUR STACK</p>
                    <p className="text-foreground/80 mt-1 text-sm">
                      Already have code in JavaScript or Python? The Lifter converts it to PCD.
                      No rewrite needed. Verify what you already have.
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-4 border border-border">
                  {[
                    { v: "128", l: "operations" },
                    { v: "14", l: "targets" },
                    { v: "110K+", l: "tests" },
                    { v: "207", l: "Coq proofs" },
                  ].map((s, i) => (
                    <div key={s.l} className={`p-4 text-center ${i < 3 ? "border-r border-border" : ""}`}>
                      <p className="text-lg font-bold text-teal">{s.v}</p>
                      <p className="text-[10px] text-foreground/40">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              2. THREE THINGS — Jobs always had 3 things
              "An iPod. A phone. An internet communicator."
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 md:px-16 md:py-28">

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              A language. A platform. A new way to build software.
            </h2>

            <p className="text-foreground/60 mt-3 text-base">
              Three things. They&apos;re not three separate products.
            </p>

            <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-3">

              {/* 1. Language */}
              <div className="bg-background p-8">
                <p className="text-xs font-medium tracking-widest text-teal">THE LANGUAGE</p>
                <h3 className="mt-4 text-xl font-bold">PCD</h3>
                <p className="text-foreground/60 mt-3 text-sm leading-relaxed">
                  128 verified operations. Domain constraints on every input.
                  An AI agent learns the entire language in one prompt. Humans write
                  JavaScript, Python, or Rust and the Lifter converts it.
                  AIs write PCD directly.
                </p>
                <p className="mt-4 text-xs text-teal">
                  Free forever &middot; Open specification
                </p>
              </div>

              {/* 2. Platform */}
              <div className="bg-background p-8">
                <p className="text-xs font-medium tracking-widest text-teal">THE PLATFORM</p>
                <h3 className="mt-4 text-xl font-bold">Circuit Laboratory</h3>
                <p className="text-foreground/60 mt-3 text-sm leading-relaxed">
                  Compose software like circuits. A visual environment where you
                  connect verified components, the platform certifies the composition,
                  and you ship to any target. Like CAD, but for software.
                </p>
                <p className="mt-4 text-xs text-teal">
                  Live at brik64.com &middot; Free tier available
                </p>
              </div>

              {/* 3. New way */}
              <div className="bg-background p-8">
                <p className="text-xs font-medium tracking-widest text-teal">THE METHOD</p>
                <h3 className="mt-4 text-xl font-bold">Digital Circuitality</h3>
                <p className="text-foreground/60 mt-3 text-sm leading-relaxed">
                  Software that works like hardware. Every input bounded. Every path verified.
                  Every output certified. The compiler is the auditor.
                  No testing required &mdash; the math is the proof.
                </p>
                <p className="mt-4 text-xs text-teal">
                  207 Coq proofs &middot; 110,000+ tests
                </p>
              </div>

            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              3. AI WRITES IT — The "boom" moment
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 md:px-16 md:py-28">

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Tell your AI what to build.{" "}
              <span className="text-teal">The compiler proves it&apos;s correct.</span>
            </h2>

            <p className="text-foreground/60 mt-3 max-w-xl text-base md:text-lg">
              No other language has this loop. The AI generates PCD.
              The compiler verifies it. If it fails, the error becomes the next prompt.
              The AI fixes it. Repeat until certified.
            </p>

            {/* Terminal */}
            <div className="mt-10 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc ai</span>
              </div>
              <div className="flex flex-col gap-1 p-5 font-mono text-xs">
                <p className="text-white/70"><span className="text-teal">$</span> brikc ai &quot;Build an insulin dose calculator with safety limits&quot;</p>
                <p className="mt-2 text-zinc-400">&nbsp;&nbsp;Generating PCD...</p>
                <p className="mt-1 text-amber-400">&nbsp;&nbsp;&Phi;<sub>c</sub> = 0.82 &mdash; missing case: glucose &lt; 40 mg/dL</p>
                <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Fixing...</p>
                <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; &Phi;<sub>c</sub> = 1 &mdash; 8 domains verified. Overdose impossible.</p>
                <p className="mt-1 text-zinc-400">&nbsp;&nbsp;&#10003; Output: dose_calc.pcd + dose_calc.cert.json</p>
                <p className="mt-2 text-zinc-500">&nbsp;&nbsp;Compile to: brikc compile dose_calc.pcd --target rust,python,wasm</p>
              </div>
            </div>

            <p className="text-foreground/50 mt-6 max-w-lg text-sm">
              Works with any LLM &mdash; Claude, GPT, Gemini, Llama.
              The verification is in the compiler, not the model.
            </p>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              4. WHO IT'S FOR — Jobs always showed use cases live
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 md:px-16 md:py-28">

            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for industries where{" "}
              <span className="text-teal">bugs are not acceptable.</span>
            </h2>

            <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
              {[
                {
                  title: "Trading algorithms",
                  badge: "MiFID II",
                  line: "Compliance evidence at compile time. Not $1M in manual audits.",
                  code: "domain order_value: Range [0.01, 10_000_000.0];",
                },
                {
                  title: "Medical devices",
                  badge: "IEC 62304",
                  line: "Overdose is structurally impossible. The domain prevents it.",
                  code: "domain dose: Range [0.0, 25.0];",
                },
                {
                  title: "Flight controllers",
                  badge: "DO-178C",
                  line: "Every combination of speed, altitude, and fuel has a defined response.",
                  code: "domain altitude: Range [0, 15_000];",
                },
                {
                  title: "Smart contracts",
                  badge: "WASM",
                  line: "Deployed to blockchain. Can't be patched. Bugs can't compile.",
                  code: "domain balance: Range [0, 1_000_000_000];",
                },
              ].map((v) => (
                <div key={v.title} className="bg-background p-6 md:p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-sm font-bold text-foreground">{v.title}</h3>
                    <span className="rounded-full border border-teal/30 bg-teal/10 px-2 py-0.5 text-[10px] font-medium text-teal">
                      {v.badge}
                    </span>
                  </div>
                  <p className="text-foreground/60 mt-2 text-sm">{v.line}</p>
                  <code className="mt-3 block text-xs text-teal/60">{v.code}</code>
                </div>
              ))}
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              5. ONE MORE THING — The vision
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 md:px-16 md:py-28">

            <p className="text-foreground/30 text-xs font-medium tracking-[3px]">
              ONE MORE THING
            </p>

            <h2 className="mt-8 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              This is not just a language.{" "}
              <span className="text-teal">
                This is the transition from code to circuitry.
              </span>
            </h2>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-relaxed text-foreground/70">
              <p>
                For fifty years, programming has meant writing text that humans can read
                and hoping machines execute it correctly.
              </p>
              <p>
                BRIK-64 changes the substrate. Software becomes a certifiable digital circuit &mdash;
                composed from atomic operations, verified by mathematical proof, compiled to
                any target. The compiler doesn&apos;t just check syntax. It proves correctness.
              </p>
              <p className="font-medium text-foreground">
                The AI-native synthetic language. Available today. Free to use.
              </p>
            </div>
          </section>

          {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
              CTA — Simple. Clear. Now.
              ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
          <section className="border-border border-t px-6 py-20 text-center md:px-16 md:py-28">

            <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight md:text-4xl">
              Start building with BRIK-64.
            </h2>

            <p className="text-foreground/60 mx-auto mt-4 max-w-md text-base">
              Free. Works with your existing code. Compiles to 14 languages.
              The compiler proves your software is correct.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://docs.brik64.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-teal px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
              >
                Get started — free
              </a>
              <a
                href="/platform"
                className="text-foreground/60 hover:text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
              >
                Open the platform <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            {/* Links */}
            <div className="mx-auto mt-12 flex flex-wrap justify-center gap-8 text-xs text-foreground/30">
              <a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Docs</a>
              <a href="https://github.com/brik64" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
              <a href="https://registry.brik64.dev" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Registry</a>
              <a href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Digital Circuitality</a>
              <a href="https://discord.gg/brik64" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Discord</a>
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
