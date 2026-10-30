import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Our Services | Local & International Promotion",
  description:
    "Explore ReelFox Media services: Event Promotion, Business Promotion, Doctor & Clinic Promotion, International Doctor Marketing, YouTube Promotion, Instagram Reels and Shorts.",
};

export default function ServicesPage() {
  const localServices = servicesData.filter((s) => s.category === "local");
  const internationalServices = servicesData.filter((s) => s.category === "international");

  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Tailored Media & Promotion Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
            Our Services
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
            We provide strategic media creation, digital campaigns, and personal branding divided
            into dedicated Local and International offerings.
          </p>
        </div>
      </section>

      {/* Category 1: Local Services */}
      <section id="local" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
            Category 01
          </span>
        </div>
        <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mb-3">
          Local Services
        </h2>
        <p className="text-gray-700 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          High-impact digital promotion built to capture attention, improve local visibility, and
          drive footfall for community events, businesses, and medical clinics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Category 2: International Services */}
      <section id="international" className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-[#111111] text-[#FF6A00] flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
              Category 02
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-[#111111] tracking-tight mb-3">
            International Services
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
            Expand your influence globally with strategic personal branding for doctors, algorithmic
            YouTube growth, and viral short-form video content on Instagram and YouTube Shorts.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                featured={service.id === "international-doctor-marketing"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Strategy Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl border border-gray-200 bg-white shadow-sm grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div>
            <span className="text-xs uppercase font-black tracking-wider text-[#FF6A00]">
              Custom Packages
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mt-2 mb-3">
              Need a Combined or Custom Media Strategy?
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              Many clients benefit from a blended approach—such as local clinic awareness combined
              with international thought-leadership on YouTube and Reels.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3.5 rounded-lg text-base font-bold text-white bg-[#FF6A00] hover:bg-[#e05d00] transition-colors"
            >
              <span>Consult Our Media Team</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-[#FF6A00] mb-2" />
              <h4 className="font-bold text-base text-[#111111] mb-1">Tailored Content Calendars</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Predictable filming schedules, topic research, and consistent publishing workflows.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-[#FF6A00] mb-2" />
              <h4 className="font-bold text-base text-[#111111] mb-1">Healthcare Compliance</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Ethical medical content respecting practitioner privacy and patient education standards.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-[#FF6A00] mb-2" />
              <h4 className="font-bold text-base text-[#111111] mb-1">Short-Form Video Mastery</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                High-retention editing, captivating hooks, dynamic captions, and platform trends.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
              <CheckCircle2 className="w-6 h-6 text-[#FF6A00] mb-2" />
              <h4 className="font-bold text-base text-[#111111] mb-1">Transparent Feedback</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Collaborative reviews, performance insights, and continuous channel optimization.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
