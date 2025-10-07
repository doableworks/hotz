import React from "react";
import { Eye } from "lucide-react";

const Updates = () => {
  const Updates = [
    {
      id: 1,
      title: "Build Better Todays",
      date: "10 July, 2024",
      image: "/images/update1.png",
    },
    {
      id: 2,
      title: "Why is Holtz the largest greenfield Indian investor in the US?",
      date: "24 October, 2024",
      image: "/images/update2.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do...",
      date: "11 January, 2024",
      image: "/images/update3.png",
    },
    {
      id: 4,
      title: "Excepteur sint occaecat cupidatat non proident.",
      date: "09 February, 2024",
      image: "/images/update4.png",
    },
  ];

  return (
    <div className="px-10">
      <div className="text-center text-xl font-semibold mt-24 mb-7">
        What's New at Hotz Group
      </div>

      <div className="flex w-full gap-7">
        {Updates.map((update) => (
          <div key={update.id} className="w-1/4">
            <div className="bg-amber-300 h-48">
              <img
                src={update.image}
                alt={update.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-sm text-gray-500 mt-2">{update.date}</h1>
            <h1>{update.title}</h1>
            <h1 className="text-xs flex gap-1 items-center mt-2">
              <Eye size={12} /> Read More
            </h1>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 ">
        <button className="mt-6 px-7 py-4 bg-[#DB0A0A] text-white rounded-full text-sm ">
          EXPLORE ALL UPDATES
        </button>
      </div>
    </div>
  );
};

export default Updates;
