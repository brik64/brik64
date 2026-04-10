import { GuaranteeMatrixArtifact } from "@/components/HomeProofArtifacts";
import { MonomerFamilyBoard } from "@/components/MonomerArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

export function WorldModelsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[05] · THE FOUNDATION"
          title="One compiler. Every guarantee. One finite material system."
          description="The foundation is not only algebraic. It is also visual: a bounded catalog of monomers, grouped into certified and extended families, that every circuit, registry package, and compiler guarantee is built from."
        />

        <div className="mt-10">
          <GuaranteeMatrixArtifact />
        </div>

        <div className="mt-12 grid gap-6">
          <MonomerFamilyBoard />
        </div>
      </div>
    </section>
  );
}
