import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { VNextHome } from "@/components/vnext/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <VNextHome />
      </main>
      <Footer />
    </>
  );
}
