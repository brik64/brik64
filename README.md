<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/logo-white.png">
  <source media="(prefers-color-scheme: light)" srcset="assets/logo-dark.png">
  <img src="assets/logo-white.png" alt="BRIK-64" width="200" />
</picture>

# BRIK-64

### Digital Circuitality — Software That Works Like Hardware

[![Version](https://img.shields.io/badge/version-4.0.0--beta.2-orange?style=flat-square)](https://github.com/brik64/brik64/releases)
[![Status](https://img.shields.io/badge/status-pre--release-orange?style=flat-square)](#quick-start)
[![License](https://img.shields.io/badge/license-Proprietary-red?style=flat-square)](LICENSE)
[![Phi_c](https://img.shields.io/badge/%CE%A6_c-1%20%E2%80%94%20verified-00e5ff?style=flat-square)](#what-is-brik-64)

[![npm](https://img.shields.io/npm/v/%40brik64%2Fcore?style=flat-square&label=%40brik64%2Fcore&color=cb3837)](https://www.npmjs.com/package/@brik64/core)
[![PyPI](https://img.shields.io/pypi/v/brik64?style=flat-square&label=brik64&color=3776AB)](https://pypi.org/project/brik64/)
[![crates.io](https://img.shields.io/crates/v/brik64-core?style=flat-square&label=brik64-core&color=dea584)](https://crates.io/crates/brik64-core)

</div>

---

## What is BRIK-64?

BRIK-64 is the first **Digital Circuitality** architecture: software that works like hardware.

- **128 verified atomic operations** — 64 core monomers + 64 extended monomers, formally proven in Coq
- **Programs as circuit blueprints (PCD)** — Printed Circuit Descriptions replace traditional source code with deterministic circuit schematics
- **Mathematical certification** — The Thermodynamic Coherence Engine guarantees every program reaches closure: **Phi_c = 1**
- **8 compilation targets** — JavaScript, Python, Rust, C, Go, COBOL, WASM, Native x86-64

> "An AI doesn't need a better language. It needs a language where incorrect programs cannot compile."

---

## Quick Start

```bash
curl -fsSL https://brik64.dev/install | bash
brikc                     # Interactive banner
brikc build hello.pcd     # Compile PCD
brikc lift app.js         # Reverse-compile to PCD
brikc check program.pcd   # Verify Phi_c = 1
```

---

## The Lifter — Reverse Compile Anything

The Lifter transforms existing source code into verified PCD circuit blueprints. Write in any language, get mathematical certification for free.

**10 supported source languages:**

JS, TS, TSX, Python, Rust, C, C++, Go, COBOL, PHP, Java

**Pipeline:** Source → PCD → Any Target Language

```bash
# Reverse-compile legacy COBOL to PCD, then emit Rust
brikc lift legacy.cob && brikc build lifted.pcd --target rust

# Lift a Python module
brikc lift analytics.py

# Lift and cross-compile in one step
brikc lift app.ts --target python
```

---

## Platform API

| Service | Endpoint |
|---------|----------|
| Registry | `registry.brik64.dev/v1` |
| MCP Server | `brikc mcp-server` (2 tools) |

```bash
# Start the MCP server for AI agent integration
brikc mcp-server
```

---

## SDKs

```bash
npm install @brik64/core    # JavaScript/TypeScript
pip install brik64          # Python
cargo add brik64-core       # Rust
```

---

## Key Links

| Resource | URL |
|----------|-----|
| Website | [digitalcircuitality.com](https://digitalcircuitality.com) |
| Documentation | [docs.brik64.dev](https://docs.brik64.dev) |
| API | [registry.brik64.dev](https://registry.brik64.dev) |
| Install | [brik64.dev/install](https://brik64.dev/install) |
| Blog | [digitalcircuitality.com/blog](https://digitalcircuitality.com/blog) |

---

## License

**Proprietary** — (c) 2026 Carlos J. Perez. All rights reserved.

See [LICENSE](LICENSE) for details.
