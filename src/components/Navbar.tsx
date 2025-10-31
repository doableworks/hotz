"use client";
import React, { useState, useEffect } from "react";
import { Search, Phone, ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="bg-white w-full py-2 px-5 lg:px-10 flex justify-between items-center z-50">
      <div className="w-1/3">
        <Link href="/">
          <img src="/images/logo.png" alt="Logo" className="h-12" />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-7 w-1/3 text-xs">
        <Link href="/about-us">ABOUT</Link>
        <Link href="/business" className="flex items-center gap-1 ">
          BUSINESS
          <ChevronDown color="#2B2B2B" size={20} strokeWidth="1.5" />{" "}
        </Link>
        <Link href="/newsroom">NEWSROOM</Link>
        <Link href="/career">CAREER</Link>
        <Link href="/contact-us">CONTACT US</Link>
      </div>
      <div className="hidden md:flex items-center justify-end gap-5 w-1/3">
        <Search size={20} color="#2B2B2B" strokeWidth="1" />
        <Phone size={20} color="#2B2B2B" strokeWidth="1" />
      </div>

      <div className="flex md:hidden items-center">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={20} color="#2B2B2B" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed w-full inset-0 bg-white/20 backdrop-blur-xl z-50 flex flex-col items-center py-4 gap-3 animate-slideDown overflow-y-hidden">
          <div className="flex justify-end items-center w-full px-5 py-2">
            <button onClick={() => setIsOpen(false)}>
              <X size={20} color="#2B2B2B" />
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-5 mt-2 text-xs text-[#2B2B2B]">
            <Link href="/about-us" onClick={() => setIsOpen(false)}>
              ABOUT
            </Link>
            <Link href="/business" className="flex items-center gap-1">
              BUSINESS <ChevronDown size={18} strokeWidth="1" />
            </Link>
            <Link href="/newsroom" onClick={() => setIsOpen(false)}>
              NEWSROOM
            </Link>
            <Link href="/career" onClick={() => setIsOpen(false)}>
              CAREER
            </Link>
            <Link href="/contact-us" onClick={() => setIsOpen(false)}>
              CONTACT US
            </Link>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center justify-center gap-8 mt-4">
            <Search size={22} color="#2B2B2B" strokeWidth="1" />
            <Phone size={22} color="#2B2B2B" strokeWidth="1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
