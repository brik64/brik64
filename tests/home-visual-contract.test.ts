import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("home visual contract", () => {
  const home = () => read("src/components/vnext/home.tsx");
  const platform = () => read("src/components/vnext/platform-proof-surfaces.tsx");

  it("keeps the hero platform preview static and desktop-native", () => {
    const content = home();

    expect(content).toContain("#ff5f57");
    expect(content).toContain("#ffbd2e");
    expect(content).toContain("#28c840");
    expect(content).toContain("Project / PCDs");
    expect(content).not.toContain("parallax");
    expect(content).not.toContain("translate3d");
  });

  it("keeps feedback-loop sequencing in the intended loop order", () => {
    const content = home();
    const first = content.indexOf("Agent drafts the next circuit attempt");
    const second = content.indexOf("Compiler checks domains and closure");
    const third = content.indexOf("Loop until the circuit becomes bounded");
    const fourth = content.indexOf("Feedback seeds the next attempt");

    expect(first).toBeGreaterThan(-1);
    expect(second).toBeGreaterThan(first);
    expect(third).toBeGreaterThan(second);
    expect(fourth).toBeGreaterThan(third);
  });

  it("keeps incremental adoption copy in English with concrete path descriptions", () => {
    const content = home();

    expect(content).toContain("Choose the generated function");
    expect(content).toContain("Pick one high-value generated function as the bounded review target.");
    expect(content).toContain("Expose the review trail so agents and maintainers can audit the result.");
    expect(content).not.toContain("Paso ");
  });

  it("keeps the closing enterprise CTA routes available", () => {
    const content = home();

    expect(content).toContain('href="/contact-sales"');
    expect(content).toContain('href="/signup"');
    expect(content).toContain('href="/login"');
  });

  it("keeps platform proof labels and review bullets compact", () => {
    const content = platform();

    expect(content).toContain("Core logic stays modeled.");
    expect(content).toContain("Contract edges stay visible.");
    expect(content).toContain("Hashes preserve auditability.");
    expect(content).toContain("CORE_CERTIFIED");
    expect(content).toContain("CONTRACT_CERTIFIED");
  });
});
