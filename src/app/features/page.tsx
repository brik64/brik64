"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { MonomerGrid } from "@/components/MonomerGrid";
import {
  PageHeaderVNext,
  ProtagonistSurface,
  SupportingSurface,
  ButtonVNext,
  SectionRail,
} from "@/components/vnext/primitives";
import {
  ComparisonSurface,
  EvidenceSurface,
  FeatureMatrixSurface,
} from "@/components/PageArtifacts";
import {
  ConstraintEnvelopeSurface,
  ScenarioFlowSurface,
  CanonicalPageLayout,
} from "@/components/PageArchetypes";
import {
  featureCta,
  featureHero,
  featureOverview,
  featureSectionBlueprints,
  featureSections,
  type FeatureSectionSpec,
  type FeatureSurfaceSpec,
} from "@/lib/features-page-data";

const HeroWireframe = dynamic(
  () => import("@/components/HeroWireframe").then((m) => m.HeroWireframe),
  { ssr: false },
);

const compilationTargets = [
  { name: "Rust", logo: "/brands/rust.svg" },
  { name: "JavaScript", logo: "/brands/javascript.svg" },
  { name: "TypeScript", logo: "/brands/typescript.svg" },
  { name: "Python", logo: "/brands/python.svg" },
  { name: "C", logo: "/brands/c.svg" },
  { name: "C++", logo: "/brands/cplusplus.svg" },
  { name: "Go", logo: "/brands/go.svg" },
  { name: "COBOL", logo: "/brands/cobol.svg" },
  { name: "PHP", logo: "/brands/php.svg" },
  { name: "Java", logo: "/brands/java.svg" },
];

function CompilationTargetRail() {
  return (
    <div className="mt-8 rounded-[18px] border border-white/8 bg-[#0f1a28] p-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/42">
        DETERMINISTIC EMISSION TARGETS
      </p>
      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-5">
        {compilationTargets.map((target) => (
          <div
            key={target.name}
            className="flex min-h-12 items-center gap-2 rounded-[12px] border border-white/8 bg-[#07111c] px-3 text-sm font-semibold text-white/78"
          >
            <Image
              src={target.logo}
              alt=""
              width={20}
              height={20}
              className="h-5 w-5 object-contain"
              unoptimized
            />
            <span>{target.name}</span>
          </div>
        ))}
      </div>
    </div>
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
          dark
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
          dark
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
          dark
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
          showProofBadge
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
    <SupportingSurface className="px-6 py-14 md:px-12 md:py-16 lg:px-16" id={section.id}>
      <div className="mx-auto max-w-6xl">
        <PageHeaderVNext
          eyebrow={section.label}
          title={section.title}
          description={section.lead}
        />
        {section.id === "compilation" ? <CompilationTargetRail /> : null}

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start">
          <SectionRail title="SYSTEMIC INTEGRITY FRAMEWORK">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2BB6AC]">
                  OPERATIONAL VECTOR
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {section.workflowFocus}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2BB6AC]">
                  SYSTEMIC ENTRY POINT
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {section.integrationPoint}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2BB6AC]">
                  VERIFICATION AUTHORITY
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {blueprint.buyer}
                </p>
              </div>
              <div className="space-y-1.5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#2BB6AC]">
                  IMMUTABLE ARTIFACTS
                </p>
                <p className="text-sm leading-relaxed text-white/50">
                  {section.evidenceOutputs.join(" · ")}
                </p>
              </div>
            </div>
          </SectionRail>

          <div className="space-y-5">
            {renderFeatureSurface(section.primarySurface, `${section.id}-primary`)}
            {renderFeatureSurface(section.supportingSurface, `${section.id}-supporting`)}
            
            <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">
                FORMAL GUARANTEE BOUNDARY
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/50">
                {section.claimBoundary}
              </p>
            </div>
          </div>
        </div>
      </div>
    </SupportingSurface>
  );
}

export default function FeaturesPage() {
  return (
    <CanonicalPageLayout>
      <main>
        <ProtagonistSurface className="flex flex-col items-center justify-center pt-32 pb-24 md:pt-48 md:pb-32">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.64] [filter:saturate(1.08)_contrast(1.01)_brightness(1.08)]"
            style={{ backgroundImage: "url(/generated/features-hero-bg.png)" }}
          />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat mix-blend-screen opacity-[0.2] [filter:saturate(1.08)_contrast(1.0)_brightness(1.08)]"
            style={{ backgroundImage: "url(/generated/features-hero-bg.png)" }}
          />
          <div className="absolute inset-0 bg-[rgba(1,4,8,0.04)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.34)_0%,rgba(2,6,10,0.26)_24%,rgba(2,6,10,0.22)_54%,rgba(1,3,6,0.52)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(44,182,172,0.06)_0%,rgba(23,69,109,0.2)_34%,rgba(4,12,20,0.34)_68%,rgba(1,3,6,0.58)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,223,255,0.16),transparent_42%)]" />
          <HeroWireframe />
          <div className="relative z-10 px-6 text-center">
            <PageHeaderVNext
              centered
              eyebrow={featureHero.eyebrow}
              title={`${featureHero.title} ${featureHero.highlight}`}
              description={featureHero.description}
            />
          </div>
        </ProtagonistSurface>

        <SupportingSurface className="px-6 py-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <PageHeaderVNext
              eyebrow={featureOverview.header.eyebrow}
              title={featureOverview.header.title}
              description={featureOverview.header.description}
            />
            <div className="mt-16 grid gap-8">
              {renderFeatureSurface(featureOverview.comparison, "overview-comparison")}
              {renderFeatureSurface(featureOverview.matrix, "overview-matrix")}
              {renderFeatureSurface(featureOverview.evidence, "overview-evidence")}
            </div>
          </div>
        </SupportingSurface>

        <SupportingSurface className="px-6 py-20 md:px-12 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <PageHeaderVNext
              eyebrow="Atomic Catalog"
              title="Core and extended monomer matrices"
              description="The same interactive matrix used in the home hero is exposed here to inspect bounded core operations and contract-bounded extended operations in one surface."
            />
            <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:items-start">
              <MonomerGrid variant="hero" fixedTrack="core" />
              <MonomerGrid variant="hero" fixedTrack="extended" />
            </div>
          </div>
        </SupportingSurface>

        {featureSections.map((section) => (
          <FeatureSectionBlock key={section.id} section={section} />
        ))}

        <section className="border-t border-white/10 bg-black px-6 py-32 text-center md:px-12 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white md:text-5xl">
              {featureCta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
              {featureCta.description}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
              {featureCta.actions.map((action) => (
                <ButtonVNext
                  key={`${action.label}-${action.href}`}
                  href={action.href}
                  tone={action.tone}
                  external={action.external}
                  className="px-10 h-14 text-base"
                >
                  {action.label}
                </ButtonVNext>
              ))}
            </div>
          </div>
        </section>
      </main>
    </CanonicalPageLayout>
  );
}
