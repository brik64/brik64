"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Search,
  Package,
  Shield,
  BadgeCheck,
  ArrowRight,
  Download,
  GitBranch,
  Terminal,
  Globe,
  Copy,
  Check,
  Upload,
  Eye,
  Lock,
} from "lucide-react";

import dynamic from "next/dynamic";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

/* ── Featured circuits ── */

const featured = [
  { name: "@brik64/validate-email", version: "1.2.0", badge: "CERTIFIED", downloads: "4.2k", monomers: 6, domains: 12, tier: "CORE" },
  { name: "@brik64/hash-password", version: "2.0.1", badge: "CERTIFIED", downloads: "3.8k", monomers: 4, domains: 8, tier: "CORE" },
  { name: "@acme/calc-interest", version: "1.0.0", badge: "CERTIFIED", downloads: "1.1k", monomers: 5, domains: 10, tier: "CORE" },
  { name: "@acme/fetch-api", version: "3.1.0", badge: "OPEN 82%", downloads: "2.5k", monomers: 12, domains: 24, tier: "CONTRACT" },
  { name: "@brik64/fibonacci", version: "1.0.0", badge: "CERTIFIED", downloads: "890", monomers: 3, domains: 6, tier: "CORE" },
  { name: "@brik64/csv-parser", version: "1.3.2", badge: "OPEN 71%", downloads: "1.9k", monomers: 9, domains: 18, tier: "CONTRACT" },
];

/* ── Badge system ── */

const badges = [
  {
    name: "CERTIFIED",
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    condition: "Hash in registry, all monomers verified",
    meaning: "Every input path verified — produces a correct output or an explicit rejection per the circuit's specification.",
  },
  {
    name: "OPEN 78%",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    condition: "Hash in registry, Core + Extended",
    meaning: "Certified where Core, contracted at the boundary. The percentage shows Core monomer coverage.",
  },
  {
    name: "INVALID",
    color: "bg-red-500/10 text-red-400 border-red-500/20",
    condition: "Hash mismatch \u2014 code modified after certification",
    meaning: "The program no longer matches the certified version. Even one byte of change triggers this.",
  },
];

/* ── Publishing workflow steps ── */

const publishSteps = [
  { step: "1", title: "Write & certify", desc: "Write your PCD circuit and run brikc check to verify \u03a6_c = 1." },
  { step: "2", title: "Publish", desc: "Run brikc registry publish to push to the public or private registry." },
  { step: "3", title: "Discover", desc: "Others search, browse, and install your circuit with full certification proof." },
  { step: "4", title: "Verify", desc: "The badge is a live endpoint \u2014 if the code changes, the badge turns red instantly." },
];

