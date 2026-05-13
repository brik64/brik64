import { GitPullRequest, LockKeyhole, MousePointer2, Network, ShieldCheck } from "lucide-react";
import { BrikCertificationBadge, BrikMonomerCompositionBar, BrikProofBadge, BrikTopologyNodeCard } from "@/components/brik";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { PageHeaderVNext, SupportingSurface } from "@/components/vnext/primitives";

function TopologyNode({
  title,
  subtitle,
  className,
  tone = "core",
}: {
  title: string;
  subtitle: string;
  className: string;
  tone?: "core" | "contract" | "pcd";
}) {
  const styles = {
    core: "border-[color:var(--accent-soft)]/50 bg-[#06242a] text-[color:var(--accent)]",
    contract: "border-[#ff8a22]/35 bg-[#24170c] text-[#ff8a22]",
    pcd: "border-white/15 bg-[#0c121b] text-white",
  };

  return (
    <BrikTopologyNodeCard
      title={title}
      subtitle={subtitle}
      status={tone === "contract" ? "contract" : tone === "pcd" ? "composite" : "core"}
      coreUses={tone === "contract" ? 4 : 18}
      extendedUses={tone === "contract" ? 9 : tone === "pcd" ? 4 : 2}
      selected={tone === "pcd"}
      className={`absolute w-44 max-w-none gap-2 p-2.5 shadow-[0_14px_36px_rgba(0,0,0,0.28)] [&_[data-brik-composition-bar]]:gap-1.5 [&_p]:text-[11px] ${styles[tone]} ${className}`}
    />
  );
}

