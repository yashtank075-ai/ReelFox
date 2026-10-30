import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { InstagramIcon, LinkedinIcon, YoutubeIcon } from "./SocialIcons";

export const Footer = () => {
  return (
    <footer className="bg-[#111111] text-gray-200 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-3 rounded-lg inline-block">
              <Logo />
            </div>
            <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm mt-3 font-normal">
              ReelFox Media is a creative media and digital promotion agency helping businesses,
              professionals and brands grow through powerful content, strategic promotion and
              personal branding.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#FF6A00] bg-[#FF6A00]/10 border border-[#FF6A00]/30 rounded-full">
                Create. Promote. Grow.
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-200 hover:text-[#FF6A00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-200 hover:text-[#FF6A00] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-200 hover:text-[#FF6A00] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-200 hover:text-[#FF6A00] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-200 hover:text-[#FF6A00] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase">Key Services</h4>
            <ul className="space-y-3 text-sm sm:text-base text-gray-200">
              <li>
                <Link href="/services#local" className="hover:text-[#FF6A00] transition-colors">
                  Event & Business Promotion
                </Link>
              </li>
              <li>
                <Link href="/services#local" className="hover:text-[#FF6A00] transition-colors">
                  Doctor & Clinic Promotion
                </Link>
              </li>
              <li>
                <Link href="/services#international" className="hover:text-[#FF6A00] transition-colors">
                  International Doctor Branding
                </Link>
              </li>
              <li>
                <Link href="/services#international" className="hover:text-[#FF6A00] transition-colors">
                  YouTube Growth & Promotion
                </Link>
              </li>
              <li>
                <Link href="/services#international" className="hover:text-[#FF6A00] transition-colors">
                  Instagram Reels Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-white text-base font-bold tracking-wider uppercase">Get In Touch</h4>
            <ul className="space-y-3.5 text-sm sm:text-base">
              <li className="flex items-start space-x-3 text-gray-200">
                <Mail className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@reelfoxmedia.com"
                  className="hover:text-[#FF6A00] transition-colors select-all break-all"
                  title="Official Email"
                >
                  [contact@reelfoxmedia.com]
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-200">
                <Phone className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                <a
                  href="https://wa.me/910000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF6A00] transition-colors select-all break-all"
                  title="WhatsApp & Phone"
                >
                  [WhatsApp: +91 00000 00000]
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-200">
                <MapPin className="w-5 h-5 text-[#FF6A00] mt-0.5 shrink-0" />
                <span>[Company Registered Office Address Placeholder]</span>
              </li>
            </ul>

            <div className="pt-3 flex items-center space-x-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram (Placeholder link)"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-gray-200 hover:text-white hover:bg-[#FF6A00] transition-colors duration-150"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (Placeholder link)"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-gray-200 hover:text-white hover:bg-[#FF6A00] transition-colors duration-150"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube (Placeholder link)"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-gray-200 hover:text-white hover:bg-[#FF6A00] transition-colors duration-150"
              >
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-300 gap-4">
          <p>© {new Date().getFullYear()} ReelFox Media. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="font-semibold text-gray-200">Tagline: Create. Promote. Grow.</span>
            <Link href="/contact" className="hover:text-white inline-flex items-center text-[#FF6A00] font-semibold">
              Partner With Us <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
