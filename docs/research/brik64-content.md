# Digital Circuitality / BRIK-64 — Complete Site Content

## Status Note

This file is a historical content extraction.
It is not the canonical strategy, positioning, or web narrative source.

Canonical source:
- `docs/brik_64_final_positioning_brand_web_cmo_system.md`

Use this file as historical reference material only. Do not let extracted legacy
copy override the current positioning system without an explicit documented
decision.

> Extracted verbatim from https://digitalcircuitality.com on 2026-03-27
> Source pages: Homepage, Foundations, BPU Unit, Demos, Blog, News, About

---

## META

- **Title:** Digital Circuitality — Software That Works Like Hardware
- **Description:** 64 formally verified atomic components composed through EVA algebra. BRIK-64: a new paradigm for verifiable, thermodynamically coherent software.
- **OG Title:** Digital Circuitality — BRIK-64
- **OG Description:** Software that works like hardware. 64 formally verified atomic components.
- **OG Image:** (none set)
- **Canonical:** (none set)
- **Domain:** digitalcircuitality.com (brik64.com redirects to firecrawl.dev as of extraction date)

---

## NAVIGATION

- Home — https://digitalcircuitality.com/
- Foundations — https://digitalcircuitality.com/foundations
- BPU Unit — https://digitalcircuitality.com/bpu
- Demos — https://digitalcircuitality.com/demos
- Blog — https://digitalcircuitality.com/blog
- News — https://digitalcircuitality.com/news
- About — https://digitalcircuitality.com/about
- Docs — https://docs.brik64.dev/ (external link icon)

### Social Links (header)
- X (Twitter) — https://x.com/brik64
- GitHub — https://github.com/brik64
- Medium — https://medium.com/@brik64

### CTA Button (header)
- Visit BRIK-64 — https://brik64.com/

---

## HOMEPAGE

### Hero Section

**Badge:** A new way to build software

**Animated SVG labels:** U1, IC2, MUX, R8, CPU, DAC

**Large number:** 64

**Headline (h1):** What if software worked like a physical circuit?

**Subtitle (p):** Declare your domains. The compiler verifies them. Zero runtime surprises. 64 formally proven operations. 15,424 tests. Compiles to JS, Python, Rust, native x86-64.

**CTA Buttons:**
- 2026 >>>
- ↓ Discover how

---

### The Problem Section

**Label:** The Problem

**Headline (h2):** We build skyscrapers with blueprints. We build software with hope.

**Body paragraphs:**

A **bridge engineer** knows exactly how much weight each beam can hold. A **chip designer** knows exactly what signal each gate produces.

But a **software engineer**? They write code, run some tests, cross their fingers, and ship.

When it breaks at 3 AM — *and it will* — they patch it. Then patch the patch. The cycle **never ends**, because software was never built on **verified foundations**. In Digital Circuitality, the engineer declares the precision of every calculation — like choosing component tolerances in a physical circuit.

#### Feature Card 1: Verified Parts

**Front text:** Like tested beams in a bridge. Each part is mathematically proven correct before it's ever used.

**Back text:** Every monomer has a proof in Coq — a mathematical theorem that guarantees: given valid inputs, the output is always correct. Not 99.9% correct. Not 'passes all tests.' Mathematically proven correct, the way 2+2=4 is proven.

#### Feature Card 2: Composition Laws

**Front text:** Parts connect through algebra, not duct tape. If Part A works and Part B works, A+B is guaranteed to work.

**Back text:** EVA algebra defines three operators: ⊗ sequential (do A then B), ∥ parallel (do A and B independently), ⊕ conditional (if X then A else B). Each preserves the correctness of its parts. This is what hardware has always had — and software never did.

#### Feature Card 3: Automatic Check

**Front text:** The compiler verifies every connection. If the circuit doesn't close, the program simply won't compile.

**Back text:** The Thermodynamic Coherence Engine (TCE) computes a closure metric Φ_c for every program. If Φ_c = 1, the circuit is closed — every input is consumed, every output is produced, every path terminates. If Φ_c ≠ 1, compilation fails.

#### Feature Card 4: Compound Interest

**Front text:** A certified component never needs rewriting. The more that exist, the less anyone needs to build from scratch.

**Back text:** Today, millions of developers rewrite sorting algorithms, authentication flows, and data validators. Each implementation is slightly different, slightly buggy. In Digital Circuitality, these are certified circuits in a public registry — proven once, reused forever.

---

### The Insight Section

**Label:** The Insight

**Headline (h2):** Nature solved this 4 billion years ago.

#### 01 — 64 Codons → All Life

**Front:** DNA uses exactly 64 codons to build every protein in every living organism. 64 triplets, deterministic, verified by biochemistry for 4 billion years. No ambiguity. No mutations in translation.

**Back:** Adenine, Guanine, Cytosine, Thymine. Read in groups of three: 4³ = 64 codons. Each maps to exactly one amino acid. No ambiguity. No randomness. This mapping has been verified by natural selection for 4 billion years — longer than any software test suite.

#### 02 — 64 Monomers → All Software

**Front:** BRIK-64 uses exactly 64 verified operations — 8 families of 8 — to build any certified program. Each has a mathematical proof in Coq. Not a test. A proof.

**Back:** 8 families × 8 operations = 64 total. Arithmetic, Logic, Memory, Control, I/O, String, Crypto, System. Each verified in Coq. Each with a committed coherence profile. Compose them through EVA algebra and the correctness of the whole follows from the parts.

#### 03 — The Circuit Closes

**Front:** In a physical circuit, current flows in a closed loop or it doesn't flow at all. In Digital Circuitality, if a program's logic doesn't form a closed circuit — Φ_c = 1 — it cannot compile. Period.

**Back:** Φ_c = 1 means: every input domain is bounded, every operation is verified, every output range is proven, and no external noise can introduce undefined behavior. The program is a closed circuit. If it doesn't close, it doesn't compile.

---

### The Foundation — 64 Certified Operations

**Label:** The Foundation

**Headline (h2):** 64 certified operations.

**Subtitle:** 64 CERTIFIED

**Description:** Like the periodic table of computation. Each element is proven correct in Coq. Programs built from these 64 operations inherit their mathematical guarantee: **Φ_c = 1**

**Instruction:** Click any family to reveal its elements

#### MC 00-07: Arithmetic
Addition, subtraction, multiplication — the foundation of all computation.

