import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-[url('/images/heroMobile.png')] lg:bg-[url('/images/heroimage.jpg')] bg-cover bg-no-repeat text-white">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="text-center z-10">
        <h1 className=" font-bold text-4xl lg:text-5xl">
          A WORLD OF<br className="md:hidden"></br> BUSINESS.
        </h1>
        <h1 className="text-4xl lg:text-5xl font-bold mt-2">
          ONE TRUSTED<br className="md:hidden"></br> NAME.
        </h1>
        <h1 className="text-base lg:text-lg mt-2">
          From finance to hospitality,<br className="md:hidden"></br> education
          to real estate
        </h1>

        <button className="mt-6 px-8 py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-bold">
          EXPLORE OUR BUSINESS
        </button>
      </div>
    </div>
  );
};

export default Hero;
