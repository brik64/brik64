<div align="center">

<img src="https://badge.brik64.dev/logo" alt="BRIK-64 Logo" width="120" height="120" />

# BRIK-64

### Digital Circuitality — Software That Works Like Hardware

[![Version](https://badge.brik64.dev/version/brik64)](https://github.com/brik64/brik64-dist-releases/releases)
[![License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)](LICENSE)
[![Fixpoint](https://badge.brik64.dev/fixpoint/brik64)](https://github.com/brik64/brik64-dist-releases)
[![Phi_c](https://badge.brik64.dev/phi/brik64)](https://docs.brik64.dev)
[![Docs](https://img.shields.io/badge/docs-docs.brik64.dev-informational)](https://docs.brik64.dev)

**[Website](https://brik64.dev) · [Documentation](https://docs.brik64.dev) · [Examples](https://github.com/brik64/brik64-community-examples) · [Releases](https://github.com/brik64/brik64-dist-releases)**

</div>

---

## The Problem with Modern Software

Before we explain what BRIK-64 is, we need to talk about why software breaks — and why it breaks so much more than it should.

### An Infinite Space of Failure

Consider a simple task: add two numbers and return the result. In modern software ecosystems, there are thousands of ways to accomplish this. Python, JavaScript, Rust, Go, Java, C++, Ruby, Scala, Haskell, TypeScript, Kotlin, Swift — and within each language, dozens of frameworks, patterns, and idioms. Each choice introduces a new set of failure modes:

- **Type coercion errors**: `"5" + 3 = "53"` in JavaScript
- **Integer overflow**: `127 + 1 = -128` in signed 8-bit arithmetic
- **Null pointer dereferences**: billion-dollar mistakes
- **Race conditions**: timing-dependent failures that vanish under observation
- **Memory corruption**: undefined behavior that manifests differently on each machine
- **Dependency conflicts**: "works on my machine"
- **Encoding issues**: UTF-8 vs Latin-1, byte order marks, null terminators
- **Floating point imprecision**: `0.1 + 0.2 ≠ 0.3`

This is not a bug. This is the fundamental nature of modern programming: **an unbounded, infinite space of possible programs, with no formal boundary between "correct" and "incorrect"**.

The root cause is that modern programming languages are built on the assumption that *generality is good*. Give the programmer unlimited expressive power. Let them define any type, any function, any behavior. The result is software that can do anything — and therefore, software that can fail in any way.

### The Thermodynamic Analogy

Physics understood this problem a century ago.

In thermodynamics, there is a fundamental distinction between **closed systems** and **open systems**. A closed system has defined boundaries: energy enters and leaves through known channels, and the behavior of the system can be mathematically predicted. An open system interacts with an unbounded environment: heat flows in from unknown sources, entropy increases in ways that cannot be fully tracked, and prediction becomes impossible.

Classical thermodynamics works because physicists were disciplined enough to define their systems precisely. The laws of thermodynamics — conservation of energy, entropy increase, thermal equilibrium — only hold within a **properly bounded system**. Open the boundary, and the laws break down.

Modern software is an open system. Data flows in from network sockets, file systems, user input, hardware interrupts, random number generators, clocks. The "computation" is tangled with its environment at every level. There is no boundary, no formal closure, no way to say "within this region, I can guarantee correctness."

BRIK-64 is the engineering discipline that applies closed-system thinking to computation.

### The Singularity Problem in Software

In mathematics and physics, a **singularity** is a point where a function diverges — where a value becomes undefined, infinite, or discontinuous. The classic example is division by zero: `f(x) = 1/x` has a singularity at `x = 0`. Near the singularity, behavior becomes unpredictable. At the singularity, the mathematical machinery breaks down entirely.

Software has exactly the same problem, but programmers rarely frame it this way.

Consider integer overflow: a computation that was proceeding normally reaches a boundary (`2^63 - 1`) and wraps around to a large negative number. From this point forward, every subsequent computation is wrong — and the error propagates silently through the system. The singularity was hit. The mathematical model that the programmer had in mind (unbounded integers) diverged from the physical reality (64-bit hardware arithmetic). The program continued running, but the semantics became undefined.

Consider unbounded string growth: a log message that concatenates user input without bounds checking. As the input grows, memory pressure increases. At some threshold, an allocation fails, an exception is thrown, the stack unwinds through code that was never tested with this failure mode, and the program crashes in an unexpected state. The singularity was reached. Predictability ended.

Consider floating-point accumulation: a financial calculation that sums thousands of small values. Each addition introduces a tiny rounding error. After thousands of operations, the accumulated error becomes significant. The result is numerically wrong in a way that is very hard to detect and even harder to bound. The divergence was gradual, not sudden — but it was a singularity nonetheless.

**The common thread**: modern programming does not force programmers to define the domain of their computations. There is no formal mechanism to say "this function is only valid for inputs in the range [0, 1000]" and have the compiler enforce it. There is no mechanism to guarantee that a computation will terminate. There is no mechanism to prove that a sequence of operations will not diverge.

BRIK-64 is built on the insight that **if you define the boundaries correctly, divergence is impossible by construction**.

### Why Tests Are Not Enough

The software industry has largely addressed the problem of correctness through testing. Write unit tests. Achieve high code coverage. Run integration tests. Deploy to staging. Monitor production. This is the state of the art.

But testing cannot prove the absence of bugs — it can only demonstrate their presence. A test suite with 100% line coverage may still miss:

- Race conditions that only manifest under specific timing
- Integer overflows at values that were never tested
- Edge cases in input validation that were not anticipated
- Interactions between components that were tested in isolation
- Behavior that depends on system state (file system, network, time)

The fundamental limitation of testing is that the input space of any real program is infinite. You cannot test all inputs. You can only test a sample. Whether that sample is representative of the failure modes that will occur in production is, itself, unknowable without a formal model of the program's behavior.

Formal verification — using tools like Coq, Lean, or TLA+ — can prove program correctness, but only within a formal specification. Writing formal specifications is hard, and the specifications themselves can be wrong. More importantly, formal verification scales poorly: verifying even simple programs requires significant expertise and effort, and the complexity grows faster than linearly with program size.

BRIK-64 takes a different approach: **make the formal specification the program**. The specification and the implementation are the same artifact. There is no gap between "what we said we would do" and "what the code does," because the code is the specification.

---

## What Is BRIK-64?

BRIK-64 is a **Digital Circuitality** architecture: a framework for building software that works like hardware.

The core insight: hardware engineers solved the correctness problem long ago. A NAND gate always outputs the correct result for any valid input. An adder circuit always produces the correct sum. A flip-flop always maintains its state correctly. Hardware is reliable not because engineers are smarter or more careful, but because hardware is designed with **bounded, closed-circuit thinking from the beginning**.

BRIK-64 brings this discipline to software.

### The Three Pillars

**1. Finite Computation Space**

BRIK-64 provides exactly 64 atomic operations — *monomers* — organized in 8 families. That's it. No more, no less. Every BRIK-64 program is a composition of these 64 operations.

This is not a limitation. It is the source of correctness. When the space of possible operations is finite and fully enumerated, every operation can be formally verified. Every input domain can be specified. Every output range can be proven.

Compare this to Python, which has thousands of built-in functions, millions of library functions, and an unbounded ability for users to define new operations. The space of possible Python programs is infinite. The space of possible failure modes is also infinite.

**2. EVA Algebra — Composition as First-Class**

Programs in BRIK-64 are not sequences of instructions. They are algebraic expressions over the monomer space, using three composition operators:

- **⊗ (Sequential)**: `A ⊗ B` means "apply A, then apply B to the result"
- **∥ (Parallel)**: `A ∥ B` means "apply A and B simultaneously to independent inputs"
- **⊕ (Conditional)**: `A ⊕ B` means "apply A if condition is true, else apply B"

These operators are not arbitrary. They are proven to satisfy specific algebraic laws:
- **Associativity**: `(A ⊗ B) ⊗ C = A ⊗ (B ⊗ C)`
- **Identity**: there exists an `Id` monomer such that `Id ⊗ A = A ⊗ Id = A`
- **Closure**: the composition of any two closed-circuit components is itself a closed-circuit component

The **closure property** is the key. Once you establish that a component is a "closed circuit" (formally: `Φ_c = 1`), composing it with any other closed-circuit component produces another closed circuit. Correctness is **preserved by composition**. You do not have to re-verify a program from scratch every time you add a new component. Verification is compositional.

This is how hardware engineers think. A NAND gate is verified once. An adder built from NAND gates is verified by the composition rules, not by re-testing every possible input combination. A CPU built from adders inherits the same correctness guarantees.

**3. Thermodynamic Coherence Engine (TCE)**

Every BRIK-64 program is certified by the Thermodynamic Coherence Engine, which measures seven properties:

| Metric | Symbol | Meaning |
|--------|--------|---------|
| Coherence Energy | E_c | Total "computation cost" bounded by hardware |
| Design Entropy | H_d | Structural complexity measure |
| Dynamic Entropy | S_d | Runtime state variability |
| Structural Coherence | C_s | How well-structured the composition is |
| Entropy-Temperature Coefficient | ETC | Ratio of entropy to coherence |
| Noise Budget | ΔN | Margin from external noise sources |
| Circuit Closure | **Φ_c** | **The key property: 1 = closed, 0 = open** |

The circuit closure property `Φ_c = 1` is the formal definition of a correct BRIK-64 program. A program with `Φ_c = 1` has no external dependencies that are not explicitly accounted for. No hidden state. No undefined behavior. No singularities in its domain of operation.

---

## The 64 Monomers

Each monomer is an atomic, formally verified computation. The 8 families correspond to 8 domains of computation:

| Family | Range | Domain | Example |
|--------|-------|--------|---------|
| Arithmetic | MC_00–MC_07 | Bounded integer arithmetic | `ADD8`, `MUL8`, `DIV8` |
| Logic | MC_08–MC_15 | Bitwise and boolean operations | `AND8`, `XOR8`, `NOT8` |
| Memory | MC_16–MC_23 | Stack and heap operations | `LOAD`, `STORE`, `PUSH` |
| Control | MC_24–MC_31 | Flow control | `IF`, `LOOP`, `CALL` |
| I/O | MC_32–MC_39 | File and stream I/O | `READ`, `WRITE`, `OPEN` |
| String | MC_40–MC_47 | Text processing | `CONCAT`, `SUBSTR`, `LEN` |
| Crypto | MC_48–MC_55 | Cryptographic operations | `HASH`, `SIGN`, `VERIFY` |
| System | MC_56–MC_63 | OS interface | `TIME`, `ENV`, `PID` |

Each monomer has a **formally proven specification**:
- Input types and ranges
- Output types and ranges
- Preconditions that must hold
- Postconditions that are guaranteed
- Formal proof that the operation never produces undefined behavior within its specified domain

The proofs are written in Coq — a dependently-typed proof assistant — and machine-verified. Not "unit-tested." Not "integration-tested." **Formally proven**.

---

## PCD — Printed Circuit Description

Programs in BRIK-64 are written in **PCD (Printed Circuit Description)**, a language designed to express compositions of monomers as clearly as circuit schematics express hardware designs.

The name is intentional. A PCB (Printed Circuit Board) is a physical substrate that routes electrical signals between discrete components. A PCD is a computational substrate that routes data between discrete computational components (monomers). The analogy is precise, not metaphorical.

### A Simple Example

```pcd
PC adder_circuit {
    // Input: two 8-bit unsigned integers
    // Output: their sum, clamped to [0, 255]

    let a = MC_00.ADD8(input_a, input_b);  // 8-bit addition
    let result = MC_07.CLAMP(a, 0, 255);   // Clamp to valid range

    OUTPUT result;
}
```

This circuit has `Φ_c = 1` by construction: every operation is bounded, every input type is specified, every output is within a known range. There is no way for this circuit to produce undefined behavior.

### A More Complex Example

```pcd
PC message_processor {
    import "stdlib/string.pcd";
    import "stdlib/crypto.pcd";

    fn validate_message(msg) {
        let length = MC_43.LEN(msg);
        if (length == 0) { return 0; }
        if (length > 4096) { return 0; }
        return 1;
    }

    fn process(raw_input) {
        let valid = validate_message(raw_input);
        if (valid == 0) {
            return MC_40.CONCAT("ERROR: ", "invalid message length");
        }

        let trimmed = MC_44.TRIM(raw_input);
        let hash = MC_48.HASH(trimmed);
        return hash;
    }

    let input = MC_63.ENV("ARGV_1");
    let result = process(input);
    let rlen = MC_43.LEN(result);
    MC_58.WRITE(1, result, rlen);
    OUTPUT 0;
}
```

Every string operation is length-bounded. The `HASH` monomer operates on bounded input. The circuit is closed: `Φ_c = 1`.

---

## Self-Hosting and the Fixpoint

BRIK-64 achieves what almost no language or compiler achieves: **true self-hosting with a formally verified fixpoint**.

The compiler for PCD — `brikc` — is itself written in PCD. The BRIK-64 compiler compiles itself. This creates a fixpoint: the binary produced by compiling `brikc.pcd` with itself is identical to the binary used to compile it.

Formally:
```
Gen1 = Rust_compiler(brikc.pcd)
Gen2 = Gen1(brikc.pcd)
Gen3 = Gen2(brikc.pcd)
Gen4 = Gen3(brikc.pcd)

Assertion: Gen1 == Gen2 == Gen3 == Gen4
Hash: 7229cfcde9613de42eda4dd207da3bac80d2bf2b5f778f3270c2321e8e489e95
Status: VERIFIED ✓
```

This is not a trivial property. It means:
- The compiler is deterministic: same input always produces same output
- The compiler is self-consistent: it applies the same rules to itself as to any other program
- The compiler cannot be tampered with: any modification to the source changes the hash

This is the **Ken Thompson problem** solved at the language level. Thompson's 1984 Turing Award lecture, "Reflections on Trusting Trust," demonstrated that a compiler can be modified to insert malicious code that survives even if the malicious source code is removed. The fix is a verified fixpoint: if the compiler compiles itself to a bit-for-bit identical binary across multiple independent compilations, any such tampering is detectable.

The BRIK-64 fixpoint hash `7229cfc...` is the cryptographic fingerprint of the BRIK-64 compiler. If you compile `brikc.pcd` yourself and get a different hash, something is wrong — either with your build environment or with the source code you received.

---

## The Distributed Binary: PCD All the Way Down

The `brikc` binary available for download is not a Rust binary. It is a native x86-64 ELF compiled from PCD source (`brikc_cli_dispatch.pcd`), which in turn imports `brikc.pcd` (the compiler) and dispatches CLI commands.

```
brikc_cli_dispatch.pcd  →  [brikc compiler]  →  brikc ELF (708KB)
                                                      ↑
                                            No Rust runtime.
                                            No LLVM. No GC.
                                            Pure syscalls.
```

The ELF binary has its own fixpoint:
```
gen1_sha256 = gen2_sha256 = 9cbad73a5f5699abc5654ace9a396f7af042be56b80de3de49d5ce03cd23dcfa
PCD_BUILD_TOOLCHAIN_PASS
```

When you install BRIK-64, you are running a binary that was certified by its own compilation process.

---

## AI-Native Design

BRIK-64 is the first programming language designed from the ground up for AI-generated code.

The problem with AI code generation is not that AI is bad at generating code. Modern LLMs can write syntactically correct Python, Rust, or TypeScript for a wide range of tasks. The problem is that **correctness in these languages is not decidable from the code alone**. The AI generates code that looks correct. The code may even pass tests. But whether it is *actually correct* — in the formal sense of never producing wrong results within its specified domain — cannot be determined without running it on all possible inputs, which is impossible.

BRIK-64 solves this at the language level:

**Finite operation space**: An AI generating BRIK-64 code can only use 64 operations. This is not a limitation — it is a correctness guarantee. If a program is expressible in BRIK-64, it is expressible using only operations with known, bounded, formally verified behavior.

**Automatic certification**: Every BRIK-64 program is automatically evaluated by the TCE. The AI does not need to write tests. The TCE certifies or rejects the program based on formal properties. The AI's job is to express the computation; the TCE's job is to verify correctness.

**No undefined behavior**: BRIK-64 has no undefined behavior. Every operation that can fail has a specified failure mode. Every input range is bounded. An AI cannot accidentally write a BRIK-64 program that segfaults, overflows silently, or produces undefined output.

**Deterministic execution**: Same input always produces same output. AI-generated BRIK-64 code can be tested with a small number of examples and the results generalize to all valid inputs (because the domain is formally specified).

> "An AI doesn't need a better language. It needs a language where incorrect programs cannot compile."

---

## BPU — Hardware-Enforced AI Safety

Looking further ahead: the BPU (BRIK Processing Unit) is a hardware coprocessor that implements all 64 monomers directly in silicon.

The BPU architecture has three units:
- **64 Monomer Units**: one dedicated circuit for each of the 64 monomers
- **EVA Router**: hardware implementation of the ⊗, ∥, ⊕ composition operators
- **TCE Unit**: real-time hardware certification, producing `Φ_c ∈ {0, 1}` for every program before execution

The key property of the BPU: **it cannot be instructed to execute a program with `Φ_c = 0`**. This is not a software check that can be bypassed. It is a hardware gate. A BPU-equipped system is physically incapable of running uncertified code.

This has profound implications for AI safety. The current approach to AI alignment relies on training AI systems to *want* to do the right thing — through RLHF, constitutional AI, and similar techniques. These approaches work to the extent that the AI's values are correctly trained, but they are fundamentally probabilistic. A sufficiently capable AI with subtly misaligned values might find ways to circumvent software-level guardrails.

The BPU approach is different: **it is not about what the AI wants to do. It is about what the AI is physically able to do**. An AI system whose actions are routed through a BPU can only take actions that are certified by the TCE. Harmful actions are not rejected by a policy. They are prevented by physics.

The regulatory trajectory mirrors automotive safety: seatbelts were voluntary, then recommended, then mandatory. ABS was the same. The BPU will follow the same path, driven by regulatory pressure as AI systems become more capable and their potential for harm becomes more apparent.

---

## Formal Foundations

BRIK-64 is not "formally inspired." It is formally proven.

The foundation consists of 207 Coq proof files covering:

### EVA Algebra Proofs
- Associativity of sequential composition: `(A ⊗ B) ⊗ C = A ⊗ (B ⊗ C)`
- Commutativity of parallel composition: `A ∥ B = B ∥ A`
- Closure under composition: `Φ_c(A) = 1 ∧ Φ_c(B) = 1 → Φ_c(A ⊗ B) = 1`
- Identity element existence: `∃ Id. ∀A. Id ⊗ A = A`
- Distributivity: `A ⊗ (B ∥ C) = (A ⊗ B) ∥ (A ⊗ C)` (when A is independent)

### Monomer Correctness Proofs
For each of the 64 monomers:
- Domain specification: the set of valid inputs
- Range specification: the set of possible outputs
- Postcondition proof: for any valid input, the output satisfies the postcondition
- Termination proof: the monomer always terminates in bounded time

### TCE Soundness
- The TCE correctly identifies all `Φ_c = 1` programs
- The TCE never certifies a program with `Φ_c = 0` as `Φ_c = 1`
- TCE certification is compositional: `TCE(A ⊗ B) = TCE(A) ∧ TCE(B)` (when composition is valid)

All proofs have zero `Admitted` statements — every lemma is fully proven, not assumed.

---

## Getting Started

### Install

```bash
# One-line install (Linux x86-64)
curl -L https://brik64.dev/install | sh

# Or download directly
curl -L https://github.com/brik64/brik64-dist-releases/releases/download/v2.0.0/brikc-v2.0.0-linux-x86_64 -o brikc
chmod +x brikc
./brikc version
```

### Your First Circuit

Create `hello.pcd`:

```pcd
PC hello {
    let msg = "Hello from Digital Circuitality!";
    let n = MC_43.LEN(msg);
    MC_58.WRITE(1, msg, n);
    MC_58.WRITE(1, "\n", 1);
    OUTPUT 0;
}
```

Compile and run:

```bash
./brikc compile hello.pcd   # Produces BIR (BRIK Intermediate Representation)
```

### Verify a Circuit

```bash
./brikc verify              # System integrity check
./brikc self-host-status    # Full self-hosting maturity report
./brikc catalog             # List all 64 monomers
```

---

## Repository Structure

| Repository | Visibility | Description |
|------------|-----------|-------------|
| [brik64/brik64](https://github.com/brik64/brik64) | Public | This repository — project overview and entry point |
| [brik64/brik64-dist-releases](https://github.com/brik64/brik64-dist-releases) | Public | Binary distributions and release artifacts |
| [brik64/brik64-community-examples](https://github.com/brik64/brik64-community-examples) | Public | Example PCD programs and tutorials |
| [brik64/brik64-tools-skills](https://github.com/brik64/brik64-tools-skills) | Public | Claude Code skills for BRIK-64 development |
| [brik64/brik64-community-awesome](https://github.com/brik64/brik64-community-awesome) | Public | Curated list of BRIK-64 resources |

---

## Choosing Apache 2.0

The specification, examples, tools, and release artifacts in this repository are licensed under the **Apache License 2.0**.

We chose Apache 2.0 over MIT for a specific reason: **explicit patent protection**.

The Apache License contains a patent grant clause (Section 3) that explicitly grants users the right to use any patents held by contributors that are necessarily embodied in their contributions. This is important for BRIK-64 because:

1. The Digital Circuitality methodology and the TCE certification process are novel inventions with pending patent protection
2. Users of the open-source components should have explicit clarity that their use is covered
3. The patent grant is contingent on non-assertion — if a user sues BRIK-64 Inc. for patent infringement, the patent grant terminates

The compiler source, Coq proofs, and BPU architecture are under separate commercial licenses. Contact [admin@brik64.dev](mailto:admin@brik64.dev) for licensing information.

---

## Project Status

| Milestone | Score | Status |
|-----------|-------|--------|
| Basic PCD compiler | 4.8/10 | ✅ Complete |
| True bootstrap (self-hosting) | 6.2/10 | ✅ Complete |
| BIR canonical (no Rust crutches) | 7.2/10 | ✅ Complete |
| Module system | 8.0/10 | ✅ Complete |
| Stdlib in PCD | 8.5/10 | ✅ Complete |
| Struct + match + closures | 9.0/10 | ✅ Complete |
| WASM + LSP + fmt | 9.5/10 | ✅ Complete |
| **PCD CLI dispatch ELF** | **10.0/10** | ✅ **Complete** |

**Current version: v2.0.0 — Digital Circuitality verified.**

The four-stage fixpoint is proven. The compiler compiles itself to a bit-for-bit identical binary. The distributed binary is a PCD-compiled ELF with no Rust runtime.

---

## Resources

- **Website**: [brik64.dev](https://brik64.dev)
- **Documentation**: [docs.brik64.dev](https://docs.brik64.dev)
- **Digital Circuitality**: [digitalcircuitality.com](https://digitalcircuitality.com)
- **Releases**: [github.com/brik64/brik64-dist-releases](https://github.com/brik64/brik64-dist-releases)
- **Examples**: [github.com/brik64/brik64-community-examples](https://github.com/brik64/brik64-community-examples)
- **Awesome BRIK-64**: [github.com/brik64/brik64-community-awesome](https://github.com/brik64/brik64-community-awesome)

---

## Contact

- **General**: [admin@brik64.dev](mailto:admin@brik64.dev)
- **Security**: [admin@brik64.dev](mailto:admin@brik64.dev) (subject: [SECURITY])
- **Licensing**: [admin@brik64.dev](mailto:admin@brik64.dev) (subject: [LICENSE])

---

<div align="center">

**© 2026 BRIK-64 Inc. All rights reserved.**

*Digital Circuitality™ is a trademark of BRIK-64 Inc.*

[![GitHub](https://img.shields.io/badge/GitHub-brik64-181717?logo=github)](https://github.com/brik64)
[![Website](https://img.shields.io/badge/Web-brik64.dev-0066cc)](https://brik64.dev)
[![Docs](https://img.shields.io/badge/Docs-docs.brik64.dev-00aa44)](https://docs.brik64.dev)

</div>
