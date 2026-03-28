export interface LanguageData {
  slug: string;
  name: string;
  logo: string;
  canLiftFrom: boolean;
  canCompileTo: boolean;
  extension: string;
  description: string;
  liftExample?: { input: string; output: string };
  compileExample?: { input: string; output: string };
  installCommand?: string;
}

export const languages: LanguageData[] = [
  {
    slug: "javascript",
    name: "JavaScript",
    logo: "/brands/javascript.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".js",
    description: "The language of the web. Lift existing JS codebases to PCD or compile certified circuits to JavaScript for browser and Node.js deployment.",
    installCommand: "npm install @brik64/core",
    liftExample: {
      input: `function add(a, b) {\n  return a + b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nexport function add(a, b) {\n  return (a + b) & 0xFF;\n}`,
    },
  },
  {
    slug: "typescript",
    name: "TypeScript",
    logo: "/brands/typescript.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".ts",
    description: "Type-safe JavaScript. Lift TypeScript projects to PCD blueprints or compile certified circuits with full type annotations.",
    liftExample: {
      input: `function add(a: number, b: number): number {\n  return a + b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nexport function add(a: number, b: number): number {\n  return (a + b) & 0xFF;\n}`,
    },
  },
  {
    slug: "python",
    name: "Python",
    logo: "/brands/python.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".py",
    description: "The most popular language for AI/ML and scripting. Lift Python code to PCD or compile certified circuits as Python modules.",
    installCommand: "pip install brik64",
    liftExample: {
      input: `def add(a, b):\n    return a + b`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `# BRIK-64 certified \u2014 \u03a6_c = 1\ndef add(a: int, b: int) -> int:\n    return (a + b) & 0xFF`,
    },
  },
  {
    slug: "rust",
    name: "Rust",
    logo: "/brands/rust.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".rs",
    description: "Systems programming with safety guarantees. Lift Rust code to PCD or compile certified circuits as zero-cost Rust abstractions.",
    installCommand: "cargo add brik64-core",
    liftExample: {
      input: `fn add(a: u8, b: u8) -> u8 {\n    a.wrapping_add(b)\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\npub fn add(a: u8, b: u8) -> u8 {\n    a.wrapping_add(b)\n}`,
    },
  },
  {
    slug: "c",
    name: "C",
    logo: "/brands/c.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".c",
    description: "The foundation of systems software. Lift legacy C code to PCD or compile certified circuits as portable C99.",
    liftExample: {
      input: `uint8_t add(uint8_t a, uint8_t b) {\n    return a + b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `/* BRIK-64 certified \u2014 \u03a6_c = 1 */\nuint8_t add(uint8_t a, uint8_t b) {\n    return (uint8_t)(a + b);\n}`,
    },
  },
  {
    slug: "cpp",
    name: "C++",
    logo: "/brands/cplusplus.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".cpp",
    description: "High-performance systems programming. Lift C++ codebases to PCD or compile certified circuits as modern C++20.",
    liftExample: {
      input: `auto add(uint8_t a, uint8_t b) -> uint8_t {\n    return a + b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nconstexpr auto add(uint8_t a, uint8_t b) -> uint8_t {\n    return static_cast<uint8_t>(a + b);\n}`,
    },
  },
  {
    slug: "go",
    name: "Go",
    logo: "/brands/go.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".go",
    description: "Simple, fast, and concurrent. Lift Go services to PCD or compile certified circuits as idiomatic Go packages.",
    liftExample: {
      input: `func add(a, b uint8) uint8 {\n    return a + b\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nfunc add(a, b uint8) uint8 {\n    return a + b\n}`,
    },
  },
  {
    slug: "cobol",
    name: "COBOL",
    logo: "/brands/cobol.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".cob",
    description: "Legacy mainframe modernization. Lift decades-old COBOL programs to PCD and compile to any modern language \u2014 with certified correctness.",
    liftExample: {
      input: `       IDENTIFICATION DIVISION.\n       PROGRAM-ID. ADD-NUMS.\n       DATA DIVISION.\n       PROCEDURE DIVISION.\n           ADD A TO B GIVING RESULT.`,
      output: `circuit add_nums {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add_nums {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `      * BRIK-64 certified \u2014 \u03a6_c = 1\n       IDENTIFICATION DIVISION.\n       PROGRAM-ID. ADD-NUMS.\n       PROCEDURE DIVISION.\n           ADD A TO B GIVING RESULT.`,
    },
  },
  {
    slug: "php",
    name: "PHP",
    logo: "/brands/php.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".php",
    description: "The web\u2019s workhorse. Lift PHP applications to PCD or compile certified circuits as PHP 8.3 functions.",
    liftExample: {
      input: `function add(int $a, int $b): int {\n    return $a + $b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nfunction add(int $a, int $b): int {\n    return ($a + $b) & 0xFF;\n}`,
    },
  },
  {
    slug: "java",
    name: "Java",
    logo: "/brands/java.svg",
    canLiftFrom: true,
    canCompileTo: true,
    extension: ".java",
    description: "Enterprise-grade computing. Lift Java applications to PCD or compile certified circuits as Java 21 classes.",
    liftExample: {
      input: `public static int add(int a, int b) {\n    return a + b;\n}`,
      output: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
    },
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\npublic static int add(int a, int b) {\n    return (a + b) & 0xFF;\n}`,
    },
  },
  {
    slug: "swift",
    name: "Swift",
    logo: "/brands/swift.svg",
    canLiftFrom: false,
    canCompileTo: true,
    extension: ".swift",
    description: "Apple\u2019s modern language. Compile certified PCD circuits to Swift for iOS, macOS, and server-side deployment.",
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `// BRIK-64 certified \u2014 \u03a6_c = 1\nfunc add(_ a: UInt8, _ b: UInt8) -> UInt8 {\n    return a &+ b\n}`,
    },
  },
  {
    slug: "wasm",
    name: "WebAssembly",
    logo: "/brands/webassembly.svg",
    canLiftFrom: false,
    canCompileTo: true,
    extension: ".wasm",
    description: "Near-native performance everywhere. Compile certified PCD circuits to WebAssembly for browser, edge, and embedded runtimes.",
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `(module\n  ;; BRIK-64 certified \u2014 \u03a6_c = 1\n  (func $add (param $a i32) (param $b i32) (result i32)\n    local.get $a\n    local.get $b\n    i32.add\n    i32.const 0xFF\n    i32.and))`,
    },
  },
  {
    slug: "native",
    name: "Native (x86-64)",
    logo: "/brands/rust.svg",
    canLiftFrom: false,
    canCompileTo: true,
    extension: "ELF",
    description: "Direct machine code. Compile certified PCD circuits to standalone x86-64 ELF binaries with zero dependencies \u2014 just like brikc itself.",
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `; BRIK-64 certified \u2014 \u03a6_c = 1\n; x86-64 ELF binary, 708 bytes\nadd:\n    movzx eax, dil\n    add   al, sil\n    ret`,
    },
  },
  {
    slug: "bir",
    name: "BIR Bytecode",
    logo: "/brands/antigravity.svg",
    canLiftFrom: false,
    canCompileTo: true,
    extension: ".bir",
    description: "BRIK-64\u2019s native bytecode. Compile PCD to BIR for execution on the BPU hardware coprocessor or the software BIR interpreter.",
    compileExample: {
      input: `circuit add {\n  input a: u8, b: u8;\n  output result: u8;\n  wire result = ADD8(a, b);\n}`,
      output: `; BRIK-64 certified \u2014 \u03a6_c = 1\n; BIR v1 bytecode\nLOAD  r0, a\nLOAD  r1, b\nADD8  r2, r0, r1\nSTORE result, r2`,
    },
  },
];

export function getLanguageBySlug(slug: string): LanguageData | undefined {
  return languages.find((l) => l.slug === slug);
}
