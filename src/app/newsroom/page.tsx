import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getBlogList } from "@/lib/sanityQueries";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

async function page() {
  const Updates = await getBlogList();
  return (
    <>
      <Navbar />

      <div className="my-16"></div>

      <div className="w-full h-48 lg:h-80">
        <img
          src="/images/news.jpg"
          className="h-48 lg:h-80 w-full object-cover"
        />
      </div>

      <TransitionVertical>
        <div className="px-5 text-center text-xl font-semibold mt-7 lg:mt-16 mb-3 lg:mb-7">
          HOTZ GROUP NEWS
        </div>
      </TransitionVertical>

      <div className="px-5 lg:px-48 w-full flex flex-col gap-16">
        {Updates.map((item) => (
          <TransitionVertical key={item._id}>
            <Link href={`/newsroom/${item.slug}`}>
              <div className="flex lg:flex-row flex-col-reverse w-full justify-between items-start">
                <div className="w-full lg:w-3/4 flex flex-col gap-2">
                  <h1 className="text-[#727272] mt-7 lg:mt-0">
                    {formatDate(item.date)}
                  </h1>

                  <h1 className="text-xl lg:text-2xl">{item.title}</h1>

                  <p className="text-[#727272]">{item.intro}</p>

                  <div className="flex items-center gap-3">
                    <Eye size={12} />
                    <h1 className="text-sm">Read more</h1>
                  </div>
                </div>

                <div className="w-full lg:w-1/4 md:ml-4">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="w-full h-px bg-[#E6E6E6] mt-7"></div>
            </Link>
          </TransitionVertical>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default page;
