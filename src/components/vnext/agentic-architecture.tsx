"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Box, BrainCircuit, Copy, Link2, PlugZap, ShieldCheck, TerminalSquare } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { JavaScriptIcon, PythonIcon } from "@/components/icons/lang-icons";

const skills = [
  { name: "PCD Authoring", icon: <FileCode2 className="h-4 w-4" /> },
  { name: "Circuit Certification", icon: <ShieldCheck className="h-4 w-4" /> },
  { name: "Logic Extraction", icon: <BrainCircuit className="h-4 w-4" /> },
  { name: "Monomer Algebra", icon: <Box className="h-4 w-4" /> },
];

const mcpEndpoint = "https://brik64.com/.well-known/brik64-agent";

const sdks = [
  { id: "rust", name: "Rust", icon: <Image src="/brands/rust.svg" alt="" width={16} height={16} className="h-4 w-4 object-contain" unoptimized />, command: "cargo add brik64-core", code: "use brik64_core::Circuit;\n\nlet circuit = Circuit::new().with_bounds();", tone: "#CE422B" },
  { id: "ts", name: "Node/TS", icon: <JavaScriptIcon className="h-4 w-4" />, command: "npm install @brik64/sdk", code: "import { Circuit } from '@brik64/sdk';\n\nconst circuit = new Circuit().withBounds();", tone: "#F7DF1E" },
  { id: "python", name: "Python", icon: <PythonIcon className="h-4 w-4" />, command: "pip install brik64", code: "from brik64 import Circuit\n\ncircuit = Circuit().with_bounds()", tone: "#3776AB" },
];

// Re-using FileCode2 from lucide, importing it directly here
import { FileCode2 } from "lucide-react";

export function AgenticArchitecture() {
  const [activeSdk, setActiveSdk] = useState(sdks[0]);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(activeSdk.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <Card className="relative min-h-[520px] overflow-hidden rounded-[28px] border-white/10 bg-[#0A0D12] p-0 shadow-xl">
        <CardHeader className="relative flex-row items-center gap-4 p-10 pb-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
            <TerminalSquare className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">BRIK64 MCP Server</h3>
            <p className="text-sm text-white/50">Bounded tools for AI agents</p>
          </div>
        </CardHeader>
        <CardContent className="relative p-10 pt-0">
        <p className="mt-8 max-w-xl text-base leading-7 text-white/70">
          Connect an agent to the BRIK64 MCP endpoint so it can request bounded PCD operations, proof checks, and monomer algebra tools.
        </p>
        <div className="mt-8 rounded-2xl border border-[color:var(--accent-soft)]/30 bg-[color:var(--accent-soft)]/8 p-4">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[color:var(--accent)]">
            <PlugZap className="h-4 w-4" />
            MCP endpoint
          </div>
          <div className="mt-3 flex min-w-0 items-center gap-3 rounded-xl border border-white/10 bg-black/35 px-4 py-3">
            <Link2 className="h-4 w-4 shrink-0 text-white/45" />
            <code className="truncate font-mono text-sm text-white/82">{mcpEndpoint}</code>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.name} className="flex min-h-20 items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.055] px-5 py-4 text-sm font-medium text-white/84 transition-colors hover:bg-white/10">
              <span className="text-[color:var(--accent)]">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
        </CardContent>
      </Card>

      {/* Right: SDKs */}
      <Card className="min-h-[520px] rounded-[28px] border-white/10 bg-[#0A0D12] p-0 shadow-xl">
        <CardHeader className="flex-row items-center gap-4 p-10 pb-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4ade80]/10 text-[#4ade80]">
            <FileCode2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Native SDKs</h3>
            <p className="text-sm text-white/50">Boundaries in host languages</p>
          </div>
        </CardHeader>
        <CardContent className="p-10 pt-0">
        <p className="mt-8 text-base leading-7 text-white/70">
          Write structured software in your preferred language before compilation.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {[
            { name: "Rust", src: "/brands/rust.svg" },
            { name: "JavaScript", src: "/brands/javascript.svg" },
            { name: "TypeScript", src: "/brands/typescript.svg" },
            { name: "Python", src: "/brands/python.svg" },
          ].map((logo) => (
            <Badge
              key={logo.name}
              variant="outline"
              className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-[#0f1a28] px-2.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75"
            >
              <Image
                src={logo.src}
                alt=""
                width={14}
                height={14}
                className="h-3.5 w-3.5 object-contain"
                unoptimized
              />
              {logo.name}
            </Badge>
          ))}
        </div>
        
        <Tabs
          value={activeSdk.id}
          onValueChange={(value) => setActiveSdk(sdks.find((sdk) => sdk.id === value) ?? sdks[0])}
          className="mt-8"
        >
          <TabsList className="flex h-auto flex-wrap justify-start gap-2 rounded-none border-b border-white/10 bg-transparent p-0 pb-4">
            {sdks.map((sdk) => (
              <TabsTrigger
                key={sdk.id}
                value={sdk.id}
                className={cn(
                  "inline-flex w-28 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                  activeSdk.id === sdk.id 
                    ? "border bg-white/[0.04]" 
                    : "text-white/40 hover:text-white"
                )}
                style={activeSdk.id === sdk.id ? {
                  borderColor: `${sdk.tone}66`,
                  color: sdk.tone,
                  boxShadow: `0 0 24px ${sdk.tone}22`,
                } : undefined}
              >
                {sdk.icon}
                {sdk.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeSdk.id} className="mt-6">
          <Card className="relative rounded-lg border-white/5 bg-black/40 p-4 group">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-widest text-[#4ade80]/70 font-mono">Install</span>
              <Button
                type="button"
                variant="ghost"
                size="icon-xs"
                onClick={copyToClipboard}
                aria-label={`Copy ${activeSdk.name} install command`}
                className="text-white/40 hover:text-white"
                title="Copy command"
              >
                {copied ? <span className="text-[10px] text-[#4ade80] uppercase tracking-widest">Copied</span> : <Copy className="h-3.5 w-3.5" />}
              </Button>
            </div>
            <code className="text-sm font-mono text-white/90">
              {activeSdk.command}
            </code>
          </Card>
          </TabsContent>
        </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
