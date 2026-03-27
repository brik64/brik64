export function Footer() {
  return (
    <footer className="bg-white border-t border-[#EEEEEE] px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="text-xl font-bold">
              BRIK<span className="text-[#00b8d4]">64</span>
            </div>
            <p className="text-xs text-[#322F2D]/40 mt-1">Digital Circuitality</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30 mb-4">
              Product
            </h4>
            <ul className="space-y-2">
              <li><a href="/cli" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">CLI</a></li>
              <li><a href="/platform" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Platform</a></li>
              <li><a href="/sdks" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">SDKs</a></li>
              <li><a href="/pricing" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30 mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              <li><a href="https://docs.brik64.dev" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Documentation</a></li>
              <li><a href="/blog" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Blog</a></li>
              <li><a href="/news" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">News</a></li>
              <li><a href="/demos" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Demos</a></li>
              <li><a href="/design-system" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Design System</a></li>
            </ul>
          </div>

          {/* Theory */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30 mb-4">
              Theory
            </h4>
            <ul className="space-y-2">
              <li><a href="https://digitalcircuitality.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Digital Circuitality</a></li>
              <li><a href="/foundations" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Foundations</a></li>
              <li><a href="/bpu" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">BPU Unit</a></li>
              <li><a href="/about" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">About</a></li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#322F2D]/30 mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/brik64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">GitHub</a></li>
              <li><a href="https://x.com/brik64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">X / Twitter</a></li>
              <li><a href="https://medium.com/@brik64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Medium</a></li>
              <li><a href="https://discord.gg/brik64" target="_blank" rel="noopener noreferrer" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-[#EEEEEE] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold">BRIK</span>
            <span className="text-sm font-bold text-[#00b8d4]">64</span>
          </div>
          <p className="text-sm text-[#322F2D]/20">
            &copy; 2026 BRIK-64. All rights reserved.
          </p>
          <div className="flex gap-3">
            <a href="/privacy" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Privacy</a>
            <span className="text-sm text-[#322F2D]/20">&middot;</span>
            <a href="/terms" className="text-sm text-[#322F2D]/50 hover:text-[#1A1817] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
