"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  DoodleStar,
  DoodleSmiley,
  DoodleHeart,
  DoodleStarburstBlue,
} from "./Doodles";
import { Sparkles, Terminal, Code2, Laptop, User } from "lucide-react";

export function InteractiveHeroPortrait() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [blink, setBlink] = useState(false);
  const [imageType, setImageType] = useState<"3d-boy" | "portrait">("3d-boy");

  // Automatic gentle blink effect when idle
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 3600);
    return () => clearInterval(blinkInterval);
  }, []);

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

    // Eye pupil offset calculation (-4.5px to +4.5px)
    const pupilX = Math.max(-4.5, Math.min(4.5, ((x - centerX) / centerX) * 4.5));
    const pupilY = Math.max(-4.5, Math.min(4.5, ((y - centerY) / centerY) * 4.5));
    setMousePos({ x: pupilX, y: pupilY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Visual Sub-Mode Switcher: 3D Boy Coding vs Studio Portrait */}
      <div className="inline-flex items-center p-1 rounded-full bg-space-900/95 border border-purple-500/35 backdrop-blur-md mb-2 shadow-md z-30">
        <button
          type="button"
          onClick={() => setImageType("3d-boy")}
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-display font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
            imageType === "3d-boy"
              ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]"
              : "text-purple-300 hover:text-white"
          }`}
        >
          <Laptop className="w-3 h-3" />
          <span>3D Boy Coding</span>
        </button>
        <button
          type="button"
          onClick={() => setImageType("portrait")}
          className={`flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[11px] font-display font-extrabold uppercase tracking-wider transition-all cursor-pointer ${
            imageType === "portrait"
              ? "bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white shadow-[0_0_12px_rgba(236,72,153,0.5)]"
              : "text-purple-300 hover:text-white"
          }`}
        >
          <User className="w-3 h-3" />
          <span>Studio Portrait</span>
        </button>
      </div>

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
            className={`absolute -inset-4 rounded-t-[9rem] rounded-b-[3.5rem] bg-gradient-to-r from-red-600/35 via-pink-600/35 to-purple-600/35 blur-2xl transition-opacity duration-500 pointer-events-none ${
              isHovered ? "opacity-100 scale-105" : "opacity-60 scale-100"
            }`}
          />

          {/* Outer Arched Border Frame matching reference layout */}
          <div className="relative w-[290px] xs:w-[320px] sm:w-[340px] h-[400px] xs:h-[430px] sm:h-[450px] rounded-t-[8rem] sm:rounded-t-[8.5rem] rounded-b-[3rem] p-1.5 bg-gradient-to-b from-red-500 via-pink-500 to-purple-600 shadow-[0_0_40px_rgba(236,72,153,0.35)] transition-all duration-300">
            {/* Inner Arched Card */}
            <div className="relative w-full h-full rounded-t-[7.6rem] sm:rounded-t-[8.1rem] rounded-b-[2.7rem] overflow-hidden bg-space-900 border-2 border-purple-500/30">
              {/* Background gradient behind developer silhouette */}
              <div className="absolute inset-0 bg-gradient-to-b from-purple-950/60 via-space-900 to-space-950" />

              {/* Developer Image: 3D Boy Coding vs Studio Portrait */}
              <Image
                src={
                  imageType === "3d-boy"
                    ? "/images/boy-coding-3d.png"
                    : "/images/suraj-portrait.jpg"
                }
                alt="Suraj Vishwakarma — Full-Stack Developer"
                fill
                priority
                sizes="(max-width: 640px) 320px, 340px"
                className={`object-cover object-top transition-transform duration-700 ease-out ${
                  isHovered ? "scale-108" : "scale-100"
                }`}
              />

              {/* Bottom Dark Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0A0514] via-[#0A0514]/70 to-transparent pointer-events-none" />

              {/* Bottom Center Title Pill: "FULL-STACK & REACT.JS DEVELOPER" */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3.5 py-1.5 rounded-full bg-space-900/95 border border-pink-500/40 text-pink-300 text-[11px] font-display font-black tracking-wider uppercase whitespace-nowrap shadow-[0_0_15px_rgba(236,72,153,0.3)] backdrop-blur-md flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Full-Stack &amp; React.js Developer</span>
              </div>
            </div>
          </div>

          {/* ------------------- INTERACTIVE FLOATING STICKERS & BADGES ------------------- */}

          {/* 1. TOP-RIGHT: Speech Bubble "HI! I'M SURAJ ✦" with Hover Tail */}
          <div
            className={`absolute -top-3 -right-2 xs:-right-4 sm:-right-6 z-30 transition-all duration-300 ${
              isHovered ? "scale-110 -rotate-2" : "rotate-3"
            }`}
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="relative bg-space-900/95 border-2 border-pink-500/60 px-3.5 py-1.5 rounded-2xl shadow-[0_0_18px_rgba(236,72,153,0.4)] backdrop-blur-md">
              <span className="font-display font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-300 to-purple-300 tracking-wider uppercase flex items-center gap-1">
                HI! I&apos;M SURAJ <Sparkles className="w-3 h-3 text-pink-400" />
              </span>
              {/* Speech bubble tail pointer */}
              <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-space-900 border-r-2 border-b-2 border-pink-500/60 rotate-45" />
            </div>
          </div>

          {/* 2. TOP-LEFT: INTERACTIVE EYES MASCOT STICKER (LOOK & OPEN ANIMATION) */}
          <div
            className={`absolute -top-4 -left-2 xs:-left-4 sm:-left-6 z-30 transition-all duration-300 ${
              isHovered ? "scale-115 rotate-6" : "-rotate-6"
            }`}
            style={{ transform: "translateZ(35px)" }}
            title={isHovered ? "Watching you move! 👀" : "Hover me to see eyes open!"}
          >
            <div className="relative bg-space-900/95 border-2 border-purple-500/70 p-2 sm:p-2.5 rounded-2xl shadow-[0_0_20px_rgba(168,85,247,0.45)] backdrop-blur-md flex items-center gap-2 group/eyes cursor-pointer">
              {/* Animated SVG Eyes that open wide and look at mouse */}
              <svg
                viewBox="0 0 64 32"
                className="w-11 h-6 select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Left Eye Sclera (White) */}
                <rect
                  x="4"
                  y="4"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFFFFF"
                  stroke="#151515"
                  strokeWidth="1.5"
                />
                {/* Left Eye Pupil (Tracks mouse, expands on hover) */}
                <g
                  style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    transition: "transform 0.08s ease-out",
                  }}
                >
                  <circle
                    cx="16"
                    cy="16"
                    r={isHovered ? 6 : 4.5}
                    fill="#0A0514"
                  />
                  {/* Specular Light Highlight */}
                  <circle
                    cx="18"
                    cy="14"
                    r={isHovered ? 2 : 1.5}
                    fill="#FFFFFF"
                  />
                </g>

                {/* Right Eye Sclera (White) */}
                <rect
                  x="36"
                  y="4"
                  width="24"
                  height="24"
                  rx="12"
                  fill="#FFFFFF"
                  stroke="#151515"
                  strokeWidth="1.5"
                />
                {/* Right Eye Pupil (Tracks mouse, expands on hover) */}
                <g
                  style={{
                    transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
                    transition: "transform 0.08s ease-out",
                  }}
                >
                  <circle
                    cx="48"
                    cy="16"
                    r={isHovered ? 6 : 4.5}
                    fill="#0A0514"
                  />
                  {/* Specular Light Highlight */}
                  <circle
                    cx="50"
                    cy="14"
                    r={isHovered ? 2 : 1.5}
                    fill="#FFFFFF"
                  />
                </g>

                {/* Dynamic Animated Eyelids (Opens wide on hover, blinks when idle) */}
                <rect
                  x="3"
                  y="3"
                  width="26"
                  height={
                    blink
                      ? 26
                      : isHovered
                      ? 0
                      : 8
                  }
                  rx="6"
                  fill="#A855F7"
                  className="transition-all duration-150"
                />
                <rect
                  x="35"
                  y="3"
                  width="26"
                  height={
                    blink
                      ? 26
                      : isHovered
                      ? 0
                      : 8
                  }
                  rx="6"
                  fill="#A855F7"
                  className="transition-all duration-150"
                />
              </svg>

              {/* Sticker Caption */}
              <span className="font-mono text-[10px] font-extrabold uppercase text-purple-300 tracking-wider pr-1">
                {isHovered ? "EYES OPEN! 👀" : "CODING 💻"}
              </span>
            </div>
          </div>

          {/* 3. MID-LEFT: React.js & Next.js Yellow/Cosmic Pill */}
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

          {/* 4. MID-RIGHT: Full-Stack Pro Pill */}
          <div
            className={`absolute top-28 -right-4 sm:-right-8 z-20 transition-all duration-300 ${
              isHovered ? "translate-x-2 rotate-[4deg]" : "rotate-[2deg]"
            }`}
            style={{ transform: "translateZ(25px)" }}
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-space-850/95 border border-pink-500/50 text-pink-300 font-display font-black text-[11px] shadow-[0_0_14px_rgba(236,72,153,0.35)] backdrop-blur-md">
              <span>Full-Stack Pro</span>
              <span className="text-pink-400">✦</span>
            </div>
          </div>

          {/* 5. LOWER-LEFT: Python & FastAPI Pill */}
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

          {/* 6. LOWER-RIGHT: Clean Code Heart Badge */}
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
