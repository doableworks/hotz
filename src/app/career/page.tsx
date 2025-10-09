"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { ArrowRight, Star } from "lucide-react";
import Footer from "@/components/Footer";

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

  const jobs = [
    {
      id: 1,
      title: "Regional Head",
      department: "Operations",
      type: "Full Time",
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Account",
      type: "Full Time",
    },
    {
      id: 3,
      title: "Junior Accountant",
      department: "Finance",
      type: "Full time",
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

        <div className="flex flex-col gap-3 py-3 mt-5">
          {jobs.map((job) => (
            <div key={job.id}>
              <div
                key={job.id}
                className="flex justify-between items-center my-5 pb-3"
              >
                <h1 className="text-2xl font-medium w-1/4">{job.title}</h1>
                <h1 className="text-[#727272] text-sm w-1/4 flex justify-center">
                  {job.department}
                </h1>
                <h1 className="text-[#727272] text-sm w-1/4 flex justify-center">
                  {job.type}
                </h1>
                <h1 className="flex gap-3 justify-end items-center text-[#DB0A0A] cursor-pointer hover:underline w-1/4">
                  View Details <ArrowRight size={16} />
                </h1>
              </div>
              <div className="w-full h-px bg-[#727272]/10"></div>
            </div>
          ))}
        </div>
        <div className="w-full flex">
          <div className="flex justify-center mt-10 px-6 py-3 rounded-full bg-[#DB0A0A] text-white text-sm">
            View More
          </div>
        </div>
      </div>
      <div className="w-full bg-[#B9041A] h-96 mt-10 mb-10 flex justify-center">
        <div className="flex justify-between">
          <img
            src="/images/iconWhite.png"
            alt="Career"
            className=" h-48 left-28 absolute"
          />
        </div>

        <div className="flex flex-col justify-center text-white items-center gap-6">
          <div>
            <div className="mb-5 italic font-extralight">
              Voices of Our People
            </div>

            <div className="text-3xl">
              At Hotz Group, I have found not just a<br></br>career, but a
              community that values<br></br>growth and impact.”
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center mt-24 py-7">
        <h1 className="text-4xl font-medium">Did not find a role that fits?</h1>
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
