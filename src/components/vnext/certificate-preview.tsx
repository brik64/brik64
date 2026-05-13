import { cn } from "@/lib/utils";
import { BrikCertificationBadge } from "@/components/brik";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const coreCertJSON = `{
  "program": "brik64-core/payment_fee",
  "pcd": "calculate_fee.core.pcd",
  "pcd_hash": "sha256:0f41c8e2b971a8e6...",
  "certificate_hash": "sha256:43c0e8a6bf1a6e9c...",
  "certification": {
    "tier": "CORE",
    "phi_c": 1.0,
    "monomers": ["MC00", "MC04", "MC08", "MC16"],
    "requirements": ["BOUNDED_I64", "NO_CONTRACT_IO"],
    "closure": "PASS"
  },
  "outputs": {
    "rust": { "hash": "sha256:7c9e...", "status": "PASS" },
    "typescript": { "hash": "sha256:1a2b...", "status": "PASS" }
  }
}`;

const contractCertJSON = `{
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

export function CertificatePreview({ className, mode = "core" }: { className?: string; mode?: "core" | "contract" }) {
  const isCore = mode === "core";
  const certJSON = isCore ? coreCertJSON : contractCertJSON;

  return (
    <Card className={cn("overflow-hidden rounded-[20px] border-white/10 bg-[#0A0D12] p-0 shadow-xl", className)}>
      <CardHeader className="flex-row items-center justify-between gap-4 border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase">brikc-cert-bundle.json</span>
        </div>
        <div className="flex shrink-0 items-center gap-1.5">
          <BrikCertificationBadge
            status={isCore ? "CORE_CERTIFIED" : "CONTRACT_CERTIFIED"}
            certificateHash="cert:43c0e8a6"
            visibility={isCore ? "PUBLIC" : "PRIVATE"}
            className="w-44"
          />
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto p-4 text-sm sm:p-6">
        <pre className="font-mono leading-relaxed text-white/70">
          <code dangerouslySetInnerHTML={{ __html: syntaxHighlight(certJSON) }} />
        </pre>
      </CardContent>
    </Card>
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
