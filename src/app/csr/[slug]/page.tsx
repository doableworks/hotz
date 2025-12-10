import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getCSRDetailBySlug } from "@/data/csrEntries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

type CSRPageProps = {
  params: { slug: string };
};

const CSRDetailPage = async ({ params }: CSRPageProps) => {
  const { slug } = await Promise.resolve(params);
  const entry = getCSRDetailBySlug(slug);

  if (!entry) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <div className="w-full h-80">
        <img src={entry.bannerImage} className="w-full h-80 object-cover" />
      </div>

      <TransitionVertical>
        <div className="w-full h-full lg:h-80 flex justify-center items-center text-center px-5 py-5">
          <div>
            <h1 className="text-2xl lg:text-4xl font-medium mb-3">
              {entry.title}
            </h1>

            <p className="lg:text-base text-sm w-full lg:max-w-3xl text-[#727272] mt-3">
              {entry.intro}
            </p>
          </div>
        </div>
      </TransitionVertical>

      <div className="bg-linear-to-br from-[#DB0A0A] to-[#dd2c2c] py-10">
        <TransitionVertical>
          <div className="w-full px-5 lg:px-10 ">
            <h1 className="text-2xl lg:text-4xl font-medium mt-8 lg:mt-0 text-white">
              Overview
            </h1>
            <p className="mt-3 text-[#dfdfdf] whitespace-pre-line">
              {entry.overview}
            </p>
            <div className="w-full h-px bg-[#fff]/40 my-5 lg:my-7"></div>
          </div>
        </TransitionVertical>

        {entry.projectNote ? (
          <TransitionVertical>
            <div className="w-full px-5 lg:px-10 mt-8">
              <h2 className="text-2xl lg:text-4xl font-medium text-white">
                Our Project
              </h2>
              <p className="mt-3 text-[#dfdfdf] whitespace-pre-line">
                {entry.projectNote}
              </p>
            </div>
          </TransitionVertical>
        ) : null}

        {entry.institutionalBackground ? (
          <TransitionVertical>
            <div className="w-full px-5 lg:px-10 mt-8">
              <h2 className="text-2xl lg:text-4xl font-medium text-white">
                Institutional Background
              </h2>
              <p className="mt-3 text-[#dfdfdf] whitespace-pre-line">
                {entry.institutionalBackground}
              </p>
            </div>
          </TransitionVertical>
        ) : null}
      </div>

      {entry.galleryImages && entry.galleryImages.length > 0 ? (
        <>
          <TransitionVertical>
            <div className="mt-10 hidden px-5 lg:px-10 lg:grid grid-cols-3 md:grid-cols-3 grid-rows-3 md:grid-rows-3 gap-5 h-[600px]">
              {imageGridConfig.map((item, index) => (
                <div
                  key={item.id}
                  className={`${item.position} bg-gray-300 overflow-hidden`}
                >
                  <img
                    src={entry.galleryImages?.[index] || ""}
                    alt={`csr-${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </TransitionVertical>

          <div className="lg:hidden flex flex-col gap-3 w-full px-5">
            <div>
              {entry.galleryImages.map((item, index) => (
                <TransitionVertical key={index}>
                  <div className={"overflow-hidden"}>
                    <img
                      src={item}
                      alt={`csr-${index}`}
                      className="w-full h-64 object-cover my-2"
                    />
                  </div>
                </TransitionVertical>
              ))}
            </div>
          </div>
        </>
      ) : null}

      <Footer />
    </>
  );
};

export default CSRDetailPage;
