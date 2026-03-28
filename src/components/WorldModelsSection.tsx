"use client";

import { useState } from "react";
import { PhiC } from "@/components/PhiC";
import {
  Cpu,
  ShieldCheck,
  ArrowUpDown,
  BadgeCheck,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentType, SVGProps } from "react";
import type { ReactNode } from "react";

interface CardData {
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  description: ReactNode;
  href: string;
}

const cards: CardData[] = [
  {
    title: "Compile",
    icon: Cpu,
    description: "Write PCD once, emit verified binaries to any target. One blueprint, every language.",
    href: "/foundations",
  },
  {
    title: "Verify",
    icon: ShieldCheck,
    description: "Mathematical proof in Coq — not just tests. Certainty, not confidence intervals.",
    href: "/foundations",
  },
  {
    title: "Lift",
    icon: ArrowUpDown,
    description: "Import existing code from any mainstream language into PCD. No manual rewriting required.",
    href: "/foundations",
  },
  {
    title: "Certify",
    icon: BadgeCheck,
    description: (
      <>
        <PhiC /> = 1 means zero uncertainty — every operation closed, every path verified.
      </>
    ),
    href: "/foundations",
  },
];

interface MonomerFamily {
  name: string;
  range: string;
  desc: string;
  monomers: { mc: string; name: string; desc: string }[];
}

