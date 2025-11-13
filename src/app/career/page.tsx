import Navbar from "@/components/Navbar";
import React from "react";
import { ArrowRight, Star } from "lucide-react";
import Footer from "@/components/Footer";
import TransitionVertical from "@/animations/TransitionVertical";
import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import Link from "next/link";
import { getCareersList } from "@/lib/sanityQueries";
import { CareerListItem } from "@/lib/types/careers";
import CareerFilters from "@/components/pagespecific/career/CareerFilters";

const Page = async () => {
  const careers = await getCareersList();

  // Get unique departments for filtering
  const departments =
    careers && careers.length > 0
      ? Array.from(new Set(careers.map((career) => career.department)))
      : [];
  const categories = ["All", ...departments];
  const values = [
    {
      id: 1,
      name: "Legacy & Stability",
      text: "Be part of a group with 40+ years of trust.",
    },
    {
      id: 2,
      name: "Diverse Opportunities",
      text: "Work across industries from finance to real estate.",
    },
    {
      id: 3,
      name: "Growth & Learning",
      text: "Access training, mentorship, and leadership programs.",
    },
    {
      id: 4,
      name: "Values-Driven",
      text: "Integrity, innovation, and impact at the core.",
    },
  ];

  return (
    <>
      <ParallaxScroll>
        <div className="h-screen flex flex-col">
          <Navbar />

          <div className="px-5 flex-1 h-full w-full justify-center items-center flex flex-col">
            <TransitionVertical>
              <h1 className=" text-center text-5xl lg:text-6xl font-medium bg-gradient-to-r from-[#3B2C89]  to-[#F86565] bg-clip-text  text-transparent">
                Grow With Us.<br></br>Build The Future.
              </h1>
            </TransitionVertical>
            <TransitionVertical>
              <h1 className="text-center lg:w-xl mt-8 text-lg">
                At Hotz Group, we believe our people are the driving force
                behind our success. We empower talent with opportunities,
                learning, and a culture of trust.
              </h1>
            </TransitionVertical>

            {/* <TransitionVertical>
              <h1 className="flex text-[#DB0A0A] justify-center items-center gap-4 text-center lg:w-xl mt-8 text-lg">
                View open positions <ArrowRight />
              </h1>
            </TransitionVertical> */}
          </div>
        </div>
      </ParallaxScroll>
      <ParallaxScroll>
        <div className="w-full bg-[#F3F3F3] py-7 lg:py-20 px-5 md:px-10 flex flex-col gap-5 lg:gap-12 relative z-20">
          <TransitionVertical>
            <h1 className="text-3xl text-center font-medium">
              Why Work With Us
            </h1>
          </TransitionVertical>
          <TransitionVertical>
            <div className="hidden md:flex gap-7 px-10">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="flex flex-col justify-between w-1/4 p-5 h-96 bg-white"
                >
                  <Star size={40} className="text-[#DB0A0A] mb-4" />

                  <TransitionHorizontal>
                    <h1 className="text-xl mb-1">{value.name}</h1>
                    <h1 className="text-[#727272]">{value.text}</h1>
                  </TransitionHorizontal>
                </div>
              ))}
            </div>
          </TransitionVertical>

          {/* 📱 Mobile View */}
          <div className="flex md:hidden overflow-x-auto gap-5 px-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
            {values.map((value) => (
              <div
                key={value.id}
                className="w-[90%] snap-center flex-shrink-0 bg-white p-5 h-96 flex flex-col justify-between"
              >
                <Star size={36} className="text-[#DB0A0A] mb-3" />

                <div>
                  <h1 className="text-lg mb-1">{value.name}</h1>
                  <h1 className="text-[#727272] text-sm">{value.text}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxScroll>
      <div className="w-full py-5 lg:py-20 px-5 lg:px-10 flex flex-col gap-12 bg-white z-30 relative">
        <h1 className="text-3xl text-center font-medium">Life at Hotz Group</h1>

        <div className="w-full flex lg:flex-row flex-col gap-7">
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/life1.png"
              alt="Career"
              className=" h-80 object-cover"
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/life2.png"
              alt="Career"
              className=" h-96 object-cover"
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/life3.png"
              alt="Career"
              className=" h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <CareerFilters careers={careers} categories={categories} />

      <div className="w-full bg-[#B9041A] h-96 lg:mt-10 mb-10 px-5 flex justify-center">
        <div className="flex justify-between">
          <img
            src="/images/iconWhite.png"
            alt="Career"
            className="h-32 lg:h-48 left-12 lg:left-28 absolute"
          />
        </div>

        <div className="lg:mt-0 mt-16 flex flex-col justify-center text-white items-center gap-6">
          <div>
            <div className="mb-5 italic font-extralight">
              Voices of Our People
            </div>

            <div className="text-2xl lg:text-3xl">
              At Hotz Group, I have found not just a
              <br className="hidden lg:flex"></br>career, but a community that
              values<br className="hidden lg:flex"></br>growth and impact.”
            </div>
          </div>
        </div>
      </div>
      <div className=" px-5 w-full flex flex-col items-center justify-center mt-24 py-7">
        <h1 className="text-4xl font-medium text-center">
          Did not find a role that fits?
        </h1>
        <h1 className="text-center mt-3 text-[#727272]">
          Share your resume with us, and we will connect<br></br>when
          opportunities arise.
        </h1>

        <div className="w-full flex justify-center ">
          <div className="flex justify-center mt-10 px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm">
            SUBMIT YOUR RESUME
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
