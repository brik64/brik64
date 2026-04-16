"use client";

import { useState } from "react";
import { Copy, Check, FileCode } from "lucide-react";

const CODE_SAMPLES = {
  PCD: {
    lang: "pcd",
    title: "BRIK64 PCD Blueprint",
    code: `monomer calculate_fee {
    family: ARITHMETIC
    signature: i64, i64 -> i64
    
    logic:
        // [amount, rate]
        MUL;            // Multiply inputs
        PUSH 100;       // [result, 100]
        DIV;            // [result/100]
        RET;            // Return value
        
    surface: Φc = 1.0 (Strictly Bounded)
}`
  },
  Rust: {
    lang: "rust",
    title: "Rust Target",
    code: `pub fn calculate_fee(amount: i64, rate: i64) -> i64 {
    // Generated from PCD calculate_fee
    let result = amount * rate;
    let fee = result / 100;
    
    // Φc = 1.0: Domain is strictly i64.
    // No side effects or dynamic allocation.
    fee
}`
  },
  JavaScript: {
    lang: "javascript",
    title: "ECMAScript Target",
    code: `/**
 * @pcd_id calculate_fee
 * @surface Φc = 1.0
 */
function calculateFee(amount, rate) {
    const result = BigInt(amount) * BigInt(rate);
    const fee = result / 100n;
    
    return Number(fee);
}`
  },
  Python: {
    lang: "python",
    title: "Python Target",
    code: `def calculate_fee(amount: int, rate: int) -> int:
    """
    Certified PCD circuit: calculate_fee
    Mathematically bounded signature.
    """
    result = amount * rate
    fee = result // 100
    
    return fee`
  }
};

export function MultiLanguageCodeArtifact() {
  const [activeTab, setActiveTab] = useState<keyof typeof CODE_SAMPLES>("PCD");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE_SAMPLES[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full flex flex-col rounded-[2rem] border border-white/10 bg-[#060a0f] overflow-hidden shadow-[0_32px_120px_rgba(0,0,0,0.6)] backdrop-blur-md">
      {/* Tab Header - More Explicit */}
      <div className={`flex items-end justify-between px-6 pt-4 border-b border-white/5 transition-colors duration-500 ${activeTab === 'PCD' ? 'bg-[#003845]/50' : 'bg-white/[0.02]'}`}>
        <div className="flex gap-1">
          {(Object.keys(CODE_SAMPLES) as Array<keyof typeof CODE_SAMPLES>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest transition-all rounded-t-xl relative -mb-px z-10 ${
                activeTab === tab 
                  ? tab === 'PCD' 
                    ? "bg-[#003845] text-white border-x border-t border-white/20" 
                    : "bg-[#03060a] text-[color:var(--accent)] border-x border-t border-white/10"
                  : "text-white/30 hover:text-white/60 hover:bg-white/5"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        <button 
          onClick={handleCopy}
          className="mb-3 p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          {copied ? <Check className="h-4 w-4 text-[color:var(--accent)]" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>

      {/* Code Area - Interactive Backdrop */}
      <div className={`relative p-6 h-[420px] overflow-auto custom-scrollbar transition-all duration-500 ${
        activeTab === "PCD" 
          ? "bg-[#003845] blueprint-grid" 
          : "bg-[#03060a]"
      }`}>
        {/* Architectural Glow for Blueprint */}
        {activeTab === "PCD" && (
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />
        )}

        <div className="relative flex items-center gap-3 mb-6">
          <FileCode className={`h-4 w-4 transition-colors ${activeTab === 'PCD' ? 'text-white/40' : 'text-white/20'}`} />
          <span className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors ${activeTab === 'PCD' ? 'text-white/60' : 'text-white/30'}`}>
            {CODE_SAMPLES[activeTab].title}
          </span>
        </div>
        
        <pre className={`relative font-mono text-sm leading-relaxed transition-colors duration-500 ${activeTab === 'PCD' ? 'text-white' : 'text-white/80'}`}>
          <code dangerouslySetInnerHTML={{ __html: highlightCode(CODE_SAMPLES[activeTab].code, CODE_SAMPLES[activeTab].lang, activeTab === 'PCD') }} />
        </pre>
      </div>

      {/* Footer / Status */}
      <div className={`px-6 py-4 border-t border-white/5 flex items-center justify-between transition-colors duration-500 ${activeTab === 'PCD' ? 'bg-[#003845]/80' : 'bg-white/[0.01]'}`}>
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className={`text-[9px] uppercase tracking-wider ${activeTab === 'PCD' ? 'text-white/40' : 'text-white/30'}`}>Complexity</span>
            <span className={`text-xs font-bold ${activeTab === 'PCD' ? 'text-white' : 'text-white/80'}`}>O(1)</span>
          </div>
          <div className="flex flex-col">
            <span className={`text-[9px] uppercase tracking-wider ${activeTab === 'PCD' ? 'text-white/40' : 'text-white/30'}`}>Closure</span>
            <span className={`text-xs font-bold ${activeTab === 'PCD' ? 'text-white' : 'text-[color:var(--accent)]'}`}>Φc = 1.0</span>
          </div>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.25em] font-bold italic transition-colors ${activeTab === 'PCD' ? 'text-white/40' : 'text-white/20'}`}>
          Mathematically Strict
        </div>
      </div>
    </div>
  );
}

function highlightCode(code: string, lang: string, isBlueprint: boolean = false) {
  // Use a more robust regex-based approach with a single pass
  const regex = /(\/\/.*$|\/\*[\s\S]*?\*\/|"""[\s\S]*?"""|#.*$)|("[^"]*")|\b(monomer|family|signature|logic|surface|PUSH|MUL|DIV|RET|pub|fn|let|return|function|const|def|if|else|loop)\b|(\b\d+v?|0x[0-9a-fA-F]+\b)|(Φc = 1\.0)|([-+*/%<>=!&|^]+|->)/gm;

  return code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(regex, (match, comment, string, keyword, number, phic, operator) => {
      if (comment) return `<span class="${isBlueprint ? 'text-white/30' : 'text-white/20'}">${match}</span>`;
      if (string) return `<span class="${isBlueprint ? 'text-white font-medium' : 'text-[#FF8A22]'}">${match}</span>`;
      if (keyword) return `<span class="${isBlueprint ? 'text-white font-bold' : 'text-[#ED5E68]'}">${match}</span>`;
      if (number) return `<span class="${isBlueprint ? 'text-[#00e5ff] underline-offset-4' : 'text-[#2BB6AC]'}">${match}</span>`;
      if (phic) return `<span class="${isBlueprint ? 'text-[#00e5ff] font-bold' : 'text-[#2BB6AC] font-bold'}">${match}</span>`;
      if (operator) return `<span class="${isBlueprint ? 'text-white/40' : 'text-white/40'}">${match}</span>`;
      return match;
    });
}
