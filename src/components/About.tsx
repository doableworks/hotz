import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <ParallaxScroll>
      <div
        className="flex lg:flex-row flex-col-reverse lg:gap-32 w-full items-center  py-10 px-5 relative z-30"
        style={{
          background:
            "linear-gradient(107.45deg, #DB0A0A 21.24%, #FBB1B1 95.59%)",
        }}
      >
        <img
          src="/images/VectorH.png"
          alt="About Image"
          className="hidden lg:flex right-0 h-72 lg:h-96"
        />
        <div>
          <TransitionVertical>
            <h1 className="text-white text-2xl lg:text-3xl font-light w-4/5">
              Since 1900, Hotz Group has been at the heart of growth and
              transformation delivering trust, innovation, and impact across
              India and beyond.
            </h1>
          </TransitionVertical>
          <Link href="/about-us">
            <button className="mt-12 px-8 py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-semibold text-sm cursor-pointer">
              <TransitionHorizontal>DISCOVER OUR STORY</TransitionHorizontal>
            </button>
          </Link>
        </div>
      </div>
    </ParallaxScroll>
  );
};

export default About;
