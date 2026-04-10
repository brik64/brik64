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
    "Compliance page focused on bounded evidence generation, scope-explicit claims, and reviewable dossier surfaces.",
};

export default function CompliancePage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Compliance"
        title="Compliance messaging should focus on evidence posture, not on blanket"
        highlight="certification claims."
        description="The compliance page should explain what kind of reviewable software evidence BRIK64 can generate and where organizational or regulatory controls still sit outside that boundary."
        actions={[
          { label: "Request evaluation", href: "mailto:enterprise@brik64.com", tone: "primary" },
          { label: "Enterprise", href: "/enterprise", tone: "secondary" },
        ]}
        metrics={[
          { label: "Core claim", value: "Evidence generation", detail: "The page should emphasize bounded logic, change-sensitive artifacts, and readable review state." },
          { label: "Claim posture", value: "Scope explicit", detail: "No page copy should imply complete regulatory certification by itself." },
          { label: "Operator fit", value: "Audit support", detail: "The useful output is evidence that can support engineering and compliance review." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Compliance Surface"
          title="The page now behaves like an evidence dossier instead of a standards catalog."
          description="Readers should see what software evidence is produced, how it is scoped, and where it fits into wider audit or compliance workflows."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <RiskEvidenceSurface
            eyebrow="Evidence Dossier"
            title="The protagonist object is the reviewable evidence path"
            description="Compliance posture is expressed through bounded software evidence, not through floating standards badges."
            metrics={[
              { label: "Artifact type", value: "Change-sensitive evidence", detail: "The output should remain tied to the exact code path or blueprint under review." },
              { label: "Review use", value: "Engineering + audit", detail: "The page should make clear who reads the artifact and what it is for." },
              { label: "Boundary", value: "Software logic", detail: "Organizational, process, and infrastructure controls still sit outside this page's claim set." },
            ]}
            tracks={[
              { label: "Software logic", title: "Bounded logic can be reviewed directly", body: "The page should show how explicit domains, closure state, and artifact metadata create a stronger review object than code comments or screenshots.", emphasis: "proof" },
              { label: "Audit support", title: "Evidence helps reviewers move faster", body: "What matters is a legible artifact a technical reviewer or compliance lead can inspect without guessing how it was produced." },
              { label: "Scope honesty", title: "The page must say what it does not prove", body: "Compliance posture should remain explicit about the difference between software evidence and whole-program certification.", emphasis: "risk" },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Mapped Controls"
            title="Standards references live as bounded rows inside the evidence surface"
            description="The page can mention regulatory or framework touchpoints when it makes the software-evidence boundary explicit."
            constraints={[
              { title: "Processing integrity", body: "Show how bounded software logic supports the review of calculations, decision paths, and emitted outputs.", outcome: "evidence support" },
              { title: "Change visibility", body: "Tie the evidence object to the exact artifact under review so reviewers can tell when the underlying logic changed.", outcome: "change trace" },
              { title: "Scope separation", body: "Call out clearly that infrastructure, organizational, and legal controls require additional evidence beyond the software artifact.", outcome: "claim boundary" },
            ]}
            codeTitle="evidence_dossier.pcd"
            code={`PC evidence_dossier {
  input artifact_hash : String
  input closure_state : Enum["open", "closed"]

  assert closure_state == "closed"

  output review_packet : String = artifact_hash
}`}
            footer="The compliance page should read like a bounded dossier: what was checked, what evidence exists, and what still requires separate controls."
          />
          <ScenarioFlowSurface
            eyebrow="Review Flow"
            title="Evidence becomes useful only when the review path is explicit"
            description="The page should connect software evidence to the people and steps that actually consume it."
            steps={[
              { label: "01", title: "Define the bounded artifact", body: "Start from the blueprint or code path whose logic is under review.", state: "active" },
              { label: "02", title: "Check and certify", body: "Run the closure or certification step that produces explicit evidence.", state: "warning" },
              { label: "03", title: "Attach review metadata", body: "Package artifact state, scope, and relevant supporting notes into one readable object.", state: "success" },
              { label: "04", title: "Use in wider audit flow", body: "Bring that evidence into enterprise or compliance review without overclaiming what it covers.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="Public Claim Boundary"
            title="What this page is allowed to claim"
            description="The page must remain supportable by the repo and by the product surfaces visible elsewhere on the site."
            items={[
              { label: "Allowed", body: "Talk about bounded software evidence, explicit review state, and operator-readable artifacts." },
              { label: "Qualified", body: "Mention standards or control classes only when the page keeps the software-evidence boundary explicit." },
              { label: "Blocked", body: "Do not imply full legal, regulatory, or organizational certification based on this page alone." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
