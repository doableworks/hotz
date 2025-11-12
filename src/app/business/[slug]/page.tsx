import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ArrowRight, Check, MapPin, ExternalLink } from "lucide-react";
import React from "react";
import { getBusinessDetail } from "@/lib/sanityQueries";
import { BusinessDetail } from "@/lib/types/business";
import Link from "next/link";

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
  return (
    <>
      <Navbar />
      <div className="w-full h-80">
        <img
          src={business.bannerImageUrl}
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

      <div className="px-5 lg:px-10 py-10 bg-linear-to-br from-[#DB0A0A] to-[#dd2c2c] text-white block lg:flex justify-between items-start">
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
              <p className="text-[#dfdfdf] text-sm mt-3">
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
                      <Check color="#fff" />
                      <p>{item}</p>
                    </div>
                  </TransitionVertical>
                  <div className="w-full h-px bg-[#fff]/50 my-5"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Desktop Image Grid */}
      {business.businessImages && business.businessImages.length > 0 && (
        <TransitionVertical>
          <div className="mt-10 hidden px-5 lg:px-10 lg:grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-5 h-[600px]">
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
        </TransitionVertical>
      )}

      <div className="lg:hidden flex flex-col gap-3 w-full px-5">
        <div>
          {business.businessImages &&
            business.businessImages.length > 0 &&
            business.businessImages.map((item, index) => (
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

      {/* Only show the location section if either address or locationUrl is available */}
      {((business.address && business.address.length > 0) ||
        business.locationUrl) && (
        <div className="px-5 lg:px-10 mt-7 lg:mt-16">
          <h1 className="text-2xl lg:text-3xl text-center font-medium">
            Find us at our premises
          </h1>

          <div
            className={`flex lg:flex-row flex-col mt-5 lg:mt-12 ${
              business.address &&
              business.address.length > 0 &&
              business.locationUrl
                ? "justify-center"
                : "justify-center"
            }`}
          >
            <div className="w-full flex flex-col lg:w-1/2 gap-5  mb-7">
              {business.address && business.address.length > 0 && (
                <div className="w-full flex gap-5 items-start">
                  <MapPin
                    strokeWidth={1}
                    color="#727272"
                    size={20}
                    className="mt-1"
                  />

                  <div className="flex flex-col">
                    <h1 className="text-sm mb-1">Address</h1>
                    <h1>
                      {business.address?.[0]?.address || "No address available"}
                    </h1>
                    {/* {business.address?.[0]?.url && (
                      <Link
                        className="text-[#DB0A0A] flex gap-2 mt-2 items-center"
                        href={business.address[0].url}
                      >
                        View on Map
                      </Link>
                    )} */}
                  </div>
                </div>
              )}
              {business.ctaUrl && (
                <div className="w-full flex gap-5 items-center">
                  <ExternalLink
                    strokeWidth={1}
                    color="#727272"
                    size={20}
                    // className="mt-1"
                  />
                  <Link href={business.ctaUrl} className="underline">
                    Link to Website
                  </Link>
                </div>
              )}
            </div>

            {business.locationUrl && (
              <div className="lg:w-1/2 w-full">
                <iframe
                  title="Google Map"
                  src={business.locationUrl}
                  width="100%"
                  height="400"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      )}

      {/* {business.partners && business.partners.length > 0 && (
        <h1 className="text-2xl mt-12 lg:text-3xl text-center font-medium">
          Projects
        </h1>
      )} */}
      {/* <div className="px-5 lg:px-10  overflow-x-auto">
        <div className="grid grid-rows-2 auto-cols-[250px] grid-flow-col gap-7 mt-5">
          {business.partners &&
            business.partners.length > 0 &&
            business.partners.map((partner) => (
              <div
                key={partner._id}
                className="flex items-center justify-center bg-[#F9F9F9] h-32 w-48 rounded-md flex-shrink-0"
              >
                <img
                  src={partner.imageUrl}
                  alt={`Partner ${partner.title}`}
                  className="h-12 object-contain"
                />
              </div>
            ))}
        </div>
      </div> */}

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
          <div className="flex flex-col items-center">
            <h1 className="text-xl lg:text-3xl font-medium text-white">
              {/* Partner with us in shaping <br className="hidden md:block"></br>
              industries and opportunities */}
              {business.getInTouchText
                ? business.getInTouchText
                : "Get in Touch"}
            </h1>

            <Link
              className="mt-5 px-5 lg:px-8 py-3 lg:py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-semibold text-sm flex w-fit"
              href={"/contact-us"}
            >
              <TransitionHorizontal> GET IN TOUCH </TransitionHorizontal>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
