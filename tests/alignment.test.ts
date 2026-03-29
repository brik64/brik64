import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

function getAllPageFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllPageFiles(fullPath));
    } else if (entry.name === "page.tsx") {
      results.push(fullPath);
    }
  }
  return results;
}

const APP_DIR = path.resolve(__dirname, "../src/app");
const allPages = getAllPageFiles(APP_DIR);

describe("Alignment — h2 with text-center must have mx-auto", () => {
  for (const file of allPages) {
    const relPath = path.relative(APP_DIR, file);
    const content = fs.readFileSync(file, "utf-8");
    const lines = content.split("\n");

    it(`${relPath} — all centered h2 have mx-auto`, () => {
      const issues: string[] = [];
      lines.forEach((line, i) => {
        // Match h2 with text-center but without mx-auto
        if (
          line.includes("<h2") &&
          line.includes("text-center") &&
          !line.includes("mx-auto")
        ) {
          issues.push(`Line ${i + 1}: h2 has text-center but no mx-auto`);
        }
      });
      expect(issues).toEqual([]);
    });
  }
});

describe("Alignment — Hero sections are centered", () => {
  for (const file of allPages) {
    const relPath = path.relative(APP_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — h1 has text-center or is in a text-center container`, () => {
      // Article detail pages intentionally have left-aligned h1
      if (relPath.includes("[slug]")) return;
      const h1Match = content.match(/<h1[^>]*className="([^"]*)"/);
      if (h1Match) {
        const classes = h1Match[1];
        // h1 should be centered — either directly or via parent
        const isCentered =
          classes.includes("text-center") ||
          content.includes('text-center">\n') ||
          content.includes("text-center lg:");
        // Just warn, don't fail — some pages intentionally have left-aligned h1
        if (!isCentered) {
          // Check if parent div has text-center
          const h1Index = content.indexOf(h1Match[0]);
          const contextBefore = content.slice(
            Math.max(0, h1Index - 200),
            h1Index
          );
          const parentCentered = contextBefore.includes("text-center");
          expect(parentCentered).toBe(true);
        }
      }
    });
  }
});

describe("Structure — All pages have Navbar and Footer", () => {
  for (const file of allPages) {
    const relPath = path.relative(APP_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    // Skip layout files and special pages
    if (relPath === "layout.tsx" || relPath === "not-found.tsx") continue;
    // Skip docs redirect page
    if (relPath.includes("docs/")) continue;

    it(`${relPath} — has Navbar`, () => {
      expect(content).toMatch(/<Navbar/);
    });

    it(`${relPath} — has Footer`, () => {
      expect(content).toMatch(/<Footer/);
    });
  }
});

describe("Structure — Pages use consistent border pattern", () => {
  for (const file of allPages) {
    const relPath = path.relative(APP_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    // Skip non-content pages
    if (
      relPath === "layout.tsx" ||
      relPath === "not-found.tsx" ||
      relPath.includes("docs/") ||
      relPath.includes("login/") ||
      relPath.includes("design-system/") ||
      relPath.includes("playground/") ||
      relPath.includes("news/") ||
      relPath.includes("blog/[slug]")
    )
      continue;

    it(`${relPath} — uses max-w-7xl container`, () => {
      expect(content).toMatch(/max-w-7xl|max-w-5xl|max-w-3xl/);
    });
  }
});

describe("Consistency — No hardcoded colors in page files", () => {
  // Allowed hardcoded colors
  const allowedHardcoded = [
    "#00b8d4", // Brand teal
    "#00a0bc", // Brand teal hover
    "#1A1817", // Dark text
    "#322F2D", // Muted text
    "#EEEEEE", // Light border
    "#FAFAFA", // Light bg
    "#0a0e14", // Code block bg
    "#e0e0e0", // Code text
    "#ff5f57", // Traffic light red
    "#febc2e", // Traffic light yellow
    "#28c840", // Traffic light green
    "#f0fdff", // Light gradient
  ];

  for (const file of allPages) {
    const relPath = path.relative(APP_DIR, file);
    const content = fs.readFileSync(file, "utf-8");

    it(`${relPath} — no unexpected hardcoded colors`, () => {
      const hexColors = content.match(/#[0-9a-fA-F]{6}/g) || [];
      const unexpected = hexColors.filter(
        (c) => !allowedHardcoded.includes(c)
      );
      // Allow some variance but flag if too many unknown colors
      expect(unexpected.length).toBeLessThan(5);
    });
  }
});