function TopologyGraphPreview() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-[24px] border border-white/10 bg-[#080d13]">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 900 420" aria-hidden="true">
        <path d="M 170 90 H 360 V 190 H 462" stroke="rgba(43,182,172,0.45)" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 720 90 H 540 V 190 H 462" stroke="rgba(255,138,34,0.38)" strokeWidth="2" fill="none" strokeLinejoin="round" />
        <path d="M 462 226 V 300 H 295" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" strokeDasharray="7 7" />
        <path d="M 462 226 V 300 H 640" stroke="rgba(255,255,255,0.18)" strokeWidth="2" fill="none" strokeDasharray="7 7" />
      </svg>
      <TopologyNode title="core_payment_polymer" subtitle="8 PCDs · core lane" className="left-[9%] top-[12%]" />
      <TopologyNode title="contract_io_polymer" subtitle="5 PCDs · extended lane" className="right-[9%] top-[12%]" tone="contract" />
      <TopologyNode title="checkout_app.system" subtitle="APP · selected system view" className="left-1/2 top-[38%] -translate-x-1/2" tone="pcd" />
      <TopologyNode title="fee_core.polymer" subtitle="core payment polymer" className="left-[18%] bottom-[17%]" tone="core" />
      <TopologyNode title="delivery_contract.polymer" subtitle="extended contract polymer" className="right-[15%] bottom-[17%]" tone="contract" />
      <div className="absolute left-4 top-4 inline-grid overflow-hidden rounded-lg border border-white/10 bg-[#0b121a]/95">
        {[Network, MousePointer2, LockKeyhole].map((Icon, index) => (
          <button key={index} type="button" aria-label={`Topology tool ${index + 1}`} className="grid h-10 w-10 place-items-center border-b border-white/10 text-white/55 last:border-b-0">
            <Icon className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}

function PolymerReviewPreview() {
  const monomers = [
    ["MC00", "core"], ["MC04", "core"], ["MC08", "core"], ["MC12", "core"], ["MC16", "core"], ["MC21", "core"],
    ["MC24", "core"], ["MC31", "core"], ["MC36", "core"], ["MC44", "core"], ["MC52", "core"], ["MC63", "core"],
    ["MX64", "contract"], ["MX68", "contract"], ["MX72", "contract"], ["MX80", "contract"], ["MX88", "contract"], ["MX96", "contract"],
  ] as const;

  return (
    <Card className="rounded-[24px] border-white/10 bg-[#080d13] p-0">
      <CardHeader className="flex-row flex-wrap items-start justify-between gap-4 border-b border-white/10 p-5">
        <div>
          <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[color:var(--accent)]">Polymer inspection</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">payment_fee_policy.polymer</h3>
          <p className="mt-2 text-sm text-white/50">PCD analysis with monomer segment bars and review state.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <BrikCertificationBadge status="CORE_CERTIFIED" visibility="PUBLIC" className="w-44" />
          <BrikCertificationBadge status="CONTRACT_CERTIFIED" visibility="PRIVATE" className="w-48" />
        </div>
      </CardHeader>
      <CardContent className="grid gap-5 p-5 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
            <BrikMonomerCompositionBar
              coreUses={18}
              extendedUses={12}
              totalUses={30}
              maxSegments={42}
              size="compact"
              showCounts
              ariaLabel="payment_fee_policy polymer composition with eighteen core and twelve contract monomer groups"
              className="items-center"
            />
            <div className="mt-3 grid grid-cols-6 gap-1.5 text-[8px] font-black uppercase tracking-0">
              {monomers.map(([label, type]) => (
                <span
                  key={label}
                  className={`flex h-6 min-w-0 items-center justify-center rounded-md border px-0.5 text-center font-mono leading-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] ${type === "core" ? "border-[color:var(--accent-soft)]/70 bg-[color:var(--accent-soft)]/24 text-[color:var(--accent)] ring-1 ring-[color:var(--accent-soft)]/20" : "border-[#ff8a22]/55 bg-[#ff8a22]/18 text-[#ff8a22] ring-1 ring-[#ff8a22]/16"}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {[
              ["Φc", "1.0"],
              ["PCD hash", ""],
              ["Cert hash", ""],
            ].map(([label, value]) => (
              <div key={label} className="grid min-h-20 place-items-center rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">{label}</p>
                  {value ? <p className="mt-2 truncate font-mono text-sm text-white">{value}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
          <p className="text-sm font-semibold text-white">PCD review summary</p>
          <div className="mt-5 space-y-3 text-sm text-white/62">
            {["Core logic stays modeled.", "Contract edges stay visible.", "Hashes preserve auditability."].map((item) => (
              <p key={item} className="flex items-center justify-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function PlatformProofSurfaces() {
  return (
    <SupportingSurface className="border-t border-border bg-[#05080c]">
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-8 lg:px-12">
        <PageHeaderVNext
          eyebrow="Platform visualization"
          title="PCD topology and polymer review."
          description="The platform view decomposes a polymer into PCD nodes and monomer segments so review happens on the structure, not only on emitted code."
        />
        <div className="mt-14 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <TopologyGraphPreview />
          <PolymerReviewPreview />
        </div>
      </div>
    </SupportingSurface>
  );
}

export function PublicVerificationSurface() {
  return (
    <SupportingSurface className="border-t border-border">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
        <PageHeaderVNext
          eyebrow="Public auditability"
          title="PR verification should be inspectable."
          description="A public proof page can show the PR, PCD hash, certificate state, and verification badges without exposing private source content."
        />
        <Card className="overflow-hidden rounded-[26px] border-white/10 bg-[#080d13] p-0 shadow-[0_24px_80px_rgba(0,0,0,0.26)]">
          <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.035] px-4 py-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff8a22]" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--accent)]" />
            </div>
            <div className="flex min-w-0 flex-1 items-center rounded-full border border-white/10 bg-black/30 px-3 py-1.5 font-mono text-[11px] text-white/55">
              https://brik64.com/proofs/brik_proof_public_pcd_valid_01
            </div>
          </div>
          <CardHeader className="flex-row flex-wrap items-center justify-between gap-4 border-b border-white/10 p-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-[color:var(--accent-soft)]/45 bg-[color:var(--accent-soft)]/12 text-[color:var(--accent)]">
                <GitPullRequest className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">PR #1842 · payment_fee_policy</p>
                <p className="text-xs text-white/45">Public verification record</p>
              </div>
            </div>
            <BrikProofBadge artifactType="PCD" status="VALID" visibility="PUBLIC" size="sm" />
          </CardHeader>
          <CardContent className="p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["PCD hash", "pcd:bf1a6e9c"],
              ["Certificate", "CORE_CERTIFIED"],
              ["Integrity", "pass"],
              ["Evidence", "present"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">{label}</p>
                <p className="mt-2 font-mono text-sm text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-[color:var(--accent-soft)]/25 bg-[color:var(--accent-soft)]/8 p-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-[color:var(--accent)]">
              <ShieldCheck className="h-4 w-4" />
              Verifiable without trusting the PR prose
            </div>
            <p className="mt-2 text-sm leading-6 text-white/58">
              The page links the merged change to the reviewed PCD and its certificate metadata. That makes the proof trail auditable by reviewers, maintainers, and agents.
            </p>
          </div>
          </CardContent>
        </Card>
      </div>
    </SupportingSurface>
  );
}
