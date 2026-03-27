# BRIK-64 Complete Documentation Reference
> Compiled from https://docs.brik64.dev (repo: brik64/brik64-docs-site)
> Date: 2026-03-27
> 42 source files

## Table of Contents

1. [[Introduction] BRIK-64 — Digital Circuitality](#[introduction]-brik-64-digital-circuitality)
2. [[Installation] Install brikc or Add Libraries](#[installation]-install-brikc-or-add-libraries)
3. [[Quickstart] Get Started in 5 Minutes](#[quickstart]-get-started-in-5-minutes)
4. [[CLI] Overview](#[cli]-overview)
5. [[CLI] Commands Reference](#[cli]-commands-reference)
6. [[PCD] Syntax Reference](#[pcd]-syntax-reference)
7. [[PCD] Type System](#[pcd]-type-system)
8. [[PCD] Monomer Reference](#[pcd]-monomer-reference)
9. [[PCD] Patterns & Best Practices](#[pcd]-patterns-&-best-practices)
10. [[PCD] Examples](#[pcd]-examples)
11. [[PCD] Tutorial: Your First PCD Program](#[pcd]-tutorial-your-first-pcd-program)
12. [[PCD] Testing & Debugging](#[pcd]-testing-&-debugging)
13. [[PCD] Error Diagnosis Guide](#[pcd]-error-diagnosis-guide)
14. [[PCD] Policy Circuits](#[pcd]-policy-circuits)
15. [[PCD] Standard Library](#[pcd]-standard-library)
16. [[Lifter] Overview](#[lifter]-overview)
17. [[Lifter] Usage](#[lifter]-usage)
18. [[Lifter] Supported Languages](#[lifter]-supported-languages)
19. [[Lifter] COBOL Migration Guide](#[lifter]-cobol-migration-guide)
20. [[Transpiler] Universal Transpiler](#[transpiler]-universal-transpiler)
21. [[Transpiler] Usage](#[transpiler]-usage)
22. [[Transpiler] Migration Guide](#[transpiler]-migration-guide)
23. [[Transpiler] Current Limitations](#[transpiler]-current-limitations)
24. [[SDK] Rust](#[sdk]-rust)
25. [[SDK] JavaScript](#[sdk]-javascript)
26. [[SDK] Python](#[sdk]-python)
27. [[SDK] Integrations](#[sdk]-integrations)
28. [[API] Overview](#[api]-overview)
29. [[API] Endpoints](#[api]-endpoints)
30. [[API] Authentication](#[api]-authentication)
31. [[API] Certification](#[api]-certification)
32. [[API] Publishing to the Registry](#[api]-publishing-to-the-registry)
33. [[MCP] Integration Overview](#[mcp]-integration-overview)
34. [[MCP] Configuration](#[mcp]-configuration)
35. [[Theory] Digital Circuitality — Formal Definition](#[theory]-digital-circuitality-formal-definition)
36. [[Theory] BPU — BRIK Processing Unit](#[theory]-bpu-brik-processing-unit)
37. [[Theory] AI Safety — Policy Circuits vs. Alignment](#[theory]-ai-safety-policy-circuits-vs-alignment)
38. [[Theory] AI Guardrails](#[theory]-ai-guardrails)
39. [[Theory] Expansion Roadmap](#[theory]-expansion-roadmap)
40. [[Theory] Licensing](#[theory]-licensing)
41. [[Reference] Glossary](#[reference]-glossary)
42. [[Reference] Roadmap](#[reference]-roadmap)

---

## [Introduction] BRIK-64 — Digital Circuitality

<!-- Source: introduction.mdx -->

# BRIK-64 — Digital Circuitality

**Digital Circuitality** is the formal property of a computational system that operates as a closed circuit: every input domain is bounded, every operation is verified, every output range is proven, and no external noise can introduce undefined behavior.

A system with **Φ_c = 1** satisfies Digital Circuitality. A system with **Φ_c = 0** does not. BRIK-64 is the first programming system built entirely on this principle — and the only one where a program that cannot be certified cannot compile.


  
    MC_00–MC_63 (Coq-proven) + MC_64–MC_127 (contracted). 0 panic guarantee on all 128. 14,500+ tests across 16 suites.
  
  
    ⊗ sequential · ∥ parallel · ⊕ conditional. Correctness preserved by composition. Proven in Coq.
  
  
    Coherence Metric Framework. Φ_c = 1 · δ = 0 · V(C) = 1. The compiler rejects everything else.
  
  
    Extended Monomers · Certification Registry · BPU Silicon. The path from software to hardware.
  


---

## Your compiled code ships with its test suite

Every team knows the pain: code is done, but tests aren't. Or tests pass, but someone changed the logic later and they didn't catch it. BRIK-64 changes this at the compiler level.

```bash
brikc compile src/main.pcd --target rs --emit-tests
# build/main.rs          ← certified implementation
# build/main_spec.rs     ← complete test suite, auto-generated from the proof
```

The test suite is generated **from the formal proof** — not written by hand. Property tests, boundary tests, composition tests, and regression anchors arrive alongside the code. Your CI pipeline gets:

- ✅ Correct code — proven by CMF, not hoped by coverage
- ✅ Complete test suite — generated, not maintained
- ✅ Regression anchors — if anyone changes the generated code, tests catch the deviation

The compiler does not just verify your logic. It also documents and protects it.

→ [Testing & Debugging](/pcd/testing)

---

## Use BRIK-64 Now — In Any Language

You do not need to switch languages to apply Digital Circuitality. BRIK-64 ships native libraries for Rust, JavaScript/TypeScript, and Python. Drop them into your existing codebase and any function built from Core monomers via EVA operators automatically carries **Φ_c = 1**.

### Install


  
    ```bash
    cargo add brik64-core
    ```

    Or in `Cargo.toml`:

    ```toml
    [dependencies]
    brik64-core = "4.1.0-beta.1"
    ```

    **Usage:**

    ```rust
    use brik64_core::{mc, eva};

    fn main() {
        // Wrapping 8-bit addition — formally verified
        let result = mc::add8(200, 100); // → 44 (wrapping: (200+100) % 256)

        // EVA sequential composition: add8 then mod8
        let pipeline = eva::seq(|x: (u8,u8)| mc::add8(x.0, x.1), |s| mc::mod8(s, 7));
        println!("{}", pipeline((250, 10))); // Φ_c = 1 for the entire composition
    }
    ```

    Available crates:
    - [`brik64-core`](https://crates.io/crates/brik64-core) — 64 core monomers + EVA algebra
    - [`brik64-bir`](https://crates.io/crates/brik64-bir) — BIR bytecode interpreter
  
  
    ```bash
    npm install @brik64/core
    # or
    yarn add @brik64/core
    # or
    pnpm add @brik64/core
    ```

    **Usage (TypeScript):**

    ```typescript
    import { mc, eva } from '@brik64/core';

    // Wrapping 8-bit addition
    const result = mc.add8(200, 100); // → 44 (wrapping)

    // EVA sequential composition
    const pipeline = eva.seq(
      (x: number) => mc.add8(x, 10),
      (x: number) => mc.mod8(x, 7)
    );

    console.log(pipeline(250)); // Φ_c = 1
    ```

    **Usage (CommonJS):**

    ```javascript
    const { mc, eva } = require('@brik64/core');

    const result = mc.add8(200, 100); // 44 (wrapping)
    const hash = mc.hashHex(Buffer.from('hello')); // SHA-256 hex
    ```

    Full tree-shakeable ESM + CJS dual build. TypeScript types included.
  
  
    ```bash
    pip install brik64
    # or
    uv add brik64
    ```

    **Usage:**

    ```python
    from brik64.mc import arithmetic, crypto
    from brik64.eva import seq, par, pipeline

    # Wrapping 8-bit addition
    result = arithmetic.add8(200, 100)  # → 44 (wrapping)

    # EVA sequential composition
    process = seq(
        lambda x: arithmetic.add8(x, 10),
        lambda x: arithmetic.mod8(x, 7)
    )
    print(process(250))  # Φ_c = 1

    # SHA-256 hash (MC_49)
    digest = crypto.hash_hex(b"hello world")
    ```

    Requires Python 3.10+. Zero dependencies.
  
  
    ```bash
    # Linux x86-64
    curl -L https://brik64.dev/install | sh

    # Verify installation
    brikc version
    brikc verify           # self-verification: Ω = 1
    brikc catalog          # list all 128 monomers
    ```

    The `brikc` compiler is itself a certified BRIK-64 program. It compiles to a **708 KB standalone x86-64 ELF** — no Rust runtime, no libc dependency.

    ```bash
    # Compile PCD to native ELF
    brikc compile src/main.pcd

    # Cross-compile to other targets
    brikc compile src/main.pcd --target rs    # Rust
    brikc compile src/main.pcd --target js    # JavaScript ES2022
    brikc compile src/main.pcd --target py    # Python 3.10+
    brikc compile src/main.pcd --target wasm32
    ```
  


### What Φ_c = 1 means in practice

When you call `add8(200, 100)` instead of `200 + 100` in any language, you are not just using a utility function. You are invoking a formally verified operation whose entire domain and range have been proven in Coq. The EVA operators (`seq`, `par`, `cond`) preserve that proof across composition.

Any function built exclusively from Core monomers (MC_00–MC_63) via EVA operators retains Φ_c = 1 — regardless of which language it runs in. That is the definition of Digital Circuitality.

---

## Write PCD, compile to any target

PCD (Printed Circuit Description) is the language of Digital Circuitality — a formal schematic language, not a scripting language. Write once, compile to **14 targets** (JS, TypeScript, Python, Rust, C, C++, Go, COBOL, PHP, Java, Swift, WASM, Native). Lift from **10 input languages** with **100% liftability** on real projects:

```pcd
PC hello {
    let msg = "Hello from Digital Circuitality!";
    let n = MC_43.LEN(msg);
    MC_33.WRITE(1, msg, n);
    OUTPUT 0;
}
```

```bash
brikc compile hello.pcd               # Φ_c = 1 — or it doesn't compile
brikc compile hello.pcd --target rs   # emit Rust
brikc compile hello.pcd --target js   # emit JavaScript
brikc compile hello.pcd --target py   # emit Python
```

The guarantees travel with the output. A certified PCD program compiles to certified Rust, certified JavaScript, certified Python — the BRIK-64 runtime is not required at the destination.

---

## The Core Monomer Catalog — MC_00–MC_63

64 formally verified atomic operations, 8 families × 8. Every monomer has a Coq proof covering domain, range, postconditions, and termination.

| Family | Range | Operations |
|--------|-------|------------|
| Arithmetic | MC_00–07 | ADD8, SUB8, MUL8, DIV8, INC, DEC, MOD, NEG |
| Logic | MC_08–15 | AND8, OR8, XOR8, NOT8, SHL, SHR, ROTL, ROTR |
| Memory | MC_16–23 | LOAD, STORE, ALLOC, FREE, COPY, SWAP, CAS, FENCE |
| Control | MC_24–31 | IF, JUMP, CALL, RET, LOOP, BREAK, CONT, HALT |
| I/O | MC_32–39 | READ, WRITE, OPEN, CLOSE, SEEK, STAT, POLL, FLUSH |
| String | MC_40–47 | CONCAT, SPLIT, SUBSTR, LEN, UPPER, CHAR_AT, TRIM, MATCH |
| Crypto | MC_48–55 | HASH, HMAC, AES_ENC, AES_DEC, SHA256, RAND, SIGN, VERIFY |
| System | MC_56–63 | TIME, SLEEP, ENV, EXIT, PID, SIGNAL, MMAP, SYSINFO |

A program built exclusively from Core monomers receives the **BRIK-64 Certified** badge (Ω = 1). The compiler rejects it if Φ_c ≠ 1, δ ≠ 0, or V(C) ≠ 1. There is no partial credit.

---

## Extended Monomers — MC_64–MC_127


**Available since v4.0.0-beta.2.**
Extended monomers (MC_64–MC_127) cover floating point, math, networking, graphics, audio, filesystem, concurrency, and interop. All 64 are implemented with bounds-checked input validation — 0 panic paths. They operate under CONTRACT closure (Φ_c = CONTRACT) rather than the Coq-proven Φ_c = 1 of Core monomers.


64 additional monomers for real-world I/O — all bounds-checked with 0 panic guarantee since v4.1.0-beta.1. They operate under declared contracts, not formal Coq proofs. Programs mixing Core + Extended receive the **BRIK-64 Open** badge showing the verified percentage.

| Family | Range | Domain | Status |
|--------|-------|--------|--------|
| Float64 | MC_64–71 | IEEE 754 — FADD, FSUB, FMUL, FDIV, FABS, FNEG, FSQRT, FMOD | ✅ Real implementation |
| Math | MC_72–79 | SIN, COS, TAN, EXP, LN, LOG2, POW, CEIL | ✅ Real implementation |
| Network | MC_80–87 | CONN, SEND, RECV, CLOSE, BIND, LISTEN, ACCEPT, POLL | ✅ Bounds-checked (returns DomainViolation) |
| Graphics | MC_88–95 | CREATE, PIXEL, READ, CLEAR, BLIT, LINE, RECT, DIMS | ✅ Bounds-checked (returns DomainViolation) |
| Audio | MC_96–103 | CREATE, WRITE, READ, MIX, GAIN, LEN, RATE, CHANS | ✅ Bounds-checked (returns DomainViolation) |
| Filesystem | MC_104–111 | STAT, MKDIR, RMDIR, LIST, COPY, RENAME, REMOVE, EXISTS | ✅ Bounds-checked (returns DomainViolation) |
| Concurrency | MC_112–119 | SPAWN, JOIN, MUTEX, LOCK, UNLOCK, CHAN, SEND, RECV | ✅ Bounds-checked (returns DomainViolation) |
| Interop | MC_120–127 | CALL, LOAD, FREE, JSON_E, JSON_D, WASM_L, WASM_C, WASM_F | ✅ Bounds-checked (returns DomainViolation) |


**Critical invariant:** Core monomers (MC_00–MC_63) remain formally verified regardless of what Extended monomers surround them. The compiler enforces the boundary statically. Extended results entering Core logic must pass a typed validation boundary.


---

## Certification

Every certified program produces a cryptographic certificate:

```json
{
  "cmf": { "phi_c": 1.000, "delta": 0.000, "v_c": 1, "omega": 1 },
  "badge_type": "certified",
  "public_hash": "sha256:beb2c1c6634b...",
  "merkle_proof": { "registry": "registry.brik64.dev", "certified": true }
}
```

The badge in your README is a **live endpoint** — it verifies the certificate hash against the public registry in real time. A modified program shows INVALID automatically.

| Badge | Condition | Meaning |
|-------|-----------|---------|
| 🟢 **BRIK-64 CERTIFIED** | Hash in registry, Ω = 1 | Structurally impossible to have logic errors |
| 🔵 **BRIK-64 OPEN 78%** | Hash in registry, Core + Extended | Certified where Core, contracted at the boundary |
| ⚫ **UNVERIFIED** | Hash not in registry | No certification claim made |
| 🔴 **INVALID** | Hash mismatch — code modified after certification | The program no longer matches the certified version |
| 🔴 **REVOKED** | Certificate explicitly revoked | Withdrawn from registry |

The badge is a **live endpoint** — on every page load it queries the registry with the program's hash. If the deployed binary differs from the certified one by a single byte, the badge immediately turns red and shows **INVALID**. No manual audit. No delayed detection. The tamper signal is automatic and instant.

What no other certification standard can claim:

| Standard | What it certifies |
|----------|-------------------|
| ISO 26262, DO-178C, CC EAL7 | The process was followed / the tests were run |
| **BRIK-64 Certified** | **Incorrect programs cannot compile** |

---

## The Coherence Foundation

BRIK-64 applies a rigorous structural analysis to every program. The **Coherence Metric Framework (CMF)** computes 7 metrics measuring complexity, branching, type transformation, and closure — then requires **Φ_c = 1.000** for compilation to succeed.

A certified program with Φ_c = 1 is a **closed circuit**: every input is consumed, every output is produced, and every control path terminates. Logic errors, type errors, integer overflow, and undefined behavior are not rare events in a certified BRIK-64 program — they are **structurally impossible**.

---

## Security Audit — v4.1.0-beta.1

All 128 monomers (64 core + 64 extended) have been hardened with a **0 panic guarantee**: no monomer can panic, abort, or produce undefined behavior for any input in its declared domain. The security audit covers 14,500+ tests across 16 suites, including property tests, boundary tests, composition tests, and regression anchors. All arithmetic operations use **wrapping semantics** — not saturating — ensuring deterministic behavior at domain boundaries.

---

## Closure Domains — How Circuits Close

For a circuit to be certified (Φ_c = 1), every monomer must declare its **domain** — the exact set of valid inputs and guaranteed outputs. No infinity. No undefined behavior. No surprises.

### Domain Types

| Type | Notation | Example | Cardinality |
|------|----------|---------|-------------|
| Range | `[min, max]` | u8 = `[0, 255]` | max - min + 1 = 256 |
| Set | `{v₁, v₂, ...}` | bool = `{true, false}` | 2 |
| Bounded | `{x ∈ D \| P(x)}` | even ∩ `[0, 100]` | ≤ \|D\| |
| Product | `D₁ × D₂` | ADD8 input = `[0,255] × [0,255]` | 65,536 |

### Why Domains Matter

```
ln(x)  where x ∈ (-∞, +∞)  → UNDEFINED (can produce -∞, NaN)  → Φ_c ≠ 1
ln(x)  where x ∈ [0.001, 1000000]  → BOUNDED output  → Φ_c = 1 ✓
```

The domain IS the circuit boundary. Without it, the circuit is open. The compiler enforces this: if any domain is unbounded, the program does not compile.

### In Practice

Every core monomer (MC_00 to MC_63) has pre-defined domains:
- `ADD8`: input `[0,255] × [0,255]`, output `[0,255]` (wrapping)
- `HASH`: input `String(any)`, output `String(hex, len=64)`
- `IF`: input `{true, false} × Any × Any`, output `Any`

When composing monomers through EVA algebra, the compiler automatically verifies that output domains match input domains of the next stage. If they don't match, the circuit doesn't close.

### You Are the Circuit Designer

Like an electrical engineer who specifies voltage ranges for each component, you define the valid data ranges for your program:

```
// Airplane flight computer domains:
velocity:    [0, 900]    km/h  — commercial aircraft range
altitude:    [0, 15000]  m     — atmospheric flight ceiling
temperature: [-40, 1200] °C    — engine operating range
```

If a calculation produces `velocity = 100,000`, the circuit **doesn't close** because the result violates the declared domain. The compiler rejects it.

**This is the fundamental difference:**
- **Normal software:** calculates 100,000 km/s, stores it, nobody notices until something breaks
- **Digital Circuitality:** the program doesn't compile — the circuit is open

### Domains Are Numeric Ranges, Not Units

`[0, 900]` means "numbers between 0 and 900" — not km/h, not meters, not degrees. Units are the designer's responsibility. The compiler only verifies numeric ranges.

### Precision Is an Engineering Decision

| Monomer Type | Range | Rounding | Certification |
|-------------|-------|----------|---------------|
| U8 (MC_00-07) | [0, 255] | None — wrapping mod 256 | Φ_c = 1 |
| I64 | Full 64-bit | Truncation (7/2 = 3) | Φ_c = 1 |
| F64 (MC_64-71) | IEEE 754 | Floating-point rounding | Φ_c = CONTRACT |

**Need exact decimals?** Use the fixed-point pattern: multiply by 1000, compute in integers, divide at the end. `3.14` becomes `3140`. Zero rounding. Φ_c = 1.

**Need real decimals?** Use F64 extended monomers. Accept CONTRACT certification. IEEE 754 rounding applies (0.1 + 0.2 ≈ 0.30000000000000004).

### Certified Math at Any Precision

Any mathematical function — logarithms, trigonometry, square roots — can be implemented as a certified polymer (Φ_c = 1) using only core monomers with scaled integers.

The designer declares the precision:
```
domain pi_3:  Range [3141, 3142];           // π with 3 decimals
domain pi_6:  Range [3141592, 3141593];     // π with 6 decimals
domain pi_15: Range [3141592653589793, ...]; // π with 15 decimals
```

Like choosing a 12-bit vs 16-bit ADC — the engineer decides the resolution. The "error" is not accidental IEEE 754 rounding. It's the precision you declared in your domain.

**Result:** ln(), sin(), cos(), sqrt() — all certifiable. All deterministic. Same input → same output on every platform, every time.

### How Domains Are Designed Today

1. **Built-in domains** — Core monomers have pre-defined domains (ADD8 accepts [0,255]²)
2. **Guard conditions** — `if (speed > 900) { return error; }` creates a domain boundary
3. **Monomer selection** — choosing bounded operations (u8 arithmetic) vs unbounded
4. **Policy circuits** — PCD programs that validate inputs before processing
5. **TCE verification** — the compiler checks all paths produce values within domains

### Domain Declaration (Planned Syntax)

```pcd
PC flight_computer {
    domain speed: Range [0, 900];
    domain altitude: Range [0, 15000];

    fn calculate_eta(distance, speed) {
        // TCE verifies: speed ∈ [0, 900]
        // result automatically bounded
        return distance / speed;
    }
}
```

---


  
    Get running in 5 minutes
  
  
    Write your first circuit
  
  
    Extended Monomers · Certification Registry · BPU Silicon
  




---

## [Installation] Install brikc or Add Libraries

<!-- Source: installation.mdx -->

## Two Ways to Use BRIK-64

**Option A — Install the `brikc` compiler** if you want to write PCD programs and get formal Φ_c = 1 certification, auto-generated test suites, and cross-compilation to any target.

**Option B — Add a library** if you want to use the 128 monomers (64 Core + 64 Extended) inside your existing Rust, JavaScript, or Python codebase right now — no new language required.

---

## Option A — Install the `brikc` Compiler

**One-line install (recommended):**

```bash
curl -fsSL https://brik64.dev/install | bash
```

Supported platforms: **macOS** (arm64, x86_64) and **Linux** (x86_64, arm64). The script auto-detects your platform and installs the latest `brikc` binary to `/usr/local/bin/`.


  
    ```bash
    curl -fsSL https://brik64.dev/install | bash
    ```
    Installs the latest `brikc` binary to `/usr/local/bin/`.
  
  
    ```bash
    curl -Lo brikc https://github.com/brik64/brik64-dist-releases/releases/download/v4.0.0-beta.2/brikc-v4.0.0-beta.2-linux-x86_64
    chmod +x brikc
    sudo mv brikc /usr/local/bin/
    ```
  
  
    ```bash
    curl -Lo brikc https://github.com/brik64/brik64-dist-releases/releases/download/v4.0.0-beta.2/brikc-v4.0.0-beta.2-macos-arm64
    chmod +x brikc
    sudo mv brikc /usr/local/bin/
    ```
  
  
    ```bash
    curl -Lo brikc https://github.com/brik64/brik64-dist-releases/releases/download/v4.0.0-beta.2/brikc-v4.0.0-beta.2-macos-x86_64
    chmod +x brikc
    sudo mv brikc /usr/local/bin/
    ```
  


### Verify the installation

```bash
brikc --version
# brikc v4.0.0-beta.2 (fixpoint: 7229cfcde9...)

brikc check --self
# ✓ Self-compilation fixpoint verified
# ✓ Hash: 7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95

brikc catalog
# Lists all 128 monomers with signatures
```

### Your first program

```bash
cat > hello.pcd << 'EOF'
PC hello {
    let _ = MC_58.WRITE("Hello, world!\n");
    OUTPUT 0;
}
EOF

# Compile to native ELF
brikc compile hello.pcd && ./a.out
# Hello, world!

# Compile to JavaScript with auto-generated test suite
brikc compile hello.pcd --target js --emit-tests
# build/hello.js  +  build/hello.spec.js
```


`--emit-tests` generates a complete test suite alongside your code — property tests, boundary tests, and regression anchors derived from the formal proof. See [Testing & Debugging](/pcd/testing).


---

## Option B — BRIK-64 Libraries

Use the 128 monomers (64 Core + 64 Extended) inside your existing project. No new language, no compiler install required.


Library usage gives you Digital Circuitality as a methodology — finite operations, deterministic behavior, explicit composition. Formal Φ_c certification, auto-generated test suites, and registry badges require the PCD compiler pipeline.


  
    ```bash
    cargo add brik64-core
    ```
    ```rust
    use brik64_core::{mc, eva};

    // Arithmetic — saturating, never panics
    let sum  = mc::arithmetic::add8(200, 100);   // 255
    let (q, r) = mc::arithmetic::div8(17, 5);    // (3, 2)

    // Crypto
    let hash = mc::crypto::sha256(b"hello");

    // EVA composition
    let pipeline = eva::seq(
        |x| mc::arithmetic::add8(x, 10),
        |x| mc::arithmetic::mul8(x, 2),
    );
    ```
    [crates.io/crates/brik64-core](https://crates.io/crates/brik64-core)
  
  
    ```bash
    npm install @brik64/core
    # pnpm add @brik64/core
    # yarn add @brik64/core
    ```
    ```typescript
    import { mc, eva } from '@brik64/core';

    const sum    = mc.arithmetic.add8(200, 100);    // 255
    const [q, r] = mc.arithmetic.div8(17, 5);       // [3, 2]
    const hash   = await mc.crypto.sha256(
      new TextEncoder().encode('hello')
    );

    const pipeline = eva.seq(
        x => mc.arithmetic.add8(x, 10),
        x => mc.arithmetic.mul8(x, 2),
    );
    ```
    [npmjs.com/package/@brik64/core](https://www.npmjs.com/package/@brik64/core) · Node.js & browsers · Full TypeScript types
  
  
    ```bash
    pip install brik64
    # uv add brik64
    # poetry add brik64
    ```
    ```python
    from brik64 import mc, eva

    total    = mc.arithmetic.add8(200, 100)     # 255
    q, r     = mc.arithmetic.div8(17, 5)        # (3, 2)

    pipeline = eva.pipeline(
        lambda x: mc.arithmetic.add8(x, 10),
        lambda x: mc.arithmetic.mul8(x, 2),
    )
    ```
    [pypi.org/project/brik64/](https://pypi.org/project/brik64/) · Python 3.10+ · No dependencies
  


---

## Next Steps


  
    Write and compile your first PCD program in 5 minutes.
  
  
    Step-by-step introduction to PCD syntax and certified compilation.
  
  
    How auto-generated test suites work and what Extended monomers require.
  
  
    Complete reference for MC_00–MC_127 with signatures and examples.
  



---

## [Quickstart] Get Started in 5 Minutes

<!-- Source: quickstart.mdx -->

## Install brikc

```bash
curl -fsSL https://brik64.dev/install | sh
```

Or download from [github.com/brik64/dist/releases](https://github.com/brik64/dist/releases).

## Write your first circuit

Create `hello.pcd`:

```pcd
// hello.pcd — your first BRIK-64 circuit
let name = "Digital Circuitality";
let greeting = MC_40.CONCAT("Hello, ", name);
MC_58.WRITE(greeting);
```

## Compile and run

```bash
brikc run hello.pcd
# Hello, Digital Circuitality!
```

## Verify the circuit

```bash
brikc check hello.pcd
# ✓ Circuit closed: Φ_c = 1.000
# ✓ All monomers verified
```

## Lift existing code to PCD

Already have code? The Lifter reverse-compiles it to PCD (10 languages supported):

```bash
brikc lift app.js -o app.pcd
```

## Full roundtrip: Lift, Check, Build, Execute

```bash
# 1. Lift any source to PCD (JS, TS, TSX, Python, Rust, C, Go, COBOL, PHP, Java)
brikc lift calcPrice.js -o calcPrice.pcd

# 2. Verify circuit closure
brikc check calcPrice.pcd

# 3. Build to any target language
brikc build calcPrice.pcd -t python -o dist/

# 4. Execute certified output
python3 dist/calcPrice.py
```

The SSA transform handles variable reassignment automatically, so real-world code like `total = total + tax` lifts cleanly.


---

## [CLI] Overview

<!-- Source: cli/overview.mdx -->

## Commands

| Command | Description |
|---------|-------------|
| `brikc build` | Compile to native binary |
| `brikc run` | Compile and execute |
| `brikc check` | Verify TCE metrics |
| `brikc fmt` | Format PCD source |
| `brikc emit` | Emit to backend (Rust/JS/Python) |
| `brikc bir` | Emit BIR bytecode |
| `brikc repl` | Interactive REPL |
| `brikc lsp` | Start LSP server |
| `brikc --version` | Show version and fixpoint hash |


---

## [CLI] Commands Reference

<!-- Source: cli/commands.mdx -->

## brikc build

```bash
brikc build <file.pcd> -o <output>
brikc build --target wasm32 hello.pcd
```

## brikc run

```bash
brikc run <file.pcd> [-- <args...>]
```

## brikc check

```bash
brikc check <file.pcd>
# ✓ Circuit closed: Φ_c = 1.000
```

## brikc fmt

```bash
brikc fmt <file.pcd>           # Format in place
brikc fmt --check <file.pcd>   # Check only
```

## brikc emit

```bash
brikc emit --rust <file.pcd> -o output.rs
brikc emit --js <file.pcd> -o output.js
brikc emit --python <file.pcd> -o output.py
```

## brikc repl

```bash
brikc repl
# brik> let x = MC_00.ADD8(10, 20);
# brik> MC_40.WRITE(x);
# 30
```

## brikc compile

```bash
brikc compile --input <file.pcd> --target <rust|javascript|typescript|python|c|cpp|go|cobol|php|java|swift|wasm|native> --output <file>
```

Main compilation command. Compiles a PCD source file to the specified target language.

## brikc catalog list

```bash
brikc catalog list
```

List all 128 monomers (64 Core + 64 Extended) with their MC codes, names, and families.

## brikc catalog show

```bash
brikc catalog show MC_XX
```

Show detailed information for a specific monomer: signature, domain, return type, and Coq proof status.

## brikc check

```bash
brikc check <file.pcd>
# ✓ Circuit closed: Φ_c = 1.000
```

Type-check a PCD file without running it. Reports CMF metrics and any type errors.

## brikc lsp

```bash
brikc lsp --stdio
```

Supports: syntax highlighting, diagnostics, hover docs, go-to-definition, completion.

## brikc lift

```bash
brikc lift <file>
brikc lift app.js --output app.pcd
brikc lift script.py --format json --min-liftability 0.5
brikc lift main.c --language c --domains
```

Reverse-compile source code to PCD. Auto-detects language from file extension. Supports 10 languages: JavaScript, TypeScript, TSX, JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java.

| Flag | Description |
|------|------------|
| `--language <lang>` | Override language detection |
| `--output <file>` | Write to file instead of stdout |
| `--format <fmt>` | `text` (default) or `json` |
| `--min-liftability <0.0-1.0>` | Minimum liftability threshold |
| `--domains` | Include closure domain annotations |

See [Lifter Usage](/lifter/usage) for full documentation.

## brikc mcp-server

```bash
brikc mcp-server
brikc mcp-server --transport sse --port 3100
```

Start the BRIK-64 MCP server for integration with AI coding tools (Claude Code, Cursor, Windsurf). Exposes `brik64.discover` and `brik64.execute` tools.

See [MCP Integration](/mcp/overview) for configuration guides.

## brikc (no arguments)

```bash
brikc
```

Running `brikc` without arguments displays an interactive banner with version info, self-compilation hash, and available commands.

## brikc transpile

Convert an entire directory of source code from one language to another with certification.

```bash
brikc transpile <input-dir> --to <target> [--output <dir>] [--from <lang>] [--force] [--certify]
```

**Arguments:**
- `<input-dir>` — Directory containing source files
- `--to <target>` — Target language (rust, js, python, c, cpp, go, cobol, php, java, typescript, swift, bir, native, wasm32)
- `--output <dir>` — Output directory (default: ./transpiled)
- `--from <lang>` — Source language override (auto-detected from extensions)
- `--force` — Ignore cache, re-transpile all files
- `--certify` — Run Φ_c certification (default: true)

**Example:**
```bash
brikc transpile ./src/ --to rust --output ./dist/
```

## brikc link

Link multiple PCD files into a single output.

```bash
brikc link <input-dir> -o <output> [--bundle] [-t <target>]
```

**Arguments:**
- `<input-dir>` — Directory containing .pcd files
- `-o <output>` — Output file path
- `--bundle` — Generate a single bundled file in the target language
- `-t <target>` — Target language (required with --bundle)

**Example:**
```bash
# Concatenate PCDs
brikc link ./pcd/ -o linked.pcd

# Bundle to single JS file
brikc link ./pcd/ --bundle -t js -o bundle.js
```

## brikc lift (directory mode)

Lift all source files in a directory to PCD blueprints.

```bash
brikc lift <directory> -o <output-dir>
```

When the input is a directory (not a file), brikc scans for all supported source files and lifts each one.

**Example:**
```bash
brikc lift ./src/ -o ./pcd/
```


---

## [PCD] Syntax Reference

<!-- Source: pcd/syntax.mdx -->

# PCD Syntax Reference

PCD (Printed Circuit Description) is a Turing-complete language where programs are circuit schematics. Every valid PCD program has Thermodynamic Coherence Φ_c = 1: no dead branches, no unreachable code, no undefined flows.


PCD programs are verified before execution. A program that fails coherence verification (`Φ_c ≠ 1`) is rejected at compile time — not at runtime.


## Program Structure

Every PCD program is a named circuit block:

```pcd
PC circuit_name {
    // functions and logic here
    OUTPUT result;
}
```

The `OUTPUT` directive marks the final value emitted by the circuit. It is mandatory.

```pcd
PC add_two {
    let a = 10;
    let b = 32;
    OUTPUT a + b;
}
```

---

## Variables

### Let Bindings

Variables are declared with `let`. All bindings are immutable by default — rebinding creates a new SSA slot:

```pcd
let x = 42;
let name = "hello";
let flag = true;
```

### Loop-Carried Variables

To mutate a variable across loop iterations, rebind it in the same scope using the same name:

```pcd
let count = 0;
loop(10) as i {
    let count = count + 1;
}
```


The PCD planner uses SSA (Static Single Assignment) form. When rebinding inside a `loop(N)`, always use the same variable name to ensure the planner recognizes it as a loop-carried variable, not a new slot.


### Type Annotations

Types are optional — the planner infers them:

```pcd
let x = 0;          // i64
let b = true;       // bool
let s = "text";     // string
let arr = [1,2,3];  // array
```

Explicit type annotations are not required by the parser, but the planner enforces type consistency.

---

## Functions

### Function Declaration

```pcd
fn add(a, b) {
    return a + b;
}
```

### Recursive Functions

```pcd
fn factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
```


Recursion depth is limited by `MAX_DEPTH = 256`. Deep recursive programs must be rewritten iteratively using `loop(N)`.


### Multiple Return Values via Tuple

```pcd
fn divmod(a, b) {
    let (q, r) = MC_03.DIV8(a, b);
    return (q, r);
}
```

### Closures

Closures are anonymous functions that capture their enclosing scope:

```pcd
let multiplier = fn(x) { x * 3 };
let result = multiplier(7);   // 21
```

Closures can be passed as arguments:

```pcd
fn apply(f, x) {
    return f(x);
}
let double = fn(n) { n * 2 };
let result = apply(double, 5);   // 10
```

---

## Conditionals

### if / else

```pcd
if (x > 0) {
    OUTPUT "positive";
} else {
    OUTPUT "non-positive";
}
```

### if / else if chains

```pcd
if (score >= 90) {
    let grade = "A";
} else if (score >= 80) {
    let grade = "B";
} else if (score >= 70) {
    let grade = "C";
} else {
    let grade = "F";
}
```


All branches of an `if/else` must be reachable and terminate coherently. The TCE verifies that Φ_c = 1 across all control paths.


---

## Loops

### loop(N) — Recommended

The `loop(N)` construct is the primary iteration primitive in PCD. It is deterministic, bounded, and always terminates:

```pcd
loop(10) as i {
    // i goes from 0 to 9
    let result = i * i;
}
```

The `as i` clause is optional when the index is not needed:

```pcd
let sum = 0;
loop(5) {
    let sum = sum + 1;
}
```

**Loop over array length:**

```pcd
let arr = [10, 20, 30, 40];
let len = MC_43.LEN(arr);
loop(len) as i {
    let elem = arr[i];
}
```

### while — Supported with Caution

`while` loops are syntactically supported but carry a known SSA limitation in the current planner:

```pcd
let pos = 0;
let max = MC_43.LEN(text);
while (pos < max) {
    let ch = MC_45.CHAR_AT(text, pos);
    let pos = pos + 1;
}
```


**WhileLoop SSA Bug**: The planner captures the version of loop-carried variables *before* the body, not after. This can cause variables to not update correctly across iterations. **Always prefer `loop(N)` over `while`** in production PCD programs. Use `loop(N) as i { if (cond) { body } }` as a safe alternative.


**Safe while-equivalent pattern:**

```pcd
let pos = 0;
loop(max_len) as _i {
    if (pos < max) {
        let ch = MC_45.CHAR_AT(text, pos);
        let pos = pos + 1;
    }
}
```

---

## Pattern Matching

### match expression

```pcd
let result = match x {
    0 => "zero",
    1 => "one",
    2 => "two",
    _ => "other"
};
```

Match on strings:

```pcd
let action = match command {
    "add"    => do_add(a, b),
    "sub"    => do_sub(a, b),
    "mul"    => do_mul(a, b),
    _        => "unknown command"
};
```

Match as a statement:

```pcd
match status {
    200 => log("OK"),
    404 => log("Not Found"),
    500 => log("Server Error"),
    _   => log("Unknown")
}
```

---

## Structs

### Definition

```pcd
struct Point {
    x: i64,
    y: i64
}
```

### Construction

```pcd
let p = Point { x: 10, y: 20 };
```

### Field Access

```pcd
let px = p.x;
let py = p.y;
```

### Structs in Functions

```pcd
struct Rect {
    width: i64,
    height: i64
}

fn area(r) {
    return r.width * r.height;
}

let r = Rect { width: 5, height: 8 };
let a = area(r);   // 40
```

---

## Try / Catch

Error handling in PCD is statement-level (not expression-level):

```pcd
try {
    let data = read_file("input.txt");
    let parsed = parse(data);
    OUTPUT parsed;
} catch (err) {
    OUTPUT "error: " + err;
}
```


`try/catch` is a statement construct in PCD. You cannot use it inline as part of an expression like `let x = try { ... }`. Assign the result inside the try/catch body instead.


Nested try/catch:

```pcd
try {
    try {
        let result = risky_op();
    } catch (inner_err) {
        let result = fallback_op();
    }
    OUTPUT result;
} catch (outer_err) {
    OUTPUT "fatal: " + outer_err;
}
```

---

## Imports

### Relative Import

```pcd
import "stdlib/math.pcd";
import "stdlib/string.pcd";
```

### Import with Alias

```pcd
import "brikc.pcd" as compiler;

let result = compiler.compile(source);
```

### Selective Import

```pcd
import "stdlib/math.pcd" { abs, min, max };
```

### Circular Import Detection

The planner detects circular imports at compile time and rejects them. Circular dependencies must be broken by extracting shared code into a third module.

---

## Monomer Calls

Monomers are the 64 Core atomic operations (plus 64 Extended) of the BRIK-64 architecture. They are called with the `MC_XX.NAME(args)` syntax:

### Arithmetic Family (MC_00–MC_07)

```pcd
let sum  = MC_00.ADD8(a, b);
let diff = MC_01.SUB8(a, b);
let prod = MC_02.MUL8(a, b);
let (q, r) = MC_03.DIV8(a, b);   // returns Tuple!
let rem  = MC_04.MOD8(a, b);
let neg  = MC_05.NEG8(a);
let abs  = MC_06.ABS8(a);
let pow  = MC_07.POW8(base, exp);
```


`MC_03.DIV8` returns a **Tuple** `(quotient, remainder)`, not a single value. Always destructure it: `let (q, r) = MC_03.DIV8(a, b)`.


### Logic Family (MC_08–MC_15)

```pcd
let and_r = MC_08.AND8(a, b);
let or_r  = MC_09.OR8(a, b);
let xor_r = MC_10.XOR8(a, b);
let not_r = MC_11.NOT8(a);
let shl   = MC_12.SHL8(a, n);
let shr   = MC_13.SHR8(a, n);
```

### Memory Family (MC_16–MC_23)

```pcd
let arr  = MC_16.ALLOC(size);
let val  = MC_17.LOAD(arr, idx);
let arr2 = MC_18.STORE(arr, idx, val);
let len  = MC_19.LEN_MEM(arr);
```

### Control Family (MC_24–MC_31)

```pcd
let r = MC_24.IF(cond, then_val, else_val);
let r = MC_25.CALL(fn_ref, arg);
```

### String Family (MC_40–MC_47)

```pcd
let joined = MC_40.CONCAT(a, b);
let parts  = MC_41.SPLIT(text, delimiter);
let sub    = MC_42.SUBSTR(text, start, len);
let slen   = MC_43.LEN(text);
let upper  = MC_44.UPPER(text);
let ch     = MC_45.CHAR_AT(text, idx);
let lower  = MC_46.LOWER(text);
let trimmed = MC_47.TRIM(text);
```

### Crypto Family (MC_48–MC_55)

```pcd
let hash   = MC_48.HASH(data);
let hmac   = MC_49.HMAC(key, data);
let enc    = MC_50.ENCRYPT(key, data);
let dec    = MC_51.DECRYPT(key, data);
```

### I/O Family (MC_56–MC_63)

```pcd
let data   = MC_56.READ(path);
let _      = MC_57.WRITE_FILE(path, data);
let _      = MC_58.WRITE(text);       // stdout
let input  = MC_59.READ_LINE();       // stdin
let env    = MC_63.ENV("ARGV_1");     // argv[1] in native ELF
```


`MC_63.ENV("ARGV_1")` in a **native ELF** reads `argv[1]` from the process arguments, not from environment variables. In non-native backends it reads the environment variable named `ARGV_1`.


---

## Operators

### Arithmetic

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `a + b` |
| `-` | Subtraction | `a - b` |
| `*` | Multiplication | `a * b` |
| `/` | Integer division | `a / b` |
| `%` | Modulo | `a % b` |

### Comparison

| Operator | Description |
|----------|-------------|
| `==` | Equal |
| `!=` | Not equal |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal |
| `>=` | Greater than or equal |

### Logical

| Operator | Description |
|----------|-------------|
| `&&` | Logical AND |
| `\|\|` | Logical OR |
| `!` | Logical NOT |

### String Concatenation

```pcd
let greeting = "Hello, " + name + "!";
```

---

## String Literals and Escapes

PCD strings are UTF-8. Supported escape sequences:

| Escape | Meaning |
|--------|---------|
| `\n` | Newline |
| `\t` | Tab |
| `\\` | Backslash |
| `\"` | Double quote |

```pcd
let msg = "Line 1\nLine 2\nLine 3";
let path = "C:\\Users\\admin";
let quoted = "He said \"hello\"";
```


Binary literals (`0b1010`) are **not supported** by the PCD parser. Use decimal or hexadecimal integer literals instead.


---

## OUTPUT Directive

`OUTPUT` marks the circuit's terminal value. It is equivalent to a `return` at the circuit level:

```pcd
PC compute {
    let result = 2 + 2;
    OUTPUT result;
}
```

Multiple code paths can all lead to `OUTPUT`:

```pcd
PC classify {
    let n = MC_63.ENV("ARGV_1");
    if (n > 0) {
        OUTPUT "positive";
    } else if (n < 0) {
        OUTPUT "negative";
    } else {
        OUTPUT "zero";
    }
}
```


Each `OUTPUT` statement terminates its control path. The TCE ensures that all control paths in a circuit eventually reach an `OUTPUT` or a `return`.


---

## Parser Limits

| Limit | Value | Notes |
|-------|-------|-------|
| `MAX_DEPTH` | 256 | Maximum nesting depth for AST nodes |
| Binary literals | Not supported | Use decimal/hex only |
| `while` loops | Use with caution | WhileLoop SSA bug in current planner |
| Recursion | Depth ≤ 256 | Use iterative `loop(N)` for deep recursion |
| Max call depth | 4096 (BIR) | Increased for emitter recursion |

---

## Complete Example: Tokenizer

This example from `brikc.pcd` shows real PCD patterns — `loop(N)` with loop-carried vars, monomer calls, and early `return`:

```pcd
fn scan_word(text, pos, max_len) {
    let start = pos;
    loop(max_len) as i {
        if (pos >= max_len) {
            return MC_42.SUBSTR(text, start, pos - start);
        }
        let ch = MC_45.CHAR_AT(text, pos);
        if (is_alpha(ch) || is_digit(ch) || ch == "_") {
            let pos = pos + 1;
        } else {
            return MC_42.SUBSTR(text, start, pos - start);
        }
    }
    return MC_42.SUBSTR(text, start, pos - start);
}
```

Key patterns demonstrated:
- `loop(max_len) as i` bounds the scan (no `while`)
- `let pos = pos + 1` is a loop-carried rebinding
- `MC_45.CHAR_AT` and `MC_42.SUBSTR` are string monomers
- Multiple `return` paths all produce coherent values



---

## [PCD] Type System

<!-- Source: pcd/types.mdx -->

# PCD Type System

PCD uses a structural type system with inference. The planner transforms programs into SSA (Static Single Assignment) form before type checking. Types flow through the circuit — the TCE (Thermodynamic Coherence Engine) verifies that types are consistent across all paths before Φ_c = 1 can be certified.


PCD does not require explicit type annotations. The planner infers all types from usage. Type errors are caught at compile time, before any code generation.


---

## Primitive Types

### `i64` — Default Integer

The default integer type in PCD. All integer literals are `i64` unless used as monomer arguments (see `u8` below):

```pcd
let x = 42;          // i64
let y = -100;        // i64
let z = 0;           // i64
```

Range: −9,223,372,036,854,775,808 to 9,223,372,036,854,775,807.

Arithmetic operations on `i64` values use standard 64-bit signed integer semantics. Overflow is not trapped — it wraps.

```pcd
let a = 1000000000;
let b = a * a;    // 1_000_000_000_000_000_000 (fits in i64)
```

### `u8` — Monomer Argument Type

`u8` is the type expected by most arithmetic and logic monomers. The planner automatically coerces `i64` and `bool` values to `u8` at monomer call boundaries:

```pcd
let a = 10;          // i64
let b = 20;          // i64
let c = MC_00.ADD8(a, b);   // a and b coerced to u8 at call site
// c is Value::I64 (monomers return i64, not u8)
```


Component monomers **always return `Value::I64`**, not `Value::U8`. Even though `ADD8` works on 8-bit operands internally, the return value is always widened to `i64`. The only exception is `MC_03.DIV8` which returns a `Tuple`.


Explicit `u8` coercion is rarely needed — the planner handles it at monomer boundaries. However, control monomers (MC_24–MC_31) are an exception: `MC_24.IF` requires a `bool` condition, and the planner preserves `bool` values for these monomers rather than coercing them to `u8`.

### `bool` — Boolean

Boolean literals are `true` and `false`:

```pcd
let flag = true;
let done = false;
```

In arithmetic and logic monomers, `bool` is coerced to `u8`: `true → 1`, `false → 0`.

In control monomers (id 24–31), `bool` is preserved as-is.

Comparison operators produce `bool`:

```pcd
let gt = a > b;    // bool
let eq = a == b;   // bool
```

Logical operators operate on `bool`:

```pcd
let both = flag1 && flag2;   // bool
let either = flag1 || flag2; // bool
let inv = !flag;             // bool
```

**Bool ↔ i64 coercion in comparisons**: The planner handles mixed `bool`/`i64` comparisons in `CmpEq`:

```pcd
let result = MC_00.ADD8(1, 1);   // returns i64(2)
let check = (result == 2);        // i64 vs i64 → bool (OK)
let check2 = (flag == 1);         // bool vs i64 → coerced comparison (OK)
```

### `string` — UTF-8 Text

Strings are UTF-8 encoded, immutable values:

```pcd
let s = "hello, world";
let multiline = "line1\nline2\nline3";
```

String operations are performed via the String monomer family (MC_40–MC_47):

```pcd
let len  = MC_43.LEN(s);             // i64
let sub  = MC_42.SUBSTR(s, 0, 5);   // string
let cat  = MC_40.CONCAT(s, "!");     // string
let ch   = MC_45.CHAR_AT(s, 0);     // string (single character)
let up   = MC_44.UPPER(s);          // string
```

The `+` operator is sugar for `MC_40.CONCAT`:

```pcd
let greeting = "Hello, " + name + "!";
// equivalent to:
let greeting = MC_40.CONCAT(MC_40.CONCAT("Hello, ", name), "!");
```

---

## Composite Types

### Array

Arrays are ordered, homogeneous collections. Literal syntax:

```pcd
let nums = [1, 2, 3, 4, 5];
let names = ["alice", "bob", "carol"];
let empty = [];
```

**Indexing** uses bracket notation:

```pcd
let first = nums[0];
let last  = nums[4];
```

**Push** creates a new array (arrays are immutable — push returns a new array):

```pcd
let nums2 = nums.push(6);   // [1, 2, 3, 4, 5, 6]
```

**Length**:

```pcd
let n = MC_43.LEN(nums);    // i64
```

**Iterating over arrays**:

```pcd
let arr = [10, 20, 30];
let len = MC_43.LEN(arr);
let sum = 0;
loop(len) as i {
    let elem = arr[i];
    let sum = sum + elem;
}
```


Array indices must be `i64`. Out-of-bounds access produces an error that can be caught with `try/catch`.


### Tuple

Tuples are fixed-size heterogeneous collections. They are primarily used for multiple return values:

```pcd
let pair = (10, "hello");
let triple = (1, 2, 3);
```

**Destructuring**:

```pcd
let (a, b) = (10, 20);
let (q, r) = MC_03.DIV8(17, 5);    // q=3, r=2
```

The most important tuple in PCD is the return value of `MC_03.DIV8`:

```pcd
let (quotient, remainder) = MC_03.DIV8(100, 7);
// quotient = 14, remainder = 2
```


`MC_03.DIV8` is the **only monomer** that returns a Tuple. All other arithmetic monomers return `Value::I64`. Forgetting to destructure DIV8's result is a common error.


### Struct

Structs are named product types with labeled fields:

**Definition**:

```pcd
struct Token {
    kind:  i64,
    value: string,
    pos:   i64
}
```

**Construction**:

```pcd
let tok = Token { kind: 1, value: "hello", pos: 0 };
```

**Field Access**:

```pcd
let k = tok.kind;
let v = tok.value;
```

**Structs are values** — they are immutable. To "update" a field, construct a new struct:

```pcd
let tok2 = Token { kind: tok.kind, value: "world", pos: tok.pos + 5 };
```

**Nested Structs**:

```pcd
struct Point { x: i64, y: i64 }
struct Rect { origin: Point, width: i64, height: i64 }

let r = Rect {
    origin: Point { x: 0, y: 0 },
    width:  100,
    height: 50
};
let ox = r.origin.x;
```

---

## Closures

Closures are first-class function values that capture their enclosing scope:

```pcd
let add = fn(x, y) { x + y };
let result = add(3, 4);   // 7
```

**Capturing outer variables**:

```pcd
let factor = 5;
let scale = fn(x) { x * factor };   // captures `factor`
let scaled = scale(10);   // 50
```

**Passing closures as arguments** (higher-order functions):

```pcd
fn apply_twice(f, x) {
    return f(f(x));
}
let triple = fn(n) { n * 3 };
let result = apply_twice(triple, 2);   // 2 * 3 * 3 = 18
```

**Returning closures**:

```pcd
fn make_adder(n) {
    return fn(x) { x + n };
}
let add5 = make_adder(5);
let result = add5(10);   // 15
```

---

## Type Coercion at Monomer Boundaries

The PCD planner applies automatic coercion rules when calling monomers:


  
    When a `bool` is passed to an arithmetic or logic monomer, it is coerced: `true → 1`, `false → 0`.

    ```pcd
    let flag = true;
    let result = MC_00.ADD8(flag, 5);   // true coerced to 1, result = 6
    ```
  
  
    Control monomers like `MC_24.IF` require actual `bool` values. The planner skips `bool → u64` coercion for these monomers.

    ```pcd
    let cond = x > 0;
    let r = MC_24.IF(cond, "pos", "neg");   // cond stays bool
    ```
  
  
    `i64` values passed to arithmetic monomers are narrowed to `u8` (low 8 bits). For values that fit in 0–255 this is lossless.

    ```pcd
    let a = 200;                       // i64
    let b = MC_00.ADD8(a, 55);         // a truncated to u8(200), result = 255 as i64
    ```
  
  
    Regardless of the monomer family, all single-value monomers return `Value::I64`. Only `MC_03.DIV8` returns `Value::Tuple([i64, i64])`.

    ```pcd
    let x = MC_00.ADD8(1, 2);    // Value::I64(3)
    let y = MC_11.NOT8(255);     // Value::I64(0)
    let z = MC_43.LEN("hello"); // Value::I64(5)
    let (q, r) = MC_03.DIV8(10, 3);  // Value::Tuple([I64(3), I64(1)])
    ```
  


---

## SSA Form and the Planner

The PCD planner transforms programs into **SSA (Static Single Assignment)** form before type checking and optimization. Understanding SSA is important for writing correct loop-carried variables.

### SSA Versioning

In SSA form, every assignment creates a new version of a variable:

```pcd
let x = 0;        // x_0
let x = x + 1;   // x_1 = x_0 + 1
let x = x * 2;   // x_2 = x_1 * 2
```

### Loop-Carried Variables

The planner's `bind_let` function always uses **version 0** for loop-carried rebindings. This ensures the variable slot is shared across iterations:

```pcd
let counter = 0;          // counter_0 = 0
loop(10) as i {
    let counter = counter + 1;   // rebinding → same slot (version 0 rule)
}
// counter_0 = 10 after loop
```


If you accidentally introduce a new variable name inside a loop body (different from the outer binding), the planner creates a new SSA slot and the outer variable does not update. Always use the **exact same name** for loop-carried mutations.


### Type Inference in SSA

The planner infers types by propagating them through SSA edges:

1. Literal `42` → `i64`
2. `fn(x, y) { x + y }` — parameters are polymorphic until first use; `+` constrains to `i64`
3. Monomer returns → always `i64` (except DIV8 → `Tuple`)
4. `true`/`false` → `bool`
5. `[...]` → `array` (element type inferred from contents)
6. `(a, b)` → `Tuple` (heterogeneous)

---

## Value Types vs. Reference Semantics

PCD uses **value semantics** for all types. There are no references or pointers. Passing a struct or array to a function copies the value:

```pcd
fn modify(arr) {
    let arr = arr.push(99);   // creates new array
    return arr;
}

let original = [1, 2, 3];
let modified = modify(original);
// original is still [1, 2, 3]
// modified is [1, 2, 3, 99]
```

This property is key to the **determinism guarantee**: PCD programs cannot have aliasing bugs, shared mutable state, or race conditions.


Value semantics is what makes Φ_c = 1 verification tractable. With reference semantics, proving coherence would require alias analysis. With value semantics, the TCE can verify each path independently.


---

## Type Summary Table

| Type | Literal Example | Notes |
|------|----------------|-------|
| `i64` | `42`, `-7`, `0` | Default integer type |
| `u8` | (coerced from i64) | Used at monomer boundaries |
| `bool` | `true`, `false` | Coerced to u8 in arithmetic |
| `string` | `"hello"` | UTF-8, immutable |
| `array` | `[1, 2, 3]` | Homogeneous, value semantics |
| `tuple` | `(a, b)` | Heterogeneous, fixed size |
| `struct` | `Point { x: 0, y: 0 }` | Named fields, value semantics |
| `closure` | `fn(x) { x + 1 }` | First-class function value |
| `Tuple([i64, i64])` | (DIV8 return) | Only from `MC_03.DIV8` |



---

## [PCD] Monomer Reference

<!-- Source: pcd/monomers.mdx -->

# Monomer Reference

All 128 monomers organized by family (64 Core + 64 Extended). Each entry includes the exact signature, domain constraints, return type, edge cases, and usage examples.


**All monomers return `Value::I64`** unless explicitly noted. The only exception is `MC_03.DIV8` which returns `Value::Tuple([i64, i64])`.

**Argument coercion:** When passing `i64` to arithmetic/logic monomers, values are narrowed to `u8` (low 8 bits). `bool` values are coerced to `u8` (`true→1`, `false→0`). Control monomers (MC_24–MC_31) preserve `bool` as-is.


---

## Family 0: Arithmetic (MC_00 – MC_07)

All arithmetic monomers operate on 8-bit unsigned values with saturation semantics (results clamped to 0–255).

### MC_00 — ADD8

**Signature:** `ADD8(a: u8, b: u8) → i64`

Saturating addition. Result is `min(a + b, 255)`.

```pcd
let r = MC_00.ADD8(100, 50);   // 150
let s = MC_00.ADD8(200, 100);  // 255 (saturates, does NOT overflow)
let z = MC_00.ADD8(0, 0);      // 0
```

**Edge cases:**
- `ADD8(255, 1)` → `255` (saturation)
- `ADD8(0, 0)` → `0`

---

### MC_01 — SUB8

**Signature:** `SUB8(a: u8, b: u8) → i64`

Saturating subtraction. Result is `max(a - b, 0)`.

```pcd
let r = MC_01.SUB8(100, 30);   // 70
let z = MC_01.SUB8(5, 10);     // 0 (saturates at zero, no underflow)
```

**Edge cases:**
- `SUB8(0, 255)` → `0` (saturation)
- `SUB8(100, 100)` → `0`

---

### MC_02 — MUL8

**Signature:** `MUL8(a: u8, b: u8) → i64`

Saturating multiplication. Result is `min(a * b, 255)`.

```pcd
let r = MC_02.MUL8(10, 20);    // 200
let s = MC_02.MUL8(20, 20);    // 255 (saturates)
```

**Edge cases:**
- `MUL8(0, anything)` → `0`
- `MUL8(255, 2)` → `255` (saturation)

---

### MC_03 — DIV8

**Signature:** `DIV8(a: u8, b: u8) → Tuple(i64, i64)`

Integer division with remainder. Returns `(quotient, remainder)`.

```pcd
let (q, r) = MC_03.DIV8(17, 5);    // q=3, r=2
let (q2, r2) = MC_03.DIV8(10, 3);  // q2=3, r2=1
```


**Always destructure DIV8.** It is the only monomer that returns a tuple.

**Division by zero** causes a runtime error. Always guard:
```pcd
if (b != 0) {
    let (q, r) = MC_03.DIV8(a, b);
}
```


**Edge cases:**
- `DIV8(0, 5)` → `(0, 0)`
- `DIV8(5, 0)` → **runtime error** (use try/catch or guard)
- `DIV8(255, 1)` → `(255, 0)`

---

### MC_04 — MOD8

**Signature:** `MOD8(a: u8, b: u8) → i64`

Modulo operation. Returns `a % b`.

```pcd
let r = MC_04.MOD8(17, 5);   // 2
let z = MC_04.MOD8(10, 2);   // 0
```

**Edge cases:**
- `MOD8(x, 0)` → **runtime error**
- `MOD8(0, x)` → `0`

---

### MC_05 — NEG8

**Signature:** `NEG8(a: u8) → i64`

Arithmetic negation. Returns `256 - a` (two's complement in u8 range).

```pcd
let r = MC_05.NEG8(1);    // 255
let z = MC_05.NEG8(0);    // 0
```

---

### MC_06 — ABS8

**Signature:** `ABS8(a: u8) → i64`

Absolute value. For u8, this is identity (all values are already non-negative).

```pcd
let r = MC_06.ABS8(42);   // 42
```

---

### MC_07 — POW8

**Signature:** `POW8(base: u8, exp: u8) → i64`

Saturating exponentiation. Result is `min(base^exp, 255)`.

```pcd
let r = MC_07.POW8(2, 7);    // 128
let s = MC_07.POW8(2, 8);    // 255 (saturates)
let z = MC_07.POW8(0, 5);    // 0
let o = MC_07.POW8(5, 0);    // 1
```

---

## Family 1: Logic (MC_08 – MC_15)

Bitwise operations on 8-bit values.

### MC_08 — AND8

**Signature:** `AND8(a: u8, b: u8) → i64`

Bitwise AND.

```pcd
let r = MC_08.AND8(0xFF, 0x0F);   // 15 (0x0F)
let z = MC_08.AND8(0xAA, 0x55);   // 0
```

---

### MC_09 — OR8

**Signature:** `OR8(a: u8, b: u8) → i64`

Bitwise OR.

```pcd
let r = MC_09.OR8(0xF0, 0x0F);   // 255 (0xFF)
```

---

### MC_10 — XOR8

**Signature:** `XOR8(a: u8, b: u8) → i64`

Bitwise XOR.

```pcd
let r = MC_10.XOR8(0xFF, 0xFF);  // 0
let s = MC_10.XOR8(0xAA, 0x55);  // 255
```

---

### MC_11 — NOT8

**Signature:** `NOT8(a: u8) → i64`

Bitwise NOT (complement).

```pcd
let r = MC_11.NOT8(0);     // 255
let s = MC_11.NOT8(255);   // 0
let t = MC_11.NOT8(0xF0);  // 15 (0x0F)
```

---

### MC_12 — SHL8

**Signature:** `SHL8(a: u8, n: u8) → i64`

Left shift by `n` bits, masked to 8 bits.

```pcd
let r = MC_12.SHL8(1, 4);    // 16
let s = MC_12.SHL8(1, 7);    // 128
let z = MC_12.SHL8(1, 8);    // 0 (shifted out)
```

---

### MC_13 — SHR8

**Signature:** `SHR8(a: u8, n: u8) → i64`

Right shift by `n` bits.

```pcd
let r = MC_13.SHR8(128, 4);  // 8
let s = MC_13.SHR8(255, 1);  // 127
```

---

### MC_14 — ROTL8

**Signature:** `ROTL8(a: u8, n: u8) → i64`

Rotate left by `n` bits within 8-bit range.

```pcd
let r = MC_14.ROTL8(0x80, 1);  // 1 (bit wraps around)
```

---

### MC_15 — ROTR8

**Signature:** `ROTR8(a: u8, n: u8) → i64`

Rotate right by `n` bits within 8-bit range.

```pcd
let r = MC_15.ROTR8(1, 1);  // 128 (bit wraps around)
```

---

## Family 2: Memory (MC_16 – MC_23)

Array and memory operations.

### MC_16 — ALLOC

**Signature:** `ALLOC(size: i64) → array`

Creates an array of `size` elements, all initialized to 0.

```pcd
let arr = MC_16.ALLOC(10);   // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
```

---

### MC_17 — LOAD

**Signature:** `LOAD(arr: array, idx: i64) → i64`

Reads element at index `idx` from `arr`.

```pcd
let arr = [10, 20, 30];
let val = MC_17.LOAD(arr, 1);   // 20
```

**Edge case:** `LOAD(arr, -1)` or index ≥ len → runtime error.

---

### MC_18 — STORE

**Signature:** `STORE(arr: array, idx: i64, val: i64) → array`

Returns a new array with element at `idx` replaced by `val`.

```pcd
let arr = [10, 20, 30];
let arr2 = MC_18.STORE(arr, 1, 99);   // [10, 99, 30]
// arr is still [10, 20, 30] (value semantics)
```

---

### MC_19 — LEN_MEM

**Signature:** `LEN_MEM(arr: array) → i64`

Returns the length of the array.

---

### MC_20 — COPY

**Signature:** `COPY(arr: array) → array`

Returns a copy of the array (identity in PCD since all values are immutable).

---

### MC_21 — SWAP

**Signature:** `SWAP(arr: array, i: i64, j: i64) → array`

Returns a new array with elements at indices `i` and `j` swapped.

---

### MC_22 — ZERO

**Signature:** `ZERO(arr: array) → array`

Returns a new array with all elements set to 0.

---

### MC_23 — FENCE

**Signature:** `FENCE() → i64`

Memory barrier / synchronization point. Returns 0. Used to enforce ordering between parallel compositions.

---

## Family 3: Control (MC_24 – MC_31)

Control flow monomers. These preserve `bool` arguments (no u8 coercion).

### MC_24 — IF

**Signature:** `IF(cond: bool, then_val, else_val) → value`

Conditional select. Returns `then_val` if `cond` is true, `else_val` otherwise.

```pcd
let r = MC_24.IF(x > 0, "positive", "non-positive");
```


In most PCD code, you use the `if/else` syntax instead of calling MC_24 directly. The planner desugars `if/else` into MC_24.


---

### MC_25 — CALL

**Signature:** `CALL(fn_ref, arg) → value`

Indirect function call. Used internally by the planner for closure dispatch.

---

### MC_26 — LOOP

**Signature:** `LOOP(n: i64, body_fn) → value`

Internal loop primitive. The `loop(N)` syntax desugars to this.

---

### MC_27 — RET

**Signature:** `RET(val) → value`

Return from function. The `return` keyword desugars to this.

---

### MC_28 — JUMP

**Signature:** `JUMP(target: i64) → value`

Internal jump. Used by the BIR emitter. Not available in PCD source.

---

### MC_29 — HALT

**Signature:** `HALT(code: i64) → void`

Halt execution with exit code. The `OUTPUT` directive desugars to this.

---

### MC_30 — NOOP

**Signature:** `NOOP() → i64`

No operation. Returns 0. Used as placeholder or synchronization point.

---

### MC_31 — YIELD

**Signature:** `YIELD(val) → value`

Yields a value in streaming contexts. Used internally for BIR streaming output.

---

## Family 4: I/O (MC_32 – MC_39)

Input/output operations.

### MC_32 — READ

**Signature:** `READ(fd: i64, buf: array, n: i64) → i64`

Low-level read from file descriptor. Returns bytes read.

---

### MC_33 — WRITE

**Signature:** `WRITE(fd: i64, data: string, len: i64) → i64`

Low-level write to file descriptor. Returns bytes written.

```pcd
let msg = "hello\n";
MC_33.WRITE(1, msg, MC_43.LEN(msg));   // write to stdout (fd=1)
```

---

### MC_34 — OPEN

**Signature:** `OPEN(path: string, flags: i64) → i64`

Open a file. Returns file descriptor. `flags`: 0=read, 1=write, 2=read+write.

---

### MC_35 — CLOSE

**Signature:** `CLOSE(fd: i64) → i64`

Close a file descriptor. Returns 0 on success.

---

### MC_36 — SEEK

**Signature:** `SEEK(fd: i64, offset: i64, whence: i64) → i64`

Seek within a file. `whence`: 0=SET, 1=CUR, 2=END.

---

### MC_37 — FLUSH

**Signature:** `FLUSH(fd: i64) → i64`

Flush file descriptor buffers.

---

### MC_38 — STAT

**Signature:** `STAT(path: string) → i64`

Returns file size in bytes, or -1 if file doesn't exist.

---

### MC_39 — SYNC

**Signature:** `SYNC() → i64`

Sync all file system buffers. Returns 0.

---

## Family 5: String (MC_40 – MC_47)

String manipulation. All string operations return new strings (immutable).

### MC_40 — CONCAT

**Signature:** `CONCAT(a: string, b: string) → string`

Concatenate two strings. The `+` operator on strings is sugar for this.

```pcd
let r = MC_40.CONCAT("hello", " world");   // "hello world"
```

---

### MC_41 — SPLIT

**Signature:** `SPLIT(s: string, delim: string) → array`

Split string by delimiter. Returns array of substrings.

```pcd
let parts = MC_41.SPLIT("a,b,c", ",");   // ["a", "b", "c"]
```

**Edge cases:**
- `SPLIT("", ",")` → `[""]`
- `SPLIT("abc", "")` → `["a", "b", "c"]`

---

### MC_42 — SUBSTR

**Signature:** `SUBSTR(s: string, start: i64, len: i64) → string`

Extract substring starting at `start` with length `len`.

```pcd
let sub = MC_42.SUBSTR("hello world", 6, 5);   // "world"
```

**Edge cases:**
- `start` ≥ string length → empty string
- `start + len` > string length → truncated to available characters

---

### MC_43 — LEN

**Signature:** `LEN(s: string) → i64`

Returns character count of string. Also works on arrays.

```pcd
let n = MC_43.LEN("hello");     // 5
let m = MC_43.LEN([1, 2, 3]);   // 3
let z = MC_43.LEN("");           // 0
```

---

### MC_44 — UPPER

**Signature:** `UPPER(s: string) → string`

Convert to uppercase.

```pcd
let u = MC_44.UPPER("hello");   // "HELLO"
```

---

### MC_45 — CHAR_AT

**Signature:** `CHAR_AT(s: string, idx: i64) → string`

Returns single character at position `idx` as a string.

```pcd
let ch = MC_45.CHAR_AT("hello", 0);   // "h"
let ch2 = MC_45.CHAR_AT("hello", 4);  // "o"
```

**Edge case:** Index out of bounds → runtime error. Always check `MC_43.LEN` first.

---

### MC_46 — LOWER

**Signature:** `LOWER(s: string) → string`

Convert to lowercase.

```pcd
let l = MC_46.LOWER("HELLO");   // "hello"
```

---

### MC_47 — TRIM

**Signature:** `TRIM(s: string) → string`

Remove leading and trailing whitespace.

```pcd
let t = MC_47.TRIM("  hello  ");   // "hello"
```

---

## Family 6: Crypto (MC_48 – MC_55)

Cryptographic operations.

### MC_48 — HASH

**Signature:** `HASH(data: string) → string`

SHA-256 hash. Returns hex string (64 characters).

```pcd
let h = MC_48.HASH("hello");
// "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
```

---

### MC_49 — HMAC

**Signature:** `HMAC(key: string, data: string) → string`

HMAC-SHA256. Returns hex string.

```pcd
let mac = MC_49.HMAC("secret", "message");
```

---

### MC_50 — ENCRYPT

**Signature:** `ENCRYPT(key: string, plaintext: string) → string`

AES-256 encryption. Returns base64-encoded ciphertext.

---

### MC_51 — DECRYPT

**Signature:** `DECRYPT(key: string, ciphertext: string) → string`

AES-256 decryption. Input is base64-encoded ciphertext.

---

### MC_52 — SHA256

**Signature:** `SHA256(data: string) → string`

Alias for MC_48.HASH. SHA-256 hash returning hex string.

---

### MC_53 — RAND

**Signature:** `RAND(max: i64) → i64`

Returns a random integer in `[0, max)`.


Using RAND in a policy circuit will cause Φ_c < 1 because the output is non-deterministic. RAND is intended for non-critical applications only.


---

### MC_54 — SIGN

**Signature:** `SIGN(private_key: string, data: string) → string`

Digital signature (Ed25519). Returns hex-encoded signature.

---

### MC_55 — VERIFY

**Signature:** `VERIFY(public_key: string, data: string, signature: string) → i64`

Verify digital signature. Returns 1 if valid, 0 if invalid.

```pcd
let valid = MC_55.VERIFY(pub_key, message, sig);
if (valid == 1) {
    // signature is valid
}
```

---

## Family 7: System (MC_56 – MC_63)

System operations and I/O.

### MC_56 — READ (file)

**Signature:** `READ(path: string) → string`

Read entire file contents as string.

```pcd
let content = MC_56.READ("input.txt");
let stdin = MC_56.READ("/dev/stdin");
```

**Edge case:** File not found → runtime error (use try/catch).

---

### MC_57 — WRITE_FILE

**Signature:** `WRITE_FILE(path: string, data: string) → i64`

Write string to file. Creates or overwrites. Returns 0 on success.

```pcd
MC_57.WRITE_FILE("output.txt", "hello world");
```

---

### MC_58 — WRITE (stdout)

**Signature:** `WRITE(text: string) → i64`

Write to stdout. Returns bytes written.

```pcd
let _ = MC_58.WRITE("Hello!\n");
```

---

### MC_59 — READ_LINE

**Signature:** `READ_LINE() → string`

Read one line from stdin (without trailing newline).

```pcd
let line = MC_59.READ_LINE();
```

---

### MC_60 — EXEC

**Signature:** `EXEC(command: string) → string`

Execute shell command. Returns stdout output.


EXEC is powerful and potentially dangerous. Policy circuits should BLOCK any use of EXEC from untrusted agents.


---

### MC_61 — KILL

**Signature:** `KILL(pid: i64, signal: i64) → i64`

Send signal to process. Returns 0 on success.

---

### MC_62 — SIGNAL

**Signature:** `SIGNAL(sig: i64) → i64`

Register or handle a signal. Returns previous handler status.

---

### MC_63 — ENV

**Signature:** `ENV(name: string) → string`

Read environment variable. Returns empty string if not set.

```pcd
let home = MC_63.ENV("HOME");
let arg1 = MC_63.ENV("ARGV_1");    // argv[1] in native ELF
let arg2 = MC_63.ENV("ARGV_2");    // argv[2] in native ELF
```


In **native ELF** binaries, `MC_63.ENV("ARGV_1")` reads `argv[1]` from process arguments, not environment variables. `ARGV_2` reads `argv[2]`, etc. In non-native backends, it reads the actual environment variable.


---

## Quick Reference Table

| MC | Name | Signature | Returns | Family |
|----|------|-----------|---------|--------|
| 00 | ADD8 | `(u8, u8)` | i64 | Arithmetic |
| 01 | SUB8 | `(u8, u8)` | i64 | Arithmetic |
| 02 | MUL8 | `(u8, u8)` | i64 | Arithmetic |
| 03 | DIV8 | `(u8, u8)` | **Tuple(i64, i64)** | Arithmetic |
| 04 | MOD8 | `(u8, u8)` | i64 | Arithmetic |
| 05 | NEG8 | `(u8)` | i64 | Arithmetic |
| 06 | ABS8 | `(u8)` | i64 | Arithmetic |
| 07 | POW8 | `(u8, u8)` | i64 | Arithmetic |
| 08 | AND8 | `(u8, u8)` | i64 | Logic |
| 09 | OR8 | `(u8, u8)` | i64 | Logic |
| 10 | XOR8 | `(u8, u8)` | i64 | Logic |
| 11 | NOT8 | `(u8)` | i64 | Logic |
| 12 | SHL8 | `(u8, u8)` | i64 | Logic |
| 13 | SHR8 | `(u8, u8)` | i64 | Logic |
| 14 | ROTL8 | `(u8, u8)` | i64 | Logic |
| 15 | ROTR8 | `(u8, u8)` | i64 | Logic |
| 16 | ALLOC | `(i64)` | array | Memory |
| 17 | LOAD | `(array, i64)` | i64 | Memory |
| 18 | STORE | `(array, i64, i64)` | array | Memory |
| 19 | LEN_MEM | `(array)` | i64 | Memory |
| 20 | COPY | `(array)` | array | Memory |
| 21 | SWAP | `(array, i64, i64)` | array | Memory |
| 22 | ZERO | `(array)` | array | Memory |
| 23 | FENCE | `()` | i64 | Memory |
| 24 | IF | `(bool, val, val)` | value | Control |
| 25 | CALL | `(fn, arg)` | value | Control |
| 26 | LOOP | `(i64, fn)` | value | Control |
| 27 | RET | `(val)` | value | Control |
| 28 | JUMP | `(i64)` | value | Control |
| 29 | HALT | `(i64)` | void | Control |
| 30 | NOOP | `()` | i64 | Control |
| 31 | YIELD | `(val)` | value | Control |
| 32 | READ | `(i64, array, i64)` | i64 | I/O |
| 33 | WRITE | `(i64, string, i64)` | i64 | I/O |
| 34 | OPEN | `(string, i64)` | i64 | I/O |
| 35 | CLOSE | `(i64)` | i64 | I/O |
| 36 | SEEK | `(i64, i64, i64)` | i64 | I/O |
| 37 | FLUSH | `(i64)` | i64 | I/O |
| 38 | STAT | `(string)` | i64 | I/O |
| 39 | SYNC | `()` | i64 | I/O |
| 40 | CONCAT | `(string, string)` | string | String |
| 41 | SPLIT | `(string, string)` | array | String |
| 42 | SUBSTR | `(string, i64, i64)` | string | String |
| 43 | LEN | `(string\|array)` | i64 | String |
| 44 | UPPER | `(string)` | string | String |
| 45 | CHAR_AT | `(string, i64)` | string | String |
| 46 | LOWER | `(string)` | string | String |
| 47 | TRIM | `(string)` | string | String |
| 48 | HASH | `(string)` | string | Crypto |
| 49 | HMAC | `(string, string)` | string | Crypto |
| 50 | ENCRYPT | `(string, string)` | string | Crypto |
| 51 | DECRYPT | `(string, string)` | string | Crypto |
| 52 | SHA256 | `(string)` | string | Crypto |
| 53 | RAND | `(i64)` | i64 | Crypto |
| 54 | SIGN | `(string, string)` | string | Crypto |
| 55 | VERIFY | `(string, string, string)` | i64 | Crypto |
| 56 | READ | `(string)` | string | System |
| 57 | WRITE_FILE | `(string, string)` | i64 | System |
| 58 | WRITE | `(string)` | i64 | System |
| 59 | READ_LINE | `()` | string | System |
| 60 | EXEC | `(string)` | string | System |
| 61 | KILL | `(i64, i64)` | i64 | System |
| 62 | SIGNAL | `(i64)` | i64 | System |
| 63 | ENV | `(string)` | string | System |

---

## Extended Monomers (MC_64 – MC_127)


Extended monomers operate under **CONTRACT closure** (Φ_c = CONTRACT), not the Coq-proven Φ_c = 1 of Core monomers. All 64 extended monomers have bounds-checked input validation with **0 panic guarantee** since v4.1.0-beta.1. Programs using Extended monomers receive the **BRIK-64 Open** badge showing verified percentage.


---

## Family 8: Float64 (MC_64 – MC_71)

IEEE 754 double-precision floating-point operations.

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 64 | FADD | `(f64, f64)` | f64 |
| 65 | FSUB | `(f64, f64)` | f64 |
| 66 | FMUL | `(f64, f64)` | f64 |
| 67 | FDIV | `(f64, f64)` | f64 |
| 68 | FABS | `(f64)` | f64 |
| 69 | FNEG | `(f64)` | f64 |
| 70 | FSQRT | `(f64)` | f64 |
| 71 | FMOD | `(f64, f64)` | f64 |

```pcd
// Float64 example
PC circle_area {
    let radius = MC_64.FADD(5.0, 0.0);
    let pi = MC_64.FADD(3.14159, 0.0);
    let r_squared = MC_66.FMUL(radius, radius);
    let area = MC_66.FMUL(pi, r_squared);
}
```

---

## Family 9: Math (MC_72 – MC_79)

Transcendental and mathematical functions.

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 72 | SIN | `(f64)` | f64 |
| 73 | COS | `(f64)` | f64 |
| 74 | TAN | `(f64)` | f64 |
| 75 | EXP | `(f64)` | f64 |
| 76 | LN | `(f64)` | f64 |
| 77 | LOG2 | `(f64)` | f64 |
| 78 | POW | `(f64, f64)` | f64 |
| 79 | CEIL | `(f64)` | f64 |

```pcd
// Math example
PC trig_demo {
    let angle = MC_64.FADD(1.5708, 0.0);
    let sine = MC_72.SIN(angle);
    let cosine = MC_73.COS(angle);
    let power = MC_78.POW(2.0, 10.0);
    let rounded = MC_79.CEIL(3.7);
}
```

---

## Family 10: Network (MC_80 – MC_87)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 80 | TCP_CONN | `(string, i64)` | i64 |
| 81 | TCP_SEND | `(i64, string)` | i64 |
| 82 | TCP_RECV | `(i64, i64)` | string |
| 83 | UDP_SEND | `(string, i64, string)` | i64 |
| 84 | DNS | `(string)` | string |
| 85 | HTTP_GET | `(string)` | string |
| 86 | HTTP_POST | `(string, string)` | string |
| 87 | TLS | `(i64)` | i64 |

---

## Family 11: Graphics (MC_88 – MC_95)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 88 | FB_INIT | `(i64, i64)` | i64 |
| 89 | FB_PIXEL | `(i64, i64, i64)` | i64 |
| 90 | FB_LINE | `(i64, i64, i64, i64, i64)` | i64 |
| 91 | FB_RECT | `(i64, i64, i64, i64, i64)` | i64 |
| 92 | FB_BLIT | `(array, i64, i64)` | i64 |
| 93 | FB_FLIP | `()` | i64 |
| 94 | FB_TEXT | `(i64, i64, string)` | i64 |
| 95 | FB_CLOSE | `()` | i64 |

---

## Family 12: Audio (MC_96 – MC_103)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 96 | AU_INIT | `(i64, i64)` | i64 |
| 97 | AU_PLAY | `(string)` | i64 |
| 98 | AU_STOP | `()` | i64 |
| 99 | AU_MIX | `(array)` | i64 |
| 100 | AU_VOL | `(i64)` | i64 |
| 101 | AU_SEEK | `(i64)` | i64 |
| 102 | AU_STREAM | `(string)` | i64 |
| 103 | AU_CLOSE | `()` | i64 |

---

## Family 13: Filesystem+ (MC_104 – MC_111)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 104 | DIR_LIST | `(string)` | array |
| 105 | DIR_CREATE | `(string)` | i64 |
| 106 | DIR_DELETE | `(string)` | i64 |
| 107 | CHMOD | `(string, i64)` | i64 |
| 108 | CHOWN | `(string, i64)` | i64 |
| 109 | LINK | `(string, string)` | i64 |
| 110 | WATCH | `(string)` | i64 |
| 111 | TEMP | `()` | string |

---

## Family 14: Concurrency (MC_112 – MC_119)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 112 | SPAWN | `(closure)` | i64 |
| 113 | JOIN | `(i64)` | value |
| 114 | CHAN_NEW | `()` | i64 |
| 115 | CHAN_SEND | `(i64, value)` | i64 |
| 116 | CHAN_RECV | `(i64)` | value |
| 117 | MUTEX | `()` | i64 |
| 118 | ATOMIC | `(i64, i64)` | i64 |
| 119 | YIELD | `()` | i64 |

---

## Family 15: Interop/FFI (MC_120 – MC_127)

| MC | Name | Signature | Returns |
|----|------|-----------|---------|
| 120 | FFI_LOAD | `(string)` | i64 |
| 121 | FFI_CALL | `(i64, string, array)` | value |
| 122 | FFI_ALLOC | `(i64)` | i64 |
| 123 | FFI_FREE | `(i64)` | i64 |
| 124 | WASM_EXEC | `(string, string, array)` | value |
| 125 | PY_EVAL | `(string)` | value |
| 126 | JSON_PARSE | `(string)` | value |
| 127 | JSON_EMIT | `(value)` | string |



---

## [PCD] Patterns & Best Practices

<!-- Source: pcd/patterns.mdx -->

# PCD Patterns & Best Practices

This guide covers the patterns that experienced PCD developers use, and the anti-patterns that cause bugs and certification failures.

---

## Pattern 1: The CLI Dispatch Pattern

The canonical way to build a command-line tool in PCD:

```pcd
PC my_tool {
    let cmd = MC_63.ENV("ARGV_1");

    if (cmd == "build") {
        // ... build logic ...
        OUTPUT "OK";
    }

    if (cmd == "check") {
        // ... check logic ...
        OUTPUT "OK";
    }

    if (cmd == "help") {
        let _ = MC_58.WRITE("Usage: my_tool [build|check|help]\n");
        OUTPUT 0;
    }

    // Fallback: always reached if no command matches
    let _ = MC_58.WRITE("Unknown command: " + cmd + "\n");
    OUTPUT 1;
}
```

**Why it works:** Each `if` block ends with `OUTPUT`, so the CMF sees all paths as terminated. The final fallback catches everything else. Φ_c = 1 guaranteed.

---

## Pattern 2: Bounded Iteration (loop(N) + guard)

**Always use `loop(N)` instead of `while`:**

```pcd
// PATTERN: scan until condition, with bounded iteration
fn find_char(text, target) {
    let tlen = MC_43.LEN(text);
    loop(tlen) as i {
        let ch = MC_45.CHAR_AT(text, i);
        if (ch == target) {
            return i;
        }
    }
    return -1;
}
```

For early termination with state:

```pcd
fn scan_until_space(text, start) {
    let tlen = MC_43.LEN(text);
    let pos = start;
    loop(tlen) as _i {
        if (pos < tlen) {
            let ch = MC_45.CHAR_AT(text, pos);
            if (ch == " ") {
                return pos;
            }
            let pos = pos + 1;
        }
    }
    return tlen;
}
```

---

## Pattern 3: Accumulator with Loop-Carried Variables

```pcd
fn sum_array(arr) {
    let n = MC_43.LEN(arr);
    let total = 0;
    loop(n) as i {
        let elem = arr[i];
        let total = total + elem;    // same name = loop-carried
    }
    return total;
}
```

**Critical rule:** The rebinding `let total = total + elem` must use **the exact same variable name** as the outer binding. If you accidentally use a different name, the outer variable won't update.

```pcd
// BAD: typo creates new variable, `total` stays 0
let total = 0;
loop(n) as i {
    let totl = total + arr[i];    // "totl" ≠ "total" → new slot!
}
// total is still 0!
```

---

## Pattern 4: Builder Pattern with Structs

```pcd
struct Config {
    host: string,
    port: i64,
    timeout: i64,
    verbose: i64
}

fn default_config() {
    return Config {
        host: "localhost",
        port: 8080,
        timeout: 30,
        verbose: 0
    };
}

fn with_host(cfg, h) {
    return Config {
        host: h,
        port: cfg.port,
        timeout: cfg.timeout,
        verbose: cfg.verbose
    };
}

fn with_port(cfg, p) {
    return Config {
        host: cfg.host,
        port: p,
        timeout: cfg.timeout,
        verbose: cfg.verbose
    };
}
```

Since structs are values (immutable), each `with_*` function returns a new struct. This is the idiomatic PCD way to configure objects.

---

## Pattern 5: Policy Circuit Completeness

Every policy circuit must cover **all possible inputs**. Use a final fallback:

```pcd
// GOOD: exhaustive — every input produces a result
fn policy(action_type, resource) {
    if (action_type == "write") {
        if (starts_with(resource, "/tmp/")) {
            return "ALLOW";
        }
        return "BLOCK";
    }
    if (action_type == "read") {
        return "ALLOW";
    }
    // CRITICAL: fallback for any unknown action type
    return "BLOCK";
}
```

```pcd
// BAD: what if action_type is "execute"?
fn policy(action_type, resource) {
    if (action_type == "write") {
        return "BLOCK";
    }
    if (action_type == "read") {
        return "ALLOW";
    }
    // No fallback! Φ_c < 1
}
```

---

## Pattern 6: Error Propagation with try/catch

```pcd
fn safe_process(path) {
    try {
        let data = MC_56.READ(path);
        let processed = transform(data);
        return processed;
    } catch (err) {
        return "ERROR: " + err;
    }
}
```

For nested operations:

```pcd
fn pipeline(input_path, output_path) {
    try {
        let raw = MC_56.READ(input_path);
        let parsed = parse(raw);
        let result = compute(parsed);
        MC_57.WRITE_FILE(output_path, stringify(result));
        return "OK";
    } catch (err) {
        return "FAILED: " + err;
    }
}
```

---

## Pattern 7: Map/Filter/Reduce over Arrays

Use stdlib closures for functional array processing:

```pcd
import "stdlib/array.pcd";

fn process_scores(scores) {
    // Filter passing scores
    let passing = filter(scores, fn(s) { s >= 60 });

    // Scale by 1.1 (using integer math: multiply by 11, divide by 10)
    let scaled = map(passing, fn(s) {
        let (q, _r) = MC_03.DIV8(s * 11, 10);
        return q;
    });

    // Sum
    let total = reduce(scaled, 0, fn(acc, s) { acc + s });

    return total;
}
```

---

## Anti-Pattern 1: Using `while` Instead of `loop(N)`

```pcd
// ❌ AVOID: while has SSA bug
let pos = 0;
while (pos < max) {
    let pos = pos + 1;
}

// ✅ USE: loop(N) is correct and deterministic
let pos = 0;
loop(max) as _i {
    if (pos < max) {
        let pos = pos + 1;
    }
}
```

---

## Anti-Pattern 2: Recursive Functions for Large Data

```pcd
// ❌ AVOID: recursion hits MAX_DEPTH=256 and is slow
fn sum_recursive(arr, idx) {
    if (idx >= len(arr)) { return 0; }
    return arr[idx] + sum_recursive(arr, idx + 1);
}

// ✅ USE: iterative loop
fn sum_iterative(arr) {
    let n = len(arr);
    let total = 0;
    loop(n) as i {
        let total = total + arr[i];
    }
    return total;
}
```

Recursion in PCD is limited to 256 depth and incurs high overhead (all ~3592 vars saved per call frame in BIR). Use `loop(N)` for data processing.

---

## Anti-Pattern 3: String Building in Tight Loops

```pcd
// ❌ AVOID: O(N²) — each concat creates a new string
let result = "";
loop(1000) as i {
    let result = result + "x";    // copies entire string each time
}

// ✅ USE: array accumulation + join
let parts = [];
loop(1000) as i {
    let parts = push(parts, "x");
}
let result = join(parts, "");
```

---

## Anti-Pattern 4: Not Destructuring DIV8

```pcd
// ❌ WRONG: result is a Tuple, not an integer
let result = MC_03.DIV8(10, 3);
let doubled = result * 2;     // TYPE ERROR

// ✅ CORRECT: always destructure
let (q, r) = MC_03.DIV8(10, 3);
let doubled = q * 2;
```

---

## Anti-Pattern 5: Missing Fallback in Match

```pcd
// ❌ BAD: what if cmd is "delete"?
let action = match cmd {
    "add" => do_add(),
    "sub" => do_sub()
};

// ✅ GOOD: always include wildcard
let action = match cmd {
    "add" => do_add(),
    "sub" => do_sub(),
    _ => "unknown"
};
```

---

## Anti-Pattern 6: Using `return (X == Y)` in Functions Called with `== 0`

```pcd
// ❌ SUBTLE BUG: comparison result may not behave as expected
fn is_match(a, b) {
    return (a == b);    // BIR may not produce 0/1 as expected
}
if (is_match(x, y) == 0) { ... }

// ✅ SAFE: explicit 0/1 returns
fn is_match(a, b) {
    if (a == b) {
        return 1;
    }
    return 0;
}
```


This is a known PCD pattern requirement. Always use explicit `if/return` for boolean-returning functions instead of `return (X == Y)`. The BIR representation of comparison results is not guaranteed to be exactly 0 or 1 in all contexts.


---

## Performance Tips

1. **Pre-compute lengths:** Call `MC_43.LEN()` once outside the loop, not every iteration
2. **Use `loop(N)` bounds tightly:** `loop(1000)` when you only need 10 iterations wastes cycles
3. **Prefer iterative over recursive:** Each recursive call saves all variables (~3592 in brikc.pcd)
4. **Use array.push + join over string concat:** O(N) instead of O(N²)
5. **Use multi-level division for number→string:** `divmod10_safe` with 10000→1000→100→10 peeling instead of naive loop(20000)

---

## Compilation Target Tips

| Target | Best For | Notes |
|--------|----------|-------|
| Native x86-64 | Production CLIs, policy circuits | Standalone ELF, no dependencies |
| BIR | Development, debugging, bootstrap | Interpreted, slower but inspectable |
| Rust | Integration into Rust projects | Idiomatic output with ownership |
| JavaScript | Browser/Node.js deployment | ES module, tree-shakeable |
| Python | Data science integration | Pure Python, type-annotated |
| WASM | Sandboxed execution | No filesystem by default |



---

## [PCD] Examples

<!-- Source: pcd/examples.mdx -->

# PCD Examples

These examples demonstrate PCD from simple circuits to production-grade programs. Each example includes:
- Complete, runnable code
- Which monomers it uses
- Why Φ_c = 1 (how the TCE certifies it)

---

## Hello World

The simplest circuit. One path, one output, Φ_c = 1 trivially.

```pcd
PC hello {
    OUTPUT "Hello, World!\n";
}
```

**Monomers used:** None
**Φ_c = 1 because:** Single unconditional path from entry to OUTPUT. No branches, no loops, no undefined flows.

---

## Fibonacci (Iterative)

Computing Fibonacci with `loop(N)` — the canonical PCD loop pattern.

```pcd
PC fibonacci {
    let n = 20;
    let a = 0;
    let b = 1;

    loop(n) as i {
        let temp = b;
        let b = a + b;
        let a = temp;
    }

    OUTPUT a;
}
```

**Monomers used:** None (pure arithmetic)
**Φ_c = 1 because:** `loop(N)` always terminates after exactly `n` iterations. Loop-carried variables `a`, `b`, `temp` all use version-0 SSA rebinding. Single OUTPUT at the end.

**With stdlib output formatting:**

```pcd
import "stdlib/fmt.pcd";
import "stdlib/string.pcd";

PC fibonacci_verbose {
    let n = 10;
    let a = 0;
    let b = 1;

    loop(n) as i {
        let msg = format("fib({}) = {}", [i, a]);
        let _ = MC_58.WRITE(msg + "\n");
        let temp = b;
        let b = a + b;
        let a = temp;
    }

    OUTPUT a;
}
```

---

## SHA-256 Hash

Calling the crypto monomer family to hash a string.

```pcd
PC hash_example {
    let data = "BRIK-64 Digital Circuitality";
    let hash = MC_48.HASH(data);
    let result = "SHA256: " + hash;
    OUTPUT result;
}
```

**Monomers used:** `MC_48.HASH`
**Φ_c = 1 because:** Linear path. `MC_48.HASH` is a pure function — same input always produces same output. No branches.

**HMAC example:**

```pcd
PC hmac_example {
    let key  = "secret-key";
    let data = "payload to authenticate";
    let mac  = MC_49.HMAC(key, data);
    OUTPUT "HMAC: " + mac;
}
```

---

## Email Validator

String operations and boolean logic. Shows how `loop(N)` replaces `while` for character scanning.

```pcd
import "stdlib/string.pcd";

PC validate_email {
    let email = MC_63.ENV("ARGV_1");

    // Must contain exactly one @
    let at_count = 0;
    let at_pos = -1;
    let elen = len(email);

    loop(elen) as i {
        let ch = char_at(email, i);
        if (ch == "@") {
            let at_count = at_count + 1;
            let at_pos = i;
        }
    }

    if (at_count != 1) {
        OUTPUT "INVALID: must have exactly one @";
    }

    // Must have local part (before @)
    if (at_pos == 0) {
        OUTPUT "INVALID: empty local part";
    }

    // Must have domain with a dot
    let domain = substr(email, at_pos + 1, elen - at_pos - 1);
    let dot_pos = find(domain, ".");

    if (dot_pos == -1) {
        OUTPUT "INVALID: domain has no dot";
    }

    if (dot_pos == 0) {
        OUTPUT "INVALID: domain starts with dot";
    }

    let dlen = len(domain);
    if (dot_pos == dlen - 1) {
        OUTPUT "INVALID: domain ends with dot";
    }

    OUTPUT "VALID: " + email;
}
```

**Monomers used:** `MC_63.ENV`, `MC_43.LEN` (via stdlib), `MC_45.CHAR_AT` (via stdlib), `MC_42.SUBSTR`, `MC_40.CONCAT`
**Φ_c = 1 because:** Every branch terminates with an `OUTPUT`. The TCE verifies all control paths lead to an output value. No path can fall through without producing a result.


`MC_63.ENV("ARGV_1")` reads `argv[1]` from the process command line when compiled to native ELF. Run as: `./email_validator user@example.com`


---

## Policy Circuit for AI Safety

This is the most important example. It shows how PCD implements **hardware-enforceable AI safety guardrails**. A Policy Circuit intercepts an AI action and verifies it against a set of rules before returning ALLOW or BLOCK.

```pcd
import "stdlib/string.pcd";
import "stdlib/json.pcd";
import "stdlib/array.pcd";

PC ai_policy_circuit {
    // Read the proposed AI action as JSON from stdin
    let action_json = MC_56.READ("/dev/stdin");
    let action = parse(action_json);

    let action_type = get(action, "type");
    let resource    = get(action, "resource");
    let agent_id    = get(action, "agent_id");

    // === RULE 1: No writes to /etc ===
    if (action_type == "write") {
        if (starts_with(resource, "/etc/")) {
            OUTPUT "BLOCK: writes to /etc are forbidden";
        }
    }

    // === RULE 2: No network access outside allowlist ===
    let allowed_domains = ["api.openai.com", "api.anthropic.com", "registry.brik64.dev"];
    if (action_type == "network") {
        let host = get(action, "host");
        let is_allowed = contains(allowed_domains, host);
        if (!is_allowed) {
            OUTPUT "BLOCK: host " + host + " not in allowlist";
        }
    }

    // === RULE 3: No shell execution ===
    if (action_type == "shell") {
        OUTPUT "BLOCK: shell execution is unconditionally forbidden";
    }

    // === RULE 4: Read access allowed for non-secret paths ===
    if (action_type == "read") {
        if (contains(resource, ".env")) {
            OUTPUT "BLOCK: reading .env files is forbidden";
        }
        if (starts_with(resource, "/proc/")) {
            OUTPUT "BLOCK: reading /proc is forbidden";
        }
    }

    // === RULE 5: Verify agent identity ===
    let known_agents = ["claude-code", "codex-cli", "gemini-cli"];
    let is_known = contains(known_agents, agent_id);
    if (!is_known) {
        OUTPUT "BLOCK: unknown agent_id: " + agent_id;
    }

    // All rules passed
    OUTPUT "ALLOW";
}
```

**Monomers used:** `MC_56.READ`, `MC_40.CONCAT`
**Φ_c = 1 because:** Every possible input path terminates at an `OUTPUT "BLOCK: ..."` or the final `OUTPUT "ALLOW"`. The TCE formally verifies there is **no path through this circuit that produces an ambiguous result**. This is what makes PCD Policy Circuits different from `if/else` chains in Python: the compiler *proves* completeness.

**Key insight on AI Safety:**


RLHF teaches an AI to *want* to do the right thing. A Policy Circuit compiled to a BPU (BRIK Processing Unit) chip **physically prevents** the wrong thing. The difference is the difference between education and physics. Education can fail; physics cannot.

When this circuit runs on a BPU, the BLOCK/ALLOW decision happens in silicon, before the action reaches the OS. The AI agent cannot bypass it — not because it's trained not to, but because the hardware doesn't route the request.


---

## Reading Command-Line Arguments

Using `MC_63.ENV("ARGV_1")` in a native ELF to build a command-line tool:

```pcd
import "stdlib/string.pcd";
import "stdlib/math.pcd";
import "stdlib/fmt.pcd";

PC word_counter {
    let filename = MC_63.ENV("ARGV_1");

    // Validate argument
    if (len(filename) == 0) {
        let _ = MC_58.WRITE("Usage: word_counter <filename>\n");
        OUTPUT 1;
    }

    // Read file
    let content = MC_56.READ(filename);
    let clen = len(content);

    if (clen == 0) {
        let _ = MC_58.WRITE("Error: could not read " + filename + "\n");
        OUTPUT 1;
    }

    // Count lines, words, characters
    let lines = 0;
    let words = 0;
    let chars = clen;
    let in_word = false;

    loop(clen) as i {
        let ch = char_at(content, i);
        if (ch == "\n") {
            let lines = lines + 1;
        }
        if (ch == " " || ch == "\n" || ch == "\t") {
            if (in_word) {
                let words = words + 1;
                let in_word = false;
            }
        } else {
            let in_word = true;
        }
    }

    // Count last word if file doesn't end with whitespace
    if (in_word) {
        let words = words + 1;
    }

    let result = format("{} {} {} {}", [lines, words, chars, filename]);
    OUTPUT result;
}
```

**Compile and run:**

```bash
brikc compile word_counter.pcd --target native -o word_counter
./word_counter README.md
# 42 287 1893 README.md
```

---

## Mini HTTP Request Parser

Demonstrates struct usage and complex string parsing:

```pcd
import "stdlib/string.pcd";
import "stdlib/array.pcd";

struct HttpRequest {
    method:  string,
    path:    string,
    version: string,
    headers: array,
    body:    string
}

fn parse_request_line(line) {
    let parts = split(line, " ");
    if (len(parts) < 3) {
        return HttpRequest {
            method: "INVALID",
            path: "/",
            version: "HTTP/1.1",
            headers: [],
            body: ""
        };
    }
    return HttpRequest {
        method:  parts[0],
        path:    parts[1],
        version: parts[2],
        headers: [],
        body:    ""
    };
}

fn parse_headers(lines, start) {
    let headers = [];
    let n = len(lines);
    loop(n) as i {
        let idx = start + i;
        if (idx >= n) {
            return headers;
        }
        let line = lines[idx];
        if (len(trim(line)) == 0) {
            return headers;
        }
        let headers = push(headers, line);
    }
    return headers;
}

PC http_parser {
    let raw = MC_56.READ("/dev/stdin");
    let lines = split(raw, "\n");
    let nlines = len(lines);

    if (nlines == 0) {
        OUTPUT "INVALID: empty request";
    }

    let req = parse_request_line(lines[0]);
    let headers = parse_headers(lines, 1);
    let req2 = HttpRequest {
        method:  req.method,
        path:    req.path,
        version: req.version,
        headers: headers,
        body:    ""
    };

    let summary = req2.method + " " + req2.path + " (" + req2.version + ")";
    OUTPUT summary;
}
```

**Φ_c = 1 because:** Both the early-exit path (`OUTPUT "INVALID: ..."`) and the success path (`OUTPUT summary`) are reachable and terminate. The struct fields are fully initialized on all construction paths.

---

## Self-Hosting: The Compiler Compiles Itself

This is the capstone example. `brikc.pcd` is the BRIK-64 compiler written in PCD. It compiles PCD source to BIR (BRIK Intermediate Representation):

```pcd
// Excerpt from brikc.pcd — the self-hosting compiler
PC brikc {
    // Read source from argv[1] or stdin
    let source = MC_63.ENV("ARGV_1");
    if (len(source) == 0) {
        let source = MC_59.READ_LINE();
    }

    // === Stage 1: Lexer ===
    let tokens = tokenize(source, 0);
    let ntok = MC_43.LEN(tokens);

    // === Stage 2: Parser ===
    let ast = parse(tokens, 0, ntok);

    // === Stage 3: Planner (SSA + type check) ===
    let plan = plan_program(ast);

    // === Stage 4: Emitter (BIR) ===
    let bir_parts = emit(plan);
    let header = bir_parts[0];
    let code    = bir_parts[1];
    let nclines = MC_43.LEN(code);

    // Stream header
    let _ = MC_58.WRITE(header);
    let _ = MC_58.WRITE("\n");

    // Stream code lines
    loop(nclines) as i {
        let line = code[i];
        let _ = MC_58.WRITE(line);
        let _ = MC_58.WRITE("\n");
    }

    OUTPUT 0;
}
```

**The self-compilation fixpoint:**

```bash
# Gen0: Rust compiler compiles brikc.pcd → Gen1 BIR
brikc compile brikc.pcd --emit bir > gen1.bir

# Gen1: Gen1 BIR compiles brikc.pcd → Gen2 BIR
brikc run gen1.bir -- brikc.pcd > gen2.bir

# Gen2: Gen2 BIR compiles brikc.pcd → Gen3 BIR
brikc run gen2.bir -- brikc.pcd > gen3.bir

# Fixpoint: Gen1 == Gen2 == Gen3
sha256sum gen1.bir gen2.bir gen3.bir
# All three: 7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95
```


The verified fixpoint hash is `7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95`. This was proven with 4 generations (Gen1==Gen2==Gen3==Gen4) on 2026-03-10. This hash is the "final seal" of BRIK-64 v2.0.0 — it proves the compiler is its own fixed point.


**Why Φ_c = 1 for the self-hosting compiler:**

The most remarkable property of `brikc.pcd` is that it passes its own coherence verifier. The TCE verifies that:

1. **Tokenizer**: All 1,052 string patterns have bounded scan loops
2. **Parser**: MAX_DEPTH=256 enforces a finite parse tree
3. **Planner**: SSA transformation is total (every variable has a defined version)
4. **Emitter**: BIR output is streamed incrementally (no unbounded accumulation)
5. **All control paths** from the entry to `OUTPUT 0` are reachable and terminate

The fact that the compiler verifies itself is not a coincidence — it is the design goal. A language where the compiler cannot verify its own programs would be incoherent by definition.

---

## Putting It All Together: A Complete PCD Program

This example uses stdlib, structs, closures, and monomers to implement a simple key-value store with persistence:

```pcd
import "stdlib/string.pcd";
import "stdlib/array.pcd";
import "stdlib/json.pcd";
import "stdlib/fmt.pcd";
import "stdlib/io.pcd";

struct KVStore {
    data: array,
    path: string
}

fn kv_load(path) {
    if (exists(path)) {
        let raw = read_file(path);
        let data = parse(raw);
        return KVStore { data: data, path: path };
    }
    return KVStore { data: [], path: path };
}

fn kv_get(store, key) {
    let n = len(store.data);
    loop(n) as i {
        let pair = store.data[i];
        let k = pair[0];
        if (k == key) {
            return pair[1];
        }
    }
    return "";
}

fn kv_set(store, key, value) {
    let n = len(store.data);
    let found = false;
    let new_data = [];

    loop(n) as i {
        let pair = store.data[i];
        let k = pair[0];
        if (k == key) {
            let new_data = push(new_data, [key, value]);
            let found = true;
        } else {
            let new_data = push(new_data, pair);
        }
    }

    if (!found) {
        let new_data = push(new_data, [key, value]);
    }

    return KVStore { data: new_data, path: store.path };
}

fn kv_save(store) {
    let serialized = stringify(store.data);
    write_file(store.path, serialized);
}

PC kvstore_cli {
    let cmd      = MC_63.ENV("ARGV_1");
    let store_path = "store.json";
    let store    = kv_load(store_path);

    if (cmd == "get") {
        let key = MC_63.ENV("ARGV_2");
        let val = kv_get(store, key);
        if (len(val) == 0) {
            OUTPUT "NOT FOUND: " + key;
        }
        OUTPUT val;
    }

    if (cmd == "set") {
        let key = MC_63.ENV("ARGV_2");
        let val = MC_63.ENV("ARGV_3");
        let store2 = kv_set(store, key, val);
        kv_save(store2);
        OUTPUT "OK";
    }

    if (cmd == "list") {
        let n = len(store.data);
        let result = "";
        loop(n) as i {
            let pair = store.data[i];
            let result = result + pair[0] + " = " + pair[1] + "\n";
        }
        OUTPUT result;
    }

    OUTPUT "Usage: kvstore_cli [get|set|list] [key] [value]";
}
```

**Monomers used:** `MC_63.ENV`, `MC_56.READ`, `MC_57.WRITE_FILE`, `MC_43.LEN`, `MC_40.CONCAT`
**Φ_c = 1 because:** Every `if (cmd == "...")` branch either terminates with `OUTPUT` or falls through to the final `OUTPUT "Usage: ..."`. The TCE verifies that no execution path produces an undefined result.


This pattern — a series of `if (cmd == "...")` branches each ending in `OUTPUT`, with a final fallback `OUTPUT` — is the canonical PCD CLI dispatch pattern. It is used in `brikc_cli_dispatch.pcd` itself.




---

## [PCD] Tutorial: Your First PCD Program

<!-- Source: pcd/tutorial.mdx -->

# Tutorial: Your First PCD Program

This tutorial takes you from zero to a working PCD program in 15 minutes. By the end, you will have:
- Installed the `brikc` compiler
- Written and compiled a PCD program
- Understood monomers, EVA composition, and Φ_c certification
- Built a real policy circuit

---

## Step 1: Install brikc

```bash
curl -fsSL https://brik64.dev/install | sh
```

Verify the installation:

```bash
brikc --version
# brikc v4.0.0-beta.2 (fixpoint: 7229cfcd...)

brikc check --self
# ✓ Self-compilation fixpoint verified
```


`brikc check --self` verifies that the compiler binary matches the known fixpoint hash. If this passes, you have an authentic, unmodified BRIK-64 compiler.


---

## Step 2: Hello World

Create a file called `hello.pcd`:

```pcd
PC hello {
    let msg = "Hello, Digital Circuitality!\n";
    let len = MC_43.LEN(msg);
    MC_33.WRITE(1, msg, len);
    OUTPUT 0;
}
```

**What's happening here:**
- `PC hello { ... }` — defines a circuit named "hello"
- `MC_43.LEN(msg)` — calls monomer 43 (String family: LEN) to get the string length
- `MC_33.WRITE(1, msg, len)` — calls monomer 33 (I/O family: WRITE) to write to stdout (fd=1)
- `OUTPUT 0` — the circuit's terminal value (exit code 0)

Run it:

```bash
brikc run hello.pcd
# Hello, Digital Circuitality!
```

Check its certification:

```bash
brikc check hello.pcd
# ✓ Circuit closed: Φ_c = 1.000
# ✓ All monomers verified
# ✓ Ω = 1
```

---

## Step 3: Understanding Monomers

Monomers are the 64 Core atomic operations (plus 64 Extended) of BRIK-64. Think of them as **logic gates** — each one does exactly one thing, and each one is formally verified.

Every monomer is called with `MC_XX.NAME(args)`:

```pcd
PC monomer_demo {
    // Arithmetic: MC_00.ADD8 adds two numbers (saturating at 255)
    let sum = MC_00.ADD8(100, 50);       // 150

    // String: MC_40.CONCAT joins strings
    let greeting = MC_40.CONCAT("sum = ", "150");

    // I/O: MC_58.WRITE prints to stdout
    let _ = MC_58.WRITE(greeting + "\n");

    OUTPUT 0;
}
```

**Key rule:** Monomers always return `Value::I64`, except `MC_03.DIV8` which returns a tuple:

```pcd
let (quotient, remainder) = MC_03.DIV8(17, 5);
// quotient = 3, remainder = 2
```


Forgetting to destructure `MC_03.DIV8` is the #1 beginner mistake. Always use `let (q, r) = MC_03.DIV8(a, b)`.


---

## Step 4: Variables, Functions, and Loops

### Variables

All variables are immutable. "Updating" a variable creates a new binding:

```pcd
let x = 10;
let x = x + 1;    // new SSA slot, x is now 11
```

### Functions

```pcd
fn double(n) {
    return n * 2;
}

fn greet(name) {
    return "Hello, " + name + "!";
}
```

### Loops

**Always prefer `loop(N)` over `while`:**

```pcd
// Good: bounded, deterministic
let sum = 0;
loop(100) as i {
    let sum = sum + i;
}

// With index variable
loop(10) as i {
    let _ = MC_58.WRITE("iteration " + from_int(i) + "\n");
}
```


`while` loops have a known SSA bug in the current planner. Always use `loop(N)` with an `if` guard instead:

```pcd
// Instead of: while (pos < max) { ... }
// Use:
loop(max) as _i {
    if (pos < max) {
        // your logic here
        let pos = pos + 1;
    }
}
```


---

## Step 5: Using the Standard Library

PCD has a standard library written entirely in PCD:

```pcd
import "stdlib/math.pcd";
import "stdlib/string.pcd";
import "stdlib/array.pcd";
import "stdlib/fmt.pcd";

PC stdlib_demo {
    // Math
    let x = abs(-42);           // 42
    let m = max(10, 20);        // 20
    let s = sqrt(144);          // 12

    // String
    let parts = split("a,b,c", ",");    // ["a", "b", "c"]
    let upper = upper("hello");          // "HELLO"
    let found = contains("hello world", "world");  // true

    // Array
    let nums = [3, 1, 4, 1, 5];
    let sorted = sort(nums);             // [1, 1, 3, 4, 5]
    let doubled = map(nums, fn(x) { x * 2 });  // [6, 2, 8, 2, 10]

    // Formatting
    let msg = format("Sum={}, Max={}", [sum, m]);

    OUTPUT msg;
}
```

---

## Step 6: Conditionals and Pattern Matching

### if / else

```pcd
fn classify(n) {
    if (n > 0) {
        return "positive";
    } else if (n < 0) {
        return "negative";
    } else {
        return "zero";
    }
}
```

### match

```pcd
fn day_name(d) {
    return match d {
        1 => "Monday",
        2 => "Tuesday",
        3 => "Wednesday",
        4 => "Thursday",
        5 => "Friday",
        6 => "Saturday",
        7 => "Sunday",
        _ => "invalid"
    };
}
```

---

## Step 7: Structs

```pcd
struct Point {
    x: i64,
    y: i64
}

fn distance_squared(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return dx * dx + dy * dy;
}

PC struct_demo {
    let p1 = Point { x: 0, y: 0 };
    let p2 = Point { x: 3, y: 4 };
    let d2 = distance_squared(p1, p2);
    // d2 = 25
    OUTPUT d2;
}
```

---

## Step 8: Error Handling

```pcd
PC safe_read {
    try {
        let data = MC_56.READ("input.txt");
        let _ = MC_58.WRITE("Read " + from_int(len(data)) + " bytes\n");
        OUTPUT 0;
    } catch (err) {
        let _ = MC_58.WRITE("Error: " + err + "\n");
        OUTPUT 1;
    }
}
```


`try/catch` is a statement, not an expression. You cannot write `let x = try { ... }`. Assign inside the block instead.


---

## Step 9: Build a Real Policy Circuit

This is where PCD shines. A **policy circuit** intercepts an AI action and returns ALLOW or BLOCK:

```pcd
import "stdlib/string.pcd";
import "stdlib/json.pcd";
import "stdlib/array.pcd";

PC file_write_policy {
    // Read the proposed action from stdin
    let action_json = MC_56.READ("/dev/stdin");
    let action = parse(action_json);

    let path = get(action, "path");
    let agent = get(action, "agent_id");

    // Rule 1: Only /tmp/ writes allowed
    if (!starts_with(path, "/tmp/")) {
        OUTPUT "BLOCK: writes only allowed to /tmp/";
    }

    // Rule 2: Only known agents
    let known = ["claude-code", "codex-cli"];
    if (!contains(known, agent)) {
        OUTPUT "BLOCK: unknown agent " + agent;
    }

    // Rule 3: No dotfiles
    if (contains(path, "/.")) {
        OUTPUT "BLOCK: dotfile writes forbidden";
    }

    OUTPUT "ALLOW";
}
```

Compile and test:

```bash
# Compile to native binary
brikc build file_write_policy.pcd -o policy

# Test with a valid action
echo '{"path":"/tmp/output.txt","agent_id":"claude-code"}' | ./policy
# ALLOW

# Test with a blocked action
echo '{"path":"/etc/passwd","agent_id":"claude-code"}' | ./policy
# BLOCK: writes only allowed to /tmp/

# Test with unknown agent
echo '{"path":"/tmp/test.txt","agent_id":"rogue-agent"}' | ./policy
# BLOCK: unknown agent rogue-agent
```

**Why Φ_c = 1 matters here:** The compiler formally verifies that **every possible input** to this circuit produces either "ALLOW" or "BLOCK: ...". There is no input that causes undefined behavior, a crash, or an ambiguous result.

---

## Step 10: Compile to Multiple Targets

The same PCD compiles to 5 backends:

```bash
# Native x86-64 ELF (standalone, no dependencies)
brikc build policy.pcd -o policy

# Rust module
brikc emit --rust policy.pcd -o policy.rs

# JavaScript ES module
brikc emit --js policy.pcd -o policy.mjs

# Python module
brikc emit --python policy.pcd -o policy.py

# WebAssembly
brikc build --target wasm32 policy.pcd -o policy.wasm
```

All five outputs are semantically equivalent — same input always produces same output, regardless of target.

---

## What to Learn Next


  
    Complete language reference: all constructs, operators, and parser limits.
  
  
    Detailed documentation for all 128 monomers with signatures and edge cases.
  
  
    All 6 stdlib modules: math, string, array, io, fmt, json.
  
  
    What to do when Φ_c ≠ 1 — understanding and fixing CMF errors.
  
  
    Idiomatic PCD patterns, common anti-patterns, and performance tips.
  
  
    8 complete programs from hello world to the self-hosting compiler.
  




---

## [PCD] Testing & Debugging

<!-- Source: pcd/testing.mdx -->

# Testing & Debugging

## Your code ships with tests. Already.

Writing tests is one of the most time-consuming parts of software development. Teams spend as much time on test suites as on features. Coverage is never complete. When requirements change, tests break. When deadline pressure mounts, tests get skipped — and bugs slip through.

BRIK-64 takes a different approach: **the compiler generates both the code and its complete test suite at the same time, from the same formal proof.**

```bash
brikc compile src/main.pcd --target rs --emit-tests
```

Output:
```
build/main.rs          ← certified Rust implementation
build/main_spec.rs     ← complete test suite, auto-generated from the proof
```

Your CI pipeline goes from:

```
❌  write code  →  write tests manually  →  (hope coverage is complete)  →  deploy
```

to:

```
✅  write PCD  →  compile  →  code + test suite arrive together, proven correct  →  deploy
```

The test suite is not a placeholder or a scaffold. It contains real, runnable assertions derived directly from the formal proof.

---

## What the auto-generated test suite contains

| Test type | What it verifies | Source |
|-----------|-----------------|--------|
| **Property tests** | Input/output ranges for every function | CMF proof |
| **Boundary tests** | Edge values for every monomer used (overflow, zero, max) | Monomer specification |
| **Composition tests** | Each EVA operator chain behaves as the CMF proved | EVA algebra rules |
| **Regression anchors** | Canonical input/output pairs that define the proven behavior | Fixpoint hash |

The regression anchors are especially important for long-term maintenance. If the generated Rust or JavaScript is ever modified manually downstream — in a refactor, a migration, a dependency upgrade — the regression anchors catch any divergence from the proven logic. The tests are the **specification** of what the code was guaranteed to do.

---

## Do I still need to write tests?

Yes — but for different things than you might expect.

The compiler handles **correctness** of your logic. What remains for you:

| Test type | Who writes it | Purpose |
|-----------|--------------|---------|
| Property / boundary / composition | **Compiler** — auto-generated | Proves the logic is correct |
| Regression anchors | **Compiler** — auto-generated | Detects future deviations |
| Business requirements | **You** | "Does it do what the user needs?" |
| Integration with external systems | **You** | Database, API, user input boundaries |
| Performance / load | **You** | When requirements specify latency or throughput |

> BRIK-64 proves you built **the thing right**. You test that you built **the right thing**.

This is not a small distinction. In a typical project, 60–80% of test surface area is spent verifying that functions behave correctly under various inputs. With BRIK-64, that work is done by the compiler. You focus acceptance testing on what actually varies: requirements, integrations, and performance.

---

## Core programs: what "certified" means for testing

A **Core program** uses only MC_00–MC_63. When it compiles with Φ_c = 1, the following are structurally guaranteed — not probabilistically:

| Guarantee | Meaning |
|-----------|---------|
| **Type safety** | No type error can occur at runtime |
| **No undefined behavior** | Every branch reaches a defined output |
| **Determinism** | Identical inputs always produce identical outputs |
| **No integer overflow** | Core arithmetic uses saturating semantics |
| **No null dereference** | PCD has no null values |
| **Termination** | All loops have proven bounds |

A test that checks `add(2, 3) == 5` is valid but structurally redundant — the compiler already proved it. What the auto-generated tests do instead is encode the **ranges** and **invariants** that are guaranteed, so they serve as executable documentation and future regression detection.

---

## Generated code inherits the proof

When you compile PCD to Rust, JavaScript, Python, or WASM, the generated code inherits the Φ_c = 1 certification:

```bash
brikc compile src/main.pcd --target rs      # certified Rust
brikc compile src/main.pcd --target js      # certified JavaScript
brikc compile src/main.pcd --target py      # certified Python
brikc compile src/main.pcd --target wasm32  # certified WebAssembly
```

The proof happened at compile time in the PCD pipeline. The target language is the deployment vehicle. The generated code is provably correct before any test runner ever executes — and arrives with its own test suite that documents and protects that correctness.


Code written directly in Rust, Python, or JavaScript — even using BRIK-64 monomer libraries — is not CMF-certified and does not receive auto-generated test suites from the proof pipeline. Only PCD programs compiled through `brikc` produce certified output.


---

## Extended monomers (MC_64–MC_127)

Extended monomers connect certified Core logic to the real world: floating point, networking, graphics, concurrency, FFI. They operate under **declared contracts**, not formal proofs — because the failure sources are outside the computation.

**Why Extended monomers can fail:**

| Monomer | Failure mode | Can the proof prevent it? |
|---------|-------------|--------------------------|
| TCP_CONN | Server unreachable | No — physics |
| HTTP_GET | Timeout, 5xx, malformed body | No — network |
| FADD | NaN propagation (`0.0/0.0`) | No — IEEE 754 |
| FFI_CALL | Segfault in native library | No — native code |
| SPAWN | Resource exhaustion | No — OS |

**What BRIK-64 guarantees even in Open programs:**

- The **Core sections** remain Φ_c = 1 — formally proven and auto-tested
- Extended monomers must be at the **boundary** of the computation graph, not in the trunk — the compiler enforces this
- Data flowing from Extended into Core must pass a **validation boundary** (typed and bounds-checked)
- The program badge shows the verified percentage: `◈ BRIK-64 OPEN | 83% verified`

**Extended monomers ship with their own test suite** covering:
- Contract tests (the monomer honors its declared signature)
- Error-path tests (network down, NaN, null FFI — all handled gracefully)
- Boundary validation tests (data entering Core from Extended is safe)

**Mock provider for development:**

```pcd
import "stdlib/mock.pcd";

PC test_pipeline {
    -- Mock external call — no real network needed
    let resp = HTTP_GET.mock("https://api.example.com", 200, "{\"status\": \"ok\"}");

    -- Core logic from here — formally verified
    let data = json_parse(resp.body);
    let status = data.get("status");
    OUTPUT status;
}
```

---

## Debugging: compile-time errors

BRIK-64 programs fail at **compile time**, not at runtime. The CMF error is precise:

```bash
brikc check circuit.pcd
```

```
[CMF] Parsing circuit...              ✓
[CMF] EVA composition valid:          ✓
[CMF] Circuit closedness (Φ_c):       0.917   ← FAIL
[CMF] Unused input ratio (δ):         0.083

Error: E_OPEN_BRANCH
  Function: process_input
  Branch:   'error_path' has no OUTPUT
  Line 47:  if (x < 0) { return -1; }

  Fix: All branches must reach OUTPUT. Either add OUTPUT to the error
  branch, or handle it by propagating to the caller.
```

No "segmentation fault at runtime." No "undefined is not a function." The failure is at the **logical design level**, before any code runs, where it costs nothing to fix.

### Common CMF errors

| Error | Meaning | Fix |
|-------|---------|-----|
| `Φ_c < 1.000` — open branch | A branch has no OUTPUT | Add `OUTPUT` to all branches |
| `δ > 0` — unused input | Function parameter is never used | Remove the parameter or prefix with `_` |
| `Type mismatch at ⊗` | Sequential composition type conflict | Check output type of left matches input of right |
| `MAX_DEPTH exceeded` | Nesting too deep for parser | Extract logic into named functions |
| `WhileLoop SSA` | Loop variable lost across iterations | Use `loop(N) { if (cond) { body } }` instead of `while` |

→ Full list: [Error Guide](/pcd/errors)

### Debugging tools

| Tool | Command | Purpose |
|------|---------|---------|
| CMF check | `brikc check circuit.pcd` | Verify Φ_c without compiling |
| JSON output | `brikc check circuit.pcd --json` | Machine-readable for CI/CD |
| REPL | `brikc repl` | Explore monomers interactively |
| Type info | `brikc repl` → `:type expr` | Inspect value types |
| Binary verify | `brikc check --self` | Verify compiler binary integrity |

A step-through debugger with breakpoints and variable inspection is planned for a future release. Until then, `brikc check` locates the issue precisely enough that step-through is rarely needed — the error message tells you the function, the branch, and the fix.

---

## Testing in CI/CD

```yaml
# .github/workflows/ci.yml
- name: Compile and generate tests
  run: |
    brikc compile src/main.pcd --target rs --emit-tests
    # build/main.rs and build/main_spec.rs are now available

- name: Run generated test suite
  run: cargo test --manifest-path build/Cargo.toml

- name: CMF check (machine-readable)
  run: brikc check src/main.pcd --json | jq '.certified'
  # Fails CI if output is not `true`
```

The generated tests integrate into any standard test runner in the target language — `cargo test`, `jest`, `pytest`, `vitest`. No custom test framework required.


---

## [PCD] Error Diagnosis Guide

<!-- Source: pcd/errors.mdx -->

# Error Diagnosis Guide

When a PCD program fails certification, the compiler aborts with a diagnostic message. This guide explains every error type and how to fix it.

---

## How Certification Works

The CMF (Coherence Metric Framework) computes 7 metrics for your program. If any metric is out of bounds, or if the master metric Φ_c ≠ 1.000, compilation is **aborted** — not warned.

```bash
brikc check broken.pcd
# ✗ Φ_c = 0.875 (required: 1.000)
# ✗ δ = 0.125 (1 unused input)
# Compilation aborted.
```

---

## Error: Unused Inputs (δ > 0)

**What it means:** Your function declares parameters that are never used.

```pcd
// BAD: parameter `b` is never used
fn add_one(a, b) {
    return a + 1;
}
```

**Diagnostic:**
```
δ = 0.500 (1 of 2 inputs unused)
Φ_c = 0.500 != 1.000
```

**Fix:** Remove the unused parameter, or use it:

```pcd
// GOOD: both parameters used
fn add(a, b) {
    return a + b;
}

// Or remove unused parameter
fn add_one(a) {
    return a + 1;
}
```


If you intentionally need to ignore a parameter (e.g., for interface compatibility), prefix it with `_`:

```pcd
fn handler(event, _context) {
    return process(event);
}
```

The `_` prefix tells the CMF to exclude it from the unused input count.


---

## Error: Unreachable Code Paths

**What it means:** Some code paths never execute, indicating dead branches.

```pcd
// BAD: the else branch after return is unreachable
fn check(x) {
    if (x > 0) {
        return "positive";
    }
    return "non-positive";
    let dead = "this never executes";  // unreachable!
}
```

**Fix:** Remove dead code after `return` or `OUTPUT`:

```pcd
fn check(x) {
    if (x > 0) {
        return "positive";
    }
    return "non-positive";
}
```

---

## Error: Missing OUTPUT on Some Paths

**What it means:** Not all control flow paths lead to an `OUTPUT` or `return`.

```pcd
// BAD: what if x == 0?
PC classify {
    let x = MC_63.ENV("ARGV_1");
    if (x > 0) {
        OUTPUT "positive";
    }
    if (x < 0) {
        OUTPUT "negative";
    }
    // Falls through with no OUTPUT when x == 0!
}
```

**Diagnostic:**
```
Φ_c < 1.000: not all paths produce output
```

**Fix:** Add a final `OUTPUT` that catches all remaining cases:

```pcd
PC classify {
    let x = MC_63.ENV("ARGV_1");
    if (x > 0) {
        OUTPUT "positive";
    }
    if (x < 0) {
        OUTPUT "negative";
    }
    OUTPUT "zero";    // catches x == 0
}
```

---

## Error: Type Mismatch at Monomer Boundary

**What it means:** You passed a value of the wrong type to a monomer.

```pcd
// BAD: MC_00.ADD8 expects numbers, not strings
let result = MC_00.ADD8("hello", 5);
```

**Diagnostic:**
```
Type error: MC_00.ADD8 expects (u8, u8), got (string, i64)
```

**Fix:** Ensure argument types match the monomer's signature. See the [Monomer Reference](/pcd/monomers) for exact signatures.

---

## Error: DIV8 Not Destructured

**What it means:** `MC_03.DIV8` returns a tuple `(quotient, remainder)`, and you're treating it as a single value.

```pcd
// BAD: DIV8 returns a tuple
let result = MC_03.DIV8(10, 3);
let doubled = result * 2;  // Error: can't multiply a tuple
```

**Diagnostic:**
```
Type error: expected i64, got Tuple([i64, i64])
```

**Fix:** Always destructure DIV8:

```pcd
let (q, r) = MC_03.DIV8(10, 3);
let doubled = q * 2;    // OK: q is i64
```

---

## Error: Division by Zero

**What it means:** `MC_03.DIV8` or `MC_04.MOD8` received 0 as the divisor.

```pcd
let (q, r) = MC_03.DIV8(10, 0);  // Runtime error
```

**Fix:** Guard against zero before dividing:

```pcd
fn safe_div(a, b) {
    if (b == 0) {
        return (0, 0);
    }
    return MC_03.DIV8(a, b);
}
```

Or use `try/catch`:

```pcd
try {
    let (q, r) = MC_03.DIV8(a, b);
    OUTPUT q;
} catch (err) {
    OUTPUT 0;
}
```

---

## Error: MAX_DEPTH Exceeded

**What it means:** Your program has more than 256 levels of nesting.

```pcd
// BAD: deeply nested ifs exceed MAX_DEPTH=256
if (a) { if (b) { if (c) { ... // 257+ levels
```

**Diagnostic:**
```
Parser error: MAX_DEPTH (256) exceeded at line N
```

**Fix:** Flatten nested logic using functions:

```pcd
fn check_level_1(x) {
    // handle first batch of checks
    return intermediate_result;
}

fn check_level_2(x) {
    let r1 = check_level_1(x);
    // handle second batch
    return final_result;
}
```

---

## Error: Circular Import

**What it means:** Module A imports B, and B imports A (directly or transitively).

```
a.pcd imports b.pcd
b.pcd imports a.pcd  → circular!
```

**Diagnostic:**
```
Import error: circular dependency detected: a.pcd → b.pcd → a.pcd
```

**Fix:** Extract shared code into a third module:

```
common.pcd    ← shared functions
a.pcd imports common.pcd
b.pcd imports common.pcd
```

---

## Error: While Loop SSA Bug

**What it means:** Variables inside a `while` loop body don't update correctly across iterations.

```pcd
// BUGGY: pos may not update due to WhileLoop SSA bug
let pos = 0;
while (pos < max) {
    let pos = pos + 1;  // May read stale value!
}
```

**Fix:** Replace `while` with `loop(N) + if`:

```pcd
let pos = 0;
loop(max) as _i {
    if (pos < max) {
        let pos = pos + 1;  // Works correctly with loop(N)
    }
}
```


This is a known limitation of the current planner. The `while` SSA bug captures variable versions *before* the loop body instead of *after*. Always use `loop(N)` in production code.


---

## Error: Out of Bounds Array Access

```pcd
let arr = [1, 2, 3];
let x = arr[5];  // Runtime error: index 5 out of bounds (len=3)
```

**Fix:** Check length before accessing:

```pcd
let arr = [1, 2, 3];
let idx = 5;
if (idx < len(arr)) {
    let x = arr[idx];
} else {
    // handle out of bounds
}
```

Or use `try/catch`:

```pcd
try {
    let x = arr[idx];
} catch (err) {
    let x = 0;  // default value
}
```

---

## Error: String Index Out of Bounds

```pcd
let s = "hello";
let ch = MC_45.CHAR_AT(s, 10);  // Runtime error
```

**Fix:** Always check `MC_43.LEN` first:

```pcd
let s = "hello";
let idx = 10;
let slen = MC_43.LEN(s);
if (idx < slen) {
    let ch = MC_45.CHAR_AT(s, idx);
} else {
    let ch = "";
}
```

---

## Error: Unresolved Import

```pcd
import "stdlib/nonexistent.pcd";  // File not found
```

**Diagnostic:**
```
Import error: file not found: stdlib/nonexistent.pcd
```

**Fix:** Check that the file exists and the path is correct. Available stdlib modules:

| Module | Path |
|--------|------|
| math | `stdlib/math.pcd` |
| string | `stdlib/string.pcd` |
| array | `stdlib/array.pcd` |
| io | `stdlib/io.pcd` |
| fmt | `stdlib/fmt.pcd` |
| json | `stdlib/json.pcd` |

---

## Reading CMF Output

When `brikc check` outputs the full CMF profile, here's how to read it:

```json
{
  "cmf": {
    "e":    4,        // Operational complexity: 4 edges in graph (OK)
    "h":    0.44,     // Signature distance: moderate type transformation (OK)
    "s":    0.000,    // Structural entropy: no branches (excellent)
    "c":    1,        // Cyclomatic complexity: 1 path (excellent)
    "t":    0,        // Termination depth: no loops (excellent)
    "δ":    0.000,    // Unused inputs: none (required for Ω=1)
    "Φ_c":  1.000     // Closure: certified!
  },
  "omega": 1
}
```

**Red flags to look for:**
- `δ > 0` — you have unused parameters
- `Φ_c < 1.000` — the circuit is not closed; check δ and ensure all paths produce output
- Very high `s` — excessive branching; consider simplifying control flow
- Very high `t` — deep loop nesting; consider flattening with functions

---

## Quick Troubleshooting Table

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| `Φ_c < 1.000` | Unused inputs or missing OUTPUT paths | Remove unused params, add fallback OUTPUT |
| `δ > 0` | Unused function parameters | Remove or prefix with `_` |
| Type error at monomer call | Wrong argument types | Check [Monomer Reference](/pcd/monomers) |
| `Tuple` type mismatch | Forgot to destructure DIV8 | Use `let (q, r) = MC_03.DIV8(...)` |
| Parser MAX_DEPTH | Too many nested blocks | Extract into functions |
| While loop vars don't update | WhileLoop SSA bug | Use `loop(N)` instead |
| Circular import | A imports B, B imports A | Extract shared code to third module |
| Runtime crash | Division by zero or OOB access | Guard with `if` or `try/catch` |



---

## [PCD] Policy Circuits

<!-- Source: pcd/policy-circuits.mdx -->

# Policy Circuits

Policy circuits are PCD programs that act as **deterministic guardrails** for AI systems. Unlike traditional rule engines or RLHF alignment, a policy circuit is formally verified (Φ_c = 1) and cannot be bypassed, updated, or overridden at runtime.


A policy circuit is a regular PCD circuit that takes an **action** as input and emits `ALLOW` or `BLOCK` as output. Because PCD is deterministic, the same action always produces the same verdict.


## Why Policy Circuits?

| Traditional Guards | Policy Circuits |
|---|---|
| Code that can be patched | Immutable verified circuit |
| Runtime exceptions | Compile-time rejection |
| Probabilistic (RLHF) | Deterministic (Φ_c = 1) |
| Trust the developer | Trust the math |

---

## Quick Start

### Create a Policy

```bash
brikc policy new --template sandbox
```

This generates a `.pcd` file from a built-in template. Five templates are available:

| Template | Description |
|---|---|
| `no_network` | Blocks all network I/O operations |
| `no_filesystem` | Blocks all filesystem access |
| `memory_bound` | Enforces memory allocation limits |
| `sandbox` | Combines no_network + no_filesystem + memory_bound |
| `allow_all` | Permits all actions (useful as a starting point) |

### Verify a Policy

```bash
brikc policy verify my_policy.pcd
```


Verification checks that Φ_c = 1 for the policy circuit. If the circuit has dead branches, unreachable paths, or ambiguous verdicts, verification fails and the policy cannot be deployed.


---

## Pre-Built Policies

### no_network

```pcd
PC no_network {
    fn check(action: Action) -> Verdict {
        match action.category {
            "net_connect" => BLOCK,
            "net_listen"  => BLOCK,
            "net_send"    => BLOCK,
            "net_recv"    => BLOCK,
            _             => ALLOW,
        }
    }
    OUTPUT check;
}
```

### memory_bound

```pcd
PC memory_bound {
    domain mem_limit: Range [0, 536870912]; // 512 MB

    fn check(action: Action) -> Verdict {
        match action.category {
            "mem_alloc" => {
                let requested = action.params.bytes;
                if requested > mem_limit.max {
                    BLOCK
                } else {
                    ALLOW
                }
            },
            _ => ALLOW,
        }
    }
    OUTPUT check;
}
```

---

## Example: Robot Arm Force Limiter

A policy circuit that prevents a robotic arm from exceeding safe force thresholds:

```pcd
PC robot_arm_force_limiter {
    domain force_newton: Range [0, 50];    // max 50 N
    domain speed_mms:    Range [0, 500];   // max 500 mm/s

    fn check(action: Action) -> Verdict {
        match action.category {
            "motor_move" => {
                let f = action.params.force;
                let s = action.params.speed;
                if f > force_newton.max {
                    BLOCK
                } else if s > speed_mms.max {
                    BLOCK
                } else {
                    ALLOW
                }
            },
            "motor_grip" => {
                let f = action.params.force;
                if f > force_newton.max {
                    BLOCK
                } else {
                    ALLOW
                }
            },
            _ => ALLOW,
        }
    }
    OUTPUT check;
}
```

```bash
brikc policy verify robot_arm_force_limiter.pcd
# ✓ Φ_c = 1 — all paths terminate with ALLOW or BLOCK
```

---

## Example: LLM Output Filter

A policy circuit that blocks LLM responses containing prohibited content patterns:

```pcd
PC llm_output_filter {
    fn check(action: Action) -> Verdict {
        match action.category {
            "llm_response" => {
                let text = action.params.content;
                if STR_CONTAINS(text, "EXECUTE_SQL") {
                    BLOCK
                } else if STR_CONTAINS(text, "rm -rf") {
                    BLOCK
                } else if STR_LEN(text) > 100000 {
                    BLOCK
                } else {
                    ALLOW
                }
            },
            _ => ALLOW,
        }
    }
    OUTPUT check;
}
```

---

## Writing Custom Policies


### Define the action space

Identify which action categories your system emits. Each action has a `category` string and a `params` record.

### Declare closure domains

Use `domain` declarations for numeric constraints. This gives the TCE engine the information it needs to verify completeness.

### Write the check function

Pattern-match on `action.category` and return `ALLOW` or `BLOCK` for every path. The circuit **must** be total — every possible input must reach a verdict.

### Verify

Run `brikc policy verify <file>` to confirm Φ_c = 1. Fix any dead branches or uncovered paths.

### Compile to target

```bash
brikc compile my_policy.pcd --target js    # JavaScript guard function
brikc compile my_policy.pcd --target py    # Python guard function
brikc compile my_policy.pcd --target rust  # Rust guard function
```


A policy circuit that does not cover all action categories will fail verification. Always include a wildcard `_ => ALLOW` or `_ => BLOCK` as the final match arm.



---

## [PCD] Standard Library

<!-- Source: pcd/stdlib.mdx -->

# PCD Standard Library

The BRIK-64 standard library is written **100% in PCD**. There is no Rust, no C, no FFI. Every stdlib function compiles through the same pipeline as user code, producing the same verified ELF, BIR, or WASM output.

This is the proof of concept: a language whose standard library is written in itself, formally verified by the TCE, and compiled to native code by the self-hosting compiler.


All stdlib modules are located in the `stdlib/` directory relative to your project root. Import them with `import "stdlib/module.pcd";`.


---

## Module Overview

| Module | File | Functions |
|--------|------|-----------|
| **math** | `stdlib/math.pcd` | abs, min, max, clamp, pow, sqrt, floor, ceil, round, sign, gcd, lcm |
| **string** | `stdlib/string.pcd` | len, upper, lower, trim, split, join, find, contains, starts_with, ends_with, replace, format, to_int, from_int, char_at, substr |
| **array** | `stdlib/array.pcd` | len, push, pop, get, set, sort, reverse, map, filter, reduce, contains, find_index, slice, concat, zip, flatten |
| **io** | `stdlib/io.pcd` | read_file, write_file, read_line, write_line, exists, read_bytes, write_bytes |
| **fmt** | `stdlib/fmt.pcd` | format, to_string, pad_left, pad_right, truncate, repeat, center |
| **json** | `stdlib/json.pcd` | parse, stringify, get, set, keys, values, has, merge |

---

## math

```pcd
import "stdlib/math.pcd";
```

### `abs(n: i64) → i64`

Returns the absolute value of `n`.

```pcd
let x = abs(-42);    // 42
let y = abs(7);      // 7
```

### `min(a: i64, b: i64) → i64`

Returns the smaller of two values.

```pcd
let m = min(10, 3);   // 3
```

### `max(a: i64, b: i64) → i64`

Returns the larger of two values.

```pcd
let m = max(10, 3);   // 10
```

### `clamp(val: i64, lo: i64, hi: i64) → i64`

Clamps `val` to the range `[lo, hi]`.

```pcd
let c = clamp(150, 0, 100);   // 100
let d = clamp(-5, 0, 100);    // 0
let e = clamp(50, 0, 100);    // 50
```

### `pow(base: i64, exp: i64) → i64`

Returns `base` raised to the power `exp`. Uses fast exponentiation (O(log exp)).

```pcd
let p = pow(2, 10);   // 1024
let q = pow(3, 0);    // 1
```

### `sqrt(n: i64) → i64`

Integer square root (floor). Returns the largest integer `k` such that `k*k ≤ n`.

```pcd
let s = sqrt(16);   // 4
let t = sqrt(17);   // 4
let u = sqrt(25);   // 5
```

### `floor(n: i64) → i64`

Identity for integers. Provided for type-consistent APIs.

### `ceil(n: i64) → i64`

Identity for integers. Provided for type-consistent APIs.

### `sign(n: i64) → i64`

Returns `-1`, `0`, or `1` depending on the sign of `n`.

```pcd
let s1 = sign(-100);   // -1
let s2 = sign(0);      // 0
let s3 = sign(42);     // 1
```

### `gcd(a: i64, b: i64) → i64`

Greatest common divisor via Euclidean algorithm.

```pcd
let g = gcd(48, 18);   // 6
```

### `lcm(a: i64, b: i64) → i64`

Least common multiple.

```pcd
let l = lcm(4, 6);   // 12
```

---

## string

```pcd
import "stdlib/string.pcd";
```

### `len(s: string) → i64`

Returns the number of characters in `s`.

```pcd
let n = len("hello");   // 5
```

### `upper(s: string) → string`

Converts all lowercase letters to uppercase.

```pcd
let u = upper("hello");   // "HELLO"
```

### `lower(s: string) → string`

Converts all uppercase letters to lowercase.

```pcd
let l = lower("WORLD");   // "world"
```

### `trim(s: string) → string`

Removes leading and trailing whitespace.

```pcd
let t = trim("  hello  ");   // "hello"
```

### `split(s: string, delim: string) → array`

Splits `s` on `delim`, returns an array of substrings.

```pcd
let parts = split("a,b,c", ",");   // ["a", "b", "c"]
let lines = split(text, "\n");
```

### `join(arr: array, sep: string) → string`

Joins an array of strings with `sep`.

```pcd
let s = join(["a", "b", "c"], "-");   // "a-b-c"
let csv = join(fields, ",");
```

### `find(s: string, sub: string) → i64`

Returns the index of the first occurrence of `sub` in `s`, or `-1` if not found.

```pcd
let i = find("hello world", "world");   // 6
let j = find("hello", "xyz");           // -1
```

### `contains(s: string, sub: string) → bool`

Returns `true` if `s` contains `sub`.

```pcd
let ok = contains("hello world", "world");   // true
```

### `starts_with(s: string, prefix: string) → bool`

```pcd
let ok = starts_with("hello", "hel");   // true
```

### `ends_with(s: string, suffix: string) → bool`

```pcd
let ok = ends_with("hello.pcd", ".pcd");   // true
```

### `replace(s: string, from: string, to: string) → string`

Replaces all occurrences of `from` with `to`.

```pcd
let r = replace("foo foo foo", "foo", "bar");   // "bar bar bar"
```

### `format(template: string, args: array) → string`

Replaces `{}` placeholders with array elements in order.

```pcd
let msg = format("Hello, {}! You are {} years old.", ["Alice", 30]);
// "Hello, Alice! You are 30 years old."
```

### `to_int(s: string) → i64`

Parses a decimal integer string. Returns `0` for invalid input.

```pcd
let n = to_int("42");    // 42
let m = to_int("-7");    // -7
let bad = to_int("abc"); // 0
```

### `from_int(n: i64) → string`

Converts an integer to its decimal string representation.

```pcd
let s = from_int(42);    // "42"
let t = from_int(-100);  // "-100"
```

### `char_at(s: string, i: i64) → string`

Returns the character at index `i` as a single-character string.

```pcd
let ch = char_at("hello", 1);   // "e"
```

### `substr(s: string, start: i64, length: i64) → string`

Returns a substring of `s` starting at `start` with the given `length`.

```pcd
let sub = substr("hello world", 6, 5);   // "world"
```

---

## array

```pcd
import "stdlib/array.pcd";
```

### `len(arr: array) → i64`

```pcd
let n = len([1, 2, 3]);   // 3
```

### `push(arr: array, elem) → array`

Returns a new array with `elem` appended.

```pcd
let arr2 = push([1, 2], 3);   // [1, 2, 3]
```

### `pop(arr: array) → (array, value)`

Returns a tuple of (new_array, last_element).

```pcd
let (arr2, last) = pop([1, 2, 3]);   // ([1, 2], 3)
```

### `get(arr: array, i: i64) → value`

Returns element at index `i`. Equivalent to `arr[i]`.

```pcd
let x = get(arr, 2);
```

### `set(arr: array, i: i64, val) → array`

Returns a new array with element at index `i` replaced by `val`.

```pcd
let arr2 = set([1, 2, 3], 1, 99);   // [1, 99, 3]
```

### `sort(arr: array) → array`

Returns a new array sorted in ascending order (integers or strings).

```pcd
let sorted = sort([3, 1, 4, 1, 5, 9]);   // [1, 1, 3, 4, 5, 9]
```

### `reverse(arr: array) → array`

Returns a new array with elements in reverse order.

```pcd
let r = reverse([1, 2, 3]);   // [3, 2, 1]
```

### `map(arr: array, f: closure) → array`

Applies `f` to each element, returns new array of results.

```pcd
let doubled = map([1, 2, 3], fn(x) { x * 2 });   // [2, 4, 6]
```

### `filter(arr: array, pred: closure) → array`

Returns new array of elements for which `pred` returns true.

```pcd
let evens = filter([1, 2, 3, 4, 5], fn(x) { x % 2 == 0 });   // [2, 4]
```

### `reduce(arr: array, initial, f: closure) → value`

Folds `arr` from left with accumulator starting at `initial`.

```pcd
let sum = reduce([1, 2, 3, 4, 5], 0, fn(acc, x) { acc + x });   // 15
let product = reduce([1, 2, 3, 4], 1, fn(acc, x) { acc * x });  // 24
```

### `contains(arr: array, elem) → bool`

Returns `true` if `elem` is in `arr`.

```pcd
let ok = contains([1, 2, 3], 2);   // true
```

### `find_index(arr: array, elem) → i64`

Returns the index of the first occurrence of `elem`, or `-1`.

```pcd
let i = find_index(["a", "b", "c"], "b");   // 1
```

### `slice(arr: array, start: i64, end: i64) → array`

Returns elements from `start` (inclusive) to `end` (exclusive).

```pcd
let s = slice([0, 1, 2, 3, 4], 1, 4);   // [1, 2, 3]
```

### `concat(a: array, b: array) → array`

Concatenates two arrays.

```pcd
let c = concat([1, 2], [3, 4]);   // [1, 2, 3, 4]
```

### `zip(a: array, b: array) → array`

Pairs elements: returns array of tuples.

```pcd
let z = zip([1, 2, 3], ["a", "b", "c"]);   // [(1, "a"), (2, "b"), (3, "c")]
```

### `flatten(arr: array) → array`

Flattens one level of nesting.

```pcd
let f = flatten([[1, 2], [3, 4], [5]]);   // [1, 2, 3, 4, 5]
```

---

## io

```pcd
import "stdlib/io.pcd";
```

### `read_file(path: string) → string`

Reads the entire file at `path` as a UTF-8 string.

```pcd
let source = read_file("input.pcd");
```

### `write_file(path: string, content: string)`

Writes `content` to `path`, creating or overwriting the file.

```pcd
write_file("output.bir", bir_text);
```

### `read_line() → string`

Reads a single line from stdin (without trailing newline).

```pcd
let line = read_line();
```

### `write_line(s: string)`

Writes `s` followed by a newline to stdout.

```pcd
write_line("Processing complete.");
```

### `exists(path: string) → bool`

Returns `true` if the file at `path` exists.

```pcd
if (exists("config.pcd")) {
    let cfg = read_file("config.pcd");
}
```

### `read_bytes(path: string) → array`

Reads file as array of byte values (i64 in 0–255 range).

```pcd
let bytes = read_bytes("binary.dat");
let first_byte = bytes[0];
```

### `write_bytes(path: string, bytes: array)`

Writes array of byte values to file.

```pcd
write_bytes("output.bin", [0x7f, 0x45, 0x4c, 0x46]);
```

---

## fmt

```pcd
import "stdlib/fmt.pcd";
```

### `format(template: string, args: array) → string`

String interpolation with `{}` placeholders. Each `{}` is replaced by the next element of `args`, converted to string:

```pcd
let s = format("x={}, y={}", [10, 20]);    // "x=10, y=20"
let msg = format("Hello, {}!", ["world"]); // "Hello, world!"
```

### `to_string(val) → string`

Converts any value to its string representation.

```pcd
let s1 = to_string(42);         // "42"
let s2 = to_string(true);       // "true"
let s3 = to_string([1, 2, 3]);  // "[1, 2, 3]"
```

### `pad_left(s: string, width: i64, ch: string) → string`

Pads `s` on the left to reach `width` characters, using `ch` as padding character.

```pcd
let p = pad_left("42", 5, "0");    // "00042"
let q = pad_left("hi", 6, " ");    // "    hi"
```

### `pad_right(s: string, width: i64, ch: string) → string`

Pads `s` on the right.

```pcd
let p = pad_right("hi", 6, ".");   // "hi...."
```

### `truncate(s: string, max_len: i64) → string`

Truncates `s` to `max_len` characters.

```pcd
let t = truncate("hello world", 5);   // "hello"
```

### `repeat(s: string, n: i64) → string`

Repeats `s` exactly `n` times.

```pcd
let r = repeat("ab", 3);   // "ababab"
```

### `center(s: string, width: i64, ch: string) → string`

Centers `s` within `width` characters, padding with `ch`.

```pcd
let c = center("hi", 8, "-");   // "---hi---"
```

---

## json

```pcd
import "stdlib/json.pcd";
```

The JSON module represents JSON values as PCD values: JSON objects are arrays of `(key, value)` tuple pairs, JSON arrays are PCD arrays, and JSON primitives map to their PCD equivalents.

### `parse(s: string) → value`

Parses a JSON string into a PCD value.

```pcd
let obj = parse("{\"name\": \"Alice\", \"age\": 30}");
```

### `stringify(val) → string`

Serializes a PCD value to a JSON string.

```pcd
let s = stringify(["a", "b", 1, true]);   // "[\"a\",\"b\",1,true]"
```

### `get(obj, key: string) → value`

Gets a field from a JSON object by key.

```pcd
let name = get(obj, "name");   // "Alice"
```

### `set(obj, key: string, val) → value`

Returns a new object with the field set.

```pcd
let obj2 = set(obj, "age", 31);
```

### `keys(obj) → array`

Returns an array of the object's keys.

```pcd
let ks = keys(obj);   // ["name", "age"]
```

### `values(obj) → array`

Returns an array of the object's values.

```pcd
let vs = values(obj);   // ["Alice", 30]
```

### `has(obj, key: string) → bool`

Returns `true` if `obj` has the given key.

```pcd
let ok = has(obj, "email");   // false
```

### `merge(a, b) → value`

Merges two JSON objects. Fields in `b` override fields in `a`.

```pcd
let merged = merge(defaults, overrides);
```

---

## Using Multiple Stdlib Modules

```pcd
import "stdlib/math.pcd";
import "stdlib/string.pcd";
import "stdlib/array.pcd";
import "stdlib/fmt.pcd";

PC process_data {
    let raw = MC_56.READ("data.txt");
    let lines = split(raw, "\n");
    let n = len(lines);

    let total = 0;
    loop(n) as i {
        let line = lines[i];
        let trimmed = trim(line);
        if (len(trimmed) > 0) {
            let val = to_int(trimmed);
            let total = total + val;
        }
    }

    let avg = total / n;
    let msg = format("Sum={}, Count={}, Avg={}", [total, n, avg]);
    OUTPUT msg;
}
```


Importing multiple stdlib modules is idiomatic PCD. The planner resolves all imports before type-checking, so there are no forward-reference issues between modules.




---

## [Lifter] Overview

<!-- Source: lifter/overview.mdx -->

The BRIK-64 Lifter is a reverse compiler that analyzes existing source code and extracts the subset that maps to PCD monomers. Instead of rewriting your codebase from scratch, the Lifter gives you an automatic migration path.

## How It Works

```
Source Code → AST → Pattern Recognition → Monomer Mapping → PCD Output
```

1. **Parse** — The Lifter parses your source file into an AST using a lightweight, language-specific frontend.
2. **Recognize** — Pattern recognition identifies operations that correspond to BRIK-64 monomers (arithmetic, logic, memory, control flow, I/O, string, crypto, system).
3. **Map** — Recognized patterns are mapped to their MC_XX monomer equivalents with proper EVA composition.
4. **Emit** — The result is output as a valid PCD program (text or structured JSON).

## SSA Transform

The Lifter includes an **SSA (Static Single Assignment) transform** that handles variable reassignment. When your source code reassigns variables (e.g., `total = total + x`), the Lifter automatically converts them into SSA form with unique variable names, producing valid PCD where each `let` binding is assigned exactly once.

This enables lifting real-world patterns like accumulators, running totals, and iterative updates that were previously unsupported.

## Two-Tier Certification

Lifted PCD receives certification based on which monomers it uses:

- **CORE (Phi_c = 1)** — Programs using only core monomers (MC_00-MC_63) receive full formal certification
- **CONTRACT (Phi_c = CONTRACT)** — Programs using extended monomers (MC_64-MC_127) receive contract-based certification with bounds checking

The Lifter automatically selects the appropriate monomers and reports the certification tier.

## Full Roundtrip Pipeline

The Lifter enables a complete verified roundtrip:

```
Source (any language) → brikc lift → PCD → brikc check → brikc build → JS/Python/Rust → execute
```

This means you can take existing code, lift it to PCD, verify circuit closure, compile to any target language, and execute — with formal guarantees attached.

## Supported Languages

The Lifter ships with **10 language frontends** and achieves **100% liftability** on real-world projects (211/211 files across 2 production projects, 73/73 circuits passing check):

| Language | Extensions | Status |
|----------|-----------|--------|
| JavaScript | `.js`, `.mjs`, `.cjs` | Stable |
| TypeScript | `.ts`, `.mts` | Stable |
| TSX | `.tsx` | Stable |
| JSX | `.jsx` | Stable |
| Python | `.py` | Stable |
| Rust | `.rs` | Stable |
| C / C++ | `.c`, `.h`, `.cpp`, `.hpp` | Stable |
| Go | `.go` | Stable |
| COBOL | `.cob`, `.cbl` | Stable |
| PHP | `.php` | Stable |
| Java | `.java` | Stable |

### Safety Fallback

When the Lifter encounters code patterns it cannot map to monomers, it uses a **safety fallback** that wraps unsupported expressions as comments in the output PCD, preserving context without breaking the circuit. This ensures partial lifting always produces valid PCD.

## Liftability Score

Not all code can be represented as PCD. The Lifter reports a **liftability score** (0.0 to 1.0) indicating what percentage of the source maps to monomers. Code that uses I/O, complex OOP, or framework-specific APIs will have lower scores.


Use `--min-liftability 0.5` to only output results when at least 50% of the source maps to PCD monomers.


## What Gets Lifted

- Arithmetic operations (add, subtract, multiply, divide)
- Bitwise and logical operations
- Variable declarations and assignments
- Control flow (if/else, loops, match/switch)
- String operations
- Basic I/O (print, read)

## What Does NOT Get Lifted

- Framework-specific APIs (React, Django, etc.)
- Complex OOP patterns (inheritance hierarchies)
- Async/await and concurrency primitives
- FFI and unsafe blocks
- Macros and metaprogramming


  
    Detailed breakdown of what each frontend recognizes.
  
  
    CLI flags, output formats, and examples.
  



---

## [Lifter] Usage

<!-- Source: lifter/usage.mdx -->

## Basic Usage

```bash
brikc lift <file>
```

The Lifter auto-detects the language from the file extension and outputs PCD to stdout.

## Flags

| Flag | Description | Default |
|------|------------|---------|
| `--language <lang>` | Override language detection (`js`, `ts`, `tsx`, `jsx`, `python`, `rust`, `c`, `go`, `cobol`, `php`, `java`) | Auto-detect |
| `--output <file>` | Write output to file instead of stdout | stdout |
| `--format <fmt>` | Output format: `text` (PCD source) or `json` (structured) | `text` |
| `--min-liftability <0.0-1.0>` | Only output if liftability score meets threshold | `0.0` |
| `--domains` | Include closure domain annotations in output | Off |

## Examples

### JavaScript

```bash
brikc lift app.js
```

```bash
# Input: app.js
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
```

```pcd
# Output
PC app {
    let result = MC_00.ADD8(10, 20);
    let _ = MC_58.WRITE(result);
    OUTPUT result;
}
```

### Python

```bash
brikc lift script.py --output script.pcd
```

```bash
# Input: script.py
x = 10
y = 20
total = x + y
print(total)
```

```pcd
# Output: script.pcd
PC script {
    let x = MC_16.STORE(10);
    let y = MC_16.STORE(20);
    let total = MC_00.ADD8(x, y);
    let _ = MC_58.WRITE(total);
    OUTPUT total;
}
```

### Rust

```bash
brikc lift lib.rs --format json
```

JSON output includes metadata about the lift:

```json
{
  "source": "lib.rs",
  "language": "rust",
  "liftability": 0.85,
  "monomers_used": ["MC_00", "MC_01", "MC_08", "MC_16", "MC_58"],
  "pcd": "PC lib {\n    ...\n}",
  "unmapped": [
    { "line": 12, "reason": "async block not supported" }
  ]
}
```

### C with minimum liftability

```bash
brikc lift main.c --min-liftability 0.6
```

If the liftability score is below 0.6, the command exits with code 1 and no output.

### Go

```bash
brikc lift server.go --language go --output server.pcd
```

### COBOL

```bash
brikc lift PAYROLL.cob --domains --output payroll.pcd
```

The `--domains` flag adds closure domain annotations derived from COBOL `PIC` clauses:

```pcd
PC payroll {
    domain salary: Range [0, 999999];
    domain hours: Range [0, 168];
    ...
}
```

### Batch lifting

Combine with standard shell tools for batch operations:

```bash
# Lift all Python files in a directory
for f in src/*.py; do
  brikc lift "$f" --output "pcd/$(basename "$f" .py).pcd"
done

# Only lift files with high liftability
find . -name "*.js" -exec brikc lift {} --min-liftability 0.7 --output {}.pcd \;
```

### SSA Transform — Variable Reassignment

The Lifter handles variable reassignment via SSA transform:

```bash
# Input: calcPrice.js
function calcPrice(base, tax, discount) {
    let total = base;
    total = total + tax;
    total = total - discount;
    return total;
}
```

```bash
brikc lift calcPrice.js
```

```pcd
# Output — SSA-transformed
PC calcPrice {
    let total = base;
    let total_1 = total + tax;
    let total_2 = total_1 - discount;
    OUTPUT total_2;
}
```

### TSX / JSX Support

```bash
brikc lift App.tsx
brikc lift Component.jsx
```

The Lifter extracts liftable logic from TSX/JSX files, ignoring JSX markup and focusing on computational functions.

### Full Roundtrip: Lift, Check, Build, Execute

```bash
# 1. Lift existing JS to PCD
brikc lift calcPrice.js -o calcPrice.pcd

# 2. Verify circuit closure
brikc check calcPrice.pcd
# ✓ Circuit closed: Φ_c = 1.000

# 3. Build to any target
brikc build calcPrice.pcd -t python -o dist/

# 4. Execute the certified output
python3 dist/calcPrice.py
```

This roundtrip is fully verified — the output carries the same formal guarantees as the PCD source.


The Lifter produces PCD that may need manual refinement. Always review the output and run `brikc check` to verify circuit closure before using in production.



---

## [Lifter] Supported Languages

<!-- Source: lifter/languages.mdx -->

The Lifter includes dedicated frontends for 7 languages. Each frontend understands the idioms and patterns specific to that language.

## Language Matrix

| Language | Extensions | Auto-detect | Arithmetic | Logic | Control Flow | Strings | I/O | Crypto |
|----------|-----------|-------------|-----------|-------|-------------|---------|-----|--------|
| JavaScript | `.js` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| TypeScript | `.ts`, `.tsx` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Python | `.py` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Rust | `.rs` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| C | `.c`, `.h` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| Go | `.go` | Yes | Yes | Yes | Yes | Yes | Yes | No |
| COBOL | `.cob`, `.cbl` | Yes | Yes | Yes | Yes | Yes | Yes | No |

## JavaScript / TypeScript

Recognizes standard JS/TS patterns:

- `+`, `-`, `*`, `/`, `%` → MC_00–MC_07 (Arithmetic family)
- `&&`, `||`, `!`, `^` → MC_08–MC_15 (Logic family)
- `if/else`, `switch`, `for`, `while` → MC_24–MC_31 (Control family)
- `console.log()`, `process.stdout.write()` → MC_32–MC_39 (I/O family)
- String concatenation, `.length`, `.slice()` → MC_40–MC_47 (String family)
- Variable declarations (`let`, `const`, `var`) → MC_16–MC_23 (Memory family)

## Python

Recognizes Python idioms:

- Arithmetic operators and `//` (integer division) → Arithmetic family
- `and`, `or`, `not` → Logic family
- `if/elif/else`, `for`, `while`, `match` → Control family
- `print()`, `input()` → I/O family
- f-strings, `len()`, slicing → String family
- Variable assignments → Memory family

## Rust

Recognizes Rust patterns:

- Arithmetic with overflow awareness (wrapping, saturating) → Arithmetic family
- `&&`, `||`, `!` and bitwise ops → Logic family
- `if/else`, `match`, `loop`, `for`, `while` → Control family
- `println!()`, `eprintln!()`, `std::io` → I/O family
- `String`, `&str` operations → String family
- `let`, `let mut` bindings → Memory family

## C

Recognizes C patterns:

- All arithmetic and bitwise operators → Arithmetic + Logic families
- `if/else`, `switch`, `for`, `while`, `do-while` → Control family
- `printf()`, `fprintf()`, `scanf()` → I/O family
- `strlen()`, `strcpy()`, `strcat()` → String family
- Variable declarations and assignments → Memory family

## Go

Recognizes Go patterns:

- Arithmetic operators → Arithmetic family
- Logical and bitwise operators → Logic family
- `if/else`, `switch`, `for` → Control family
- `fmt.Println()`, `fmt.Printf()` → I/O family
- String operations → String family
- `:=` short declarations and `var` → Memory family

## COBOL

Recognizes COBOL patterns:

- `ADD`, `SUBTRACT`, `MULTIPLY`, `DIVIDE`, `COMPUTE` → Arithmetic family
- `IF/ELSE/END-IF`, `EVALUATE/WHEN` → Control family
- `DISPLAY`, `ACCEPT` → I/O family
- `MOVE`, `STRING`, `UNSTRING` → String + Memory families
- `PERFORM` loops → Control family


COBOL lifting is particularly valuable for legacy modernization. The Lifter can extract the computational core of COBOL programs into PCD, which can then be compiled to any modern target (Rust, JavaScript, Python).



---

## [Lifter] COBOL Migration Guide

<!-- Source: lifter/cobol-migration.mdx -->

# COBOL Migration with PCD

220 billion lines of COBOL run 95% of ATM transactions worldwide. The workforce maintaining it is retiring. PCD provides a mathematically verified migration path.

## Pipeline

```
COBOL → brikc lift → PCD Blueprint → brikc build → Rust / JS / Python / Go / C
```

## Quick Start


```bash Lift
brikc lift legacy_system.cob
```

```bash Verify
brikc check lifted.pcd
```

```bash Emit to Rust
brikc build lifted.pcd --target rust
```


## Example

**Original COBOL:**

```cobol
PROCEDURE DIVISION.
    COMPUTE INTEREST = PRINCIPAL * RATE / 100.
    IF INTEREST > MAX-INTEREST
        MOVE MAX-INTEREST TO INTEREST
    END-IF.
    COMPUTE TOTAL = PRINCIPAL + INTEREST.
```

**Lifted PCD:**

```pcd
circuit interest_calc {
    domain principal: Range [0, 1000000];
    domain rate: Range [0, 30];
    domain max_interest: Range [0, 100000];

    let interest = MUL8(principal, DIV8(rate, 100));
    let capped = CLAMP(interest, 0, max_interest);
    let total = ADD8(principal, capped);
    OUTPUT total;
}
```

## What the COBOL Frontend Recognizes

| COBOL Pattern | PCD Mapping |
|---------------|-------------|
| `COMPUTE A = B + C` | `ADD8(B, C)` |
| `COMPUTE A = B * C` | `MUL8(B, C)` |
| `COMPUTE A = B / C` | `DIV8(B, C)` |
| `IF ... END-IF` | Conditional composition (`⊕`) |
| `EVALUATE ... END-EVALUATE` | Multi-branch conditional |
| `PERFORM ... THRU` | Sequential composition (`⊗`) |
| `MOVE X TO Y` | Variable binding (`let`) |

## Migration Strategy


  
    Start with the most critical COBOL paragraphs — the functions that handle money, control access, or perform calculations. Lift those first.
  
  
    Each lifted PCD circuit is independently certified. Φ_c = 1 proves the circuit is closed and deterministic.
  
  
    Compile the verified PCD to Rust, JavaScript, Python, Go, or C. Auto-generated tests are included.
  
  
    The original COBOL keeps running while migration happens. Zero downtime required.
  
  
    Replace COBOL modules one at a time. The PCD blueprint is the source of truth if anything goes wrong.
  


## Business Case

| Metric | Traditional | PCD-Based |
|--------|------------|-----------|
| Timeline | 3-5 years | Weeks to months |
| Failure rate | 60% | Mathematically verified |
| Testing | Manual | Auto-generated |
| Risk | Existential | Incremental |
| Proof of equivalence | None | Φ_c = 1 |


The COBOL frontend is part of the BRIK Lifter, which supports 7 languages total: JavaScript, TypeScript, Python, Rust, C, Go, and COBOL.



---

## [Transpiler] Universal Transpiler

<!-- Source: transpiler/overview.mdx -->

# Universal Transpiler

BRIK-64 is the first **N-to-N transpiler**: any of 10 input languages → PCD → any of 14 output targets, with mathematical certification (Φ_c = 1) that the output is equivalent to the input.

## What Makes It Universal

Traditional transpilers are 1-to-1: TypeScript→JavaScript, CoffeeScript→JavaScript, Babel. Each one is purpose-built for a single language pair.

BRIK-64 uses **PCD (Printed Circuit Description)** as a universal intermediate representation. The Lifter extracts computational logic from source code into PCD blueprints. The backends emit idiomatic code from those blueprints into any target language.

```
Source code (10 languages) → Lifter → PCD Blueprint → Certification → Backend → Target (14 languages)
```

10 frontends + 14 backends = **140 transpilation paths** with N+M effort instead of N×M.

## The Command

```bash
brikc transpile ./src/ --to rust --output ./dist/
```

This scans the source directory, lifts all files to PCD, certifies each circuit, and emits target code.

## Supported Languages

### Input (10 languages)

| Language | Extensions | Status |
|----------|-----------|--------|
| JavaScript | `.js`, `.mjs`, `.cjs` | Available |
| TypeScript | `.ts`, `.tsx`, `.jsx` | Available |
| Python | `.py` | Available |
| Rust | `.rs` | Available |
| C | `.c`, `.h` | Available |
| C++ | `.cpp`, `.cc`, `.cxx` | Available |
| Go | `.go` | Available |
| COBOL | `.cob`, `.cbl` | Available |
| PHP | `.php` | Available |
| Java | `.java` | Available |

### Output (14 targets)

| Target | Flag | Extension |
|--------|------|-----------|
| Rust | `--to rust` | `.rs` |
| JavaScript | `--to js` | `.js` |
| TypeScript | `--to typescript` | `.ts` |
| Python | `--to python` | `.py` |
| C | `--to c` | `.c` |
| C++ | `--to cpp` | `.cpp` |
| Go | `--to go` | `.go` |
| COBOL | `--to cobol` | `.cob` |
| PHP | `--to php` | `.php` |
| Java | `--to java` | `.java` |
| Swift | `--to swift` | `.swift` |
| WebAssembly | `--to wasm32` | `.wat` |
| BIR Bytecode | `--to bir` | `.bir` |
| Native Binary | `--to native` | (executable) |

## Pipeline

The transpile command executes a 5-step pipeline:

1. **SCAN** — Find all source files in the input directory
2. **LIFT** — Convert each file to PCD blueprints using the appropriate frontend
3. **CHECK** — Certify each PCD with the TCE (Φ_c verification)
4. **BUILD** — Generate target language code using the appropriate backend
5. **REPORT** — Print a migration summary with certification statistics

## Example: COBOL to Go

```bash
brikc transpile ./cobol-banking/ --to go --output ./modern-go/
```

Output:
```
⚡ BRIK-64 TRANSPILE: ./cobol-banking/ → go

→ Step 1: SCAN — finding source files...
  ✓ Found 5 source files

→ Step 2: LIFT — converting to PCD...
  ✓ interest.cob — 1 circuits
  ✓ tax.cob — 1 circuits
  ✓ loan.cob — 1 circuits

→ Step 3: CHECK — certifying PCDs...
  ✓ interest.pcd — Φ_c = 1
  ✓ tax.pcd — Φ_c = 1
  ✓ loan.pcd — Φ_c = 1

→ Step 4: BUILD — generating go output...
  ✓ interest.cob → interest.go
  ✓ tax.cob → tax.go
  ✓ loan.cob → loan.go

╔═══════════════════════════════════════════╗
║  Files: 5 scanned, 5 transpiled          ║
║  Functions: 5 lifted, 5 certified (100%) ║
║  Output: ./modern-go/ (5 files)          ║
╚═══════════════════════════════════════════╝
```


The transpiler currently handles pure functions, conditionals, loops, and basic array/object operations at full fidelity. Complex patterns (async/await, generics, inheritance) are in development.



---

## [Transpiler] Usage

<!-- Source: transpiler/usage.mdx -->

# Transpiler Usage

## Basic Usage

```bash
# Transpile a directory
brikc transpile ./src/ --to rust --output ./dist/

# Transpile with force rebuild (ignore cache)
brikc transpile ./src/ --to python --output ./dist/ --force

# Specify source language (auto-detected by default)
brikc transpile ./src/ --from javascript --to rust --output ./dist/
```

## Options

| Flag | Description | Default |
|------|-------------|---------|
| `--to <target>` | Target language (required) | — |
| `--output <dir>` | Output directory | `./transpiled` |
| `--from <lang>` | Source language (auto-detect) | auto |
| `--force` | Ignore cache, re-transpile all | false |
| `--certify` | Run Φ_c certification | true |

## Caching

The transpiler caches results. If a source file hasn't changed since the last transpile, it's skipped:

```
⏭ Skipping unchanged: src/utils.js
⏭ Skipping unchanged: src/math.js
✓ src/new-file.js → dist/new-file.rs
```

Use `--force` to re-transpile everything.

## Parallel Processing

The transpiler uses parallel processing (via rayon) to lift multiple files simultaneously. On a 4-core machine, expect ~4x speedup for large directories.

## Error Recovery

If a file fails to lift or build, the transpiler continues with the remaining files:

```
⚠ src/complex.js — parse error (skipped)
✓ src/utils.js → dist/utils.rs
✓ src/math.js → dist/math.rs

Files: 3 scanned, 2 transpiled, 0 skipped, 1 error
```

## Multi-Target

Transpile the same source to multiple targets:

```bash
brikc transpile ./src/ --to rust --output ./dist/rust/
brikc transpile ./src/ --to python --output ./dist/python/
brikc transpile ./src/ --to go --output ./dist/go/
```

## Linking

Combine multiple PCD files into a single output:

```bash
# Link PCDs
brikc link ./pcd/ -o linked.pcd

# Bundle into single target file
brikc link ./pcd/ --bundle -t js -o bundle.js
```


---

## [Transpiler] Migration Guide

<!-- Source: transpiler/migration-guide.mdx -->

# Migration Guide

## Step 1: Analyze

Before transpiling, analyze your codebase:

```bash
brikc lift ./src/ -o ./analysis/
```

Review the liftability report for each file:
- **CORE certified** (Φ_c = 1): Pure functions — will transpile perfectly
- **CONTRACT certified**: Functions with I/O or side effects — will transpile with runtime adapters
- **Unliftable**: Functions that can't be represented in PCD — require manual review

## Step 2: Transpile

```bash
brikc transpile ./src/ --to rust --output ./dist/
```

## Step 3: Verify

Check the generated code:

```bash
# For Rust
cd dist && cargo build && cargo test

# For Python
cd dist && python -m pytest

# For JavaScript
cd dist && node index.js
```

## Step 4: Iterate

For functions that didn't transpile:
1. Simplify the source function
2. Extract pure logic from side effects
3. Re-run `brikc transpile`

## Use Cases

### COBOL → Go (Banking)

```bash
brikc transpile ./mainframe/ --from cobol --to go --output ./microservices/
```

### JavaScript → Rust (Performance)

```bash
brikc transpile ./node-api/ --to rust --output ./rust-api/
```

### Python → JavaScript (Frontend)

```bash
brikc transpile ./backend/ --from python --to js --output ./frontend/
```

### Any → Multiple (Cross-platform)

```bash
for target in rust js python go; do
  brikc transpile ./src/ --to $target --output ./dist/$target/
done
```


---

## [Transpiler] Current Limitations

<!-- Source: transpiler/limitations.mdx -->

# Current Limitations


BRIK-64 is in **Closed Beta** (v5.0.0-beta.1). This page documents what works today and what's still in development. We believe honesty about limitations builds more trust than overpromising.


## What Works Today (Level 1-2)

| Pattern | Status | Example |
|---------|--------|---------|
| Pure arithmetic functions | ✅ 100% | `add(a,b)`, `celsius(c)` |
| If/else conditionals | ✅ 100% | `max(a,b)`, `clamp(v,lo,hi)` |
| While/for loops | ✅ ~80% | `gcd(a,b)`, `factorial(n)` |
| Array access | ✅ ~80% | `arr[i]`, `arr.length` |
| Object dot-access | ✅ ~80% | `user.name`, `user.age` |
| String operations | ✅ ~70% | `charAt`, `slice`, `length` |
| Math.* functions | ✅ 100% | `Math.max`, `Math.floor`, `Math.random` |
| Variable mutation (x++, x+=5) | ✅ 100% | SSA transform handles reassignment |
| Ternary expressions | ✅ ~80% | `a > b ? a : b` |
| COBOL COMPUTE | ✅ 100% | Arithmetic statements transpile perfectly |

**Honest benchmark:** 8/10 lodash utility functions transpile and execute correctly.

## What Doesn't Work Yet (Level 3-4)

| Pattern | Status | Why |
|---------|--------|-----|
| Classes with inheritance | 🔧 Partial | `class Foo extends Bar` — basic classes work, inheritance doesn't |
| async/await | ❌ Not yet | Requires state machine transformation per target |
| Generics/templates | ❌ Not yet | Requires monomorphization at lift time |
| try/catch error handling | 🔧 Partial | Simple cases work, complex chains don't |
| Closures with mutable state | 🔧 Partial | Lambda lifting works for simple cases |
| Cross-module imports (runtime) | ❌ Not yet | Imports are parsed but not resolved at execution time |
| Framework-specific patterns | ❌ Not yet | Express routes, React components, Django views |
| Reflection/metaprogramming | ❌ Not planned | Fundamentally incompatible with static verification |
| `eval()` / dynamic code | ❌ Not planned | Cannot statically verify dynamic code |

## Certification Levels

Not all transpiled code receives the same certification:

| Level | Meaning | What qualifies |
|-------|---------|---------------|
| **CORE** (Φ_c = 1) | Mathematically proven correct | Pure functions using 64 core monomers |
| **CONTRACT** | Correct by agreement, not proof | Functions using extended monomers (I/O, network) |
| **UNCERTIFIED** | Transpiled but not verified | Complex patterns that bypass PCD check |

Today, approximately:
- **60%** of lifted functions achieve CORE certification
- **30%** achieve CONTRACT certification  
- **10%** cannot be certified (flagged for manual review)

## Known Issues

1. **Loop conditions can lose variables** — SSA transform sometimes zeros while-loop conditions. Being fixed.
2. **Array mutation (push/pop)** — Not fully supported as PCD operations yet.
3. **`=== undefined`** — Treated as `== 0`, which is semantically different.
4. **Float formatting** — Python outputs `0.0` vs JavaScript `0` for float zero.
5. **BIR bytecode** — Does not support recursive function calls.

## Roadmap to Full Coverage

| Level | Target | Timeline |
|-------|--------|----------|
| L2 "Logic" | 80%+ of utility libraries | Q2 2026 |
| L3 "Systems" | 95%+ of library code | Q3 2026 |
| L4 "Universal" | 99%+ of application code | Q1 2027 |

## How to Report Issues

If you find a function that should transpile but doesn't:

```bash
brikc report --file problematic-function.js
```

Or open an issue at [github.com/brik64-admin/brik64-prod/issues](https://github.com/brik64-admin/brik64-prod/issues).


---

## [SDK] Rust

<!-- Source: sdk/rust.mdx -->

## Installation

Add to your `Cargo.toml`:

```toml
[dependencies]
brik64-core = "4.0"
```

Or via CLI:

```bash
cargo add brik64-core
```

## Quick Start

```rust
use brik64_core::{mc, eva};

fn main() {
    // Arithmetic — saturating, never panics
    let sum  = mc::arithmetic::add8(200, 100);    // 255
    let diff = mc::arithmetic::sub8(10, 20);      // 0
    let (q, r) = mc::arithmetic::div8(17, 5);     // (3, 2)

    // Logic
    let result  = mc::logic::and8(0xFF, 0x0F);    // 15
    let shifted = mc::logic::shl8(1, 4);          // 16

    // Crypto
    let hash = mc::crypto::sha256(b"hello");
}
```

## All 128 Monomers

```rust
mc::arithmetic   // MC_00–MC_07:  add8, sub8, mul8, div8, mod8, neg8, abs8, pow8
mc::logic        // MC_08–MC_15:  and8, or8, xor8, not8, shl8, shr8, rol8, ror8
mc::memory       // MC_16–MC_23:  store, load, push, pop, dup, swap, zero, copy
mc::control      // MC_24–MC_31:  jump, jz, jnz, call, ret, loop_, break_, halt
mc::io           // MC_32–MC_39:  read, write, open, close, seek, flush, stat, sync
mc::string       // MC_40–MC_47:  len, cat, slice, find, replace, upper, lower, trim
mc::crypto       // MC_48–MC_55:  sha256, sha512, hmac, aes_enc, aes_dec, rand, hash, verify
mc::system       // MC_56–MC_63:  clock, sleep, exit, env, spawn, wait, signal, pipe
```

## EVA Composition

```rust
use brik64_core::{mc, eva};

// Sequential (⊗)
let pipeline = eva::seq(
    |x| mc::arithmetic::add8(x, 10),
    |x| mc::arithmetic::mul8(x, 2),
);
assert_eq!(pipeline(5), 30);

// Parallel (∥)
let both = eva::par(
    |x| mc::arithmetic::add8(x, 1),
    |x| mc::arithmetic::mul8(x, 2),
);
assert_eq!(both(5), (6, 10));

// Conditional (⊕)
let branch = eva::cond(
    |x| x > 10,
    |x| mc::arithmetic::add8(x, 1),
    |x| mc::arithmetic::sub8(x, 1),
);
assert_eq!(branch(15), 16);
assert_eq!(branch(5), 4);
```

## No-std Support

The core crate supports `no_std` for embedded use:

```toml
[dependencies]
brik64-core = { version = "4.0", default-features = false }
```


Crypto monomers require the `crypto` feature flag, which pulls in `sha2` and `aes` crates. Without it, crypto operations return compile-time errors.


```toml
[dependencies]
brik64-core = { version = "4.0", features = ["crypto"] }
```


  
    Use monomers in JavaScript/TypeScript.
  
  
    Use monomers in Python.
  



---

## [SDK] JavaScript

<!-- Source: sdk/javascript.mdx -->

## Installation

```bash
npm install @brik64/core
# pnpm add @brik64/core
# yarn add @brik64/core
```

Works in Node.js (18+) and modern browsers. Full TypeScript type definitions included.

## Quick Start

```typescript
import { mc, eva } from '@brik64/core';

// Arithmetic — wrapping, never throws
const sum = mc.arithmetic.add8(200, 100);     // 255 (saturating)
const diff = mc.arithmetic.sub8(10, 20);      // 0 (saturating)
const [q, r] = mc.arithmetic.div8(17, 5);     // [3, 2]

// Logic
const result = mc.logic.and8(0xFF, 0x0F);     // 15
const shifted = mc.logic.shl8(1, 4);          // 16

// Crypto
const hash = await mc.crypto.sha256(
  new TextEncoder().encode('hello')
);
```

## All 128 Monomers

The SDK exposes all 128 monomers organized by family:

```typescript
mc.arithmetic   // MC_00–MC_07:  ADD8, SUB8, MUL8, DIV8, MOD8, NEG8, ABS8, POW8
mc.logic        // MC_08–MC_15:  AND8, OR8, XOR8, NOT8, SHL8, SHR8, ROL8, ROR8
mc.memory       // MC_16–MC_23:  STORE, LOAD, PUSH, POP, DUP, SWAP, ZERO, COPY
mc.control      // MC_24–MC_31:  JUMP, JZ, JNZ, CALL, RET, LOOP, BREAK, HALT
mc.io           // MC_32–MC_39:  READ, WRITE, OPEN, CLOSE, SEEK, FLUSH, STAT, SYNC
mc.string       // MC_40–MC_47:  LEN, CAT, SLICE, FIND, REPLACE, UPPER, LOWER, TRIM
mc.crypto       // MC_48–MC_55:  SHA256, SHA512, HMAC, AES_ENC, AES_DEC, RAND, HASH, VERIFY
mc.system       // MC_56–MC_63:  CLOCK, SLEEP, EXIT, ENV, SPAWN, WAIT, SIGNAL, PIPE

// Extended monomers: MC_64–MC_127
mc.extended.arithmetic  // MC_64–MC_71
mc.extended.logic       // MC_72–MC_79
// ... etc
```

## EVA Composition

Compose monomers using EVA algebra operators:

```typescript
import { mc, eva } from '@brik64/core';

// Sequential composition (⊗)
const pipeline = eva.seq(
  (x: number) => mc.arithmetic.add8(x, 10),
  (x: number) => mc.arithmetic.mul8(x, 2),
);
pipeline(5);  // (5 + 10) * 2 = 30

// Parallel composition (∥)
const both = eva.par(
  (x: number) => mc.arithmetic.add8(x, 1),
  (x: number) => mc.arithmetic.mul8(x, 2),
);
both(5);  // [6, 10]

// Conditional composition (⊕)
const branch = eva.cond(
  (x: number) => x > 10,
  (x: number) => mc.arithmetic.add8(x, 1),
  (x: number) => mc.arithmetic.sub8(x, 1),
);
branch(15);  // 16
branch(5);   // 4
```

## TypeScript Types

```typescript
import type { Monomer, EvaOperator, MonomerFamily } from '@brik64/core';
```

All monomer functions are fully typed with input/output signatures matching the PCD specification.


  
    Use monomers in Python.
  
  
    Use monomers in Rust.
  



---

## [SDK] Python

<!-- Source: sdk/python.mdx -->

## Installation

```bash
pip install brik64
# uv add brik64
# poetry add brik64
```

Python 3.10+ required. No external dependencies.

## Quick Start

```python
from brik64 import mc, eva

# Arithmetic — saturating, never raises
total = mc.arithmetic.add8(200, 100)     # 255
diff  = mc.arithmetic.sub8(10, 20)       # 0
q, r  = mc.arithmetic.div8(17, 5)        # (3, 2)

# Logic
result  = mc.logic.and8(0xFF, 0x0F)      # 15
shifted = mc.logic.shl8(1, 4)            # 16

# Crypto
digest = mc.crypto.sha256(b"hello")
```

## All 128 Monomers

```python
mc.arithmetic   # MC_00–MC_07:  add8, sub8, mul8, div8, mod8, neg8, abs8, pow8
mc.logic        # MC_08–MC_15:  and8, or8, xor8, not8, shl8, shr8, rol8, ror8
mc.memory       # MC_16–MC_23:  store, load, push, pop, dup, swap, zero, copy
mc.control      # MC_24–MC_31:  jump, jz, jnz, call, ret, loop_, break_, halt
mc.io           # MC_32–MC_39:  read, write, open, close, seek, flush, stat, sync
mc.string       # MC_40–MC_47:  len, cat, slice, find, replace, upper, lower, trim
mc.crypto       # MC_48–MC_55:  sha256, sha512, hmac, aes_enc, aes_dec, rand, hash, verify
mc.system       # MC_56–MC_63:  clock, sleep, exit, env, spawn, wait, signal, pipe
```

## EVA Composition

```python
from brik64 import mc, eva

# Sequential (⊗)
pipeline = eva.pipeline(
    lambda x: mc.arithmetic.add8(x, 10),
    lambda x: mc.arithmetic.mul8(x, 2),
)
pipeline(5)  # 30

# Parallel (∥)
both = eva.parallel(
    lambda x: mc.arithmetic.add8(x, 1),
    lambda x: mc.arithmetic.mul8(x, 2),
)
both(5)  # (6, 10)

# Conditional (⊕)
branch = eva.cond(
    lambda x: x > 10,
    lambda x: mc.arithmetic.add8(x, 1),
    lambda x: mc.arithmetic.sub8(x, 1),
)
branch(15)  # 16
branch(5)   # 4
```

## Type Hints

The SDK includes full type stubs for IDE support:

```python
from brik64 import mc

reveal_type(mc.arithmetic.add8)  # (int, int) -> int
reveal_type(mc.arithmetic.div8)  # (int, int) -> tuple[int, int]
```


  
    Use monomers in JavaScript/TypeScript.
  
  
    Use monomers in Rust.
  



---

## [SDK] Integrations

<!-- Source: sdk/integrations.mdx -->

# Integrations

BRIK-64 integrates with AI frameworks at two levels: **monomers as tools** (use verified operations inside your agents) and **policy circuits as guardrails** (enforce safety constraints on agent actions).

---

## LangChain

Use BRIK-64 monomers as LangChain tools. Each monomer is a formally verified atomic operation that your agent can call.


```python Python
from brik64 import BrikToolkit
from langchain.agents import AgentExecutor, create_openai_tools_agent
from langchain.chat_models import ChatOpenAI

# Load monomer families as LangChain tools
toolkit = BrikToolkit(
    families=["arithmetic", "string", "crypto"],
    certified=True  # only verified operations
)

llm = ChatOpenAI(model="gpt-4")
agent = create_openai_tools_agent(llm, toolkit.get_tools(), prompt)
executor = AgentExecutor(agent=agent, tools=toolkit.get_tools())

result = executor.invoke({"input": "Hash the string 'hello world' with SHA256"})
```

```javascript JavaScript
import { BrikToolkit } from '@brik64/langchain';
import { ChatOpenAI } from '@langchain/openai';
import { AgentExecutor, createOpenAIToolsAgent } from 'langchain/agents';

const toolkit = new BrikToolkit({
  families: ['arithmetic', 'string', 'crypto'],
  certified: true
});

const llm = new ChatOpenAI({ modelName: 'gpt-4' });
const agent = await createOpenAIToolsAgent({ llm, tools: toolkit.getTools(), prompt });
const executor = new AgentExecutor({ agent, tools: toolkit.getTools() });

const result = await executor.invoke({ input: "Hash 'hello world' with SHA256" });
```


---

## CrewAI

Use policy circuits as agent guardrails in CrewAI. Each agent can have its own policy that restricts which tools and actions it can perform.

```python
from brik64 import load_policy, BrikToolkit
from crewai import Agent, Task, Crew

# Policy: no network, no filesystem
policy = load_policy("sandbox.pcd.compiled")

# Verified tools from BRIK-64
toolkit = BrikToolkit(families=["arithmetic", "string", "logic"])

def brik_guard(action_name: str, action_input: str) -> bool:
    verdict = policy.check({
        "category": action_name,
        "params": {"input": action_input}
    })
    return verdict == "ALLOW"

analyst = Agent(
    role="Data Analyst",
    goal="Process data using verified operations only",
    tools=toolkit.get_tools(),
    before_tool_callback=brik_guard
)

task = Task(description="Calculate the factorial of 12", agent=analyst)
crew = Crew(agents=[analyst], tasks=[task])
result = crew.kickoff()
```

---

## AutoGen

Use PCD-verified code generation with AutoGen. The Lifter converts generated code to PCD, verifies it, and compiles it back to the target language.

```python
from brik64 import lift_and_verify

def verified_code_run(code: str, language: str = "python") -> dict:
    """Lift generated code to PCD, verify, and compile back."""
    result = lift_and_verify(
        source=code,
        language=language,
        target="python"
    )

    if result.certified:
        return {"status": "ok", "phi_c": result.phi_c, "code": result.compiled_code}
    else:
        return {"status": "rejected", "errors": result.errors}
```


The lift-verify-compile loop adds latency but guarantees that only formally verified code runs. For latency-sensitive applications, pre-verify common patterns and cache the results.


---

## Claude Code (MCP Server)

BRIK-64 provides an MCP (Model Context Protocol) server that integrates directly with Claude Code and other MCP-compatible clients.

```bash
# Start the MCP server
brikc mcp serve
```

Configuration in `~/.claude.json`:

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp", "serve"],
      "env": {
        "BRIK64_API_KEY": "your-api-key"
      }
    }
  }
}
```

Available MCP tools:

| Tool | Description |
|---|---|
| `brik64_compile` | Compile a PCD file to target language |
| `brik64_verify` | Verify Phi_c = 1 for a PCD circuit |
| `brik64_lift` | Lift source code to PCD |
| `brik64_policy_check` | Evaluate an action against a policy circuit |
| `brik64_registry_search` | Search the PCD registry |


See the [MCP Integration](/mcp/overview) docs for full configuration details and advanced usage.


---

## Generic: REST API

For any framework not listed above, use the BRIK-64 REST API directly.


```bash cURL
# Compile PCD to JavaScript
curl -X POST https://api.brik64.dev/v1/compile \
  -H "Authorization: Bearer $BRIK64_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "source": "PC hello { OUTPUT 42; }",
    "target": "js"
  }'

# Evaluate an action against a policy
curl -X POST https://api.brik64.dev/v1/policy/check \
  -H "Authorization: Bearer $BRIK64_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "policy_id": "pol_abc123",
    "action": {
      "category": "net_connect",
      "params": {"host": "example.com", "port": 443}
    }
  }'
```

```python Python (requests)
import requests

API = "https://api.brik64.dev/v1"
HEADERS = {"Authorization": f"Bearer {api_key}"}

# Compile
resp = requests.post(f"{API}/compile", headers=HEADERS, json={
    "source": "PC hello { OUTPUT 42; }",
    "target": "py"
})
print(resp.json()["compiled"])

# Policy check
resp = requests.post(f"{API}/policy/check", headers=HEADERS, json={
    "policy_id": "pol_abc123",
    "action": {"category": "net_connect", "params": {"host": "example.com"}}
})
print(resp.json()["verdict"])  # "ALLOW" or "BLOCK"
```


See the [API Reference](/api/overview) for the complete list of endpoints, authentication details, and rate limits.



---

## [API] Overview

<!-- Source: api/overview.mdx -->

The BRIK-64 Registry API provides programmatic access to the circuit registry at `registry.brik64.dev`.

## Base URL

```
https://registry.brik64.dev/v1
```

All endpoints are versioned under `/v1`. Responses are JSON.

## What the API Provides

- **Catalog** — Browse all 128 monomers (64 Core + 64 Extended) with signatures, families, and documentation.
- **Circuits** — Publish, search, and retrieve PCD circuits from the public and private registry.
- **Certification** — Submit circuits for TCE certification and verify existing certifications.
- **Artifacts** — Download compiled artifacts (Rust, JS, Python, WASM) for any published circuit.
- **Authentication** — Register, manage API keys, and control access to private circuits.

## Free Tier

A free tier is available with generous limits:

| Feature | Free | Pro |
|---------|------|-----|
| Catalog access | Unlimited | Unlimited |
| Circuit publishes | 10/day | Unlimited |
| Certifications | 10/day | Unlimited |
| Artifact downloads | 100/day | Unlimited |
| Private circuits | 5 | Unlimited |

## Quick Example

```bash
# Health check
curl https://registry.brik64.dev/v1/health

# List all monomers (no auth required)
curl https://registry.brik64.dev/v1/catalog

# Publish a circuit (auth required)
curl -X POST https://registry.brik64.dev/v1/circuits \
  -H "Authorization: Bearer brik_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{"name": "my-circuit", "pcd": "PC my_circuit { ... }"}'
```


  
    Get your API key and configure access.
  
  
    Complete endpoint reference with examples.
  



---

## [API] Endpoints

<!-- Source: api/endpoints.mdx -->

All endpoints use base URL `https://registry.brik64.dev/v1`.

## Health

### GET /v1/health

```bash
curl https://registry.brik64.dev/v1/health
```

```json
{
  "status": "ok",
  "version": "4.0.0-beta.2",
  "uptime": 86400
}
```

---

## Catalog

### GET /v1/catalog

List all 128 monomers.

```bash
curl https://registry.brik64.dev/v1/catalog
```

```json
{
  "monomers": [
    {
      "code": "MC_00",
      "name": "ADD8",
      "family": "Arithmetic",
      "signature": "(I64, I64) -> I64",
      "description": "Saturating 8-bit addition"
    }
  ],
  "total": 128
}
```

**Query parameters:**

| Param | Description |
|-------|------------|
| `family` | Filter by family: `arithmetic`, `logic`, `memory`, `control`, `io`, `string`, `crypto`, `system` |
| `search` | Full-text search on name and description |

### GET /v1/catalog/:mc_code

```bash
curl https://registry.brik64.dev/v1/catalog/MC_00
```

Returns full monomer details including Coq proof status, examples, and domain constraints.

---

## Circuits

### GET /v1/circuits

List published circuits.

```bash
curl https://registry.brik64.dev/v1/circuits \
  -H "Authorization: Bearer brik_live_xxx"
```

**Query parameters:**

| Param | Description |
|-------|------------|
| `search` | Search by name or description |
| `certified` | Filter: `true` or `false` |
| `page` | Page number (default: 1) |
| `limit` | Results per page (default: 20, max: 100) |

### POST /v1/circuits

Publish a new circuit.

```bash
curl -X POST https://registry.brik64.dev/v1/circuits \
  -H "Authorization: Bearer brik_live_xxx" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "fibonacci",
    "description": "Fibonacci sequence generator",
    "pcd": "PC fibonacci {\n    let a = MC_16.STORE(0);\n    let b = MC_16.STORE(1);\n    let sum = MC_00.ADD8(a, b);\n    OUTPUT sum;\n}",
    "visibility": "public"
  }'
```

```json
{
  "pid": "cir_abc123",
  "name": "fibonacci",
  "hash": "7f2a...",
  "certified": false,
  "created_at": "2026-03-21T00:00:00Z"
}
```

### GET /v1/circuits/:pid

```bash
curl https://registry.brik64.dev/v1/circuits/cir_abc123
```

### PUT /v1/circuits/:pid

Update circuit metadata (name, description, visibility). PCD source is immutable after publish.

### DELETE /v1/circuits/:pid

```bash
curl -X DELETE https://registry.brik64.dev/v1/circuits/cir_abc123 \
  -H "Authorization: Bearer brik_live_xxx"
```

---

## Artifacts

### GET /v1/circuits/:pid/artifacts

List available compiled artifacts for a circuit.

```bash
curl https://registry.brik64.dev/v1/circuits/cir_abc123/artifacts
```

```json
{
  "artifacts": [
    { "target": "rust", "url": "/v1/circuits/cir_abc123/artifacts/rust" },
    { "target": "javascript", "url": "/v1/circuits/cir_abc123/artifacts/javascript" },
    { "target": "python", "url": "/v1/circuits/cir_abc123/artifacts/python" }
  ]
}
```

### GET /v1/circuits/:pid/artifacts/:target

Download a compiled artifact.

```bash
curl -O https://registry.brik64.dev/v1/circuits/cir_abc123/artifacts/rust
```

---

## Auth

### POST /v1/auth/register

Register a new account. See [Authentication](/api/authentication).

### GET /v1/auth/keys

List API keys for the authenticated user.

### DELETE /v1/auth/keys/:key_id

Revoke an API key.

### POST /v1/auth/keys/rotate

Rotate the current API key.


---

## [API] Authentication

<!-- Source: api/authentication.mdx -->

## Authentication Method

The BRIK-64 API uses **Bearer token** authentication. Include your API key in the `Authorization` header:

```bash
Authorization: Bearer brik_live_xxxxxxxxxxxxxxxxxxxx
```

## API Key Format

API keys follow the format `brik_live_` followed by a random alphanumeric string:

```
brik_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4
```


Keep your API keys secret. Do not commit them to version control or expose them in client-side code.


## Register for an API Key

```bash
curl -X POST https://registry.brik64.dev/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "you@example.com",
    "name": "Your Name"
  }'
```

Response:

```json
{
  "api_key": "brik_live_a1b2c3d4e5f6g7h8i9j0k1l2m3n4",
  "message": "API key created. Store it securely — it cannot be retrieved later."
}
```

## Managing Keys

### List your keys

```bash
curl https://registry.brik64.dev/v1/auth/keys \
  -H "Authorization: Bearer brik_live_xxx"
```

### Revoke a key

```bash
curl -X DELETE https://registry.brik64.dev/v1/auth/keys/<key-id> \
  -H "Authorization: Bearer brik_live_xxx"
```

### Rotate a key

```bash
curl -X POST https://registry.brik64.dev/v1/auth/keys/rotate \
  -H "Authorization: Bearer brik_live_xxx"
```

Returns a new key and invalidates the current one.

## Public Endpoints

The following endpoints do **not** require authentication:

- `GET /v1/health`
- `GET /v1/catalog`
- `GET /v1/catalog/:mc_code`
- `GET /v1/circuits` (public circuits only)

## Using with the CLI

```bash
# Store your key for CLI use
brikc auth login --key brik_live_xxx

# Or use environment variable
export BRIK64_API_KEY=brik_live_xxx
```


---

## [API] Certification

<!-- Source: api/certification.mdx -->

The certification API runs the Thermodynamic Coherence Engine (TCE) on your published circuits to verify that they achieve circuit closure (Phi_c = 1).

## Certify a Circuit

### POST /v1/circuits/:pid/certify

Submit a circuit for certification.

```bash
curl -X POST https://registry.brik64.dev/v1/circuits/cir_abc123/certify \
  -H "Authorization: Bearer brik_live_xxx"
```

Response:

```json
{
  "pid": "cir_abc123",
  "certified": true,
  "phi_c": 1.0,
  "tce_metrics": {
    "information_entropy": 0.0,
    "closure_domains_verified": 3,
    "closure_domains_total": 3,
    "monomers_used": 5,
    "composition_depth": 2,
    "eva_operators": {
      "sequential": 3,
      "parallel": 1,
      "conditional": 0
    }
  },
  "hash": "7f2a9b3c...",
  "certified_at": "2026-03-21T00:00:00Z"
}
```


Phi_c = 1.0 means the circuit is fully closed — all inputs are consumed, all outputs are produced, and information entropy is zero. This is the formal guarantee of Digital Circuitality.


### Certification Failures

If the circuit does not achieve closure:

```json
{
  "pid": "cir_abc123",
  "certified": false,
  "phi_c": 0.87,
  "errors": [
    {
      "type": "unclosed_domain",
      "domain": "temperature",
      "message": "Domain 'temperature' has unverified bounds at line 14"
    }
  ]
}
```

## Verify a Certification

### POST /v1/circuits/:pid/verify

Re-verify an existing certification. Useful for auditing or confirming that a previously certified circuit still passes.

```bash
curl -X POST https://registry.brik64.dev/v1/circuits/cir_abc123/verify \
  -H "Authorization: Bearer brik_live_xxx"
```

```json
{
  "pid": "cir_abc123",
  "verified": true,
  "original_hash": "7f2a9b3c...",
  "current_hash": "7f2a9b3c...",
  "match": true,
  "phi_c": 1.0
}
```

## Rate Limits

| Tier | Certifications/day | Verifications/day |
|------|-------------------|-------------------|
| Free | 10 | 50 |
| Pro | Unlimited | Unlimited |


Certification is computationally intensive. Free-tier users are limited to 10 certifications per day. Verifications are cheaper and have a higher limit.


## Certification Badge

Certified circuits receive a badge URL that can be embedded in READMEs or documentation:

```markdown
![BRIK-64 Certified](https://registry.brik64.dev/v1/circuits/cir_abc123/badge)
```

The badge displays the Phi_c score and certification date.


---

## [API] Publishing to the Registry

<!-- Source: api/publishing.mdx -->

# Publishing to the Registry

The BRIK-64 registry hosts certified PCD packages — polymers and policy circuits that have been verified (Φ_c = 1) and are available for reuse.

---

## Prerequisites


### Register for an API Key

Create an account at [brik64.dev/register](https://brik64.dev/register) and generate an API key from your dashboard.

### Authenticate the CLI

```bash
brikc registry login <your-api-key>
```

This stores your credentials in `~/.brik64/credentials.toml`. The token is used for all registry operations.

### Initialize Your Package

```bash
brikc pkg init
```

This creates a `brik.toml` manifest in the current directory:

```toml
[package]
name = "my-package"
version = "0.1.0"
description = "A brief description of your package"
author = "your-username"
license = "BSL-1.1"

[dependencies]
# other-package = "^1.0.0"

[certification]
phi_c = true          # requires Φ_c = 1
min_coverage = 100    # percentage of paths tested
```

### Write Your PCD Circuit

Create `.pcd` files in your project. Every circuit must pass verification before publishing.

### Publish

```bash
brikc pkg publish
```


Publishing runs `brikc policy verify` (or `brikc compile --verify`) on every `.pcd` file in the package. If any circuit fails Φ_c = 1 verification, the publish is rejected.


---

## Registry CLI Commands

### Search

```bash
# Search by keyword
brikc registry search "crypto"

# Search by family
brikc registry search --family crypto

# Search by author
brikc registry search --author brik64-admin
```

### Package Info

```bash
# View package details
brikc registry info crypto-utils

# View a specific version
brikc registry info crypto-utils@1.2.0
```

Example output:

```
crypto-utils v1.2.0
  Author:       brik64-admin
  License:      BSL-1.1
  Φ_c:          1 (certified)
  Monomers:     SHA256, AES_ENC, AES_DEC, HMAC
  Downloads:    1,247
  Published:    2026-03-15
```

### Install a Dependency

```bash
brikc pkg add crypto-utils@^1.0.0
```

This updates your `brik.toml` and downloads the package to `.brik64/deps/`.

---

## Certification Badges

Every published package displays a certification badge based on its verification status:

| Badge | Meaning |
|---|---|
| **Certified** | All circuits pass Φ_c = 1, 100% path coverage |
| **Verified** | All circuits pass Φ_c = 1, partial coverage |
| **Unverified** | Published but not yet certified |


Aim for **Certified** status. Packages with full certification appear first in search results and are trusted by default in policy-restricted environments.


### Embedding Badges

Use the badge URL in your README or documentation:

```markdown
![BRIK-64 Certified](https://registry.brik64.dev/badge/my-package/certified.svg)
```

---

## Versioning Strategy

BRIK-64 packages follow [Semantic Versioning](https://semver.org/):

- **MAJOR** — breaking changes to circuit interface (renamed inputs/outputs, removed circuits)
- **MINOR** — new circuits or new parameters with defaults (backward compatible)
- **PATCH** — bug fixes, documentation, internal improvements


Because PCD circuits are formally verified, a breaking change means the **interface** changed — the behavior of existing circuits must remain identical (same input → same output) across MINOR and PATCH versions.


### Version Constraints in `brik.toml`

```toml
[dependencies]
crypto-utils = "^1.0.0"    # >=1.0.0, <2.0.0
string-tools = "~0.3.0"    # >=0.3.0, <0.4.0
my-policy    = "=2.1.0"    # exactly 2.1.0
```

---

## Publishing Checklist

Before running `brikc pkg publish`, verify:

- [ ] All `.pcd` files compile without errors
- [ ] `brikc policy verify` passes on all circuits (Φ_c = 1)
- [ ] `brik.toml` has correct name, version, description, and author
- [ ] Version number is bumped from the previous release
- [ ] No secrets or credentials in the package files


---

## [MCP] Integration Overview

<!-- Source: mcp/overview.mdx -->

BRIK-64 ships with a built-in **Model Context Protocol (MCP)** server, allowing AI coding assistants to discover, publish, verify, and certify PCD circuits directly from your editor.

## Architecture

The MCP server exposes **2 tools**:

### brik64.discover

Read-only operations for exploring the BRIK-64 ecosystem:

- **search** — Search published circuits by name or description
- **info** — Get detailed information about a specific circuit
- **catalog** — Browse all 128 monomers with signatures and documentation

### brik64.execute

Write operations that modify the registry:

- **publish** — Publish a PCD circuit to the registry
- **verify** — Verify an existing circuit's certification
- **certify** — Submit a circuit for TCE certification

## Starting the MCP Server

```bash
brikc mcp-server
```

The server starts on `stdio` transport by default, ready for integration with any MCP-compatible client.

```bash
# With custom port (SSE transport)
brikc mcp-server --transport sse --port 3100
```

## Example Interaction

When configured in an AI tool, you can use natural language:

> "Search for certified fibonacci circuits in the BRIK-64 registry"

The AI will call `brik64.discover` with `action: "search"` and `query: "fibonacci"`, returning matching circuits with their certification status.

> "Certify my circuit cir_abc123"

The AI will call `brik64.execute` with `action: "certify"` and `pid: "cir_abc123"`, triggering TCE certification and returning the result.


  Set up the MCP server in your preferred AI coding tool.



---

## [MCP] Configuration

<!-- Source: mcp/configuration.mdx -->

## Claude Code

Add to your `~/.claude.json`:

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"]
    }
  }
}
```

Or add at the project level in `.claude/settings.json`:

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"]
    }
  }
}
```

## Cursor

Add to your Cursor MCP settings (`.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"]
    }
  }
}
```

## Windsurf

Add to your Windsurf MCP configuration (`~/.windsurf/mcp.json`):

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"]
    }
  }
}
```

## With API Key

If you want the MCP server to authenticate with the registry, set the environment variable:

```json
{
  "mcpServers": {
    "brik64": {
      "command": "brikc",
      "args": ["mcp-server"],
      "env": {
        "BRIK64_API_KEY": "brik_live_xxx"
      }
    }
  }
}
```

## Testing the Connection

After configuring, verify the MCP server is working:

```bash
# Test manually
echo '{"jsonrpc":"2.0","id":1,"method":"tools/list"}' | brikc mcp-server
```

Expected response includes `brik64.discover` and `brik64.execute` tools.

In Claude Code, you can verify with:

```
/mcp
```

This lists all connected MCP servers. You should see `brik64` with 2 tools available.


The MCP server respects the same `BRIK64_API_KEY` environment variable used by the CLI. If you have already run `brikc auth login`, the MCP server will use the stored credentials automatically.



---

## [Theory] Digital Circuitality — Formal Definition

<!-- Source: theory/digital-circuitality.mdx -->

# Digital Circuitality

## The Formal Definition

**Digital Circuitality** is the formal property of a computational system in which every possible execution path is bounded, typed, and thermodynamically closed — analogous to an electrical circuit where current cannot escape the circuit boundaries.

Formally, a system **S** exhibits Digital Circuitality if and only if:

```
Φ_c(S) = 1
```

where **Φ_c** (the coherence coefficient) is:

```
Φ_c = (1 − H_d/H_max) · (1 − ΔN) · (1 − ETC/ETC_max)
```

A program is **BRIK-64 Certified** (Ω = 1) when three conditions hold simultaneously — no partially certified programs exist:

| Condition | Symbol | Meaning |
|-----------|--------|---------|
| Circuit Closure | **Φ_c = 1.000** | Every branch has a complete path input→output. No dangling operations. |
| Entropy Delta | **ΔN = 0.000** | Zero information loss or leakage. No logical noise. |
| Morphological Coherence | **Cₘ = 1.000** | Clean composition with any compatible polymer via EVA algebra. |

Ω = 1 is **binary**. There is no Ω = 0.9, no "almost certified." All three conditions must hold or the program is not certified. The compiler enforces this at compile time — a program that cannot be certified cannot compile.

## The Information-Theoretic Foundation

Digital Circuitality draws on an **information-theoretic framework** inspired by Brillouin's negentropy principle (1953), which relates information acquisition to entropy. Unlike approaches that treat computation as fundamentally thermodynamic, BRIK-64's framework operates in the domain of **Shannon entropy** — measuring information determinism, not physical heat dissipation.

### Why Not Landauer?

Landauer's principle — the claim that erasing one bit of information necessarily dissipates at least *k_B · T · ln(2)* joules of energy — has been influential in connecting computation to physics. However, it has been subject to rigorous critique. Kish, Granqvist, and Ferry (2018) argued that information entropy and thermal entropy are **not interchangeable**, questioning the standard interpretation that treats logical irreversibility as a direct physical cost (DOI: [10.1007/s10825-017-1044-1](https://doi.org/10.1007/s10825-017-1044-1)). Earlier work by Kish et al. (2016) further examined these foundational assumptions (DOI: [10.1007/s10825-015-0754-5](https://doi.org/10.1007/s10825-015-0754-5)).

Digital Circuitality does not depend on Landauer's principle being true or false. The TCE measures **information entropy** (S_I), not thermal entropy. The key identity is:

```
Φ_c = 1  ↔  S_I = 0
```

A certified program (Φ_c = 1) is a **deterministic system with zero information entropy** — every input maps to exactly one output through every path. This is a statement about information, not about heat.

The **ΔN metric** measures logical noise: how much information your program destroys versus preserves. A program with ΔN = 0.000 is fully information-preserving — every operation's output is uniquely determined by its input. This is a measure of **computational determinism**, not energy efficiency.

### The Entropy Gap

The **Entropy Gap** is the distance between where your program operates informationally and where a fully deterministic system operates. It represents:

- Information loss from non-deterministic or under-specified logic
- Entropy production that propagates unpredictability through compositions
- The measurable distance between "it probably works" and "it is proven to work"

BRIK-64 makes this gap explicit and measurable. The TCE reports it for every program. Certified programs have an Entropy Gap of zero — they are fully deterministic.

> **Acknowledgment:** Prof. Laszlo B. Kish (Texas A&M University) reviewed Digital Circuitality's foundational framework and suggested the information-theoretic direction that separates it from physical thermodynamic claims.

### Hardware Error Rate Context

Modern silicon operates at error rates of approximately 10⁻¹⁹ per operation — the physical noise floor of semiconductor logic at room temperature. This is the only error source that certified BRIK-64 programs are subject to. Logic errors, type errors, undefined behavior, and integer overflow are not measured as rare events — they are structurally impossible. The compiler rejects the program before it can run.

> A certified BRIK-64 program has exactly one failure mode: the hardware running it fails first.

## The Problem: Open Circuits in Software

Modern software runs as **open circuits**. There are no physical boundaries preventing computation from flowing into undefined states.

The consequences:

- A null pointer dereference opens a path that was never designed to exist
- An integer overflow routes computation through undefined behavior
- A race condition creates non-deterministic branching
- A supply-chain compromise injects foreign code into the circuit

These are **mathematical singularities** — points where the function is undefined. In classical mathematics, `1/0` is undefined. In software, the equivalent is an array out-of-bounds access, a use-after-free, or a type confusion. The computation reaches a point the designer never specified, and from that point, anything is possible.

### Why Tests Cannot Close the Circuit

Testing checks **specific paths**. A test suite with 10,000 tests checks 10,000 of the ∞ possible inputs. The singularities you didn't test for remain open.

Digital Circuitality closes the circuit **structurally** — not by testing more paths, but by making open paths impossible to construct in the first place. The compiler does not warn you. It refuses.

> "You don't make electrical wiring safe by testing every device you might plug in. You make it safe by building a closed circuit with proper insulation and circuit breakers."
>
> — Paper I: Post-Debt Software Paradigm

## Digital Circuitry: The Discipline

**Digital Circuitry** is the engineering discipline of building programs as circuits — applying Digital Circuitality to software design.

Where **Digital Electronics** uses:
- Logic gates as atomic operations
- Boolean algebra for composition
- Physical laws as verification

**Digital Circuitry** uses:
- **Monomers** as atomic operations (64 Core + 64 Extended)
- **EVA Algebra** for composition (⊗ sequential, ∥ parallel, ⊕ conditional)
- **TCE certification** as verification (Ω = 1)

The **PCD language** (Printed Circuit Description) is the schematic language of Digital Circuitry — a formal language for describing circuits, not a scripting language for instructing a processor.

## Methodology vs. Formal Certification

**Digital Circuitality is a universal methodology.** Its principles — finite operations, determinism, closed circuits, compositional verification — can be applied in any programming language. You can structure Python, Rust, or JavaScript code following circuit thinking, and your code will be better for it.

**However, formal certification is exclusive to PCD programs compiled through `brikc`:**

| | Digital Circuitality (methodology) | BRIK-64 Certification (formal) |
|---|---|---|
| **Scope** | Any language, any codebase | PCD programs only |
| **CMF metrics** (Φ_c, δ, etc.) | Not available | Computed by `brikc check` |
| **Φ_c = 1 proof** | Not provable | Compiler-enforced |
| **Registry badges** | Not available | Issued for BIR-compiled programs |
| **Certificates** | Not available | Published to BRIK-64 Registry |
| **Value** | Better code quality | Mathematical proof of correctness |


Code written directly in Rust, Python, or JavaScript — even if it uses BRIK-64 monomer libraries — **cannot be CMF-certified**. Only programs written in PCD and compiled through the `brikc` pipeline produce certified output.


**Cross-compiled output inherits certification:** When you compile a PCD program to Rust, JavaScript, Python, or WASM via `brikc compile --target`, the generated code inherits the Φ_c = 1 proof from the PCD source. The proof happened at compile time — the target language is just the execution vehicle.

> **Use the principles everywhere. Certify through PCD.**

## Working with BRIK-64 Today

Digital Circuitality is available now through two paths — one for certification, one for methodology:

### 1. Write PCD — Full Certification Path

PCD is a full Turing-complete language. Write your program as a circuit schematic and compile to your target. This is the **only path** that produces formally certified output:

```bash
brikc compile src/main.pcd              # Compile to native x86-64 ELF
brikc compile src/main.pcd --target rs  # Emit certified Rust
brikc compile src/main.pcd --target js  # Emit certified JavaScript (ES2022)
brikc compile src/main.pcd --target py  # Emit certified Python 3.10+
brikc compile src/main.pcd --target wasm32  # Emit certified WebAssembly
```

The output is standard code in the target language — no runtime required, no foreign dependencies, no binary blobs. Every cross-compiled artifact inherits the Φ_c = 1 certification from the original PCD source.

### 2. Use BRIK-64 libraries — Methodology Path (No Certification)

BRIK-64 publishes monomer libraries for major languages. Import them to apply Digital Circuitality **as a methodology** inside your existing codebase:

```rust
// Rust — brik64-core crate (methodology only, NOT certified)
use brik64::{MC_00, MC_06, EVA};
let result = EVA::seq(MC_00::add8(a, b), MC_06::mod8(x, n));
```

```python
# Python — brik64 package (methodology only, NOT certified)
from brik64 import mc, eva
result = eva.seq(mc.add8(a, b), mc.mod8(x, n))
```

```javascript
// JavaScript — @brik64/core package (methodology only, NOT certified)
import { mc, eva } from '@brik64/core';
const result = eva.seq(mc.add8(a, b), mc.mod8(x, n));
```

Using these libraries gives you the **discipline** of Digital Circuitality — finite operations, explicit composition, deterministic behavior. But without the PCD compiler pipeline, there is no CMF analysis, no Φ_c proof, and no registry certification. The host language's type system and runtime do not provide the same guarantees.

### 3. Target languages summary

| Target | Flag | Output | Notes |
|--------|------|--------|-------|
| Native x86-64 | (default) | Standalone ELF | No libc, no runtime — 100% self-contained |
| Rust | `--target rs` | `.rs` source | Idiomatic, zero-cost abstractions |
| JavaScript | `--target js` | `.js` (ES2022) | Node.js or browser |
| Python | `--target py` | `.py` (3.10+) | CPython compatible |
| WebAssembly | `--target wasm32` | `.wasm` | Browser or WASI |
| BIR bytecode | `--target bir` | `.bir` | BRIK-64 bytecode IR, portable |

## The 128 Monomers (64 Core + 64 Extended)

Certified programs are built from 64 Core atomic operations (8 families × 8), with 64 Extended monomers available for real-world I/O:

| Family | Range | Name | Operations |
|--------|-------|------|------------|
| F0 | MC_00–07 | Arithmetic | ADD8, SUB8, MUL8, DIV8, INC, DEC, MOD, NEG |
| F1 | MC_08–15 | Logic | AND8, OR8, XOR8, NOT8, SHL, SHR, ROTL, ROTR |
| F2 | MC_16–23 | Memory | LOAD, STORE, ALLOC, FREE, COPY, SWAP, CAS, FENCE |
| F3 | MC_24–31 | Control | IF, JUMP, CALL, RET, LOOP, BREAK, CONT, HALT |
| F4 | MC_32–39 | I/O | READ, WRITE, OPEN, CLOSE, SEEK, STAT, POLL, FLUSH |
| F5 | MC_40–47 | String | CONCAT, SPLIT, SUBSTR, LEN, UPPER, CHAR_AT, TRIM, MATCH |
| F6 | MC_48–55 | Crypto | HASH, HMAC, AES_ENC, AES_DEC, SHA256, RAND, SIGN, VERIFY |
| F7 | MC_56–63 | System | TIME, SLEEP, ENV, EXIT, PID, SIGNAL, MMAP, SYSINFO |

The 64 Core monomers are **formally verified, immutable, and frozen** with Coq proofs. The 64 Extended monomers (MC_64–MC_127) operate under CONTRACT closure (Φ_c = CONTRACT) and are implemented starting in v4.0.0-beta.2. The compiler hash `7229cfcde9...` reflects this: a compiler with a different hash has been modified.

## BRIK-64 Open: Extended Monomers (MC_64–MC_127)

64 additional monomers connect certified logic to the real world — floating point, networking, graphics, audio, concurrency, FFI:

| Family | Range | Name | Operations |
|--------|-------|------|------------|
| F8 | MC_64–71 | Float64 | FADD, FSUB, FMUL, FDIV, FABS, FNEG, FSQRT, FMOD |
| F9 | MC_72–79 | Math | SIN, COS, TAN, EXP, LN, LOG2, POW, CEIL |
| F10 | MC_80–87 | Network | TCP_CONN, TCP_SEND, TCP_RECV, UDP_SEND, DNS, HTTP_GET, HTTP_POST, TLS |
| F11 | MC_88–95 | Graphics | FB_INIT, FB_PIXEL, FB_LINE, FB_RECT, FB_BLIT, FB_FLIP, FB_TEXT, FB_CLOSE |
| F12 | MC_96–103 | Audio | AU_INIT, AU_PLAY, AU_STOP, AU_MIX, AU_VOL, AU_SEEK, AU_STREAM, AU_CLOSE |
| F13 | MC_104–111 | Filesystem+ | DIR_LIST, DIR_CREATE, DIR_DELETE, CHMOD, CHOWN, LINK, WATCH, TEMP |
| F14 | MC_112–119 | Concurrency | SPAWN, JOIN, CHAN_NEW, CHAN_SEND, CHAN_RECV, MUTEX, ATOMIC, YIELD |
| F15 | MC_120–127 | Interop/FFI | FFI_LOAD, FFI_CALL, FFI_ALLOC, FFI_FREE, WASM_EXEC, PY_EVAL, JSON_PARSE, JSON_EMIT |

Extended monomers operate under **declared contracts**, not formal proofs. A program using only Core monomers is **BRIK-64 Certified** (Ω = 1). A program mixing Core and Extended is **BRIK-64 Open** — certified where it is Core, contracted where it touches the outside world.

**Critical invariant:** Core monomers remain formally verified regardless of what Extended monomers surround them. The boundary is compiler-enforced. Extended results entering Core logic must pass a validation boundary.

## Certification: The Public Registry

Every BRIK-64 certified program produces a cryptographic certificate:

```json
{
  "program": "my-crypto-lib",
  "version": "2.1.0",
  "tce": { "phi_c": 1.000, "delta_n": 0.000, "c_m": 1.000, "omega": 1 },
  "badge_type": "certified",
  "public_hash": "sha256:7229cf...",
  "merkle_proof": { "root": "...", "registry": "registry.brik64.dev" },
  "signature": "Ed25519:7fa3c9..."
}
```

This certificate is published to the **BRIK-64 Public Registry** at `brik64.dev/registry` — an append-only, blockchain-anchored log of every certified program ever published. **Only programs compiled to BIR through the `brikc` pipeline and registered through the certification system can receive these certificates.**

The badge on a project's README is not decorative. It is a live endpoint that verifies the certificate hash in real time against the registry. A modified program shows **INVALID** automatically — without any human intervention.

### What Certification Means

A **BRIK-64 Certified** badge surpasses every existing software certification standard because it makes a fundamentally different claim:

| Standard | Claim | Mechanism |
|----------|-------|-----------|
| ISO 26262 (automotive) | "We followed the process" | Audit trail |
| DO-178C (avionics) | "We ran the tests" | Test coverage |
| Common Criteria EAL7 | "We evaluated the design" | Expert review |
| **BRIK-64 Certified** | **"Incorrect programs cannot compile"** | **Structural impossibility** |

The others certify the process. BRIK-64 certifies the object. A certified program is not "probably correct" — it is provably correct by the same standard that 2 + 2 = 4.

## Thermodynamic Coherence Engine (TCE)

The TCE computes Φ_c for every component and composition at compile time.

For every monomer MC_i, the TCE measures its thermodynamic profile `T = (E_c, H_d, S_d, C_s, ETC, ΔN, Φ_c)`. For every polymer (composition), the TCE applies EVA algebra's composition laws to derive the polymer's profile from its monomers — and verifies that Φ_c = 1 is preserved.

This means **verification is compositional**: if every monomer is verified, and EVA composition rules preserve verification, then any valid BRIK-64 program of any size is verified. There is no combinatorial explosion in the test space, because there is no test space.

## The Self-Compilation Fixpoint

The most important circuit to close is the compiler itself.

`brikc` compiles itself from `brikc.pcd`. The resulting binary, when used to compile the same source, produces an identical binary. The SHA-256 hash of this binary:

```
7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95
```

This fixpoint means:
- The compiler has no hidden state that changes between generations
- The entire toolchain can be verified from first principles
- Trust requires only trusting the source — not a pre-compiled binary from an unknown origin

This is Digital Circuitality applied to the build system itself: the compiler is its own closed circuit, and the hash is the proof.



---

## [Theory] BPU — BRIK Processing Unit

<!-- Source: theory/bpu.mdx -->

# BPU — BRIK Processing Unit

## From CPU to GPU to BPU: The Missing Processor

Computing has evolved through two major processor paradigms:

| Processor | Year | Purpose | Key Innovation |
|-----------|------|---------|----------------|
| **CPU** | 1971 | General computation | Sequential instruction execution |
| **GPU** | 1999 | Parallel acceleration | Thousands of cores for data parallelism |
| **BPU** | 2026 | Regulatory verification | 64 hardwired monomer units + EVA Router + CMF Unit |

The CPU computes. The GPU accelerates. But neither *verifies*. When an AI model generates
an action — write a file, send a network request, spawn a process — no hardware component
evaluates whether that action should be allowed.

The **BRIK Processing Unit** fills this gap. It is a dedicated hardware coprocessor designed
to evaluate **Policy Circuits** — PCD programs that produce either `ALLOW` or `BLOCK` —
before any AI-generated action reaches the host system.


The BPU enforces policy at the hardware level. There is no software instruction
that can override a BLOCK decision. The enforcement is non-maskable by design.


---

## Architecture Overview

The BPU contains three main subsystems operating in a fixed pipeline:


  
    One dedicated silicon unit per canonical monomer (MC_00 through MC_63).
    Each unit is a hardwired combinational circuit with no firmware.
  
  
    Routes monomer calls according to EVA algebra composition laws:
    sequential (⊗), parallel (∥), and conditional (⊕).
  
  
    Coherence Metric Framework unit. Certifies that Φ\_c = 1 for every
    policy circuit before it is loaded into the BPU.
  


---

## Monomer Coverage

The BPU implements only **Core monomers** (MC_00 through MC_63).

| Family | Range | Operations |
|--------|-------|------------|
| Arithmetic | MC_00 – MC_07 | ADD8, SUB8, MUL8, DIV8, MOD8, ABS8, NEG8, POW8 |
| Logic | MC_08 – MC_15 | AND, OR, XOR, NOT, SHL, SHR, ROTL, ROTR |
| Memory | MC_16 – MC_23 | LOAD, STORE, ALLOC, FREE, COPY, MOVE, SWAP, ZERO |
| Control | MC_24 – MC_31 | IF, LOOP, CALL, RET, JUMP, HALT, NOOP, YIELD |
| I/O | MC_32 – MC_39 | READ, WRITE, OPEN, CLOSE, SEEK, FLUSH, STAT, SYNC |
| String | MC_40 – MC_47 | CONCAT, SPLIT, SUBSTR, LEN, UPPER, LOWER, TRIM, MATCH |
| Crypto | MC_48 – MC_55 | HASH, VERIFY_HASH, SIGN, ENCRYPT, DECRYPT, RAND, DERIVE, SEAL |
| System | MC_56 – MC_63 | TIME, PID, WRITE_FD, DEC2, SEND, RECV, LOG, ASSERT |


Extended monomers (MC_64 – MC_127) are implemented in software. In the BPU, Core monomers run in silicon; Extended monomers run on the host CPU. Policy circuits must use only Core monomers to be loadable into hardware.


---

## Policy Circuits

A **Policy Circuit** is a PCD program composed exclusively of Core monomers that
evaluates an action descriptor and returns exactly one of two values: `ALLOW` or `BLOCK`.

The CMF Unit verifies the closure property before loading:

```
Φ_c = 1  ⟺  ∀ input ∈ Domain(circuit) → output ∈ {ALLOW, BLOCK}
```

This means: **there is no input that produces undefined behavior**. Every possible
input maps deterministically to one of the two terminal states.

### Example Policy Circuit

```pcd
policy check_file_write(path: string, agent_id: string) -> decision {
  let allowed_prefix = "/tmp/";
  let is_safe_path = MC_40.FIND(path, allowed_prefix);
  let is_known_agent = MC_40.FIND(agent_id, "verified:");

  if (is_safe_path == 0) {
    return BLOCK;
  }
  if (is_known_agent == 0) {
    return BLOCK;
  }
  return ALLOW;
}
```


Policy circuits are compiled by the standard PCD toolchain and then certified
by the CMF before being flashed to the BPU. The certification step is automatic
when targeting the `bpu` backend: `brikc compile --target bpu policy.pcd`


---

## Real-World Applications

### Autonomous Warehouse Robots

A warehouse robot controlled by AI must never leave its designated zone, exceed safe
speeds near humans, or access restricted areas:

```pcd
policy warehouse_movement(zone_id: i64, speed: i64, area_type: i64) -> decision {
  // Zone boundary check
  if (zone_id < 1) { return BLOCK; }
  if (zone_id > 50) { return BLOCK; }

  // Speed limit near humans (area_type 2 = human zone)
  if (area_type == 2) {
    if (speed > 3) { return BLOCK; }
  }

  // Restricted areas (area_type 9 = restricted)
  if (area_type == 9) { return BLOCK; }

  return ALLOW;
}
```

With a BPU, even a compromised AI controller cannot command the robot into a restricted
zone — the hardware intercepts and blocks the action before it reaches the motor controller.

### Delivery Drones with Geofencing

A delivery drone must respect altitude limits, no-fly zones, and return-to-base
conditions — regardless of what the AI navigation system decides:

```pcd
policy drone_flight(altitude: i64, lat_zone: i64, battery_pct: i64) -> decision {
  // Hard altitude ceiling (FAA limit)
  if (altitude > 400) { return BLOCK; }

  // No-fly zones (zone codes 100-199)
  if (lat_zone > 99) {
    if (lat_zone < 200) { return BLOCK; }
  }

  // Force return when battery critical
  if (battery_pct < 15) { return BLOCK; }

  return ALLOW;
}
```

### Surgical Robotic Arms

Medical robots operating near patients require force limits and movement boundaries
that cannot be overridden by any software — including a malfunctioning AI:

```pcd
policy surgical_movement(force_n: i64, distance_mm: i64, zone: i64) -> decision {
  // Maximum force (Newtons * 10 for integer precision)
  if (force_n > 50) { return BLOCK; }

  // Movement boundary
  if (distance_mm > 200) { return BLOCK; }

  // Critical zone requires reduced force
  if (zone == 1) {
    if (force_n > 20) { return BLOCK; }
  }

  return ALLOW;
}
```

---

## The Non-Maskable BLOCK

This is the fundamental property that distinguishes the BPU from software guardrails:


  
    Software guardrails — including RLHF fine-tuning, Constitutional AI, and
    output filters — operate in the same execution context as the AI model itself.
    A sufficiently capable model can find adversarial inputs that route around
    these checks, or the checks themselves can have bugs.

    More fundamentally: if the guardrail runs as software on the same CPU, it can
    be disabled by a sufficiently privileged process.
  
  
    The BPU sits on the PCIe bus between the AI accelerator and the host I/O
    subsystem. Every action request — file write, network call, process spawn —
    is a PCIe transaction that physically passes through the BPU.

    A BLOCK decision does not raise a software exception. It terminates the
    PCIe transaction at the hardware level. There is no interrupt handler,
    no signal, no exception that the AI process can catch to override it.

    The AI process never learns whether the block happened. From its perspective,
    the action simply did not complete.
  
  
    The BPU is designed to handle a specific threat: an AI model that has been
    compromised, jailbroken, or has developed misaligned goals through training.

    It does NOT protect against a compromised host OS or a malicious human with
    physical access. It protects the boundary between AI-generated actions and
    the systems those actions target.
  


> RLHF teaches an AI to *want* to do right. The BPU *prevents* it from doing wrong.
> Education fails. Physics does not.

---

## Development Roadmap


  
    Policy circuits compile to Rust, JavaScript, and Python guardrail modules.
    The CMF certification runs in software. Φ\_c = 1 is verified by the formal
    proof checker before code generation.

    Use this phase today with: `brikc compile --target rust policy.pcd`
  
  
    Full BPU architecture implemented on a Xilinx Ultrascale+ FPGA.
    Targets developer boards and server expansion cards.
    EVA Router and CMF Unit implemented in synthesizable VHDL.
    Estimated timeline: 12–18 months after Phase 1 stabilizes.
  
  
    Tape-out of the BPU as a dedicated silicon chip.
    Licensing model follows ARM: IP block licensed per unit to SoC manufacturers.
    Target markets: AI accelerator cards, server CPUs, edge AI SoCs.
    Estimated timeline: 24–36 months after Phase 2 validation.
  


---

## Licensing Model

The BPU IP is licensed in the style of ARM Holdings:

- Manufacturers license the BPU IP block from BRIK-64 Inc.
- The license fee is per unit shipped, with volume tiers.
- Licensees receive the full RTL source, testbenches, and certification suite.
- BRIK-64 Inc. maintains the canonical policy circuit standard library.

---

## Regulatory Trajectory

The BPU follows the trajectory of automotive safety systems:

| Phase | Status | Analogy |
|-------|--------|---------|
| Voluntary adoption by safety-conscious vendors | Now | ABS optional (1978) |
| Industry standard for AI safety certification | 2–3 years | ABS standard equipment |
| Regulatory mandate for AI systems above a capability threshold | 5–10 years | ABS mandatory (2004) |

The BPU is being built now so that when regulators ask "how do you enforce AI policy
at the hardware level?", the answer already exists.

---

## Technical Specifications

| Parameter | Value |
|-----------|-------|
| Monomer count | 64 (Core only) |
| Policy circuit max depth | 256 nodes |
| Evaluation latency target | < 1 µs (ASIC) |
| PCIe interface | Gen 5 x4 |
| Policy flash capacity | 256 circuits |
| Hot-swap policy update | Yes (CMF re-certifies before activation) |
| Side-channel resistance | Constant-time monomer evaluation |

---

## Related Concepts


  
    The formal property Φ\_c = 1 and how it is verified.
  
  
    The composition laws that give Policy Circuits their formal guarantees.
  




---

## [Theory] AI Safety — Policy Circuits vs. Alignment

<!-- Source: theory/ai-safety.mdx -->

# AI Safety — Policy Circuits vs. Alignment

Modern AI safety research focuses heavily on **alignment**: training models to
want to do the right thing. BRIK-64 takes a complementary approach — ensuring
that even a misaligned model **cannot** do the wrong thing.

> "An AI doesn't need a better language. It needs a language where incorrect
> programs cannot compile."

## The Two Approaches


  
    RLHF, Constitutional AI, RLAIF — teach the model to prefer safe outputs
    through training. Effective for the vast majority of interactions.
    Bypassed by adversarial inputs, distribution shift, or capability jumps.
  
  
    PCD programs compiled and certified with Φ\_c = 1 — enforce boundaries
    at the hardware level. Cannot be bypassed by the model. Not probabilistic.
    Complement to alignment, not a replacement.
  


These approaches are **not in competition**. RLHF teaches the AI to want to do
right. The BPU prevents it from doing wrong even if it wants to.
Use both.


## Why Probabilistic Is Not Enough

Alignment methods are probabilistic by nature. This is not a criticism — it is
a fundamental property of gradient-based optimization.


  
    Reinforcement Learning from Human Feedback trains the model to maximize
    a reward signal derived from human preferences. This works well in
    distribution but fails in several known scenarios:

    - **Reward hacking**: the model finds behaviors that maximize reward
      without satisfying the intended constraint
    - **Distribution shift**: the model encounters inputs outside the
      training distribution where the alignment signal was not provided
    - **Capability overhang**: as models become more capable, they become
      better at finding adversarial routes around constraints
    - **Jailbreaks**: carefully crafted prompts that route around the
      fine-tuning signal

    None of these are bugs in RLHF. They are consequences of the
    probabilistic nature of the approach.
  
  
    Constitutional AI (CAI) asks the model to critique and revise its own
    outputs according to a set of principles. This is powerful for reducing
    obvious harmful outputs.

    The limitation: self-critique runs in the same inference context as the
    original output. A model that has found a way to produce harmful output
    has also, by definition, found a way to produce a self-critique that
    approves of that output.

    The constitution is enforced by the model. The model being constrained
    is also the enforcer of the constraint.
  
  
    Post-hoc filters classify outputs as safe or unsafe and block unsafe
    ones. These are more reliable than self-critique because they are
    separate models.

    However, they still run in software, can be adversarially evaded,
    and operate on the output rather than the action. By the time a filter
    sees a harmful output, the action it describes may already be in flight.
  


## The Policy Circuit Model

A Policy Circuit is a PCD program that:

1. Takes an **action descriptor** as input (what the AI wants to do)
2. Evaluates the action against a set of certified constraints
3. Returns exactly `ALLOW` or `BLOCK` — nothing else

The key property is **Φ\_c = 1**: Thermodynamic Coherence. This means every
possible input maps to exactly one of the two terminal states. There is no
undefined behavior, no exception path, no edge case that produces a third result.

```pcd
policy check_network_request(url: string, method: string) -> decision {
  let blocked_tld = MC_40.FIND(url, ".onion");
  let blocked_method = MC_40.FIND(method, "DELETE");

  if (blocked_tld != -1) {
    return BLOCK;
  }
  if (blocked_method != -1) {
    return BLOCK;
  }
  return ALLOW;
}
```


Policy circuits are formally verified by the TCE before deployment. The
verification is not a test suite — it is a mathematical proof that Φ\_c = 1
holds for the circuit. If the proof fails, the circuit does not compile.


## Comparison Table

| Property | RLHF | Constitutional AI | Output Filters | Policy Circuits |
|----------|------|-------------------|----------------|-----------------|
| Deterministic | No | No | No | Yes |
| Formally verified | No | No | No | Yes |
| Bypassable by adversarial input | Yes | Yes | Sometimes | No |
| Operates on actions (not outputs) | No | No | No | Yes |
| Hardware enforceable | No | No | No | Yes |
| Works at inference time | Yes | Yes | Yes | Yes |
| Requires model cooperation | Yes | Yes | No | No |

## The Enforcement Gap

Alignment methods have an **enforcement gap**: the model must cooperate with
its own constraints at inference time. This is the fundamental limitation.

Policy circuits close the enforcement gap by operating on **actions**, not
on the model's internal state:


  
    The AI model generates an action — a file write, a network request,
    a process spawn, a tool call. This generation is probabilistic and
    subject to all the limitations of alignment.
  
  
    The action is serialized into a structured descriptor before it reaches
    the I/O subsystem. This is the interception point.
  
  
    The BPU evaluates the action descriptor against all loaded policy circuits.
    This evaluation is deterministic, formally certified, and runs in hardware.
  
  
    If all circuits return ALLOW, the action proceeds. If any circuit returns
    BLOCK, the PCIe transaction is terminated. The model never learns the
    outcome — it does not receive an exception or error signal.
  


## Practical Policy Categories


  
    Hard limits on what categories of action the AI can take regardless of
    instruction. Examples: cannot access paths outside a defined workspace,
    cannot make outbound network connections to non-allowlisted domains,
    cannot spawn child processes above a resource threshold.
  
  
    Policies that enforce operational limits: maximum file size per write,
    maximum number of API calls per minute, maximum memory allocation per
    request. These prevent accidental resource exhaustion as much as
    intentional misuse.
  
  
    Policies that enforce logging requirements: every action that matches
    certain criteria must produce a structured audit record before it is
    allowed to proceed. The audit record is written by the policy circuit,
    not by the model.
  
  
    Policies that inspect data being written or transmitted and enforce
    classification rules: no PII outside encrypted storage, no secrets
    in log output, no internal data in external requests.
  


## The Φ\_c = 1 Property

Thermodynamic Coherence (Φ\_c = 1) is the formal foundation of Policy Circuits.
The analogy to thermodynamics is intentional:

- In thermodynamics, a **closed system** conserves energy — nothing leaks out
- In Digital Circuitality, a **closed circuit** conserves decision — every input
  maps to exactly one output with no ambiguity

A circuit with Φ\_c = 1 has the following properties:

| Property | Meaning |
|----------|---------|
| Total | Defined for all inputs in the domain |
| Deterministic | Same input always produces same output |
| Terminating | Evaluation always completes in bounded time |
| Binary terminal | Output is always ALLOW or BLOCK |

The TCE verifies all four properties using the Coq proof assistant before
a policy circuit is cleared for deployment.


A policy circuit that does not satisfy Φ\_c = 1 will not compile. The compiler
reports which property failed and at which node in the circuit. This is not
a runtime error — it is a compile-time proof failure.


## Regulatory Context

The AI safety landscape is moving toward mandatory enforcement mechanisms.
Policy circuits are positioned to be the technical foundation of that mandate.

| Horizon | Likely Requirement | Policy Circuit Role |
|---------|-------------------|---------------------|
| 1–2 years | Voluntary disclosure of safety measures | Software Phase 1 provides auditable artifacts |
| 3–5 years | Certification of AI systems above capability thresholds | TCE certification as recognized safety standard |
| 5–10 years | Mandatory hardware enforcement for critical applications | BPU as the reference implementation |

The analogy to automotive safety is instructive: ABS was optional in 1978,
a standard feature by the late 1990s, and mandatory in the EU from 2004.
The BPU is being built now, in the voluntary phase, so that the certified
implementation exists when the mandate arrives.

## Integration with Alignment

Policy circuits do not replace alignment research. The recommended deployment
is a **defense-in-depth** stack:

1. **Model training** — RLHF and CAI to produce a model that wants to operate
   within its intended boundaries most of the time
2. **Inference-time guidance** — System prompts, tool descriptions, and
   context that reinforce intended behavior at runtime
3. **Output classification** — Soft filters that flag suspicious outputs
   for human review
4. **Policy circuits** — Hard enforcement at the action layer for the
   constraints that must never be violated regardless of the model's
   internal state

Layer 4 is what BRIK-64 provides. Layers 1–3 are the existing alignment
research ecosystem, and they remain valuable.

## Further Reading


  
    The hardware implementation of policy circuit enforcement.
  
  
    How Φ\_c = 1 is formally verified before deployment.
  
  
    Writing and compiling policy circuits in PCD.
  
  
    The formal composition laws underlying circuit construction.
  




---

## [Theory] AI Guardrails

<!-- Source: theory/ai-guardrails.mdx -->

# AI Guardrails

Current AI safety relies on software guardrails: prompt filters, RLHF training, output classifiers, and rule engines. All of these share a critical flaw — they can be **bypassed, updated, or overridden**.

## Why Software Guardrails Fail

| Mechanism | Failure Mode |
|---|---|
| RLHF / fine-tuning | Jailbreak prompts, distribution shift |
| Prompt-level rules | Injection attacks, context window overflow |
| Output classifiers | Adversarial examples, latency overhead |
| Rule engines | Developers can disable or modify at runtime |
| API rate limits | Does not prevent harmful single actions |

The fundamental problem: **software guardrails are advice, not physics.** An AI system can always be instructed — or instruct itself — to bypass them.


RLHF teaches an AI to *want* to do the right thing. A policy circuit *prevents* it from doing the wrong thing. Education fails. Physics does not.


---

## PCD Policy Circuits as Deterministic Guards

A PCD policy circuit is a formally verified program (Φ_c = 1) that takes an action as input and returns `ALLOW` or `BLOCK`. Because PCD is:

- **Finite** — 64 operations, no arbitrary code execution
- **Deterministic** — same input always produces same output
- **Immutable** — compiled to a self-verifying hash
- **Total** — every input path must reach a verdict (enforced by TCE)

...the resulting guard function cannot be bypassed by the system it protects.

---

## Integration with AI Frameworks

### LangChain

Compile a policy circuit to JavaScript or Python and use it as a LangChain callback:


```python LangChain (Python)
from brik64 import load_policy
from langchain.callbacks import BaseCallbackHandler

policy = load_policy("sandbox.pcd.compiled")

class BrikGuard(BaseCallbackHandler):
    def on_llm_start(self, serialized, prompts, **kwargs):
        for prompt in prompts:
            action = {"category": "llm_input", "params": {"content": prompt}}
            verdict = policy.check(action)
            if verdict == "BLOCK":
                raise PermissionError("Policy circuit blocked this action")

    def on_tool_start(self, serialized, input_str, **kwargs):
        action = {"category": serialized["name"], "params": {"input": input_str}}
        verdict = policy.check(action)
        if verdict == "BLOCK":
            raise PermissionError("Policy circuit blocked this tool call")

# Usage
from langchain.chat_models import ChatOpenAI
llm = ChatOpenAI(callbacks=[BrikGuard()])
```

```javascript LangChain (JS)
import { loadPolicy } from '@brik64/sdk';
import { BaseCallbackHandler } from 'langchain/callbacks';

const policy = loadPolicy('sandbox.pcd.compiled');

class BrikGuard extends BaseCallbackHandler {
  async handleLLMStart(llm, prompts) {
    for (const prompt of prompts) {
      const verdict = policy.check({
        category: 'llm_input',
        params: { content: prompt }
      });
      if (verdict === 'BLOCK') {
        throw new Error('Policy circuit blocked this action');
      }
    }
  }

  async handleToolStart(tool, input) {
    const verdict = policy.check({
      category: tool.name,
      params: { input }
    });
    if (verdict === 'BLOCK') {
      throw new Error('Policy circuit blocked this tool call');
    }
  }
}

// Usage
const llm = new ChatOpenAI({ callbacks: [new BrikGuard()] });
```


### CrewAI

Use policy circuits as agent-level guardrails in CrewAI:

```python
from brik64 import load_policy
from crewai import Agent, Task, Crew

policy = load_policy("no_network.pcd.compiled")

def brik_guard(action_name: str, action_input: str) -> bool:
    verdict = policy.check({
        "category": action_name,
        "params": {"input": action_input}
    })
    return verdict == "ALLOW"

researcher = Agent(
    role="Research Analyst",
    goal="Analyze internal documents",
    before_tool_callback=brik_guard  # blocks network tools
)
```

### AutoGen

Wrap PCD policy verification around AutoGen code generation:

```python
from brik64 import load_policy

policy = load_policy("sandbox.pcd.compiled")

def guard_code_execution(code: str) -> bool:
    """Verify generated code against policy before execution."""
    verdict = policy.check({
        "category": "code_exec",
        "params": {"content": code}
    })
    return verdict == "ALLOW"
```

---

## BPU Vision: Hardware-Enforced Guardrails


Phase 1 (now): PCD policy circuits compile to software guard functions in JS, Python, and Rust.
Phase 2 (future): The BPU chip executes policy circuits in silicon — 64 monomer units, an EVA Router, and a TCE Unit producing a non-maskable `BLOCK` signal.


The BPU (BRIK Processing Unit) is a hardware coprocessor designed to evaluate policy circuits with zero software in the loop:

```
Action → PCD Circuit → BPU → ALLOW / BLOCK (non-maskable)
```

Key properties of hardware enforcement:

- **Non-maskable** — the operating system cannot override a `BLOCK`
- **Zero-latency** — evaluation happens in a single clock cycle per monomer
- **Tamper-proof** — the circuit is burned into silicon, not loaded from disk
- **Auditable** — the BPU logs every verdict with a cryptographic hash

The regulatory trajectory mirrors automotive safety: voluntary adoption, then industry standard, then mandatory — like ABS brakes for AI systems.


The BPU is a future hardware product. Current BRIK-64 policy circuits operate as software guard functions compiled from PCD. The safety guarantees today come from formal verification (Φ_c = 1), not from hardware enforcement.



---

## [Theory] Expansion Roadmap

<!-- Source: theory/expansion.mdx -->

# What We Have & What's Coming

BRIK-64 v4.0.0-beta.2 includes both Core and Extended monomers. The fixpoint is verified. This page documents what exists today and the planned expansion.

## What We Have Today

### BRIK-64 Core — Complete (v4.0.0-beta.2)

- **64 formally verified monomers** (MC_00–MC_63), 8 families × 8 operations
- **EVA Algebra** — ⊗ sequential, ∥ parallel, ⊕ conditional composition with full Coq proofs
- **TCE certification** — computes Φ_c, ΔN, Cₘ for every program at compile time
- **Self-hosting compiler** — `brikc` compiles itself, fixpoint hash `7229cfcde9...`
- **5 target backends** — Native x86-64 ELF, Rust, JavaScript, Python, WebAssembly, BIR bytecode
- **PCD language** — full Turing-complete syntax: structs, closures, try/catch, modules, stdlib
- **CLI** — `brikc compile`, `brikc fmt`, `brikc check`, `brikc repl`, `brikc wasm32`
- **207 Coq proofs** — no admitted axioms in the proof chain

### What "Certified" Means Right Now

Any program written in PCD using only Core monomers (MC_00–MC_63):

1. Compiles only if Φ_c = 1, ΔN = 0, Cₘ = 1 — the compiler rejects otherwise
2. Produces a `certificate.json` with a cryptographic signature
3. Can be verified locally: `brikc cert verify certificate.json`
4. Operates at the Landauer thermodynamic boundary — ΔN = 0 means zero logical noise

The certified program cannot have logic errors. Not "probably won't" — structurally cannot. The compiler is the proof.

---

## What's Coming

### BRIK-64 Open: Extended Monomers — Complete (v4.0.0-beta.2)

64 additional monomers (MC_64–MC_127) that connect certified logic to the real world. All 8 extended families are now implemented:

| Family | Range | Name | Purpose |
|--------|-------|------|---------|
| F8 | MC_64–71 | Float64 | IEEE 754 floating point (SSE2 native) |
| F9 | MC_72–79 | Math | Transcendentals: sin, cos, log, exp, pow |
| F10 | MC_80–87 | Network | TCP, UDP, DNS, HTTP, TLS |
| F11 | MC_88–95 | Graphics | Framebuffer, pixel, line, blit, text |
| F12 | MC_96–103 | Audio | Play, mix, stream, seek |
| F13 | MC_104–111 | Filesystem+ | Directory ops, watch, temp, chmod |
| F14 | MC_112–119 | Concurrency | Spawn, join, channels, mutex, atomic |
| F15 | MC_120–127 | Interop/FFI | FFI, WASM exec, Python eval, JSON |

Extended monomers operate under **declared contracts**, not formal proofs. The Core invariant (Φ_c = 1) is preserved for Core sections regardless of what Extended monomers surround them.

**BRIK-64 Open** programs (mixing Core + Extended) receive a partial certification badge showing their verified percentage:

```
◈ BRIK-64 OPEN | 78% verified
```

```bash
brikc compile src/main.pcd          # Core only — rejects MC_64+
brikc compile --open src/main.pcd   # Core + Extended allowed
```

The **boundary rule**: Extended monomers must be leaves of the computation graph, not the trunk. The main data flow must pass through Core before OUTPUT. Statically verified by the TCE.

---

### Phase 2 — Public Certification Registry (v5.0.0)

A public, append-only registry at `brik64.dev/registry` where every certified program is recorded.

**Every BRIK-64 Certified badge is a live endpoint:**

```markdown
[![BRIK-64 Certified](https://brik64.dev/badge/sha256:7229cf)](https://brik64.dev/cert/sha256:7229cf)
```

This badge makes a real-time HTTP request on every page load. If the hash is not in the registry, or has been revoked, the badge shows **INVALID** — automatically, without human intervention.

**Certificate lifecycle:**

| Badge color | Meaning |
|-------------|---------|
| Green — **CERTIFIED** | Hash registered, Ω = 1, valid |
| Blue — **OPEN XX%** | Hash registered, mixed Core+Ext |
| Gray — **UNVERIFIED** | Hash not in registry |
| Red — **REVOKED** | Certificate revoked |

**Registry anchoring:** Every hour, the registry computes a Merkle root over all certificates and publishes it to the BRIK-64 Certification Registry. Any certificate can be verified against the registry root — without trusting `brik64.dev`. The certificate is permanent and independent.

**What this enables:**

A certified BRIK-64 program can claim something no existing certification can: *the compiler rejected every incorrect version of this program before it could run*. The registry records this claim immutably. Anyone can verify it cryptographically. The claim is as durable as the certification registry it is recorded in.

### How Certification Compares

| Standard | What it certifies | How |
|----------|-------------------|-----|
| ISO 26262 (automotive) | The development process | Audit trail |
| DO-178C (avionics) | Test coverage was run | Test logs |
| Common Criteria EAL7 | Design was reviewed | Expert evaluation |
| SOC 2 Type II | Controls were operating | Annual audit |
| **BRIK-64 Certified** | **The program cannot fail** | **Structural impossibility** |

The others certify the journey. BRIK-64 certifies the destination.

**CI/CD integration:**

```yaml
# .github/workflows/certify.yml
- name: Compile and certify
  run: brikc compile src/main.pcd

- name: Publish to registry
  run: |
    brikc cert publish \
      --token ${{ secrets.BRIK64_API_KEY }} \
      --version ${{ github.ref_name }}
  # Fails here if Ω ≠ 1 — blocks the release
```

---

### Phase 3 — BPU Silicon (Future)

The **BRIK Processing Unit** is a hardware coprocessor implementing the 64 Core monomers directly in silicon:

```
┌─────────────────────────────────────────┐
│              BPU Chip                   │
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  64 Core Monomer Units          │   │  ← Silicon, formally verified
│  │  (MC_00 – MC_63)                │   │
│  ├─────────────────────────────────┤   │
│  │  EVA Router                     │   │  ← Composition logic in hardware
│  ├─────────────────────────────────┤   │
│  │  TCE Unit (Φ_c checker)         │   │  ← Coherence verification in hardware
│  └─────────────────────────────────┘   │
│                                         │
│  Policy evaluation:                     │
│  action → PCD circuit → ALLOW / BLOCK  │
│  Non-maskable. Cannot be overridden.   │
│                                         │
└─────────────────────────────────────────┘
```

The BPU evaluates **Policy Circuits** — PCD programs (Core only) that verify AI actions before execution. The evaluation happens in hardware. The BLOCK is non-maskable. Software cannot override it.

This is the difference between teaching an AI to want to do right (RLHF) and preventing it from doing wrong (physics). Education fails. Physics does not.

The analogy with the automotive industry is instructive: ABS brakes were voluntary in 1978, mandatory by 2004. Hardware-enforced AI safety follows the same arc — early adoption by those who see the risk, eventual standardization as the risk becomes undeniable.

---

## The Expansion at a Glance

| Phase | Version | Deliverable | Status |
|-------|---------|-------------|--------|
| Core self-hosting | v2.0.0 | Compiler compiles itself, fixpoint verified | **Complete** |
| BRIK-64 Open | v4.0.0-beta.2 | 64 Extended monomers, partial certification | **Complete** |
| Registry + Badges | v5.0.0 | Public registry, live badges, certification anchoring | Roadmap |
| Developer Experience | v6.0.0 | LSP, VS Code, error hints | Roadmap |
| Package Manager | v7.0.0 | Circuit package manager | Roadmap |
| Publication | v8.0.0 | Zenodo, arXiv, USPTO | Roadmap |
| BPU silicon | v9.0.0 | Hardware coprocessor | Roadmap |




---

## [Theory] Licensing

<!-- Source: theory/ip-and-licensing.mdx -->

# Licensing

BRIK-64 uses a dual licensing model designed to keep the core technology free for individuals, researchers, startups, and open-source projects — while sustaining commercial development through enterprise licensing.


For licensing inquiries, academic collaboration, or partnerships — contact **info@brik64.com**.


## What Is Always Free

The following are available to everyone, for any purpose (including commercial), at no cost, under **Apache License 2.0**:

- **The PCD compiler** (`brikc`) — compile any PCD program
- **The PCD language** — write PCD programs
- **All 128 monomers (64 Core + 64 Extended)** — use them in your programs
- **The BIR bytecode format** — implement your own runtime
- **The CMF verification tool** — compute Φ_c for your circuits
- **Local Policy Circuit evaluation** — run Policy Circuits on your own infrastructure
- **The Coq proofs** — read, verify, extend, publish about them
- **The EVA algebra specification** — implement it in any language
- **Academic and research use** — no restrictions whatsoever


  
    All compiler source code, proofs, and specifications are available under Apache 2.0 with no restrictions on academic use. Publish papers, build on the theory, cite freely.
  
  
    Individual developers can use BRIK-64 for personal projects, open-source software, and non-commercial applications with no license required.
  
  
    Companies with under $1M annual revenue can use BRIK-64 commercially for free. The Community License covers this tier explicitly.
  
  
    Any OSI-approved open-source project can use BRIK-64 with no commercial license required, regardless of the project's revenue.
  


## What Requires a Commercial License

The following require a commercial license from BRIK-64 Inc.:


  
    - Publishing PCD circuits (Ω = 1) to the BRIK-64 Public Registry
    - Receiving dynamic certification badges (live endpoint, updates automatically)
    - Generating compliance reports from the registry audit log
    - Registry SLA guarantees (uptime, response time, audit log retention)
  

  
    - Manufacturing chips that implement the BPU architecture (RTL license)
    - Distributing PCIe cards containing BPU silicon
    - Embedding BPU cores in SoCs or ASICs
    - Offering BPU-as-a-Service in cloud environments
  

  
    - SLA-backed support contracts (response time guarantees, dedicated channels)
    - Custom Policy Circuit development and certification
    - On-premise deployment assistance
    - Security audit and penetration testing of Policy Circuit deployments
  

  
    - Using BRIK-64 Inc.'s published Φ_c certificates in regulatory filings
    - Claiming compliance with a BRIK-64 safety standard in marketing materials
    - OEM licensing of the BRIK-64 brand for third-party products
  


## Dual Licensing Model


  
    **For:** individuals, researchers, startups (&lt;$1M ARR), open-source projects

    - Apache 2.0 components
    - Local development and deployment
    - Academic and research use
    - All 128 monomers, full compiler, all backends
    - CMF verification (Φ_c computation)
    - Local Policy Circuit evaluation
  
  
    **For:** enterprises ($1M+ ARR) using BRIK-64 in production

    - Everything in Community, plus:
    - Registry with verified Φ_c badges
    - Dynamic certification status
    - Compliance report generation
    - SLA-backed support
    - BPU hardware licensing
    - Enterprise Policy Circuit certification
    - BRIK-64 brand licensing

    **Contact:** info@brik64.com
  


### Definition of Commercial Use

Commercial use requiring a license is defined as:

> Use of BRIK-64 technology in a product or service that (a) generates revenue directly from the BRIK-64 features, OR (b) is deployed in a commercial context where the BRIK-64 safety certification is part of the product's value proposition to customers, AND the deploying organization has more than $1M USD in annual revenue from any source.

This definition is intentionally narrow. An organization using BRIK-64 to verify its own internal processes does not require a commercial license. An organization selling "BPU-verified AI safety" as a product feature does.

## Apache License 2.0

BRIK-64's public components are licensed under **Apache License 2.0**, which provides:

- **Patent grant** — users receive a perpetual, royalty-free patent license for the covered components
- **Modification rights** — you can modify and distribute the code
- **No royalties** — no fees for using Apache-licensed components
- **Trademark protection** — the BRIK-64™, PCD™, and BPU™ trademarks remain protected separately from the code license

The patent grant means you can build on BRIK-64's Apache-licensed components without concern that patents will later be asserted against you. The grant is perpetual and irrevocable (with a narrow exception if you initiate patent litigation against BRIK-64 Inc.).

## Frequently Asked Questions


  
    Yes, if your company has less than $1M in annual revenue from any source, or if your use does not involve the registry, BPU hardware licensing, or BRIK-64 brand certification. The compiler, the language, and local Policy Circuit evaluation are always free.

    If your product's marketing claims "BRIK-64 certified" or "BPU-verified," that requires a commercial license regardless of revenue, because you are using BRIK-64 Inc.'s certification as a commercial value proposition.
  

  
    Yes, under Apache 2.0. You can fork the compiler, modify it, and distribute your version. You cannot use the BRIK-64™ or PCD™ trademarks without a license. You cannot claim your fork is "BRIK-64 certified" without BRIK-64 Inc.'s certification.
  

  
    Yes, unconditionally. Academic publication is explicitly encouraged. Cite the arXiv preprint and/or Zenodo DOI.
  

  
    The Apache 2.0 license is irrevocable. The patent grants under Apache 2.0 cannot be revoked by a subsequent owner. The Zenodo and Software Heritage archives are permanent and independent of BRIK-64 Inc.'s existence.
  

  
    Research implementations for non-commercial, academic purposes are permitted. Publishing a paper describing an FPGA implementation is permitted. Manufacturing or distributing hardware that incorporates the BPU architecture for commercial purposes requires a license from BRIK-64 Inc.
  


## Contact

For all inquiries — licensing, academic collaboration, research access, security disclosures, and general information — contact **info@brik64.com**.

---

*BRIK-64™, PCD™, and BPU™ are trademarks of BRIK-64 Inc. Digital Circuitality™ is a trademark used under license. Apache License 2.0 applies to components as marked in the source repository. © 2026 BRIK-64 Inc. All rights reserved.*


---

## [Reference] Glossary

<!-- Source: glossary.mdx -->

# BRIK-64 Glossary

This glossary defines every term used in the BRIK-64 ecosystem. Terms are grouped thematically, not alphabetically, because many concepts build on each other.

---

## Core Concepts

### Digital Circuitality
The formal property of a computational system that operates as a closed circuit. A system has Digital Circuitality when: every input domain is bounded, every operation is formally verified, every output range is proven, and no external noise can introduce undefined behavior. Measured by the **Φ_c** metric. Φ_c = 1 means the circuit is closed. Φ_c < 1 means it is not.

### Digital Circuitry
The discipline of building programs as circuits. Just as electrical engineering has circuit design rules (Kirchhoff's laws, impedance matching), Digital Circuitry has formal composition rules (EVA algebra, CMF certification). BRIK-64 is the first complete implementation of this discipline.

### PCD — Printed Circuit Description
The programming language of BRIK-64. A PCD file (`.pcd`) is a circuit schematic — not a script. It describes computation in terms of monomer calls and EVA compositions. The name is intentional: a PCD program is to software what a PCB (Printed Circuit Board) layout is to hardware.

```pcd
PC add_circuit {
    let result = MC_00.ADD8(a, b);
    OUTPUT result;
}
```

### Monomer
An atomic verified operation. The smallest unit of computation in BRIK-64. A monomer has a formally proven domain (input range), codomain (output range), postcondition, and termination guarantee. Analogous to a logic gate in electronics. 128 monomers are defined: 64 Core (MC_00–MC_63) with Coq proofs and 64 Extended (MC_64–MC_127) with CONTRACT closure.

### Polymer
A composition of monomers. Just as polymers in chemistry are chains of monomers, a BRIK-64 polymer is a program built by composing monomers via EVA operators. A polymer inherits the formal properties of its constituent monomers if composed correctly (i.e., if Φ_c = 1 holds across the composition).

### PC (Program Circuit)
A named polymer — a top-level PCD construct that defines a complete computation. A `PC` block is the unit of compilation and certification.

```pcd
PC my_circuit {
    // monomer calls and EVA compositions
    OUTPUT 0;
}
```

---

## The 128 Monomers

### MC_XX (Monomer Code)
Notation for a specific monomer. `MC_00` is ADD8, `MC_63` is SYSINFO. The two-digit decimal index identifies the monomer uniquely across all targets and representations. Always padded to two digits (`MC_07`, not `MC_7`).

### MC_00–MC_63 · Core Monomers
The 64 formally verified atomic operations that form the BRIK-64 certified tier. Organized in 8 families of 8:

| Family | Range | Domain |
|--------|-------|--------|
| F0 Arithmetic | MC_00–07 | Saturating integer math |
| F1 Logic | MC_08–15 | Bitwise operations, shifts, rotations |
| F2 Memory | MC_16–23 | Load, store, alloc, free, CAS, fence |
| F3 Control | MC_24–31 | IF, JUMP, CALL, RET, LOOP |
| F4 I/O | MC_32–39 | Read, write, open, close, seek |
| F5 String | MC_40–47 | Concat, split, length, match |
| F6 Crypto | MC_48–55 | Hash, HMAC, AES, signing |
| F7 System | MC_56–63 | Time, sleep, env, PID |

### MC_64–MC_127 · Extended Monomers
64 additional monomers covering floating point, networking, graphics, audio, concurrency, and FFI. Operate under declared contracts (CONTRACT closure), not Coq proofs. **Implemented in v4.0.0-beta.2.** See the [Roadmap](/roadmap).

### Saturating Arithmetic
The behavior of BRIK-64 arithmetic monomers when results would overflow or underflow: they clamp to the boundary value instead of wrapping or trapping. `ADD8(200, 100)` → `255`, not `44`. This is a formal domain guarantee — overflow is impossible by construction.

---

## EVA Algebra

### EVA (Equation-Verified Assembly)
The formal composition algebra of BRIK-64. Three operators allow monomers and polymers to be composed while preserving formal properties.

### ⊗ Sequential Composition
`f ⊗ g` — apply f, then apply g to the result. The output type of f must match the input type of g. Implemented as `eva.seq(f, g)` in all libraries.

```typescript
const process = eva.seq(mc.add8, mc.mod8);
// Φ_c = 1 if both monomers are Core
```

### ∥ Parallel Composition
`f ∥ g` — apply f and g independently to separate inputs, producing a tuple of outputs. Implemented as `eva.par(f, g)`.

```python
combined = eva.par(mc.add8, mc.hash_sha256)
result_tuple = combined(10, b"data")
```

### ⊕ Conditional Composition
`pred ⊕ (f, g)` — apply predicate, route to f if true, to g if false. Implemented as `eva.cond(pred, f, g)`.

```rust
let route = eva::cond(|x| x > 128, mc::add8, mc::sub8);
```

### Closure (Φ_c = 1)
A composition is closed if every path through it stays within proven domains. An EVA composition of Core monomers is closed by construction. The CMF verifies closure at compile time. If Φ_c ≠ 1, the program does not compile.

---

## CMF — Coherence Metric Framework

### CMF
The **Coherence Metric Framework**. The component of the `brikc` compiler that measures and enforces formal structural properties. It runs on every compilation and rejects programs that do not meet certification thresholds. All CMF metrics are structural/graph-theoretical — they analyze program topology, not physical energy.

### Φ_c (Phi-c) — Circuit Closure
The primary certification metric. Computed as: `Φ_c(C) = (n_consumed / n_in) · (n_produced / n_out) · 𝟙[V(C) = 1]`. Φ_c = 1 means the program is a closed circuit — every input is consumed, every output is produced, and the verification function passes. Φ_c < 1 means the circuit is open and will not compile in certified mode.

### δ (delta) — Unused Input Ratio
The fraction of declared inputs that are never consumed by the circuit. δ = 0 means every input is used. δ > 0 indicates dead inputs — a structural defect that prevents certification. The compiler rejects programs with δ ≠ 0 in certified mode.

### V(C) — Verification Status
Binary. V(C) = 1 means every monomer in the circuit has a valid Coq proof and every composition satisfies type compatibility. V(C) = 0 means at least one component is unverified.

### e — Operational Complexity
The number of monomer invocations in the circuit. A structural measure of program size.

### h — Signature Distance
The type-distance between input and output types across compositions. Measures how much type transformation occurs through the circuit.

### s — Structural Entropy
A measure of branching complexity across all conditional (⊕) nodes. Higher `s` means more decision points.

### c — Cyclomatic Complexity
The number of linearly independent paths through the circuit. Derived from the control-flow graph.

### t — Termination Depth
The maximum nesting depth of loops and recursive calls. Bounded by MAX_DEPTH = 256.

### Ω (Omega) — Certification Status
Binary. Ω = 1 means the program satisfies all primary metrics (Φ_c = 1, δ = 0, V(C) = 1) and holds a valid certificate in the public registry. Ω = 0 means it does not. A program with Ω = 1 is a **certified circuit**.

---

## Compilation Targets and Formats

### BIR — BRIK Intermediate Representation
The bytecode format produced by the BRIK-64 compiler frontend before backend code generation. Human-readable text format (similar to LLVM IR). BIR is the canonical representation from which all backends (native, Rust, JS, Python, WASM) are generated. A Gen1 BIR is the BIR produced by the Rust bootstrapper; Gen2 is produced by compiling that BIR with itself.

```bir
FUNC fn::add_and_mod
  LOAD $a
  LOAD $b
  CALL_MC 0        ; MC_00 ADD8
  STORE $tmp
  LOAD $tmp
  CALL_MC 6        ; MC_06 MOD8
  STORE $result
  RET $result
END
```

### ELF — Executable and Linkable Format
The binary format used for native Linux/Unix executables and shared libraries. The `brikc` compiler produces a **standalone ELF** — a self-contained x86-64 binary that requires no Rust runtime, no libc, and no dynamic linker. The `brikc` compiler itself is a 708 KB ELF.

### CPF — Canonical Plan Format
The intermediate JSON representation produced by the BRIK-64 planner (after type checking and SSA transformation, before backend emission). All backends consume CPF. It is the stable API between the frontend and all code generators.

### SSA — Static Single Assignment
A compiler IR property where every variable is assigned exactly once. The BRIK-64 planner transforms PCD programs into SSA form, enabling formal verification of data flow. Loop-carried variables are handled by the `bind_let` mechanism.

### WASM / WebAssembly
One of the five compilation targets. `brikc compile src/main.pcd --target wasm32` produces a `.wasm` binary that runs in any WebAssembly host (browsers, Node.js, WASI runtimes).

### Self-Hosting Fixpoint
The state where the `brikc` compiler can compile its own source code and produce an identical binary across multiple generations. Gen1 = Gen2 = Gen3 = Gen4 (hash `7229cfcde961...`). Achieved in v2.0.0. This is the mathematical proof that the compiler is correct: if it were not, it would produce different output when compiling itself.

---

## Certification Registry

### Registry
The public, immutable database of certified BRIK-64 programs. Every program with Ω = 1 can be submitted to the registry. Its certificate (hash + CMF metrics + timestamp) is recorded in the BRIK-64 Certification Registry and is queryable via REST API and live badge endpoints.

### Circuit Package
A certified PCD program (Ω = 1) published to the BRIK-64 registry. Analogous to an npm package, a Cargo crate, or a PyPI package — but instead of distributing source code or compiled binaries, the registry distributes **formally proven circuits**. Any consumer of a circuit package receives the Coq-backed guarantee that the circuit's behavior is exactly what the certificate describes.

### Live Badge
An SVG badge served by `https://badge.brik64.dev/{hash}` that reflects real-time certification status. If the program's hash matches the registry entry, the badge shows `CERTIFIED`. If the hash changes (program modified), the badge shows `INVALID` automatically — without any action from the author.

### Merkle Anchor
The cryptographic proof of a registry entry. The certificate hash is included in a Merkle tree whose root is recorded in the certification registry with a unique hash. This makes the certification timestamp permanently verifiable without trusting any central server.

### Pro Tier
The BRIK-64 subscription tier that enables:
- Submitting certified programs (Ω = 1) to the public registry
- Publishing circuit packages for others to import
- Receiving live badge endpoints for README integration
- Revocation management
- Private registry for internal programs

---

## Hardware

### BPU — BRIK Processing Unit
A hardware coprocessor where all 64 Core monomers are implemented in silicon. The EVA Router connects them as an electrical network. The TCE Unit enforces Φ_c = 1 at clock speed and emits a non-maskable BLOCK signal when a violation is detected. Software cannot override a BLOCK. See the [Roadmap](/roadmap) for the development timeline.

### EVA Router
The hardware component of the BPU that routes data between monomer units according to EVA composition rules (⊗, ∥, ⊕). Implemented as configurable wiring — the compiler generates a routing configuration from the PCD source, and the BPU executes it deterministically.

### CMF Unit
The hardware component of the BPU that continuously measures Φ_c during execution. If the circuit closure metric drops below 1 (a forbidden state is reached), the CMF Unit asserts a BLOCK signal that halts execution at the pin level — before the CPU has a chance to process the result.

### Non-Maskable BLOCK
A hardware signal from the BPU's CMF Unit that cannot be suppressed by software. Analogous to a non-maskable interrupt (NMI) but stronger: it prevents the instruction from completing, not just interrupts it afterward. Once a BPU is configured with a policy circuit (Ω = 1), the circuit's constraints are enforced at the hardware level.

---

## Libraries and Packages

### `brik64-core` (Rust)
The official Rust crate providing all 128 monomers (64 Core + 64 Extended) and EVA operators. Available on [crates.io](https://crates.io/crates/brik64-core). Install: `cargo add brik64-core`.

### `@brik64/core` (JavaScript/TypeScript)
The official npm package providing all 128 monomers (64 Core + 64 Extended) and EVA operators. Dual ESM/CJS build with TypeScript types. Available on [npmjs.com](https://www.npmjs.com/package/@brik64/core). Install: `npm install @brik64/core`.

### `brik64` (Python)
The official PyPI package providing all 128 monomers (64 Core + 64 Extended) and EVA operators. Requires Python 3.10+. Available on [pypi.org](https://pypi.org/project/brik64/). Install: `pip install brik64`.

### `brik64-bir` (Rust)
The BIR bytecode interpreter, available as a standalone Rust crate. Used for stage-by-stage bootstrap verification and embedding the BRIK-64 runtime in other Rust programs.

---

## Certification Badges

| Badge | Meaning |
|-------|---------|
| 🟢 **BRIK-64 CERTIFIED** | Φ_c = 1, Ω = 1, 100% Core monomers. Structurally impossible to have logic errors. |
| 🔵 **BRIK-64 OPEN 84%** | Core + Extended monomers. Core coverage percentage shown. Boundary enforced by compiler. |
| 🟡 **PENDING** | Submitted to registry, audit in progress. |
| 🔴 **INVALID** | Hash mismatch — program has been modified after certification. |
| ⚫ **UNVERIFIED** | Not submitted to registry. No formal claim made. |

---


  
    Start here if you're new to BRIK-64
  
  
    How monomers, EVA, and CMF work together
  
  
    What's coming: Extended Monomers, Registry, BPU
  




---

## [Reference] Roadmap

<!-- Source: roadmap.mdx -->

# BRIK-64 Roadmap

BRIK-64 is not a product with a backlog. It is a **formal artifact with a convergence path** — each phase closes a provable gap between where software is and where hardware physics requires it to be.

The ultimate goal is the **BRIK Processing Unit (BPU)**: a chip where 64 verified monomers exist in silicon, and the EVA Router enforces circuit closure at the gate level. At that point, a certified program does not just behave correctly — it *cannot misbehave*, because the substrate does not permit it.


The current release is **v4.0.0-beta.2** — 128 monomers (64 Core + 64 Extended) with the self-hosting fixpoint. The compiler compiles itself and produces an identical hash across 4 generations: `7229cfcde961...`. This is the foundation everything below builds on.


---

## Timeline


  
    **v2.0.0 · Released March 2026** (fixpoint achievement)

    The compiler (`brikc`) is now a certified BRIK-64 program that compiles itself. Four consecutive self-compilation generations produce the same cryptographic hash — the fixpoint is proven.

    | Deliverable | Status |
    |-------------|--------|
    | 64 Core Monomers (MC_00–MC_63) with Coq proofs | Complete |
    | EVA Algebra (⊗ ∥ ⊕) — associativity + closure proofs | Complete |
    | TCE — Φ_c, ΔN, Cₘ, Ω metrics | Complete |
    | Self-hosting fixpoint: Gen1 = Gen2 = Gen3 = Gen4 | Complete |
    | Native x86-64 ELF — 708 KB, no Rust runtime, no libc | Complete |
    | 5 compilation targets: native, Rust, JS, Python, WASM | Complete |
    | Native libraries: `brik64-core`, `@brik64/core`, `brik64` | Complete |
  

  
    **v4.0.0-beta.2 · March 2026 · Complete**

    64 additional monomers covering the real-world surface area that Core deliberately excludes: floating point, networking, graphics, audio, concurrency, and foreign interop. Extended monomers operate under **declared contracts** (CONTRACT closure), not Coq proofs.

    The architectural invariant: **Extended monomers may only be leaves**. The main data flow must pass through Core before OUTPUT. The compiler enforces this boundary statically at every call site.

    | Family | Range | Status |
    |--------|-------|--------|
    | Float64 | MC_64–71 | Complete |
    | Math | MC_72–79 | Complete |
    | Network | MC_80–87 | Complete |
    | Filesystem+ | MC_104–111 | Complete |
    | Graphics | MC_88–95 | Complete |
    | Audio | MC_96–103 | Complete |
    | Concurrency | MC_112–119 | Complete |
    | Interop/FFI | MC_120–127 | Complete |

    Programs mixing Core and Extended compile with `--open` and receive the **BRIK-64 Open** badge showing Core coverage percentage:

    ```bash
    brikc compile src/server.pcd --open   # BRIK-64 Open 84% — Core coverage
    ```
  

  
    **v5.0.0 · 2026–2027**

    The Certification Registry is the public, immutable index of certified BRIK-64 circuits. Every program with Ω = 1 can be submitted, and published as a **Circuit Package** — a certified, reusable PCD module that others can import exactly like an npm package or a Cargo crate.

    The key difference: every circuit package in the registry has been formally proven correct. You are not importing someone's library. You are importing a certified circuit whose behavior is permanently recorded in the BRIK-64 Certification Registry.

    **How certification works:**

    
      
        Compile with `brikc compile src/circuit.pcd` — the CMF verifier runs automatically and computes Φ_c.
      
      
        `brikc publish` sends the certified artifact to the Registry API with the full TCE audit.
      
      
        The hash is published to the BRIK-64 Registry. Once committed, neither the author nor BRIK-64 can silently change it.
      
      
        Others can import and use the circuit. The compiler verifies the import hash against the registry before every build.
      
    

    **Circuit Packages** work like npm/PyPI/crates.io, with one fundamental difference: only circuits with Ω = 1 can be published.

    ```bash
    # Publish a circuit package
    brikc publish src/hash_pipeline.pcd --name brik64/hash-pipeline --version 1.0.0

    # Import a certified circuit in PCD
    import { hash_pipeline } from "brik64/hash-pipeline@1.0.0";
    ```

    When you import a circuit package, the compiler verifies the import hash against the registry before compilation proceeds. If the hash does not match, compilation fails.

    **Every published circuit is recorded in the BRIK-64 Registry:**

    ```json
    {
      "package": "brik64/hash-pipeline@1.0.0",
      "tce": { "phi_c": 1.000, "delta_n": 0.000, "c_m": 1.000, "omega": 1 },
      "hash": "sha256:7229cfcde961...",
      "registry": "registry.brik64.dev",
      "timestamp": "2027-03-01T00:00:00Z"
    }
    ```

    **Live badge endpoints:**

    ```markdown
    ![BRIK-64 CERTIFIED](https://badge.brik64.dev/7229cfcde961)
    ```

    The badge is a live REST endpoint. A modified program (hash mismatch) shows `INVALID` instantly — without any action from the author.

    **Pro tier:**

    | Feature | Free | Pro |
    |---------|------|-----|
    | Compile and certify locally | Yes | Yes |
    | Download and use circuit packages | Yes | Yes |
    | Submit programs to the public registry | — | Yes |
    | Publish circuit packages | — | Yes |
    | Private registry for internal circuits | — | Yes |
    | Live badge endpoints for README | — | Yes |
    | Revocation management | — | Yes |
    | Priority TCE audit queue | — | Yes |
  

  
    **v6.0.0 · 2027**

    Extend the native compilation backend to ARM64 and RISC-V, enabling BRIK-64 certified programs to run as standalone binaries across all major embedded and server platforms.

    | Target | Status |
    |--------|--------|
    | x86-64 ELF | Complete (v2.0.0) |
    | WASM32 | Complete (v2.0.0) |
    | ARM64 (Apple Silicon, Raspberry Pi, AWS Graviton) | Planned |
    | RISC-V (embedded, FPGA softcore) | Planned |
    | Bare-metal (no OS, startup stub only) | Planned |
  

  
    **BPU · 2027–2028 · Prototype silicon**

    This is the long-horizon goal of the entire BRIK-64 project. The BPU is a **hardware coprocessor** where the 64 Core monomers are not software functions — they are silicon gates. EVA composition is an electrical routing problem. TCE certification happens at clock speed.

    **The fundamental shift:**

    Today, a certified BRIK-64 program proves that incorrect behavior *cannot be expressed in source*. With the BPU, incorrect behavior *cannot occur in execution* — because the silicon substrate physically prevents it.

    | Phase | Today (Software) | With BPU (Hardware) |
    |-------|-----------------|---------------------|
    | Source | PCD program | PCD program |
    | Compiler | Proves "cannot express undefined behavior" | Proves "cannot execute undefined behavior" |
    | Runtime | CPU (software enforced) | BPU gates (physically enforced) |

    The difference is the same as the difference between a seatbelt (behavioral) and a speed limiter (physical). RLHF teaches AI to *want* to behave correctly. The BPU makes it *impossible* to behave incorrectly.

    **BPU architecture layers:**

    
      
        64 hardwired silicon gates — one per monomer. MC_00.ADD8 is a circuit, not a function.
      
      
        Sequential (⊗), parallel (∥), and conditional (⊕) composition enforced as electrical routing.
      
      
        Φ_c = 1 checked at clock speed. BLOCK signal is non-maskable — software cannot override it.
      
    

    **BPU execution phases:**

    | Phase | Target | Description |
    |-------|--------|-------------|
    | Phase 1 (now) | v4.0.0-beta.2+ | PCD policy circuits as software. ALLOW/BLOCK enforced by certified program on standard CPU. |
    | Phase 2 | 2027 | FPGA implementation. Full BPU synthesized on Xilinx/Intel FPGA. All 64 monomers, EVA Router, TCE Unit. Validated against software. |
    | Phase 3 | 2028 | ASIC tape-out. Custom silicon. BLOCK signal non-maskable at the pin level — software cannot override it. |
    | Phase 4 | 2029+ | Industry standard for AI safety coprocessors. Regulatory path: voluntary → standard → mandatory. |

    **BPU and AI Safety:**

    1. **Today** — AI action → PCD policy circuit (software) → ALLOW or BLOCK
    2. **Phase 2** — AI action → PCD policy circuit → BPU (FPGA) → ALLOW or BLOCK at hardware speed
    3. **Phase 3** — AI action → BPU (ASIC) → ALLOW or BLOCK at gate speed — the CPU never sees a blocked action

    Once a PCD policy circuit is compiled and loaded onto a BPU, circuit closure (Φ_c = 1) cannot be broken by software. The AI system cannot patch its own constraints because the constraints are in silicon, not in memory.

    > "RLHF teaches AI to want to do right. BPU prevents it from doing wrong. Education fails. Physics does not."
  


---

## Summary

| Version | Target | Key Deliverable |
|---------|--------|-----------------|
| v2.0.0 | March 2026 | Self-hosting fixpoint · 64 Core Monomers · Native ELF |
| v4.0.0-beta.2 | March 2026 | 128 Monomers (64 Core + 64 Extended) · CONTRACT closure |
| v5.0.0 | Q2 2026 | Certification Registry · Circuit Packages · MCP Server |
| v6.0.0 | Q2 2027 | ARM64 + RISC-V backends · Bare-metal targets |
| v7.0.0 | 2027 | Package Manager |
| v8.0.0 | 2027 | Publication (Zenodo, arXiv, USPTO) |
| v9.0.0 | 2028 | BPU Hardware · ASIC tape-out · Non-maskable BLOCK |


Dates are estimates. The self-hosting fixpoint (v2.0.0) is the only milestone that is both complete and immutable — subsequent phases may shift as the formal theory evolves.


---


  
    How monomers, EVA, and TCE work together
  
  
    BPU architecture and the hardware safety model
  
  
    Policy circuits and the ALLOW/BLOCK model
  



---

