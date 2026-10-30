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
} from "lucide-react";
import { ServiceItem } from "@/data/services";
import { YoutubeIcon } from "./SocialIcons";

const iconMap: Record<string, React.ReactNode> = {
  Calendar: <Calendar className="w-6 h-6 text-[#FF6A00]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#FF6A00]" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-[#FF6A00]" />,
  Globe: <Globe className="w-6 h-6 text-[#FF6A00]" />,
  Youtube: <YoutubeIcon className="w-6 h-6 text-[#FF6A00]" />,
  Film: <Film className="w-6 h-6 text-[#FF6A00]" />,
  Video: <Video className="w-6 h-6 text-[#FF6A00]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group relative flex flex-col justify-between bg-white rounded-xl p-8 border transition-all duration-200 hover:border-[#FF6A00] hover:shadow-lg ${
        featured
          ? "border-orange-300 shadow-md ring-1 ring-[#FF6A00]/20"
          : "border-gray-200 shadow-sm"
      }`}
    >
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="w-13 h-13 p-3 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center transition-colors duration-200 group-hover:bg-[#FF6A00] group-hover:border-[#FF6A00]">
            <div className="group-hover:text-white transition-colors duration-200">
              {React.cloneElement(
                (iconMap[service.iconName] || <Film className="w-6 h-6 text-[#FF6A00]" />) as React.ReactElement<{ className?: string }>,
                {
                  className: "w-6 h-6 text-[#FF6A00] group-hover:text-white transition-colors",
                }
              )}
            </div>
          </div>
          <span
            className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full ${
              service.category === "international"
                ? "bg-neutral-100 text-[#111111] border border-gray-200"
                : "bg-orange-50 text-[#FF6A00] border border-orange-100"
            }`}
          >
            {service.category === "international" ? "International" : "Local"}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors duration-150 mb-3 leading-snug">
          {service.title}
        </h3>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">{service.description}</p>

        {service.features && service.features.length > 0 && (
          <ul className="space-y-2.5 mb-8 border-t border-gray-100 pt-5 text-xs sm:text-sm text-gray-700">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start space-x-2.5">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] mt-1.5 shrink-0" />
                <span className="leading-snug">{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pt-2">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}&type=${service.category}`}
          className="inline-flex items-center text-sm sm:text-base font-bold text-[#111111] group-hover:text-[#FF6A00] transition-colors"
        >
          <span>Enquire Now</span>
          <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-150 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
