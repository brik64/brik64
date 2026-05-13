import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MonomerCubeMap } from "@/components/vnext/monomer-cube-map";

export const metadata = {
  title: "Monomer Structure — BRIK64",
  description:
    "Standalone visual structure for the 64 bounded core monomers and 64 contract-bounded extension monomers.",
};

export default function MonomerStructurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <MonomerCubeMap />
      </main>
      <Footer />
    </>
  );
}
