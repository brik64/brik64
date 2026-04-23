import type { Metadata } from "next";

import { Navbar } from "@/components/Navbar";
import { AlternativeHome } from "@/components/vnext/alternative-home";

export const metadata: Metadata = {
  title: "Homepage Alternative",
  description:
    "Alternative homepage evaluation route for the BRIK64 public site. Compare the current homepage against a public-layer-first, platform-second narrative.",
  alternates: {
    canonical: "/home-alt",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function AlternativeHomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <AlternativeHome />
      </main>
    </>
  );
}
