"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { CareerListItem } from "@/lib/types/careers";

interface CareerFiltersProps {
  careers: CareerListItem[];
  categories: string[];
}

function CareerFilters({ careers, categories }: CareerFiltersProps) {
  const [selected, setSelected] = useState("All");

  const filteredCareers =
    selected === "All"
      ? careers
      : careers.filter((career) => career.department === selected);

  return (
    <div className="w-full px-5 lg:px-10 py-5 lg:py-20 flex flex-col">
      <h1 className="text-2xl lg:text-3xl font-medium mb-5">WE ARE HIRING</h1>

      <div className="flex flex-wrap items-center gap-4">
        {categories.map((category) => (
          <div
            key={category}
            onClick={() => setSelected(category)}
            className={`lg:px-8 py-2 lg:text-base text-sm px-5 border-2 rounded-full cursor-pointer transition-all duration-200
            ${
              selected === category
                ? "border-[#DB0A0A] text-[#DB0A0A]"
                : "border-gray-300 text-gray-600 hover:border-[#DB0A0A] hover:text-[#DB0A0A]"
            }`}
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 py-3 mt-5">
        {filteredCareers.map((career) => (
          <div key={career._id}>
            <div className="hidden md:flex justify-between items-center my-5 pb-3">
              <h1 className="text-2xl font-medium w-1/4">
                {career.positionTitle}
              </h1>
              <h1 className="text-[#727272] text-sm w-1/4 flex justify-center">
                {career.department}
              </h1>
              <h1 className="text-[#727272] text-sm w-1/4 flex justify-center">
                {career.type}
              </h1>
              <Link
                href={`/career/${career.slug}`}
                className="flex gap-3 justify-end items-center text-[#DB0A0A] cursor-pointer hover:underline w-1/4"
              >
                View Details <ArrowRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col md:hidden my-4 pb-3">
              <h1 className="text-lg font-semibold mb-2">
                {career.positionTitle}
              </h1>
              <div className="flex justify-between text-sm text-[#727272] mb-3">
                <span>{career.department}</span>
                <span>{career.type}</span>
              </div>
              <Link
                href={`/career/${career.slug}`}
                className="text-[#DB0A0A] text-sm flex items-center gap-2 cursor-pointer hover:underline"
              >
                View Details <ArrowRight size={14} />
              </Link>
            </div>

            {/* <div className="hidden md:block w-full h-px bg-[#727272]/10"></div> */}
          </div>
        ))}
      </div>

      {filteredCareers.length > 6 && (
        <div className="w-full flex">
          <div className="flex justify-center mt-10 px-6 py-3 rounded-full bg-[#DB0A0A] text-white text-sm">
            View More
          </div>
        </div>
      )}
    </div>
  );
}

export default CareerFilters;
