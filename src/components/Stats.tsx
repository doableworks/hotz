"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { SlotMachineCounter } from "../animations/SlotMachineCounter";
import TransitionVertical from "@/animations/TransitionVertical";

interface statsData {
  stat: string;
  title: string;
}

const Stats = ({ statsData }: { statsData: statsData[] }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // Function to extract number and suffix from stat string
  const parseStatValue = (stat: string) => {
    const match = stat.match(/^(\d+)([a-zA-Z+]*)$/);
    if (match) {
      return {
        value: parseInt(match[1], 10),
        suffix: match[2] || "",
      };
    }
    return { value: 0, suffix: "" };
  };

  // const statsData = [
  //   {
  //     value: 40,
  //     suffix: "+",
  //     description: "Years of trust & growth",
  //     delay: 0,
  //   },
  //   {
  //     value: 1000,
  //     suffix: "+",
  //     description: "Team driving excellence",
  //     delay: 1,
  //   },
  //   {
  //     value: 20,
  //     suffix: "M+",
  //     description: "Sq.ft. real estate & warehousing",
  //     delay: 2,
  //   },
  //   {
  //     value: 500,
  //     suffix: "K+",
  //     description: "Customers across sectors",
  //     delay: 3,
  //   },
  // ];

  return (
    <>
      <div
        className=" lg:flex justify-between px-5 lg:px-10 py-7 lg:py-24"
        ref={ref}
      >
        <div className="text-xl lg:text-2xl font-semibold w-full text-center lg:text-left lg:w-1/2">
          <TransitionVertical>
            <h1>DECADES OF IMPACT</h1>
            <h1>A FUTURE OF POSSIBILITIES</h1>
          </TransitionVertical>
        </div>

        <div className="w-full lg:w-1/2 lg:pr-24">
          <TransitionVertical>
            <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-10 items-center lg:justify-between">
              <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
                <SlotMachineCounter
                  targetValue={parseStatValue(statsData[0].stat).value}
                  suffix={parseStatValue(statsData[0].stat).suffix}
                  duration={2000}
                  delay={200}
                  easingFunction="easeOutQuart"
                  trigger={isInView}
                >
                  <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
                </SlotMachineCounter>

                <h1 className="mt-2 text-center">{statsData[0].title}</h1>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <SlotMachineCounter
                  targetValue={parseStatValue(statsData[1].stat).value}
                  suffix={parseStatValue(statsData[1].stat).suffix}
                  duration={2000}
                  delay={400}
                  easingFunction="easeOutQuart"
                  trigger={isInView}
                >
                  <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
                </SlotMachineCounter>

                <h1 className="mt-2 text-center">{statsData[1].title}</h1>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-10 items-center lg:justify-between mt-10 lg:mt-12">
              <div className="flex flex-col items-center lg:items-start">
                <SlotMachineCounter
                  targetValue={parseStatValue(statsData[2].stat).value}
                  suffix={parseStatValue(statsData[2].stat).suffix}
                  duration={2000}
                  delay={600}
                  easingFunction="easeOutQuart"
                  trigger={isInView}
                >
                  <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
                </SlotMachineCounter>

                <h1 className="mt-2 text-center">{statsData[2].title}</h1>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <SlotMachineCounter
                  targetValue={parseStatValue(statsData[3].stat).value}
                  suffix={parseStatValue(statsData[3].stat).suffix}
                  duration={2000}
                  delay={800}
                  easingFunction="easeOutQuart"
                  trigger={isInView}
                >
                  <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
                </SlotMachineCounter>

                <h1 className="mt-2 text-center">{statsData[3].title}</h1>
              </div>
            </div>
          </TransitionVertical>
        </div>
      </div>
    </>
  );
};

export default Stats;
