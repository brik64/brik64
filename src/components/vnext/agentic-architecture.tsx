"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Copy, TerminalSquare, BrainCircuit, ShieldCheck, Box } from "lucide-react";
import { JavaScriptIcon, PythonIcon, RustIcon } from "@/components/icons/lang-icons";

const skills = [
  { name: "PCD Authoring", icon: <FileCode2 className="h-4 w-4" /> },
  { name: "Circuit Certification", icon: <ShieldCheck className="h-4 w-4" /> },
  { name: "Logic Extraction", icon: <BrainCircuit className="h-4 w-4" /> },
  { name: "Monomer Algebra", icon: <Box className="h-4 w-4" /> },
];

const sdks = [
  { id: "rust", name: "Rust", icon: <RustIcon className="h-4 w-4" />, command: "cargo add brik64-core", code: "use brik64_core::Circuit;\n\nlet circuit = Circuit::new().with_bounds();" },
  { id: "ts", name: "Node/TS", icon: <JavaScriptIcon className="h-4 w-4" />, command: "npm install @brik64/sdk", code: "import { Circuit } from '@brik64/sdk';\n\nconst circuit = new Circuit().withBounds();" },
  { id: "python", name: "Python", icon: <PythonIcon className="h-4 w-4" />, command: "pip install brik64", code: "from brik64 import Circuit\n\ncircuit = Circuit().with_bounds()" },
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
    <div className="mt-16 grid gap-12 lg:grid-cols-2">
      {/* Left: Skills MCP */}
      <div className="rounded-[24px] border border-white/10 bg-[#0A0D12] p-8 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
            <TerminalSquare className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Agent Skills (MCP)</h3>
            <p className="text-sm text-white/50">Formal circuit skills for agents</p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-white/70">
          Add MCP-compatible skills so agents work with PCD circuits instead of loose text.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/10">
              <span className="text-[color:var(--accent)]">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>

      {/* Right: SDKs */}
      <div className="rounded-[24px] border border-white/10 bg-[#0A0D12] p-8 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4ade80]/10 text-[#4ade80]">
            <FileCode2 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Native SDKs</h3>
            <p className="text-sm text-white/50">Boundaries in host languages</p>
          </div>
        </div>
        <p className="mt-6 text-sm leading-6 text-white/70">
          Write structured software in your preferred language before compilation.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {[
            { name: "Rust", src: "/brands/rust.svg" },
            { name: "JavaScript", src: "/brands/javascript.svg" },
            { name: "TypeScript", src: "/brands/typescript.svg" },
            { name: "Python", src: "/brands/python.svg" },
          ].map((logo) => (
            <span
              key={logo.name}
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
            </span>
          ))}
        </div>
        
        <div className="mt-8">
          <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
            {sdks.map((sdk) => (
              <button
                key={sdk.id}
                onClick={() => setActiveSdk(sdk)}
                className={cn(
                  "inline-flex w-28 items-center justify-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                  activeSdk.id === sdk.id 
                    ? "bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/20" 
                    : "text-white/40 hover:text-white"
                )}
              >
                {sdk.icon}
                {sdk.name}
              </button>
            ))}
          </div>
          
          <div className="mt-6 rounded-lg bg-black/40 border border-white/5 p-4 relative group">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs uppercase tracking-widest text-[#4ade80]/70 font-mono">Install</span>
              <button 
                onClick={copyToClipboard}
                className="text-white/40 hover:text-white transition-colors"
                title="Copy command"
              >
                {copied ? <span className="text-[10px] text-[#4ade80] uppercase tracking-widest">Copied</span> : <Copy className="h-3.5 w-3.5" />}
              </button>
            </div>
            <code className="text-sm font-mono text-white/90">
              {activeSdk.command}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}
