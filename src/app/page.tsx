import ParallaxScroll from "@/animations/ParallaxWrapper";
import About from "@/components/About";
import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import { getBusiness } from "@/lib/sanityQueries";

export default async function Home() {
  const businesses = await getBusiness();

  return (
    <div>
      <ParallaxScroll>
        <div className="w-full h-screen flex flex-col">
          <Navbar />
          <Hero />
        </div>
      </ParallaxScroll>
      <About />
      <Business businesses={businesses} />
      <Stats />
      <Leaders />
      <Updates />
      <Footer />
    </div>
  );
}
