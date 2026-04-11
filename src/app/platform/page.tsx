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
    title: "Workspace library",
    description:
      "Keep private blueprints, versions, and review state organized by project instead of scattering them across tools.",
  },
  {
    icon: <Globe className="h-5 w-5 text-teal" />,
    title: "Registry rows",
    description:
      "Search reusable packages with closure state, hashes, and publication posture still attached.",
  },
  {
    icon: <GitBranch className="h-5 w-5 text-teal" />,
    title: "Publication path",
    description:
      "Publication, PR review, and package identity stay aligned to the same canonical blueprint.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5 text-teal" />,
    title: "Governed reuse",
    description:
      "Teams reuse reviewed logic without losing provenance, boundary notes, or package state.",
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
              The platform where blueprints are{" "}
              <span className="text-teal">published, discovered, and governed.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              BRIK64 Platform is the product layer where teams keep workspace state, registry rows,
              publication flow, and package identity aligned to the same canonical blueprint.
            </p>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16 lg:px-16">
          <PageSectionHeader
            eyebrow="Platform Workbench"
            title="Platform is the operating surface for the formal layer."
            description="Workspace state, registry discovery, and publication flow should read as one product system instead of a disconnected list of capabilities."
          />
          <div className="mx-auto mt-10 grid max-w-6xl gap-6">
            <RegistryWorkbenchArtifact />
            <MonomerSpotlightPair leftOfficialNumber={0} rightOfficialNumber={67} />
            <WorkflowRailArtifact />
            <FeatureMatrixSurface
              eyebrow="Platform Matrix"
              title="The four main platform jobs in one inspectable matrix."
              description="The matrix keeps the core platform jobs visible without turning the page into feature-card theater."
              metrics={[
                { label: "Registry", value: "Public + private", detail: "Package identity, hashes, and review state stay visible." },
                { label: "Build flow", value: "Lift → model → publish", detail: "One stable path from source logic to reusable package." },
                { label: "Access", value: "CLI + platform + registry", detail: "Human and agent workflows meet the same product surface." },
              ]}
              rows={pillars.map((pillar, index) => ({
                title: pillar.title,
                body: pillar.description,
                state: index === 2 ? "accent" : "default",
              }))}
            />
            <ComparisonSurface
              eyebrow="Capability Scope"
              title="A platform page should explain the system form, not just enumerate features."
              leftTitle="Loose capability inventory"
              leftBody="A flat list can imply the platform is a bundle of tools instead of one governed operating layer."
              rightTitle="Product operating model"
              rightBody="Workspace state, registry rows, and publication flow appear together, so the platform reads as the product rather than as a utility collection."
            />
            <EvidenceSurface
              eyebrow="Operational Evidence"
              title="Representative platform rows"
              description="Representative rows show what the platform actually keeps visible at package level."
              items={circuits.map((circuit) => ({
                label: `${circuit.name} · ${circuit.from} → ${circuit.to}`,
                body:
                  circuit.phiC === "1"
                    ? `${circuit.tier} package with Φc = 1 state carried through the registry row.`
                    : `${circuit.tier} package explicitly marked as contract-bounded instead of pretending to be fully certified.`,
              }))}
              footer="The platform page keeps proof state, package identity, and publication flow legible in the same place."
            />
          </div>
        </section>

        {/* Product CTA */}
        <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 md:px-12 lg:px-18 text-center">
          <h2 className="text-center mx-auto mt-6 text-2xl font-bold tracking-tight text-teal md:text-3xl">
            Follow the product layer into registry and operator workflows
          </h2>
          <p className="text-muted-foreground mx-auto mt-3 max-w-xl text-sm leading-relaxed">
            Move from platform overview into registry rows, CLI entry, and the operator path that keeps the formal layer visible end to end.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/registry"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Open registry
            </Link>
            <Link
              href="/cli"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              Open CLI path <ArrowRight className="h-3.5 w-3.5" />
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
