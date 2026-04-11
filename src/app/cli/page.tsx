import {
  ArchetypeSectionHeader,
  CanonicalPageHero,
  CanonicalPageLayout,
  CanonicalSection,
  ConstraintEnvelopeSurface,
  ScenarioFlowSurface,
} from "@/components/PageArchetypes";
import {
  EvidenceSurface,
  FeatureMatrixSurface,
} from "@/components/PageArtifacts";

export const metadata = {
  title: "CLI — BRIK64",
  description:
    "The BRIK64 CLI page presents bounded install and workflow guidance for technical operators.",
};

export default function CLIPage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="CLI"
        title="Command-line workflow for"
        highlight="bounded verification."
        description="Use brikc to lift source logic into PCD, check closure and domains, certify outputs, and publish reusable circuits."
        actions={[
          { label: "Open docs", href: "https://docs.brik64.dev", tone: "primary", external: true },
          { label: "PCD", href: "/pcd", tone: "secondary" },
        ]}
        metrics={[
          { label: "Entry command", value: "brikc", detail: "The same binary drives local development, CI checks, and evidence generation." },
          { label: "Core loop", value: "lift → check → certify", detail: "The sequence stays explicit from source extraction to certification output." },
          { label: "Integration", value: "local + CI + IDE", detail: "CLI outputs can be handed to platform and registry workflows without changing semantics." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="CLI"
          title="Install once, then run the verification sequence"
          description="Each CLI stage maps to a technical output so teams can adopt the same flow in local and CI contexts."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="Command Model"
            title="From source code to reusable certified output"
            description="Commands are grouped by lifecycle stage: lift, check, certify, and publish."
            metrics={[
              { label: "Install path", value: "Docs-led", detail: "Use the canonical install path to avoid drift across environments." },
              { label: "Command set", value: "Lift, check, certify, publish", detail: "Each family has a clear role in the bounded verification lifecycle." },
              { label: "Handoff", value: "IDE + platform", detail: "Certified outputs are ready for registry and team workflows." },
            ]}
            rows={[
              { title: "Lift", body: "Interpret existing source into a bounded blueprint before deeper review or emission." },
              { title: "Check", body: "Run closure and domain analysis before the artifact is trusted or shared.", state: "accent" },
              { title: "Certify", body: "Emit explicit evidence and immutable state when the bounded circuit closes." },
              { title: "Publish", body: "Move the certified artifact into registry or wider platform workflows." },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Install and Quickstart"
            title="Canonical quickstart sequence"
            description="Use the documented install path and run the same four-step sequence in local and CI environments."
            constraints={[
              { title: "Install from docs", body: "Use the documented install route so binary and version behavior stay consistent across teams.", outcome: "consistent entrypoint" },
              { title: "Check before trust", body: "Run closure and domain checks before promoting outputs into shared workflows.", outcome: "verification gate" },
              { title: "Handoff to platform", body: "Publish only after certification state and hashes are available for downstream review.", outcome: "traceable handoff" },
            ]}
            codeTitle="brikc quickstart"
            code={`$ brikc lift src/ --to pcd
$ brikc check dist/project.pcd
$ brikc certify dist/project.pcd
$ brikc registry publish dist/project.pcd`}
            footer="The same sequence works for local development, CI gates, and registry publication."
          />
          <ScenarioFlowSurface
            eyebrow="Operator Loop"
            title="Operational sequence"
            description="This is the execution order used across CLI, platform, and registry handoff."
            steps={[
              { label: "01", title: "Start locally", body: "Install or open docs, then begin from real source or a fresh blueprint.", state: "active" },
              { label: "02", title: "Encode the bounded object", body: "Lift or write PCD so the computation becomes explicit and inspectable.", state: "warning" },
              { label: "03", title: "Check and certify", body: "Run closure and evidence steps before the artifact is shared.", state: "success" },
              { label: "04", title: "Publish or integrate", body: "Move the result into registry, IDE, CI, or enterprise review flows.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="Claim Boundary"
            title="What CLI evidence means"
            description="CLI checks apply to the modeled circuit and declared domains; external runtimes and side effects require separate controls."
            items={[
              { label: "Covered by CLI checks", body: "Closure state, declared domains, and emitted certification artifacts for the bounded blueprint." },
              { label: "Handoff output", body: "Blueprints, hashes, and evidence artifacts can move into platform and registry review workflows." },
              { label: "Not claimed by CLI alone", body: "No blanket guarantee is made for unmanaged host runtime behavior, external APIs, or deployment infrastructure." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
