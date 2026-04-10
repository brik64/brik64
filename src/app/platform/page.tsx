"use client";

import Link from "next/link";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  FolderOpen,
  Globe,
  GitBranch,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";

import dynamic from "next/dynamic";
import { MonomerSpotlightPair } from "@/components/MonomerArtifacts";
import {
  ComparisonSurface,
  EvidenceSurface,
  FeatureMatrixSurface,
  PageSectionHeader,
} from "@/components/PageArtifacts";
import { RegistryWorkbenchArtifact, WorkflowRailArtifact } from "@/components/HomeProofArtifacts";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false }
);

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

/* ── Dashboard mockup rows ── */

const circuits = [
  { name: "auth/validate_token", tier: "CORE", from: "Rust", to: "JS", phiC: "1" },
  { name: "api/calculate_price", tier: "CORE", from: "Python", to: "Go", phiC: "1" },
  { name: "ui/fetch_dashboard", tier: "CONTRACT", from: "TSX", to: "Rust", phiC: "CONTRACT" },
  { name: "legacy/compute_interest", tier: "CORE", from: "COBOL", to: "Rust", phiC: "1" },
];

export default function PlatformPage() {
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
              Platform
            </span>
            <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              CAD for <span className="text-teal">software.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Build, verify, compose, and ship certified code. Your library, a public registry,
              visual composition, certification badges &mdash; all in one place. Free to start.
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 lg:px-16">
          <PageSectionHeader
            eyebrow="Platform Artifacts"
            title="The platform now leads with workbenches and rails, not abstract capability cards."
            description="Registry, certification flow, and evidence surfaces behave like product objects the user can inspect and operate."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-6">
            <RegistryWorkbenchArtifact />
            <MonomerSpotlightPair leftOfficialNumber={0} rightOfficialNumber={67} />
            <WorkflowRailArtifact />
            <FeatureMatrixSurface
              eyebrow="Platform Matrix"
              title="The four platform pillars are still here, but compressed into one inspectable matrix."
              description="The matrix keeps the same platform pillars visible while making the surface easier to scan."
              metrics={[
                { label: "Registry", value: "Public + Private", detail: "Certified packages, hashes, and recomposition-ready metadata." },
                { label: "Build flow", value: "Lift → Certify → Publish", detail: "One stable path from source artifact to reusable circuit." },
                { label: "Access", value: "IDE + API + MCP", detail: "Human and agent workflows share the same platform surface." },
              ]}
              rows={pillars.map((pillar, index) => ({
                title: pillar.title,
                body: pillar.description,
                state: index === 2 ? "accent" : "default",
              }))}
            />
            <ComparisonSurface
              eyebrow="Capability Scope"
              title="Platform surfaces replace flat capability inventories."
              leftTitle="Capability list"
              leftBody="A grid of actions tells the user what exists, but not how those pieces combine into a coherent operating model."
              rightTitle="Workbench narrative"
              rightBody="Registry, workflow, and proof state appear together, so composition and certification become legible in one glance."
            />
            <EvidenceSurface
              eyebrow="Operational Evidence"
              title="Representative platform rows"
              description="The original dashboard table is preserved semantically but moved into a stronger evidence shell."
              items={circuits.map((circuit) => ({
                label: `${circuit.name} · ${circuit.from} → ${circuit.to}`,
                body:
                  circuit.phiC === "1"
                    ? `${circuit.tier} artifact with Φc = 1 certification state carried through the registry row.`
                    : `${circuit.tier} artifact explicitly marked as contract-bounded instead of pretending to be fully certified.`,
              }))}
              footer="The platform page now presents proof state, composition flow, and registry posture with fewer arbitrary card variants."
            />
          </div>
        </section>

        {/* Registry Launching */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <div className="mx-auto inline-block rounded-full border border-teal/30 bg-teal/[0.06] px-5 py-2 text-sm font-bold tracking-wider text-teal">
            REGISTRY LAUNCHING 2026
          </div>
          <h2 className="text-center mx-auto mt-6 text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Start building &mdash; free
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            GitHub integration, IDE plugins, visual composer, and certification dashboard &mdash; all coming to brik64.com.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Start building &mdash; free
            </Link>
            <Link
              href="/registry"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Learn about the Registry <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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
