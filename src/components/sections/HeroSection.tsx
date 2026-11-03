"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { TypewriterSubtitle } from "../ui/TypewriterSubtitle";
import { DeveloperHeroPortrait } from "../ui/DeveloperHeroPortrait";
import { ResumeModal } from "../ui/ResumeModal";
import {
  DoodleStar,
  DoodleLightning,
  DoodleArrowCurved,
} from "../ui/Doodles";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  FileText,
  Mail,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 lg:pb-24 bg-[#FFFDF7] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Eyebrow, Main Oversized Typography, Subtitle, Bio, CTAs & Socials */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Eyebrow with doodle lightning & star */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 group cursor-default">
              <DoodleLightning className="w-6 h-8 text-[#FFD52E] group-hover:scale-125 group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-handwriting font-bold text-lg sm:text-xl text-[#151515] tracking-wide">
                HELLO, INTERNET! I&apos;M SURAJ
              </span>
              <DoodleStar className="w-5 h-5 text-[#151515] group-hover:rotate-90 group-hover:scale-125 transition-transform duration-300" />
            </div>

            {/* Massive Bold Display Headline (matching "BRANDS THAT STICK." composition) */}
            <h1 className="font-display font-black text-[2.4rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.1rem] text-[#151515] leading-[0.98] tracking-tight uppercase mb-4 break-words">
              BUILDING <br />
              <span className="text-[#1749E8] doodle-underline inline-block hover:scale-[1.02] transition-transform origin-left">
                DIGITAL
              </span> <br />
              EXPERIENCES <br />
              <span className="text-[#1749E8] inline-block hover:scale-[1.02] transition-transform origin-left">
                THAT WORK.
              </span>
            </h1>

            {/* Animated Typewriter Subtitle */}
            <div className="flex flex-wrap items-center gap-2 mb-4 text-sm sm:text-base md:text-xl font-bold text-[#151515]">
              <span className="text-[#64748B]">Specializing in:</span>
              <TypewriterSubtitle words={siteConfig.typewriterTitles} />
            </div>

            {/* Supporting Bio Text */}
            <p className="text-sm sm:text-base md:text-lg text-[#334155] max-w-xl font-medium leading-relaxed mb-7 sm:mb-8">
              {siteConfig.description}
            </p>

            {/* Call To Actions with Punchy Tactile Hover */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Primary CTA: Warm Red Pill "EXPLORE MY WORK" */}
              <a
                href="#projects"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F43B2F] text-white border-2 border-[#151515] shadow-sticker font-display font-black text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-1 hover:shadow-sticker-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-hover transition-all duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#1749E8]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
              </a>

              {/* Secondary CTA: Clean White/Black Pill "ABOUT ME" */}
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-bold text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-1 hover:bg-[#FFFDF7] hover:shadow-sticker-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-hover transition-all duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#1749E8]"
              >
                ABOUT ME
              </a>

              {/* View/Download Resume button */}
              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-1 hover:shadow-sticker-lg active:translate-x-0.5 active:translate-y-0.5 active:shadow-sticker-hover transition-all duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-[#1749E8]"
              >
                <FileText className="w-4 h-4" />
                <span>RESUME</span>
              </button>

              <a
                href={siteConfig.links.resume}
                download="Suraj_Vishwakarma_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#151515] hover:text-[#1749E8] hover:underline transition-colors"
                title="Direct PDF Download"
              >
                <Download className="w-4 h-4 text-[#1749E8]" />
                <span>PDF</span>
              </a>
            </div>

            {/* Hand-drawn arrow pointing to social links */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t-2 border-[#E2E8F0] w-full max-w-lg">
              <span className="font-handwriting font-bold text-base sm:text-lg text-[#151515]">
                Verified Profiles:
              </span>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:-translate-y-1 hover:rotate-[-4deg] hover:bg-[#151515] hover:text-white hover:shadow-sticker-md active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200"
                  aria-label="GitHub Profile"
                  title="GitHub: Vishwakarmasuraj333"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:-translate-y-1 hover:rotate-[4deg] hover:bg-[#1749E8] hover:text-white hover:shadow-sticker-md active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn: suraj-vishwakarma-2ab64436a"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href={siteConfig.links.email}
                  className="p-2.5 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:-translate-y-1 hover:rotate-[-4deg] hover:bg-[#FFD52E] hover:text-[#151515] hover:shadow-sticker-md active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200"
                  aria-label="Email Suraj"
                  title="Email: itxsurajofficial@gmail.com"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Developer Portrait Composition */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-4 lg:mt-0">
            <DeveloperHeroPortrait />
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
