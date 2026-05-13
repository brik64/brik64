import { Bot, BrainCircuit, Box, FileCode2, ShieldCheck, Workflow } from "lucide-react";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonVNext } from "@/components/vnext/primitives";

export const metadata = {
  title: "AI Agent Skills - BRIK64",
  description:
    "BRIK64 AI agent skills for PCD authoring, proof checks, logic extraction, monomer algebra, and workflow routing.",
};

const skills = [
  {
    title: "PCD authoring",
    body: "Turn a generated or existing function into a canonical review object.",
    icon: FileCode2,
  },
  {
    title: "Proof checks",
    body: "Read certificate state, evidence hashes, and review posture before publishing claims.",
    icon: ShieldCheck,
  },
  {
    title: "Logic extraction",
    body: "Separate bounded logic from framework code, IO edges, and policy constraints.",
    icon: BrainCircuit,
  },
  {
    title: "Monomer algebra",
    body: "Work against atomic operation families instead of unbounded generated text.",
    icon: Box,
  },
  {
    title: "Workflow routing",
    body: "Route tasks toward lift, certify, package, or public verification surfaces.",
    icon: Workflow,
  },
  {
    title: "Agent handoff",
    body: "Return structured evidence that other agents and reviewers can inspect.",
    icon: Bot,
  },
];

export default function AiAgentSkillsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background text-foreground">
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 blueprint-grid opacity-30" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,4,8,0.86),rgba(1,4,8,0.98))]" />
          <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:px-8 lg:px-12">
            <div className="max-w-4xl">
              <Badge variant="outline" className="border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                AI agent skills
              </Badge>
              <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
                Skills for bounded agent work.
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-9 text-muted-foreground">
                BRIK64 skills help agents produce PCDs, inspect proof state, and hand back
                evidence-bearing artifacts instead of only prose or generated code.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ButtonVNext href="/mcp" tone="primary">
                  Connect MCP
                </ButtonVNext>
                <ButtonVNext href="/for-agents" tone="secondary">
                  Agent path
                </ButtonVNext>
              </div>
            </div>

            <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <Card key={skill.title} className="min-h-56 rounded-[28px] border-white/10 bg-[#071018]/88 p-0 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
                    <CardContent className="p-7">
                      <div className="flex items-start justify-between gap-4">
                        <span className="grid h-12 w-12 place-items-center rounded-xl border border-[color:var(--accent-soft)] bg-[color:var(--accent-soft)]/10 text-[color:var(--accent)]">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="font-mono text-xs text-white/30">0{index + 1}</span>
                      </div>
                      <h2 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-white">{skill.title}</h2>
                      <p className="mt-4 text-sm leading-7 text-white/55">{skill.body}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
