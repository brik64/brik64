import { AgentProofLoopArtifact } from "@/components/HomeProofArtifacts";
import { HomeSectionHeader } from "@/components/PageArtifacts";

const compilationTargets = [
  "Rust",
  "JavaScript",
  "TypeScript",
  "Python",
  "C",
  "C++",
  "Go",
  "COBOL",
  "PHP",
  "Java",
  "Swift",
  "WASM",
  "native x86-64",
  "BIR bytecode",
];

export function AINativeSection() {
  return (
    <section className="border-border border-t bg-background px-4 py-14 sm:px-6 md:py-18 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <HomeSectionHeader
          eyebrow="[10] · AI-NATIVE"
          title="Tell your AI what to build. The compiler proves it&apos;s correct."
          description="An LLM writes PCD, the compiler checks closure, and the failure becomes the next prompt until the circuit certifies."
        />

        <div className="mt-8">
          <AgentProofLoopArtifact />
        </div>

        <div className="mt-8">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Compiles to 14 targets
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {compilationTargets.map((target) => (
              <div
                key={target}
                className="rounded-full border border-teal/20 bg-teal/[0.04] px-3 py-1 shadow-sm"
              >
                <span className="text-xs font-medium text-teal md:text-sm">
                  {target}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
