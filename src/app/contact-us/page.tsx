import Navbar from "@/components/Navbar";
import React from "react";
import { MapPin, ArrowRight, Phone, Mail } from "lucide-react";
import Footer from "@/components/Footer";
import InquiryFeedbackForm from "@/components/pagespecific/contact/InquiryFeedbackForm";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-[80vh] md:h-80 bg-gray-400">
        <img
          src="/images/contactMobile.jpg"
          className="h-full w-full object-cover md:hidden"
        />
                <img
          src="/images/Contact-us.png"
          className="h-80 w-full object-cover hidden md:block"
        />
      </div>

      <div className="w-full px-5 lg:px-10 py-10 flex lg:flex-row flex-col gap-7">
        <div className="lg:w-1/2 w-full flex flex-col mt-7 lg:mt-0">
          <h1 className="text-2xl mb-5 font-medium">REGISTERED OFFICE</h1>
          <div className=" flex gap-5 items-start">
            <MapPin
              strokeWidth={1}
              color="#727272"
              size={20}
              className="mt-1"
            />
            <div>
              <h1>703 Chiranjiv Tower, 43 Nehru Place New Delhi 110019, IN</h1>
            </div>
          </div>

          <div className=" flex gap-5 items-start mt-3">
            <Phone strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <h1>+91 11 2644 7971</h1>
            </div>
          </div>

          <div className=" flex gap-5 items-start mt-3">
            <Mail strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <a
                href="mailto:info@hotzinc.com"
                className="text-black font-medium ml-1"
              >
                info@hotzinc.com
              </a>
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6669218211805!2d77.2500906!3d28.549729599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38c302afd73%3A0x429ab85324f6cf1b!2s43%20Chiranjiv%20Tower!5e0!3m2!1sen!2sin!4v1761926454808!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, marginTop: 32 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="lg:w-1/2 w-full">
          <h1 className="text-2xl mb-5 font-medium">CORPORATE OFFICE</h1>

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
            </div>
          </div>
          <div className=" flex gap-5 items-start mt-3">
            <Phone strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <h1>+91 11 4315 1943</h1>
            </div>
          </div>
          <div className=" flex gap-5 items-start mt-3">
            <Mail strokeWidth={1} color="#727272" size={20} className="mt-1" />
            <div>
              <a
                href="mailto:info@hotz.in"
                className="text-black font-medium ml-1"
              >
                info@hotz.in
              </a>
            </div>
          </div>

          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.6468303241813!2d77.2518754!3d28.5503333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3cf167bfa21%3A0xdbae6c344dc8dc02!2sEros%20Corporate%20Tower!5e0!3m2!1sen!2sin!4v1761926551687!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, marginTop: 32 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="w-full px-5 lg:px-10 py-10 flex justify-start">
        <InquiryFeedbackForm />
      </div>

      <Footer />
    </div>
  );
};

export default page;
