import { describe, expect, it } from "vitest";

import { read } from "./site-grammar";

describe("Public visual language guard", () => {
  it("PageArchetypes does not inject system copy defaults", () => {
    const source = read("src/components/PageArchetypes.tsx");

    expect(source).not.toContain("Proof strip");
    expect(source).not.toContain("One bounded object summarises the page before the body expands it.");
    expect(source).not.toContain("The hero keeps the hook");
    expect(source).not.toContain("page surface");
    expect(source).not.toContain("language exchange");

    expect(source).toContain("showProofBadge?: boolean");
    expect(source).toContain("statusLabel ? (");
  });

  it("utility and risk datasets avoid system-label vocabulary", () => {
    const utility = read("src/lib/utility-page-data.ts");
    const risk = read("src/lib/risk-page-data.ts");
    const combined = `${utility}\n${risk}`;

    expect(combined).not.toContain("utility surface");
    expect(combined).not.toContain("action rail");
    expect(combined).not.toContain("docs rail");
    expect(combined).not.toContain("Proof strip");
  });
});

