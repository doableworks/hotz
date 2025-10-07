import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import React from "react";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 bg-gray-400"></div>
      </div>

      <div className="flex gap-12 px-10 pt-24">
        <div className="w-1/2 text-4xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
          A Legacy of Trust.<br></br> A Vision for<br></br>Tomorrow.
        </div>
        <div>
          Since 1900, Hotz Group has been shaping industries, creating
          opportunities, and building experiences that last generations.
        </div>
      </div>

      <div className="flex py-24 h-96">
        <div className="w-1/2 ">
          <img
            src="/images/about1.png"
            alt="About Us"
            className="w-full object-cover h-96"
          />
        </div>

        <div className="w-1/2 h-96 px-7 text-white flex flex-col justify-center bg-[#BC1F1F]">
          <h1 className="text-lg">OUR STORY</h1>
          <h1 className="text-white/60 mt-3">
            Founded with a vision to redefine excellence, Hotz Group has evolved
            into a multi-sector enterprise spanning financial services, real
            estate, hospitality, education, art, and warehousing. Rooted in
            trust and guided by innovation, our journey is built on creating
            value that impacts lives and communities.
          </h1>
        </div>
      </div>

      <div className="pt-24">
        <Stats />
      </div>
    </>
  );
};

export default page;
