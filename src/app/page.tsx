import About from "@/components/About";
import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";

export default function Home() {
  return (
    <div>
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Business />
      <Stats />
      <Leaders />
      <Updates />
      <Footer />
    </div>
  );
}
