import React from "react";
import { Eye } from "lucide-react";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Link from "next/link";
import { BlogListItem } from "@/lib/types/blogs";
import { getBlogList } from "@/lib/sanityQueries";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

async function Updates() {
  const Updates: BlogListItem[] = await getBlogList();

  return (
    <div className="px-5 lg:px-10">
      <TransitionVertical>
        <div className="text-center text-xl font-semibold mt-24 mb-7">
          HOTZ GROUP NEWS
        </div>

        <div className="hidden md:flex w-full gap-7">
          {Updates.map((update) => (
            <Link
              key={update._id}
              className="w-full"
              href={`/newsroom/${update.slug}`}
            >
              <div className="bg-amber-300 h-56">
                <img
                  src={update.imageUrl}
                  alt={update.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-sm text-gray-500 mt-2">
                {formatDate(update.date)}
              </h1>
              <h1>{update.title}</h1>
              <h1 className="text-xs flex gap-1 items-center mt-2">
                <Eye size={12} /> Read More
              </h1>
            </Link>
          ))}
        </div>

        <div className="flex md:hidden overflow-x-auto gap-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {Updates.map((update) => (
            <Link
              key={update._id}
              className="w-full snap-center flex-shrink-0"
              href={`/newsroom/${update.slug}`}
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={update.imageUrl}
                  alt={update.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-sm text-gray-500 mt-2">
                {formatDate(update.date)}
              </h1>
              <h1 className="text-base font-medium">{update.title}</h1>
              <h1 className="text-xs flex gap-1 items-center mt-2">
                <Eye size={12} /> Read More
              </h1>
            </Link>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="mt-6 px-7 py-4 bg-[#DB0A0A] text-white rounded-full text-sm">
            <TransitionHorizontal>
              <Link href="/newsroom">EXPLORE ALL UPDATES</Link>
            </TransitionHorizontal>
          </button>
        </div>
      </TransitionVertical>
    </div>
  );
}

export default Updates;
