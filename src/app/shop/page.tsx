import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopSection } from "@/components/ShopSection";
import { EvidenceSurface, PageSectionHeader } from "@/components/PageArtifacts";

export const metadata: Metadata = {
  title: "Merch — BRIK64",
  description: "BRIK64 merch roadmap, launch status, and how the storefront will be introduced.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <ShopSection />

          <section className="border-t border-border px-6 py-16 lg:px-16">
            <PageSectionHeader
              eyebrow="Merch Launch Plan"
              title="The storefront stays simple until the product layer is ready."
              description="This route explains launch intent, scope, and what will appear here as physical BRIK64 merchandise is released."
            />

            <div className="mx-auto mt-10 max-w-5xl">
              <EvidenceSurface
                eyebrow="Store Readiness"
                title="Why the shop is intentionally staged"
                description="The goal is to provide an explicit launch status: what is coming, what is live, and what remains in preparation."
                items={[
                  {
                    label: "Launch scope",
                    body: "The first release will focus on a small set of official BRIK64 items instead of a broad catalog with weak brand control.",
                  },
                  {
                    label: "Fulfilment readiness",
                    body: "Store activation depends on product photography, fulfillment validation, and a support path that does not degrade the rest of the site.",
                  },
                  {
                    label: "Brand consistency",
                    body: "Merch will use the same visual system as the public site with clear metadata and no filler catalog placeholders.",
                  },
                ]}
                footer="This route stays useful by keeping launch scope explicit and linking brand questions to real contact paths."
              />
            </div>
          </section>
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
