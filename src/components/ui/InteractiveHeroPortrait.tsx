"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  DoodleStar,
  DoodleHeart,
  DoodleClapperboard,
} from "./Doodles";
import { Sparkles, Code2 } from "lucide-react";

export function InteractiveHeroPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize -1 to +1 for 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-full max-w-[420px] mx-auto select-none py-4 px-4"
        style={{ perspective: "1000px" }}
      >
        {/* 3D Tilt Wrapper */}
        <div
          className="relative transition-transform duration-200 ease-out flex items-center justify-center"
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
              isHovered ? 1.025 : 1
            })`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Ambient Cosmic Rim Glows (Red, Pink, Purple) */}
          <div
            className={`absolute -inset-4 rounded-t-[9rem] rounded-b-[3.5rem] bg-gradient-to-r from-purple-600/35 via-pink-600/35 to-red-600/35 blur-2xl transition-opacity duration-500 pointer-events-none ${
              isHovered ? "opacity-100 scale-105" : "opacity-60 scale-100"
            }`}
          />

          {/* Outer Arched Border Frame */}
          <div className="relative w-[290px] xs:w-[320px] sm:w-[340px] h-[400px] xs:h-[430px] sm:h-[450px] rounded-t-[8rem] sm:rounded-t-[8.5rem] rounded-b-[3rem] p-1.5 bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 shadow-[0_0_40px_rgba(168,85,247,0.35)] transition-all duration-300">
            {/* Inner Arched Card */}
            <div className="relative w-full h-full rounded-t-[7.6rem] sm:rounded-t-[8.1rem] rounded-b-[2.7rem] overflow-hidden bg-space-900 border-2 border-purple-500/30">
              {/* Background gradient behind developer silhouette */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-space-900 to-space-950" />

              {/* Professional 3D Coder Boy Graphic (Suraj Coding at Desk) */}
              <Image
                src="/images/boy-coding-3d.png"
                alt="Suraj Vishwakarma — 3D Full-Stack Developer Coding"
                fill
                priority
                sizes="(max-width: 640px) 320px, 340px"
                className={`object-cover object-center transition-transform duration-700 ease-out ${
                  isHovered ? "scale-108" : "scale-100"
                }`}
              />

              {/* Bottom Dark Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0A0514] via-[#0A0514]/70 to-transparent pointer-events-none" />

              {/* Bottom Center Title Pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-space-900/95 border border-pink-500/40 text-pink-300 text-[11px] font-display font-black tracking-wider uppercase whitespace-nowrap shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Full-Stack &amp; React.js Developer</span>
              </div>
            </div>
          </div>

          {/* ------------------- PRO STICKERS & FLOATING BADGES ------------------- */}

          {/* 1. TOP-RIGHT: Speech Bubble "HI! I'M SURAJ ✦" */}
          <div
            className={`absolute -top-3 -right-2 xs:-right-4 sm:-right-6 z-30 transition-all duration-300 ${
              isHovered ? "scale-110 -rotate-2" : "rotate-3"
            }`}
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="relative bg-space-900/95 border-2 border-[#38BDF8] px-3.5 py-1.5 rounded-2xl shadow-[0_0_18px_rgba(56,189,248,0.5)] backdrop-blur-md">
              <span className="font-display font-black text-xs text-[#38BDF8] tracking-wider uppercase flex items-center gap-1">
                HI! I&apos;M SURAJ <Sparkles className="w-3 h-3 text-[#FFD52E]" />
              </span>
              <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-space-900 border-r-2 border-b-2 border-[#38BDF8] rotate-45" />
            </div>
          </div>

          {/* 2. TOP-LEFT: Clean Professional Tech Badge */}
          <div
            className={`absolute -top-4 -left-2 xs:-left-4 sm:-left-6 z-30 transition-all duration-300 ${
              isHovered ? "scale-110 -rotate-3" : "-rotate-6"
            }`}
            style={{ transform: "translateZ(35px)" }}
          >
            <div className="relative bg-space-900/95 border-2 border-purple-500/70 px-3.5 py-1.5 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.45)] backdrop-blur-md flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-mono text-[11px] font-black uppercase text-purple-200 tracking-wider">
                ⚡ NEXT.JS 14 &amp; AI
              </span>
            </div>
          </div>

          {/* 3. Floating Clapperboard Sticker */}
          <div
            className="absolute -bottom-2 -right-4 sm:-right-8 z-30 pointer-events-none drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <DoodleClapperboard className="w-12 h-12" />
          </div>

          {/* 4. Yellow Hand-drawn Star */}
          <div className="absolute top-2 -right-1 z-20 pointer-events-none">
            <DoodleStar className="w-6 h-6 text-[#FFD52E] animate-spinSlow" />
          </div>

          {/* 5. MID-LEFT: React.js & Next.js Yellow/Cosmic Pill */}
          <div
            className={`absolute top-24 -left-4 sm:-left-8 z-20 transition-all duration-300 ${
              isHovered ? "-translate-x-2 rotate-[-4deg]" : "rotate-[-2deg]"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-display font-black text-[11px] shadow-[0_0_14px_rgba(251,191,36,0.5)] border border-yellow-200">
              <DoodleStar className="w-3.5 h-3.5 text-slate-950" />
              <span>React.js &amp; Next.js</span>
            </div>
          </div>

          {/* 6. MID-RIGHT: 9.04 CGPA Distinction Honors Pill */}
          <div
            className={`absolute top-28 -right-4 sm:-right-8 z-20 transition-all duration-300 ${
              isHovered ? "translate-x-2 rotate-[4deg]" : "rotate-[2deg]"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-space-850/95 border border-[#CCFF00] text-[#CCFF00] font-display font-black text-[11px] shadow-[0_0_14px_rgba(204,255,0,0.4)] backdrop-blur-md">
              <span>9.04 CGPA Honors</span>
              <span className="text-[#CCFF00]">🏆</span>
            </div>
          </div>

          {/* 7. LOWER-LEFT: Python & FastAPI Pill */}
          <div
            className={`absolute bottom-20 -left-3 sm:-left-6 z-20 transition-all duration-300 ${
              isHovered ? "-translate-x-1.5 rotate-[3deg]" : "-rotate-[1deg]"
            }`}
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-space-850/95 border border-purple-500/50 text-purple-300 font-display font-extrabold text-[11px] shadow-[0_0_14px_rgba(168,85,247,0.3)] backdrop-blur-md">
              <span>Python, MySQL &amp; APIs</span>
            </div>
          </div>

          {/* 8. LOWER-RIGHT: Clean Code Heart Badge */}
          <div
            className={`absolute bottom-14 -right-3 sm:-right-6 z-20 transition-all duration-300 ${
              isHovered ? "translate-x-1.5 scale-110 rotate-[-4deg]" : "rotate-[-2deg]"
            }`}
            style={{ transform: "translateZ(20px)" }}
          >
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-display font-black text-[11px] shadow-[0_0_14px_rgba(244,63,94,0.5)] border border-red-400">
              <span>Clean Code</span>
              <DoodleHeart className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
