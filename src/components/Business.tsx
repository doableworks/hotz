"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Business = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    { image: "/images/financial.png", title: "Financial Services" },
    { image: "/images/realestate.png", title: "Real Estate" },
    { image: "/images/hospitality.png", title: "Hospitality" },
    { image: "/images/education.png", title: "Education" },
    { image: "/images/art.png", title: "Art" },
    { image: "/images/ventures.png", title: "New Ventures" },
  ];

  const totalCards = cards.length;
  const expandedWidth = 40;
  const collapsedWidth = (95 - expandedWidth) / (totalCards - 1);
  const expandedHeight = 40;
  const collapsedHeight = (95 - expandedHeight) / (totalCards - 1);

  // Detect screen size once on mount
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleInteraction = (index: number) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? -1 : index);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="px-4 md:px-10">
      <div className="text-center text-xl font-semibold mt-24 mb-7">
        OUR BUSINESS
      </div>

      <div className="flex md:flex-row flex-col items-center md:items-stretch gap-3 w-full md:h-96 h-[95vh] overflow-hidden">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => !isMobile && setActiveIndex(index)}
            onMouseLeave={() => !isMobile && setActiveIndex(0)}
            onClick={() => handleInteraction(index)}
            transition={{
              layout: {
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 25,
              },
            }}
            className="relative flex-shrink-0 w-full md:h-full overflow-hidden rounded-lg cursor-pointer"
            style={{
              width: isMobile
                ? "100%"
                : `${activeIndex === index ? expandedWidth : collapsedWidth}%`,
              height: isMobile
                ? `${
                    activeIndex === index ? expandedHeight : collapsedHeight
                  }vh`
                : "100%",
              opacity: activeIndex === index ? 1 : 0.8,
            }}
          >
            <img
              src={card.image}
              alt={card.title}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                activeIndex === index ? "grayscale-0" : "grayscale"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Title */}
            <div className="absolute bottom-0 left-0 w-full p-4 font-medium text-lg md:text-xl text-white">
              {card.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Business;
