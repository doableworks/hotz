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
      text: "Be part of a trusted group with a legacy spanning more than a century.",
    },
    {
      id: 2,
      name: "Diverse Opportunities",
      icon: <Grid size={40} className="text-[#DB0A0A]" />,

      text: "Work across industries including finance, real estate, art, education, hospitality, and manufacturing.",
    },
    {
      id: 3,
      name: "Growth & Learning",
      icon: <ChartSpline size={40} className="text-[#DB0A0A]" />,

      text: "Gain exposure, mentorship, and opportunities to develop your skills.",
    },
    {
      id: 4,
      name: "Values-Driven",
      icon: <Atom size={40} className="text-[#DB0A0A]" />,

      text: "Grow in a culture guided by integrity, innovation, excellence, and impact.",
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
                Grow With Us.<br></br>Build What&apos;s Next
              </h1>
            </TransitionVertical>
            <TransitionVertical>
              <h1 className="text-center lg:w-xl mt-4 lg:mt-8 text-lg">
                At Hotz Group, we believe our people drive our success. We offer
                a workplace where talent is supported, ideas are valued, and
                individuals are empowered to learn, grow, and make a meaningful
                impact.
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
                  className="flex flex-col justify-start w-1/4 p-7 bg-white"
                >
                  <div className="mb-7">{value.icon}</div>

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
              src="/images/career5.jpg"
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
            className="h-32 lg:h-40 left-20 lg:left-28 absolute opacity-70"
          />
        </div>

        <div className="lg:mt-0 mt-16 flex flex-col justify-center text-white items-center gap-6">
          <div>
            <div className="mb-2 italic font-extralight">
              Voices of Our People
            </div>

            <div className="text-2xl lg:text-3xl">
              &ldquo;Hotz Group has given me the opportunity to grow
              <br className="hidden lg:flex"></br>with purpose, work across
              meaningful projects, values<br className="hidden lg:flex"></br>and
              be part of a culture built on trust and impact.&rdquo;
            </div>
          </div>
        </div>
      </div>
      <div className="px-5 w-full flex justify-center mt-24 mb-10 py-7">
        <div className="w-full max-w-3xl bg-[#F3F3F3] rounded-2xl px-6 py-10 lg:px-12 lg:py-14 flex flex-col items-center text-center">
          <h1 className="text-2xl lg:text-4xl font-medium">
            Don&apos;t see the right role?
          </h1>
          <h1 className="text-center text-[#727272] text-base lg:text-lg mt-3">
            Share your CV with us at
            <a
              href="mailto:careers@hotz.in"
              className="text-black font-medium ml-1"
            >
              careers@hotz.in
            </a>
            ,
            <br className="hidden md:block" /> and we will reach out when a
            suitable opportunity becomes available.
          </h1>
          <a
            href="mailto:careers@hotz.in"
            className="mt-8 flex items-center gap-2 px-8 py-4 rounded-full bg-[#DB0A0A] text-white text-sm font-medium hover:bg-opacity-90 transition"
          >
            Share Your CV <ArrowRight size={16} />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
