import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

// Recursively get all .tsx and .ts files in src/
function getAllSourceFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllSourceFiles(fullPath));
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      results.push(fullPath);
    }
  }
  return results;
}

const SRC_DIR = path.resolve(__dirname, "../src");
const allFiles = getAllSourceFiles(SRC_DIR);

describe("IP Protection — No Monomer Hex Codes", () => {
  const mcPattern = /MC_\d{2}/;
  const mcSpacePattern = /MC \d{2}[–-]\d{2}/;

  for (const file of allFiles) {
    const relPath = path.relative(SRC_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no MC_XX hex codes`, () => {
      const matches = content.match(new RegExp(mcPattern.source, "g"));
      expect(matches).toBeNull();
    });

    it(`${relPath} — no MC XX-XX range patterns`, () => {
      const matches = content.match(new RegExp(mcSpacePattern.source, "g"));
      expect(matches).toBeNull();
    });
  }
});

describe("IP Protection — No EVA Formal Symbols", () => {
  const evaSymbols = /[⊗⊕∥]|&otimes;|&oplus;/;

  for (const file of allFiles) {
    const relPath = path.relative(SRC_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no EVA algebra symbols (⊗ ⊕ ∥)`, () => {
      const matches = content.match(new RegExp(evaSymbols.source, "g"));
      expect(matches).toBeNull();
    });
  }
});

describe("IP Protection — No TCE Metric Details", () => {
  const sensitiveMetrics = /S_I\s*=\s*0|Entropic Transfer Coefficient|δ\s*=\s*0|V\(C\)\s*=\s*1|ΔN\s*=|C_m\s*=|Ω\s*=\s*1/;

  for (const file of allFiles) {
    const relPath = path.relative(SRC_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no sensitive TCE metrics`, () => {
      const matches = content.match(new RegExp(sensitiveMetrics.source, "g"));
      expect(matches).toBeNull();
    });
  }
});

describe("IP Protection — No Full Monomer Listings", () => {
  // Should not list all 8 operations of any family
  const fullArithmetic = /ADD8.*SUB8.*MUL8.*DIV8.*INC.*DEC.*MOD8.*NEG8/s;
  const fullLogic = /AND8.*OR8.*XOR8.*NOT8.*SHL.*SHR.*ROL.*ROR/s;
  const fullMemory = /LOAD.*STORE.*PUSH.*POP.*PEEK.*SWAP.*DUP.*DROP/s;

  for (const file of allFiles) {
    const relPath = path.relative(SRC_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no complete arithmetic family listing`, () => {
      expect(fullArithmetic.test(content)).toBe(false);
    });

    it(`${relPath} — no complete logic family listing`, () => {
      expect(fullLogic.test(content)).toBe(false);
    });

    it(`${relPath} — no complete memory family listing`, () => {
      expect(fullMemory.test(content)).toBe(false);
    });
  }
});

describe("IP Protection — No API Dump References", () => {
  const apiDump = /\/api\/content\.json|\/api\/content\.md|AI AGENT\? CONSUME/i;

  for (const file of allFiles) {
    const relPath = path.relative(SRC_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no API dump references`, () => {
      const matches = content.match(new RegExp(apiDump.source, "gi"));
      expect(matches).toBeNull();
    });
  }
});
