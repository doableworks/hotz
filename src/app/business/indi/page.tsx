import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Check } from "lucide-react";
import React from "react";

const page = () => {
  const highlights = [
    {
      id: 1,
      text: "Ample open space & dedicated truck/vehicle parking",
    },
    {
      id: 2,
      text: "24x7 power backup and water supply",
    },
    {
      id: 3,
      text: "Strategic location with highway connectivity",
    },
    {
      id: 4,
      text: "Modern security and surveillance systems",
    },
    {
      id: 5,
      text: "Customizable infrastructure as per client needs",
    },
    {
      id: 6,
      text: "Eco-friendly and sustainable construction practices",
    },
  ];

  const businessImages = [
    {
      id: 0,
      image: "/images/financial.png",
      position: "col-start-1 row-start-1",
    },
    {
      id: 1,
      image: "/images/realestate.png",
      position: "col-start-2 row-start-1 row-span-2",
    },
    {
      id: 2,
      image: "/images/hospitality.png",
      position: "col-start-3 row-start-1",
    },
    {
      id: 3,
      image: "/images/art.png",
      position: "col-start-1 row-start-2 row-span-2",
    },
    {
      id: 4,
      image: "/images/education.png",
      position: "col-start-2 row-start-3",
    },
    {
      id: 5,
      image: "/images/ventures.png",
      position: "col-start-3 row-start-2 row-span-2",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full h-80">
        <img
          src="/images/businessImage.png"
          className="w-full h-80 object-cover"
        />
      </div>

      <TransitionVertical>
        <div className="w-full h-80 flex justify-center items-center text-center px-5">
          <div>
            <h1 className="text-4xl font-medium">Real Estate</h1>
            <p className="w-full lg:max-w-3xl text-[#727272] mt-3">
              Hotz Group is engaged in real estate development with a focus on
              large-scale, well-planned projects that deliver value and
              long-term growth. Our developments combine strategic locations,
              strong infrastructure, and sustainable planning to meet the
              evolving needs of Business.
            </p>
          </div>
        </div>
      </TransitionVertical>

      <div className="px-5 lg:px-10 py-10 bg-[#f3f3f3] block lg:flex justify-between items-start">
        <div className="w-full lg:w-1/2">
          <TransitionVertical>
            <h1 className="text-3xl font-medium">Our projects</h1>
          </TransitionVertical>
        </div>

        <div className="w-full lg:w-1/2 pr-0 lg:pr-20 mt-10 lg:mt-0">
          <TransitionVertical>
            <h1 className="text-xl font-medium">Warehouse Facility</h1>
          </TransitionVertical>

          <TransitionVertical>
            <p className="text-[#3a3a3a] text-sm mt-3">
              Our flagship development is a world-class warehouse facility
              spread across 13 acres in EECO II, Udyog Vihar, Greater Noida,
              with a built-up area of approx. 2,75,000 sq. ft. Leased to Samsung
              India for storage and distribution operations.
            </p>
          </TransitionVertical>

          <div className="mt-12 space-y-7">
            {highlights.map((item) => (
              <div key={item.id}>
                <TransitionVertical>
                  <div className="flex items-center gap-5">
                    <Check color="#DB0A0A" />
                    <p>{item.text}</p>
                  </div>
                </TransitionVertical>
                <div className="w-full h-px bg-[#888888]/10 my-5"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden px-5 lg:px-10 lg:grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-5 h-[600px]">
        {businessImages.map((item) => (
          <div
            key={item.id}
            className={`${item.position} bg-gray-300 overflow-hidden`}
          >
            <img
              src={item.image}
              alt={`business-${item.id}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="lg:hidden flex flex-col gap-3 w-full px-5">
        <div>
          {businessImages.map((item) => (
            <div key={item.id} className={"overflow-hidden"}>
              <img
                src={item.image}
                alt={`business-${item.id}`}
                className="w-full h-64 object-cover my-2"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-5 lg:px-10">
        <div
          className="relative w-full h-72 mt-5 lg:mt-24 text-center flex justify-center items-center overflow-hidden"
          style={{
            background:
              "linear-gradient(107.45deg, #DB0A0A 21.24%, #FBB1B1 95.59%)",
          }}
        >
          <div className="absolute top-0 left-0">
            <img src="/images/vectorbusiness1.png" />
          </div>

          <div className="absolute top-0 right-0">
            <img src="/images/vectorbusiness2.png" alt="Right Vector" />
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl font-medium text-white">
              Partner with us in shaping <br className="hidden md:block"></br>
              industries and opportunities
            </h1>

            <button className="mt-5 px-5 lg:px-8 py-3 lg:py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-semibold text-sm">
              <TransitionHorizontal>GET IN TOUCH</TransitionHorizontal>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
