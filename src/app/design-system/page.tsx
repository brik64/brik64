import { Navbar } from "@/components/Navbar";
import { DesignKitSection } from "@/components/DesignKitSection";
import { Footer } from "@/components/Footer";

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main>
        <DesignKitSection />
      </main>
      <Footer />
    </>
  );
}
