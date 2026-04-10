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
  title: "AI Agents — BRIK64",
  description:
    "AI agent workflow page focused on bounded tool loops, external verification, and operator-readable proof surfaces.",
};

export default function AIAgentsPage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="AI Agents"
        title="Agent workflows become safer when the proof loop is"
        highlight="outside the model."
        description="The AI-agents page should show a bounded discover-check-execute loop, not a generic prompt demo. The protagonist object is the workflow, not the snippet."
        actions={[
          { label: "Open platform", href: "/platform", tone: "primary" },
          { label: "AI use case", href: "/use-cases/ai-safety", tone: "secondary" },
        ]}
        metrics={[
          { label: "Agent loop", value: "discover → check → execute", detail: "The page should foreground the bounded operator loop around the agent." },
          { label: "Trust boundary", value: "External verification", detail: "The useful promise is the surface around the model, not faith in the model." },
          { label: "Product fit", value: "MCP + platform", detail: "The page should tie agent workflows back to CLI, PCD, platform, and registry." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Agent Surface"
          title="The page now behaves like a workflow object instead of a demo page."
          description="Readers should understand how agents discover bounded artifacts, how verification intervenes, and what evidence comes out of that loop."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="Agent Matrix"
            title="One workflow surface replaces prompt demos and detached code blocks"
            description="The matrix keeps the key agent capabilities visible while making their bounded role explicit."
            metrics={[
              { label: "Discover", value: "Registry + product surfaces", detail: "Agents should start from known artifacts before inventing new ones." },
              { label: "Check", value: "Bounded proof loop", detail: "The verification layer rejects or explains paths before execution." },
              { label: "Execute", value: "Scoped action", detail: "Approved actions still remain tied to the artifact and its evidence." },
            ]}
            rows={[
              { title: "Tool discovery", body: "Agents begin by searching existing bounded circuits or product surfaces." },
              { title: "Verification feedback", body: "Compiler or policy diagnostics become structured input to the next agent step.", state: "accent" },
              { title: "Execution handoff", body: "Only approved artifacts move into execution or broader workflow surfaces." },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Policy Artifact"
            title="A bounded policy or PCD object anchors the workflow"
            description="Code stays present, but it is evidence embedded inside the agent loop rather than the main page object."
            constraints={[
              { title: "Discover before generating", body: "The page should show that agents inspect existing artifacts or docs before producing new code or actions.", outcome: "bounded search" },
              { title: "Check before action", body: "Generated outputs should pass through explicit verification or policy checks before they are trusted.", outcome: "proof gate" },
              { title: "Emit readable diagnostics", body: "Failures should produce structured reasons that can drive the next agent iteration or human review.", outcome: "repair loop" },
            ]}
            codeTitle="agent_policy_guard.pcd"
            code={`PC agent_policy_guard {
  input confidence : Float64[0.0 .. 1.0]
  input actionRisk : Int[0 .. 10]

  assert actionRisk <= 7 || confidence >= 0.90
  output approved : Bool = true
}`}
            footer="The AI-agent page is strongest when it shows how bounded artifacts and diagnostics shape the loop around the agent."
          />
          <ScenarioFlowSurface
            eyebrow="Agent Loop"
            title="The workflow itself is the protagonist artifact"
            description="This is the main story: how an agent moves through discovery, proof, and scoped execution."
            steps={[
              { label: "01", title: "Discover", body: "Search docs, registry, or existing artifacts before writing new logic.", state: "active" },
              { label: "02", title: "Compose or lift", body: "Build or extract a bounded artifact that can be inspected.", state: "warning" },
              { label: "03", title: "Check and certify", body: "Run verification to return explicit diagnostics or approval state.", state: "success" },
              { label: "04", title: "Execute or publish", body: "Only then move the artifact into execution or platform workflows.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="Claim Boundary"
            title="What the page should and should not promise"
            description="The workflow is valuable because it bounds software actions, not because it claims to solve the entire AI safety stack."
            items={[
              { label: "Allowed", body: "Talk about external verification, structured diagnostics, and bounded execution paths for agents." },
              { label: "Qualified", body: "Mention MCP or model workflows only when they remain attached to the visible product surfaces and docs." },
              { label: "Blocked", body: "Do not imply that this page proves general model trustworthiness or replaces broader safety and operations work." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
