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
  Sparkles,
  User,
  MessageSquare,
  Tag,
  Clock,
  GraduationCap,
} from "lucide-react";

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
            "Thank you! Your message has been delivered and recorded successfully. I will get back to you within 24 hours.",
        });
        reset();
        try {
          confetti({
            particleCount: 85,
            spread: 90,
            origin: { y: 0.7 },
            colors: ["#EC4899", "#A855F7", "#EF4444", "#FFD52E"],
          });
        } catch {
          // Ignore
        }
      } else {
        setSubmitResult({
          success: false,
          message:
            resJson.error ||
            "Unable to send message right now. Please email directly at vishwakarmasuraj333@gmail.com",
        });
      }
    } catch {
      setSubmitResult({
        success: false,
        message:
          "Network error occurred. Please contact me directly via email at vishwakarmasuraj333@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>LET&apos;S CONNECT • GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.08]">
            LET&apos;S BUILD SOMETHING{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.35)]">
              THAT WORKS.
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/80 font-normal max-w-2xl mt-3 leading-relaxed">
            Have a project, full-time role, or contract opportunity? Fill out the form below or reach out directly through email. I respond promptly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Details Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-space-850/80 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl space-y-6">
              {/* Direct Email with 1-click copy */}
              <div>
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-pink-400 flex items-center gap-1.5 mb-2.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>DIRECT EMAIL</span>
                </span>
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-space-900 border border-purple-500/30 hover:border-pink-500/50 transition-colors">
                  <a
                    href={siteConfig.links.email}
                    className="font-mono text-xs sm:text-sm font-bold text-white truncate hover:text-pink-300 transition-colors"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl border border-purple-500/30 bg-space-800 text-purple-200 hover:text-white hover:border-pink-500 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Academic Context */}
              <div>
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-purple-400 flex items-center gap-1.5 mb-2.5">
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>LOCATION &amp; CAMPUS</span>
                </span>
                <div className="p-3.5 rounded-2xl bg-space-900 border border-purple-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-purple-100">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>Bhayandar, Mumbai, Maharashtra, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-purple-300/80">
                    <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>Abhinav College, University of Mumbai</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee Pill */}
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-space-900/90 border border-purple-500/30">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-xs text-white uppercase tracking-wider">
                    FAST RESPONSE GUARANTEED
                  </span>
                  <span className="text-[11px] font-mono text-purple-300/80">
                    Usually replies in less than 24 hours
                  </span>
                </div>
              </div>

              {/* Channels & Social Links */}
              <div className="pt-4 border-t border-purple-500/20">
                <span className="font-mono font-bold text-xs uppercase tracking-wider text-pink-400 block mb-3">
                  OFFICIAL CHANNELS
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-space-900 text-white border border-purple-500/30 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] font-display font-bold text-xs uppercase transition-all"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-space-900 text-white border border-purple-500/30 hover:border-pink-500 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] font-display font-bold text-xs uppercase transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-pink-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Complete Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-space-850/80 border border-purple-500/30 shadow-[0_0_35px_rgba(236,72,153,0.2)] backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-6">
                <div>
                  <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">
                    SEND A DIRECT MESSAGE
                  </h3>
                  <p className="text-xs text-purple-300/80 font-normal mt-0.5">
                    Fill out the form below. All messages are stored securely.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-space-900 border border-pink-500/30 text-pink-300 font-mono text-[11px] font-bold">
                  <Clock className="w-3 h-3 text-pink-400" />
                  <span>24h Turnaround</span>
                </div>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-purple-200 mb-1.5">
                      <User className="w-3.5 h-3.5 text-purple-400" />
                      <span>Your Name *</span>
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="e.g. John Doe or Hiring Manager"
                      className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                    />
                    {errors.name && (
                      <p className="text-pink-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-purple-200 mb-1.5">
                      <Mail className="w-3.5 h-3.5 text-pink-400" />
                      <span>Your Email *</span>
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="e.g. recruiter@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                    />
                    {errors.email && (
                      <p className="text-pink-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 shrink-0" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-purple-200 mb-1.5">
                    <Tag className="w-3.5 h-3.5 text-red-400" />
                    <span>Subject / Topic *</span>
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="e.g. Full-Stack Developer Role / Project Consultation"
                    className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                  />
                  {errors.subject && (
                    <p className="text-pink-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className="flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-purple-200 mb-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-purple-400" />
                    <span>Your Message *</span>
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Hi Suraj, I reviewed your work and would like to discuss..."
                    className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all resize-none leading-relaxed"
                  />
                  {errors.message && (
                    <p className="text-pink-400 text-xs mt-1.5 font-medium flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3 shrink-0" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submission Feedback Banner */}
                {submitResult && (
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-2.5 animate-in fade-in duration-200 ${
                      submitResult.success
                        ? "bg-emerald-950/70 border border-emerald-500/40 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.25)]"
                        : "bg-red-950/70 border border-red-500/40 text-red-200 shadow-[0_0_20px_rgba(239,68,68,0.25)]"
                    }`}
                  >
                    {submitResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span className="leading-relaxed">{submitResult.message}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white font-display font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-pink-200" />
                      <span>TRANSMITTING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4 text-pink-200" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
