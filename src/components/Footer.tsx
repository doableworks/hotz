import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-footer text-center text-white py-16 px-10 mt-24 w-full flex items-start">
      <div className="w-1/4">
        <img src="/images/Hotz.png" alt="Logo" className="h-16 mb-4" />
      </div>
      <div className="w-2/4 flex justify-around mt-7 gap-16 text-sm">
        <div className="flex flex-col gap-2 items-start">
          <h1 className="text-white/70">Quick Links</h1>
          <h1>ABOUT US</h1>
          <h1>BUSINESS</h1>
          <h1>OUR TEAM</h1>
          <h1>CAREER</h1>
          <h1>NEWSROOM</h1>
        </div>

        <div className="flex flex-col gap-2 items-start pr-16">
          <h1 className=" text-white/70">Information</h1>
          <h1>SITEMAP</h1>
          <h1>TERMS AND CONDITIONS</h1>
          <h1>PRIVACY POLICY</h1>
        </div>
      </div>

      <div className="w-1/3 flex flex-col items-start text-sm mt-7">
        <h1 className="text-start">
          Be the first to know about our new <br></br>updates and announcements.
        </h1>

        <div className="flex justify-baseline mt-5 w-full py-2 pl-6 pr-2 border-white/10 rounded-full border-2 ">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" rounded-md w-full text-black placeholder:text-white/80"
          />
          <div className="bg-white px-6 py-4 rounded-full text-xs font-medium text-[#DB0A0A]">
            SUBSCRIBE
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
