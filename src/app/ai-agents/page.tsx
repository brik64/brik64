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
    "Bounded agent workflows, external verification, and operator-readable diagnostics for AI-assisted software.",
};

export default function AIAgentsPage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="AI Agents"
        title="Agent workflows become safer when the proof loop is"
        highlight="outside the model."
        description="AI agents become useful when discovery, verification, and execution stay inside one bounded operator loop. The key claim is external verification around the model, not trust in the model itself."
        actions={[
          { label: "Open platform", href: "/platform", tone: "primary" },
          { label: "AI use case", href: "/use-cases/ai-safety", tone: "secondary" },
        ]}
        metrics={[
          { label: "Agent loop", value: "discover → check → execute", detail: "The route foregrounds the bounded operator loop around the agent." },
          { label: "Trust boundary", value: "External verification", detail: "The useful promise is the boundary around the model, not faith in the model." },
          { label: "Product fit", value: "MCP + platform", detail: "Agent workflows still tie back to CLI, PCD, platform, and registry." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="AI Agents"
          title="Discover, check, and execute inside one bounded workflow"
          description="Readers should understand how agents discover bounded logic, how verification intervenes, and what evidence comes out of that loop."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="Agent Matrix"
            title="One bounded workflow replaces prompt demos and detached code blocks"
            description="The matrix keeps discovery, checking, and execution visible while making their bounded role explicit."
            metrics={[
              { label: "Discover", value: "Registry + product routes", detail: "Agents should start from known bounded logic before inventing new code." },
              { label: "Check", value: "Bounded proof loop", detail: "The verification layer rejects or explains paths before execution." },
              { label: "Execute", value: "Scoped action", detail: "Approved actions still remain tied to the bounded logic and its evidence." },
            ]}
            rows={[
              { title: "Tool discovery", body: "Agents begin by searching existing bounded circuits or product routes." },
              { title: "Verification feedback", body: "Compiler or policy diagnostics become structured input to the next agent step.", state: "accent" },
              { title: "Execution handoff", body: "Only approved outputs move into execution or broader workflow paths." },
            ]}
          />
          <ConstraintEnvelopeSurface
            eyebrow="Policy boundary"
            title="A bounded policy circuit anchors the workflow"
            description="Code stays present, but it appears as evidence inside the agent loop rather than as a detached demo."
            constraints={[
              { title: "Discover before generating", body: "Agents inspect existing bounded logic or docs before producing new code or actions.", outcome: "bounded search" },
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
            footer="This route is strongest when it shows how bounded logic and diagnostics shape the loop around the agent."
          />
          <ScenarioFlowSurface
            eyebrow="Agent Loop"
            title="One operator loop from discovery to scoped execution"
            description="This is the main story: how an agent moves through discovery, proof, and scoped execution."
            steps={[
              { label: "01", title: "Discover", body: "Search docs, registry, or existing bounded logic before writing new code.", state: "active" },
              { label: "02", title: "Compose or lift", body: "Build or extract bounded logic that can be inspected.", state: "warning" },
              { label: "03", title: "Check and certify", body: "Run verification to return explicit diagnostics or approval state.", state: "success" },
              { label: "04", title: "Execute or publish", body: "Only then move the approved result into execution or platform workflows.", state: "idle" },
            ]}
          />
          <EvidenceSurface
            eyebrow="Claim Boundary"
            title="What this route does and does not promise"
            description="The workflow is valuable because it bounds software actions, not because it claims to solve the entire AI safety stack."
            items={[
              { label: "Allowed", body: "Talk about external verification, structured diagnostics, and bounded execution paths for agents." },
              { label: "Qualified", body: "Mention MCP or model workflows only when they remain attached to visible product routes and docs." },
              { label: "Blocked", body: "Do not imply that this page proves general model trustworthiness or replaces broader safety and operations work." },
            ]}
          />
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
