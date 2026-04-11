import Link from "next/link";
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
    "Agent integration reference for CTO and VP Engineering: setup paths, bounded verification loop, and explicit claim boundaries.",
};

const agentSetups = [
  {
    name: "Claude Code",
    company: "Anthropic",
    command:
      'claude "read the brik64-pcd-system skill and lift my auth.js to PCD"',
    prompt: "Lift my authentication module to PCD and emit review-ready output.",
  },
  {
    name: "Codex",
    company: "OpenAI",
    command: 'codex --skill brik64-pcd-system "lift this function to PCD"',
    prompt: "Lift this function to a bounded PCD blueprint and show diagnostics.",
  },
  {
    name: "Gemini CLI",
    company: "Google",
    command: 'gemini "using the brik64 skill, certify my utils.py"',
    prompt: "Certify my Python utility functions with bounded domain checks.",
  },
  {
    name: "Grok",
    company: "xAI",
    command: 'grok --context https://brik64.com/ai-agents "lift my code to PCD"',
    prompt: "Use BRIK64 context to lift and check the computational core.",
  },
  {
    name: "OpenCode",
    company: "Open Source",
    command:
      'opencode --skill brik64-pcd-system "export my PCD to Rust and Python"',
    prompt: "Emit target outputs from one normalized bounded blueprint.",
  },
] as const;

const communityLinks = [
  {
    title: "Documentation",
    body: "Reference material for CLI, PCD, and integration workflows.",
    href: "https://docs.brik64.dev",
    external: true,
  },
  {
    title: "GitHub",
    body: "Source, issues, skills, and contribution paths.",
    href: "https://github.com/brik64",
    external: true,
  },
  {
    title: "Discord",
    body: "Operator and community support for agent workflows.",
    href: "https://discord.gg/brik64",
    external: true,
  },
  {
    title: "AI safety use case",
    body: "Detailed governance flow for agent-produced code and actions.",
    href: "/use-cases/ai-safety",
    external: false,
  },
] as const;

