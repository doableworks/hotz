import React from "react";
import { Search, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full py-2 px-10 flex justify-between items-center">
      <div className="w-1/3">
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </Link>
      </div>
      <div className="flex items-center justify-center gap-7 w-1/3 text-xs">
        <Link href="/about-us">ABOUT</Link>
        <h1 className="flex items-center gap-1 ">
          BUSINESS <ChevronDown color="#2B2B2B" size={20} strokeWidth="1.5" />{" "}
        </h1>
        <h1>NEWSROOM</h1>
        <Link href="/career">CAREER</Link>
      </div>
      <div className="flex items-center justify-end gap-5 w-1/3">
        <Search size={20} color="#2B2B2B" strokeWidth="1" />
        <Phone size={20} color="#2B2B2B" strokeWidth="1" />
      </div>
    </div>
  );
};

export default Navbar;
