import TransitionVertical from "@/animations/TransitionVertical";
import React from "react";

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  side: "left" | "right";
  x: number;
  y: number;
}

const CurvedTimeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: 1900,
      title: "Hotels in Northern State in India",
      description:
        "Hotels Cecil in Shimla, Wildflower Hall in Mashobra, Gables in Agra and Alasia in Kasauli.",
      side: "left",
      x: 11,
      y: 817,
    },
    {
      year: 1930,
      title: "Air conditioning & refrigeration ventures",
      description:
        "The Hotz/Durant family in the air conditioning and refrigeration space.",
      side: "left",
      x: 220,
      y: 817,
    },
    {
      year: 1950,
      title: "Durant 'always, a fore-runner'",
      description:
        "In the early 1930 a major player in the refrigeration and air-conditioning industry.",
      side: "left",
      x: 440,
      y: 817,
    },
    {
      year: 1952,
      title: "Hotz Hotels Private Limited",
      description: "Hotz Hotels Private Limited was incorporated.",
      side: "right",
      x: 677,
      y: 731,
    },
    {
      year: 1980,
      title: "New controlling shareholders",
      description: "The Jain family became controlling shareholders.",
      side: "left",
      x: 344,
      y: 573,
    },
    {
      year: 1986,
      title: "Industrial Gases division",
      description:
        "Established the Industrial Gases division, a leader supplying Oxygen, Nitrogen, Argon and Helium.",
      side: "left",
      x: 400,
      y: 500,
    },
    {
      year: 1990,
      title: "Financial services expansion",
      description:
        "Into Inter Corporate Deposits, Leasing and Hire Purchase, Bill Discounting.",
      side: "right",
      x: 550,
      y: 500,
    },

    {
      year: 1996,
      title: "Textile division established",

      description:
        "One of the largest state-of-the-art Yarn Dyeing and Processing plant, Cotton Knitted Fabric, Fabric Dyeing Machines.",
      side: "right",
      x: 885,
      y: 500,
    },
    {
      year: 1996,
      title: "Securities One - NSE Member",
      description:
        "Member of National Stock Exchange for Securities Brokerage and Portfolio Management.",
      side: "left",
      x: 800,
      y: 343,
    },
    {
      year: 1999,
      title: "Round-the-Clock Stores Limited",
      description:
        "Franchise chain of American Restaurant Ruby Tuesday, along with own brands - Mandarin Trail, Mandarin Express, Haagen Dazs, Ristorante Prego and Indus Grill.",
      side: "left",
      x: 620,
      y: 270,
    },

    {
      year: 2007,
      title: "Art business establishment",
      description:
        "Established under Vistaar and Seven Art trademarks. In 2012 acquired majority stake in Gallery Nature Morte, India's leading contemporary art company.",
      side: "left",
      x: 820,
      y: 193,
    },
    {
      year: 2012,
      title: "Real estate warehousing, Samsung project",
      description:
        "A future-ready warehouse 5,75,000 sq. ft. in Greater Noida.",
      side: "right",
      x: 880,
      y: 40,
    },
    {
      year: 2019,
      title: "Industrial real estate diversification",
      description:
        "Built one of India's largest Grade A warehouses for Samsung Electronics, continuing to identify more opportunities in this sector.",
      side: "left",
      x: 522,
      y: 11,
    },
  ];

  const exactPath =
    "M19 816H605.622C642.5 816 677.5 784.335 677.5 734.58C677.5 684.825 650 650.571 564.43 650.571H416.307C397.5 650.571 343 640 343 573C343 509.5 405 500.374 416.307 500.374H906.515C954.78 500.374 1005 480.465 1005 421.862C1005 348.61 926.487 343.736 844.519 343.736C778.946 343.736 790.222 343.736 769.557 343.736H698C669 343.736 620 324.6 620 273C620 221.4 665 193.5 698 193.5H739.5H797C859.5 193.5 903 150.5 903 98C903 20.5 813 11.8333 797 11H520";

  return (
    <div className="w-full h-full bg-[#f3f3f3] pt-12 pb-10 lg:pb-44 px-4">
      <div>
        <TransitionVertical>
          <h1 className="text-lg font-semibold text-center my-5">
            OUR JOURNEY THROUGH TIME
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
                        ...(event.year === 2012 && {
                          left: "-70%",
                          transform: "translateX(-50%)",
                          top: "20px",
                        }),
                        ...(event.year === 2019 && {
                          right: "45px",
                          top: "10%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 2007 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === 1999 && {
                          left: "20px",
                          top: "1%",
                          transform: "translateY(-50%)",
                        }),
                        ...([1996].includes(event.year) && {
                          right: "0px",
                          bottom: "25px",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1990 && {
                          bottom: "30px",
                          left: "-80%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1986 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === 1980 && {
                          bottom: "45%",
                          transform: "translateX(-50%)",
                          right: "25px",
                        }),
                        ...(event.year === 1952 && {
                          left: "25px",
                          top: "2%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1950 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "40px",
                        }),
                        ...(event.year === 1930 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          top: "15px",
                        }),
                        ...(event.year === 1900 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
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
                        ...(event.year === 1986 && {
                          [isLeft ? "right" : "left"]: "-120px",
                          bottom: "70px",
                          width: "250px",
                        }),
                        ...(event.year === 2007 && {
                          [isLeft ? "right" : "left"]: "-350px",
                          top: "10px",
                          width: "350px",
                        }),
                        ...(event.year === 1950 && {
                          [isLeft ? "right" : "left"]: "-140px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(event.year === 1900 && {
                          [isLeft ? "right" : "left"]: "-140px",
                          top: "30px",
                          width: "250px",
                        }),
                        ...(event.year === 1930 && {
                          [isLeft ? "right" : "left"]: "-150px",
                          bottom: "50px",
                          width: "250px",
                        }),
                        ...(event.year === 1952 && {
                          [isLeft ? "right" : "left"]: "90px",
                          bottom: "-15px",
                          width: "250px",
                        }),
                        ...(event.year === 1980 && {
                          [isLeft ? "right" : "left"]: "50px",
                          bottom: "15px",
                          width: "250px",
                        }),
                        ...(event.year === 1990 && {
                          [isLeft ? "right" : "left"]: "-80px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(event.year === 1999 && {
                          [isLeft ? "right" : "left"]: "30px",
                          bottom: "20px",
                          width: "350px",
                        }),
                        ...(event.year === 2019 && {
                          [isLeft ? "right" : "left"]: "30px",
                          top: "-10px",
                          width: "350px",
                        }),
                        ...(event.year === 2012 && {
                          [isLeft ? "right" : "left"]: "40px",
                          top: "-10px",
                          width: "250px",
                        }),
                        ...([1996].includes(event.year) && {
                          [isLeft ? "right" : "left"]: "-65px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(![
                          1980, 1990, 1986, 2007, 1950, 1930, 1900, 1952, 1996,
                          1980, 1999, 2012, 2019,
                        ].includes(event.year) && {
                          [isLeft ? "right" : "left"]: "20px",
                          top: "-20px",
                          width: "230px",
                        }),
                      }}
                    >
                      <TransitionVertical>
                      <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                        {event.title}
                      </h3>
                      </TransitionVertical>
                      <TransitionVertical>
                      <p className="text-xs text-gray-600 leading-relaxed">
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
                <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                  {event.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
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
