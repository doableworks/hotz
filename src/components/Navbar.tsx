"use client";
import React, { useState, useEffect, memo } from "react";
import { Search, Phone, ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const page = usePathname();

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
    <div className="fixed top-0 bg-white w-full py-2 px-5 lg:px-10 flex justify-between items-center z-50">
      <div className="w-1/3">
        <Link href="/">
          <img src="/images/HotzLogo.png" alt="Logo" className="h-12" />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-7 w-full text-xs">
        <Link
          href="/about-us"
          className={page === "/about-us" ? "text-red-600" : ""}
        >
          ABOUT
        </Link>
        <Link
          href="/business"
          className={`flex items-center gap-1 ${
            page === "/business" ? "text-red-600" : ""
          }`}
        >
          BUSINESS
          {/* <ChevronDown color="#2B2B2B" size={20} strokeWidth="1.5" />{" "} */}
        </Link>
        <Link
          href="/newsroom"
          className={page === "/newsroom" ? "text-red-600" : ""}
        >
          NEWSROOM
        </Link>
        <Link
          href="/career"
          className={page === "/career" ? "text-red-600" : ""}
        >
          CAREER
        </Link>
        <Link
          href="/contact-us"
          className={page === "/contact-us" ? "text-red-600" : ""}
        >
          CONTACT US
        </Link>
        <Link href="/csr" className={page === "/csr" ? "text-red-600" : ""}>
          CSR
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-end gap-5 w-1/3">
        {/* <Search size={20} color="#2B2B2B" strokeWidth="1" />
        <Phone size={20} color="#2B2B2B" strokeWidth="1" /> */}
      </div>

      <div className="flex md:hidden items-center">
        <button onClick={() => setIsOpen(true)}>
          <Menu size={20} color="#2B2B2B" />
        </button>
      </div>

      {isOpen && (
        <div className="fixed w-full inset-0 bg-white/40 backdrop-blur-xl z-50 flex flex-col items-center py-4 gap-3 animate-slideDown overflow-y-hidden">
          <div className="flex justify-end items-center w-full px-5 py-2">
            <button onClick={() => setIsOpen(false)}>
              <X size={20} color="#2B2B2B" />
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-7 mt-2 text-base text-[#2B2B2B]">
            <Link
              href="/about-us"
              onClick={() => setIsOpen(false)}
              className={page === "/about-us" ? "text-red-600" : ""}
            >
              ABOUT
            </Link>
            <Link
              href="/business"
              className={`flex items-center gap-1 ${
                page === "/business" ? "text-red-600" : ""
              }`}
            >
              BUSINESS
            </Link>
            <Link
              href="/newsroom"
              onClick={() => setIsOpen(false)}
              className={page === "/newsroom" ? "text-red-600" : ""}
            >
              NEWSROOM
            </Link>
            <Link
              href="/career"
              onClick={() => setIsOpen(false)}
              className={page === "/career" ? "text-red-600" : ""}
            >
              CAREER
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={page === "/contact-us" ? "text-red-600" : ""}
            >
              CONTACT US
            </Link>
            <Link
              href="/csr"
              onClick={() => setIsOpen(false)}
              className={page === "/csr" ? "text-red-600" : ""}
            >
              CSR
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
