type BadgeProof = {
  artifactType: "PCD" | "POLYMER" | "APP" | "SYSTEM" | "PROOF";
  status: "VALID" | "SUPERSEDED" | "REVOKED" | "EXPIRED" | "UNVERIFIABLE";
  visibility: "PUBLIC" | "PRIVATE";
};

const badgeRoutePath = "/api/proofs/[proofId]/badge.svg";

const fixtureProofs: Record<string, BadgeProof> = {
  brik_proof_public_pcd_valid_01: {
    artifactType: "PCD",
    status: "VALID",
    visibility: "PUBLIC",
  },
  brik_proof_private_app_valid_01: {
    artifactType: "APP",
    status: "VALID",
    visibility: "PRIVATE",
  },
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(fixtureProofs).map((proofId) => ({ proofId }));
}

function renderBadge(proof: BadgeProof): string {
  const left = `BRIK64 · ${proof.artifactType} · ${proof.status}`;
  const right = proof.visibility;
  const width = Math.max(280, (left.length + right.length) * 7 + 56);
  const statusColor = proof.status === "VALID" ? "#00e5ff" : proof.status === "REVOKED" ? "#ff5d73" : "#f59e0b";
  const visibilityColor = proof.visibility === "PUBLIC" ? "#00e5ff" : "#98a3b3";
  const lockPath = proof.visibility === "PUBLIC"
    ? `<path d="M${width - 104} 13v-2a4 4 0 0 1 7.5-2" fill="none" stroke="${visibilityColor}" stroke-width="1.6" stroke-linecap="round"/>`
    : `<path d="M${width - 104} 13v-2a4 4 0 0 1 8 0v2" fill="none" stroke="${visibilityColor}" stroke-width="1.6" stroke-linecap="round"/>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="28" role="img" aria-label="${left} ${right}">
  <title>${left} ${right}</title>
  <rect x="0.5" y="0.5" width="${width - 1}" height="27" rx="8" fill="#0a0d12" stroke="#263241"/>
  <rect x="${width - 116}" y="0.5" width="115.5" height="27" rx="8" fill="${visibilityColor}" opacity="0.14"/>
  ${lockPath}
  <rect x="${width - 106}" y="13" width="10" height="7" rx="1.5" fill="none" stroke="${visibilityColor}" stroke-width="1.4"/>
  <text x="12" y="18" fill="${statusColor}" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="700">${left}</text>
  <text x="${width - 88}" y="18" fill="#d7dee8" font-family="Inter,Arial,sans-serif" font-size="11" font-weight="700">${right}</text>
</svg>`;
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ proofId: string }> },
) {
  const { proofId } = await params;
  const proof = fixtureProofs[proofId] ?? {
    artifactType: "PROOF",
    status: "UNVERIFIABLE",
    visibility: "PUBLIC",
  };

  return new Response(renderBadge(proof), {
    status: fixtureProofs[proofId] ? 200 : 404,
    headers: {
      "content-type": "image/svg+xml; charset=utf-8",
      "x-brik64-badge-route": badgeRoutePath,
      "cache-control": "public, max-age=60",
    },
  });
}
