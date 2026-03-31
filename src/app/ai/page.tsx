"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Bot, ShieldCheck, RefreshCw, Zap, Brain, Code2 } from "lucide-react";
import type { ReactNode } from "react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

const advantages: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: <ShieldCheck className="h-5 w-5 text-teal" />,
    title: "Auto-verified output",
    desc: "Tell your AI what to build. The compiler proves it's correct. If it fails, the error becomes the next prompt. No human review needed.",
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-teal" />,
    title: "Repeat until certified",
    desc: "The compiler error IS the prompt. The AI fixes the exact issue. 1-3 iterations. 95% convergence rate. Fully automatic.",
  },
  {
    icon: <Zap className="h-5 w-5 text-teal" />,
    title: "128 operations. That's it.",
    desc: "64 certified + 64 extended = 128 operations. The AI picks from a finite, verified set. No infinite library combinations. No guessing.",
  },
  {
    icon: <Brain className="h-5 w-5 text-teal" />,
    title: "Works with every LLM",
    desc: "Claude, GPT, Gemini, Llama, Mistral \u2014 doesn't matter. The proof is in the compiler, not the model. Any LLM generates certified code.",
  },
  {
    icon: <Code2 className="h-5 w-5 text-teal" />,
    title: "One file. 14 targets.",
    desc: "AI generates one PCD file. The compiler outputs Rust, JS, Python, C, Go, WASM, and 8 more. Write once, deploy everywhere. Today.",
  },
  {
    icon: <Bot className="h-5 w-5 text-teal" />,
    title: "AI safety guardrails",
    desc: "Policy circuits verify AI actions before execution. The AI proposes, the circuit disposes. ALLOW or BLOCK. No middle ground.",
  },
];

export default function AIPage() {
  return (
    <>
<Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <section className="mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 lg:px-8 relative overflow-hidden">
          <HeroWireframe />
          <span className="text-muted-foreground mb-5 inline-block w-fit rounded-full border border-border bg-background px-3.5 py-1 text-xs font-medium tracking-wide">
            AI-Verified Code Generation
          </span>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Tell your AI what to build.{" "}
            <span className="text-teal">The compiler proves it&apos;s correct.</span>
          </h1>

          <p className="text-muted-foreground mt-4 max-w-2xl text-base leading-relaxed md:text-lg">
            The first language designed for AI code generation. 128 operations. Automatic verification.
            The LLM writes PCD, the compiler checks &Phi;<sub>c</sub> = 1, and if
            it fails, the error becomes the next prompt. Repeat until certified.
          </p>

          {/* brikc ai demo terminal */}
          <div className="relative z-10 mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-3 text-[10px] font-medium tracking-wide text-white/30">brikc ai</span>
            </div>
            <div className="flex flex-col gap-1 p-5 font-mono text-xs">
              <p className="text-white/70"><span className="text-teal">$</span> brikc ai &quot;Generate a drone speed controller with wind limits&quot;</p>
              <p className="mt-1 text-zinc-400">&nbsp;&nbsp;LLM generating PCD...</p>
              <p className="mt-1 text-amber-400">&nbsp;&nbsp;&Phi;<sub>c</sub> = 0.847 &mdash; missing case: wind &gt; 120 km/h</p>
              <p className="mt-1 text-zinc-400">&nbsp;&nbsp;LLM fixing... (attempt 2/5)</p>
              <p className="mt-1 text-emerald-400">&nbsp;&nbsp;&#10003; &Phi;<sub>c</sub> = 1.000 &mdash; all 12 paths verified. Certified.</p>
              <p className="mt-1 text-zinc-400">&nbsp;&nbsp;Output: drone_speed.pcd + drone_speed.cert.json</p>
            </div>
          </div>

          {/* The loop diagram */}
          <div className="mt-10 max-w-lg rounded-lg border border-border bg-card p-5">
            <p className="text-sm font-medium text-foreground">The verification loop</p>
            <div className="mt-3 space-y-2 font-mono text-xs text-muted-foreground">
              <p>1. Prompt &rarr; LLM generates PCD directly</p>
              <p>2. Compiler checks &Phi;<sub>c</sub></p>
              <p>3. If &Phi;<sub>c</sub> &ne; 1 &rarr; error becomes next prompt</p>
              <p>4. Repeat until &Phi;<sub>c</sub> = 1 (typically 1-3 iterations)</p>
              <p className="text-teal font-medium">5. Output: certified code + certificate</p>
            </div>
          </div>
        </section>

        {/* Advantages grid */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">Why this changes everything</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">
            Every other language trusts the AI. BRIK64 verifies it. Free. Ready today.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-lg border border-border bg-card p-5">
                <div className="flex items-center gap-2">
                  {a.icon}
                  <h3 className="text-sm font-medium text-foreground">{a.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison */}
        <section className="border-border mx-auto max-w-7xl border-t px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-xl font-medium tracking-tight">The difference</h2>
          <div className="mt-6 max-w-lg space-y-3 text-sm">
            <div className="flex items-baseline gap-3">
              <span className="w-32 shrink-0 text-muted-foreground/60">Copilot / Cursor</span>
              <span className="text-muted-foreground">&ldquo;Hope the AI wrote correct code&rdquo;</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="w-32 shrink-0 text-muted-foreground/60">Devin / Codex</span>
              <span className="text-muted-foreground">&ldquo;Hope the tests catch the bugs&rdquo;</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="w-32 shrink-0 text-teal font-medium">brikc ai</span>
              <span className="text-teal font-medium">&ldquo;The compiler proves it&apos;s correct&rdquo;</span>
            </div>
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