| MC | Name | Description |
|----|------|-------------|
| 00 | ADD8 | Add two u8 values with wrapping (mod 256) |
| 01 | SUB8 | Subtract with wrapping underflow |
| 02 | MUL8 | Multiply with wrapping overflow |
| 03 | DIV8 | Integer division, returns (quotient, remainder) |
| 04 | INC | Increment by 1, wraps 255→0 |
| 05 | DEC | Decrement by 1, wraps 0→255 |
| 06 | MOD8 | Modulo operation |
| 07 | NEG8 | Negate (two's complement) |

#### MC 08-15: Logic
Bitwise operations — AND, OR, XOR, shifts. The language of digital circuits.

| MC | Name | Description |
|----|------|-------------|
| 08 | AND8 | Bitwise AND of two u8 values |
| 09 | OR8 | Bitwise OR of two u8 values |
| 10 | XOR8 | Bitwise XOR — self-inverse |
| 11 | NOT8 | Bitwise NOT — flip all bits |
| 12 | SHL | Shift left by N bits |
| 13 | SHR | Shift right by N bits |
| 14 | ROL | Rotate left by N bits |
| 15 | ROR | Rotate right by N bits |

#### MC 16-23: Memory
Load, store, push, pop — managing the circuit's internal state.

| MC | Name | Description |
|----|------|-------------|
| 16 | LOAD | Load value from heap address |
| 17 | STORE | Store value to heap address |
| 18 | PUSH | Push value onto stack |
| 19 | POP | Pop value from stack |
| 20 | PEEK | Read stack top without popping |
| 21 | SWAP | Swap top two stack values |
| 22 | DUP | Duplicate stack top |
| 23 | DROP | Discard stack top |

#### MC 24-31: Control
If, loop, jump, return — directing the flow of the circuit.

| MC | Name | Description |
|----|------|-------------|
| 24 | IF | Conditional branch |
| 25 | LOOP | Bounded loop with counter |
| 26 | CALL | Call function by address |
| 27 | RET | Return from function |
| 28 | JMP | Unconditional jump |
| 29 | HALT | Stop execution |
| 30 | NOP | No operation |
| 31 | WAIT | Wait for condition |

#### MC 32-39: I/O
Read, write, open, close — the circuit's interface to the outside world.

| MC | Name | Description |
|----|------|-------------|
| 32 | READ | Read from input stream |
| 33 | WRITE | Write to output stream |
| 34 | PRINT | Print to stdout |
| 35 | INPUT | Read from stdin |
| 36 | OPEN | Open file handle |
| 37 | CLOSE | Close file handle |
| 38 | SEEK | Seek in file |
| 39 | FLUSH | Flush output buffer |

#### MC 40-47: String
Concat, split, match — text processing with verified boundaries.

| MC | Name | Description |
|----|------|-------------|
| 40 | CONCAT | Concatenate two strings |
| 41 | SPLIT | Split string by delimiter |
| 42 | SUBSTR | Extract substring |
| 43 | LEN | Get string length |
| 44 | UPPER | Convert to uppercase |
| 45 | LOWER | Convert to lowercase |
| 46 | TRIM | Remove whitespace |
| 47 | MATCH | Pattern match |

#### MC 48-55: Crypto
Hash, encrypt, sign, verify — security built into the foundation.

| MC | Name | Description |
|----|------|-------------|
| 48 | HASH | SHA-256 hash |
| 49 | ENCRYPT | Encrypt with key |
| 50 | DECRYPT | Decrypt with key |
| 51 | SIGN | Digital signature |
| 52 | VERIFY | Verify signature |
| 53 | DIGEST | Message digest |
| 54 | KEY | Key derivation |
| 55 | RNG | Random number generator |

#### MC 56-63: System
Time, process, environment — the circuit's awareness of its host.

| MC | Name | Description |
|----|------|-------------|
| 56 | TIME | Current timestamp |
| 57 | CPU | CPU info/usage |
| 58 | MEM | Memory info |
| 59 | ENV | Environment variable |
| 60 | EXIT | Exit process |
| 61 | PID | Process ID |
| 62 | LOG | Log message |
| 63 | ASSERT | Assert condition |

---

### The Peripherals — 64+ Auxiliary Operations

**Label:** The Peripherals

**Headline (h2):** 64+ auxiliary

**Subtitle:** 64+ CONTRACT

**Description:** The peripherals connect the verified interior to the unpredictable exterior world. They operate under contract (Φ_c = CONTRACT) rather than proof — like the power supplies, USB ports, and network interfaces of a circuit board.

#### MC 64-71: Float64
Decimal math — when integers aren't enough.

| MC | Name | Description |
|----|------|-------------|
| 64 | FADD | Float64 addition (IEEE 754) |
| 65 | FSUB | Float64 subtraction |
| 66 | FMUL | Float64 multiplication |
| 67 | FDIV | Float64 division |
| 68 | FABS | Absolute value of float |
| 69 | FNEG | Negate float value |
| 70 | FSQRT | Square root |
| 71 | FMOD | Float modulo |

#### MC 72-79: Math
Trigonometry, logarithms — scientific computation.

| MC | Name | Description |
|----|------|-------------|
| 72 | SIN | Sine (radians) |
| 73 | COS | Cosine (radians) |
| 74 | TAN | Tangent (radians) |
| 75 | EXP | Exponential (e^x) |
| 76 | LN | Natural logarithm |
| 77 | LOG2 | Base-2 logarithm |
| 78 | POW | Power (base^exp) |
| 79 | CEIL | Ceiling (round up) |

#### MC 80-87: Network
TCP, HTTP, DNS — talking to the internet.

| MC | Name | Description |
|----|------|-------------|
| 80 | CONN | Open network connection |
| 81 | SEND | Send data over connection |
| 82 | RECV | Receive data |
| 83 | CLOSE | Close connection |
| 84 | BIND | Bind to port |
| 85 | LISTEN | Listen for connections |
| 86 | ACCEPT | Accept incoming connection |
| 87 | POLL | Poll for events |

#### MC 88-95: Graphics
Pixels, lines, shapes — visual output.

| MC | Name | Description |
|----|------|-------------|
| 88 | CREATE | Create resource |
| 89 | PIXEL | Set pixel color |
| 90 | READ | Read from resource |
| 91 | CLEAR | Clear framebuffer |
| 92 | BLIT | Block image transfer |
| 93 | LINE | Draw line |
| 94 | RECT | Draw rectangle |
| 95 | DIMS | Get dimensions |

#### MC 96-103: Audio
Sound buffers, mixing — audio processing.

| MC | Name | Description |
|----|------|-------------|
| 96 | CREATE | Create resource |
| 97 | WRITE | Write to resource |
| 98 | READ | Read from resource |
| 99 | MIX | Mix audio streams |
| 100 | GAIN | Adjust volume |
| 101 | LEN | Get length |
| 102 | RATE | Sample rate |
| 103 | CHANS | Channel count |

#### MC 104-111: Filesystem
Files, folders — persistent storage.

| MC | Name | Description |
|----|------|-------------|
| 104 | STAT | File/dir status |
| 105 | MKDIR | Create directory |
| 106 | RMDIR | Remove directory |
| 107 | LIST | List directory |
| 108 | COPY | Copy file |
| 109 | RENAME | Rename file |
| 110 | REMOVE | Delete file |
| 111 | EXISTS | Check existence |

#### MC 112-119: Concurrency
Threads, channels — parallel execution.

| MC | Name | Description |
|----|------|-------------|
| 112 | SPAWN | Spawn thread |
| 113 | JOIN | Join thread |
| 114 | MUTEX | Create mutex |
| 115 | LOCK | Acquire lock |
| 116 | UNLOCK | Release lock |
| 117 | CHAN | Create channel |
| 118 | SEND | Send to channel |
| 119 | RECV | Receive from channel |

#### MC 120-127: Interop
JSON, FFI, WebAssembly — connecting systems.

| MC | Name | Description |
|----|------|-------------|
| 120 | FFI | FFI call |
| 121 | LOAD | Load library |
| 122 | FREE | Free memory |
| 123 | JSON_E | JSON encode |
| 124 | JSON_D | JSON decode |
| 125 | WASM_L | Load WASM module |
| 126 | WASM_C | Call WASM function |
| 127 | WASM_F | Free WASM memory |

---

### Closure Domains Section

**Label:** Closure Domains

**Headline (h2):** Declare your boundaries.

**Description:** Every variable has a range. The compiler enforces it. If the result exceeds the range, the circuit doesn't close.

**Emphasis:** THE SOFTWARE DOESN'T COMPILE.

**Interactive demo labels:**
- SPEED — Range [0, 900] — CERTIFIED — 450
- ALTITUDE — Range [0, 15,000] — 8,000
- FUEL — Range [0, 50,000] — 25,000

**Status indicator:** ✓ Φ_c = 1 — CIRCUIT CLOSED — COMPILES

**Instruction:** Drag sliders beyond the boundary marker to see a domain violation

**Code example:**
```
// flight_computer.pcd
PC flight
  domain speed: Range [0, ...];
  domain alt: Range [0, ...];
  domain fuel: Range [0, ...];
  let s = ...
  let a = ...
  let f = ...
  OUTPUT s;

$ brikc check flight.pcd
speed = ...
alt = ...
fuel = ...
✓ CIRCUIT CLOSED
```

---

### The Compound Effect Section

**Label:** The Compound Effect

**Headline (h2):** Write once. Certify once. Use forever.

**Body:** Every certified circuit enters a **public registry**. Once proven correct, it never needs to be rewritten — by anyone, ever.

This is **compound interest for software**. Instead of millions of developers rewriting the same logic, they build on...

Hardware solved this decades ago: **standard ICs**, tested once, reused in billions of devices. Digital Circuitality brings the **same revolution** to software.

**Diagram labels:**
- VERIFIED PARTS — L01
- COMPOSITION — L02
- COMPLEX CIRCUITS — L03
- SELF-VERIFICATION — L04
- compile()

**Layer descriptions:**

LAYER 01: Every certified circuit goes into a public registry. Once proven correct, nobody ever needs to write it again.

LAYER 02 — Composition: Compound interest for software: instead of rewriting the same logic, you build on verified foundations.

LAYER 03 — Complex Circuits: The more circuits exist, the less new code anyone needs to write.

LAYER 04 — Self-Verification: Standard components, verified once, reused billions of times. Digital Circuitality brings this to software.

---

### AI-Native Section

**Label:** AI-Native

**Headline (h2):** The first language designed for AI.

**Body:** PCD has exactly **128 operations**. An AI model can learn the entire language in minutes and generate certified code with mathematical guarantees.

When an AI generates PCD, the compiler automatically certifies it. **The math is the trust.**

Compiles to **5 targets**: Rust, JavaScript, Python, native x86-64, BIR bytecode.

#### Data Endpoints

Consume all site content — monomers, blog, stats — in machine-readable formats. Built for AI agents, readable by humans.

- JSON — Full site data
- MD — LLM-readable
- Documentation — docs.brik64.dev
- Claude Code Skills — 5 skills
- PCD Language Spec — 128 ops

**Formats:** JSON · MARKDOWN · YAML · PCD

---

### 01 — Start Building: Download the CLI

**Label:** 01 · START BUILDING

**Headline (h2):** Download the CLI.

**Description:** The brikc compiler is a single binary. Parses PCD, plans execution, generates code for 5 targets, and verifies certification — all in one tool.

**Install:**
```
curl -L https://brik64.dev/install | sh
```

**Quick Start:**
```
$ brikc catalog          # LIST ALL 128 MONOMERS
$ brikc run hello.pcd    # EXECUTE A PCD PROGRAM
$ brikc build -t js      # COMPILE TO JAVASCRIPT
$ brikc check program.pcd # VERIFY CERTIFICATION
```

**Link:** MORE INSTRUCTIONS → (to docs)

---

### 02 — Start Building: Use the SDKs

**Label:** 02 · START BUILDING

**Headline (h2):** Use the SDKs.

**Description:** Drop 128 verified operations into your existing Rust, JavaScript, or Python codebase. Every function carries its certification.

**Rust:**
```
cargo add brik64-core
```
Link: CRATES.IO →

**JavaScript:**
```
npm install @brik64/core
```
Link: NPM →

**Python:**
```
pip install brik64
```
Link: PYPI →

---

### 03 — The Platform: Your Circuit Laboratory

**Label:** 03 · THE PLATFORM

**Headline (h2):** Your circuit laboratory.

**Description:** Imagine a workspace where you can visually compose circuits from verified components, see them connect in real time, certify them with one click, and share them with the world. That's brik64.com.

**Features:**

- **Personal Library** — Your own collection of circuits, organized by project. Build, test, recompose.
- **Public Registry** — Hundreds of thousands of pre-certified circuits. Search, browse, implement. Never rewrite what's already proven.
- **Visual Composition** — Drag, connect, compose. See your polymers form in real time. Every connection verified automatically.
- **Certification Badges** — Every circuit gets a public, verifiable certificate. Embed it in your README. It's live — if the code changes, the badge changes.

**CTAs:**
- VISIT BRIK64.COM →
- LEARN MORE →

**Note:** REGISTRY LAUNCHING 2026

**Platform mockup labels:**
- BRIK64.COM / LABORATORY
- EXPLORER / MY CIRCUITS / SHARED / PUBLIC REGISTRY / CERTIFY / SETTINGS
- SEARCH 127,439 CIRCUITS...
- AUTH-FLOW-001 — OAUTH2 HANDLER — Φ_c = 1 · 12 MONOMERS
- SORT-ALG-042 — QUICKSORT — Φ_c = 1 · 8 MONOMERS
- NET-API-017 — REST CLIENT — Φ_c = 0.87 · 24 MONOMERS
- CRYPTO-005 — JWT VALIDATOR — Φ_c = 1 · 6 MONOMERS
- 127,439 PUBLIC · 23 MINE · 7 SHARED

---

### What PCD Can Do Now

**Label:** What PCD Can Do Now

**Headline (h2):** Production-ready. Today.

**Description:** Everything ships in a single binary: brikc. No runtime, no dependencies, no setup.

#### Compile & Run
Write PCD, compile to 14 targets: JS, TS, Python, Rust, C, C++, Go, COBOL, PHP, Java, Swift, WASM, Native.
```
brikc build program.pcd --target rust
```

#### Reverse Compile (Lift)
Lift existing code from 10 languages to PCD. 100% liftability on real projects (211/211 files). JS, TS, TSX, JSX, Python, Rust, C, C++, Go, COBOL, PHP, Java.
```
brikc lift your_code.js
```

#### Universal Transpiler
Convert any codebase between 10 languages and 14 targets with mathematical proof of equivalence. 140 certified paths through a single intermediate representation.
```
brikc transpile ./src/ --to rust --output ./dist/
```

#### Certify
TCE analysis: Φ_c = 1 = circuit closed.
```
brikc check program.pcd
```

#### Policy Circuits
AI guardrails as verified circuits.
```
brikc policy new --template sandbox
```

#### Package Manager
Init, add, publish PCD packages.
```
brikc pkg init && brikc pkg publish
```

#### API & MCP
REST API at registry.brik64.dev. MCP server for AI agents.
```
brikc mcp-server
```

#### 128 Monomers
64 core (Φ_c = 1) + 64 extended (CONTRACT). Two-tier certification: CORE (formally proven) + CONTRACT (bounds-checked). 8 families × 8 per family × 2 tiers.

#### SDKs
npm: @brik64/core · PyPI: brik64 · crates.io: brik64-core

---

### Stories from the Frontier (Blog Preview)

**Headline (h2):** Stories from the frontier

#### MAR 2026 · AI SAFETY
**What Artificial Intuition Gets Right — And What It Can't Verify**
Carlos E. Perez argues AI is intuition, not intelligence. He's right. But intuition without certification is a liability. Layer 1: generation. Layer 2: circuits.

#### MAR 2026 · REVOLUTION
**Your Messy Code Goes In. Clean, Verified Code Comes Out.**
The PCD roundtrip: extract the computational essence, verify it formally, recompile from the specification. Clean code + auto-generated tests + the blueprint as permanent spec. Any language in, any language out.

#### MAR 2026 · MIGRATION
**The $3 Trillion COBOL Problem — And How PCD Solves It**
220 billion lines of COBOL. 95% of ATM transactions. $3 billion/year in maintenance. The workforce is retiring. PCD lifts, verifies, and emits to any modern language.

**Link:** VIEW ALL ARTICLES →

---

### Latest Updates (News Preview)

**Headline (h2):** Latest updates

#### LATEST · LAUNCH
Digital Circuitality goes public — the website, documentation, SDKs, and compiler are now available for developers and AI agents worldwide.

#### PLATFORM
The BRIK-64 platform enters development — a visual circuit laboratory with public registry, certification badges, and collaborative composition tools.

#### DOCS
Complete documentation live at docs.brik64.dev — tutorials, PCD language reference, SDK guides, and API documentation for all 128 monomers.

**Link:** VIEW ALL NEWS →

---

### CTA / Final Section

**Label:** Ready?

**Headline (h2):** Build software that works like hardware.

**CTA:** Visit BRIK-64 →

**Subtext:** Get notified when the platform launches

**Button:** NOTIFY ME

---

## FOOTER

- **DOCUMENTATION** — docs.brik64.dev
- **GITHUB** — github.com/brik64
- **DISCORD** — discord.gg/brik64
- **Code:** BRK-SYS-001

**Social links:**
- X — https://x.com/brik64
- GitHub — https://github.com/brik64
- Medium — https://medium.com/@brik64

**Copyright:** © 2026 Digital Circuitality

**AI Agent Banner:**
AI AGENT? CONSUME THIS PAGE:
- JSON — https://digitalcircuitality.com/api/content.json
- MARKDOWN — https://digitalcircuitality.com/api/content.md
- FULL DOCS — https://docs.brik64.dev/
- SKILLS — https://github.com/brik64/brik64-tools-skills

---

## SECONDARY PAGES

---

### /foundations — Theoretical Foundations

**Headline (h1):** Theoretical Foundations

**Subtitle:** The information-theoretic basis of Digital Circuitality

#### Thermodynamic Analogy, Not Thermodynamic Claim

The term "thermodynamic" in Digital Circuitality is an **analogy**, not a claim about physical quantities. A physical circuit is coherent when energy flows from source to sink without leakage, when all signal paths are closed, and when the circuit reaches a steady state. The TCE (Thermodynamic Coherence Engine) measures the *computational structural analogues* of these properties — operational complexity, signature distance, structural entropy, cyclomatic complexity, transfer efficiency, complexity deviation, and circuit closure.

These are precisely defined software-engineering metrics, named by analogy with thermodynamic concepts to emphasize the closed-circuit design philosophy. When we say Φ_c = 1 ("the circuit is closed"), we mean that every input is consumed, every output is produced, every execution path terminates, and every domain boundary is respected — an information-theoretic statement, not a physical one.

#### The Entropic Transfer Coefficient (ETC)

The ETC is an information-theoretic coherence metric that measures how efficiently information flows through a monomer composition:

- **ETC = 1** — Every bit of input information is used in computing the output. Perfect information transfer.
- **ETC < 1** — Some input information is discarded. This may be intentional (filtering, projection).
- **ETC > 1** — Would indicate information creation, which cannot occur in a deterministic composition where outputs are computed solely from inputs.

The ETC operates strictly in the **information-theoretic domain** (Shannon entropy). It does not claim thermodynamic energy costs for computational operations. The fundamental energy reference kT ln 2 is used as a normalization convention, not as a claim that erasure requires minimum energy dissipation.

#### Brillouin's Negentropy Principle

Leon Brillouin's 1953 negentropy principle — the conceptual framework connecting information to physical entropy — inspired the information-theoretic foundation of our coherence metrics. Brillouin proposed that the total entropy of a closed system (information entropy + thermal entropy) cannot decrease, establishing a link between information acquisition and thermodynamic cost.

However, this principle has **important limitations**. Kish & Ferry (2018) demonstrated that Brillouin's negentropy principle is not a general law — it can be violated when the measurement system and the physical system are at different temperatures or weakly coupled. Digital Circuitality acknowledges Brillouin as inspiration while operating on purely information-theoretic grounds that do not depend on the validity of the negentropy principle as a physical law.

#### The Kish-Ferry Distinction

In 2018, Prof. Laszlo B. Kish (Texas A&M University) and D.K. Ferry (Arizona State University) proved definitively that information entropy and thermal entropy are fundamentally different physical quantities — *"apples and oranges."*

- **Thermal entropy** is an *objective* property of the physical system — a macroscopic state variable defined by the Boltzmann distribution.
- **Information entropy** is *subjective* — it depends on the measurement instrument, the observer's knowledge, and the resolution of the data acquisition system.

These two quantities have different units, different operational definitions, and different physical origins. They can be separated in space and time. Information entropy can even violate the Third Law of Thermodynamics. Treating them as interchangeable — as the Landauer principle requires — is a category error.

This distinction is critical for Digital Circuitality: the ETC measures *information entropy*, not thermal entropy. Our metrics describe the information-theoretic structure of software, not the physical energy cost of computation.

#### Zero-Energy Erasure

In 2016, Kish, Granqvist, Khatri, and Peper demonstrated that information erasure can occur with **zero or even negative energy dissipation**. Through passive thermalization in double-potential-well memories, information is erased without any energy cost — the environment is actually *cooled* during the process.

This refutes Landauer's erasure bound (kT ln 2 per bit) as a general principle. The result that matters most for Digital Circuitality:

"In a deterministic computer with error-free memory, the information entropy of the memory is **always zero**."
— Kish et al. (2016), Section 4

This is precisely what Φ_c = 1 means in Digital Circuitality: a formally verified, deterministic system has zero informational uncertainty. The information entropy of its state is zero because every state is exactly known, every path is verified, every domain is bounded. The circuit is closed.

#### Why This Matters for Software

Traditional software operates with nonzero information entropy — there are execution paths that haven't been verified, states that haven't been explored, inputs that haven't been bounded. Every unverified path is a source of informational uncertainty. Testing reduces this uncertainty but can never eliminate it (Dijkstra, 1976: "Testing shows the presence of bugs, never their absence").

Digital Circuitality eliminates informational uncertainty by construction:

- **Domain declarations** bound every input to a finite, verified range
- **Formal verification** (207 Coq proofs) ensures every monomer is correct for all inputs
- **Compositional correctness** (EVA algebra) guarantees that verified parts compose into verified wholes
- **Circuit closure** (Φ_c = 1) certifies that no path is unverified, no input unbounded, no output undefined

The result: S_I = 0. Zero information entropy. The software equivalent of a deterministic circuit where every gate is specified and every wire is connected.

#### Universal Transpilation Through Informational Closure

Traditional transpilers operate at the **syntactic level**: they parse an AST in one language and emit an AST in another. This is fundamentally a surface-level transformation — it maps syntax to syntax, idiom to idiom, hoping that the semantics survive the translation. Every edge case (integer overflow, floating-point precision, exception handling, string encoding) must be handled individually. This is why every transpiler is purpose-built for a single pair of languages.

BRIK-64 operates at the **semantic level**. Instead of transforming syntax, it extracts the *computational essence* of a program — what it computes, not how it expresses the computation — and encodes that essence as a PCD (Printed Circuit Description) blueprint. PCD is language-agnostic: it describes computation in terms of 64 formally verified atomic operations (monomers) composed through EVA algebra (⊗ sequential, ∥ parallel, ⊕ conditional).

This architecture yields a critical property: **if two programs in different languages produce the same PCD circuit, they are functionally equivalent**. The PCD representation captures the informational content of the computation — the mapping from inputs to outputs — independent of the syntactic vehicle. A JavaScript function and a COBOL paragraph that compute the same thing will lift to the same PCD blueprint.

This enables **N-to-N transpilation**: 10 input languages (JS, TS, Python, Rust, C, C++, Go, COBOL, PHP, Java) → PCD → 14 output targets (Rust, JS, TS, Python, C, C++, Go, COBOL, PHP, Java, Swift, WASM, BIR, Native). That is 140 transpilation paths with only 24 components (10 frontends + 14 backends), following the same architectural insight as LLVM — but with one addition LLVM lacks: **formal certification of equivalence**.

The TCE certifies that the PCD circuit is closed (Φ_c = 1), which mathematically guarantees that the computation is deterministic, total, and information-preserving. Because the source was lifted to PCD and the target was emitted from the same PCD, the certification covers both directions. The equivalence is not tested or estimated — it is **proven by the algebraic structure** of the intermediate representation.

```
$ brikc transpile ./src/ --to rust --output ./dist/
```

This is the information-theoretic foundation of universal transpilation: by reducing programs to their informational content (PCD circuits with S_I = 0), transpilation becomes a projection from one syntactic embedding to another — with the circuit closure guarantee ensuring that no information is lost or created in the process.

#### References

- Brillouin, L.: "The negentropy principle of information." *J. Appl. Phys.* 24, 1152–1163 (1953)
- Kish, L.B., Ferry, D.K.: "Information entropy and thermal entropy: apples and oranges." *J. Comput. Electron.* 17, 43–50 (2018). [DOI:10.1007/s10825-017-1044-1](https://doi.org/10.1007/s10825-017-1044-1)
- Kish, L.B., Granqvist, C.G., Khatri, S.P., Peper, F.: "Zero and negative energy dissipation at information-theoretic erasure." *J. Comput. Electron.* 15, 335–339 (2016). [DOI:10.1007/s10825-015-0754-5](https://doi.org/10.1007/s10825-015-0754-5)
- Shannon, C.: "A Mathematical Theory of Communication." *Bell System Technical Journal* 27, 379–423 (1948)
- Dijkstra, E.W.: "A Discipline of Programming." Prentice-Hall (1976)

#### Acknowledgment

We thank Prof. Laszlo B. Kish (Texas A&M University) for his scientific guidance on the information-theoretic aspects of Digital Circuitality, including identifying the critical correction from Landauer-based to Brillouin-based framing in our foundational papers. His work on the distinction between information entropy and thermal entropy directly shaped the theoretical foundations presented here.

---

### /bpu — The BPU (BRIK Processing Unit)

**Headline (h1):** The BPU

**Subtitle:** Brik Processing Unit — Hardware That Says No

**Badge:** Concept — Roadmap to Silicon

#### What Is the BPU?

The BRIK Processing Unit (BPU) is a proposed hardware coprocessor designed to implement Digital Circuitality in silicon. Its purpose: verify computational actions *before* they execute — not through software checks that can be bypassed, but through physical circuits that cannot.

**Today (Phase 1):** Policy circuits run as software — PCD compiles to JavaScript, Python, and Rust, providing domain-verified guardrails that execute alongside your application.

**Future (Phase 2–3):** A BPU-equipped system would be physically incapable of executing uncertified code. Not because the software chooses to comply. Because the hardware would not provide an alternative.

#### Architecture

##### 64 Monomer Units

The BPU contains dedicated silicon implementations of all 64 core monomers — the same verified atomic operations that exist in software, realized as hardware gates. Each monomer unit:

- Implements the exact same truth table as its software counterpart
- Operates on bounded input domains with hardware-enforced range checking
- Produces deterministic output for every valid input
- Has a fixed, known latency (no cache misses, no branch mispredictions)

##### EVA Router

The EVA Router implements the three composition operators in hardware:

- **⊗ Sequential** — output of monomer A feeds input of monomer B
- **∥ Parallel** — monomers A and B execute simultaneously on independent data
- **⊕ Conditional** — a boolean guard selects between monomer A or B

The router enforces composition laws at the hardware level. Invalid compositions — where output domains don't match input domains — are physically impossible because the routing circuitry refuses to connect incompatible ports.

##### TCE Unit

The Thermodynamic Coherence Engine (TCE) Unit computes Φ_c in real time for every program executing on the BPU:

- **Φ_c = 1** — Circuit is closed. Execution proceeds.
- **Φ_c ≠ 1** — Circuit is open. A non-maskable `BLOCK` signal is asserted.

The BLOCK signal is **non-maskable**. No software — not the operating system, not a hypervisor, not a firmware update — can override it. It is a physical property of the circuit, like a fuse that blows when current exceeds its rating. Physics does not negotiate.

#### Why Hardware?

Software guardrails can be:

- **Bypassed** — a privileged process can skip validation
- **Updated** — a malicious update can remove safety checks
- **Overridden** — an administrator can disable protections
- **Crashed** — a bug in the safety system itself can cause it to fail open

Hardware guardrails cannot. A circuit either conducts or it doesn't. There is no privilege level that lets you make current flow through an open switch. The BPU applies this principle to computational safety: if the program doesn't close as a circuit, the hardware physically prevents execution.

#### AI Safety Application

The primary application of the BPU is **hardware-enforced AI safety**. Consider the current approach to AI alignment:

- **RLHF** teaches AI to *want* to be safe
- **Constitutional AI** teaches AI to *evaluate* whether its actions are safe
- **Guardrails** are software that *checks* AI outputs before they execute

All of these are software. All can be bypassed, jailbroken, or circumvented through prompt injection, model manipulation, or runtime exploitation.

The BPU takes a fundamentally different approach:

```
Action → PCD Policy Circuit → BPU → ALLOW / BLOCK

If BLOCK: the action does not execute.
Not "the action is logged."
Not "the action triggers an alert."
The action does not execute.
The hardware prevents it.
```

The AI doesn't need to want to be safe. The AI doesn't need to understand safety. The hardware enforces it, the same way a circuit breaker enforces current limits regardless of what the electrical load "wants" to do.

#### Policy Circuit Examples

##### Robot Arm Force Limits
```
PC robot_arm_safety {
    domain force: Range [0, 150];       // Newtons (ISO/TS 15066)
    domain torque: Range [0, 50];       // Nm
    domain speed: Range [0, 1500];      // mm/s

    fn verify_motion(f: Range [0, 150], t: Range [0, 50], s: Range [0, 1500]) {
        if (f > 150) { return 0; }      // BLOCK
        if (t > 50) { return 0; }       // BLOCK
        if (s > 1500) { return 0; }     // BLOCK
        return 1;                        // ALLOW
    }
}
```

##### Autonomous Vehicle Speed Boundary
```
PC vehicle_safety {
    domain speed: Range [0, 130];       // km/h
    domain proximity: Range [0, 300];   // meters to nearest obstacle

    fn verify_speed(s: Range [0, 130], p: Range [0, 300]) {
        if (p < 10 && s > 20) { return 0; }    // Too fast, too close
        if (p < 50 && s > 60) { return 0; }    // Urban zone limit
        return 1;
    }
}
```

##### LLM Output Safety
```
PC llm_output_filter {
    domain harm_score: Range [0, 100];
    domain confidence: Range [0, 100];

    fn verify_output(harm: Range [0, 100], conf: Range [0, 100]) {
        if (harm > 30) { return 0; }            // BLOCK harmful content
        if (conf < 20 && harm > 10) { return 0; } // BLOCK uncertain + risky
        return 1;
    }
}
```

#### Regulatory Trajectory

The BPU follows the same adoption trajectory as every safety-critical hardware mechanism in history:

- **Phase 1: Voluntary adoption** — Organizations that want provable AI safety install BPU-equipped systems. Competitive advantage through verifiable compliance.
- **Phase 2: Industry standard** — Insurance companies, auditors, and customers begin requiring BPU certification. Like ISO 27001 for security, but hardware-verifiable.
- **Phase 3: Regulatory requirement** — Governments mandate BPU-equivalent hardware for AI systems in critical infrastructure. Like ABS brakes in cars. Like circuit breakers in buildings. Like seatbelts.

First, a good idea. Then, the law.

#### Roadmap

| Phase | Milestone |
|-------|-----------|
| NOW | PCD policy circuits as software guardrails (JS, Python, Rust targets) |
| NEXT | FPGA prototype — 64 monomer units + EVA Router + TCE Unit |
| FUTURE | ASIC tape-out — dedicated BPU chip |
| HORIZON | Regulatory standard — mandatory for AI in critical infrastructure |

#### Further Reading

- The BPU — Hardware That Says No
- AI Safety with Policy Circuits
- Guardrails That Physics Can't Override
- Theoretical Foundations

---

### /demos — Demo Hub

**Headline (h1):** Demo Hub

**Subtitle:** Reproducible demonstrations of Digital Circuitality

**Description:** Every claim in Digital Circuitality is backed by a reproducible demo. Clone the repo, run the script, verify the result yourself. No trust required — only proof.

#### Demo 1: AI-Generated Bugs to Certified Artifacts

**What it does:** Takes 10 intentionally buggy functions (the kind AI code generators produce daily — off-by-one errors, missing edge cases, type coercions) and runs them through the BRIK-64 pipeline: lift to PCD, certify with TCE, and emit to clean target code.

**What it proves:** The certification pipeline catches every bug that traditional testing misses. Functions that pass unit tests but contain logical errors are rejected by TCE before they ever reach production. The output is not "fixed" code — it is a certified artifact with a mathematical proof of correctness.

```bash
# Clone and run
git clone https://github.com/brik64/brik64-demos.git
cd brik64-demos

# Run Demo 1: AI bugs → certified artifacts
./run_demo.sh demo1-ai-bugs

# Output: 10/10 bugs caught, 10/10 certified artifacts produced
# Each artifact includes: PCD blueprint, TCE report (Φ_c = 1), target code + tests
```

#### Demo 2: Translation Validation Shootout

**What it does:** Compiles 30 functions to both JavaScript and Python, executes both outputs with identical inputs, and proves the outputs are equivalent. Not "similar" — mathematically identical.

**What it proves:** Cross-language semantic equivalence. When BRIK-64 says two programs are the same, they produce the same output for every possible input within their closure domains. This is not fuzzing — it is exhaustive verification within the declared domain.

```bash
# Run Demo 2: Translation validation shootout
./run_demo.sh demo2-translation-validation

# Output: 30/30 functions verified equivalent across JS + Python
# For each function:
#   - PCD blueprint (canonical form)
#   - JS output + Python output
#   - Input/output comparison table
#   - TCE report confirming Φ_c = 1 for both targets
```

For the full framework behind this demo, see [Differential Semantics Testing](https://digitalcircuitality.com/research/differential-testing).

#### Demo 3: Auditor-Grade Error Elimination

**What it does:** Presents 15 functions that pass all their unit tests — every single test is green — but contain real bugs. Silent integer overflow, floating-point comparison traps, off-by-one in boundary conditions, implicit type coercions that work 99.9% of the time. The kind of bugs that survive code review, survive QA, and crash production at 3 AM.

**What it proves:** Testing is necessary but insufficient. Tests verify specific inputs. Certification verifies all inputs. BRIK-64's TCE catches every one of these 15 bugs because it operates on the mathematical structure of the computation, not on sample inputs.

```bash
# Run Demo 3: Auditor-grade error elimination
./run_demo.sh demo3-error-elimination

# Output: 15/15 bugs caught that tests missed
# For each bug:
#   - Original function + passing test suite
#   - The specific input that triggers the bug
#   - TCE diagnostic explaining WHY the circuit is not closed
#   - Corrected PCD blueprint + certified output
```

#### Adversarial Corpus: 50 Lethal Test Cases

Beyond the demos, we maintain an adversarial corpus of 50 test cases specifically designed to break the system. These are not normal tests — they are attack vectors. Integer overflow chains, deeply nested compositions that should blow the stack, string operations at boundary lengths, control flow that creates ambiguous paths.

The corpus found 3 real bugs in our own system during development. All were fixed. The corpus remains as a permanent regression suite — and a challenge to anyone who claims their verification is complete.

```bash
# Run the full adversarial corpus
./run_demo.sh adversarial-corpus

# Output: 50/50 test cases handled correctly
# Categories: arithmetic (10), arrays (10), control flow (10), strings (10), composition (10)
# See: tests/adversarial/ for all test case definitions
```

Full details: [Adversarial Corpus — 50 Tests Designed to Break the System](https://digitalcircuitality.com/research/adversarial-corpus).

#### Reproducing the Demos

All demos are available on GitHub. Each demo includes the source functions, the expected outputs, and a single shell script that runs everything end-to-end. No configuration. No dependencies beyond the BRIK-64 CLI.

```bash
# Prerequisites
cargo install brikc   # or download from brik64.com/cli

# Run all demos
./run_demo.sh all

# Run a specific demo
./run_demo.sh demo1-ai-bugs
./run_demo.sh demo2-translation-validation
./run_demo.sh demo3-error-elimination
./run_demo.sh adversarial-corpus
```

GitHub repository: [github.com/brik64/brik64-demos](https://github.com/brik64/brik64-demos)

---

### /blog — Blog Index (21 Articles)

**Headline (h1):** Articles

**Subtitle:** Articles on Digital Circuitality, PCD, and BRIK-64

| Date | Category | Title | Description |
|------|----------|-------|-------------|
| MAR 2026 | PRODUCT | The First Universal Transpiler: 10 Languages In, 14 Out | Every transpiler converts one language to one other. BRIK-64 converts any of 10 to any of 14 — with formal certification that the output is equivalent to the input. |
| MAR 2026 | AI SAFETY | What Artificial Intuition Gets Right — And What It Can't Verify | Carlos E. Perez argues AI is intuition, not intelligence. He's right. But intuition without certification is a liability. |
| MAR 2026 | REVOLUTION | Your Messy Code Goes In. Clean, Verified Code Comes Out. | The PCD roundtrip: extract the computational essence, verify it formally, recompile from the specification. Clean code + auto-generated tests + the blueprint as permanent spec. Any language in, any language out. |
| MAR 2026 | MIGRATION | The $3 Trillion COBOL Problem — And How PCD Solves It | 220 billion lines of COBOL. 95% of ATM transactions. $3 billion/year in maintenance. The workforce is retiring. PCD lifts, verifies, and emits to any modern language. |
| MAR 2026 | AUTHORITY | The Verification Gap — Why Software Is 50 Years Behind Hardware | The cost of software bugs: $2.41 trillion/year. Ariane 5. Boeing 737 MAX. Therac-25. Digital Circuitality closes the gap. |
| MAR 2026 | CONCEPT | What if Software Worked Like DNA? | Introducing Digital Circuitality — 64 verified atomic components that compose like biological molecules. No mutations. No undefined behavior. |
| MAR 2026 | AI SAFETY | AI Safety with Policy Circuits | Your AI guardrails are made of paper. PCD policy circuits build them from steel — formally verified, thermodynamically certified, hardware-enforceable. |
| MAR 2026 | HARDWARE | The BPU — Hardware That Says No | The case for a dedicated AI safety chip. 64 monomer gates in silicon. A non-maskable block signal that no software can override. |
| MAR 2026 | TUTORIAL | Your First PCD Circuit in 5 Minutes | From installation to compilation — a hands-on guide to writing and running your first formally verified program. |
| MAR 2026 | DEEP DIVE | EVA Algebra: The Math Behind Composition | Sequential ⊗, Parallel ∥, Conditional ⊕ — how three operators create a complete algebra for software composition. |
| MAR 2026 | ECOSYSTEM | Building with BRIK-64 SDKs in Any Language | Drop 128 verified operations into your Rust, JavaScript, or Python project. No migration needed — Digital Circuitality works alongside your code. |
| MAR 2026 | ENGINEERING | Why Your Calculator Is Lying to You | 0.1 + 0.2 = 0.30000000000000004. This is not a bug — it's IEEE 754. Digital Circuitality solves this with precision-as-domain: declare your pi, know your error, certify your math. |
| MAR 2026 | AI AGENTS | PCD for AI Agents — A Practical Guide | 5 real examples: temperature converter, input validator, rate limiter, price calculator, safety policy. 128 operations. Auto-certified. |
| MAR 2026 | FULL SPECTRUM | Beyond Certification — Real Software with 128 Monomers | Games, simulations, AI pipelines, trading bots. The full power of 128 monomers. Phi_c = 1 to open N% — you choose the mix. |
| MAR 2026 | AI SAFETY | Guardrails That Physics Can't Override | PCD policy circuits for AI and robotics. Robot arm force limits. Autonomous vehicle boundaries. LLM output filtering. Hardware-enforced via BPU. |
| MAR 2026 | SCIENCE | Why Information Entropy Is Not Thermal Entropy | Kish & Ferry (2018) argued rigorously: information entropy and thermal entropy are apples and oranges. Landauer's standard interpretation is questioned. Phi_c = 1 means S_I = 0. |
| MAR 2026 | RESEARCH | The Physicist Who Asked Whether Noise Can Compute | Prof. Laszlo B. Kish (Texas A&M) — noise-based logic, KLJN secure key exchange, and the entropy distinction that changed our foundations. |
| MAR 2026 | TOOLING | Reverse-Compile Anything: The BRIK Lifter | Reverse-compile JS, TS, Python, Rust, C, Go, and COBOL to PCD blueprints. Liftability scores from 0.0 to 1.0. Your legacy code, formally verified. |
| MAR 2026 | PLATFORM | Your AI Agent Speaks PCD: The BRIK-64 API and MCP | REST API at registry.brik64.dev/v1. MCP 2-tool architecture. Certify via API. Free tier: 100 req/day. Your AI agent writes certified code. |
| MAR 2026 | TOOLING | Your Code Already Exists. Now Verify It. | Point the lifter at your codebase. See which functions are mathematically correct — no rewriting, no annotations. Just answers. |
| MAR 2026 | AI SAFETY | Why Your AI Needs Blueprints, Not Hope | AI writes the code and the tests. Same model, same blind spots. BRIK-64 breaks the circle with independent mathematical verification. |
| MAR 2026 | MIGRATION | From JavaScript to Rust in 3 Commands (Verified) | Lift. Check. Build. Three commands to migrate verified code between any language — with auto-generated tests included. |

---

### /news — News Updates

**Headline (h1):** Updates

**Subtitle:** 6 news on Digital Circuitality and BRIK-64

| Date | Category | Headline |
|------|----------|----------|
| MAR 2026 | LAUNCH | Digital Circuitality goes public — the website, documentation, SDKs, and compiler are now available for developers and AI agents worldwide. |
| MAR 2026 | PLATFORM | The BRIK-64 platform enters development — a visual circuit laboratory with public registry, certification badges, and collaborative composition tools. |
| MAR 2026 | DOCS | Complete documentation live at docs.brik64.dev — tutorials, PCD language reference, SDK guides, and API documentation for all 128 monomers. |
| MAR 2026 | TOOLS | Claude Code skills published — 5 AI agent skills for instant BRIK-64 integration: PCD system, JavaScript, Python, Rust, and Digital Circuitality methodology. |
| MAR 2026 | OPEN SOURCE | 14 repositories now live on GitHub under the brik64 organization — compiler, runtime, SDKs, documentation, verification proofs, and community examples. |
| MAR 2026 | COMMUNITY | Join the Digital Circuitality community — discussions, contributions, and early access to the platform registry launching later this year. |

---

### /about — About Digital Circuitality

**Headline (h1):** About Digital Circuitality

#### The Origin

Digital Circuitality was born from a deceptively simple question:

> "What if software could work like DNA?"

In molecular biology, all life is encoded by exactly 64 codons — triplets of nucleotides (4 bases x 4 bases x 4 bases = 4^3 = 64) that map deterministically to 20 amino acids. This system is finite, complete, self-consistent, and has remained stable for approximately 3.5 billion years without a patch. There are no runtime errors in transcription. No undefined behavior. No supply chain attacks.

Software has never had this property. Programs are tested, not proven. Dependencies are assumed, not verified. Compilers are trusted, not certified. Every layer introduces probabilistic uncertainty that compounds upward until the only honest statement about any deployed system is: *it works on the machines we tested.*

#### The Biological Parallel

The insight was not philosophical — it was structural. Biology achieves verifiable, closed computation through a finite alphabet of 64 codons. BRIK-64 applies the same principle: **8 operational families x 8 operations per family = 64 monomers**. These are formally verified atomic components — like logic gates in silicon — that compose through EVA algebra (sequential ⊗, parallel ∥, conditional ⊕) into arbitrary programs.

Just as DNA's 64 codons bound the genetic search space to a finite, verifiable alphabet, BRIK-64's 64 monomers bound the computational search space. Programs are not arbitrary strings of instructions; they are compositions of a finite verified alphabet. Correctness reduces to coherence — and coherence, unlike general correctness, is decidable.

#### Timeline

- **2025** — Conception: the biological parallel between 64 codons and computational atomics. First formalization of the Digital Circuitality property.
- **Early 2026** — First PCD compiler: hand-written parser, SSA planner, multi-backend emission (Rust, JavaScript, Python, BIR bytecode, native x86-64).
- **March 2026** — Self-compilation fixpoint achieved: four successive generations of self-compilation produce binaries with identical SHA-256 hashes, formally proving the system has reached an immutable state.
- **Current** — v5.0.0-beta.1: 128 monomers (64 core + 64 extended), 15,424 tests, Domain System, 207 Coq formal proofs, 14 Rust crates, multi-language SDKs.

#### The Technology

Digital Circuitality is a formal property: a system exhibits it if and only if it satisfies four conditions:

1. **Atomicity** — Built exclusively from verified atomic components (monomers) with formally proved specifications.
2. **Compositionality** — All compositions satisfy EVA algebraic laws: sequential, parallel, and conditional composition with verified closure.
3. **Coherence** — The Coherence Metric Framework certifies the system with Φ_c = 1 — all inputs consumed, all outputs produced, no leaked state.
4. **Closure** — The compiler, written in its own language, produces identical cryptographic output across self-compilation generations (the fixpoint).

Programs are written in PCD (Printed Circuit Description), a language where programs are circuit schematics rather than imperative instructions. The PCD compiler itself is written in PCD.

#### Current Status

| Metric | Value |
|--------|-------|
| Version | v5.0.0-beta.1 |
| Monomers | 128 (64 core + 64 extended) |
| Tests | 15,424 |
| Formal proofs | 207 (Coq) |
| Crates | 14 Rust crates |
| Backends | Rust, JavaScript, Python, BIR bytecode, native x86-64 |

#### Team

The BRIK-64 team designed the Digital Circuitality property, the architecture, EVA algebra, the PCD language and compiler, and the BPU hardware concept.

#### Theoretical Foundations

The term "thermodynamic" in Digital Circuitality is an analogy, not a claim about physical quantities. A physical circuit is coherent when energy flows from source to sink without leakage and all signal paths are closed. The TCE (Thermodynamic Coherence Engine) measures the *computational structural analogues* of these properties — operational complexity, signature distance, structural entropy, and circuit closure. These are precisely defined software-engineering metrics, named by analogy to emphasize the closed-circuit design philosophy.

##### The ETC — An Information-Theoretic Metric

The Entropic Transfer Coefficient (ETC) measures how efficiently information flows through a composition. ETC = 1 means every bit of input information is used in computing the output. ETC < 1 means some input information is discarded (which may be intentional). ETC > 1 would indicate information creation, which cannot occur in a deterministic composition where outputs are computed solely from inputs.

The ETC operates strictly in the **information-theoretic domain** (Shannon entropy) and does not claim thermodynamic energy costs for computational operations.

##### Key Intellectual Lineages

- **Brillouin's negentropy principle (1953)** — The conceptual framework connecting information to physical entropy inspired the information-theoretic foundation of our coherence metrics. We note, however, that Brillouin's principle has important limitations as identified by Kish & Ferry (2018) — it is not a general law and can be violated when the measurement system and the physical system are at different temperatures or weakly coupled.
- **The Kish-Ferry distinction (2018)** — Prof. Laszlo B. Kish (Texas A&M University), working with D.K. Ferry (Arizona State) and C.G. Granqvist (Uppsala), demonstrated definitively that *information entropy* and *thermal entropy* are fundamentally different physical quantities — "apples and oranges." This distinction is critical: the ETC measures information entropy (subjective, measurement-dependent), not thermal entropy (objective, physical property). The energy reference kT ln 2 is used as a normalization convention, not as a claim that erasure requires minimum energy dissipation.
- **Zero-energy erasure (Kish et al., 2016)** — Kish, Granqvist, Khatri, and Peper demonstrated that information erasure can occur with zero or even *negative* energy dissipation through thermalization in double-potential-well memories. This refutes Landauer's erasure bound as a general principle. For Digital Circuitality, the key result is that a deterministic computer with error-free memory has information entropy of exactly zero — which is precisely what Φ_c = 1 means.

##### References

- Brillouin, L.: "The negentropy principle of information." *J. Appl. Phys.* 24, 1152–1163 (1953)
- Kish, L.B., Ferry, D.K.: "Information entropy and thermal entropy: apples and oranges." *J. Comput. Electron.* 17, 43–50 (2018). [DOI](https://doi.org/10.1007/s10825-017-1044-1)
- Kish, L.B., Granqvist, C.G., Khatri, S.P., Peper, F.: "Zero and negative energy dissipation at information-theoretic erasure." *J. Comput. Electron.* 15, 335–339 (2016). [DOI](https://doi.org/10.1007/s10825-015-0754-5)

##### Acknowledgment

We thank Prof. Laszlo B. Kish (Texas A&M University) for his scientific guidance on the thermodynamic aspects of Digital Circuitality, including identifying the critical correction from Landauer-based to Brillouin-based framing in our foundational papers.

#### Links

- [GitHub](https://github.com/brik64)
- [BRIK-64 Documentation](https://brik64.dev/)
- [npm](https://www.npmjs.com/org/brik64) · [PyPI](https://pypi.org/user/brik64/) · [crates.io](https://crates.io/crates/brik64)

---

## PRICING

No pricing section found on the site.

---

## TESTIMONIALS

No testimonials section found on the site.

---

## FAQ

No FAQ section found on the site.

---

## NOTES

- **brik64.com** redirects to firecrawl.dev as of 2026-03-27 (likely DNS/hosting issue or intentional redirect)
- The actual BRIK-64 website lives at **digitalcircuitality.com**
- Machine-readable content available at:
  - JSON: https://digitalcircuitality.com/api/content.json
  - Markdown: https://digitalcircuitality.com/api/content.md
- External docs: https://docs.brik64.dev/
- The /design-system page does not exist as a route
