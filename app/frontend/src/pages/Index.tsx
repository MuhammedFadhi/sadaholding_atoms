import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Companies from "@/components/Companies";
import Impact from "@/components/Impact";
import WhySada from "@/components/WhySada";
import Leadership from "@/components/Leadership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <VisionMission />
        <Companies />
        <Impact />
        <WhySada />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}