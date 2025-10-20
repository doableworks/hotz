"use client";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import { TeamLeader } from "@/lib/types/business";
import React from "react";

const Leaders = ({ leaders }: { leaders: TeamLeader[] }) => {
  // const leaders = [
  //   {
  //     id: 1,
  //     name: "John Doe",
  //     role: "Founder",
  //     image: "/images/leader1.png",
  //   },
  //   {
  //     id: 2,
  //     name: "Jane Smith",
  //     role: "Founder",
  //     image: "/images/leader2.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Michael Lee",
  //     role: "Founder",
  //     image: "/images/leader3.png",
  //   },
  //   {
  //     id: 4,
  //     name: "Sophia Brown",
  //     role: "Founder",
  //     image: "/images/leader4.png",
  //   },
  // ];

  return (
    <div className="px-5 lg:px-10">
      <div className="text-center text-xl font-semibold lg:mt-16 mb-7">
        Guided by visionaries, Driven by values.
      </div>
      <TransitionVertical>
        <div className="hidden md:flex w-full gap-7">
          {leaders.map((leader) => (
            <div key={leader._id} className="w-1/4">
              <div className="bg-amber-300 h-96">
                <img
                  src={leader.imageUrl}
                  alt={leader.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-3">{leader.title}</h1>
              <h1 className="text-sm text-gray-500">{leader.designation}</h1>
            </div>
          ))}
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="flex md:hidden overflow-x-auto gap-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {leaders.map((leader) => (
            <div
              key={leader._id}
              className="min-w-[70%] snap-center flex-shrink-0"
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={leader.imageUrl}
                  alt={leader.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="mt-3 text-lg">{leader.title}</h1>
              <h1 className="text-sm text-gray-500">{leader.designation}</h1>
            </div>
          ))}
        </div>
      </TransitionVertical>

      <div className="flex justify-center mt-10">
        <button className="mt-6 px-7 py-4 bg-[#DB0A0A] text-white rounded-full text-sm">
          <TransitionHorizontal>MEET OUR LEADERS</TransitionHorizontal>
        </button>
      </div>
    </div>
  );
};

export default Leaders;
