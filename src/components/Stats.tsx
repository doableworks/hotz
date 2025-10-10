import React from "react";

const Stats = () => {
  return (
    <>
      <div className="flex justify-between px-16 py-24">
        <div className="text-2xl font-semibold w-1/2">
          <h1>DECADES OF IMPACT</h1>
          <h1>A FUTURE OF POSSIBILITIES</h1>
        </div>

        <div className="w-1/2 pr-24">
          <div className="flex justify-between">
            <div>
              <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                40+
              </h1>

              <h1 className="mt-2">Years of trust & growth</h1>
            </div>
            <div>
              <div>
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                  1000+
                </h1>

                <h1 className="mt-2">Team driving excellence</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <div>
              <div>
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                  20M+
                </h1>

                <h1 className="mt-2">Sq.ft. real estate & warehousing</h1>
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-6xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
                  500K+
                </h1>

                <h1 className="mt-2">Customers across sectors</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