export default function AIAgentsPage() {
  return (
    <CanonicalPageLayout>
      <CanonicalPageHero
        eyebrow="AI Agents"
        title="Agent-assisted coding with"
        highlight="external verification."
        description="Agent output is treated as candidate logic. BRIK64 applies policy circuits and compiler checks before publication or execution."
        actions={[
          { label: "AI safety use case", href: "/use-cases/ai-safety", tone: "primary" },
          { label: "Install CLI", href: "/cli", tone: "secondary" },
        ]}
        metrics={[
          { label: "Workflow", value: "discover → check → execute", detail: "Generated output enters a constrained review loop before side effects are allowed." },
          { label: "Agent examples", value: "5 CLI integrations", detail: "Claude Code, Codex, Gemini CLI, Grok, and OpenCode setup patterns are documented below." },
          { label: "Boundary", value: "No trust by default", detail: "Verification stays outside the model and remains inspectable by engineering teams." },
        ]}
      />

      <CanonicalSection>
        <ArchetypeSectionHeader
          eyebrow="Integration"
          title="Agent setup and bounded review loop"
          description="Use one of the documented agent paths, generate candidate circuits, then run policy and compiler checks before publication."
        />
        <div className="mx-auto mt-10 grid max-w-6xl gap-6">
          <FeatureMatrixSurface
            eyebrow="Operator Model"
            title="How AI-generated output enters the product workflow"
            description="The integration remains useful only when candidate generation, policy checks, diagnostics, and handoff stay explicit."
            metrics={[
              { label: "Source languages", value: "10 supported", detail: "Agent workflows can start from bounded lift paths across the documented source set." },
              { label: "Verification output", value: "Diagnostics + hashes", detail: "Each accepted branch carries review signals into platform and registry handoff." },
              { label: "Handoff", value: "CLI → platform", detail: "Accepted outputs move through the same operator flow used by non-agent work." },
            ]}
            rows={[
              { title: "Candidate generation", body: "Agents produce PCD or policy-relevant candidate logic; they do not bypass review controls." },
              { title: "Policy and compiler checks", body: "External checks gate unsafe branches and keep approval criteria explicit.", state: "accent" },
              { title: "Repair loop", body: "Rejected branches return structured diagnostics that agents and operators can act on." },
              { title: "Publication path", body: "Accepted branches can move to registry or enterprise review with traceable metadata." },
            ]}
          />

          <div className="rounded-[2rem] border border-border/80 bg-gradient-to-br from-muted/85 via-background to-background p-6 shadow-[0_24px_90px_rgba(0,0,0,0.12)]">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              Agent setup matrix
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Each entry includes one representative command and one prompt pattern to start bounded generation quickly.
            </p>
            <div className="mt-6 space-y-4">
              {agentSetups.map((agent) => (
                <article
                  key={agent.name}
                  className="rounded-xl border border-border/80 bg-background/90 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-foreground">
                      {agent.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                      {agent.company}
                    </p>
                  </div>
                  <pre className="mt-3 overflow-x-auto rounded-md bg-[#0a0e14] px-3 py-2 text-xs text-gray-300">
                    <code>{agent.command}</code>
                  </pre>
                  <p className="mt-3 text-xs text-muted-foreground">
                    Prompt example: {agent.prompt}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <ConstraintEnvelopeSurface
            eyebrow="Policy example"
            title="One bounded policy gate for agent actions"
            description="Policies remain machine-readable and external to model weights so approval logic stays reviewable."
            constraints={[
              { title: "Risk-aware gating", body: "High-risk actions require stronger confidence before execution can proceed.", outcome: "policy decision" },
              { title: "Token and scope boundaries", body: "Oversized or out-of-scope output fails before it becomes a production side effect.", outcome: "pre-execution block" },
              { title: "Diagnostic payloads", body: "Rejected branches emit structured reasons to support operator review and agent repair loops.", outcome: "repair signal" },
            ]}
            codeTitle="agent_action_validator.pcd"
            code={`PC agent_action_validator {
  input confidence : Float64[0.0 .. 1.0]
  input risk       : Int[0 .. 10]
  input tokens     : Int[0 .. 4096]

  assert risk <= 7 || confidence >= 0.90
  assert tokens <= 4096

  output approved : Bool = true
}`}
            footer="This policy pattern supports bounded action review. It does not make the underlying model trustworthy by itself."
          />

          <ScenarioFlowSurface
            eyebrow="Operator loop"
            title="Discover, gate, diagnose, then publish"
            description="Teams can run the same loop locally or in CI and carry accepted outputs into platform workflows."
            steps={[
              { label: "01", title: "Discover", body: "Generate candidate PCD or policy logic from source or prompts.", state: "active" },
              { label: "02", title: "Gate", body: "Apply policy circuits and compiler checks before execution.", state: "warning" },
              { label: "03", title: "Diagnose", body: "Use structured diagnostics to repair rejected branches.", state: "success" },
              { label: "04", title: "Publish", body: "Promote accepted outputs into platform and registry handoff.", state: "idle" },
            ]}
          />

          <EvidenceSurface
            eyebrow="Claim boundary"
            title="What AI-agents integration can and cannot claim"
            description="The page stays useful only when evidence and boundaries are explicit."
            items={[
              { label: "Supported", body: "External verification loop, bounded action gating, and structured diagnostics for agent-produced logic." },
              { label: "Qualified", body: "Generated branches can be reviewed and published through CLI/platform workflows when they pass declared checks." },
              { label: "Not claimed", body: "No blanket trust claim is made for model behavior, unmanaged runtime side effects, or organizational certification." },
            ]}
          />
        </div>
      </CanonicalSection>

      <CanonicalSection className="text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Community and reference paths
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Continue with docs, open issues, or the AI-safety use case depending on whether you need operator guidance, implementation support, or policy design depth.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {communityLinks.map((entry) => (
              <a
                key={entry.title}
                href={entry.href}
                target={entry.external ? "_blank" : undefined}
                rel={entry.external ? "noopener noreferrer" : undefined}
                className="rounded-xl border border-border/80 bg-background p-5 text-left shadow-sm transition hover:border-teal/40 hover:bg-teal/[0.03]"
              >
                <p className="text-sm font-semibold text-foreground">{entry.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {entry.body}
                </p>
              </a>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cli"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-teal-hover"
            >
              Start with CLI
            </Link>
            <a
              href="https://docs.brik64.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Open documentation
            </a>
          </div>
        </div>
      </CanonicalSection>
    </CanonicalPageLayout>
  );
}
