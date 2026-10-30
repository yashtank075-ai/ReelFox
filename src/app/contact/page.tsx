import React, { Suspense } from "react";
import type { Metadata } from "next";
import { MessageSquareText } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Let's Create Something Amazing Together",
  description:
    "Get in touch with ReelFox Media. Submit your project requirements for Local or International promotion, doctor marketing, YouTube promotion, and Instagram Reels.",
};

export default function ContactPage() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-24">
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] mb-4">
            <MessageSquareText className="w-4 h-4" />
            <span>Start a Conversation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#111111] tracking-tight">
            Let&apos;s Create Something Amazing Together.
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mt-4 leading-relaxed">
            Tell us about your brand vision, target audience, and promotional goals. We will review
            your enquiry and design a tailored digital roadmap.
          </p>
        </div>
      </section>

      {/* Main Form & Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense
          fallback={
            <div className="p-12 text-center text-base text-gray-600">
              Loading enquiry interface...
            </div>
          }
        >
          <ContactForm />
        </Suspense>
      </section>
    </div>
  );
}
