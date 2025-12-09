import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getCSRDetailBySlug } from "@/data/csrEntries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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

      <TransitionVertical>
        <div className="w-full px-5 lg:px-10 ">
          <h1 className="text-2xl lg:text-4xl font-medium mt-8 lg:mt-0">
            Overview
          </h1>
          <p className="mt-3 text-[#727272] whitespace-pre-line">
            {entry.overview}
          </p>
        </div>
      </TransitionVertical>

      {entry.projectNote ? (
        <TransitionVertical>
          <div className="w-full px-5 lg:px-10 mt-8">
            <h2 className="text-2xl lg:text-4xl font-medium">Our Project</h2>
            <p className="mt-3 text-[#727272] whitespace-pre-line">
              {entry.projectNote}
            </p>
          </div>
        </TransitionVertical>
      ) : null}

      {entry.institutionalBackground ? (
        <TransitionVertical>
          <div className="w-full px-5 lg:px-10 mt-8">
            <h2 className="text-2xl lg:text-4xl font-medium ">
              Institutional Background
            </h2>
            <p className="mt-3 text-[#727272] whitespace-pre-line">
              {entry.institutionalBackground}
            </p>
          </div>
        </TransitionVertical>
      ) : null}

      <Footer />
    </>
  );
};

export default CSRDetailPage;
