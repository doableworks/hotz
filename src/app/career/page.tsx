import Navbar from "@/components/Navbar";
import React from "react";
import { ArrowRight, Atom, ChartSpline, Goal, Grid, Star } from "lucide-react";
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
      icon: <Goal size={40} className="text-[#DB0A0A]" />,
      text: "Be part of a group with 40+ years of trust.",
    },
    {
      id: 2,
      name: "Diverse Opportunities",
      icon: <Grid size={40} className="text-[#DB0A0A]" />,

      text: "Work across industries from finance to real estate.",
    },
    {
      id: 3,
      name: "Growth & Learning",
      icon: <ChartSpline size={40} className="text-[#DB0A0A]" />,

      text: "Access training, mentorship, and leadership programs.",
    },
    {
      id: 4,
      name: "Values-Driven",
      icon: <Atom size={40} className="text-[#DB0A0A]" />,

      text: "Integrity, innovation, and impact at the core.",
    },
  ];

  return (
    <>
      <Navbar />
      <ParallaxScroll>
        <div className="h-screen flex flex-col">
          <div className="px-5 flex-1 h-full w-full justify-center items-center flex flex-col">
            <TransitionVertical>
              <h1 className=" text-center text-4xl lg:text-6xl font-medium bg-gradient-to-r from-[#3B2C89]  to-[#F86565] bg-clip-text  text-transparent">
                Grow With Us.<br></br>Build The Future.
              </h1>
            </TransitionVertical>
            <TransitionVertical>
              <h1 className="text-center lg:w-xl mt-4 lg:mt-8 text-lg">
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
        <div className="w-full bg-[#F3F3F3] py-7 lg:py-20 px-5 md:px-10 flex flex-col gap-3 lg:gap-12 relative z-20">
          <TransitionVertical>
            <h1 className="text-xl lg:text-2xl font-semibold text-center">
              WHY WORK WITH US
            </h1>
          </TransitionVertical>
          <TransitionVertical>
            <div className="hidden md:flex gap-7 px-10">
              {values.map((value) => (
                <div
                  key={value.id}
                  className="flex flex-col justify-between w-1/4 p-5 h-64 bg-white"
                >
                  <div>{value.icon}</div>

                  <TransitionHorizontal>
                    <h1 className="text-xl mb-1">{value.name}</h1>
                    <h1 className="text-[#727272]">{value.text}</h1>
                  </TransitionHorizontal>
                </div>
              ))}
            </div>
          </TransitionVertical>

          {/* 📱 Mobile View */}
          <div className="flex md:hidden overflow-x-auto gap-5 no-scrollbar ">
            {values.map((value) => (
              <div
                key={value.id}
                className="w-[90%] snap-center flex-shrink-0 bg-white p-5 h-64 flex flex-col justify-between"
              >
                <div>{value.icon}</div>

                <div>
                  <h1 className="text-lg mb-1">{value.name}</h1>
                  <h1 className="text-[#727272] text-sm">{value.text}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ParallaxScroll>
      <div className="w-full py-7 lg:py-20 px-5 lg:px-10 flex flex-col gap-7 lg:gap-12 bg-white z-30 relative">
        <h1 className="text-xl lg:text-2xl font-semibold text-center">
          LIFE AT HOTZ GROUP
        </h1>

        <div className="w-full flex lg:flex-row flex-col gap-7">
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/career1.png"
              alt="Career"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/career2.jpg"
              alt="Career"
              className="w-full object-cover"
            />
          </div>
          <div className="lg:w-1/3 w-full">
            <img
              src="/images/career4.jpg"
              alt="Career"
              className="w-full object-cover"
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
        <h1 className="text-2xl lg:text-4xl font-medium text-center">
          Did not find a role that fits?
        </h1>
        <h1 className="text-center text-[#727272] text-base lg:text-lg mt-3">
          You may share your CV on this email ID:
          <a
            href="mailto:careers@hotz.in"
            className="text-black font-medium ml-1"
          >
            careers@hotz.in
          </a>
          ,
          <br className="hidden md:block" /> and we will reach out when there is
          a suitable opportunity.
        </h1>
      </div>
      <Footer />
    </>
  );
};

export default Page;
