"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PhiC } from "@/components/PhiC";
import {
  Search,
  Package,
  ArrowRight,
  Download,
  Terminal,
} from "lucide-react";
import { EvidenceSurface, FeatureMatrixSurface } from "@/components/PageArtifacts";

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
    color: "bg-orange-500/10 text-orange-400 border-orange-500/20",
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
            <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
              Registry
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Reusable packages with{" "}
              <span className="text-teal">visible blueprint state.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Registry is the reusable layer of the formal system: package identity, closure state,
              boundary notes, hashes, and invalidation semantics stay visible when teams discover or publish logic.
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
                placeholder="Search reusable circuits... (e.g. validate, hash, parser)"
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Reviewable packages with explicit status
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
                          : "border-orange-500/20 bg-orange-500/10 text-orange-400"
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
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            From CLI checks to governed publication
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
          <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
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
                &nbsp; &#10003; Circuit closed: <PhiC /> = 1
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
            [04] STATUS SYSTEM
          </p>
          <h2 className="mx-auto text-center text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Registry status is live and hash-sensitive.
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Status is derived from the package hash and the modeled circuit state. If the published code differs from the certified package by a single byte, the state must become INVALID immediately.
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
            <p className="text-sm font-medium">What registry state does and does not mean</p>
            <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-foreground">Registry status means:</span> the current package hash and modeled circuit state still match the published review object.
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium text-teal">Registry status does not mean:</span> blanket proof for unmanaged runtime behavior, deployment infrastructure, or external systems outside the modeled boundary.
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6">
            <FeatureMatrixSurface
              eyebrow="Registry Surface"
              title="Packages stay legible because state lives on the package, not in a decorative badge."
              description="Certified rows, contract-bound rows, and invalid rows now read as a single evidence system."
              metrics={[
                { label: "Certified", value: "4", detail: "Rows marked CERTIFIED carry Φc = 1 through publication." },
                { label: "Open", value: "2", detail: "Contract-bounded packages remain explicit about the boundary." },
                { label: "Invalid", value: "1", detail: "A hash mismatch should be visible as a failure state, not hidden." },
              ]}
              rows={[
                { title: "CERTIFIED", body: "Registry rows with closed proof state and immutable hashes." },
                { title: "OPEN", body: "Rows that carry proof metadata but remain contract-bounded." },
                { title: "INVALID", body: "Rows that no longer match the certified source and must not be treated as proof.", state: "accent" },
              ]}
            />
            <EvidenceSurface
              eyebrow="Registry Evidence"
              title="What the registry actually exposes"
              description="State, versioning, and proof remain explicit so every package can be inspected without ambiguity."
              items={[
                { label: "State attachment", body: "Every published circuit retains a certification hash and a visible closure state." },
                { label: "Contract boundary", body: "Open packages stay explicit about the part of the system that is not fully certified." },
                { label: "Invalidation", body: "A single-byte change must immediately break the trust surface so the registry never lies." },
              ]}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="mx-auto text-center mt-6 text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Follow the registry path from CLI to reusable package
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Install the CLI, check one bounded workflow, and publish to the registry with status, boundary notes, and package identity still visible.
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
              See the platform <ArrowRight className="h-3.5 w-3.5" />
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
