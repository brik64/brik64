import { cn } from "@/lib/utils";

const certJSON = `{
  "program": "brik64-core/payment",
  "hash": "sha256:8b1a9953c4611296a827abf8c47...",
  "certification": {
    "tier": "CONTRACT",
    "coverage": {
      "core": 1.0,
      "contract": 0.98
    },
    "requirements": ["MX_64_HTTP", "MX_88_DB"],
    "tests_generated": 142
  },
  "outputs": {
    "rust": { 
      "hash": "sha256:7c9e...",
      "status": "PASS" 
    },
    "typescript": { 
      "hash": "sha256:1a2b...",
      "status": "PASS" 
    }
  }
}`;

export function CertificatePreview({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-[20px] border border-white/10 bg-[#0A0D12] shadow-xl", className)}>
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase">brikc-cert-bundle.json</span>
        </div>
        <div className="flex h-5 items-center rounded bg-[#4ade80]/10 px-2 text-[10px] font-bold tracking-widest text-[#4ade80] uppercase">
          Verified
        </div>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto text-sm">
        <pre className="font-mono leading-relaxed text-white/70">
          <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(certJSON) }} />
        </pre>
      </div>
    </div>
  );
}

// Very basic custom syntax highlighting to look authentic
function syntaxHighlight(json: string) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    let cls = 'text-[#2BB6AC]'; // String value
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'text-[#ED5E68]'; // Key
      } else {
        cls = 'text-[#FF8A22]'; // String
      }
    } else if (/true|false/.test(match)) {
      cls = 'text-[#4ade80]'; // Boolean
    } else if (/null/.test(match)) {
      cls = 'text-white/40'; // Null
    } else {
        cls = 'text-[#2BB6AC]'; // Number
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}
