import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="px-20 mt-24">
        <h1>Account / Full-time</h1>
        <div className="w-full text-6xl font-medium ">
          <div className="w-full flex justify-between items-center">
            <h1>Graphic Designer</h1>
            <div className="flex justify-center mt-10 px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm">
              APPLY NOW
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-7 mt-10">
          <div className="flex justify-between gap-10">
            <div className="w-1/2 text-xl">The role</div>
            <div className="text-[#393939]">
              As a Graphic Designer, you will play a pivotal role in crafting
              intuitive and user-centric experiences for our software products.
              You will collaborate closely with product managers, engineers, and
              other stakeholders to translate user needs into beautiful and
              functional interfaces. Ultimately, you will be responsible for
              ensuring our software delivers a seamless and delightful
              experience for our clients, helping us achieve our customer growth
              goals.{" "}
            </div>
          </div>

          <div className="w-full h-px bg-[#393939] mt-5"></div>

          <div className="flex justify-between gap-10">
            <div className="w-1/2 text-xl">Responsibilities</div>
            <div className="text-[#393939]">
              As a Graphic Designer, you will play a pivotal role in crafting
              intuitive and user-centric experiences for our software products.
              You will collaborate closely with product managers, engineers, and
              other stakeholders to translate user needs into beautiful and
              functional interfaces. Ultimately, you will be responsible for
              ensuring our software delivers a seamless and delightful
              experience for our clients, helping us achieve our customer growth
              goals.{" "}
            </div>
          </div>

          <div className="w-full h-px bg-[#393939] mt-5"></div>
        </div>

        <div className="w-full flex justify-end mt-10">
          <div className="flex justify-end px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm">
            APPLY NOW
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
