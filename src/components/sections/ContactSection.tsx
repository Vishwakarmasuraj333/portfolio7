"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, ContactFormInput } from "@/lib/validation";
import { siteConfig } from "@/lib/site-config";
import confetti from "canvas-confetti";
import {
  Mail,
  Send,
  CheckCircle2,
  AlertTriangle,
  Github,
  Linkedin,
  MapPin,
  Loader2,
  Copy,
  Check,
  FileText,
} from "lucide-react";
import { DoodleStar, DoodleSmiley, DoodleHeart } from "../ui/Doodles";

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.rawEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resJson = await response.json();

      if (response.ok && resJson.success) {
        setSubmitResult({
          success: true,
          message:
            "Thank you! Your message has been received and persisted successfully. I will get back to you soon.",
        });
        reset();
        try {
          confetti({
            particleCount: 65,
            spread: 75,
            origin: { y: 0.7 },
            colors: ["#1749E8", "#FFD52E", "#F43B2F", "#10B981"],
          });
        } catch {
          // Ignore
        }
      } else {
        setSubmitResult({
          success: false,
          message: resJson.error || "Unable to send message right now. Please email directly.",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message: "Network error occurred. Please contact me directly via email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-handwriting font-bold text-lg sm:text-xl text-[#1749E8] tracking-wider uppercase">
              Get In Touch
            </span>
            <DoodleStar className="w-5 h-5 text-[#151515]" />
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight uppercase">
            LET&apos;S BUILD SOMETHING THAT WORKS.
          </h2>

          <p className="text-base sm:text-lg text-[#475569] font-medium max-w-2xl mt-3">
            Have an idea, a project, or an opportunity? Let&apos;s connect and turn it into something useful, scalable, and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border-3 border-[#151515] shadow-sticker-md space-y-5">
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#64748B] block mb-2">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-[#FFFDF7] border-2 border-[#151515]">
                  <a
                    href={siteConfig.links.email}
                    className="font-mono text-xs sm:text-sm font-bold text-[#151515] truncate hover:text-[#1749E8]"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-xl border border-[#151515] bg-white text-[#151515] hover:bg-slate-100 transition-all shrink-0"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-[#10B981]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#64748B] block mb-2">
                  LOCATION &amp; COLLEGE
                </span>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#151515]">
                  <MapPin className="w-4 h-4 text-[#F43B2F] shrink-0" />
                  <span>Bhayandar, Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="pt-4 border-t-2 border-[#151515]">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-[#64748B] block mb-3">
                  CONNECT ON SOCIALS
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-bold text-xs uppercase hover:bg-[#151515] hover:text-white transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-bold text-xs uppercase hover:bg-[#1749E8] hover:text-white transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Playful Yellow Sticky Note */}
            <div className="p-6 rounded-3xl bg-[#FFD52E] border-3 border-[#151515] shadow-sticker-md text-[#151515] rotate-[-1.5deg]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-black text-xs uppercase tracking-wider">
                  QUICK RESPONSE PROMISE
                </span>
                <DoodleSmiley className="w-5 h-5" />
              </div>
              <p className="font-handwriting font-bold text-lg leading-snug">
                I review and respond to project inquiries and engineering opportunities within 24 to 48 hours. Let&apos;s build something memorable!
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-4 border-[#151515] shadow-sticker-lg p-6 sm:p-8 md:p-10">
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#151515] mb-6">
                <div>
                  <h3 className="font-display font-black text-2xl text-[#151515] uppercase tracking-wide">
                    SEND A DIRECT MESSAGE
                  </h3>
                  <p className="text-xs text-[#64748B] font-medium mt-1">
                    Validated server-side with anti-spam &amp; JSON file persistence.
                  </p>
                </div>
                <Mail className="w-6 h-6 text-[#1749E8]" />
              </div>

              {/* Status Message */}
              {submitResult && (
                <div
                  className={`p-4 rounded-2xl border-2 mb-6 flex items-start gap-3 ${
                    submitResult.success
                      ? "bg-[#ECFDF5] border-[#10B981] text-[#065F46]"
                      : "bg-[#FEF2F2] border-[#EF4444] text-[#991B1B]"
                  }`}
                >
                  {submitResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-[#EF4444] shrink-0 mt-0.5" />
                  )}
                  <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                    {submitResult.message}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Honeypot field for bot protection */}
                <input
                  type="text"
                  name="_hp_field"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2"
                    >
                      Your Name <span className="text-[#F43B2F]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Jane Doe"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FFFDF7] border-2 text-[#151515] placeholder-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#1749E8] transition-all ${
                        errors.name ? "border-[#EF4444]" : "border-[#151515]"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#EF4444] font-bold mt-1.5">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2"
                    >
                      Your Email <span className="text-[#F43B2F]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="e.g. jane@company.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-2xl bg-[#FFFDF7] border-2 text-[#151515] placeholder-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#1749E8] transition-all ${
                        errors.email ? "border-[#EF4444]" : "border-[#151515]"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#EF4444] font-bold mt-1.5">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2"
                  >
                    Subject <span className="text-[#F43B2F]">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Project inquiry or full-stack role"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FFFDF7] border-2 text-[#151515] placeholder-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#1749E8] transition-all ${
                      errors.subject ? "border-[#EF4444]" : "border-[#151515]"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-[#EF4444] font-bold mt-1.5">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-display font-bold text-xs uppercase tracking-wider text-[#151515] mb-2"
                  >
                    Message <span className="text-[#F43B2F]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-2xl bg-[#FFFDF7] border-2 text-[#151515] placeholder-slate-400 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#1749E8] transition-all resize-y ${
                      errors.message ? "border-[#EF4444]" : "border-[#151515]"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-[#EF4444] font-bold mt-1.5">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-8 rounded-full bg-[#151515] text-white border-2 border-[#151515] shadow-sticker font-display font-black text-sm tracking-wider uppercase hover:bg-black hover:shadow-sticker-hover hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1749E8]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-[#FFD52E]" />
                        <span>SUBMITTING MESSAGE...</span>
                      </>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-4 h-4 text-[#FFD52E]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
