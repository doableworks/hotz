"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Business = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <div className="px-10">
      <div className="text-center text-xl font-semibold mt-24 mb-7">
        OUR BUSINESS
      </div>

      <div className="flex items-center gap-3 w-full h-96 overflow-hidden">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            layout
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
            transition={{
              layout: {
                duration: 0.6,
                type: "spring",
                stiffness: 200,
                damping: 25,
              },
            }}
            className="relative h-full flex-shrink-0"
            style={{
              width: `${
                activeIndex === index ? expandedWidth : collapsedWidth
              }%`,
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

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-0 left-0 w-full p-4 font-medium text-xl text-white">
              {card.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Business;
