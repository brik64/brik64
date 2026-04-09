import { ExternalLink } from "lucide-react";

function ExtIcon() {
  return <ExternalLink className="ml-1 inline h-3 w-3 text-[#322F2D]/30" />;
}

export function Footer() {
  return (
    <footer className="border-t border-[#EEEEEE] bg-white px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/brand/brik64-logo-primary-horizontal-black.svg"
              alt="BRIK64"
              className="h-8 w-auto"
            />
            <p className="mt-1 text-xs text-[#322F2D]/40">Digital Circuitality</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30">
              Product
            </h4>
            <ul className="space-y-2">
              <li><a href="/cli" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">CLI</a></li>
              <li><a href="/platform" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Platform</a></li>
              <li><a href="/registry" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Registry</a></li>
              <li><a href="/sdks" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">SDKs</a></li>
              <li><a href="/lifter" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Lifter</a></li>
              <li><a href="/transpiler" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Transpiler</a></li>
              <li><a href="/pricing" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Pricing</a></li>
              <li><a href="/download" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Download</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Documentation <ExtIcon /></a></li>
              <li><a href="/blog" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Blog</a></li>
              <li><a href="/news" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">News</a></li>
              <li><a href="/faq" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">FAQ</a></li>
              <li><a href="/features" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Features</a></li>
              <li>
                <a href="/shop" className="inline-flex items-center gap-2 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">
                  <span>Shop</span>
                  <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-600">
                    Coming soon
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Theory */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30">
              Theory
            </h4>
            <ul className="space-y-2">
              <li><a href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Digital Circuitality <ExtIcon /></a></li>
              <li><a href="/foundations" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Foundations</a></li>
              <li><a href="/bpu" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">BPU Unit</a></li>
              <li><a href="/pcd" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">PCD Format</a></li>
              <li><a href="/compliance" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Compliance Evidence</a></li>
              <li><a href="/blockchain" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Blockchain</a></li>
              <li><a href="/safety-critical" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Safety-Critical</a></li>
              <li><a href="/ai" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">AI-Verified Code</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30">
              Company
            </h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">About</a></li>
              <li><a href="/investors" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Investors</a></li>
              <li><a href="/enterprise" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Enterprise</a></li>
              <li><a href="/ai-agents" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">AI Agents</a></li>
              <li><a href="/contact" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Contact</a></li>
              <li><a href="/legal" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Legal</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30">
              Community
            </h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/brik64" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"><img src="/brands/github.svg" alt="" className="h-4 w-4 opacity-50" />GitHub <ExtIcon /></a></li>
              <li><a href="https://x.com/brik64" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"><img src="/brands/x-twitter.svg" alt="" className="h-4 w-4 opacity-50" />X / Twitter <ExtIcon /></a></li>
              <li><a href="https://medium.com/@brik64" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"><img src="/brands/medium.svg" alt="" className="h-4 w-4 opacity-50" />Medium <ExtIcon /></a></li>
              <li><a href="https://discord.gg/brik64" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]"><img src="/brands/discord.svg" alt="" className="h-4 w-4 opacity-50" />Discord <ExtIcon /></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center gap-3 border-t border-[#EEEEEE] pt-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
            <a
              href="https://status.brik64.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-emerald-100 bg-emerald-50 px-2.5 py-1.5 transition-colors hover:bg-emerald-100"
            >
              <span className="text-emerald-500">&#9679;</span>
              <span className="text-sm font-medium text-emerald-700">All systems normal</span>
            </a>
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
            <p className="text-center text-sm text-[#322F2D]/20 md:text-left">
              &copy; 2026 BRIK64. All rights reserved.
            </p>
            <div className="flex items-center gap-3">
              <a href="/legal" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Privacy</a>
              <span className="text-sm text-[#322F2D]/20">&middot;</span>
              <a href="/legal" className="text-sm text-[#322F2D]/50 transition-colors hover:text-[#1A1817]">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
