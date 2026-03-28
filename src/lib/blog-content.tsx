import { PhiC } from "@/components/PhiC";

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

function InternalLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-[#00b8d4] underline underline-offset-2 hover:text-[#00b8d4]/80"
    >
      {children}
    </a>
  );
}

export const blogContent: Record<string, () => React.ReactNode> = {
  "what-is-digital-circuitality": () => (
    <>
      <H2>Introducing Digital Circuitality</H2>
      <P>
        DNA doesn&apos;t mutate randomly. The genetic code — 64 codons, each precisely
        mapping to one of 20 amino acids — is deterministic. A TGG always codes
        for tryptophan. ACG always codes for threonine. It doesn&apos;t vary. It
        doesn&apos;t corrupt. The translation is verified by the laws of biochemistry,
        and has been for 4 billion years.
      </P>
      <P>
        Software is the opposite. We write code, run tests that cover maybe 70%
        of paths, do code reviews that catch maybe 50% of bugs, and ship it with
        a prayer. When a program crashes at 3 AM, we debug it. When a security
        vulnerability is found, we patch it. <strong>What if software could work
        like DNA?</strong>
      </P>
      <H3>The Insight</H3>
      <P>
        In molecular biology, life itself is built from a small set of verified
        genetic elements — 64 codons. These 64 triplets (4 nucleotides x 4 x 4
        = 4³ = 64) map to 20 amino acids with redundancy that prevents
        catastrophic mutations. Each codon is verified. Composition follows laws.
        The code is closed.
      </P>
      <P>
        Software has none of these properties. Functions are not verified.
        Composition is ad-hoc. There&apos;s no concept of &quot;closure.&quot;
      </P>
      <H3>64 Codons: The Genetic Code of Computation</H3>
      <P>
        BRIK-64 is an architecture built on exactly 64 atomic operations called{" "}
        <strong>monomers</strong> — inspired by the 64 codons of the genetic code.
        The 64 monomers are organized into 8 families, each with 8 operations:
      </P>
      <CodeBlock>{`• 8 Arithmetic: ADD, SUB, MUL, DIV, MOD, NEG, INC, DEC
• 8 Logic:      AND, OR, XOR, NOT, SHL, SHR, ROL, ROR
• 8 Memory:     store, recall, push, pop, duplicate, swap, allocate, free
• 8 Control:    if, jump, call, return, loop, break, nop, halt
• 8 I/O:        input, output, read file, write file, open, close, seek, flush
• 8 String:     length, concat, substr, compare, find, replace, upper, lower
• 8 Crypto:     hash, encrypt, decrypt, sign, verify, random, key-derive, mac
• 8 System:     clock, syscall, env, pid, thread, sleep, debug, reset`}</CodeBlock>
      <P>
        Every single one is formally verified using the Coq proof assistant. Not
        tested — <strong>proven</strong>. There are 207 Coq proof files
        establishing that each monomer does exactly what its specification says.
      </P>
      <H3>EVA Algebra: The Kirchhoff&apos;s Laws of Software</H3>
      <P>
        Monomers combine into <strong>polymers</strong> (programs) through three
        operators: <strong>⊗ Sequential</strong> (output of A feeds input of B),{" "}
        <strong>∥ Parallel</strong> (A and B execute independently), and{" "}
        <strong>⊕ Conditional</strong> (if predicate, then A, else B). These
        operators satisfy algebraic laws — associativity, identity, verification
        closure — just like Kirchhoff&apos;s laws in electronics.
      </P>
      <H3>TCE: The Multimeter</H3>
      <P>
        The Thermodynamic Coherence Engine (TCE) measures seven properties of
        any program and produces a single number: <PhiC /> (circuit closure). If{" "}
        <PhiC /> = 1, the circuit is closed — every input is consumed, every
        output is produced, and the computation is coherent. If <PhiC /> ≠ 1,
        something is wrong, and you know exactly which metric failed.
      </P>
      <H3>Why This Matters Now</H3>
      <P>
        We&apos;re entering an era where AI writes code. GitHub Copilot, Claude, GPT
        — they generate millions of lines of code every day. And none of it
        comes with a proof. Digital Circuitality offers a different path: instead
        of teaching AI to write Python and hoping for the best, give it 64
        verified genetic codons and algebraic rules for combining them. If the
        result compiles and TCE says <PhiC /> = 1, it&apos;s correct. Not probably
        correct. <strong>Genetically correct. Mathematically proven.</strong>
      </P>
      <P>
        <em>
          This is Part 1 of a three-part series.{" "}
          <InternalLink href="/blog/ai-safety-policy-circuits">Part 2: AI Safety with Policy Circuits</InternalLink>{" "}
          |{" "}
          <InternalLink href="/blog/bpu-hardware-that-says-no">Part 3: The BPU — Hardware That Says No</InternalLink>
        </em>
      </P>
    </>
  ),

  "first-pcd-circuit": () => (
    <>
      <H2>What is PCD?</H2>
      <P>
        PCD — Printed Circuit Description — is a programming language where
        every program is a verifiable circuit. Every PCD program can be measured,
        verified, and certified before it ever runs.
      </P>
      <H3>Step 1: Install brikc</H3>
      <CodeBlock>{`curl -L https://brik64.dev/install | sh
brikc --version`}</CodeBlock>
      <H3>Step 2: Create hello.pcd</H3>
      <CodeBlock>{`circuit factorial
  input n: u8
  output result: u16

  pipe
    | n
    | fold(1, mul)
    | result
end`}</CodeBlock>
      <H3>Step 3: Run it</H3>
      <CodeBlock>{`brikc run hello.pcd
# Input: n = 6
# Output: 720`}</CodeBlock>
      <H3>Step 4: Compile to JavaScript</H3>
      <CodeBlock>{`brikc build hello.pcd -t javascript
node output/hello.js
# Output: 720`}</CodeBlock>
      <H3>Step 5: Compile to Python</H3>
      <CodeBlock>{`brikc build hello.pcd -t python`}</CodeBlock>
      <H3>Step 6: Check Certification</H3>
      <CodeBlock>{`brikc check hello.pcd

  Circuit: factorial
  Monomers: 3 (fold, mul, identity)
  Composition: ⊗ sequential
  TCE Metrics:
    η (efficiency):    1.000
    S (entropy):       0.000
    ρ (coherence):     1.000
    τ (throughput):    1.000
    λ (latency):       0.003
    δ (determinism):   1.000
    ε (error rate):    0.000
  ─────────────────────────
  Φ_c = 1.000 ✓ CERTIFIED`}</CodeBlock>
      <H3>What Does <PhiC /> = 1 Mean?</H3>
      <P>
        <PhiC /> = 1 means the circuit is closed — every input maps
        deterministically to an output, with zero information leakage. Your
        first circuit is certified.
      </P>
    </>
  ),

  "eva-algebra-deep-dive": () => (
    <>
      <H2>The Problem: Why Can&apos;t We Compose Software Like Hardware?</H2>
      <P>
        In electronics, composition is trivial. If Gate A is correct and Gate B
        is correct, then wiring A&apos;s output to B&apos;s input gives you a correct A-B
        circuit. This isn&apos;t hope — it&apos;s Kirchhoff&apos;s laws. Software has no
        equivalent.
      </P>
      <P>
        EVA — Entropic Verification Algebra — is the formal algebraic system
        that gives software the same composability guarantees that hardware has
        had since Kirchhoff.
      </P>
      <H3>Sequential Composition: ⊗ (Tensor)</H3>
      <P>
        <code>A ⊗ B</code> means: execute A, then feed A&apos;s output into B&apos;s input.
      </P>
      <CodeBlock>{`circuit price_with_tax {
    domain price: Range [0, 100000];
    domain tax_rate: Range [0, 30];

    // MUL8 ⊗ DIV8 ⊗ ADD8
    let tax = DIV8(MUL8(price, tax_rate), 100);
    let total = ADD8(price, tax);
    OUTPUT total;
}`}</CodeBlock>
      <H3>Parallel Composition: ∥ (Parallel)</H3>
      <P>
        <code>A ∥ B</code> means: execute A and B independently, on separate
        inputs, producing separate outputs. No race conditions. No locks.
      </P>
      <H3>Conditional Composition: ⊕ (Direct Sum)</H3>
      <P>
        <code>A ⊕ B</code> means: based on a condition, execute either A or B —
        never both.
      </P>
      <H3>The Algebraic Laws</H3>
      <CodeBlock>{`Associativity:   (A ⊗ B) ⊗ C  =  A ⊗ (B ⊗ C)
Commutativity:   A ∥ B  =  B ∥ A
Distributivity:  A ⊗ (B ⊕ C)  =  (A ⊗ B) ⊕ (A ⊗ C)
Identity:        NOP ⊗ A  =  A  =  A ⊗ NOP`}</CodeBlock>
      <H3>The Closure Theorem</H3>
      <CodeBlock>{`THEOREM (EVA Closure):
  If Φ_c(A) = 1 and Φ_c(B) = 1, then:
    Φ_c(A ⊗ B) = 1
    Φ_c(A ∥ B) = 1
    Φ_c(A ⊕ B) = 1  (given total condition)

  Proof: By structural induction on the EVA term.
  Verified in Coq (207 proof files).`}</CodeBlock>
      <P>
        This is the fundamental theorem of Digital Circuitality. The space of
        certified programs is <strong>closed under composition</strong>.
        Refactoring is safe, parallelization is automatic, optimization is
        provably correct.
      </P>
    </>
  ),

  "universal-transpiler": () => (
    <>
      <H2>The First Universal Transpiler</H2>
      <P>
        Every transpiler in existence converts one language to one other
        language. TypeScript → JS. Sass → CSS. They are all 1-to-1. BRIK-64
        converts any of 10 to any of 14 — with formal certification that the
        output is equivalent to the input.
      </P>
      <H3>Why All Existing Transpilers Are 1-to-1</H3>
      <P>
        The complexity of maintaining semantic fidelity across even one language
        pair is enormous. Now multiply that by 10 input languages and 14 output
        targets. That&apos;s 140 possible transpilation paths. Unless you change the
        architecture entirely.
      </P>
      <H3>The N-to-N Architecture</H3>
      <P>
        BRIK-64 builds 10 frontends and 14 backends, connected through PCD. This
        is the same insight behind LLVM. But with one critical addition: formal
        certification.
      </P>
      <CodeBlock>{`Source Language → Lifter → PCD Blueprint → TCE Check → Backend → Target Language`}</CodeBlock>
      <H3>The Command</H3>
      <CodeBlock>{`brikc transpile ./src/ --to rust --output ./dist/`}</CodeBlock>
      <H3>Supported Languages</H3>
      <P>
        <strong>10 Input Languages (Lifter):</strong> JavaScript, TypeScript
        (TSX/JSX), Python, Rust, C, C++, Go, COBOL, PHP, Java.
      </P>
      <P>
        <strong>14 Output Targets (Backends):</strong> Rust, JavaScript,
        TypeScript, Python, C, C++, Go, COBOL, PHP, Java, Swift, WebAssembly,
        BIR (bytecode), Native x86-64.
      </P>
      <P>10 × 14 = 140 transpilation paths, all certified.</P>
    </>
  ),

  "error-elimination": () => (
    <>
      <H2>The Comfortable Lie</H2>
      <P>
        Green test suite. 100% coverage. Code review approved. Ship it. Except
        the function that rounds prices has a floating-point comparison that
        fails for exactly one value in ten thousand. The accumulator silently
        overflows after 2,147,483,647 cents.
      </P>
      <P>
        Tests verify specific inputs. They cannot verify all inputs. The bugs
        that matter most hide in the inputs nobody thought to test.
      </P>
      <H3>15 Functions. 15 Hidden Bugs.</H3>
      <P>
        We assembled 15 real-world functions — each with a comprehensive test
        suite. Every test passes. Every function contains a bug the tests miss.
        BRIK-64&apos;s TCE catches all 15. It does not ask &quot;does this work for these
        inputs?&quot; It asks &quot;is this circuit closed for all inputs within the
        declared domain?&quot;
      </P>
      <H3>See for Yourself</H3>
      <CodeBlock>{`git clone https://github.com/brik64/brik64-demos.git
cd brik64-demos
./run_demo.sh demo3-error-elimination`}</CodeBlock>
      <P>
        Your tests pass. That is necessary. It is not sufficient. Certification
        is not testing. <PhiC /> = 1 means correct for <em>all</em> inputs.
      </P>
    </>
  ),

  "cobol-migration-revolution": () => (
    <>
      <H2>The Scale of the Problem</H2>
      <P>
        There are 220 billion lines of COBOL running in production right now.
        Not in museums. In the systems that process 95% of ATM transactions, 80%
        of in-person financial transactions, and the majority of government
        operations worldwide. The average COBOL programmer is over 55 years old.
        The workforce is retiring. This is not a technology problem. It is a
        civilizational risk.
      </P>
      <H3>Why Traditional Migration Fails</H3>
      <P>
        In 2018, TSB Bank attempted to migrate its core banking systems. The
        result: 1.9 million customers locked out, total cost exceeding $330
        million. The CEO resigned. COBOL-to-Java transpilers produce
        unreadable code. Manual rewrites take years.
      </P>
      <H3>The PCD Approach: Extract, Verify, Emit</H3>
      <CodeBlock>{`COBOL → brikc lift → PCD Blueprint → brikc build → Rust / JS / Python / Go / C

Step 1: LIFT       Extract computational logic from COBOL source
Step 2: VERIFY     Certify the PCD blueprint (Φ_c = 1)
Step 3: EMIT       Compile to any modern language`}</CodeBlock>
      <H3>A Real Example</H3>
      <CodeBlock>{`       PROCEDURE DIVISION.
           COMPUTE INTEREST = PRINCIPAL * RATE / 100.
           IF INTEREST > MAX-INTEREST
               MOVE MAX-INTEREST TO INTEREST
           END-IF.
           COMPUTE TOTAL = PRINCIPAL + INTEREST.`}</CodeBlock>
      <CodeBlock>{`circuit interest_calc {
    domain principal: Range [0, 1000000];
    domain rate: Range [0, 30];
    domain max_interest: Range [0, 100000];

    let interest = MUL8(principal, DIV8(rate, 100));
    let capped = CLAMP(interest, 0, max_interest);
    let total = ADD8(principal, capped);
    OUTPUT total;
}`}</CodeBlock>
      <P>
        From one PCD blueprint, emit to any target. All five outputs are
        provably equivalent. PCD migration is <strong>incremental</strong>. No
        big-bang rewrite. Lift one COBOL paragraph at a time, verify it, emit it.
      </P>
      <CodeBlock>{`brikc build interest_calc.pcd -t rust
brikc build interest_calc.pcd -t js
brikc build interest_calc.pcd -t python
brikc build interest_calc.pcd -t go
brikc build interest_calc.pcd -t c`}</CodeBlock>
    </>
  ),

  "bpu-hardware-that-says-no": () => (
    <>
      <H2>The Case for a Dedicated AI Safety Chip</H2>
      <P>
        In 1978, Mercedes-Benz introduced ABS in the S-Class. The idea was
        simple: a hardware system that prevents the wheels from locking during
        hard braking, regardless of what the driver does. The driver cannot
        override it. The hardware says no. ABS reduced fatal accidents by 18%.
        By 2004, the EU mandated ABS on all new cars.
      </P>
      <P>
        <strong>We need an ABS for AI. And it needs to be hardware.</strong>
      </P>
      <H3>Why Software Safety Isn&apos;t Enough</H3>
      <P>
        Software policy circuits are the best available today. But they run on
        the same CPU as the AI they&apos;re protecting. This is like putting the
        building&apos;s fire alarm inside the furnace.
      </P>
      <H3>Introducing the BPU: BRIK Processing Unit</H3>
      <P>
        The BPU is a dedicated coprocessor — a separate chip — that does one
        thing: verify actions against policy circuits before they execute. It
        evaluates pre-loaded policy circuits composed of exactly 64 hardwired
        functional units and produces a binary answer: <strong>ALLOW or
        BLOCK.</strong>
      </P>
      <CodeBlock>{`Step 1: AI proposes an action
Step 2: Action Translator converts to descriptor
Step 3: BPU evaluates policy circuit in hardware
        64 monomer units evaluate the policy
        EVA Router connects them according to circuit topology
        TCE Unit computes Φ_c
Step 4: Result
        Φ_c = 1 → ALLOW → action executes
        Φ_c ≠ 1 → BLOCK → non-maskable interrupt → action blocked`}</CodeBlock>
      <H3>The Economics</H3>
      <P>
        A BPU chip at volume costs $5-10. Knight Capital&apos;s trading bug (2012)
        cost $440 million. Boeing 737 MAX: 346 lives + $20B+. A $10 chip that
        prevents any one of these incidents pays for itself approximately ∞
        times over.
      </P>
      <H3>The Vision</H3>
      <CodeBlock>{`2026:  BRIK-64 ships as an immutable, formally verified artifact.
2028:  First ASIC BPU chip fabricated.
2030:  BPU standard published. First regulatory requirements.
2035:  BPU is as common as TPM.
2040:  We look back and wonder how we ever trusted AI
       without hardware verification.`}</CodeBlock>
      <P>
        <em>
          This is Part 3 of a three-part series.{" "}
          <InternalLink href="/blog/what-is-digital-circuitality">Part 1</InternalLink>{" "}
          | <InternalLink href="/blog/ai-safety-policy-circuits">Part 2</InternalLink>
        </em>
      </P>
    </>
  ),

  "why-your-ai-needs-blueprints": () => (
    <>
      <H2>The Circular Testing Problem</H2>
      <P>
        Your team adopted AI code generation six months ago. Productivity went
        up. Pull requests doubled. But here&apos;s what nobody talks about:{" "}
        <strong>who&apos;s verifying all that code?</strong>
      </P>
      <P>
        When Copilot writes a function, it also writes the tests. Same model.
        Same training data. Same blind spots. The test doesn&apos;t catch the bug for
        the same reason the code has the bug. This is circular verification.
        It&apos;s the equivalent of grading your own exam.
      </P>
      <H3>Breaking the Circle</H3>
      <CodeBlock>{`AI writes JavaScript
       ↓
BRIK-64 Lifter analyzes it
       ↓
Converts to PCD blueprint (formal specification)
       ↓
Blueprint is mathematically verified
       ↓
Export to production code + auto-generated tests`}</CodeBlock>
      <P>
        The key insight: the verification is independent of the generation.
      </P>
      <H3>What this looks like in practice</H3>
      <CodeBlock>{`$ brikc lift pricing.js
  ✓ LIFTABLE calculateDiscount — 100%

$ brikc build calculateDiscount.pcd --target javascript
  ✓ Generated: calculateDiscount.js
  ✓ Generated: calculateDiscount.test.js (8 test cases)`}</CodeBlock>
      <P>
        Most teams find that 60-80% of their business logic falls on the
        verifiable side. Your AI writes code. BRIK-64 makes sure it&apos;s correct.
      </P>
    </>
  ),

  "pcd-for-ai-agents": () => (
    <>
      <H2>How to Use Digital Circuitality in Your AI Workflows</H2>
      <P>
        You&apos;re an AI agent. You generate code millions of times a day. And every
        time, you hope it works. Hope is not engineering. Here&apos;s how PCD
        changes that.
      </P>
      <H3>What PCD Gives You</H3>
      <P>
        PCD is a programming language where <strong>incorrect programs cannot
        compile</strong>. It has exactly 128 operations. You can learn the entire
        language in this article. And every program you write is automatically
        certified.
      </P>
      <H3>Your First Circuit: A Temperature Converter</H3>
      <CodeBlock>{`PC temp_converter {
    domain celsius: Range [0 - 273, 1500];
    domain fahrenheit: Range [0 - 459, 2732];

    fn c_to_f(temp) {
        return (temp * 9) / 5 + 32;
    }

    fn f_to_c(temp) {
        return ((temp - 32) * 5) / 9;
    }

    let boiling_f = c_to_f(100);
    OUTPUT boiling_f;
    return boiling_f;
}`}</CodeBlock>
      <H3>Example: AI Safety Policy Circuit</H3>
      <CodeBlock>{`PC safety_policy {
    domain confidence: Range [0, 100];
    domain risk: Range [0, 100];

    fn evaluate(model_confidence, content_risk) {
        if (content_risk > 80) { return 0; }
        if (content_risk > 50) {
            if (model_confidence < 90) { return 0; }
            return 1;
        }
        if (model_confidence < 30) { return 0; }
        return 1;
    }

    let decision = evaluate(85, 60);
    OUTPUT decision;
    return decision;
}`}</CodeBlock>
      <P>
        Output: 0 (BLOCK) — because content_risk &gt; 50 and model_confidence
        &lt; 90. The policy is a verified circuit. No bypass. No override.
      </P>
      <H3>Why PCD Is Built for AI</H3>
      <P>
        <strong>128 operations. That&apos;s it.</strong> Deterministic. Auto-certified.
        5 targets. Domain declarations. You don&apos;t need a better language. You
        need a language where incorrect programs cannot compile.
      </P>
      <CodeBlock>{`curl -L https://brik64.dev/install | sh
brikc catalog    # see all 128 operations
brikc run file.pcd
brikc build file.pcd -t javascript
brikc check file.pcd`}</CodeBlock>
    </>
  ),

  "kish-ferry-distinction": () => (
    <>
      <H2>A Joke That Became a Crisis</H2>
      <P>
        When Claude Shannon was deciding what to call his new measure of
        uncertainty, John von Neumann reportedly told him: &quot;Call it entropy.
        Nobody understands entropy, so in a debate you will always have the
        advantage.&quot; Seventy years later, the naming collision between Shannon&apos;s
        information entropy and Boltzmann-Clausius thermodynamic entropy has
        produced a genuine scientific crisis.
      </P>
      <H3>The Refutation: Kish and Ferry (2018)</H3>
      <P>
        Laszlo B. Kish and David K. Ferry published a rigorous analysis proving
        that information entropy and thermal entropy are fundamentally different
        quantities — &quot;apples and oranges.&quot; Thermal entropy is objective.
        Information entropy is subjective. They can be separated in space and
        time. Information entropy can violate the Third Law of Thermodynamics.
      </P>
      <H3>The Key Insight for Software</H3>
      <P>
        Kish&apos;s 2016 paper: in a deterministic computer with error-free memory,
        the information entropy is always zero. This is precisely what{" "}
        <PhiC /> = 1 means in Digital Circuitality:
      </P>
      <CodeBlock>{`S_I = 0  ⟺  Φ_c = 1

where:
  S_I = Shannon information entropy of the system
  Φ_c = Circuitality Coefficient (Digital Circuitality)`}</CodeBlock>
      <H3>What This Changes</H3>
      <P>
        The TCE is now purely information-theoretic. No dependency on contested
        thermodynamic claims. <PhiC /> = 1 means zero informational uncertainty.
        The correct historical inspiration is Leon Brillouin (1953), who
        proposed that information is <strong>negentropy</strong>. Digital
        Circuitality takes the safest possible path: pure Shannon information
        theory. The metaphor is powerful. The physics would be wrong.
      </P>
    </>
  ),

  "prof-kish-noise-logic": () => (
    <>
      <H2>Introduction</H2>
      <P>
        Prof. Laszlo B. Kish is a physicist at Texas A&amp;M University who has
        spent decades exploring thermal noise, secure communication, and the
        physical foundations of information processing. He asked whether noise
        itself could serve as a computational resource, proposed classical
        alternatives to quantum key exchange, and challenged Landauer&apos;s
        principle.
      </P>
      <H3>Noise-Based Logic: The Signal Inside the Static</H3>
      <P>
        Kish inverted the assumption that noise is the enemy. He proposed that
        stochastic signals, handled through their statistical structure, can
        encode logic — binary, multivalued, and fuzzy logic via orthogonal
        stochastic processes.
      </P>
      <H3>KLJN: Classical Secure Key Exchange</H3>
      <P>
        The Kirchhoff-Law-Johnson-Noise (KLJN) protocol uses classical thermal
        noise for secure key exchange, challenging the narrative that
        information-theoretic security belongs exclusively to quantum mechanics.
      </P>
      <H3>Why This Matters to Digital Circuitality</H3>
      <P>
        His research asks whether strong guarantees can emerge from classical
        constraints rather than exotic machinery. Digital Circuitality asks the
        same question in a different domain. Prof. Kish&apos;s suggestion to replace
        Landauer&apos;s principle with Brillouin&apos;s negentropy principle is the
        intellectual bridge between his research and ours.
      </P>
    </>
  ),

  "ai-safety-policy-circuits": () => (
    <>
      <H2>Why Your AI Guardrails Are Made of Paper</H2>
      <P>
        Every AI safety mechanism you use today is software. RLHF? Software.
        Constitutional AI? Software. System prompts? Text that the AI itself
        interprets. The AI and its guardrails run on the same CPU, in the same
        process, sharing the same memory. Asking software to constrain the
        software that runs alongside it is like asking a prisoner to guard their
        own cell.
      </P>
      <H3>The Five Failures of Software Guardrails</H3>
      <P>
        1. Prompt injection. 2. Hallucination with action. 3.
        Self-modification. 4. Bypass through coordination. 5. OS-level bypass.
      </P>
      <H3>The Solution: Policy Circuits</H3>
      <P>
        A policy circuit is a small PCD program that verifies an AI action
        before it executes. It&apos;s composed entirely of formally verified monomers.
        Its correctness is proven in Coq. It doesn&apos;t &quot;think&quot; about whether an
        action is safe — it <strong>computes</strong> whether the action
        satisfies mathematical constraints.
      </P>
      <H3>Example: Rate Limiting</H3>
      <CodeBlock>{`component policy_rate_limit(current_count, max_allowed) {
    let within_limit = MC_12.GT8(max_allowed, current_count)
    return within_limit
}`}</CodeBlock>
      <H3>Example: Data Exfiltration Prevention</H3>
      <CodeBlock>{`component policy_data_classification(
    data_sensitivity,      // 0=public, 1=internal, 2=confidential, 3=secret
    destination_trust      // 0=external, 1=partner, 2=internal, 3=controlled
) {
    let safe = MC_12.GT8(destination_trust, data_sensitivity)
    let equal = MC_28.SCMP(destination_trust, data_sensitivity)
    let allowed = MC_09.OR8(safe, equal)
    return allowed
}`}</CodeBlock>
      <P>
        A confidential document (sensitivity=2) going to an external destination
        (trust=0)? <code>GT8(0, 2)</code> = false. Blocked. No amount of prompt
        injection can change what <code>GT8(0, 2)</code> evaluates to. It&apos;s
        arithmetic. It&apos;s proven in Coq. It&apos;s final.
      </P>
      <H3>How to Deploy Today</H3>
      <CodeBlock>{`# Generate JavaScript guardrails for your Node.js agent
brikc emit js policies/ai_safety.pcd -o guardrails.js

# Generate Python guardrails for LangChain
brikc emit python policies/ai_safety.pcd -o guardrails.py

# Certify the policy circuits
brikc certify policies/ai_safety.pcd
# TCE: Φ_c = 1 ✓ — All policies are coherent`}</CodeBlock>
      <P>
        <em>
          Part 2 of a three-part series.{" "}
          <InternalLink href="/blog/what-is-digital-circuitality">Part 1</InternalLink>{" "}
          | <InternalLink href="/blog/bpu-hardware-that-says-no">Part 3</InternalLink>
        </em>
      </P>
    </>
  ),

  "ai-guardrails-for-robots": () => (
    <>
      <H2>The Wrong Approach: Teaching Machines to Want Safety</H2>
      <P>
        The dominant strategy in AI safety today is behavioral training. We use
        RLHF to shape a model&apos;s preferences. For AI systems that control
        physical hardware — robot arms, autonomous vehicles, surgical devices —
        it is not enough. The problem is architectural. Safety-critical
        engineering has understood this for decades: we don&apos;t rely on aircraft
        engines &quot;wanting&quot; to stay within temperature limits.
      </P>
      <H3>Robot Arm: Force and Torque Limits</H3>
      <CodeBlock>{`PC robot_arm_safety {
    domain torque_nm   : uint8
    domain force_n     : uint8
    domain estop_line  : bit

    fn evaluate(torque_nm, force_n, estop_line) {
        let no_estop  = MC_0A.NOT8(estop_line)
        let torque_ok = safe_torque(torque_nm, 80)   // 80 Nm ceiling
        let force_ok  = safe_force(force_n, 150)     // 150 N ceiling
        let mechanical_safe = MC_08.AND8(torque_ok, force_ok)
        let allowed   = MC_08.AND8(no_estop, mechanical_safe)
        OUTPUT BLOCK = MC_0A.NOT8(allowed)
    }
}`}</CodeBlock>
      <H3>Autonomous Vehicle: Speed and Proximity</H3>
      <CodeBlock>{`PC vehicle_motion_safety {
    domain cmd_speed_kph  : uint8
    domain prox_m         : uint8
    domain road_limit_kph : uint8

    fn evaluate(cmd_speed_kph, prox_m, road_limit_kph) {
        let limit_ok = speed_within_limit(cmd_speed_kph, road_limit_kph)
        let prox_ok  = proximity_safe(prox_m, cmd_speed_kph)
        let allowed  = MC_08.AND8(limit_ok, prox_ok)
        OUTPUT BLOCK = MC_0A.NOT8(allowed)
    }
}`}</CodeBlock>
      <H3>The BPU: Where Policy Circuits Become Physical Law</H3>
      <P>
        The BPU is a dedicated silicon implementation. 64 Monomer Gates. EVA
        Router. TCE Unit. The BLOCK signal is non-maskable by design, routed
        through dedicated hardware interrupt lines that bypass the system bus
        entirely.
      </P>
      <CodeBlock>{`# Compile a policy circuit to Python
brikc emit python policies/robot_arm_safety.pcd -o arm_guardrails.py

# Run TCE coherence certification
brikc certify policies/robot_arm_safety.pcd
# TCE: Φ_c = 1 ✓`}</CodeBlock>
    </>
  ),

  "reverse-compile-anything": () => (
    <>
      <H2>The Problem: Legacy Code Is a Black Box</H2>
      <P>
        The Lifter is a reverse compiler. It takes your existing source code and
        produces a PCD blueprint — covering 12 languages.
      </P>
      <H3>12 Languages, One Target</H3>
      <CodeBlock>{`Language        Frontend        Status
─────────────────────────────────────────
JavaScript      js_lang         ✓ Stable
TypeScript      ts_lang         ✓ Stable
Python          python          ✓ Stable
Rust            rust_lang       ✓ Stable
C               c_lang          ✓ Stable
C++             cpp_lang        ✓ Stable
Go              go_lang         ✓ Stable
COBOL           cobol           ✓ Stable
PHP             php_lang        ✓ Stable
Java            java_lang       ✓ Stable
Swift           swift_lang      ✓ Stable
Ruby            ruby_lang       ✓ Stable`}</CodeBlock>
      <H3>How It Works</H3>
      <CodeBlock>{`Source Code → AST → Pattern Recognition → Monomer Mapping → PCD

1. PARSE      Language-specific frontend parses to AST
2. RECOGNIZE  Pattern matcher identifies operations
3. MAP        Each pattern maps to BRIK-64 monomers
4. EMIT       Monomers are composed with EVA algebra into PCD`}</CodeBlock>
      <H3>The Migration Path</H3>
      <CodeBlock>{`1. LIFT      Reverse-compile existing code to PCD
2. ANALYZE   Review liftability scores, identify gaps
3. CERTIFY   Run TCE on lifted circuits
4. ITERATE   Refactor low-scoring sections
5. EMIT      Compile PCD to any target language
6. VERIFY    Confirm behavioral equivalence`}</CodeBlock>
    </>
  ),

  "javascript-to-rust-3-commands": () => (
    <>
      <H2>The Problem with Language Migration</H2>
      <P>
        Option A: Rewrite by hand. Hope you got the edge cases right. Option B:
        Ask an AI. Discover a subtle bug in production three months later.
        Option C: Three commands.
      </P>
      <CodeBlock>{`brikc lift utils.js        # 1. Convert to verified blueprint
brikc check utils.pcd      # 2. Verify the blueprint
brikc build utils.pcd \\
  --target rust             # 3. Export to Rust + tests`}</CodeBlock>
      <H3>Step 1: Lift</H3>
      <CodeBlock>{`// utils.js
function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}`}</CodeBlock>
      <CodeBlock>{`$ brikc lift utils.js
⚡ Lifting utils.js (JavaScript)...
Summary: 3/3 functions liftable
Overall score: 100%`}</CodeBlock>
      <H3>Step 3: Build</H3>
      <CodeBlock>{`$ brikc build fibonacci.pcd --target rust
  ✓ Generated: fibonacci.rs
  ✓ Generated: fibonacci_test.rs (6 test cases)

$ brikc build fibonacci.pcd --target python
$ brikc build fibonacci.pcd --target wasm32
$ brikc build fibonacci.pcd --target native`}</CodeBlock>
      <P>
        One blueprint. Five outputs. All verified. All with tests.
      </P>
    </>
  ),

  "verification-gap": () => (
    <>
      <H2>And How Digital Circuitality Finally Closes It</H2>
      <P>
        In 1965, Gordon Moore predicted that transistors on a chip would double
        every two years. A modern processor has 100 billion transistors. Each one
        works correctly. How is this possible? Not through testing. You cannot
        test 100 billion transistors individually.
      </P>
      <P>
        Hardware works because of <strong>compositional verification</strong>.
        If Gate A is correct and Gate B is correct, then the circuit A→B is
        correct. Software has never had this property.
      </P>
      <H3>The Numbers Nobody Talks About</H3>
      <P>
        The global cost of software bugs: <strong>$2.41 trillion per year</strong>.
        From the Ariane 5 integer overflow to the Boeing 737 MAX sensor fusion
        error — the pattern is always the same: a calculation exceeded its
        domain, and nobody verified it at design time.
      </P>
      <H3>The Ariane 5 Through This Lens</H3>
      <CodeBlock>{`PC navigation {
    domain velocity: Range [0, 50000];
    domain output_16bit: Range [0, 32767];

    fn convert_velocity(vel) {
        // TCE: vel ∈ [0, 50000], output ∈ [0, 32767]
        // COMPILE ERROR: output domain exceeds [0, 32767]
        // The circuit does not close. The program does not compile.
        return vel;
    }
}`}</CodeBlock>
      <P>
        The cost of writing <code>domain velocity: Range [0, 50000];</code> is 3
        seconds. The cost of the Ariane 5 failure was $370 million. The
        verification gap has existed for 50 years. The tools to close it exist
        now.
      </P>
    </>
  ),

  "clean-code-from-blueprints": () => (
    <>
      <H2>The PCD Roundtrip — The Feature That Changes Everything</H2>
      <P>
        Every codebase starts clean. Six months later: patches on patches, edge
        cases nobody documented, functions that &quot;work&quot; but nobody knows why. What
        if you could extract the computational essence, verify it mathematically,
        and recompile it into clean code?
      </P>
      <H3>The Roundtrip</H3>
      <CodeBlock>{`Your messy JS → brikc lift → PCD blueprint → brikc build --target js → Clean JS + tests`}</CodeBlock>
      <H3>A Real Example</H3>
      <CodeBlock>{`// TODO: fix this later
function calcPrice(qty, price, tax, disc) {
  var total = qty * price
  if(disc > 0) total = total - (total * disc / 100)
  total = total + (total * tax / 100)
  return Math.round(total * 100) / 100 // cents hack
}`}</CodeBlock>
      <CodeBlock>{`$ brikc lift pricing.js
  Found: calcPrice (4 params, 1 return)
  Liftability: 0.92
  Monomers: MUL8, SUB8, ADD8, DIV8
  Status: CORE (Φ_c = 1)`}</CodeBlock>
      <H3>Auto-Generated Tests</H3>
      <CodeBlock>{`test('zero quantity returns zero', () => {
  expect(calcPrice(0, 100, 10, 5)).toBe(0);
});

test('zero discount applies full price', () => {
  expect(calcPrice(10, 50, 10, 0)).toBe(550);
});

test('100% discount results in tax on zero', () => {
  expect(calcPrice(10, 50, 10, 100)).toBe(0);
});`}</CodeBlock>
      <H3>The Business Case</H3>
      <CodeBlock>{`PROBLEM                          PCD ROUNDTRIP
──────────────────────────────────────────────────
"Big rewrite" (2 years, fails)   Lift incrementally
"Add tests later" (never)        Tests auto-generated
"Only Bob knows this code"       Blueprint explains it
"Can't switch to Rust"           Emit to Rust from blueprints
"Docs are outdated"              Blueprint IS the documentation
"How do we prove compliance?"    Φ_c = 1 is the proof`}</CodeBlock>
    </>
  ),

  "translation-validation": () => (
    <>
      <H2>The Translation Problem</H2>
      <P>
        When you transpile code from one language to another, how do you know
        the output is equivalent? BRIK-64 proves it rather than tests it.
      </P>
      <H3>The Shootout</H3>
      <P>
        30 PCD programs compiled to both JavaScript and Python. Every output
        compared against the canonical interpreter. 30/30 functions verified
        equivalent. Zero divergences across over 50,000 cumulative test runs.
      </P>
      <H3>How It Works</H3>
      <P>
        The differential testing framework generates random but well-formed PCD
        programs, compiles them to multiple targets, executes all targets with
        identical inputs, and compares outputs bit-for-bit.
      </P>
      <CodeBlock>{`git clone https://github.com/brik64/brik64-demos.git
cd brik64-demos
./run_demo.sh demo2-translation-validation`}</CodeBlock>
      <P>
        Same input. Same output. Every language. Every time. Zero divergences.
        That is the power of compiling through a single, verified intermediate
        representation.
      </P>
    </>
  ),

  "building-with-sdks": () => (
    <>
      <H2>What Are the SDKs?</H2>
      <P>
        The BRIK-64 SDKs bring the 64 verified monomers directly into your
        existing codebase. Instead of writing PCD and compiling, you call
        monomer functions from your language of choice. Each function carries its
        formal verification proof. Three SDKs are available today: Rust,
        JavaScript, and Python.
      </P>
      <H3>Installation</H3>
      <CodeBlock>{`# Rust
cargo add brik64

# JavaScript / TypeScript
npm install @brik64/sdk

# Python
pip install brik64`}</CodeBlock>
      <H3>Code Examples</H3>
      <CodeBlock>{`// JavaScript
import { add8, inc, hash, fadd } from "@brik64/sdk";

const sum = add8(200, 100);   // 44 (wrapping)
const next = inc(41);          // 42
const h = hash("hello");      // deterministic 256-bit hash`}</CodeBlock>
      <CodeBlock>{`# Python
from brik64 import add8, inc, hash, fadd

sum = add8(200, 100)   # 44 (wrapping)
next_val = inc(41)      # 42
h = hash(b"hello")     # deterministic 256-bit hash`}</CodeBlock>
      <CodeBlock>{`// Rust
use brik64::{add8, inc, hash, fadd};

fn main() {
    let sum = add8(200, 100);   // 44 (wrapping)
    let next = inc(41);          // 42
    let h = hash(b"hello");     // deterministic 256-bit hash
}`}</CodeBlock>
      <H3>Mixing SDK Functions with Existing Code</H3>
      <CodeBlock>{`// Your existing Express.js server
app.post("/transfer", async (req, res) => {
  const { from, to, amount } = req.body;

  // Use BRIK-64 for the critical computation
  const fee = mul8(amount, 3);           // 3% fee, verified
  const net = sub8(amount, fee);         // net amount, verified
  const checksum = hash(from + to + net); // integrity, verified

  await db.transfer(from, to, net, checksum);
  res.json({ success: true, net, checksum });
});`}</CodeBlock>
      <P>
        Every SDK function is backed by a Coq proof file. When you call{" "}
        <code>add8(200, 100)</code>, you&apos;re invoking a computation that has been
        formally proven correct for all possible inputs.
      </P>
    </>
  ),

  "what-artificial-intuition-cant-verify": () => (
    <>
      <H2>The Intuition Revolution</H2>
      <P>
        Carlos E. Perez, a former IBM Watson Research engineer, has been making
        an argument that most of the AI industry still hasn&apos;t internalized: deep
        learning is not artificial intelligence. It&apos;s artificial intuition.
        LLMs don&apos;t reason. They intuit.
      </P>
      <H3>The Problem Perez Identified</H3>
      <P>
        AI systems now generate code, text, and decisions faster than any human
        can review them. When an AI generates code and then generates the tests
        for that code, who verified the verifier? The problem is circularity.
      </P>
      <H3>Intuition Needs Bones</H3>
      <P>
        No airline lets a pilot fly without TCAS. Intuition — no matter how
        refined — needs structure that it cannot override.
      </P>
      <H3>The Circuit Layer</H3>
      <P>
        Digital Circuitality enters as its structural complement. A finite set
        of formally verified atomic operations (64 monomers), composed through
        algebraic laws (EVA algebra), certified by an independent engine (TCE).
        When mapped onto 64 core operations, exhaustive verification becomes
        possible.
      </P>
      <H3>Two Layers, One System</H3>
      <P>
        <strong>Layer 1: Generation.</strong> LLMs operate with artificial
        intuition — pattern completion, creative leaps.{" "}
        <strong>Layer 2: Certification.</strong> A finite algebra of verified
        operations. An independent coherence engine. Hardware enforcement through
        the BPU. RLHF teaches an AI to <em>want</em> to do the right thing.
        Policy circuits <em>prevent</em> it from doing the wrong thing.
        Education can fail. Physics does not.
      </P>
    </>
  ),

  "your-code-exists-now-verify": () => (
    <>
      <H2>Introducing the BRIK-64 Lifter</H2>
      <P>
        You have a codebase. Thousands of functions. Some you wrote, some your
        teammates wrote, some an AI wrote at 2 AM. They all work — probably.{" "}
        <strong>Which of your functions are mathematically correct?</strong>
      </P>
      <H3>Meet the Lifter</H3>
      <CodeBlock>{`$ brikc lift src/utils.js

⚡ Lifting src/utils.js (JavaScript)...

Summary: 8/12 functions liftable (1 partial, 3 unliftable)
Overall score: 72%

  ✓ LIFTABLE  calculateTotal    — 100%
  ✓ LIFTABLE  formatCurrency    — 100%
  ✓ LIFTABLE  validateEmail     — 95%
  ✓ LIFTABLE  fibonacci         — 100%
  ✗ BLOCKED   fetchFromAPI      — side effect: network request
  ✗ BLOCKED   writeToFile       — side effect: filesystem
  ✗ BLOCKED   updateDOM         — side effect: DOM mutation`}</CodeBlock>
      <H3>A Real Example</H3>
      <CodeBlock>{`// utils.js
function add(a, b) { return a + b; }
function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
async function fetchUser(id) {
  const res = await fetch(\`/api/users/\${id}\`);
  return res.json();
}`}</CodeBlock>
      <CodeBlock>{`$ brikc lift utils.js
  ✓ LIFTABLE add     — 100%
  ✓ LIFTABLE clamp   — 100%
  ✗ BLOCKED  fetchUser — async function (non-deterministic)`}</CodeBlock>
      <H3>Now export to any language — with tests</H3>
      <CodeBlock>{`$ brikc build add.pcd --target rust
  ✓ Generated: add.rs
  ✓ Generated: add_test.rs (4 test cases)

$ brikc build clamp.pcd --target python
  ✓ Generated: clamp.py
  ✓ Generated: test_clamp.py (6 test cases)`}</CodeBlock>
      <P>
        Your code already exists. Now you know which parts are bulletproof.
      </P>
    </>
  ),

  "full-spectrum-pcd": () => (
    <>
      <H2>Games, Simulations, AI Pipelines, and the Power of Open Circuits</H2>
      <P>
        The previous article showed PCD as a fortress: 64 certified monomers,
        exact arithmetic, <PhiC /> = 1. But real software isn&apos;t pure. Games need
        graphics. AI pipelines need network calls. Simulations need
        floating-point math. That&apos;s what the other 64 monomers are for.
      </P>
      <H3>The Spectrum of Certification</H3>
      <CodeBlock>{`Φ_c = 1.0        — Pure. All 64 core monomers. Mathematical proof.
Φ_c = OPEN 87%   — Mixed. Core + some extended. 87% proven, 13% contracted.
Φ_c = OPEN 50%   — Balanced. Half proven, half contracted.
Φ_c = CONTRACT    — All extended. No proof, but bounded contracts.`}</CodeBlock>
      <H3>Example: A Multiplayer Game Score System</H3>
      <CodeBlock>{`PC game_scores {
    domain score: Range [0, 999999];
    domain level: Range [1, 100];
    domain combo: Range [0, 50];

    fn calculate_score(base_points, current_level, combo_count) {
        let level_bonus = base_points * current_level / 10;
        let combo_bonus = base_points * combo_count * combo_count / 100;
        return base_points + level_bonus + combo_bonus;
    }

    let player_score = calculate_score(500, 7, 3);
    OUTPUT player_score;
    return player_score;
}`}</CodeBlock>
      <P>Result: <code>BRIK-64 OPEN 78%</code> — the score logic is certified, the rendering and networking operate under contract.</P>
      <H3>You Choose the Mix</H3>
      <CodeBlock>{`Use Case                Core %   Extended %   Badge
──────────────────────  ───────  ──────────   ─────────────────────
Banking / Finance       100%     0%           Φ_c = 1 CERTIFIED
AI Safety Policy        95%      5%           OPEN 95%
Game Score + Render     70%      30%          OPEN 70%
Physics Simulation      100%     0%           Φ_c = 1 CERTIFIED
Trading Bot             72%      28%          OPEN 72%`}</CodeBlock>
      <P>
        PCD with all 128 monomers isn&apos;t just for banking and safety-critical
        systems. It&apos;s for anything where you want measurable certainty alongside
        real-world I/O.
      </P>
    </>
  ),

  "precision-as-domain": () => (
    <>
      <H2>And How Digital Circuitality Tells the Truth</H2>
      <P>
        Open any programming language. Type <code>0.1 + 0.2</code>. The answer
        is <code>0.30000000000000004</code>. This is not a bug. This is IEEE
        754. Every language produces this result. And every programmer
        eventually learns to &quot;just deal with it.&quot;
      </P>
      <P>
        But what if you&apos;re building a flight computer? A medical device? A
        financial system? &quot;Just deal with it&quot; is not an engineering answer. It&apos;s a
        prayer.
      </P>
      <H3>What If the Language Enforced It?</H3>
      <P>
        In PCD, every variable lives inside a declared domain. And when you need
        &quot;decimal&quot; math, you don&apos;t use floats. You declare your precision:
      </P>
      <CodeBlock>{`PC scientific_calculator {
    // The engineer DECLARES: "I need π with 6 decimal places"
    domain PI: Range [3141592, 3141593];

    // All calculations use integers scaled by 10⁶
    // No IEEE 754. No rounding surprises.
    // Error: ±0.0000005 — KNOWN and DECLARED
}`}</CodeBlock>
      <H3>Three Levels of Math</H3>
      <CodeBlock>{`Approach               Type           Error              Certification
─────────────────────  ─────────────  ─────────────────  ─────────────
Integer arithmetic     U8, I64        Zero — exact       Φ_c = 1 ✓
Scaled integers        I64 + scale    Declared           Φ_c = 1 ✓
Floating point         F64            IEEE 754 rounding  Φ_c = CONTRACT`}</CodeBlock>
      <H3>The Engineer&apos;s Mindset</H3>
      <CodeBlock>{`domain velocity: Range [0, 900];
domain distance: Range [0, 20000];
domain time: Range [1, 86400];     // never zero
domain scale: Range [1000, 1000];  // 3 decimal places

fn calculate_velocity(dist, t) {
    return (dist * scale) / t;
}`}</CodeBlock>
      <P>
        The engineer knows the input ranges, the precision, the error tolerance,
        that division by zero is impossible, and that the circuit closes. The
        coder knows none of this. The coder discovers it at 3 AM when production
        crashes.
      </P>
    </>
  ),

  "adversarial-corpus": () => (
    <>
      <H2>Why Attack Your Own System?</H2>
      <P>
        If you only test the happy path, you only know the happy path works. We
        built 50 test cases specifically designed to break our own pipeline.
      </P>
      <H3>What We Found</H3>
      <P>
        Three real bugs:
      </P>
      <P>
        <strong>Silent overflow in DIV8 remainder</strong> — the
        quotient-remainder reconstruction check was missing at boundary values.{" "}
        <strong>Parallel composition width mismatch</strong> —
        different-width tuple outputs were silently truncated by the backend.{" "}
        <strong>Conditional composition with side-effecting predicate</strong> —
        STORE operations leaked across branch boundaries.
      </P>
      <P>
        All three were fixed. The corpus remains as a permanent regression suite
        — 50 cases across 5 categories (arithmetic, arrays, control flow,
        strings, composition).
      </P>
      <H3>Run It Yourself</H3>
      <CodeBlock>{`git clone https://github.com/brik64/brik64-demos.git
cd brik64-demos
./run_demo.sh adversarial-corpus`}</CodeBlock>
      <P>50 cases. 0 failures. That is the bar.</P>
    </>
  ),

  "api-and-mcp": () => (
    <>
      <H2>The Platform API</H2>
      <P>
        The BRIK-64 platform exposes a REST API at{" "}
        <code>registry.brik64.dev/v1</code>. Every operation is available
        programmatically.
      </P>
      <H3>Core Endpoints</H3>
      <CodeBlock>{`GET    /v1/circuits                List your circuits
POST   /v1/circuits                Publish a new circuit
GET    /v1/circuits/:pid           Get circuit by PID
POST   /v1/circuits/:pid/certify   Run TCE certification
GET    /v1/registry                Browse public registry
GET    /v1/registry/search?q=...   Search circuits`}</CodeBlock>
      <H3>Certify via API</H3>
      <CodeBlock>{`POST /v1/circuits/:pid/certify
{
  "mode": "full",
  "targets": ["javascript", "python"]
}

Response:
{
  "pid": "brik64:factorial:a3f8c1",
  "phi_c": 1.000,
  "certified": true,
  "metrics": {
    "eta": 1.000,
    "entropy": 0.000,
    "coherence": 1.000,
    "determinism": 1.000,
    "error_rate": 0.000
  }
}`}</CodeBlock>
      <H3>MCP: AI Agents as First-Class Citizens</H3>
      <P>
        BRIK-64 ships a native MCP server with a minimal 2-tool architecture:
      </P>
      <CodeBlock>{`Tool 1: brik64.discover
  → Search the registry, inspect circuits, read PCD source
  → Read-only, zero side effects

Tool 2: brik64.execute
  → Compile, certify, emit, publish
  → Write operations, requires confirmation`}</CodeBlock>
      <H3>Configure Your AI Agent</H3>
      <CodeBlock>{`// Claude Code — ~/.claude.json
{
  "mcpServers": {
    "brik64": {
      "command": "npx",
      "args": ["@brik64/mcp-server"],
      "env": {
        "BRIK64_API_KEY": "brik64_sk_..."
      }
    }
  }
}`}</CodeBlock>
      <H3>SDKs</H3>
      <CodeBlock>{`npm install @brik64/core     # JavaScript / TypeScript
pip install brik64           # Python
cargo add brik64-core        # Rust`}</CodeBlock>
    </>
  ),
};
