import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Check } from "lucide-react";
import React from "react";
import { getBusinessDetail } from "@/lib/sanityQueries";
import { BusinessDetail } from "@/lib/types/business";

const imageGridConfig = [
  {
    id: 0,
    position: "col-start-1 row-start-1",
  },
  {
    id: 1,
    position: "col-start-2 row-start-1 row-span-2",
  },
  {
    id: 2,
    position: "col-start-3 row-start-1",
  },
  {
    id: 3,
    position: "col-start-1 row-start-2 row-span-2",
  },
  {
    id: 4,
    position: "col-start-2 row-start-3",
  },
  {
    id: 5,
    position: "col-start-3 row-start-2 row-span-2",
  },
];

async function page({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Awaited params to get the slug
  const { slug } = await params;

  const business: BusinessDetail = await getBusinessDetail(slug);

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
            <h1 className="text-4xl font-medium">
              {business.linkTitle ? business.linkTitle : "Business Title"}
            </h1>
            {business.description && (
              <p className="w-full lg:max-w-3xl text-[#727272] mt-3">
                {business.description}
              </p>
            )}
          </div>
        </div>
      </TransitionVertical>

      <div className="px-5 lg:px-10 py-10 bg-[#f3f3f3] block lg:flex justify-between items-start">
        <div className="w-full lg:w-1/2">
          <TransitionVertical>
            {business.businessTitle && (
              <h1 className="text-3xl font-medium">{business.businessTitle}</h1>
            )}
          </TransitionVertical>
        </div>

        <div className="w-full lg:w-1/2 pr-0 lg:pr-20 mt-10 lg:mt-0">
          <TransitionVertical>
            {business.projectsTitle && (
              <h1 className="text-xl font-medium">{business.projectsTitle}</h1>
            )}
          </TransitionVertical>

          <TransitionVertical>
            {business.projectsDescription && (
              <p className="text-[#3a3a3a] text-sm mt-3">
                {business.projectsDescription}
              </p>
            )}
          </TransitionVertical>

          <div className="mt-12 space-y-7">
            {business.projectPoints &&
              business.projectPoints.length > 0 &&
              business.projectPoints.map((item, index) => (
                <div key={index}>
                  <TransitionVertical>
                    <div className="flex items-center gap-5">
                      <Check color="#DB0A0A" />
                      <p>{item}</p>
                    </div>
                  </TransitionVertical>
                  <div className="w-full h-px bg-[#888888]/10 my-5"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Desktop Image Grid */}
{business.businessImages && business.businessImages.length > 0 && (
      <TransitionVertical>
      <div className="hidden px-5 lg:px-10 lg:grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-5 h-[600px]">
        {imageGridConfig.map((item, index) => (
          
            <div
              key={item.id}
              className={`${item.position} bg-gray-300 overflow-hidden`}
            >
                <img
                  src={business.businessImages?.[index] || ""}
                  alt={`business-${item.id}`}
                  className="w-full h-full object-cover"
                />
          </div>
          
        ))}
      </div>
      </TransitionVertical>)}

      <div className="lg:hidden flex flex-col gap-3 w-full px-5">
        <div>
          {business.businessImages && business.businessImages.length > 0 && business.businessImages.map((item, index) => (
            <TransitionVertical key={index}>
              <div key={index} className={"overflow-hidden"}>
                <img
                  src={item}
                  alt={`business-${index}`}
                  className="w-full h-64 object-cover my-2"
                />
              </div>
            </TransitionVertical>
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
}

export default page;
