"use client";
import React, { useRef } from "react";
import { useInView } from "framer-motion";
import { SlotMachineCounter } from "../animations/SlotMachineCounter";
import TransitionVertical from "@/animations/TransitionVertical";

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const statsData = [
    {
      value: 40,
      suffix: "+",
      description: "Years of trust & growth",
      delay: 0,
    },
    {
      value: 1000,
      suffix: "+",
      description: "Team driving excellence",
      delay: 1,
    },
    {
      value: 20,
      suffix: "M+",
      description: "Sq.ft. real estate & warehousing",
      delay: 2,
    },
    {
      value: 500,
      suffix: "K+",
      description: "Customers across sectors",
      delay: 3,
    },
  ];

  return (
    <>
      <div className=" lg:flex justify-between px-5 lg:px-10 py-24" ref={ref}>
        <div className="text-2xl font-semibold w-full text-center lg:text-left lg:w-1/2">
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
                targetValue={statsData[0].value}
                suffix={statsData[0].suffix}
                duration={2000}
                delay={statsData[0].delay * 200}
                easingFunction="easeOutQuart"
                trigger={isInView}
              >
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
              </SlotMachineCounter>

              <h1 className="mt-2">{statsData[0].description}</h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <SlotMachineCounter
                targetValue={statsData[1].value}
                suffix={statsData[1].suffix}
                duration={2000}
                delay={statsData[1].delay * 200}
                easingFunction="easeOutQuart"
                trigger={isInView}
              >
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
              </SlotMachineCounter>

              <h1 className="mt-2">{statsData[1].description}</h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-10 items-center lg:justify-between mt-10 lg:mt-12">
            <div className="flex flex-col items-center lg:items-start">
              <SlotMachineCounter
                targetValue={statsData[2].value}
                suffix={statsData[2].suffix}
                duration={2000}
                delay={statsData[2].delay * 200}
                easingFunction="easeOutQuart"
                trigger={isInView}
              >
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
              </SlotMachineCounter>

              <h1 className="mt-2">{statsData[2].description}</h1>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <SlotMachineCounter
                targetValue={statsData[3].value}
                suffix={statsData[3].suffix}
                duration={2000}
                delay={statsData[3].delay * 200}
                easingFunction="easeOutQuart"
                trigger={isInView}
              >
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent" />
              </SlotMachineCounter>

              <h1 className="mt-2">{statsData[3].description}</h1>
            </div>
          </div>
          </TransitionVertical>
        </div>
      </div>
    </>
  );
};

export default Stats;
