import Navbar from "@/components/Navbar";
import React from "react";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-80 bg-gray-400">
        <img src="/images/contact.png" className="h-80 w-full object-cover" />
      </div>

      <div className="w-full px-5 lg:px-10 py-7 lg:py-16 flex lg:flex-row flex-col">
        <div className="lg:w-1/2 w-full text-3xl lg:text-4xl font-semibold">
          Contact Us
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-7 mt-7 lg:mt-0">
          <div className=" flex gap-5 items-start">
            <MapPin
              strokeWidth={1}
              color="#727272"
              size={20}
              className="mt-1"
            />
            <div>
              <h1>703 Chiranjiv Tower, 43 Nehru Place New Delhi 110019, IN</h1>
              <h1 className="text-[#DB0A0A] flex gap-2 mt-2 items-center">
                Get directions <ArrowRight strokeWidth={1} size={16} />
              </h1>
            </div>
          </div>
          <div className=" flex gap-5 items-start">
            <Phone strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <h1>+91 11 2644 7971</h1>
            </div>
          </div>

          <div className="h-px w-full bg-[#E6E6E6]"></div>

          <div className=" flex gap-5 items-start">
            <MapPin
              strokeWidth={1}
              color="#727272"
              size={20}
              className="mt-1"
            />
            <div>
              <h1>
                11th Floor, Eros Corporate Tower, Nehru Place, New Delhi 110019,
                IN
              </h1>
              <h1 className="text-[#DB0A0A] flex gap-2 mt-2 items-center">
                Get directions <ArrowRight strokeWidth={1} size={16} />
              </h1>
            </div>
          </div>
          <div className=" flex gap-5 items-start">
            <Phone strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <h1>+91 11 4315 1943</h1>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
