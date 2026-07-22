import ParallaxScroll from "@/animations/ParallaxWrapper";
import TransitionHorizontal from "@/animations/TransitionHorizontal";
import TransitionVertical from "@/animations/TransitionVertical";
import Footer from "@/components/Footer";
import Leaders from "@/components/Leaders";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/pagespecific/about-us/Timeline";
import VideoSection from "@/components/pagespecific/about-us/VideoSection";
import Stats from "@/components/Stats";
import Updates from "@/components/Updates";
import { getStats, getTeamLeaders } from "@/lib/sanityQueries";
import { Check } from "lucide-react";
import React from "react";

async function page() {
  const leaders = await getTeamLeaders();
  const values = [
    {
      id: 1,
      name: "Integrity",
      text: "Building trust through transparency, and accountability.",
      image: "/images/values1.png",
    },
    {
      id: 2,
      name: "Excellence",
      text: "Striving for the highest standards",
      image: "/images/values2.png",
    },
    {
      id: 3,
      name: "Innovation",
      text: "Striving for the highest standards.",
      image: "/images/values3.png",
    },
    {
      id: 4,
      name: "Impact",
      text: "Creating lasting value for people, partners, and communities.",
      image: "/images/values4.png",
    },
  ];

  const stats = await getStats();

  return (
    <>
      <div className="h-full flex flex-col">
        <Navbar />
        <div className="w-full h-16"></div>
        <VideoSection />
      </div>
      <TransitionVertical>
        <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 px-5 lg:px-10 pt-7 lg:pt-16 relative z-30 bg-white">
          <div className="w-full lg:w-1/2 text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
            A Century of Trust.
            <br /> A Future of Possibility.
          </div>
          <div className="w-full lg:w-1/2">
            The Hotz Group&apos;s journey began in the early 1900s, when Swiss
            founders introduced worldclass hospitality to India through hotels
            and resorts in Shimla, Delhi, Agra, Jaipur, and Kasauli. From its
            European-inspired roots, the Group has evolved into a diversified
            Indian enterprise built on trust, integrity, and innovation.
            <br></br>
            <br></br>Over the decades, Hotz has expanded across real estate and
            warehousing, financial services, and manufacturing businesses
            spanning steel, air conditioning and refrigeration, textiles, and
            industrial gases, alongside ventures in hospitality, retail food
            service, art, and education. Across every venture, the Group remains
            guided by a commitment to quality, long-term value, and purposeful
            growth - shaping experiences, environments, and opportunities that
            endure across generations.
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div
          id="story"
          className="scroll-mt-28 flex lg:flex-row flex-col my-7 lg:my-20 lg:h-96 relative z-30 bg-white"
        >
          <div className="lg:w-1/2 w-full">
            <img
              src="/images/about1.png"
              alt="About Us"
              className="w-full object-cover h-96"
            />
          </div>

          <div className=" lg:w-1/2 w-full min-h-96 px-7 py-5 text-white flex flex-col justify-center bg-[#BC1F1F]">
            <TransitionHorizontal>
              <h1 className="text-xl">OUR STORY</h1>
              <h1 className="text-white/60 mt-1">
                Incorporated as Hotz Hotels Private Limited in 1952, Hotz began
                with a strong foundation in hospitality before expanding into a
                diversified portfolio across financial services, manufacturing,
                retail food service, art, education, and real estate
                development. Over the decades, this ability to diversify and
                reinvent has defined the Group&apos;s journey, allowing Hotz to
                evolve with changing times while remaining anchored in trust,
                quality, and long-term value. <br></br>
                <br></br> Guided by a deep respect for people, partnerships, and
                performance, Hotz continues to build enterprises that serve both
                business and society. From advanced warehousing and industrial
                infrastructure to initiatives in education and the arts, the
                Group brings together commercial excellence and social
                responsibility. Today, Hotz is a future-ready enterprise -
                rooted in legacy, driven by innovation, and committed to
                creating meaningful impact across generations.
              </h1>
            </TransitionHorizontal>
          </div>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 px-5 lg:px-10 pb-10 relative z-30 bg-white">
          <div className="w-full lg:w-1/2 text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#3B2C89] via-[#F86565] to-[#F86565] bg-clip-text text-transparent">
            Corporate Philosophy.
          </div>
          <div className="w-full lg:w-1/2">
            At Hotz, progress begins with the belief that every generation must
            imagine further, learn continuously, and build with purpose. This
            philosophy has guided the Group for over a century, shaping our
            commitment to innovation, excellence, and the pursuit of higher
            standards in everything we do. <br></br>
            <br></br>Rooted in Swiss, British, Australian, and Indian
            influences, the Hotz Group brings together diverse cultures and
            perspectives into one cohesive enterprise. Established in the early
            1900s, Hotz has grown into a trusted name across its chosen fields,
            recognised for quality, reliability, and an enduring commitment to
            customer satisfaction.
          </div>
        </div>
      </TransitionVertical>

      <Timeline />

      <TransitionVertical>
        <div
          id="vision"
          className="scroll-mt-32 bg-linear-to-br from-[#DB0A0A] to-[#dd2c2c] px-5 lg:px-10 py-10"
        >
          <div className="w-full flex lg:flex-row flex-col justify-between items-start lg:gap-10">
            <div className="w-full lg:w-1/2">
              <h1 className="text-white text-2xl lg:text-4xl font-medium">
                Our Mission
              </h1>

              <h1 className="text-white/80 text-lg mt-3 font-light">
                Our mission reflects the values and commitments that guide every
                decision we make.
              </h1>
            </div>

            <div className="w-full lg:w-1/2  text-white mt-7">
              <div>
                <TransitionVertical>
                  <div className="flex items-center gap-5">
                    <Check color="#fff" />
                    <p>To be the preferred partner for our clients</p>
                  </div>
                </TransitionVertical>
                <div className="w-full h-px bg-[#fff]/50 my-5"></div>
              </div>
              <div>
                <TransitionVertical>
                  <div className="flex items-center gap-5">
                    <Check color="#fff" />
                    <p>
                      To create a workplace defined by respect, growth, and
                      excellence{" "}
                    </p>
                  </div>
                </TransitionVertical>
                <div className="w-full h-px bg-[#fff]/50 my-5"></div>
              </div>

              <div>
                <TransitionVertical>
                  <div className="flex items-center gap-5">
                    <Check color="#fff" />
                    <p>
                      To deliver sustainable returns and long-term value across
                      every venture
                    </p>
                  </div>
                </TransitionVertical>
              </div>
            </div>
          </div>

          {/* <div className="w-full h-px bg-white/60 my-7"></div>

          <div className="w-full">
            <h1 className="text-white text-2xl lg:text-4xl font-medium">
              Our Vision
            </h1>

            <h1 className="text-white/80 text-lg mt-3 font-light">
              There are plans under various stages of development for further
              expansion of existing ventures and for diversification into new
              verticals including establishing new manufacturing locations for
              new age products.
            </h1>
          </div> */}

          <div className="w-full h-px bg-white/70 my-10 lg:my-16"></div>

          <TransitionVertical>
            <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 relative z-30 ">
              <div className="w-full lg:w-1/2 text-2xl lg:text-4xl font-semibold text-white">
                Customer First.<br></br> Quality Always.
              </div>
              <div className="w-full lg:w-1/2 text-white">
                Our customers are at the heart of our pursuit of quality. Across
                every product, service, and interaction, we are committed to
                delivering excellence with consistency, care, and integrity.
                <br></br>
                <br></br>We hold ourselves to high standards because we believe
                lasting relationships are built through reliability,
                responsiveness, and trust.
                <br></br>
                <br></br>
                Guided by this belief, we remain committed to creating value for
                our customers and ensuring their satisfaction remains central to
                everything we do.
              </div>
            </div>
          </TransitionVertical>

          <div className="w-full">
            <div className="w-full h-px bg-white/70 my-10 lg:my-16"></div>
          </div>

          <TransitionVertical>
            <div className="flex lg:flex-row flex-col gap-5 lg:gap-12 pb-10 relative z-30 ">
              <div className="w-full lg:w-1/2 text-2xl lg:text-4xl font-semibold text-white">
                Building a <br />
                Sustainable Future
              </div>
              <div className="w-full lg:w-1/2 text-white">
                At Hotz, we believe environmental responsibility is essential to
                long-term progress. We are committed to protecting and
                preserving our natural surroundings through responsible
                practices across our businesses. <br></br>
                <br></br>At Hotz, we believe environmental responsibility is
                essential to long-term progress. We are committed to protecting
                and preserving our natural surroundings through responsible
                practices across our businesses.
              </div>
            </div>
          </TransitionVertical>
        </div>
      </TransitionVertical>

      <TransitionVertical>
        <div className="text-center text-xl font-semibold mt-12 mb-7">
          CORE VALUES
        </div>

        {/* 💻 Desktop View */}
        <div className="hidden md:flex px-10 gap-7">
          {values.map((value) => (
            <div
              key={value.id}
              className="flex flex-col justify-start gap-14 w-1/4 p-5 h-64 border border-black/20"
            >
              <img
                src={value.image}
                alt={value.name}
                className="w-fit h-16 object-cover"
              />
              <TransitionHorizontal>
                <h1 className="text-xl mb-1">{value.name}</h1>
                <h1 className="text-[#727272]">{value.text}</h1>
              </TransitionHorizontal>
            </div>
          ))}
        </div>

        {/* 📱 Mobile View */}
        <div className="scroll-mt-20 flex md:hidden overflow-x-auto gap-5 px-5 no-scrollbar scroll-smooth snap-x snap-mandatory">
          {values.map((value) => (
            <div
              key={value.id}
              className="w-[80%] snap-center flex-shrink-0 border border-black/20 p-5 h-64 flex flex-col justify-between"
            >
              <img
                src={value.image}
                alt={value.name}
                className="w-16 object-cover"
              />
              <TransitionHorizontal>
                <h1 className="text-lg mb-1">{value.name}</h1>
                <h1 className="text-[#727272] text-sm">{value.text}</h1>
              </TransitionHorizontal>
            </div>
          ))}
        </div>
      </TransitionVertical>

      <img
        src="/images/about2.png"
        alt="Footer Image"
        className="w-full h-96 object-cover mt-10"
      />

      <div className="my-5 relative bg-white z-30 pt-5 lg:pt-16">
        <div className="text-center text-xl font-semibold mb-2">
          Empowering Through Education
        </div>

        <div className="px-5 flex justify-center w-full text-center">
          <div className="max-w-3xl text-[#727272]">
            At Hotz, we believe meaningful progress begins with access to
            education. Through scholarships, school support, digital learning
            infrastructure, and vocational training, we aim to create
            opportunities that help students learn, grow, and reach their full
            potential.
          </div>
        </div>
        <TransitionVertical>
          <div className="flex lg:flex-row flex-col justify-center mt-16 gap-7 lg:gap-24">
            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img
                src="/images/book-check.png"
                alt="Book Check"
                className="w-11"
              />

              <h1>
                Scholarships for <br /> underprivileged students
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img
                src="/images/monitor.png"
                alt="Book Check"
                className="w-11"
              />

              <h1>
                Support for schools and <br></br>digital learning infrastructure
              </h1>
            </div>

            <div className="flex flex-col justify-center items-center text-center gap-5">
              <img src="/images/person.png" alt="Book Check" className="w-11" />

              <h1>
                Vocational training & <br></br>skill-building workshops
              </h1>
            </div>
          </div>
        </TransitionVertical>
      </div>

      <div
        id="chairmans-message"
        className="scroll-mt-20 mt-16 lg:mt-24 flex lg:flex-row flex-col justify-between items-center px-10"
      >
        <div className="w-full lg:w-2/5 flex flex-col justify-start items-start">
          <img src="/images/icon.png" alt="About Us" className="w-20 lg:w-24" />
          <TransitionVertical>
            <h1 className="text-2xl font-semibold mt-5">
              At Hotz Group, our foundation has always been the trust placed in
              us by our stakeholders. Over the years, we have grown not only as
              a business, but as a builder of enduring relationships, lasting
              legacies, and new standards of excellence.
            </h1>
          </TransitionVertical>

          <TransitionVertical>
            <h1 className=" text-[#727272] mt-5">- Chairman</h1>
          </TransitionVertical>
        </div>

        <div className="relative w-full lg:w-1/2 flex lg:justify-center lg:items-center py-10">
          <TransitionVertical>
            <img
              src="/images/aboutvector.png"
              alt="Decorative vector"
              className="absolute top-0 right-0 w-3/4 lg:w-1/2 z-10"
            />
            <img
              src="/images/chairman.png"
              alt="Chairman"
              className="relative lg:ml-24 w-full lg:w-[65%] z-20"
            />
          </TransitionVertical>
        </div>
      </div>

      <div>
        <Leaders leaders={leaders} />
      </div>

      {/* <Stats statsData={stats} /> */}

      {/* <div>
        <Updates />
      </div> */}
      <Footer />
    </>
  );
}

export default page;
