import { PhiC } from "@/components/PhiC";
import { EditorControlArtifact } from "@/components/HomeProofArtifacts";
import { EvidenceSurface, HomeSectionHeader } from "@/components/PageArtifacts";

export function EditorsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[08] · EDITORS"
          title="Proof belongs where code is written."
          description="PCD syntax highlighting, inline certification, one-click lift, and `brikc lsp` stay inside the authoring loop so proof is visible before the PR."
        />

        <div className="mt-10">
          <EditorControlArtifact />
        </div>

        <div className="mt-8">
          <EvidenceSurface
            eyebrow="Editor Evidence"
            title="The editor surface keeps proof attached to code authoring."
            description="A platform lead should not have to trust an external demo. The IDE surface makes grammar, certification, and lift behavior inspectable where code is written."
            items={[
              { label: "Syntax highlighting / PCD visibility", body: "Syntax highlighting and file awareness make the circuit boundary explicit inside the editor, not after export." },
              { label: <>Inline certification / <PhiC /></>, body: "Proof state stays visible before the PR and before the registry package exists." },
              { label: "`brikc lsp` + one-click lift", body: "One-click lift and `brikc lsp` keep source editing, PCD inspection, and proof feedback in the same path." },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