export default function RegistryPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        {/* Hero */}
        <section className="bg-background border-b border-border bg-gradient-to-b from-[#f0fdff] to-white relative overflow-hidden">
          <HeroWireframe />
          <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
            <span className="mb-4 inline-block rounded-full border border-[#00b8d4]/30 bg-[#00b8d4]/10 px-4 py-1.5 text-sm font-medium text-[#00b8d4]">
              Registry
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The npm for <span className="text-[#00b8d4]">verified software.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Every package carries a mathematical proof of correctness. Search, install, and compose certified circuits &mdash;
              never rewrite what&apos;s already proven.
            </p>
          </div>
        </section>

        {/* Search demo */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [01] SEARCH
          </p>
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-3 border border-border bg-muted/20 px-4 py-3">
              <Search className="h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search certified circuits... (e.g. validate, hash, parser)"
                className="min-w-0 flex-1 bg-transparent text-sm text-foreground placeholder-muted-foreground/60 outline-none"
              />
              <kbd className="hidden rounded border border-border bg-background px-2 py-0.5 text-[10px] text-muted-foreground sm:block">
                /
              </kbd>
            </div>
          </div>
        </section>

        {/* Featured circuits */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [02] FEATURED CIRCUITS
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Pre-certified. Ready to use.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featured
              .filter((c) =>
                searchQuery === "" || c.name.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((c) => (
                <div
                  key={c.name}
                  className="group border border-border bg-muted/20 p-5 transition-colors hover:border-teal/30"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4 text-teal" />
                      <span className="font-mono text-sm font-medium">{c.name}</span>
                    </div>
                    <span
                      className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${
                        c.tier === "CORE"
                          ? "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                          : "border-blue-500/20 bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {c.badge}
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>v{c.version}</span>
                    <span>{c.monomers} monomers · {c.domains} domains</span>
                    <span className="flex items-center gap-1">
                      <Download className="h-3 w-3" /> {c.downloads}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </section>

        {/* Publishing workflow */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [03] PUBLISHING
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            From code to registry in minutes
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {publishSteps.map((s) => (
              <div key={s.step} className="border border-border bg-muted/20 p-5">
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-teal/30 bg-teal/10 text-sm font-bold text-teal">
                  {s.step}
                </div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Terminal example */}
          <div className="mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
            <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <span className="ml-2 text-xs text-white/30 font-mono">brikc registry publish</span>
            </div>
            <div className="space-y-1 p-5">
              <div className="font-mono text-sm text-white/70">
                <span className="text-teal">$</span> brikc check validate_token.pcd
              </div>
              <div className="font-mono text-sm text-emerald-400">
                &nbsp; &#10003; Circuit closed: <PhiC /> = 1.000
              </div>
              <div className="h-2" />
              <div className="font-mono text-sm text-white/70">
                <span className="text-teal">$</span> brikc registry publish validate_token.pcd
              </div>
              <div className="font-mono text-sm text-zinc-400">
                &nbsp; Verifying certification...
              </div>
              <div className="font-mono text-sm text-emerald-400">
                &nbsp; &#10003; Published: @acme/validate_token@1.0.0
              </div>
              <div className="font-mono text-sm text-emerald-400">
                &nbsp; &#10003; Badge: registry.brik64.dev/badge/a7f3c9e1
              </div>
            </div>
          </div>
        </section>

        {/* Badge system */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 lg:px-18">
          <p className="text-center mb-3 text-xs font-medium tracking-[2px] text-muted-foreground">
            [04] BADGE SYSTEM
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight md:text-3xl">
            Live proof. Not a static label.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            The badge in your README is a live endpoint &mdash; it queries the registry with the program&apos;s hash on every page load.
            If the deployed binary differs by a single byte, the badge immediately shows INVALID.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {badges.map((b) => (
              <div key={b.name} className="border border-border bg-muted/20 p-5">
                <span className={`inline-block rounded-full border px-3 py-1 text-xs font-bold ${b.color}`}>
                  {b.name}
                </span>
                <p className="mt-3 text-xs font-medium text-muted-foreground">{b.condition}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.meaning}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-border bg-muted/20 p-5">
            <p className="text-sm font-medium">What no other certification standard can claim</p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">ISO 26262, DO-178C, CC EAL7:</span> The process was followed / the tests were run.
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-teal">BRIK-64 Certified:</span> Structurally incomplete programs cannot compile — every certified circuit handles all inputs within its domain.
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <div className="mx-auto inline-block rounded-full border border-teal/30 bg-teal/[0.06] px-5 py-2 text-sm font-bold tracking-wider text-teal">
            REGISTRY LAUNCHING 2026
          </div>
          <h2 className="mx-auto text-center mt-6 text-2xl font-bold tracking-tight md:text-3xl">
            Publish your first circuit
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Install the CLI, certify a function, and publish to the registry. Every certified circuit is a building block
            someone else never has to rewrite.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              <Terminal className="h-4 w-4" /> Install the CLI
            </a>
            <a
              href="/platform"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Explore the platform <ArrowRight className="h-3.5 w-3.5" />
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
