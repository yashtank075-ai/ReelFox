import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, ArrowRight } from "lucide-react";
import { servicesData } from "@/data/services";
import { DetailedServiceCard } from "@/components/DetailedServiceCard";

export const metadata: Metadata = {
  title: "Local Services | ReelFox Media",
  description:
    "Explore ReelFox Media's Local Services: Event Promotion, Business Promotion, and Doctor & Clinic Promotion tailored to elevate your regional market presence.",
};

export default function LocalServicesPage() {
  const localServices = servicesData.filter((s) => s.category === "local");

  return (
    <div className="space-y-16 sm:space-y-20 pb-24">
      {/* Header & Breadcrumb */}
      <section className="bg-gray-50 border-b border-gray-200 py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-gray-500">
              <li>
                <Link href="/" className="hover:text-[#FF6A00] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>
              <li>
                <Link href="/services" className="hover:text-[#FF6A00] transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </li>
              <li className="text-[#FF6A00]">Local Services</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] mb-4">
              <MapPin className="w-4 h-4" />
              <span>Regional Growth & Visibility</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
              Local Services
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed font-normal">
              High-impact promotional campaigns designed to capture immediate attention, maximize
              event attendance, and drive footfall for regional businesses, clinics, and healthcare
              providers.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {localServices.map((service, idx) => (
            <DetailedServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </section>

      {/* Cross-linking to International */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase font-black tracking-wider text-[#FF6A00]">
              Looking for Global Reach?
            </span>
            <h3 className="text-2xl font-extrabold text-[#111111]">
              Explore Our International Services
            </h3>
            <p className="text-sm sm:text-base text-gray-700 max-w-xl">
              We also provide global doctor personal branding, YouTube channel promotion, and viral
              short-form content creation.
            </p>
          </div>
          <Link
            href="/services/international"
            className="shrink-0 inline-flex items-center px-7 py-3.5 rounded-lg text-base font-bold text-white bg-[#111111] hover:bg-black transition-colors"
          >
            <span>View International Services</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#FF6A00]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
