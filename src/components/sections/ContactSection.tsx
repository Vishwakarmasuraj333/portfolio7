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
  Sparkles,
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
            "Thank you! Your message has been received and persisted successfully. I will get back to you soon.",
        });
        reset();
        try {
          confetti({
            particleCount: 75,
            spread: 80,
            origin: { y: 0.7 },
            colors: ["#EC4899", "#A855F7", "#EF4444", "#D6B477"],
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
    <section id="contact" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            LET&apos;S BUILD SOMETHING{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
              THAT WORKS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-purple-200/80 font-normal max-w-2xl mt-3">
            Have an idea, a project, or an opportunity? Let&apos;s connect and turn it into something useful, scalable, and user-friendly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-space-850/80 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.15)] backdrop-blur-xl space-y-5">
              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-pink-400 block mb-2">
                  DIRECT EMAIL
                </span>
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-space-900 border border-purple-500/30">
                  <a
                    href={siteConfig.links.email}
                    className="font-mono text-xs sm:text-sm font-bold text-white truncate hover:text-pink-400 transition-colors"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-xl border border-purple-500/30 bg-space-800 text-purple-200 hover:text-white hover:border-pink-500 transition-all shrink-0"
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

              <div>
                <span className="font-display font-bold text-xs uppercase tracking-wider text-purple-400 block mb-2">
                  LOCATION &amp; COLLEGE
                </span>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-purple-200">
                  <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Bhayandar, Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="pt-4 border-t border-purple-500/20">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-pink-400 block mb-3">
                  CONNECT ON CHANNELS
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

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-space-850/80 border border-purple-500/30 shadow-[0_0_35px_rgba(236,72,153,0.2)] backdrop-blur-xl">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                    />
                    {errors.name && (
                      <p className="text-pink-400 text-xs mt-1 font-medium">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-display font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                    />
                    {errors.email && (
                      <p className="text-pink-400 text-xs mt-1 font-medium">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    {...register("subject")}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all"
                  />
                  {errors.subject && (
                    <p className="text-pink-400 text-xs mt-1 font-medium">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-display font-bold uppercase tracking-wider text-purple-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    {...register("message")}
                    placeholder="Hello Suraj, I would like to discuss..."
                    className="w-full px-4 py-3 rounded-2xl bg-space-900 border border-purple-500/30 text-white placeholder-purple-400/40 text-sm focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all resize-none"
                  />
                  {errors.message && (
                    <p className="text-pink-400 text-xs mt-1 font-medium">{errors.message.message}</p>
                  )}
                </div>

                {submitResult && (
                  <div
                    className={`p-4 rounded-2xl text-xs sm:text-sm font-medium flex items-start gap-2.5 ${
                      submitResult.success
                        ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-300"
                        : "bg-red-950/60 border border-red-500/40 text-red-300"
                    }`}
                  >
                    {submitResult.success ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <span>{submitResult.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] hover:scale-[1.01] active:scale-95 transition-all disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SENDING MESSAGE...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND MESSAGE</span>
                      <Send className="w-4 h-4" />
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
