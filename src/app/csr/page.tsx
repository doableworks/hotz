import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/pagespecific/about-us/Timeline";
import VideoSection from "@/components/pagespecific/about-us/VideoSection";
import CurvedTimeline from "@/components/pagespecific/csr/Timeline2";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import { getStats } from "@/lib/sanityQueries";
import Image from "next/image";
import React from "react";

async function page() {
  const values = [
    {
      id: 1,
      name: "Education",
      text: "Empowering children through inclusive learning.",
      image: "/images/values1.png",
    },
    {
      id: 2,
      name: "Empathy",
      text: "Reaching communities with compassion and care.",
      image: "/images/values2.png",
    },
    {
      id: 3,
      name: "Empowerment",
      text: "Supporting arts, skills, and education for a stronger tomorrow.",
      image: "/images/values3.png",
    },
    {
      id: 4,
      name: "Equality",
      text: "Ensuring opportunities for all, beyond boundaries.",
      image: "/images/values4.png",
    },
  ];

  const stats: { stat: string; title: string }[] = [
    {
      stat: "80",
      title:
        "Years of social service legacy through Servants of the People Society",
    },
    {
      stat: "1000",
      title: "Students benefiting through inclusive education programs",
    },
    { stat: "50", title: "Vocational and skill-based initiatives" },
    { stat: "20", title: "Cultural collaborations and art programs" },
  ];

  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="relative w-full h-[65vh] z-40">
          <Image
            src="/images/csrBanner.jpg"
            alt="About Us"
            className="object-cover w-full h-full"
            fill
          />
        </div>
      </div>
      <TransitionVertical>
        <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 px-5 lg:px-10 pt-24 relative z-30 bg-white">
          <div className="w-full lg:w-1/2 text-5xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
            A Legacy of Care.<br></br> A Vision for<br></br>Change.
          </div>
          <div className="w-full lg:w-1/2">
            Since its inception, Hotz Group has believed that true progress is
            measured not only by business milestones but by the lives it
            touches. Through our CSR initiatives, we continue to create
            opportunities, empower communities, and shape a more inclusive
            tomorrow.
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="flex lg:flex-row flex-col my-24 lg:h-96 relative z-30 bg-white">
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/csrOverview.jpg"
              alt="About Us"
              className="w-full object-cover h-96"
            />
          </div>

          <div className="lg:w-1/2 w-full min-h-96 px-7 py-5 text-white flex flex-col justify-center bg-[#BC1F1F]">
            <TransitionHorizontal>
              <h1 className="text-lg">OUR COMMITMENT TO SOCIAL IMPACT</h1>
              <h1 className="text-white/60 mt-3">
                Guided by the philosophy of giving back, Hotz Group has long
                supported initiatives that promote education, inclusion, and
                cultural development. The Saat Saath Arts Foundation supports
                international exchange between India and the rest of the world
                through the visual arts and education. The Foundation is funded
                by Aparajita Jain as a non-profit initiative and was founded in
                2010.
                <br></br>
                <br></br>
                Our association with the Servants of the People Society, founded
                in 1921 by Lala Lajpat Rai and inaugurated by Mahatma Gandhi,
                reflects our deep commitment to nation-building. Through this
                collaboration, we contribute to Balvantray Mehta Vidya Bhawan
                Anguridevi Shersingh Memorial Academy, an integrated school for
                children with and without disabilities, providing them equal
                opportunities to learn, grow, and thrive.
              </h1>
            </TransitionHorizontal>
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="text-center text-xl font-semibold mb-7">
          CORE VALUES
        </div>

        {/* 💻 Desktop View */}
        <div className="hidden md:flex px-10 gap-7">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col justify-between w-1/4 p-5 h-96 border border-black/20"
            >
              <img
                src={value.image}
                alt={value.name}
                className="w-16 object-cover"
              />
              <TransitionHorizontal>
                <h1 className="text-xl mb-1">{value.name}</h1>
                <h1 className="text-[#727272]">{value.text}</h1>
              </TransitionHorizontal>
            </div>
          ))}
        </div>

        {/* 📱 Mobile View */}
        <div className="flex md:hidden overflow-x-auto gap-5 px-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {values.map((value) => (
            <div
              key={value.id}
              className="min-w-[70%] snap-center flex-shrink-0 border border-black/20 p-5 h-80 flex flex-col justify-between"
            >
              <img
                src={value.image}
                alt={value.name}
                className="w-16 object-cover"
              />
              <TransitionHorizontal>
                <h1 className="text-lg mb-1">{value.name}</h1>
                <h1 className="text-[#727272] text-sm">{value.text}</h1>
              </TransitionHorizontal>
            </div>
          ))}
        </div>
      </TransitionVertical>

      <Stats statsData={stats} />

      <CurvedTimeline />

      <img
        src="/images/about2.png"
        alt="Footer Image"
        className="w-full h-96 object-cover"
      />

      <div className="my-5 lg:my-16 relative bg-white z-30 pt-5 lg:pt-16">
        <div className="text-center text-xl font-semibold mb-2">
          Our Commitment Beyond Business
        </div>

        <div className="px-5 flex justify-center w-full text-center">
          <div className="max-w-3xl text-[#727272]">
            At Hotz Group, education and empowerment remain at the heart of our
            CSR philosophy. We believe in creating platforms that nurture
            potential, build confidence, and prepare individuals for a brighter,
            self-reliant future.
          </div>
        </div>
        <TransitionVertical>
          <div className="flex lg:flex-row flex-col justify-center mt-16 gap-7 lg:gap-24">
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img
                src="/images/book-check.png"
                alt="Book Check"
                className="w-11"
              />

              <h1>
                Supporting deserving students <br /> through need-based
                financial aid
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img
                src="/images/monitor.png"
                alt="Book Check"
                className="w-11"
              />

              <h1>
                Strengthening educational systems<br></br>with better facilities
                and tools.
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src="/images/person.png" alt="Book Check" className="w-11" />

              <h1>
                Equipping youth and women with practical <br></br>skills for
                sustainable livelihoods.
              </h1>
            </div>
          </div>
        </TransitionVertical>
      </div>
      <div>
        <Updates />
      </div>
      <Footer />
    </>
  );
}

export default page;
