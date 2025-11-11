import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { getCareerDetail } from "@/lib/sanityQueries";
import { CareerDetail } from "@/lib/types/careers";
import { notFound } from "next/navigation";
import Link from "next/link";
import CareerPortableText from "@/components/reusable/CareerPortableText";
import ApplyButton from "@/components/pagespecific/contact/ApplyButton";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const career: CareerDetail = await getCareerDetail(slug);

  if (!career) {
    notFound();
  }

  const jobSections = [
    {
      title: "The role",
      content: career.role,
    },
    {
      title: "Responsibilities",
      content: career.responsibilities,
    },
    {
      title: "Qualifications",
      content: career.qualifications,
    },
    {
      title: "Why join Hotz Group",
      content: career.whyJoinHotz,
    },
  ].filter((section) => section.content && section.content.length > 0);

  const formatType = (type: string) => {
    return type.charAt(0).toUpperCase() + type.slice(1).replace("-", " ");
  };

  const position = String(career.positionTitle || "the position");

  return (
    <>
      <Navbar />

      <div className="px-5 lg:px-20 mt-24">
        <h1>
          {career.department} / {formatType(career.type)}
        </h1>
        <div className="w-full  mt-10 ">
          <div className="w-full flex lg:flex-row flex-col gap-4 justify-between lg:items-center">
            <h1 className="text-3xl lg:text-5xl font-medium">
              {career.positionTitle}
            </h1>
            <ApplyButton key={position} positionTitle={position} />
          </div>
        </div>

        <div className="w-full flex flex-col gap-7 lg:mt-24 mt-10">
          {jobSections.map((section, index) => (
            <div key={index}>
              <div className="flex lg:flex-row flex-col justify-between gap-5 lg:gap-10">
                <div className="lg:w-1/3 text-xl font-medium">
                  {section.title}
                </div>

                <div className="lg:w-2/3 text-[#393939]">
                  <CareerPortableText value={section.content || []} />
                </div>
              </div>

              <div className="w-full h-px bg-[#E6E6E6] mt-5"></div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-10">
          <ApplyButton key={position} positionTitle={position} />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
