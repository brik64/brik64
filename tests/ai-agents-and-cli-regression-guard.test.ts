import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

const bannedRegressionPhrases = [
  "The operator path starts with one bounded command workflow.",
  "The CLI route shows the install path, command grammar, and verification loop in one consistent product cadence.",
  "One install and workflow route",
  "This route explains what enterprise teams can operationalize today and where legal/compliance programs require separate controls.",
];

const requiredAiAgentsSignals = [
  "Agent setup matrix",
  "Claude Code",
  "Codex",
  "Gemini CLI",
  "No trust by default",
  "policy circuits",
  "Machine-readable reference",
  "structured diagnostics",
];

describe("AI agents and CLI regression guard", () => {
  it("source keeps AI agents technical depth and blocks known placeholder regressions", () => {
    const aiAgents = read("src/app/ai-agents/page.tsx");
    const cli = read("src/app/cli/page.tsx");
    const enterprise = read("src/app/enterprise/page.tsx");

    for (const signal of requiredAiAgentsSignals) {
      expect(aiAgents).toContain(signal);
    }

    const joined = `${aiAgents}\n${cli}\n${enterprise}`;
    for (const phrase of bannedRegressionPhrases) {
      expect(joined).not.toContain(phrase);
    }
  });

  const baseUrl = process.env.SITE_BASE_URL;

  if (baseUrl) {
    it("runtime keeps AI agents content and blocks known placeholder regressions", async () => {
      const [aiAgentsHtml, cliHtml, enterpriseHtml] = await Promise.all([
        fetch(`${baseUrl}/ai-agents`).then((r) => r.text()),
        fetch(`${baseUrl}/cli`).then((r) => r.text()),
        fetch(`${baseUrl}/enterprise`).then((r) => r.text()),
      ]);

      for (const signal of requiredAiAgentsSignals) {
        expect(aiAgentsHtml).toContain(signal);
      }

      const joined = `${aiAgentsHtml}\n${cliHtml}\n${enterpriseHtml}`;
      for (const phrase of bannedRegressionPhrases) {
        expect(joined).not.toContain(phrase);
      }
    });
  }
});
