import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  const jobDetails = [
    {
      id: 1,
      title: "The role",
      description:
        "As a Graphic Designer, you will play a pivotal role in crafting intuitive and user-centric experiences for our software products. You will collaborate closely with product managers, engineers, and other stakeholders to translate user needs into beautiful and functional interfaces. Ultimately, you will be responsible for ensuring our software delivers a seamless and delightful experience for our clients, helping us achieve our customer growth goals.",
    },
    {
      id: 2,
      title: "Responsibilities",
      description: [
        "Conduct user research to understand user needs, pain points, and expectations.",
        "Collaborate with product managers and engineers to gather and analyze user requirements.",
        "Develop user personas, journey maps, and wireframes to define user flows and interaction models.",
        "Design visually appealing and user-friendly UI elements, including menus, buttons, icons, and navigation systems.",
      ],
    },
    {
      id: 3,
      title: "Qualifications",
      description: [
        "3+ years of experience as a Graphic Designer or similar role.",
        "Proven track record of successfully designing and launching user-friendly software products.",
        "Strong understanding of user-centered design principles and methodologies.",
        "Proficiency in wireframing and prototyping tools (e.g., Figma, XD, InVision).",
        "Excellent visual design skills with a keen eye for detail and aesthetics.",
        "Strong communication, collaboration, and problem-solving skills.",
        "Ability to work independently and manage multiple projects effectively.",
      ],
    },

    {
      id: 4,
      title: "Why join Hotz Group",
      description: [
        "Make a real impact: Contribute to impactful visuals that drive brand success.",
        "Thrive in a creative hub: Collaborate in a stimulating environment with passionate individuals.",
        "Continuous learning: Hone your skills through challenging projects and development opportunities.",
        "Embrace a dynamic culture: Enjoy a collaborative, supportive team that values creativity and excellence.",
        "Competitive compensation & benefits: Includes flexible hours, unlimited leaves, and professional development.",
      ],
    },
  ];

  return (
    <>
      <Navbar />

      <div className="px-5 lg:px-20 mt-24">
        <h1>Account / Full-time</h1>
        <div className="w-full text-3xl lg:text-6xl font-medium ">
          <div className="w-full flex lg:flex-row flex-col justify-between lg:items-center">
            <h1>Graphic Designer</h1>
            <div className="flex justify-center mt-5 lg:mt-10 px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm">
              APPLY NOW
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-7 lg:mt-24 mt-10">
          {jobDetails.map((section) => (
            <div key={section.id}>
              <div className="flex lg:flex-row flex-col justify-between gap-5 lg:gap-10">
                <div className="lg:w-1/3 text-xl font-medium">
                  {section.title}
                </div>

                <div className="lg:w-2/3 text-[#393939]">
                  {Array.isArray(section.description) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{section.description}</p>
                  )}
                </div>
              </div>

              <div className="w-full h-px bg-[#E6E6E6] mt-5"></div>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-end mt-10">
          <div className="flex justify-end px-7 py-4 rounded-full bg-[#B9041A] text-white text-sm">
            APPLY NOW
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