const coreFamilies: MonomerFamily[] = [
  { name: "Arithmetic", range: "MC 00–07", desc: "The foundation of all computation", monomers: [
    { mc: "00", name: "ADD8", desc: "Add two u8 values with wrapping" },
    { mc: "01", name: "SUB8", desc: "Subtract with wrapping underflow" },
    { mc: "02", name: "MUL8", desc: "Multiply with wrapping overflow" },
    { mc: "03", name: "DIV8", desc: "Integer division (quotient, remainder)" },
    { mc: "04", name: "INC", desc: "Increment by 1, wraps 255→0" },
    { mc: "05", name: "DEC", desc: "Decrement by 1, wraps 0→255" },
    { mc: "06", name: "MOD8", desc: "Modulo operation" },
    { mc: "07", name: "NEG8", desc: "Negate (two's complement)" },
  ]},
  { name: "Logic", range: "MC 08–15", desc: "The language of digital circuits", monomers: [
    { mc: "08", name: "AND8", desc: "Bitwise AND" },
    { mc: "09", name: "OR8", desc: "Bitwise OR" },
    { mc: "10", name: "XOR8", desc: "Bitwise XOR — self-inverse" },
    { mc: "11", name: "NOT8", desc: "Bitwise NOT — flip all bits" },
    { mc: "12", name: "SHL", desc: "Shift left by N bits" },
    { mc: "13", name: "SHR", desc: "Shift right by N bits" },
    { mc: "14", name: "ROL", desc: "Rotate left by N bits" },
    { mc: "15", name: "ROR", desc: "Rotate right by N bits" },
  ]},
  { name: "Memory", range: "MC 16–23", desc: "Managing the circuit's internal state", monomers: [
    { mc: "16", name: "LOAD", desc: "Load value from address" },
    { mc: "17", name: "STORE", desc: "Store value to address" },
    { mc: "18", name: "PUSH", desc: "Push onto stack" },
    { mc: "19", name: "POP", desc: "Pop from stack" },
    { mc: "20", name: "PEEK", desc: "Read top without popping" },
    { mc: "21", name: "SWAP", desc: "Swap top two values" },
    { mc: "22", name: "DUP", desc: "Duplicate stack top" },
    { mc: "23", name: "DROP", desc: "Discard stack top" },
  ]},
  { name: "Control", range: "MC 24–31", desc: "Directing the flow", monomers: [
    { mc: "24", name: "IF", desc: "Conditional branch" },
    { mc: "25", name: "LOOP", desc: "Bounded loop with counter" },
    { mc: "26", name: "CALL", desc: "Call function" },
    { mc: "27", name: "RET", desc: "Return from function" },
    { mc: "28", name: "JMP", desc: "Unconditional jump" },
    { mc: "29", name: "HALT", desc: "Stop execution" },
    { mc: "30", name: "NOP", desc: "No operation" },
    { mc: "31", name: "WAIT", desc: "Wait for condition" },
  ]},
  { name: "I/O", range: "MC 32–39", desc: "Interface to the outside world", monomers: [
    { mc: "32", name: "READ", desc: "Read from input stream" },
    { mc: "33", name: "WRITE", desc: "Write to output stream" },
    { mc: "34", name: "PRINT", desc: "Print to stdout" },
    { mc: "35", name: "INPUT", desc: "Read from stdin" },
    { mc: "36", name: "OPEN", desc: "Open file handle" },
    { mc: "37", name: "CLOSE", desc: "Close file handle" },
    { mc: "38", name: "SEEK", desc: "Seek in file" },
    { mc: "39", name: "FLUSH", desc: "Flush output buffer" },
  ]},
  { name: "String", range: "MC 40–47", desc: "Text processing with verified boundaries", monomers: [
    { mc: "40", name: "CONCAT", desc: "Concatenate two strings" },
    { mc: "41", name: "SPLIT", desc: "Split by delimiter" },
    { mc: "42", name: "SUBSTR", desc: "Extract substring" },
    { mc: "43", name: "LEN", desc: "Get string length" },
    { mc: "44", name: "UPPER", desc: "Convert to uppercase" },
    { mc: "45", name: "LOWER", desc: "Convert to lowercase" },
    { mc: "46", name: "TRIM", desc: "Remove whitespace" },
    { mc: "47", name: "MATCH", desc: "Pattern match" },
  ]},
  { name: "Crypto", range: "MC 48–55", desc: "Security built into the foundation", monomers: [
    { mc: "48", name: "HASH", desc: "SHA-256 hash" },
    { mc: "49", name: "ENCRYPT", desc: "Encrypt with key" },
    { mc: "50", name: "DECRYPT", desc: "Decrypt with key" },
    { mc: "51", name: "SIGN", desc: "Digital signature" },
    { mc: "52", name: "VERIFY", desc: "Verify signature" },
    { mc: "53", name: "DIGEST", desc: "Message digest" },
    { mc: "54", name: "KEY", desc: "Key derivation" },
    { mc: "55", name: "RNG", desc: "Random number generator" },
  ]},
  { name: "System", range: "MC 56–63", desc: "Awareness of the host", monomers: [
    { mc: "56", name: "TIME", desc: "Current timestamp" },
    { mc: "57", name: "CPU", desc: "CPU info/usage" },
    { mc: "58", name: "MEM", desc: "Memory info" },
    { mc: "59", name: "ENV", desc: "Environment variable" },
    { mc: "60", name: "EXIT", desc: "Exit process" },
    { mc: "61", name: "PID", desc: "Process ID" },
    { mc: "62", name: "LOG", desc: "Log message" },
    { mc: "63", name: "ASSERT", desc: "Assert condition" },
  ]},
];

