import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <div className="w-full h-80 bg-gray-400">
        <img src="/images/contact.png" className="h-80 w-full" />
      </div>
    </div>
  );
};

export default page;
