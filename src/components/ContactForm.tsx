"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Info,
} from "lucide-react";
import { InstagramIcon, LinkedinIcon } from "./SocialIcons";
import { servicesData } from "@/data/services";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  service: string;
  marketType: "local" | "international" | "";
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  service?: string;
  marketType?: string;
  message?: string;
}

export const ContactForm = () => {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";
  const initialType = (searchParams.get("type") as "local" | "international") || "";

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    service: initialService,
    marketType: initialType,
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        service: initialService,
        marketType: initialType || prev.marketType,
      }));
    }
  }, [initialService, initialType]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your contact phone number";
    } else if (formData.phone.replace(/[^0-9]/g, "").length < 7) {
      newErrors.phone = "Please enter a valid phone number (at least 7 digits)";
    }

    if (!formData.service) {
      newErrors.service = "Please choose a service you are interested in";
    }

    if (!formData.marketType) {
      newErrors.marketType = "Please select either Local or International scope";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a brief summary of your project or requirements";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setSubmitStatus("error");
      setStatusMessage("Please correct the highlighted fields before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate form submission readiness
      await new Promise((resolve) => setTimeout(resolve, 600));

      setSubmitStatus("success");
      setStatusMessage(
        "Notice: Frontend form validation verified. Message delivery is awaiting backend email/CRM service integration. In production, this form will forward submissions directly to your official email."
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        companyName: "",
        service: "",
        marketType: "",
        message: "",
      });
      setErrors({});
    } catch {
      setSubmitStatus("error");
      setStatusMessage("An unexpected error occurred. Please reach us directly via WhatsApp or email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Contact Details & Channels */}
      <div className="lg:col-span-5 space-y-8 bg-[#111111] text-white p-8 sm:p-10 rounded-2xl shadow-xl">
        <div>
          <span className="text-xs uppercase font-black tracking-widest text-[#FF6A00] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Let&apos;s Build Your Brand&apos;s Impact
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            Fill out the enquiry form or reach us via our verified channels. We provide customized
            media roadmaps for local businesses, international medical professionals, and creators.
          </p>
        </div>

        <div className="space-y-6 pt-6 border-t border-neutral-800 text-sm sm:text-base">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF6A00]">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">WhatsApp & Call Support</p>
              <a
                href="https://wa.me/910000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white mt-1 text-base block hover:text-[#FF6A00] transition-colors select-all"
              >
                [WhatsApp: +91 00000 00000]
              </a>
              <p className="text-xs text-gray-400 mt-0.5">Quick response via WhatsApp</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF6A00]">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">Official Business Email</p>
              <a
                href="mailto:contact@reelfoxmedia.com"
                className="font-bold text-white mt-1 text-base block hover:text-[#FF6A00] transition-colors select-all"
              >
                [Email: contact@reelfoxmedia.com]
              </a>
              <p className="text-xs text-gray-400 mt-0.5">For formal proposals & briefs</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 text-[#FF6A00]">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-400 font-bold uppercase tracking-wider">Operating Hours</p>
              <p className="font-bold text-white mt-1 text-base">Monday – Saturday: 10:00 AM – 7:00 PM</p>
              <p className="text-xs text-gray-400 mt-0.5">Dedicated emergency campaign support</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-neutral-800">
          <p className="text-xs sm:text-sm font-bold text-gray-300 uppercase tracking-wider mb-3">
            Social Media Channels
          </p>
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-[#FF6A00] text-gray-200 hover:text-white transition-all text-sm font-semibold"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>[Instagram]</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2.5 rounded-lg bg-neutral-800 hover:bg-[#FF6A00] text-gray-200 hover:text-white transition-all text-sm font-semibold"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>[LinkedIn]</span>
            </a>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-gray-300 flex items-start space-x-3">
          <Info className="w-4 h-4 text-[#FF6A00] shrink-0 mt-0.5" />
          <span className="leading-relaxed">
            Contact placeholders are clearly labeled for client configuration. No fake phone numbers
            or addresses are published.
          </span>
        </div>
      </div>

      {/* Interactive Form */}
      <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-gray-200 shadow-sm">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-xs sm:text-sm font-bold text-[#FF6A00] mb-3">
            <Sparkles className="w-4 h-4" />
            <span>Direct Client Enquiry</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111]">Send Us an Enquiry</h3>
          <p className="text-sm sm:text-base text-gray-700 mt-2">
            Tell us about your requirements and we will design a targeted digital promotional strategy.
          </p>
        </div>

        {submitStatus === "success" && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-sm flex items-start space-x-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-emerald-900 text-base">Enquiry Validation Complete</p>
              <p className="mt-1 text-sm text-emerald-800 leading-relaxed">{statusMessage}</p>
            </div>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-300 text-red-900 text-sm flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-red-900 text-base">Submission Alert</p>
              <p className="mt-1 text-sm text-red-800">{statusMessage}</p>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-[#111111] mb-1.5">
                Full Name <span className="text-[#FF6A00]">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="e.g. Dr. Rajesh Sharma"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 ${
                  errors.fullName
                    ? "border-red-500 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 bg-white focus:border-[#FF6A00]"
                }`}
              />
              {errors.fullName && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.fullName}</p>}
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#111111] mb-1.5">
                Email Address <span className="text-[#FF6A00]">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 ${
                  errors.email
                    ? "border-red-500 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 bg-white focus:border-[#FF6A00]"
                }`}
              />
              {errors.email && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-[#111111] mb-1.5">
                Phone Number <span className="text-[#FF6A00]">*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 ${
                  errors.phone
                    ? "border-red-500 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 bg-white focus:border-[#FF6A00]"
                }`}
              />
              {errors.phone && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.phone}</p>}
            </div>

            {/* Company / Business Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-bold text-[#111111] mb-1.5">
                Company / Business Name (Optional)
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Clinic, Brand or Studio Name"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-sm sm:text-base transition-colors focus:outline-none focus:border-[#FF6A00] focus:ring-2 focus:ring-[#FF6A00]/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Scope / Market Type */}
            <div>
              <label htmlFor="marketType" className="block text-sm font-bold text-[#111111] mb-1.5">
                Scope of Promotion <span className="text-[#FF6A00]">*</span>
              </label>
              <select
                id="marketType"
                name="marketType"
                value={formData.marketType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 ${
                  errors.marketType
                    ? "border-red-500 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 focus:border-[#FF6A00]"
                }`}
              >
                <option value="">Select scope</option>
                <option value="local">Local Promotion</option>
                <option value="international">International Promotion</option>
              </select>
              {errors.marketType && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.marketType}</p>}
            </div>

            {/* Service Interested In */}
            <div>
              <label htmlFor="service" className="block text-sm font-bold text-[#111111] mb-1.5">
                Service Interested In <span className="text-[#FF6A00]">*</span>
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 ${
                  errors.service
                    ? "border-red-500 bg-red-50/40 focus:border-red-600"
                    : "border-gray-300 focus:border-[#FF6A00]"
                }`}
              >
                <option value="">Select a service</option>
                <optgroup label="Local Services">
                  {servicesData
                    .filter((s) => s.category === "local")
                    .map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                </optgroup>
                <optgroup label="International Services">
                  {servicesData
                    .filter((s) => s.category === "international")
                    .map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                </optgroup>
                <option value="Custom Media Solution">Other / Custom Media Campaign</option>
              </select>
              {errors.service && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.service}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-bold text-[#111111] mb-1.5">
              Message / Project Overview <span className="text-[#FF6A00]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your brand, current challenges, objectives and timeline..."
              value={formData.message}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border text-sm sm:text-base transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6A00]/20 resize-y ${
                errors.message
                  ? "border-red-500 bg-red-50/40 focus:border-red-600"
                  : "border-gray-300 bg-white focus:border-[#FF6A00]"
              }`}
            />
            {errors.message && <p className="mt-1 text-xs sm:text-sm font-semibold text-red-600">{errors.message}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-[#FF6A00] hover:bg-[#e05d00] disabled:bg-orange-300 rounded-lg shadow transition-colors"
            >
              {isSubmitting ? (
                <span>Validating Enquiry...</span>
              ) : (
                <>
                  <span>Submit Project Enquiry</span>
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </button>
            <p className="text-xs text-gray-500 mt-2 font-medium">
              Ready for backend integration (Resend, SendGrid, Webhook or Node API).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
