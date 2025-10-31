import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Eye } from "lucide-react";
import React from "react";

function page() {
  const Updates = [
    {
      id: 1,
      title: "Build Better Todays",
      date: "10 July, 2024",
      image: "/images/update1.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint iusto, cum doloribus perspiciatis quis cumque repudiandae, quae consequatur at modi incidunt aspernatur nostrum. Distinctio, praesentium accusamus quia, velit consequatur facere voluptas asperiores reiciendis cupiditate adipisci iusto, dolorum dolore neque recusandae.",
    },
    {
      id: 2,
      title: "Why is Holtz the largest greenfield Indian investor in the US?",
      date: "24 October, 2024",
      image: "/images/update2.png",
      description:
        "Holtz Group continues to expand its international presence by being a leading investor in greenfield projects across the United States, emphasizing sustainability and innovation.",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do...",
      date: "11 January, 2024",
      image: "/images/update3.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur perspiciatis voluptates ad doloremque qui mollitia molestiae quidem.",
    },
    {
      id: 4,
      title: "Excepteur sint occaecat cupidatat non proident.",
      date: "09 February, 2024",
      image: "/images/update4.png",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="w-full h-80 bg-gray-400">
        <img src="/images/contact.png" className="h-80 w-full object-cover" />
      </div>

      <div className="px-5 text-center text-xl font-semibold mt-16 mb-7">
        What&apos;s New at Hotz Group
      </div>

      <div className="px-5 lg:px-48 w-full flex flex-col gap-16">
        {Updates.map((item) => (
          <div key={item.id}>
            <div className="flex lg:flex-row flex-col-reverse w-full justify-between items-start">
              <div className="w-full lg:w-3/4 flex flex-col gap-2">
                <h1 className="text-[#727272] mt-7 lg:mt-0">{item.date}</h1>

                <h1 className="text-2xl">{item.title}</h1>

                <p className="text-[#727272]">{item.description}</p>

                <div className="flex items-center gap-3">
                  <Eye size={12} />
                  <h1 className="text-sm">Read more</h1>
                </div>
              </div>

              <div className="w-full lg:w-1/4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>

            <div className="w-full h-px bg-[#E6E6E6] mt-7"></div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default page;
