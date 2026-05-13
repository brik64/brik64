import { NextResponse } from "next/server";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    name: "BRIK64",
    purpose: "bounded software verification and evidence bundles for human and agentic workflows",
    publicBaseUrl: "https://brik64.com",
    agentPages: {
      forAgents: "https://brik64.com/for-agents",
      agenticCommerce: "https://brik64.com/agentic-commerce",
      commercialUse: "https://brik64.com/commercial-use",
      pricing: "https://brik64.com/pricing",
    },
    protocols: ["x402", "stripe_checkout", "stripe_mpp_spt"],
    claimBoundary: "discovery_and_commerce_metadata_only_not_certification_claim",
  });
}
