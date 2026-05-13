import { readFileSync } from "node:fs";
import { join } from "node:path";

describe("BRIK64 proof badge", () => {
  const badge = readFileSync(join(process.cwd(), "src/components/BrikProofBadge.tsx"), "utf8");
  const route = readFileSync(join(process.cwd(), "src/app/api/proofs/[proofId]/badge.svg/route.ts"), "utf8");
  const page = readFileSync(join(process.cwd(), "src/app/proofs/[proofId]/page.tsx"), "utf8");
  const designSystem = readFileSync(join(process.cwd(), "src/components/DesignKitSection.tsx"), "utf8");

  it("renders public and private visibility with lock icons", () => {
    expect(badge).toContain("Unlock");
    expect(badge).toContain("Lock");
    expect(badge).toContain("PUBLIC");
    expect(badge).toContain("PRIVATE");
  });

  it("keeps proof badge copy bounded", () => {
    expect(page).toContain("does not certify the full repository");
    expect(page).toContain("Submitted code requires no BRIK64 dependency");
    expect(page).toContain("Logic and bounds");
    expect(page).toContain("Issued by");
    expect(page).toContain("pull_request_url");
    expect(page).not.toMatch(/guaranteed correct|fully certified PR|zero bugs|security certified/i);
  });

  it("exposes a clickable svg badge endpoint", () => {
    expect(route).toContain("image/svg+xml");
    expect(route).toContain("badge.svg");
    expect(route).toContain("UNVERIFIABLE");
  });

  it("documents the required badge gallery states", () => {
    expect(designSystem).toContain('artifactType="PCD" status="VALID" visibility="PUBLIC"');
    expect(designSystem).toContain('artifactType="APP" status="VALID" visibility="PRIVATE"');
    expect(designSystem).toContain('artifactType="POLYMER" status="SUPERSEDED" visibility="PUBLIC"');
    expect(designSystem).toContain('artifactType="SYSTEM" status="REVOKED" visibility="PRIVATE"');
    expect(designSystem).toContain('artifactType="PROOF" status="UNVERIFIABLE" visibility="PUBLIC"');
  });
});
