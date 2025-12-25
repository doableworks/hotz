import TransitionVertical from "@/animations/TransitionVertical";
import React from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  side: "left" | "right";
  x: number;
  y: number;
}

const CurvedTimeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: "Early 1900's",
      title: "Hotels in Northern State in India",
      description:
        "Hotel development in Northern India - Hotel Cecil in Shimla, Wildflower Hall in Mashobra, Lauries in Agra and Delhi and Hotel Alasia in Kasauli.",
      side: "left",
      x: 11,
      y: 817,
    },
    {
      year: "1930's",
      title: "Air conditioning & refrigeration ventures",
      description:
        "Foray into HVAC with Durant, a partnership between the Durant and Jain families.",
      side: "right",
      x: 270,
      y: 817,
    },

    {
      year: "1930's",
      title: "Air conditioning & refrigeration ventures",
      description:
        "The Jain family, led by patriarch Rai Bahadur Phool Chand Jain, establishes the construction business for the construction of roads and aerodromes in various parts of India pre independence.",
      side: "left",
      x: 530,
      y: 817,
    },
    {
      year: "1940's",
      title: "Durant 'always, a fore-runner'",
      description: "Mahabir Steel Rolling Mills established in Delhi.",
      side: "right",
      x: 670,
      y: 770,
    },
    {
      year: "1952",
      title: "Hotz Hotels Private Limited",
      description: "Incorporated as Hotz Hotels Private Limited.",
      side: "right",
      x: 627,
      y: 660,
    },
    {
      year: "1980's",
      title: "New controlling shareholders",
      description:
        "The Jain family became controlling shareholders and consolidated all activities under the banner of the Hotz Group.",
      side: "left",
      x: 344,
      y: 573,
    },
    {
      year: "1986",
      title: "Industrial Gases division",
      description:
        "Established the Industrial Gases division with the Surajpur plant that supplied Oxygen, Nitrogen, Argon and other value-added products.",
      side: "left",
      x: 400,
      y: 500,
    },
    {
      year: "1990",
      title: "Financial services expansion",
      description:
        "Foray into Financial Services with Inter Corporate Deposits, Leasing and Hire Purchase and Bill Discounting.",
      side: "right",
      x: 550,
      y: 500,
    },

    {
      year: "1996",
      title: "Textile division established",

      description:
        "Established the Textile division at Greater Noida- one of the largest integrated facilities at that time covering various parts of the textile value chain including dyeing and processing, knitting and garmenting. ",
      side: "right",
      x: 885,
      y: 500,
    },
    {
      year: "1996",
      title: "Securities One - NSE Member",
      description:
        "Securities (One) India Limited, a Member of National Stock Exchange, and Invest (One)n India Limited were incorporated for a deeper foray into Financial Services.",
      side: "left",
      x: 800,
      y: 343,
    },
    {
      year: "1999",
      title: "Round-the-Clock Stores Limited",
      description:
        "Round-the-Clock Stores Limited was incorporated as the National Developer for Ruby Tuesday restaurants in India. Over time more than 75 restaurants under various global brands including Ruby Tuesday, Sbarro and Haagen Dazs, and home-grown concepts such as Mircheez, Mandarin Trail, Prego and Indus Grill were established nationwide. ",
      side: "left",
      x: 620,
      y: 270,
    },

    {
      year: "2007",
      title: "Art business establishment",
      description:
        "The art business was established under the Vistaar and Seven Art trademarks. In 2012 the Group acquired a significant majority stake in Gallery Nature Morte and a new joint venture entity, Nature Morte Art Limited, was incorporated. Today Nature Morte is India's leading contemporary art company representing India's iconic contemporary artists with galleries in Delhi and Mumbai.",
      side: "left",
      x: 820,
      y: 193,
    },
    {
      year: "2014",
      title: "Real estate warehousing, Samsung project",
      description:
        "The early education business under the Playful Minds brand was started in Delhi. ",
      side: "right",
      x: 880,
      y: 40,
    },
    {
      year: "2019",
      title: "Industrial real estate diversification",
      description:
        "The diversification into industrial real estate was initiated and one of India's largest Grade A warehouses was built by the company for the use of Samsung.",
      side: "left",
      x: 522,
      y: 11,
    },
  ];

  const exactPath =
    "M19 816H605.622C642.5 816 677.5 784.335 677.5 734.58C677.5 684.825 650 650.571 564.43 650.571H416.307C397.5 650.571 343 640 343 573C343 509.5 405 500.374 416.307 500.374H906.515C954.78 500.374 1005 480.465 1005 421.862C1005 348.61 926.487 343.736 844.519 343.736C778.946 343.736 790.222 343.736 769.557 343.736H698C669 343.736 620 324.6 620 273C620 221.4 665 193.5 698 193.5H739.5H797C859.5 193.5 903 150.5 903 98C903 20.5 813 11.8333 797 11H520";

  return (
    <div
      id="milestone"
      className="scroll-mt-20 w-full h-full bg-[#f3f3f3] pt-12 pb-10 lg:pb-44 px-4"
    >
      <div>
        <TransitionVertical>
          <h1 className="text-lg font-semibold text-center mb-10">
            MILESTONES
          </h1>
        </TransitionVertical>
      </div>

      <div className="relative hidden lg:block mx-auto w-full">
        <div className="relative mx-24" style={{ maxWidth: "900px" }}>
          <div
            className="relative"
            style={{
              width: "100%",
              paddingBottom: "81.5%",
              position: "relative",
            }}
          >
            <div className="absolute inset-0">
              <svg
                className="absolute inset-0 w-full h-full"
                width="1016"
                height="828"
                viewBox="0 0 1016 828"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d={exactPath}
                  stroke="#ACACAC"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  fill="none"
                />
              </svg>

              {events.map((event, index) => {
                const isLeft = event.side === "left";
                const xPercent = (event.x / 1016) * 100;
                const yPercent = (event.y / 828) * 100;

                return (
                  <div
                    key={index}
                    className="absolute"
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                    }}
                  >
                    {/* Red dot - centered at coordinates */}
                    <div
                      className="w-6 h-6 bg-[#DB0A0A] rounded-full shadow-lg ring-4 ring-white"
                      style={{
                        transform: "translate(-50%, -50%)",
                      }}
                    />

                    {/* Year - positioned separately */}
                    <div
                      className="absolute whitespace-nowrap"
                      style={{
                        ...(event.year === "2014" && {
                          right: "90%",
                          transform: "translateX(-50%)",
                          top: "-10px",
                        }),
                        ...(event.year === "2019" && {
                          right: "45px",
                          top: "10%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === "2007" && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === "1999" && {
                          left: "20px",
                          top: "1%",
                          transform: "translateY(-50%)",
                        }),
                        ...(["1996"].includes(event.year) && {
                          right: "0px",
                          bottom: "25px",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === "1990" && {
                          bottom: "30px",
                          left: "-80%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === "1986" && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === "1980's" && {
                          bottom: "45%",
                          transform: "translateX(-50%)",
                          right: "25px",
                        }),
                        ...(event.year === "1952" && {
                          left: "25px",
                          top: "2%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === "1940's" && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "40px",
                        }),
                        ...(event.year === "1930's" && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === "Early 1900's" && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          top: "15px",
                        }),
                      }}
                    >
                      <span className="text-[#DB0A0A] text-lg font-bold">
                        {event.year}
                      </span>
                    </div>

                    {/* Content box - positioned separately */}
                    <div
                      className={`absolute px-4$`}
                      style={{
                        ...(event.year === "1986" && {
                          [isLeft ? "right" : "left"]: "-70px",
                          bottom: "60px",
                          width: "250px",
                        }),
                        ...(event.year === "2007" && {
                          [isLeft ? "right" : "left"]: "-400px",
                          top: "-5px",
                          width: "400px",
                        }),
                        ...(event.year === "1940's" && {
                          [isLeft ? "right" : "left"]: "30px",
                          top: "-10px",
                          width: "250px",
                        }),
                        ...(event.year === "Early 1900's" && {
                          [isLeft ? "right" : "left"]: "-120px",
                          bottom: "50px",
                          width: "200px",
                        }),
                        ...(event.year === "1930's" && {
                          [isLeft ? "right" : "left"]: "-120px",
                          top: "30px",
                          width: "230px",
                        }),
                        ...(event.year === "1952" && {
                          [isLeft ? "right" : "left"]: "90px",
                          bottom: "-5px",
                          width: "150px",
                        }),
                        ...(event.year === "1980's" && {
                          [isLeft ? "right" : "left"]: "90px",
                          bottom: "15px",
                          width: "250px",
                        }),
                        ...(event.year === "1990" && {
                          [isLeft ? "right" : "left"]: "-50px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(event.year === "1999" && {
                          [isLeft ? "right" : "left"]: "30px",
                          bottom: "20px",
                          width: "350px",
                        }),
                        ...(event.year === "2019" && {
                          [isLeft ? "right" : "left"]: "90px",
                          top: "-10px",
                          width: "280px",
                        }),
                        ...(event.year === "2014" && {
                          [isLeft ? "right" : "left"]: "40px",
                          top: "-10px",
                          width: "250px",
                        }),
                        ...(["1996"].includes(event.year) && {
                          [isLeft ? "right" : "left"]: "-45px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(![
                          "1980's",
                          "1990",
                          "1986",
                          "2007",
                          "1940's",
                          "1930's",
                          "Early 1900's",
                          "1952",
                          "1996",
                          "1980's",
                          "1999",
                          "2014",
                          "2019",
                        ].includes(event.year) && {
                          [isLeft ? "right" : "left"]: "20px",
                          top: "-20px",
                          width: "230px",
                        }),
                      }}
                    >
                      <TransitionVertical>
                        <p className="text-xs text-black leading-relaxed">
                          {event.description}
                        </p>
                      </TransitionVertical>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden px-4">
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {events.map((event, index) => (
            <div key={index} className="relative pl-20 pb-12">
              <div className="absolute left-5 top-2 w-6 h-6 bg-[#DB0A0A] rounded-full shadow-lg ring-4 ring-white"></div>

              <div className="mb-2">
                <span className="text-[#DB0A0A] text-lg font-medium">
                  {event.year}
                </span>
              </div>

              <div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurvedTimeline;
