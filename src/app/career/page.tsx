"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";

const Page = () => {
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

  const categories = ["All", "Finance", "Operations", "Account"];
  const [selected, setSelected] = useState("All");

  return (
    <>
      <div className="h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 h-full w-full justify-center items-center flex flex-col">
          <h1 className=" text-center text-6xl font-medium bg-gradient-to-r from-[#3B2C89]  to-[#F86565] bg-clip-text  text-transparent">
            Grow With Us.<br></br>Build The Future.
          </h1>

          <h1 className="text-center w-xl mt-8 text-lg">
            At Hotz Group, we believe our people are the driving force behind
            our success. We empower talent with opportunities, learning, and a
            culture of trust.
          </h1>

          <h1 className="flex text-[#DB0A0A] justify-center items-center gap-4 text-center w-xl mt-8 text-lg">
            View open positions <ArrowRight />
          </h1>
        </div>
      </div>

      <div className="w-full bg-[#F3F3F3] py-20 px-10 flex flex-col gap-12">
        <h1 className="text-3xl text-center font-medium">Why Work With Us</h1>

        <div className="flex gap-7 px-10">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col justify-between w-1/4 p-5 h-96 bg-white"
            >
              <Star size={40} className="text-[#DB0A0A] mb-4" />

              <div>
                <h1 className="text-xl mb-1">{value.name}</h1>
                <h1 className="text-[#727272]">{value.text}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full py-20 px-10 flex flex-col gap-12">
        <h1 className="text-3xl text-center font-medium">Why Work With Us</h1>

        <div className="w-full flex gap-7">
          <div className="w-1/3">
            <img
              src="/images/life1.png"
              alt="Career"
              className=" h-80 object-cover"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/images/life2.png"
              alt="Career"
              className=" h-96 object-cover"
            />
          </div>
          <div className="w-1/3">
            <img
              src="/images/life3.png"
              alt="Career"
              className=" h-80 object-cover"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-20 flex flex-col">
        <h1 className="text-3xl font-medium mb-5">We are hiring</h1>

        <div className="flex items-center gap-4">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelected(category)}
              className={`px-8 py-2 border-2 rounded-full cursor-pointer transition-all duration-200
            ${
              selected === category
                ? "border-[#DB0A0A] text-[#DB0A0A]"
                : "border-gray-300 text-gray-600 hover:border-[#DB0A0A] hover:text-[#DB0A0A]"
            }`}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
