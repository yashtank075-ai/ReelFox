import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
  CheckCircle,
  Eye,
  ShieldCheck,
  Layers,
  PhoneCall,
  Play,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export default function HomePage() {
  const localServices = servicesData.filter((s) => s.category === "local");
  const internationalServices = servicesData.filter((s) => s.category === "international");

  return (
    <div className="flex flex-col space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative pt-6 sm:pt-14 pb-12 sm:pb-20 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] tracking-wide">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
                <span>Creative Media & Digital Promotion Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.12]">
                We Turn Your Ideas Into{" "}
                <span className="text-[#FF6A00]">Digital Impact.</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                ReelFox Media is a creative media and digital promotion agency helping businesses,
                professionals and brands grow through powerful content, strategic promotion and
                personal branding.
              </p>

              {/* CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#FF6A00] hover:bg-[#e05d00] rounded-lg shadow transition-colors group"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="ml-2.5 w-5 h-5 transition-transform duration-150 group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-[#111111] bg-white border-2 border-[#111111] hover:bg-[#111111] hover:text-white rounded-lg transition-colors"
                >
                  <span>Let&apos;s Work Together</span>
                </Link>
              </div>

              {/* Core Pillars */}
              <div className="pt-8 border-t border-gray-200 grid grid-cols-3 gap-6 text-left">
                <div>
                  <p className="text-xs sm:text-sm uppercase font-black text-[#FF6A00] tracking-wider">Create</p>
                  <p className="text-sm sm:text-base font-bold text-[#111111] mt-0.5">High-Impact Media</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase font-black text-[#FF6A00] tracking-wider">Promote</p>
                  <p className="text-sm sm:text-base font-bold text-[#111111] mt-0.5">Strategic Reach</p>
                </div>
                <div>
                  <p className="text-xs sm:text-sm uppercase font-black text-[#FF6A00] tracking-wider">Grow</p>
                  <p className="text-sm sm:text-base font-bold text-[#111111] mt-0.5">Brand Authority</p>
                </div>
              </div>
            </div>

            {/* Right Visual Banner */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-md">
                {/* Official Logo Display */}
                <div className="relative w-full aspect-[16/7] bg-white rounded-xl p-4 shadow-sm border border-gray-200 flex items-center justify-center mb-6">
                  <Image
                    src="/reelfox-logo.jpg"
                    alt="ReelFox Media Logo"
                    fill
                    priority
                    className="object-contain p-2"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111111]">Targeted Digital Reach</p>
                        <p className="text-xs text-gray-600">Local & International Campaigns</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF6A00] bg-orange-50 px-2.5 py-1 rounded">
                      Active
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-neutral-100 text-[#111111] flex items-center justify-center">
                        <Play className="w-5 h-5 fill-current text-[#FF6A00]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111111]">Short-Form Video Dominance</p>
                        <p className="text-xs text-gray-600">Instagram Reels & YouTube Shorts</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-neutral-800 bg-neutral-100 px-2.5 py-1 rounded">
                      Premium
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-4 rounded-xl bg-white border border-gray-200 shadow-xs">
                    <div className="flex items-center space-x-3.5">
                      <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center">
                        <Target className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111111]">Specialized Doctor Marketing</p>
                        <p className="text-xs text-gray-600">Ethical Healthcare Personal Branding</p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#FF6A00] bg-orange-50 px-2.5 py-1 rounded">
                      Focused
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 text-center">
                  <span className="text-xs font-bold tracking-widest text-gray-700 uppercase">
                    Tagline: Create. Promote. Grow.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Who We Are / About ReelFox Media */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
                We Are ReelFox Media.
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                ReelFox Media is a growing creative media company focused on digital promotion,
                content creation and personal branding. Our goal is to help businesses, professionals
                and creators build a strong digital presence.
              </p>
              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-flex items-center text-base font-bold text-[#FF6A00] hover:text-[#e05d00]"
                >
                  <span>Learn more about our agency</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Our Mission</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To help businesses and professionals strengthen their digital presence through
                  creative media and effective promotional solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#111111] mb-2">Our Vision</h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  To become a trusted media and digital promotion partner for clients locally and
                  internationally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Do Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mt-2">
            Integrated Media Solutions Built for Modern Growth
          </h2>
          <p className="text-gray-700 text-base sm:text-lg mt-3">
            From hyper-local event campaigns to international doctor personal branding, we tailor our
            promotional methods to reach the exact audience you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl border border-gray-200 bg-white hover:border-[#FF6A00] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">Content Creation</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              High-quality vertical video production, professional scripting, dynamic editing and
              visual brand assets that capture attention within the first two seconds.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-gray-200 bg-white hover:border-[#FF6A00] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">Strategic Promotion</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Algorithmic amplification across YouTube, Instagram Reels and Shorts, pairing organic
              storytelling with laser-focused audience distribution.
            </p>
          </div>

          <div className="p-8 rounded-xl border border-gray-200 bg-white hover:border-[#FF6A00] transition-colors">
            <div className="w-12 h-12 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#111111] mb-3">Personal Branding</h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Dedicated authority positioning for doctors, clinics, founders, and specialists to
              establish credible reputations both locally and globally.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Local Services Section */}
      <section className="bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
          <div>
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
              Category 01
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-1">
              Local Services
            </h2>
            <p className="text-gray-700 text-base mt-1">
              Tailored promotion solutions designed to drive local market awareness and footfall.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center text-base font-bold text-[#FF6A00] hover:text-[#e05d00]"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {localServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* 5. International Services Section */}
      <section className="bg-gray-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
            <div>
              <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
                Category 02
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight mt-1">
                International Services
              </h2>
              <p className="text-gray-700 text-base mt-1">
                Global positioning, international doctor branding, and cross-border video promotion.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center text-base font-bold text-[#FF6A00] hover:text-[#e05d00]"
            >
              <span>Explore global scope</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {internationalServices.map((service) => (
              <ServiceCard key={service.id} service={service} featured={service.id === "international-doctor-marketing"} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
              Agency Strengths
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight">
              Why Choose ReelFox Media?
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              We operate as a genuine media and promotion partner. Our focus is not just generating
              views, but translating digital reach into measurable trust, audience loyalty, and real
              inquiries.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  Dual-tier expertise across both Local and International campaigns.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  Specialized domain understanding for Healthcare & Doctor marketing.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  Short-form native mastery: Reels, YouTube Shorts, and viral video pacing.
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-800 font-medium">
                  Transparent collaboration and end-to-end creative support.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-xl border border-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-1">Authentic Branding</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We craft narratives tailored to your exact philosophy rather than recycling generic
                scripts.
              </p>
            </div>

            <div className="p-7 rounded-xl border border-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-1">Structured Execution</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Consistent content calendars, timely delivery, and iterative optimization ensure
                steady momentum.
              </p>
            </div>

            <div className="p-7 rounded-xl border border-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-1">Audience Alignment</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Reaching the right demographic profile ensures your message builds lasting value and
                engagement.
              </p>
            </div>

            <div className="p-7 rounded-xl border border-gray-200 bg-white">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF6A00] flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-[#111111] mb-1">Multi-Platform Scale</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Seamless synchronization across YouTube, Instagram, and web touchpoints for total
                presence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Working / Creative Process */}
      <section className="bg-[#111111] text-white py-20 rounded-3xl max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00]">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-2 text-white">
            Our Creative Process
          </h2>
          <p className="text-gray-300 text-base sm:text-lg mt-3">
            A clear, four-phase methodology ensuring every video and promotion campaign delivers
            clear results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative p-7 rounded-xl bg-neutral-900 border border-neutral-800">
            <span className="text-3xl font-black text-[#FF6A00]">01</span>
            <h3 className="text-lg font-bold text-white mt-3 mb-2">Discovery & Brief</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We analyze your brand, local or international goals, target demographic, and current
              presence.
            </p>
          </div>

          <div className="relative p-7 rounded-xl bg-neutral-900 border border-neutral-800">
            <span className="text-3xl font-black text-[#FF6A00]">02</span>
            <h3 className="text-lg font-bold text-white mt-3 mb-2">Content Strategy</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Developing high-hook scripts, creative visual themes, and an intentional editorial
              distribution calendar.
            </p>
          </div>

          <div className="relative p-7 rounded-xl bg-neutral-900 border border-neutral-800">
            <span className="text-3xl font-black text-[#FF6A00]">03</span>
            <h3 className="text-lg font-bold text-white mt-3 mb-2">Production & Polish</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Crisp filming, motion graphics, clean sound design, and vertical formats optimized for
              retention.
            </p>
          </div>

          <div className="relative p-7 rounded-xl bg-neutral-900 border border-neutral-800">
            <span className="text-3xl font-black text-[#FF6A00]">04</span>
            <h3 className="text-lg font-bold text-white mt-3 mb-2">Promote & Grow</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Targeted launch, audience targeting, performance tracking, and continuous strategy
              refinements.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Call to Action / Contact CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-[#FF6A00] p-8 sm:p-12 lg:p-16 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider">
              Start Your Growth Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Ready to Turn Your Ideas Into Digital Impact?
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Whether you need targeted local promotion or an international personal branding roadmap,
              ReelFox Media is ready to help you grow.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-[#111111] bg-white hover:bg-gray-100 rounded-lg shadow transition-colors"
              >
                <span>Let&apos;s Work Together</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#111111] hover:bg-black rounded-lg transition-colors"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                <span>Explore Packages</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
