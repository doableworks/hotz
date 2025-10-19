import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/pagespecific/about-us/VideoSection";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import React from "react";

async function page(){
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
  
  return (
    <>
        <div className="h-fullflex flex-col">
          <Navbar />
          <VideoSection cloudfrontUrl="d299alzxgdp6.cloudfront.net" />
        </div>
      <TransitionVertical>
        <div className="flex gap-12 px-10 pt-24 relative z-30 bg-white">
          <div className="w-1/2 text-5xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
            A Legacy of Trust.<br></br> A Vision for<br></br>Tomorrow.
          </div>
          <div>
            Since 1900, Hotz Group has been shaping industries, creating
            opportunities, and building experiences that last generations.
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="flex my-24 h-96 relative z-30 bg-white">
          <div className="w-1/2 ">
            <img
              src="/images/about1.png"
              alt="About Us"
              className="w-full object-cover h-96"
            />
          </div>

          <div className="w-1/2 h-96 px-7 text-white flex flex-col justify-center bg-[#BC1F1F]">
            <TransitionHorizontal>
              <h1 className="text-lg">OUR STORY</h1>
              <h1 className="text-white/60 mt-3">
                Founded with a vision to redefine excellence, Hotz Group has
                evolved into a multi-sector enterprise spanning financial
                services, real estate, hospitality, education, art, and
                warehousing. Rooted in trust and guided by innovation, our
                journey is built on creating value that impacts lives and
                communities.
              </h1>
            </TransitionHorizontal>
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="text-center text-xl font-semibold mb-7">
          CORE VALUES
        </div>
        <div className="flex px-10">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col justify-between w-1/4 p-5 h-96 border border-black-20"
            >
              <img
                src={value.image}
                alt="Integrity"
                className="w-16 object-cover"
              />

              <TransitionHorizontal>
                <h1 className="text-xl mb-1">{value.name}</h1>
                <h1 className="text-[#727272]">{value.text}</h1>
              </TransitionHorizontal>
            </div>
          ))}
        </div>
      </TransitionVertical>

      <div className="mt-24 flex justify-between items-center px-10">
        <div className="w-2/5 flex flex-col justify-start items-start">

            <img src="/images/icon.png" alt="About Us" className="w-24" />
          <TransitionVertical>
            <h1 className="text-2xl font-semibold mt-5">
              At Hotz Group, our foundation has always been trust. Over the
              decades, we have grown not just in Business, but in
              relationships—building legacies that stand the test of time.
            </h1>
          </TransitionVertical>

          <TransitionVertical>
          <h1 className=" text-[#727272] mt-5">- Chairman</h1>
          </TransitionVertical>
        </div>

        <div className="relative w-1/2 flex justify-center items-center py-10">
          <TransitionVertical>
            <img
              src="/images/aboutvector.png"
              alt="Decorative vector"
              className="absolute top-0 right-0 w-1/2 z-10"
            />
            <img
              src="/images/chairman.png"
              alt="Chairman"
              className="relative ml-24 w-1/2 z-20"
            />
          </TransitionVertical>
        </div>
      </div>

      <ParallaxScroll>
        <Stats />
      </ParallaxScroll>

      <div className="w-full relative z-20 bg-white">
        <ParallaxScroll>
        <img
          src="/images/about2.png"
          alt="Footer Image"
          className="w-full h-96 object-cover"
        />
        </ParallaxScroll>
      </div>

      <div className="my-16 relative bg-white z-30 pt-16">
        <div className="text-center text-xl font-semibold mb-2">
          Our Commitment Beyond Business
        </div>

        <div className="flex justify-center w-full text-center">
          <div className="max-w-3xl text-[#727272]">
            At Hotz Group, we believe education is the foundation of progress.
            Our initiatives focus on providing access to quality learning,
            scholarships, and skill development programs that empower students
            to achieve their full potential.
          </div>
        </div>
          <TransitionVertical>
        <div className="flex justify-center mt-16 gap-24">
          <div className="flex flex-col justify-center items-center text-center gap-5">
            <img
              src="/images/book-check.png"
              alt="Book Check"
              className="w-11"
            />

            <h1>
              Scholarships for<br></br>underprivileged students
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-5">
            <img src="/images/monitor.png" alt="Book Check" className="w-11" />

            <h1>
              Support for schools and<br></br>digital learning infrastructure
            </h1>
          </div>

          <div className="flex flex-col justify-center items-center text-center gap-5">
            <img src="/images/person.png" alt="Book Check" className="w-11" />

            <h1>
              Vocational training &<br></br>skill-building workshops
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
};

export default page;
