import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/pagespecific/about-us/Timeline";
import VideoSection from "@/components/pagespecific/about-us/VideoSection";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import { getStats, getTeamLeaders } from "@/lib/sanityQueries";
import React from "react";

async function page() {
  const leaders = await getTeamLeaders();
  const values = [
    {
      id: 1,
      name: "Integrity",
      text: "Doing business with trust and transparency",
      image: "/images/values1.png",
    },
    {
      id: 2,
      name: "Excellence",
      text: "Striving for the highest standards",
      image: "/images/values2.png",
    },
    {
      id: 3,
      name: "Innovation",
      text: "Adapting to shape the future",
      image: "/images/values3.png",
    },
    {
      id: 4,
      name: "Impact",
      text: "Creating value for people & communities",
      image: "/images/values4.png",
    },
  ];

  const stats = await getStats();

  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="w-full h-16"></div>
        <VideoSection />
      </div>
      <TransitionVertical>
        <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 px-5 lg:px-10 pt-7 lg:pt-16 relative z-30 bg-white">
          <div className="w-full lg:w-1/2 text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
            A Legacy of Trust.<br></br> A Vision for<br></br>Tomorrow.
          </div>
          <div className="w-full lg:w-1/2">
            The Hotz Group&apos;s journey began in the early 1900&apos;. Founded
            by Swiss nationals who introduced world-class hospitality to India
            with hotels and resorts in Shimla, Delhi, Agra, Jaipur and Kasauli.
            Over time, the Group evolved from its European inspired roots into a
            diversified Indian enterprise, driven by the belief that progress
            must be built on trust, integrity, and innovation <br></br>
            <br></br>Since then, Hotz has expanded its footprint across multiple
            sectors - real estate and warehousing, financial services,
            manufacturing of steel, air conditioning and refrigeration, textiles
            and industrial gases, hospitality including food service retail, art
            and education, each venture reflecting a commitment to quality and
            lasting value. Guided by a vision for tomorrow, we continue to build
            with purpose, shaping experiences, environments, and opportunities
            that endure across generations.
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div
          id="story"
          className="scroll-mt-28 flex lg:flex-row flex-col my-7 lg:my-20 lg:h-96 relative z-30 bg-white"
        >
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/about1.png"
              alt="About Us"
              className="w-full object-cover h-96"
            />
          </div>

          <div className=" lg:w-1/2 w-full min-h-96 px-7 py-5 text-white flex flex-col justify-center bg-[#BC1F1F]">
            <TransitionHorizontal>
              <h1 className="text-xl">OUR STORY</h1>
              <h1 className="text-white/60 mt-3">
                Incorporated under the Companies Act as Hotz Hotels Private
                Limited in 1952, the company began with a focus on hospitality
                before diversifying into portfolio investments and financial
                services, manufacturing of various products, food service
                retail, art, education and real estate development. This spirit
                of diversification and reinvention has defined Hotz through
                every era, enabling the Group to adapt, innovate, and lead
                across industries. <br></br>
                <br></br> What drives us is a deep respect for people,
                partnerships, and performance. From creating advanced
                warehousing and industrial infrastructure to supporting
                education and the arts, Hotz continues to balance business
                excellence with social responsibility. Today, we stand as a
                future-ready enterprise—rooted in legacy, powered by innovation,
                and united by a purpose to create meaningful impact.
              </h1>
            </TransitionHorizontal>
          </div>
        </div>
      </TransitionVertical>

      <Timeline />

      <TransitionVertical>
        <div
          id="vision"
          className="scroll-mt-32 text-center text-xl font-semibold mt-12 mb-7"
        >
          CORE VALUES
        </div>

        {/* 💻 Desktop View */}
        <div className="hidden md:flex px-10 gap-7">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col justify-between w-1/4 p-5 h-64 border border-black/20"
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
        <div className="scroll-mt-20 flex md:hidden overflow-x-auto gap-5 px-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {values.map((value) => (
            <div
              key={value.id}
              className="w-[80%] snap-center flex-shrink-0 border border-black/20 p-5 h-64 flex flex-col justify-between"
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

      <img
        src="/images/about2.png"
        alt="Footer Image"
        className="w-full h-96 object-cover mt-10"
      />

      <div className="my-5 relative bg-white z-30 pt-5 lg:pt-16">
        <div className="text-center text-xl font-semibold mb-2">
          Our Commitment Beyond Business
        </div>

        <div className="px-5 flex justify-center w-full text-center">
          <div className="max-w-3xl text-[#727272]">
            At Hotz Group, we believe education is the foundation of progress.
            Our initiatives focus on providing access to quality learning,
            scholarships, and skill development programs that empower students
            to achieve their full potential.
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
                Scholarships for <br /> underprivileged students
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img
                src="/images/monitor.png"
                alt="Book Check"
                className="w-11"
              />

              <h1>
                Support for schools and <br></br>digital learning infrastructure
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src="/images/person.png" alt="Book Check" className="w-11" />

              <h1>
                Vocational training & <br></br>skill-building workshops.
              </h1>
            </div>
          </div>
        </TransitionVertical>
      </div>

      <div
        id="chairmans-message"
        className="scroll-mt-20 mt-16 lg:mt-24 flex lg:flex-row flex-col justify-between items-center px-10"
      >
        <div className="w-full lg:w-2/5 flex flex-col justify-start items-start">
          <img src="/images/icon.png" alt="About Us" className="w-20 lg:w-24" />
          <TransitionVertical>
            <h1 className="text-2xl font-semibold mt-5">
              At Hotz Group, our foundation has always been the trust that our
              stakeholders have imposed on us. Over the years, we have grown not
              just in business, but in relationship-building legacies that stand
              the test of time and setting new standards, everyday.
            </h1>
          </TransitionVertical>

          <TransitionVertical>
            <h1 className=" text-[#727272] mt-5">- Chairman</h1>
          </TransitionVertical>
        </div>

        <div className="relative w-full lg:w-1/2 flex lg:justify-center lg:items-center py-10">
          <TransitionVertical>
            <img
              src="/images/aboutvector.png"
              alt="Decorative vector"
              className="absolute top-0 right-0 w-3/4 lg:w-1/2 z-10"
            />
            <img
              src="/images/chairman.png"
              alt="Chairman"
              className="relative lg:ml-24 w-full lg:w-[65%] z-20"
            />
          </TransitionVertical>
        </div>
      </div>

      <div>
        <Leaders leaders={leaders} />
      </div>

      {/* <Stats statsData={stats} /> */}

      {/* <div>
        <Updates />
      </div> */}
      <Footer />
    </>
  );
}

export default page;
