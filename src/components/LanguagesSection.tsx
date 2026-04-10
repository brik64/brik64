import { LanguageExchangeArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function LanguagesSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[03] · LANGUAGES"
          title="Ten source materials in. Fourteen deterministic targets out."
          description="Lift heterogeneous code into one canonical blueprint, preserve proof in the middle, and emit clean targets without semantic drift."
        />

        <div className="mt-10">
          <LanguageExchangeArtifact />
        </div>
      </div>
    </section>
  );
}
