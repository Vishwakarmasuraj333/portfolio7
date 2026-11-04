"use client";

import React, { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { TypewriterSubtitle } from "../ui/TypewriterSubtitle";
import { InteractiveHeroPortrait } from "../ui/InteractiveHeroPortrait";
import { ResumeModal } from "../ui/ResumeModal";
import {
  DoodleHeyArrow,
  DoodleCrownYellow,
  DoodleSpeechBubble,
  DoodleSmileySticker,
  DoodleLightningBolt,
  DoodleFluidWave,
  DoodleStar,
} from "../ui/Doodles";
import {
  Play,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  FileText,
  Mail,
  Sparkles,
  MousePointer,
} from "lucide-react";

export function HeroSection() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex flex-col justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden select-none"
    >
      {/* Background Organic Cyan/Blue Wave Splatter (Left Edge - like reference image) */}
      <div className="absolute top-1/4 -left-12 sm:-left-6 pointer-events-none z-0 hidden xs:block opacity-60">
        <DoodleFluidWave className="w-44 h-44 sm:w-56 sm:h-56" />
      </div>

      {/* Floating Yellow Star Top-Right (like reference image) */}
      <div className="absolute top-24 right-10 sm:right-24 pointer-events-none z-0 hidden sm:block">
        <DoodleStar className="w-8 h-8 text-[#FFD52E] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* 1. Handwritten Scribble Arrow: "Hey, ↳ I'm" (Exact Reference Element) */}
            <div className="relative mb-0 sm:mb-1 -ml-1">
              <DoodleHeyArrow className="w-32 h-16 sm:w-36 sm:h-20 text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]" />
            </div>

            {/* 2. Massive Name Title with Crown & Speech Bubble */}
            <div className="relative flex flex-wrap items-baseline gap-3 mb-2 sm:mb-3">
              {/* Hand-Drawn Yellow Crown Resting Directly Above Name */}
              <div className="absolute -top-7 sm:-top-9 left-2 sm:left-4 z-20 pointer-events-none">
                <DoodleCrownYellow className="w-10 h-8 sm:w-12 sm:h-10 text-[#FFD52E] drop-shadow-[0_2px_8px_rgba(255,213,46,0.6)]" />
              </div>

              {/* Giant Stylized Name "SURAJ" */}
              <h1 className="font-display font-black text-6xl xs:text-7xl sm:text-8xl md:text-9xl text-white tracking-tight uppercase leading-[0.9] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                SURAJ
              </h1>

              {/* Cyan Speech Bubble ("LET'S BUILD SOMETHING AWESOME!") */}
              <div className="relative sm:-top-6 -top-2 ml-0 sm:ml-2">
                <DoodleSpeechBubble
                  text="LET'S BUILD SOMETHING AWESOME!"
                  className="w-48 sm:w-56 text-[11px] sm:text-xs"
                />
              </div>
            </div>

            {/* 3. Subtitle Bar with Dots */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm sm:text-base md:text-lg font-display font-bold text-gray-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-300 font-black">
                Full-Stack Developer
              </span>
              <span className="text-purple-400 font-black">•</span>
              <span className="text-purple-200">M.Sc. IT Scholar</span>
              <span className="text-purple-400 font-black">•</span>
              <span className="text-cyan-300">Cloud &amp; Web Architect</span>
            </div>

            {/* 4. Action Buttons (Matches Cosmic Gradient Pill "Watch Showreel" + Dark Pill "View Projects ↗") */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 w-full sm:w-auto">
              {/* Button 1: Glowing Cosmic Gradient Pill Button */}
              <a
                href="#showreel"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 hover:from-red-600 hover:via-pink-600 hover:to-purple-700 text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <Play className="w-4 h-4 fill-current ml-0.5" />
                <span>Watch Showreel</span>
              </a>

              {/* Button 2: Dark Pill Button with Glowing Purple Border and Diagonal Arrow ↗ */}
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-[#111322]/90 hover:bg-[#1a1c30] text-white border-2 border-purple-500/30 hover:border-pink-500/60 font-display font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 backdrop-blur-md"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-pink-400 transition-transform" />
              </a>

              {/* Button 3: View Resume Modal */}
              <button
                type="button"
                onClick={() => setResumeModalOpen(true)}
                className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-full bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 hover:text-white border border-purple-500/40 text-xs font-display font-bold uppercase tracking-wider shadow-sm hover:scale-105 transition-all"
              >
                <FileText className="w-3.5 h-3.5 text-pink-400" />
                <span>Resume</span>
              </button>
            </div>

            {/* 5. Playful Sticker Doodles Bar (Smiley sticker + Yellow Lightning + Scroll Down pill) */}
            <div className="flex items-center gap-5 sm:gap-6 pt-2">
              {/* Cute Lime Smiley Face Sticker :) */}
              <div className="relative group cursor-pointer hover:rotate-12 transition-transform duration-200">
                <DoodleSmileySticker className="w-12 h-12 drop-shadow-[0_4px_12px_rgba(204,255,0,0.4)]" />
              </div>

              {/* Neon Yellow Lightning Bolt ⚡ */}
              <div className="relative animate-bounce pointer-events-none" style={{ animationDuration: "2.5s" }}>
                <DoodleLightningBolt className="w-7 h-12 drop-shadow-[0_0_12px_rgba(255,213,46,0.6)]" />
              </div>

              {/* "Scroll Down" Pill with Mouse Icon */}
              <a
                href="#showreel"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-white/30 text-gray-300 hover:text-white text-xs font-mono tracking-wider transition-all"
              >
                <span className="w-3.5 h-5 rounded-full border border-gray-400 flex items-start justify-center p-0.5">
                  <span className="w-1 h-1.5 rounded-full bg-white animate-bounce" />
                </span>
                <span>Scroll Down</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <InteractiveHeroPortrait />
          </div>

        </div>
      </div>

      {/* Resume Modal */}
      {resumeModalOpen && (
        <ResumeModal isOpen={resumeModalOpen} onClose={() => setResumeModalOpen(false)} />
      )}
    </section>
  );
}
