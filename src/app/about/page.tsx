import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, ShieldCheck, HeartHandshake, Award, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | We Are ReelFox Media",
  description:
    "Learn about ReelFox Media, our mission, vision, values and commitment to helping businesses and professionals grow through digital promotion and personal branding.",
};

const values = [
  {
    title: "Creative Integrity",
    description:
      "We design authentic, original promotional content that genuinely resonates with target audiences without relying on gimmicks.",
    icon: <Sparkles className="w-6 h-6 text-[#FF6A00]" />,
  },
  {
    title: "Strategic Impact",
    description:
      "Every piece of media we craft is aligned with measurable goals—increasing visibility, strengthening authority, and inspiring action.",
    icon: <Target className="w-6 h-6 text-[#FF6A00]" />,
  },
  {
    title: "Ethical & Transparent",
    description:
      "We believe in open communication, honest timelines, and responsible promotion, especially in sensitive sectors like healthcare.",
    icon: <ShieldCheck className="w-6 h-6 text-[#FF6A00]" />,
  },
  {
    title: "Client Partnership",
    description:
      "We view every client engagement as a dedicated partnership, working shoulder-to-shoulder to achieve long-term growth.",
    icon: <HeartHandshake className="w-6 h-6 text-[#FF6A00]" />,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Hero / Introduction */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
              About Our Agency
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
              We Are ReelFox Media.
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-2">
              ReelFox Media is a growing creative media company focused on digital promotion, content
              creation and personal branding. We help businesses, professionals and creators build a
              strong digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction Detailed */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
              Our Identity & Purpose
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Crafting Media That Inspires Trust & Amplifies Reach
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                In a digital landscape filled with endless noise, attention is fleeting. ReelFox
                Media was established with a clear mandate: to help professionals and businesses
                cut through the clutter by marrying intentional storytelling with targeted digital
                promotion.
              </p>
              <p>
                Whether it is a local medical clinic looking to become the most trusted healthcare
                provider in their city, or an internationally renowned specialist building a global
                consulting footprint on YouTube, our team delivers high-caliber creative assets and
                promotional distribution tailored to distinct market dynamics.
              </p>
            </div>
            <div className="pt-2">
              <Link
                href="/services"
                className="inline-flex items-center text-base font-bold text-[#FF6A00] hover:text-[#e05d00]"
              >
                <span>Discover our service capabilities</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 bg-gray-50 p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
            <div className="flex items-center space-x-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF6A00]" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">The ReelFox Standard</h3>
            </div>
            <p className="text-base text-gray-700 leading-relaxed">
              We stand against empty vanity metrics and generic AI-templated content. We believe in
              structured narratives, authentic authority, and measurable promotional outcomes.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200 text-center">
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-[#FF6A00]">Create</span>
                <span className="text-xs text-gray-700 font-bold uppercase mt-1 block">Original Content</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-[#111111]">Promote</span>
                <span className="text-xs text-gray-700 font-bold uppercase mt-1 block">Strategic Reach</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-xs">
                <span className="block text-xl sm:text-2xl font-black text-[#FF6A00]">Grow</span>
                <span className="text-xs text-gray-700 font-bold uppercase mt-1 block">Brand Authority</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00] block mb-2">
                Our Purpose
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">Mission</h3>
              <blockquote className="text-base sm:text-lg text-gray-800 leading-relaxed border-l-4 border-[#FF6A00] pl-4 italic">
                &ldquo;To help businesses and professionals strengthen their digital presence through
                creative media and effective promotional solutions.&rdquo;
              </blockquote>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-gray-200 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-[#FF6A00]" />
              </div>
              <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00] block mb-2">
                Our Horizon
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] mb-4">Vision</h3>
              <blockquote className="text-base sm:text-lg text-gray-800 leading-relaxed border-l-4 border-[#111111] pl-4 italic">
                &ldquo;To become a trusted media and digital promotion partner for clients locally and
                internationally.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
            Guiding Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-2">
            Our Core Values
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-3">
            The fundamental standards that shape our client engagements, creative production, and
            daily operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-gray-200 bg-white hover:border-[#FF6A00] transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-5">
                {v.icon}
              </div>
              <h3 className="text-lg font-bold text-[#111111] mb-2">{v.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA to Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#111111] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#FF6A00] uppercase tracking-wider mb-2">
              <Award className="w-5 h-5" />
              <span>The People Behind The Work</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">Meet the ReelFox Media Team</h3>
            <p className="text-base text-gray-300 mt-2 max-w-xl">
              Learn about our organizational leadership, strategic partners, and technical talent.
            </p>
          </div>
          <Link
            href="/team"
            className="shrink-0 inline-flex items-center px-7 py-3.5 rounded-lg text-base font-bold text-white bg-[#FF6A00] hover:bg-[#e05d00] transition-colors"
          >
            <span>View Our Team</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
