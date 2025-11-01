import TransitionVertical from "@/animations/TransitionVertical";
import React from "react";

interface TimelineEvent {
  year: string | number;
  title: string;
  side: "left" | "right";
  x: number;
  y: number;
}

const CurvedTimeline: React.FC = () => {
  const events: TimelineEvent[] = [
    {
      year: 1921,
      title: "Servants of the People Society founded by Lala Lajpat Rai",
      side: "left",
      x: 11,
      y: 817,
    },
    {
      year: 1953,
      title: "Institution registered under the Societies Registration Act",
      side: "left",
      x: 344,
      y: 573,
    },
    {
      year: "1970s-1980s",
      title: "Expansion of educational initiatives and vocational centers",
      side: "right",
      x: 885,
      y: 500,
    },
    {
      year: 2014,
      title: "Playful Minds Preschool founded to promote holistic early learning",
      side: "left",
      x: 620,
      y: 270,
    },
    {
      year: "present",
      title: " Continued partnership with schools, art foundations, and welfare organizations to expand access to education and culture",
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
        <div className="relative mx-auto max-w-4xl">
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
                        ...(event.year === "present" && {
                          right: "45px",
                          top: "10%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 2014 && {
                          left: "20px",
                          top: "1%",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === "1970s-1980s" && {
                          right: "0px",
                          bottom: "25px",
                          transform: "translateY(-50%)",
                        }),
                        ...(event.year === 1953 && {
                          bottom: "45%",
                          transform: "translateX(-50%)",
                          right: "25px",
                        }),
                        ...(event.year === 1921 && {
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
                        ...(event.year === 1953 && {
                          [isLeft ? "right" : "left"]: "50px",
                          bottom: "15px",
                          width: "250px",
                        }),
                        ...(event.year === 2014 && {
                          [isLeft ? "right" : "left"]: "30px",
                          bottom: "20px",
                          width: "350px",
                        }),
                        ...(event.year === "present" && {
                          [isLeft ? "right" : "left"]: "50px",
                          top: "-5px",
                          width: "350px",
                        }),
                        ...(event.year === "1970s-1980s" && {
                          [isLeft ? "right" : "left"]: "-65px",
                          top: "20px",
                          width: "250px",
                        }),
                        ...(event.year === 1921 && {
                          [isLeft ? "right" : "left"]: "-140px",
                          top: "30px",
                          width: "250px",
                        }),
                        ...(![1953, "1970s-1980s", 2014, "present", 1921].includes(event.year) && {
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
                                      <p className="text-xs text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aliquid voluptates error tempore perspiciatis impedit. Animi maxime sed vero qui.
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil expedita consequuntur totam est quibusdam quaerat inventore hic porro reprehenderit iste!
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
