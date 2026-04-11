import {
  ArchetypeSectionHeader,
  CanonicalPageHero,
  CanonicalPageLayout,
  CanonicalSection,
  ConstraintEnvelopeSurface,
  RiskEvidenceSurface,
  ScenarioFlowSurface,
} from "@/components/PageArchetypes";
import { EvidenceSurface } from "@/components/PageArtifacts";

export const metadata = {
  title: "Compliance — BRIK64",
  description:
    "Bounded software evidence, review support, and explicit claim boundaries for compliance-facing workflows.",
};

export default function CompliancePage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Compliance"
        title="Compliance review starts with bounded software evidence, not blanket"
        highlight="certification claims."
        description="BRIK64 generates reviewable software evidence that teams can carry into audit and governance workflows. That evidence supports engineering and compliance review; it does not satisfy regulatory or organizational programs on its own."
        actions={[
          { label: "Request evaluation", href: "mailto:enterprise@brik64.com", tone: "primary" },
          { label: "Enterprise", href: "/enterprise", tone: "secondary" },
        ]}
        metrics={[
          { label: "Core claim", value: "Evidence generation", detail: "The route focuses on bounded logic, change-sensitive evidence, and readable review state." },
          { label: "Claim posture", value: "Scope explicit", detail: "This evidence model does not imply complete regulatory certification." },
          { label: "Review fit", value: "Engineering + audit", detail: "The useful output is evidence another team can inspect quickly." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Compliance"
          title="What compliance evidence covers and what it does not"
          description="Readers should see what software evidence is produced, how it is scoped, and where it fits into wider audit or compliance workflows."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <RiskEvidenceSurface
            eyebrow="Evidence path"
            title="Bounded software evidence for engineering and audit review"
            description="Compliance posture is expressed through readable software evidence rather than floating standards badges."
            metrics={[
              { label: "Evidence type", value: "Change-sensitive review packet", detail: "The output stays tied to the exact code path or blueprint under review." },
              { label: "Review use", value: "Engineering + audit", detail: "Teams can inspect what was checked and what changed." },
              { label: "Boundary", value: "Software logic", detail: "Organizational, process, and infrastructure controls still sit outside this claim set." },
            ]}
            tracks={[
              { label: "Software logic", title: "Bounded logic can be reviewed directly", body: "Explicit domains, closure state, and review metadata create a stronger evidence package than screenshots or code comments.", emphasis: "proof" },
              { label: "Audit support", title: "Evidence helps reviewers move faster", body: "What matters is a legible packet a technical reviewer or compliance lead can inspect without guessing how it was produced." },
              { label: "Claim boundary", title: "Software evidence is not the whole program", body: "Compliance language stays explicit about the difference between software review evidence and full regulatory or organizational certification.", emphasis: "risk" },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Mapped Controls"
            title="Standards references only make sense when the software boundary stays explicit"
            description="Regulatory or framework touchpoints are valid only when the software-evidence boundary stays explicit."
            constraints={[
              { title: "Processing integrity", body: "Show how bounded software logic supports the review of calculations, decision paths, and emitted outputs.", outcome: "evidence support" },
              { title: "Change visibility", body: "Tie the review packet to the exact logic under review so teams can tell when the underlying behavior changed.", outcome: "change trace" },
              { title: "Scope separation", body: "Call out clearly that infrastructure, organizational, and legal controls require additional evidence beyond the software logic.", outcome: "claim boundary" },
            ]}
            codeTitle="evidence_dossier.pcd"
            code={`PC evidence_dossier {
  input review_hash : String
  input closure_state : Enum["open", "closed"]

  assert closure_state == "closed"

  output review_packet : String = review_hash
}`}
            footer="The compliance dossier should stay bounded: what was checked, what evidence exists, and what still requires separate controls."
          />
          <ScenarioFlowSurface
            eyebrow="Review Flow"
            title="Evidence becomes useful only when the review path is explicit"
            description="Software evidence matters only when the people and steps that consume it stay visible."
            steps={[
              { label: "01", title: "Define the bounded logic", body: "Start from the blueprint or code path whose behavior is under review.", state: "active" },
              { label: "02", title: "Check and certify", body: "Run the closure or certification step that produces explicit evidence.", state: "warning" },
              { label: "03", title: "Attach review metadata", body: "Package review state, scope, and supporting notes into one readable packet.", state: "success" },
              { label: "04", title: "Use in wider audit flow", body: "Bring that evidence into enterprise or compliance review without overclaiming what it covers.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="Public Claim Boundary"
            title="What this compliance model is allowed to claim"
            description="Everything here must remain supportable by the repo and by the product routes visible elsewhere on the site."
            items={[
              { label: "Allowed", body: "Talk about bounded software evidence, explicit review state, and operator-readable review packets." },
              { label: "Qualified", body: "Mention standards or control classes only when the page keeps the software-evidence boundary explicit." },
              { label: "Blocked", body: "Do not imply full legal, regulatory, or organizational certification from software evidence alone." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
