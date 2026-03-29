"use client";

import { useState, useRef } from "react";
import { Copy, Check } from "lucide-react";

interface CopyableCodeProps {
  children: string;
  title?: string;
}

export function CopyableCode({ children, title }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  function handleCopy() {
    const text = preRef.current?.textContent || children;
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          {title && (
            <span className="ml-2 text-xs text-white/30 font-mono">{title}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="rounded p-1 text-white/30 transition-colors hover:text-white/70 cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
      <pre
        ref={preRef}
        className="overflow-x-auto p-4 text-sm leading-relaxed text-emerald-400 font-mono"
      >
        <code>{children}</code>
      </pre>
    </div>
  );
}
