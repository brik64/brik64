import { PhiC } from "@/components/PhiC";
import { EditorControlArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

const features = [
  "Syntax highlighting for .pcd files",
  <>Inline <PhiC /> certification status</>,
  "One-click lift from source to PCD",
  "LSP server: brikc lsp",
];

export function EditorsSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[08] · EDITORS"
          title="Proof belongs where code is written."
          description="PCD syntax highlighting, inline certification, one-click lift, and `brikc lsp` stay inside the authoring loop so proof is visible before the PR."
        />

        <div className="mt-10">
          <EditorControlArtifact />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 rounded-[1.5rem] border border-border/70 bg-muted/20 px-5 py-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal/60" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
