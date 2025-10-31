import React from "react";
import { Instagram, Youtube, Facebook } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-footer text-center text-white pt-7 lg:pt-16 pb-5 lg:pb-5 px-5 lg:px-10 mt-24">
      <div className="w-full flex lg:flex-row flex-col items-start">
        <div className="w-full lg:w-1/4">
          <img src="/images/footerlogo1.png" alt="Logo" className="h-24 mb-4" />
        </div>

        <div className="flex w-full lg:hidden flex-col items-start text-sm my-3">
          <h1 className="text-start">
            Be the first to know about our new <br></br>updates and
            announcements.
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
        <div className="w-full lg:w-2/4 flex lg:flex-row flex-col justify-around mt-7 lg:mt-7 lg:gap-16 gap-10 text-sm">
          <div className="flex flex-col gap-2 items-start">
            <h1 className="text-white/70">Quick Links</h1>
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <Link href="/business">Business</Link>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/career">Career</Link>
            <Link href="/newsroom">Newsroom</Link>
          </div>

          <div className="flex flex-col gap-2 items-start pr-16">
            <h1 className=" text-white/70">Information</h1>
            <h1>Sitemap</h1>
            <h1>Terms and Conditions</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>

        <div className="hidden w-1/3 lg:flex flex-col items-start text-sm mt-7">
          <h1 className="text-start">
            Be the first to know about our new <br></br>updates and
            announcements.
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

      <div className="mt-7">
        <div className="w-full h-px bg-white/20"></div>

        <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center text-sm mt-5">
          <h1 className="text-white/80 text-left">
            Copyright@2025 Hotz group all rights reserved
          </h1>

          <div className="flex items-center gap-5 lg:mt-0 mt-5">
            <Instagram />
            <Youtube />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