const extendedFamilies: MonomerFamily[] = [
  { name: "Float64", range: "MC 64–71", desc: "IEEE 754 decimal math", monomers: [
    { mc: "64", name: "FADD", desc: "Float addition" },
    { mc: "65", name: "FSUB", desc: "Float subtraction" },
    { mc: "66", name: "FMUL", desc: "Float multiplication" },
    { mc: "67", name: "FDIV", desc: "Float division" },
    { mc: "68", name: "FABS", desc: "Absolute value" },
    { mc: "69", name: "FNEG", desc: "Negate float" },
    { mc: "70", name: "FSQRT", desc: "Square root" },
    { mc: "71", name: "FMOD", desc: "Float modulo" },
  ]},
  { name: "Math", range: "MC 72–79", desc: "Scientific computation", monomers: [
    { mc: "72", name: "SIN", desc: "Sine" }, { mc: "73", name: "COS", desc: "Cosine" },
    { mc: "74", name: "TAN", desc: "Tangent" }, { mc: "75", name: "EXP", desc: "Exponential" },
    { mc: "76", name: "LN", desc: "Natural log" }, { mc: "77", name: "LOG2", desc: "Base-2 log" },
    { mc: "78", name: "POW", desc: "Power" }, { mc: "79", name: "CEIL", desc: "Ceiling" },
  ]},
  { name: "Network", range: "MC 80–87", desc: "TCP, HTTP, DNS", monomers: [
    { mc: "80", name: "CONN", desc: "Open connection" }, { mc: "81", name: "SEND", desc: "Send data" },
    { mc: "82", name: "RECV", desc: "Receive data" }, { mc: "83", name: "CLOSE", desc: "Close connection" },
    { mc: "84", name: "BIND", desc: "Bind to port" }, { mc: "85", name: "LISTEN", desc: "Listen" },
    { mc: "86", name: "ACCEPT", desc: "Accept connection" }, { mc: "87", name: "POLL", desc: "Poll events" },
  ]},
  { name: "Graphics", range: "MC 88–95", desc: "Visual output", monomers: [
    { mc: "88", name: "CREATE", desc: "Create resource" }, { mc: "89", name: "PIXEL", desc: "Set pixel" },
    { mc: "90", name: "READ", desc: "Read resource" }, { mc: "91", name: "CLEAR", desc: "Clear buffer" },
    { mc: "92", name: "BLIT", desc: "Block transfer" }, { mc: "93", name: "LINE", desc: "Draw line" },
    { mc: "94", name: "RECT", desc: "Draw rectangle" }, { mc: "95", name: "DIMS", desc: "Get dimensions" },
  ]},
  { name: "Audio", range: "MC 96–103", desc: "Sound processing", monomers: [
    { mc: "96", name: "CREATE", desc: "Create buffer" }, { mc: "97", name: "WRITE", desc: "Write audio" },
    { mc: "98", name: "READ", desc: "Read audio" }, { mc: "99", name: "MIX", desc: "Mix streams" },
    { mc: "100", name: "GAIN", desc: "Adjust volume" }, { mc: "101", name: "LEN", desc: "Get length" },
    { mc: "102", name: "RATE", desc: "Sample rate" }, { mc: "103", name: "CHANS", desc: "Channel count" },
  ]},
  { name: "Filesystem", range: "MC 104–111", desc: "Persistent storage", monomers: [
    { mc: "104", name: "STAT", desc: "File status" }, { mc: "105", name: "MKDIR", desc: "Create dir" },
    { mc: "106", name: "RMDIR", desc: "Remove dir" }, { mc: "107", name: "LIST", desc: "List dir" },
    { mc: "108", name: "COPY", desc: "Copy file" }, { mc: "109", name: "RENAME", desc: "Rename" },
    { mc: "110", name: "REMOVE", desc: "Delete file" }, { mc: "111", name: "EXISTS", desc: "Check existence" },
  ]},
  { name: "Concurrency", range: "MC 112–119", desc: "Parallel execution", monomers: [
    { mc: "112", name: "SPAWN", desc: "Spawn thread" }, { mc: "113", name: "JOIN", desc: "Join thread" },
    { mc: "114", name: "MUTEX", desc: "Create mutex" }, { mc: "115", name: "LOCK", desc: "Acquire lock" },
    { mc: "116", name: "UNLOCK", desc: "Release lock" }, { mc: "117", name: "CHAN", desc: "Create channel" },
    { mc: "118", name: "SEND", desc: "Send to channel" }, { mc: "119", name: "RECV", desc: "Receive" },
  ]},
  { name: "Interop", range: "MC 120–127", desc: "Connecting systems", monomers: [
    { mc: "120", name: "FFI", desc: "Foreign function" }, { mc: "121", name: "LOAD", desc: "Load library" },
    { mc: "122", name: "FREE", desc: "Free memory" }, { mc: "123", name: "JSON_E", desc: "JSON encode" },
    { mc: "124", name: "JSON_D", desc: "JSON decode" }, { mc: "125", name: "WASM_L", desc: "Load WASM" },
    { mc: "126", name: "WASM_C", desc: "Call WASM" }, { mc: "127", name: "WASM_F", desc: "Free WASM" },
  ]},
];

