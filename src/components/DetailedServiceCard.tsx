import React from "react";
import Link from "next/link";
import {
  Calendar,
  Briefcase,
  Stethoscope,
  Globe,
  Film,
  Video,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { YoutubeIcon } from "./SocialIcons";

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-7 h-7 text-[#FF6A00]" />,
  Briefcase: <Briefcase className="w-7 h-7 text-[#FF6A00]" />,
  Stethoscope: <Stethoscope className="w-7 h-7 text-[#FF6A00]" />,
  Globe: <Globe className="w-7 h-7 text-[#FF6A00]" />,
  Youtube: <YoutubeIcon className="w-7 h-7 text-[#FF6A00]" />,
  Film: <Film className="w-7 h-7 text-[#FF6A00]" />,
  Video: <Video className="w-7 h-7 text-[#FF6A00]" />,
};

interface DetailedServiceCardProps {
  service: ServiceItem;
  index: number;
}

export const DetailedServiceCard: React.FC<DetailedServiceCardProps> = ({ service, index }) => {
  return (
    <article
      id={service.id}
      className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-10 shadow-sm hover:border-[#FF6A00] transition-colors duration-200"
    >
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
        <div className="space-y-6 flex-1">
          {/* Header & Icon */}
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0">
              {iconMap[service.iconName] || <Film className="w-7 h-7 text-[#FF6A00]" />}
            </div>
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
                {service.category === "local" ? "Local Service 0" : "International Service 0"}
                {index + 1}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Short description */}
          <p className="text-lg font-semibold text-gray-800 leading-relaxed">
            {service.description}
          </p>

          {/* Detailed explanation */}
          {service.detailedExplanation && (
            <div className="space-y-2 border-l-4 border-[#FF6A00] pl-4 py-1">
              <h3 className="text-xs font-black uppercase tracking-wider text-gray-500">
                Detailed Overview
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {service.detailedExplanation}
              </p>
            </div>
          )}

          {/* Key Benefits & What It Includes Grids */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
            {/* Key Benefits */}
            {service.keyBenefits && service.keyBenefits.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#111111] mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
                  <span>Key Benefits</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {service.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* What the Service Includes */}
            {service.whatIncludes && service.whatIncludes.length > 0 && (
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#111111] mb-3 flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#111111]" />
                  <span>What the Service Includes</span>
                </h4>
                <ul className="space-y-2.5 text-sm text-gray-700">
                  {service.whatIncludes.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#111111] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* CTA Sidebar / Action Box */}
        <div className="lg:w-72 shrink-0 bg-neutral-900 text-white p-7 rounded-xl flex flex-col justify-between space-y-6">
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-[#FF6A00] block mb-2">
              Ready to Launch?
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">
              Start this promotional campaign tailored specifically to your audience and timeline.
            </p>
          </div>

          <div className="space-y-3">
            <Link
              href={`/contact?service=${encodeURIComponent(service.title)}&type=${service.category}`}
              className="w-full inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#FF6A00] hover:bg-[#e05d00] rounded-lg transition-colors shadow"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-gray-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded-lg transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

