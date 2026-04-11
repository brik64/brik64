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
        title="The operator path starts with one bounded"
        highlight="command workflow."
        description="The CLI route shows the install path, command grammar, and verification loop in one consistent product cadence."
        actions={[
          { label: "Open docs", href: "https://docs.brik64.dev", tone: "primary", external: true },
          { label: "PCD", href: "/pcd", tone: "secondary" },
        ]}
        metrics={[
          { label: "Entry route", value: "brikc", detail: "The CLI remains the first operator path into the BRIK-64 system." },
          { label: "Core loop", value: "lift → check → certify", detail: "The command workflow makes the verification loop explicit." },
          { label: "Operator fit", value: "local + CI + IDE", detail: "The CLI route connects to product and workflow paths instead of acting like a command dump." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="CLI"
          title="One install and workflow route"
          description="This route shows what the CLI does, where certification fits, and what comes next without disconnected command cards."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="CLI Matrix"
            title="One command workflow replaces the old command gallery"
            description="The matrix keeps the command families visible while presenting them as parts of one operator loop."
            metrics={[
              { label: "Install posture", value: "Docs-led", detail: "The canonical install path remains documented and explicit." },
              { label: "Command families", value: "Lift, check, certify, publish", detail: "Commands are grouped by workflow role, not by visual novelty." },
              { label: "Downstream fit", value: "IDE + platform", detail: "The CLI is the first step, not a disconnected product island." },
            ]}
            rows={[
              { title: "Lift", body: "Interpret existing source into a bounded blueprint before deeper review or emission." },
              { title: "Check", body: "Run closure and domain analysis before the artifact is trusted or shared.", state: "accent" },
              { title: "Certify", body: "Emit explicit evidence and immutable state when the bounded circuit closes." },
              { title: "Publish", body: "Move the certified artifact into registry or wider platform workflows." },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Install + Quickstart"
            title="Bounded install and verification workbench"
            description="Terminal syntax remains visible and tied to explicit operator consequences."
            constraints={[
              { title: "Install from docs", body: "Route installation to the documented path instead of pretending every binary or package route is equally primary.", outcome: "operator route" },
              { title: "Check before trust", body: "The useful public story is the check and certify loop, not the existence of many commands.", outcome: "proof gate" },
              { title: "Hand off to product routes", body: "Route users into PCD, platform, and registry pages once they understand the local workflow.", outcome: "system fit" },
            ]}
            codeTitle="brikc quickstart"
            code={`$ brikc lift src/ --to pcd
$ brikc check dist/project.pcd
$ brikc certify dist/project.pcd
$ brikc registry publish dist/project.pcd`}
            footer="The CLI is strongest when it behaves like the first bounded product route, not a gallery of terminal snapshots."
          />
          <ScenarioFlowSurface
            eyebrow="Operator Loop"
            title="The CLI story is a four-step verification loop"
            description="Every command reinforces the same delivery narrative already visible on home, platform, and registry."
            steps={[
              { label: "01", title: "Start locally", body: "Install or open docs, then begin from real source or a fresh blueprint.", state: "active" },
              { label: "02", title: "Encode the bounded object", body: "Lift or write PCD so the computation becomes explicit and inspectable.", state: "warning" },
              { label: "03", title: "Check and certify", body: "Run closure and evidence steps before the artifact is shared.", state: "success" },
              { label: "04", title: "Publish or integrate", body: "Move the result into registry, IDE, CI, or enterprise review flows.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="CLI Scope"
            title="What this route promises"
            description="The CLI remains technical and direct without overstating what the command layer alone proves."
            items={[
              { label: "Local operator path", body: "Use the CLI to move from source material into bounded blueprints and explicit review steps." },
              { label: "Shared grammar", body: "The same command story must line up with PCD, platform, and registry pages instead of inventing a parallel product." },
              { label: "Scoped posture", body: "The CLI is a disciplined interface into the system. It is not the whole system by itself." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
