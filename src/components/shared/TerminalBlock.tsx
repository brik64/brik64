"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface TerminalLine {
  text: string;
  style: "command" | "output" | "success" | "error" | "muted" | "blank";
}

interface TerminalBlockProps {
  title?: string;
  lines: TerminalLine[];
}

const styleMap: Record<TerminalLine["style"], string> = {
  command: "text-[#e6e6e6]",
  output: "text-[#a0a0a0]",
  success: "text-[#00b894]",
  error: "text-[#ff6b6b]",
  muted: "text-[#555]",
  blank: "",
};

export function TerminalBlock({ title, lines }: TerminalBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyText = lines
    .filter((l) => l.style === "command")
    .map((l) => l.text)
    .join("\n");

  function handleCopy() {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-[#0a0e14]">
      {/* Title bar */}
      {title && (
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-xs text-[#555]">{title}</span>
          </div>
          {copyText && (
            <button
              onClick={handleCopy}
              className="rounded p-1 text-[#555] transition-colors hover:text-[#999]"
              aria-label="Copy commands"
            >
              {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>
      )}

      {/* Lines */}
      <div className="p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, i) => (
          <div key={i} className={styleMap[line.style]}>
            {line.style === "blank" ? "\u00A0" : line.text}
          </div>
        ))}
      </div>
    </div>
  );
}