function FamilyAccordion({ families, tier }: { families: MonomerFamily[]; tier: "core" | "extended" }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isCore = tier === "core";

  return (
    <div className="divide-y divide-border/50">
      {families.map((family, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={family.name}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full cursor-pointer items-center gap-4 px-4 py-3.5 text-left transition-colors hover:bg-muted/30"
            >
              <span className={cn(
                "font-mono text-[10px] tabular-nums",
                isCore ? "text-teal/50" : "text-amber-500/50"
              )}>
                {family.range}
              </span>
              <span className="flex-1 text-sm font-medium text-foreground">
                {family.name}
              </span>
              <span className="hidden text-xs text-muted-foreground sm:inline">
                {family.desc}
              </span>
              <ChevronDown className={cn(
                "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
                isOpen && "rotate-180"
              )} />
            </button>

            <div className={cn(
              "grid transition-[grid-template-rows] duration-200 ease-in-out",
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            )}>
              <div className="overflow-hidden">
                <div className="grid grid-cols-2 gap-px bg-border/30 px-4 pb-4 sm:grid-cols-4">
                  {family.monomers.map((m) => (
                    <div
                      key={m.mc}
                      className={cn(
                        "bg-background rounded px-3 py-2",
                        isCore ? "hover:bg-teal/[0.03]" : "hover:bg-amber-500/[0.03]"
                      )}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={cn(
                          "font-mono text-[10px]",
                          isCore ? "text-teal/60" : "text-amber-500/60"
                        )}>
                          {m.mc}
                        </span>
                        <span className="font-mono text-xs font-semibold text-foreground">
                          {m.name}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function WorldModelsSection() {
  return (
    <section className="border-border border-t px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-10 text-xs font-medium tracking-[2px] text-muted-foreground md:mb-14">
          [04] · THE FOUNDATION
        </p>

        <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          {/* Left */}
          <div>
            <h2 className="max-w-4xl text-2xl font-normal leading-[40px] tracking-[-0.9px] text-balance md:text-4xl">
              One compiler. Every guarantee.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Write once in PCD, compile to any target, and ship with
              mathematical proof that your code is correct. No runtime
              surprises — every operation verified before it runs.
            </p>
          </div>

          {/* Right — 4 Cards */}
          <div className="border-border/70 mt-16 overflow-hidden border">
            <div className="grid grid-cols-2">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    className={cn(
                      "group flex flex-col items-start p-5",
                      (index === 0 || index === 1) && "border-b border-border/70",
                      (index === 0 || index === 2) && "border-r border-border/70"
                    )}
                  >
                    <div className="flex w-full items-start justify-between">
                      <div className="border-border/80 bg-secondary inline-flex h-8 w-8 items-center justify-center rounded-md border group-hover:border-teal/30 group-hover:bg-teal/10">
                        <Icon className="h-4 w-4 text-foreground group-hover:text-teal" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-foreground">
                      {card.title}
                    </p>
                    <p className="mt-1.5 max-w-[220px] text-[11px] leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom — The Full Monomer Spectrum as Accordions */}
        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[2px] text-muted-foreground">
            The complete monomer spectrum
          </p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            128 operations across 16 families. Click any family to explore its monomers.
          </p>

          {/* Core — Certified */}
          <div className="mt-8 overflow-hidden border border-teal/20">
            <div className="flex items-center gap-3 border-b border-teal/10 bg-teal/[0.03] px-4 py-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-teal">
                Core · Certified
              </span>
              <span className="text-xs text-muted-foreground">
                <PhiC /> = 1 — Proven in Coq
              </span>
            </div>
            <FamilyAccordion families={coreFamilies} tier="core" />
          </div>

          {/* Extended — Contract */}
          <div className="mt-3 overflow-hidden border border-border/50">
            <div className="flex items-center gap-3 border-b border-border/30 bg-muted/20 px-4 py-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                Extended · Contract
              </span>
              <span className="text-xs text-muted-foreground">
                Bounds-checked, 0 panic
              </span>
            </div>
            <FamilyAccordion families={extendedFamilies} tier="extended" />
          </div>
        </div>
      </div>
    </section>
  );
}
