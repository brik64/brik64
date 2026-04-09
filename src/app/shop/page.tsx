import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShopSection } from "@/components/ShopSection";

export const metadata: Metadata = {
  title: "Merch",
  description: "BRIK64 merch coming soon page.",
};

export default function ShopPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
          <ShopSection />
        </div>
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
