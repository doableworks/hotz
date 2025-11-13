"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TransitionVertical from "@/animations/TransitionVertical";
import { OurBusiness } from "@/lib/types/business";
import { useRouter } from "next/navigation";

interface BusinessProps {
  businesses: OurBusiness[];
}

const Business = ({ businesses }: BusinessProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const totalCards = businesses.length;
  const expandedWidth = 40;
  const collapsedWidth =
    totalCards > 1 ? (95 - expandedWidth) / (totalCards - 1) : 95;
  const expandedHeight = 40;
  const collapsedHeight =
    totalCards > 1 ? (95 - expandedHeight) / (totalCards - 1) : 95;

  const handleInteraction = (index: number, card: OurBusiness) => {
    if (isMobile) {
      if (activeIndex === index) {
        router.push(`/business/${card.slug}`);
      } else {
        setActiveIndex(index);
      }
    } else {
      router.push(`/business/${card.slug}`);
    }
  };

  return (
    <div className="px-4 md:px-10 relative z-40 bg-white">
      <div className="text-center text-xl font-semibold pt-24 mb-7">
        OUR BUSINESS
      </div>
      <TransitionVertical>
        <div className="flex md:flex-row flex-col items-center md:items-stretch gap-3 w-full md:h-96 h-[110vh] overflow-hidden">
          {businesses.map((card: OurBusiness, index: number) => (
            <motion.div
              key={card._id}
              layout
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onMouseLeave={() => !isMobile && setActiveIndex(0)}
              onClick={() => handleInteraction(index, card)}
              transition={{
                layout: {
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 25,
                },
              }}
              className="relative flex-shrink-0 w-full md:h-full overflow-hidden cursor-pointer"
              style={{
                width: isMobile
                  ? "100%"
                  : `${activeIndex === index ? expandedWidth : collapsedWidth}%`,
                height: isMobile
                  ? `${activeIndex === index ? expandedHeight : collapsedHeight}vh`
                  : "100%",
                opacity: activeIndex === index ? 1 : 0.8,
              }}
            >
              <img
                src={card.coverImageUrl}
                alt={card.linkTitle}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                  activeIndex === index ? "grayscale-0" : "grayscale"
                }`}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Title */}
              <div className="absolute bottom-0 left-0 w-full p-4 font-medium text-lg md:text-xl text-white">
                {card.linkTitle}
              </div>
            </motion.div>
          ))}
        </div>
      </TransitionVertical>
    </div>
  );
};

export default Business;
