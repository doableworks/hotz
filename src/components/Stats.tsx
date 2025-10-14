import React from "react";

const Stats = () => {
  return (
    <>
      <div className=" lg:flex justify-between px-5 lg:px-10 py-24">
        <div className="text-2xl font-semibold w-full text-center lg:text-left lg:w-1/2">
          <h1>DECADES OF IMPACT</h1>
          <h1>A FUTURE OF POSSIBILITIES</h1>
        </div>

        <div className="w-full lg:w-1/2 lg:pr-24">
          <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-10 items-center lg:justify-between">
            <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-start">
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                40+
              </h1>

              <h1 className="mt-2">Years of trust & growth</h1>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                1000+
              </h1>

              <h1 className="mt-2">Team driving excellence</h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full lg:gap-0 gap-10 items-center lg:justify-between mt-10 lg:mt-12">
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                20M+
              </h1>

              <h1 className="mt-2">Sq.ft. real estate & warehousing</h1>
            </div>

            <div className="flex flex-col items-center lg:items-start">
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                500K+
              </h1>

              <h1 className="mt-2">Customers across sectors</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
