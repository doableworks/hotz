"use client";
import React, { useState, useEffect, memo, useRef } from "react";
import { Search, Phone, ChevronDown, X, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [mobileBusinessOpen, setMobileBusinessOpen] = useState(false);

  const page = usePathname();
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const businessDropdownRef = useRef<HTMLDivElement>(null);

  const aboutLinks = [
    { name: "Our Story", href: "/about-us#story" },
    { name: "Milestones", href: "/about-us#milestone" },
    { name: "Mission", href: "/about-us#vision" },
    { name: "Chairman's Message", href: "/about-us#chairmans-message" },
    { name: "Management", href: "/about-us#management" },
  ];

  const businessLinks = [
    { name: "All", href: "/business" },
    {
      name: "Real Estate & Warehousing",
      href: "/business/real-estate-and-warehousing",
    },
    { name: "Art", href: "/business/art-and-culture" },
    { name: "Hospitality", href: "/business/hospitality" },
    { name: "Financial Services", href: "/business/financial-services" },
    { name: "Education", href: "/business/education" },
    { name: "New Initiatives", href: "/business/new-initiatives" },
  ];

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target as Node)
      ) {
        setAboutDropdownOpen(false);
      }
      if (
        businessDropdownRef.current &&
        !businessDropdownRef.current.contains(event.target as Node)
      ) {
        setBusinessDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 bg-white w-full py-2 px-5 lg:px-10 flex justify-between items-center z-50 shadow-sm">
      <div className="w-1/3">
        <Link href="/">
          <img src="/images/HotzLogo.png" alt="Logo" className="h-14" />
        </Link>
      </div>
      <div className="hidden md:flex items-center justify-center gap-7 w-full text-xs">
        <div className="relative " ref={aboutDropdownRef}>
          <button
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
            className={`flex items-center gap-1 cursor-pointer ${
              page.startsWith("/about-us") ? "text-red-600" : ""
            }`}
          >
            ABOUT
            <ChevronDown
              size={16}
              strokeWidth="1.5"
              className={`transition-transform ${
                aboutDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {aboutDropdownOpen && (
            <div className="text-sm absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-52 z-50">
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setAboutDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="relative" ref={businessDropdownRef}>
          <button
            onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
            className={`flex items-center gap-1 cursor-pointer ${
              page.startsWith("/business") ? "text-red-600" : ""
            }`}
          >
            BUSINESS
            <ChevronDown
              size={16}
              strokeWidth="1.5"
              className={`transition-transform ${
                businessDropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {businessDropdownOpen && (
            <div className="text-sm absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-56 z-50">
              {businessLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  onClick={() => setBusinessDropdownOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-red-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link href="/csr" className={page === "/csr" ? "text-red-600" : ""}>
          CSR
        </Link>
        <Link
          href="/career"
          className={page === "/career" ? "text-red-600" : ""}
        >
          CAREERS
        </Link>
        <Link
          href="/contact-us"
          className={page === "/contact-us" ? "text-red-600" : ""}
        >
          CONTACT US
        </Link>
        <Link
          href="/newsroom"
          className={page === "/newsroom" ? "text-red-600" : ""}
        >
          NEWSROOM
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
        <div className="fixed w-full inset-0 bg-white/40 backdrop-blur-xl z-50 flex flex-col items-center py-4 gap-3 animate-slideDown overflow-y-auto">
          <div className="flex justify-end items-center w-full px-5 py-2">
            <button onClick={() => setIsOpen(false)}>
              <X size={20} color="#2B2B2B" />
            </button>
          </div>

          <div className="flex w-full flex-col items-center gap-7 mt-2 text-base text-[#2B2B2B]">
            <div className="flex flex-col items-center gap-3 ">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`flex items-center gap-1 cursor-pointer ${
                  page.startsWith("/about-us") ? "text-red-600" : ""
                }`}
              >
                ABOUT
                <ChevronDown
                  size={16}
                  strokeWidth="1.5"
                  className={`transition-transform ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className=" flex flex-col gap-3">
                  {aboutLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className=" text-base text-black/80 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="flex flex-col items-center gap-3">
              <button
                onClick={() => setMobileBusinessOpen(!mobileBusinessOpen)}
                className={`flex items-center gap-1 cursor-pointer ${
                  page.startsWith("/business") ? "text-red-600" : ""
                }`}
              >
                BUSINESS
                <ChevronDown
                  size={16}
                  strokeWidth="1.5"
                  className={`transition-transform ${
                    mobileBusinessOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileBusinessOpen && (
                <div className="flex flex-col gap-3">
                  {businessLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base text-black/80 hover:text-red-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/csr"
              onClick={() => setIsOpen(false)}
              className={page === "/csr" ? "text-red-600" : ""}
            >
              CSR
            </Link>
            <Link
              href="/career"
              onClick={() => setIsOpen(false)}
              className={page === "/career" ? "text-red-600" : ""}
            >
              CAREERS
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setIsOpen(false)}
              className={page === "/contact-us" ? "text-red-600" : ""}
            >
              CONTACT US
            </Link>
            <Link
              href="/newsroom"
              onClick={() => setIsOpen(false)}
              className={page === "/newsroom" ? "text-red-600" : ""}
            >
              NEWSROOM
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Navbar);
