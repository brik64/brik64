import { Navbar } from "@/components/Navbar";
import { DesignKitSection } from "@/components/DesignKitSection";
import { Footer } from "@/components/Footer";

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <div className="mx-auto max-w-7xl border-x border-border bg-background">
        <DesignKitSection />
      </div>

      </main>
      <div className="relative z-10">

        <Footer />

      </div>
    </>
  );
}
