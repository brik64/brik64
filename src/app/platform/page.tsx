"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  FolderOpen,
  Globe,
  GitBranch,
  BadgeCheck,
  ArrowRight,
  Search,
  Upload,
  Shield,
  Layers,
  Cpu,
  Code,
  Download,
  Key,
  Combine,
  FileCode,
  BarChart3,
  Terminal,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";

/* ── Pillars ── */

const pillars: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <FolderOpen className="h-5 w-5 text-teal" />,
    title: "Personal Library",
    description:
      "Your circuits, organized by project. Build, test, and recompose with real-time certification status.",
  },
  {
    icon: <Globe className="h-5 w-5 text-teal" />,
    title: "Public Registry",
    description:
      "A growing catalog of pre-certified circuits. Search, explore, and implement \u2014 never rewrite what\u2019s already proven.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "Visual Composition",
    description:
      "Drag, connect, compose. Every connection verified through EVA composition rules — the algebra ensures that composing closed circuits produces a closed circuit.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
    title: "Certification Badges",
    description:
      "Live proof embedded in your README. If the code changes one byte, the badge invalidates instantly.",
  },
];

/* ── Capabilities ── */

const capabilities: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <Upload className="h-4 w-4" />, title: "Lift existing code", desc: "Connect GitHub, lift any repo to PCD blueprints. Supports multiple languages." },
  { icon: <FileCode className="h-4 w-4" />, title: "Generate PCD from scratch", desc: "Write verified blueprints in the editor. All operations at your fingertips." },
  { icon: <Search className="h-4 w-4" />, title: "Browse Public Registry", desc: "Search thousands of certified circuits. Reuse verified components." },
  { icon: <Key className="h-4 w-4" />, title: "Create API Keys", desc: "Programmatic access to all platform features. Build on top of BRIK-64." },
  { icon: <Combine className="h-4 w-4" />, title: "Combine PCD blueprints", desc: "EVA algebra composition: sequential, parallel, and conditional operators." },
  { icon: <Code className="h-4 w-4" />, title: "Export to any language", desc: "Multiple targets: JS, TS, Python, Rust, C, C++, Go, COBOL, and more." },
  { icon: <Shield className="h-4 w-4" />, title: "Certify your code", desc: "Get mathematical proof of correctness + immutable hash. Zero ambiguity." },
  { icon: <Download className="h-4 w-4" />, title: "Download certified code", desc: "With auto-generated tests and certification badge. Ship with confidence." },
];

/* ── Pipeline steps ── */

const pipelineSteps = [
  { label: "PUSH", desc: "Push code to GitHub", icon: "{ }" },
  { label: "LIFT", desc: "Extract & lift to PCD", icon: "\u2191" },
  { label: "CERTIFY", desc: "Formal verification", icon: "\u2713" },
  { label: "PUBLISH", desc: "Ship to registry", icon: "\u25c6" },
];

/* ── Dashboard mockup rows ── */

const circuits = [
  { name: "auth/validate_token", tier: "CORE", from: "Rust", to: "JS", phiC: "1.000" },
  { name: "api/calculate_price", tier: "CORE", from: "Python", to: "Go", phiC: "1.000" },
  { name: "ui/fetch_dashboard", tier: "CONTRACT", from: "TSX", to: "Rust", phiC: "CONTRACT" },
  { name: "legacy/compute_interest", tier: "CORE", from: "COBOL", to: "Rust", phiC: "1.000" },
];

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
          <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Platform
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Your circuit <span className="text-[#00b8d4]">laboratory.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Everything you need to build, verify, and ship certified code. A personal library, a public registry,
              visual composition, and certification badges &mdash; all connected through PCD blueprints.
            </p>
          </div>
        </section>

        {/* 4 Pillars */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] FOUR PILLARS
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group border border-border bg-muted/20 p-6 transition-colors hover:border-teal/30 hover:bg-teal/[0.03]"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05]">
                  {p.icon}
                </div>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pipeline */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] PIPELINE
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            From source to certified artifact
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-relaxed">
            Every piece of code follows the same path: extract, verify, certify, publish. No exceptions.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {pipelineSteps.map((step, i) => (
              <div key={step.label} className="relative border border-border bg-muted/20 p-5 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-lg font-bold text-teal">
                  {step.icon}
                </div>
                <p className="text-xs font-bold tracking-wider text-teal">{step.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{step.desc}</p>
                {i < pipelineSteps.length - 1 && (
                  <ArrowRight className="absolute -right-3 top-1/2 hidden h-4 w-4 -translate-y-1/2 text-muted-foreground sm:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <div className="rounded-full border border-border bg-muted/30 px-4 py-1.5 font-mono text-[11px] tracking-wider text-muted-foreground">
              CODE &rarr; LIFT &rarr; PCD &rarr; CERTIFY &rarr; REGISTRY &rarr; BUILD
            </div>
          </div>
        </section>

        {/* Dashboard Mockup */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] DASHBOARD
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            Your circuits at a glance
          </h2>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: "47", l: "Circuits certified" },
              { v: "38", l: "Core (\u03a6_c = 1)" },
              { v: "9", l: "Contract (extended)" },
              { v: "6", l: "Language targets" },
            ].map((s) => (
              <div key={s.l} className="border border-border bg-muted/20 p-4 text-center">
                <div className="text-2xl font-bold text-teal">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Circuit table */}
          <div className="mt-8 overflow-hidden border border-border">
            <div className="border-b border-border bg-muted/30 px-4 py-2">
              <p className="text-xs font-medium text-muted-foreground">Recent circuits</p>
            </div>
            <div className="divide-y divide-border">
              {circuits.map((c) => (
                <div key={c.name} className="flex items-center justify-between px-4 py-3">
                  <div className="flex items-center gap-3">
                    <FileCode className="h-4 w-4 text-teal" />
                    <span className="font-mono text-sm">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${
                      c.tier === "CORE"
                        ? "bg-emerald-500/10 text-emerald-400"
                        : "bg-blue-500/10 text-blue-400"
                    }`}>
                      {c.tier}
                    </span>
                    <span>{c.from} &rarr; {c.to}</span>
                    <span className="font-mono">
                      {c.phiC === "1.000" ? (
                        <><PhiC /> = 1</>
                      ) : (
                        "CONTRACT"
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] CAPABILITIES
          </p>
          <h2 className="text-center mx-auto text-2xl font-bold tracking-tight md:text-3xl">
            What you can do
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="border border-border bg-muted/20 p-5 transition-colors hover:border-teal/30">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-md border border-teal/20 bg-teal/[0.05] text-teal">
                  {c.icon}
                </div>
                <p className="text-sm font-medium">{c.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Registry Launching */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <div className="mx-auto inline-block rounded-full border border-teal/30 bg-teal/[0.06] px-5 py-2 text-sm font-bold tracking-wider text-teal">
            REGISTRY LAUNCHING 2026
          </div>
          <h2 className="text-center mx-auto mt-6 text-2xl font-bold tracking-tight md:text-3xl">
            Your code. Verified. Connected.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            GitHub integration, IDE plugins, visual composer, and certification dashboard &mdash; all coming to brik64.com.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Join the Waitlist
            </a>
            <a
              href="/registry"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Learn about the Registry <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
