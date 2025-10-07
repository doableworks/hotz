import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full bg-[url('/images/heroimage.jpg')] bg-cover bg-no-repeat text-white">
      <h1 className="font-bold text-5xl">A WORLD OF BUSINESS.</h1>
      <h1 className="text-5xl font-bold mt-2">ONE TRUSTED NAME.</h1>
      <h1 className="text-lg mt-2">
        From finance to hospitality, education to real estate
      </h1>

      <button className="mt-6 px-8 py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-bold">
        EXPLORE OUR BUSINESS
      </button>
    </div>
  );
};

export default Hero;
