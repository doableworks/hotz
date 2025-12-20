"use client";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import { TeamLeader } from "@/lib/types/business";
import React, { useState, useEffect } from "react";

const Leaders = ({ leaders }: { leaders: TeamLeader[] }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<TeamLeader | null>(null);

  const handleOpenModal = (leader: TeamLeader) => {
    if (leader.description) {
      setSelectedLeader(leader);
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedLeader(null);
  };

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);

  return (
    <div id="management" className="scroll-mt-24 px-5 lg:px-10 pb-7 lg:pb-24">
      <div className="text-center text-xl font-semibold mt-5  mb-7">
        MANAGEMENT
      </div>
      <TransitionVertical>
        <div className="hidden md:flex w-full gap-7">
          {leaders.map((leader) => (
            <div key={leader._id} className="w-1/4">
              <div
                onClick={() => handleOpenModal(leader)}
                className={`bg-[#F5F5F5] h-96 ${leader.description ? "cursor-pointer" : "cursor-default"}`}
              >
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
            <div key={leader._id} className="w-[70%] snap-center flex-shrink-0">
              <div
                onClick={() => handleOpenModal(leader)}
                className={`h-80 overflow-hidden ${leader.description ? "cursor-pointer" : "cursor-default"}`}
              >
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

      {/* <TransitionVertical>
        <div className="grid grid-cols-2 gap-5 md:hidden">
          {leaders.map((leader) => (
            <div key={leader._id} className="w-full">
              <div className="aspect-[3/4] overflow-hidden">
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
      </TransitionVertical> */}

      {/* <div className="flex justify-center mt-10">
        <button className="mt-6 px-7 py-4 bg-[#DB0A0A] text-white rounded-full text-sm">
          <TransitionHorizontal>MEET OUR LEADERS</TransitionHorizontal>
        </button>
      </div> */}

      {openModal && selectedLeader?.description && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-3"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white pt-12 pb-5 px-5 overflow-auto rounded-lg lg:w-[40vw] w-full relative max-h-[95%]"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-xl font-bold"
            >
              ✕
            </button>

            {/* Leader Image */}
            <img
              src={selectedLeader.imageUrl}
              alt={selectedLeader.title}
              className="w-full h-96 object-contain mb-4"
            />
            {/* Leader Title */}
            <h1 className="text-xl text-center font-semibold">
              {selectedLeader.title}
            </h1>

            <div className="text-sm text-center text-gray-500 mt-2">
              {selectedLeader.description
                .split(/\n+/)
                .filter((paragraph) => paragraph.trim())
                .map((paragraph, index) => (
                  <p key={index} className="mb-3 last:mb-0">
                    {paragraph.trim()}
                  </p>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaders;
