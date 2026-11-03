"use client";

import React, { useState } from "react";
import Image from "next/image";
import { DoodleStarburstRed, DoodleStar, DoodlePencil } from "./Doodles";

export function DeveloperHeroPortrait() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative w-full max-w-[460px] mx-auto flex items-center justify-center select-none pt-4 sm:pt-6 pb-4">
      {/* 1. Large Royal Blue Arch / Circle Backdrop */}
      <div className="group relative w-[260px] h-[320px] xs:w-[280px] xs:h-[350px] sm:w-[330px] sm:h-[400px] md:w-[350px] md:h-[420px] rounded-t-[180px] rounded-b-[40px] bg-[#1749E8] border-4 border-[#151515] shadow-sticker-lg hover:shadow-sticker-xl transition-all duration-300 overflow-hidden flex items-end justify-center">
        {/* Subtle grid pattern inside arch */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Developer Portrait Image or SVG Illustration Fallback */}
        {!imgError ? (
          <div className="relative w-full h-[94%] z-10 flex items-end justify-center group-hover:scale-[1.03] transition-transform duration-300 ease-out">
            <Image
              src="/images/suraj-portrait.jpg"
              alt="Suraj Vishwakarma - Full-Stack Developer"
              width={380}
              height={440}
              priority
              className="object-cover object-top w-full h-full filter drop-shadow-md"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          /* SVG Developer Illustration Fallback */
          <div className="relative w-full h-[94%] z-10 flex items-end justify-center group-hover:scale-[1.03] transition-transform duration-300">
            <svg viewBox="0 0 300 360" className="w-full h-auto drop-shadow-md">
              <path
                d="M40 360 C50 250, 90 220, 150 220 C210 220, 250 250, 260 360 Z"
                fill="#FFD52E"
                stroke="#151515"
                strokeWidth="4"
              />
              <path
                d="M120 220 C125 240, 175 240, 180 220"
                fill="none"
                stroke="#151515"
                strokeWidth="4"
              />
              <rect x="135" y="180" width="30" height="42" fill="#FBD38D" stroke="#151515" strokeWidth="4" />
              <circle cx="150" cy="140" r="50" fill="#FBD38D" stroke="#151515" strokeWidth="4" />
              <path
                d="M95 135 C95 80, 205 80, 205 135 C190 115, 175 120, 150 115 C125 120, 110 115, 95 135 Z"
                fill="#151515"
              />
              <circle cx="132" cy="140" r="14" fill="white" stroke="#151515" strokeWidth="3" />
              <circle cx="168" cy="140" r="14" fill="white" stroke="#151515" strokeWidth="3" />
              <line x1="146" y1="140" x2="154" y2="140" stroke="#151515" strokeWidth="3" />
              <circle cx="132" cy="140" r="4" fill="#151515" />
              <circle cx="168" cy="140" r="4" fill="#151515" />
              <path d="M140 162 Q150 172 160 162" stroke="#151515" strokeWidth="3" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        )}
      </div>

      {/* 2. Top Right Speech Bubble: "HI! I'M SURAJ" with hover bounce */}
      <div className="absolute -top-1 sm:-top-3 right-0 sm:-right-4 z-20 hover:scale-110 hover:-rotate-2 transition-all duration-200 cursor-pointer">
        <div className="relative bg-[#151515] text-[#FFD52E] px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-full border-2 border-white shadow-sticker font-display text-sm sm:text-lg font-black tracking-wide">
          HI! I&apos;M SURAJ
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#151515]" />
        </div>
      </div>

      {/* 3. Top Right Red Starburst: "IDEAS WITH ARCHITECTURE" */}
      <div className="absolute -top-4 -right-8 sm:-right-12 z-10 hidden sm:block hover:rotate-12 hover:scale-110 transition-transform duration-200 cursor-pointer">
        <DoodleStarburstRed className="w-12 h-12 sm:w-14 sm:h-14 drop-shadow-md" />
      </div>

      {/* 4. Floating Pill Sticker: "CODE WITH PURPOSE" */}
      <div className="absolute top-24 -right-2 sm:-right-8 z-20 bg-white border-2 border-[#151515] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-sticker rotate-[-6deg] flex items-center gap-1.5 hover:rotate-0 hover:scale-105 hover:shadow-sticker-lg transition-all duration-200 cursor-pointer">
        <span className="font-handwriting font-bold text-sm sm:text-base text-[#151515]">
          Code with Purpose
        </span>
        <DoodlePencil className="w-4 h-4 sm:w-5 sm:h-5" />
      </div>

      {/* 5. Left Floating Yellow Sticker: "FULL-STACK DEV" */}
      <div className="absolute top-16 -left-3 sm:-left-8 z-20 bg-[#FFD52E] text-[#151515] border-2 border-[#151515] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-2xl shadow-sticker rotate-[8deg] flex items-center gap-1.5 hover:rotate-0 hover:scale-105 hover:shadow-sticker-lg transition-all duration-200 cursor-pointer">
        <span className="font-display font-black text-[11px] sm:text-xs tracking-wide">
          ⚡ FULL-STACK DEV
        </span>
      </div>

      {/* 6. Bottom Left Floating Terminal Badge: ">_ npm run build" */}
      <div className="absolute bottom-5 -left-4 sm:-left-10 z-20 bg-[#151515] text-[#FFD52E] border-2 border-white px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-xl shadow-sticker rotate-[-4deg] font-mono text-[10px] sm:text-xs font-semibold flex items-center gap-1.5 sm:gap-2 hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-pointer">
        <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
        <span>&gt;_ build: success</span>
      </div>

      {/* 7. Bottom Right Doodle Star */}
      <div className="absolute -bottom-2 right-4 z-20 text-[#151515] hover:rotate-45 hover:scale-125 transition-transform duration-200 cursor-pointer">
        <DoodleStar className="w-6 h-6 sm:w-7 sm:h-7 text-[#151515]" />
      </div>
    </div>
  );
}
