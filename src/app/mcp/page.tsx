import { FileCode2, PlugZap, ShieldCheck, Workflow } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ButtonVNext } from "@/components/vnext/primitives";

export const metadata = {
  title: "MCP Server - BRIK64",
  description:
    "BRIK64 MCP endpoint and bounded tool surface for agents working with PCDs, proof checks, and monomer operations.",
};

const endpoint = "https://brik64.com/.well-known/brik64-agent";

const tools = [
  {
    title: "PCD authoring",
    body: "Create or inspect canonical blueprint structure before generated code is emitted.",
    icon: FileCode2,
  },
  {
    title: "Proof checks",
    body: "Ask for bounded evidence state, hashes, and review posture tied to the artifact.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow routing",
    body: "Route agent work toward lift, review, certification packet, or public proof surfaces.",
    icon: Workflow,
  },
];

export default function McpPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 blueprint-grid opacity-35" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.88),rgba(1,4,8,0.98))]" />
          <div className="relative mx-auto grid max-w-[1400px] gap-12 px-6 py-28 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
            <div>
              <Badge variant="outline" className="border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                MCP endpoint
              </Badge>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                BRIK64 tools for AI agents.
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-muted-foreground">
                Agents can connect to a bounded BRIK64 tool surface for PCD authoring,
                proof-state lookup, monomer operations, and review packet preparation.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonVNext href={endpoint} tone="primary" external>
                  Open agent manifest
                </ButtonVNext>
                <ButtonVNext href="/ai-agent-skills" tone="secondary">
                  AI Agent Skills
                </ButtonVNext>
              </div>
            </div>

            <Card className="relative min-h-[480px] overflow-hidden rounded-[32px] border-white/10 bg-[#071018] p-0 shadow-[0_40px_120px_rgba(0,0,0,0.42)]">
              <div className="absolute inset-0 opacity-70">
                <svg className="h-full w-full" viewBox="0 0 680 480" aria-hidden="true">
                  <path d="M 70 240 H 250 V 125 H 470" stroke="rgba(0,229,255,0.28)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                  <path d="M 250 240 H 470" stroke="rgba(0,229,255,0.38)" strokeWidth="2" fill="none" />
                  <path d="M 250 240 V 355 H 470" stroke="rgba(255,138,34,0.24)" strokeWidth="2" fill="none" strokeDasharray="8 8" />
                  <circle cx="70" cy="240" r="22" fill="rgba(0,229,255,0.12)" stroke="rgba(0,229,255,0.45)" />
                  <circle cx="470" cy="125" r="14" fill="rgba(0,229,255,0.16)" />
                  <circle cx="470" cy="240" r="14" fill="rgba(0,229,255,0.16)" />
                  <circle cx="470" cy="355" r="14" fill="rgba(255,138,34,0.15)" />
                </svg>
              </div>
              <CardHeader className="relative p-8">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                    <PlugZap className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-white">BRIK64 MCP Server</p>
                    <p className="text-xs text-white/45">Agent-readable tool contract</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative px-8 pb-8">
                <div className="rounded-2xl border border-white/10 bg-black/35 p-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40">Endpoint</p>
                  <code className="mt-3 block truncate font-mono text-sm text-white/82">{endpoint}</code>
                </div>
                <div className="mt-6 grid gap-3">
                  {tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <div key={tool.title} className="rounded-2xl border border-white/8 bg-white/[0.045] p-4">
                        <div className="flex items-center gap-3 text-sm font-semibold text-white">
                          <Icon className="h-4 w-4 text-[color:var(--accent)]" />
                          {tool.title}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-white/55">{tool.body}</p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
