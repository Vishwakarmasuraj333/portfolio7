"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { TypewriterSubtitle } from "../ui/TypewriterSubtitle";
import { HeroScene } from "../three/HeroScene";
import { ResumeModal } from "../ui/ResumeModal";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  FileText,
  Mail,
  Sparkles,
  Code2,
  Award,
  Layers,
  Terminal,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"3d" | "portrait">("3d");

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Main Headline, Subtitle, Bio, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Availability live pulse badge with Purple/Pink glow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-850/80 border border-purple-500/30 backdrop-blur-md mb-5 shadow-[0_0_15px_rgba(168,85,247,0.25)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs uppercase tracking-[0.2em] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
                {siteConfig.availability}
              </span>
            </div>

            {/* Intro Preheading */}
            <div className="inline-flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-pink-300/90 font-bold">
                HELLO WORLD, I&apos;M SURAJ VISHWAKARMA
              </span>
            </div>

            {/* Main Cosmic Headline with Glowing Red/Purple/Pink Gradients */}
            <h1 className="font-display font-black text-[2.5rem] xs:text-5xl sm:text-6xl md:text-7xl lg:text-[4.4rem] xl:text-[4.8rem] text-white leading-[1.02] tracking-tight uppercase mb-4 break-words">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.4)]">
                DIGITAL
              </span> <br />
              EXPERIENCES <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">
                THAT WORK.
              </span>
            </h1>

            {/* Animated Typewriter Subtitle */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-base sm:text-lg md:text-xl font-bold text-white">
              <span className="text-purple-300/70 font-medium">Specializing in:</span>
              <div className="text-pink-400 font-display font-extrabold">
                <TypewriterSubtitle words={siteConfig.typewriterTitles} />
              </div>
            </div>

            {/* Supporting Bio Text */}
            <p className="text-sm sm:text-base md:text-lg text-purple-200/80 max-w-xl font-normal leading-relaxed mb-7 sm:mb-8">
              Full-Stack Developer and M.Sc. IT postgraduate scholar at Abhinav College (University of Mumbai). I engineer high-performance React &amp; Next.js platforms, resilient Python / Node.js microservices, and practical AI integrations.
            </p>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Primary CTA: Glowing Cosmic Gradient Pill */}
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.5)] hover:shadow-[0_0_35px_rgba(236,72,153,0.8)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              {/* Secondary CTA: Dark Glass Resume Modal Button */}
              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-space-850/80 hover:bg-space-800 text-white border border-purple-500/30 hover:border-pink-500/50 font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md"
              >
                <FileText className="w-4 h-4 text-pink-400" />
                <span>VIEW RESUME</span>
              </button>

              {/* Direct PDF Download */}
              <a
                href={siteConfig.links.resume}
                download="Suraj_Vishwakarma_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-full bg-space-800/60 hover:bg-space-800 text-xs font-bold text-purple-200/90 hover:text-white border border-purple-500/20 hover:border-pink-500/40 transition-all"
                title="Download verified resume PDF"
              >
                <Download className="w-4 h-4 text-pink-400" />
                <span>PDF</span>
              </a>
            </div>

            {/* Quick Stats & Verified Channels Strip */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-purple-500/20 w-full max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-950/40 border border-pink-500/30 text-xs font-bold text-pink-300">
                <Award className="w-3.5 h-3.5 text-pink-400" />
                <span>9.04 CGPA (A Grade)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-xs font-bold text-purple-300">
                <Code2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Full-Stack &amp; Next.js 14</span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-purple-500/30 bg-space-850/80 text-purple-200 hover:text-white hover:border-pink-500/50 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl border border-purple-500/30 bg-space-850/80 text-purple-200 hover:text-white hover:border-pink-500/50 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.links.email}
                  className="p-2 rounded-xl border border-purple-500/30 bg-space-850/80 text-purple-200 hover:text-white hover:border-pink-500/50 hover:shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all"
                  aria-label="Email Suraj"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Three.js Cosmic Sculpture + Developer Portrait */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
            {/* View Switcher: 3D Animation vs Studio Portrait */}
            <div className="inline-flex items-center p-1 rounded-full bg-space-850/90 border border-purple-500/30 backdrop-blur-md mb-4 shadow-lg z-20">
              <button
                type="button"
                onClick={() => setViewMode("3d")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                  viewMode === "3d"
                    ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Interactive 3D</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("portrait")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-display font-extrabold uppercase tracking-wider transition-all ${
                  viewMode === "portrait"
                    ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.5)]"
                    : "text-purple-300 hover:text-white"
                }`}
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Verified Portrait</span>
              </button>
            </div>

            {/* Container for either 3D Scene or Studio Portrait */}
            <div className="relative w-full max-w-[480px] min-h-[440px] flex items-center justify-center">
              {viewMode === "3d" ? (
                /* Interactive 3D Three.js Sculpture with pointer parallax */
                <div className="relative w-full h-[440px] sm:h-[480px] flex items-center justify-center">
                  {/* Ambient glowing purple/pink background ring */}
                  <div className="absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-purple-600/20 blur-3xl pointer-events-none" />
                  <div className="absolute w-60 h-60 rounded-full bg-pink-600/20 blur-2xl pointer-events-none" />

                  <HeroScene />

                  {/* Floating 3D Tech Badges */}
                  <div className="absolute top-4 -left-2 sm:-left-4 z-20 px-3 py-1.5 rounded-2xl bg-space-850/90 border border-purple-500/40 text-purple-200 font-display font-black text-xs shadow-[0_0_15px_rgba(168,85,247,0.3)] backdrop-blur-md animate-floatSubtle">
                    ⚡ React &amp; Next.js 14
                  </div>

                  <div className="absolute top-16 -right-2 sm:-right-4 z-20 px-3 py-1.5 rounded-2xl bg-space-850/90 border border-pink-500/40 text-pink-300 font-display font-black text-xs shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md">
                    🐍 Python &amp; FastAPI
                  </div>

                  <div className="absolute bottom-6 -left-2 sm:-left-4 z-20 px-3 py-1.5 rounded-2xl bg-space-850/90 border border-red-500/40 text-red-300 font-display font-black text-xs shadow-[0_0_15px_rgba(239,68,68,0.3)] backdrop-blur-md">
                    💎 Node.js &amp; Express
                  </div>

                  <div className="absolute -bottom-2 right-4 z-20 px-3.5 py-1.5 rounded-full bg-space-900/95 border border-purple-500/30 text-[11px] font-mono font-bold text-purple-300 backdrop-blur-md">
                    ✦ Drag to Rotate 3D
                  </div>
                </div>
              ) : (
                /* Suraj Vishwakarma's Official Studio Portrait */
                <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[400px] rounded-[2.5rem] p-1.5 bg-gradient-to-b from-red-500 via-pink-500 to-purple-600 shadow-[0_0_35px_rgba(236,72,153,0.4)] animate-in fade-in duration-300">
                  <div className="relative w-full h-full rounded-[2.2rem] overflow-hidden bg-space-900 border-2 border-space-850">
                    <Image
                      src="/images/suraj-portrait.jpg"
                      alt="Suraj Vishwakarma — Full-Stack Developer"
                      fill
                      priority
                      className="object-cover object-top hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0514] via-[#0A0514]/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 px-4 py-1.5 rounded-full bg-space-900/95 border border-pink-500/40 text-pink-300 text-xs font-display font-black tracking-wider uppercase whitespace-nowrap shadow-lg">
                      Suraj Vishwakarma • Pro
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </section>
  );
}
