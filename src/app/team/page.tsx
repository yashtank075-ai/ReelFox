import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Sparkles, ShieldAlert } from "lucide-react";
import { teamData } from "@/data/team";
import { TeamCard } from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "Our Team | Leadership & Creative Minds",
  description:
    "Meet the ReelFox Media team: Founder, Partner, Sales Executive, HR, and Technical Team members driving creative media and digital promotion.",
};

export default function TeamPage() {
  return (
    <div className="space-y-20 sm:space-y-28 pb-24">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] mb-4">
            <Users className="w-4 h-4" />
            <span>Company Structure & Talent</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
            Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
            The creative visionaries, growth strategists, and technical experts dedicated to turning
            your ideas into digital impact.
          </p>
        </div>
      </section>

      {/* Team Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 p-5 rounded-xl bg-orange-50 border border-orange-200 text-sm text-gray-800 flex items-start space-x-3.5 shadow-xs">
          <ShieldAlert className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Note on Team Profiles:</strong> All five core positions (Founder, Partner, Sales Executive, HR, and Technical Team) use editable placeholders for names, photographs, and biographies to allow straightforward updating once official employee data is available. No artificial names are invented.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Culture & Collaboration */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-[#111111] text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-white/10 text-xs sm:text-sm font-bold text-[#FF6A00]">
              <Sparkles className="w-4 h-4" />
              <span>Join Our Mission</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold">
              Want to Collaborate or Join Our Creative Collective?
            </h3>
            <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
              We are constantly seeking creative video editors, scriptwriters, and digital promotion
              specialists passionate about short-form media and personal branding.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 rounded-lg text-base font-bold text-[#111111] bg-white hover:bg-gray-100 transition-colors"
            >
              <span>Get in Touch With Us</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
