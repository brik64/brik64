function CodeBlock({ children }: { children: string }) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-white/10 bg-[#0a0e14]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-emerald-400 font-mono">
        <code>{children}</code>
      </pre>
    </div>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 text-2xl font-bold text-[#1A1817]">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-xl font-semibold text-[#1A1817]">
      {children}
    </h3>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-base leading-relaxed text-[#322F2D]/80">
      {children}
    </p>
  );
}

export const newsContent: Record<string, () => React.ReactNode> = {
  launch: () => (
    <>
      <H2>Digital Circuitality Goes Public</H2>
      <P>
        Today marks the public debut of <strong>Digital Circuitality</strong> —
        the formal discipline of building software that works like hardware.
        Everything is live: the website, the documentation, the SDKs, and the
        compiler.
      </P>
      <H3>What&apos;s Been Released</H3>
      <P>
        <strong>digitalcircuitality.com</strong> — The home of the paradigm.{" "}
        <strong>docs.brik64.dev</strong> — Full documentation powered by
        Mintlify, 25+ pages. <strong>brikc CLI v4.0.0-beta.2</strong> — The
        compiler, lifter, and certification engine.
      </P>
      <CodeBlock>{`curl -fsSL https://install.brik64.dev | sh`}</CodeBlock>
      <H3>3 SDKs</H3>
      <CodeBlock>{`npm install @brik64/core      # JavaScript/TypeScript
pip install brik64             # Python
cargo add brik64-core          # Rust`}</CodeBlock>
      <H3>By the Numbers</H3>
      <P>
        128 monomers (64 core + 64 extended). 207 Coq proof files. Mathematical
        proof, not &quot;tests pass&quot; verification. Digital Circuitality is a formally
        verified, immutable artifact. The architecture is fixed. The proofs are
        complete.
      </P>
    </>
  ),

  platform: () => (
    <>
      <H2>BRIK-64 Platform Enters Development</H2>
      <P>
        The BRIK-64 platform is now in active development — a visual circuit
        laboratory at <strong>brik64.com</strong>.
      </P>
      <H3>Features</H3>
      <P>
        <strong>Visual circuit laboratory:</strong> Monomers snap together like
        circuit components. Programs are schematics. The visual representation{" "}
        <em>is</em> the program.
      </P>
      <P>
        <strong>Public registry</strong> with certification badges at{" "}
        <strong>registry.brik64.dev</strong>. Badges computed by TCE on every
        publish.
      </P>
      <P>
        <strong>Certification Dashboard:</strong> Visualizes all 128 monomers as
        a periodic table.
      </P>
      <H3>GitHub Integration</H3>
      <P>
        Auto-lift on push. PR certification comments. API and MCP server for
        programmatic access and AI agent integration. Targeting launch later this
        year.
      </P>
    </>
  ),

  documentation: () => (
    <>
      <H2>Complete Documentation Live</H2>
      <P>
        Full BRIK-64 documentation is now live at{" "}
        <strong>docs.brik64.dev</strong>, powered by Mintlify. 33+ pages
        covering the entire ecosystem.
      </P>
      <H3>Sections</H3>
      <P>
        <strong>Getting Started (5 pages)</strong> — Installation, first
        circuit, CLI quickstart, SDK setup.
      </P>
      <P>
        <strong>PCD Language (9 pages)</strong> — Complete language reference.
        Monomers, polymers, EVA algebra, 128 monomer catalog.
      </P>
      <P>
        <strong>CLI Reference (2 pages)</strong> — Every brikc subcommand.
      </P>
      <P>
        <strong>Lifter Guide (3 pages)</strong> — Supported source languages,
        lift-certify-emit workflow.
      </P>
      <P>
        <strong>API Reference (4 pages)</strong> — REST endpoints,
        authentication, rate limits.
      </P>
      <P>
        <strong>MCP Integration (2 pages)</strong> — Setup for Claude Code, GPT,
        Gemini.
      </P>
      <P>
        <strong>SDKs (3 pages)</strong> — JavaScript, Python, Rust.
      </P>
      <P>
        <strong>Theory (5 pages)</strong> — Digital Circuitality axioms, EVA
        algebra laws, TCE mechanics, Kish-Ferry distinction.
      </P>
    </>
  ),

  skills: () => (
    <>
      <H2>Claude Code Skills Published</H2>
      <P>
        Five Claude Code skills for BRIK-64 are now publicly available.
      </P>
      <H3>The 5 Skills</H3>
      <P>
        <strong>brik64-pcd-system</strong> — Core skill. PCD language syntax, all
        128 monomers, EVA algebra, brikc CLI.
      </P>
      <P>
        <strong>brik64-javascript</strong> — Full npm SDK integration
        (@brik64/core).
      </P>
      <P>
        <strong>brik64-python</strong> — PyPI SDK integration (brik64).
      </P>
      <P>
        <strong>brik64-rust</strong> — crates.io SDK integration (brik64-core).
      </P>
      <P>
        <strong>brik64-digital-circuitality</strong> — Methodology skill.
        Principles of Digital Circuitality.
      </P>
      <H3>Install</H3>
      <CodeBlock>{`git clone https://github.com/brik64/brik64-tools-skills.git
cp -r brik64-tools-skills/skills/* ~/.claude/skills/`}</CodeBlock>
      <P>
        AI-native by design: PCD was designed for AI-generated code. Finite
        operation space, deterministic semantics, automatic certification.
      </P>
    </>
  ),

  "open-source": () => (
    <>
      <H2>14 Repositories Live on GitHub</H2>
      <P>
        The <strong>brik64</strong> organization on GitHub now hosts 14 public
        repositories.
      </P>
      <H3>Core</H3>
      <P>
        <strong>brik64/brik64</strong> — Public-facing repository. README,
        architecture overview, getting started guide.
      </P>
      <P>
        <strong>brik64-admin/brik64-prod</strong> — Production monorepo: 14 Rust
        crates (hand parser, AST, planner, CPF generator, 5 backends, Lifter,
        TCE engine, brikc CLI).
      </P>
      <H3>SDKs</H3>
      <P>
        brik64/brik64-lib-js — @brik64/core on npm.{" "}
        brik64/brik64-lib-python — brik64 on PyPI.{" "}
        brik64/brik64-lib-rust — brik64-core on crates.io.
      </P>
      <H3>Platform, Theory & Community</H3>
      <P>
        brik64/brik64-platform — Next.js dashboard.{" "}
        brik64/brik64-docs-site — Mintlify documentation source.{" "}
        brik64/brik64-theory-proofs — 207 Coq proof files.{" "}
        brik64/brik64-tools-skills — 5 Claude Code skills.{" "}
        brik64/brik64-community-awesome — Curated resources.
      </P>
    </>
  ),

  community: () => (
    <>
      <H2>Join the Digital Circuitality Community</H2>
      <P>
        Community hub:{" "}
        <a
          href="https://github.com/brik64/brik64/discussions"
          className="text-[#00b8d4] underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Discussions
        </a>
      </P>
      <H3>Contributing Areas</H3>
      <P>
        Documentation at brik64-docs-site. Examples at
        brik64-community-examples. Awesome list at brik64-community-awesome. SDK
        feedback on respective repos.
      </P>
      <H3>Roadmap</H3>
      <P>
        Registry launch at registry.brik64.dev. VS Code extension for PCD
        files. FPGA prototype of BPU.
      </P>
      <H3>Blog</H3>
      <P>
        25 articles covering introductory concepts to deep dives. From DNA
        analogies to adversarial corpus testing.
      </P>
      <P>
        <strong>Contact:</strong> hello@brik64.com
      </P>
    </>
  ),
};
