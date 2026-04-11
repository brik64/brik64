"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import dynamic from "next/dynamic";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MonomerGrid } from "@/components/MonomerGrid";
import {
  ConstraintEnvelopeSurface,
  ScenarioFlowSurface,
} from "@/components/PageArchetypes";
import {
  ComparisonSurface,
  EvidenceSurface,
  FeatureMatrixSurface,
  PageSectionHeader,
} from "@/components/PageArtifacts";
import {
  featureCta,
  featureHero,
  featureOverview,
  featureSectionBlueprints,
  featureSections,
  type FeaturePageAction,
  type FeatureSectionSpec,
  type FeatureSurfaceSpec,
} from "@/lib/features-page-data";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false },
);

function ActionLink({ action }: { action: FeaturePageAction }) {
  const icon = action.external ? (
    <ExternalLink className="h-4 w-4" />
  ) : (
    <ArrowRight className="h-4 w-4" />
  );
  const shared =
    "inline-flex items-center gap-2 text-sm font-medium transition-colors";
  const className =
    action.tone === "primary"
      ? `${shared} rounded-md bg-teal px-6 py-3 text-white hover:bg-teal-hover`
      : action.tone === "link"
        ? `${shared} text-muted-foreground hover:text-foreground`
        : `${shared} rounded-md border border-border bg-background px-5 py-3 text-foreground hover:border-teal/30 hover:bg-teal/[0.04]`;

  if (action.external) {
    return (
      <a
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {action.label}
        {icon}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {action.label}
      {icon}
    </Link>
  );
}

function renderFeatureSurface(
  surface: FeatureSurfaceSpec,
  key: string,
) {
  switch (surface.kind) {
    case "ComparisonSurface":
      return (
        <ComparisonSurface
          key={key}
          eyebrow={surface.eyebrow}
          title={surface.title}
          description={surface.description}
          statusLabel={surface.statusLabel}
          statusTone={surface.statusTone}
          leftEyebrow={surface.leftEyebrow}
          leftTitle={surface.leftTitle}
          leftBody={surface.leftBody}
          rightEyebrow={surface.rightEyebrow}
          rightTitle={surface.rightTitle}
          rightBody={surface.rightBody}
        />
      );
    case "FeatureMatrixSurface":
      return (
        <FeatureMatrixSurface
          key={key}
          eyebrow={surface.eyebrow}
          title={surface.title}
          description={surface.description}
          metrics={surface.metrics}
          rows={surface.rows}
        />
      );
    case "EvidenceSurface":
      return (
        <EvidenceSurface
          key={key}
          eyebrow={surface.eyebrow}
          title={surface.title}
          description={surface.description}
          statusLabel={surface.statusLabel}
          statusTone={surface.statusTone}
          itemStatusLabel={surface.itemStatusLabel}
          items={surface.items}
          footer={surface.footer}
        />
      );
    case "ConstraintEnvelopeSurface":
      return (
        <ConstraintEnvelopeSurface
          key={key}
          eyebrow={surface.eyebrow}
          title={surface.title}
          description={surface.description}
          constraints={surface.constraints}
          codeEyebrow={surface.codeEyebrow}
          codeTitle={surface.codeTitle}
          code={surface.code}
          footer={surface.footer}
        />
      );
    case "ScenarioFlowSurface":
      return (
        <ScenarioFlowSurface
          key={key}
          eyebrow={surface.eyebrow}
          title={surface.title}
          description={surface.description}
          statusLabel={surface.statusLabel}
          statusTone={surface.statusTone}
          steps={surface.steps}
          footer={surface.footer}
        />
      );
  }
}

function FeatureSectionBlock({ section }: { section: FeatureSectionSpec }) {
  const blueprint = featureSectionBlueprints[section.id];

  return (
    <section
      id={section.id}
      className="border-border mx-auto max-w-7xl border-x border-t px-6 py-16 md:px-12 md:py-24 lg:px-16"
    >
      <PageSectionHeader
        eyebrow={section.label}
        title={section.title}
        description={section.lead}
      />

      <div className="mx-auto mt-8 max-w-6xl rounded-[1.5rem] border border-border/80 bg-background/90 p-5 shadow-sm">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                Workflow focus
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.workflowFocus}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                Where BRIK-64 enters
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.integrationPoint}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                Technical buyer
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {blueprint.buyer}
              </p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                Evidence outputs
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {section.evidenceOutputs.join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl gap-6">
        {renderFeatureSurface(section.primarySurface, `${section.id}-primary`)}
        {renderFeatureSurface(section.supportingSurface, `${section.id}-supporting`)}
      </div>

      <div className="mx-auto mt-6 max-w-6xl rounded-[1.4rem] border border-teal/15 bg-teal/[0.04] p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
          Claim boundary
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {section.claimBoundary}
        </p>
      </div>
    </section>
  );
}

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-[#f0fdff] to-white">
            <HeroWireframe />
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
              <span className="mb-4 inline-block rounded-full border border-teal/30 bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
                {featureHero.eyebrow}
              </span>
              <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {featureHero.title} <span className="text-teal">{featureHero.highlight}</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
                {featureHero.description}
              </p>
            </div>
          </section>

          <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
            <PageSectionHeader
              eyebrow={featureOverview.header.eyebrow}
              title={featureOverview.header.title}
              description={featureOverview.header.description}
            />
            <div className="mx-auto mt-10 grid max-w-6xl gap-6">
              {renderFeatureSurface(featureOverview.comparison, "overview-comparison")}
              {renderFeatureSurface(featureOverview.matrix, "overview-matrix")}
              {renderFeatureSurface(featureOverview.evidence, "overview-evidence")}
            </div>
          </section>

          <section className="border-t border-border px-6 py-16 md:px-12 md:py-24 lg:px-16">
            <PageSectionHeader
              eyebrow="Atomic Catalog"
              title="Core and extended monomer matrices"
              description="The same interactive matrix used in the home hero is exposed here to inspect bounded core operations and contract-bounded extended operations in one surface."
            />
            <div className="mt-10 flex justify-center">
              <MonomerGrid variant="hero" />
            </div>
          </section>

          {featureSections.map((section) => (
            <FeatureSectionBlock key={section.id} section={section} />
          ))}

          <section className="bg-background border-border mx-auto max-w-7xl border-x border-t px-6 py-20 text-center md:px-12 lg:px-16">
            <h2 className="mx-auto max-w-3xl text-balance text-2xl font-bold tracking-tight text-teal md:text-3xl">
              {featureCta.title}
            </h2>
            <p className="text-muted-foreground mx-auto mt-3 max-w-2xl text-sm leading-relaxed">
              {featureCta.description}
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {featureCta.actions.map((action) => (
                <ActionLink key={`${action.label}-${action.href}`} action={action} />
              ))}
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
