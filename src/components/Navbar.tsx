"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, PhoneCall, ChevronDown, MapPin, Globe } from "lucide-react";
import { Logo } from "./Logo";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const isServicesActive = pathname.startsWith("/services");
  const isLocalActive = pathname === "/services/local";
  const isInternationalActive = pathname === "/services/international";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-200 py-3"
          : "bg-white border-b border-gray-100 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3" aria-label="Main Navigation">
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-150 relative ${
                pathname === "/"
                  ? "text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:text-[#FF6A00] hover:bg-gray-50"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF6A00] rounded-full" />
              )}
            </Link>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                onKeyDown={(e) => {
                  if (e.key === "Escape") setIsServicesOpen(false);
                }}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
                className={`inline-flex items-center px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-150 relative ${
                  isServicesActive
                    ? "text-[#FF6A00] font-semibold"
                    : "text-[#111111] hover:text-[#FF6A00] hover:bg-gray-50"
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`ml-1.5 w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? "rotate-180 text-[#FF6A00]" : ""
                  }`}
                />
                {isServicesActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF6A00] rounded-full" />
                )}
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  role="menu"
                  aria-orientation="vertical"
                  className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <Link
                    href="/services/local"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                    className={`flex items-start px-4 py-3 hover:bg-orange-50/70 transition-colors ${
                      isLocalActive ? "bg-orange-50 border-l-4 border-[#FF6A00]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-orange-100/60 text-[#FF6A00] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="ml-3">
                      <p
                        className={`text-sm font-bold ${
                          isLocalActive ? "text-[#FF6A00]" : "text-[#111111]"
                        }`}
                      >
                        Local Services
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Events, local business & doctor clinic promotion
                      </p>
                    </div>
                  </Link>

                  <Link
                    href="/services/international"
                    role="menuitem"
                    onClick={() => setIsServicesOpen(false)}
                    className={`flex items-start px-4 py-3 hover:bg-orange-50/70 transition-colors ${
                      isInternationalActive ? "bg-orange-50 border-l-4 border-[#FF6A00]" : ""
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 text-[#111111] flex items-center justify-center shrink-0 mt-0.5">
                      <Globe className="w-4 h-4 text-[#FF6A00]" />
                    </div>
                    <div className="ml-3">
                      <p
                        className={`text-sm font-bold ${
                          isInternationalActive ? "text-[#FF6A00]" : "text-[#111111]"
                        }`}
                      >
                        International Services
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Global doctor branding, YouTube & Reels
                      </p>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-150 relative ${
                pathname === "/about"
                  ? "text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:text-[#FF6A00] hover:bg-gray-50"
              }`}
            >
              About Us
              {pathname === "/about" && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF6A00] rounded-full" />
              )}
            </Link>

            <Link
              href="/team"
              className={`px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-150 relative ${
                pathname === "/team"
                  ? "text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:text-[#FF6A00] hover:bg-gray-50"
              }`}
            >
              Our Team
              {pathname === "/team" && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF6A00] rounded-full" />
              )}
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 rounded-lg text-sm lg:text-base font-medium transition-colors duration-150 relative ${
                pathname === "/contact"
                  ? "text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:text-[#FF6A00] hover:bg-gray-50"
              }`}
            >
              Contact Us
              {pathname === "/contact" && (
                <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#FF6A00] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm lg:text-base font-semibold text-white bg-[#FF6A00] hover:bg-[#e05d00] transition-colors duration-150 rounded-lg shadow-sm"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-lg text-[#111111] hover:text-[#FF6A00] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A00]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 pt-3 pb-6 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === "/"
                  ? "bg-orange-50 text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:bg-gray-50 hover:text-[#FF6A00]"
              }`}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="rounded-lg overflow-hidden">
              <button
                type="button"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium transition-colors ${
                  isServicesActive
                    ? "bg-orange-50 text-[#FF6A00] font-semibold"
                    : "text-[#111111] hover:bg-gray-50 hover:text-[#FF6A00]"
                }`}
              >
                <span>Our Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isMobileServicesOpen && (
                <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/70 border-l-2 border-[#FF6A00] ml-3 mt-1 rounded-r-lg">
                  <Link
                    href="/services/local"
                    className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                      isLocalActive ? "text-[#FF6A00]" : "text-gray-700 hover:text-[#FF6A00]"
                    }`}
                  >
                    Local Services
                  </Link>
                  <Link
                    href="/services/international"
                    className={`block px-3 py-2 rounded-md text-sm font-semibold ${
                      isInternationalActive ? "text-[#FF6A00]" : "text-gray-700 hover:text-[#FF6A00]"
                    }`}
                  >
                    International Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === "/about"
                  ? "bg-orange-50 text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:bg-gray-50 hover:text-[#FF6A00]"
              }`}
            >
              About Us
            </Link>

            <Link
              href="/team"
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === "/team"
                  ? "bg-orange-50 text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:bg-gray-50 hover:text-[#FF6A00]"
              }`}
            >
              Our Team
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                pathname === "/contact"
                  ? "bg-orange-50 text-[#FF6A00] font-semibold"
                  : "text-[#111111] hover:bg-gray-50 hover:text-[#FF6A00]"
              }`}
            >
              Contact Us
            </Link>

            <div className="pt-4 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-4 py-3.5 text-base font-semibold text-white bg-[#FF6A00] hover:bg-[#e05d00] rounded-lg shadow-sm"
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
