import {
  ActionSurface,
  ArchetypeSectionHeader,
  CanonicalPageHero,
  CanonicalPageLayout,
  CanonicalSection,
  ScenarioFlowSurface,
} from "@/components/PageArchetypes";
import {
  EvidenceSurface,
  FeatureMatrixSurface,
} from "@/components/PageArtifacts";

export const metadata = {
  title: "Enterprise — BRIK64",
  description:
    "Enterprise page focused on review paths, private scope, deployment posture, and bounded support claims.",
};

export default function EnterprisePage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="Enterprise"
        title="Enterprise adoption needs explicit review, scope, and"
        highlight="support posture."
        description="The enterprise page should show how private workflows, deployment posture, and operator review fit into the platform story without inventing unsupported guarantees."
        actions={[
          { label: "Talk to enterprise", href: "mailto:enterprise@brik64.com", tone: "primary" },
          { label: "Platform", href: "/platform", tone: "secondary" },
        ]}
        metrics={[
          { label: "Review posture", value: "Private + auditable", detail: "The page should foreground review path and change-sensitive evidence." },
          { label: "Product fit", value: "Platform-led", detail: "Enterprise posture still inherits the same platform and registry grammar." },
          { label: "Support boundary", value: "Qualified", detail: "The page should describe routes and scope without inventing undocumented SLAs." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Enterprise Surface"
          title="The enterprise page now behaves like a bounded operating model."
          description="It should read as a review and deployment surface attached to the same product system, not as a separate sales microsite."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="Enterprise Matrix"
            title="Private scope, review flow, and support posture in one surface"
            description="The page should compress the enterprise value proposition into one inspectable object."
            metrics={[
              { label: "Private library", value: "Scoped", detail: "Team or organization artifacts can be handled without losing the shared grammar." },
              { label: "Review flow", value: "Visible", detail: "Enterprise work needs explicit review, approval, and change-sensitive evidence." },
              { label: "Deployment posture", value: "Qualified", detail: "Hosted, private, or guided routes should be described without overclaiming." },
            ]}
            rows={[
              { title: "Private registry and libraries", body: "Enterprise work should connect to the registry story while preserving private scope where required." },
              { title: "Approval and audit trails", body: "The page should emphasize who reviews the artifact, what evidence is emitted, and how changes stay visible.", state: "accent" },
              { title: "Deployment conversation", body: "Support posture, environment fit, and onboarding should remain a qualified evaluation conversation." },
            ]}
          />
          <EvidenceSurface
            eyebrow="Enterprise Evidence"
            title="What the enterprise page can support publicly"
            description="The site can describe workflow, scope, and review posture when those claims remain bounded."
            items={[
              { label: "Private scope", body: "Talk about organization libraries, private circuits, and controlled sharing without implying a fully documented product matrix the repo does not prove." },
              { label: "Review path", body: "Show how artifacts move through approval and audit surfaces rather than advertising enterprise in the abstract." },
              { label: "Support route", body: "Describe support and evaluation as explicit conversations, not as implied guarantees or contractual commitments." },
            ]}
          />
          <ScenarioFlowSurface
            eyebrow="Enterprise Loop"
            title="Enterprise adoption still follows the same bounded delivery path"
            description="The difference is scope and review depth, not a different grammar."
            steps={[
              { label: "01", title: "Qualify the domain", body: "Start from the relevant product and risk surfaces instead of a generic sales conversation.", state: "active" },
              { label: "02", title: "Define private scope", body: "Clarify what should remain private, reviewable, or organization-specific.", state: "warning" },
              { label: "03", title: "Review the evidence path", body: "Attach certification state, audit posture, and approval steps to the artifact flow.", state: "success" },
              { label: "04", title: "Choose the support route", body: "Move into enterprise evaluation or deployment planning with the scope already explicit.", state: "idle" },
            ]}
          />
          <ActionSurface
            eyebrow="Action Rail"
            title="The page should terminate in concrete enterprise routes"
            description="Enterprise readers need a direct path into contact, docs, and product surfaces."
            channels={[
              { title: "Enterprise evaluation", body: "Start the architecture or deployment conversation with an explicit human route.", action: "enterprise@brik64.com", href: "mailto:enterprise@brik64.com" },
              { title: "Product inspection", body: "Review the current platform surface before escalating into private-scope discussion.", action: "Open platform", href: "/platform" },
              { title: "Reference material", body: "Use docs when the question is really about commands, formats, or operator flow.", action: "Documentation", href: "https://docs.brik64.dev", external: true },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
