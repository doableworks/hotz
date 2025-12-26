import TransitionVertical from "@/animations/TransitionVertical";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-[url('/images/Homepage.jpg')] bg-cover bg-no-repeat text-white">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="text-center z-30">
        <TransitionVertical>
          <h1 className=" font-bold text-4xl lg:text-5xl">
            Setting New Standards<br className="md:hidden"></br> Everyday
          </h1>

          {/* <Link href="/business">
            <button className="mt-6 px-8 py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-bold cursor-pointer">
              EXPLORE OUR BUSINESS
            </button>
          </Link> */}
        </TransitionVertical>
      </div>
    </div>
  );
};

export default Hero;
