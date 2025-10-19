import ParallaxScroll from "@/animations/ParallaxWrapper";
import About from "@/components/About";
import Business from "@/components/Business";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import { getBusiness, getStats, getTeamLeaders } from "@/lib/sanityQueries";

export default async function Home() {
  const businesses = await getBusiness();
  const stats = await getStats();
  const leaders = await getTeamLeaders();

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
      <Stats statsData={stats} />
      <Leaders leaders={leaders} />
      <Updates />
      <Footer />
    </div>
  );
}
