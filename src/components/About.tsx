import React from "react";

const About = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse lg:gap-32 w-full items-center bg-[#BC1F1F] py-10 px-5">
      <img
        src="/images/VectorH.png"
        alt="About Image"
        className="hidden lg:flex right-0 h-72 lg:h-96"
      />
      <div>
        <h1 className="text-white text-2xl lg:text-3xl font-light w-4/5">
          Since 1900, Hotz Group has been at the heart of growth and
          transformation delivering trust, innovation, and impact across India
          and beyond.
        </h1>

        <button className="mt-12 px-8 py-4 bg-white text-[#DB0A0A] rounded-full hover:bg-opacity-80 transition font-semibold text-sm">
          DISCOVER OUR STORY
        </button>
      </div>
    </div>
  );
};

export default About;
