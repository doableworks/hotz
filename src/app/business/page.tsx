import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import { getBusiness } from "@/lib/sanityQueries";

async function page() {
  // const businesses = [
  //   {
  //     id: 1,
  //     linkTitle: "Financial Services",
  //     description:
  //       "Empowering growth through transparent and reliable financial solutions.",
  //     image: "/images/financial.png",
  //     ctaUrl: "/business/financial-services",
  //   },
  //   {
  //     id: 2,
  //     linkTitle: "Real Estate",
  //     description:
  //       "Creating iconic residential and warehousing spaces that redefine modern living.",
  //     image: "/images/realestate.png",
  //     ctaUrl: "/business/real-estate",
  //   },
  //   {
  //     id: 3,
  //     linkTitle: "Hospitality",
  //     description:
  //       "Delivering comfort and memorable experience with premium stays and services.",
  //     image: "/images/hospitality.png",
  //     ctaUrl: "/business/hospitality",
  //   },
  //   {
  //     id: 4,
  //     linkTitle: "Art",
  //     description:
  //       "Celebrating creativity, culture, and heritage through curated initiatives.",
  //     image: "/images/art.png",
  //     ctaUrl: "/business/art",
  //   },
  //   {
  //     id: 5,
  //     linkTitle: "Education",
  //     description:
  //       "Inspiring future generations with quality learning and leadership programs.",
  //     image: "/images/education.png",
  //     ctaUrl: "/business/education",
  //   },
  //   {
  //     id: 6,
  //     linkTitle: "New Ventures",
  //     description:
  //       "Providing scalable, efficient, and future-ready logistics infrastructure.",
  //     image: "/images/ventures.png",
  //     ctaUrl: "/business/new-ventures",
  //   },
  // ];

  const businesses = await getBusiness();

  return (
    <>
      <div>
        <Navbar />

        {/* Hero Section */}
        <div className="relative w-full h-96">
          <img
            src="/images/businessImage.png"
            alt="Business"
            className="object-cover w-full h-96"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
          <div className="absolute bottom-7 left-5 lg:left-10">
            <TransitionHorizontal>
              <h1 className="text-white text-xl lg:text-3xl font-medium">
                Diverse Business.<br className="md:hidden"></br> One Trusted
                Group.
              </h1>
            </TransitionHorizontal>
          </div>
        </div>

        <div className="px-5 lg:px-10 pt-10">
          <TransitionVertical>
            <h1 className="text-2xl font-medium mb-5">OUR BUSINESSES</h1>
          </TransitionVertical>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {businesses.map((card) => (
              <TransitionHorizontal key={card._id}>
                <div className="w-full">
                  <Link href={`/business/${card.slug}`}>
                    <div className="relative w-full bg-amber-200 h-96">
                      <img
                        src={card.coverImageUrl}
                        alt={card.linkTitle}
                        className="w-full h-full object-cover"
                      />
                      {card.isLive === false && (
                        <div className="absolute top-3 right-3 bg-[#DB0A0A] text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full shadow-lg z-50">
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <TransitionVertical>
                      <h1 className="mt-3 font-medium text-lg">
                        {card.linkTitle}
                      </h1>
                      <p className="text-[#727272] text-sm">
                        {card.getInTouchText}
                      </p>
                    </TransitionVertical>

                    <h1 className="mt-3 flex gap-3 items-center cursor-pointer">
                      Explore <MoveRight />
                    </h1>
                  </Link>
                </div>
              </TransitionHorizontal>
            ))}
          </div>
        </div>

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
              Partner with us in shaping <br className="hidden md:block" />
              industries and opportunities
            </h1>

            <Link href="/contact-us">
              <button className="mt-5 px-5 lg:px-8 py-3 lg:py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-semibold text-sm">
                <TransitionHorizontal>GET IN TOUCH</TransitionHorizontal>
              </button>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default page;
