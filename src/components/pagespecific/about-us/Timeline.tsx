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
      title: "Hotels in Shimla, Mashobra, Agra, Kasauli",
      description:
        "Kasauli hotels combining peace, nature, and curated luxury.",
      side: "left",
      x: 11,
      y: 817,
    },
    {
      year: 1930,
      title: "Air conditioning & refrigeration ventures",
      description: "From cooling systems to refrigeration infrastructure.",
      side: "left",
      x: 329,
      y: 817,
    },
    {
      year: 1950,
      title: "Hot'z Hotels incorporation",
      description: "Our commitment to hospitality and service excellence.",
      side: "right",
      x: 677,
      y: 731,
    },
    {
      year: 1980,
      title: "Industrial gases, textiles, leasing & finance",
      description:
        "Delivering reliable solutions and gas solutions for diverse industries.",
      side: "left",
      x: 398,
      y: 503,
    },
    {
      year: 1990,
      title: "NSE membership, hospitality expansion",
      description: "NSE-backed commitment to sustainable growth.",
      side: "right",
      x: 930,
      y: 498,
    },
    {
      year: 1995,
      title: "Real estate warehousing, Samsung project",
      description:
        "A future-ready warehouse spanning 5,75,000 sq. ft. in Greater Noida.",
      side: "right",
      x: 899,
      y: 122,
    },
    {
      year: 2000,
      title: "Real estate warehousing, Samsung project",
      description:
        "A future-ready warehouse 5,75,000 sq. ft. in Greater Noida.",
      side: "left",
      x: 522,
      y: 11,
    },
  ];

  const exactPath =
    "M19 816H605.622C642.5 816 677.5 784.335 677.5 734.58C677.5 684.825 650 650.571 564.43 650.571H416.307C397.5 650.571 343 640 343 573C343 509.5 405 500.374 416.307 500.374H906.515C954.78 500.374 1005 480.465 1005 421.862C1005 348.61 926.487 343.736 844.519 343.736C778.946 343.736 790.222 343.736 769.557 343.736H698C669 343.736 620 324.6 620 273C620 221.4 665 193.5 698 193.5H739.5H797C859.5 193.5 903 150.5 903 98C903 20.5 813 11.8333 797 11H520";

  return (
    <div className="w-full h-full bg-[#f3f3f3] pt-12 pb-10 lg:pb-44 lg:px-20 ">
      <div>
        <h1 className="text-lg font-semibold text-center lg:my-5 mb-7 lg:mb-20">
          OUR JOURNEY THROUGH TIME
        </h1>
      </div>

      {/* Desktop/Tablet - Curved Timeline */}
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
                        ...(event.year === 2000 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          top: "20px",
                        }),
                        ...(event.year === 1995 && {
                          right: "45px",
                          top: "10%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1990 && {
                          right: "0px",
                          bottom: "30px",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1980 && {
                          left: "10%",
                          transform: "translateX(-50%)",
                          bottom: "45px",
                        }),
                        ...(event.year === 1950 && {
                          right: "45px",
                          top: "10%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1930 && {
                          left: "50%",
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
                      className={`absolute px-4 border-l-4${
                        isLeft ? "text-right" : "text-left"
                      }`}
                      style={{
                        ...(event.year === 1980 && {
                          [isLeft ? "right" : "left"]: "-120px",
                          bottom: "90px",
                          width: "250px",
                        }),
                        ...(event.year === 1930 && {
                          [isLeft ? "right" : "left"]: "-140px",
                          top: "60px",
                          width: "250px",
                        }),
                        ...(event.year === 1900 && {
                          [isLeft ? "right" : "left"]: "-190px",
                          bottom: "80px",
                          width: "250px",
                        }),
                        ...(event.year === 1990 && {
                          [isLeft ? "right" : "left"]: "-30px",
                          top: "40px",
                          width: "250px",
                        }),
                        ...(event.year !== 1980 &&
                          event.year !== 1930 &&
                          event.year !== 1900 &&
                          event.year !== 1990 && {
                            [isLeft ? "right" : "left"]: "20px",
                            top: "-20px",
                            width: "230px",
                          }),
                      }}
                    >
                      <h3 className="text-sm font-bold text-gray-900 mb-2 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile - Straight Vertical Timeline */}
      <div className="lg:hidden px-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Events */}
          {events.map((event, index) => (
            <div key={index} className="relative pl-20 pb-1">
              {/* Red dot */}
              <div className="absolute left-5 top-1 w-6 h-6 bg-[#DB0A0A] rounded-full shadow-lg ring-4 ring-white"></div>

              {/* Year */}
              <div className="">
                <span className="text-[#DB0A0A] text-lg font-bold">
                  {event.year}
                </span>
              </div>

              {/* Content */}
              <div className="rounded-lg py-4 ">
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
