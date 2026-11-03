"use client";

import React from "react";
import { siteConfig } from "@/lib/site-config";
import {
  DoodleBinderClip,
  DoodleHeart,
  DoodleArrowCurved,
  DoodleStar,
} from "../ui/Doodles";
import {
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Royal-Blue Rounded Panel */}
        <div className="relative rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] bg-[#1749E8] border-4 border-[#151515] p-5 sm:p-8 md:p-10 lg:p-14 shadow-sticker-lg text-white overflow-hidden">
          {/* Subtle background graph pattern */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #ffffff 1.5px, transparent 1.5px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Column: Polaroid sticker, "HI, I'M SURAJ!", bio, education & "MORE ABOUT ME" */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="flex flex-wrap sm:flex-nowrap items-start gap-4 mb-5 sm:mb-6">
                {/* Polaroid Sticker with Smiley Code Card */}
                <div className="relative bg-white text-[#151515] p-2 pb-3 rounded-2xl border-2 border-[#151515] shadow-sticker rotate-[-6deg] hover:rotate-0 hover:scale-105 hover:shadow-sticker-lg transition-all duration-200 cursor-pointer shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFD52E] rounded-xl border border-[#151515] flex items-center justify-center">
                    <Terminal className="w-8 h-8 text-[#151515]" />
                  </div>
                  <div className="mt-1 text-center font-handwriting text-xs font-bold text-[#151515]">
                    &lt;coder /&gt;
                  </div>

                  {/* Yellow Note Tag: "CODE FUELS IDEAS" */}
                  <div className="absolute -bottom-3 -right-4 sm:-right-6 bg-[#FFD52E] text-[#151515] px-2.5 py-1 rounded-lg border-2 border-[#151515] shadow-sticker font-display text-[10px] sm:text-xs font-black tracking-wider uppercase rotate-[6deg] whitespace-nowrap hover:scale-110 transition-transform">
                    ☕ CODE FUELS IDEAS
                  </div>
                </div>

                {/* Heading */}
                <div className="pt-2 pl-0 sm:pl-2">
                  <span className="font-handwriting text-lg sm:text-xl text-[#FFD52E] font-bold block mb-1">
                    Introduction
                  </span>
                  <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-5xl tracking-tight text-white uppercase">
                    HI, I&apos;M SURAJ!
                  </h2>
                </div>
              </div>

              {/* Bio Paragraphs */}
              <p className="text-sm sm:text-base md:text-lg text-white/95 leading-relaxed font-normal mb-5 max-w-xl">
                I&apos;m a Full-Stack Developer who enjoys turning ideas into functional, responsive, and user-friendly web applications. I work across frontend interfaces, backend APIs, databases, and application integration, with a strong interest in learning modern technologies and building practical projects.
              </p>

              {/* Mini Education & College details */}
              <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-4 sm:p-5 mb-6 w-full max-w-xl hover:border-white/40 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-[#FFD52E] font-display font-bold text-xs sm:text-sm tracking-wide">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>EDUCATION &amp; COLLEGE</span>
                </div>
                <div className="text-xs sm:text-sm text-white/90 space-y-1.5">
                  <p>
                    <strong className="text-white">B.Sc. Information Technology</strong> — Abhinav College, Bhayandar (Graduated 2025)
                  </p>
                  <p>
                    <strong className="text-white">M.Sc. Information Technology</strong> — Abhinav College, Bhayandar (Currently Pursuing)
                  </p>
                </div>
              </div>

              {/* CTA Button with curved arrow */}
              <div className="flex items-center gap-4 relative">
                <a
                  href="#skills"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs sm:text-sm tracking-wider uppercase hover:-translate-y-1 hover:bg-[#FFD52E] hover:shadow-sticker-lg active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200"
                >
                  <span>EXPLORE MY TECH STACK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </a>

                {/* Hand-drawn curved arrow doodle */}
                <div className="text-white pointer-events-none hidden sm:block">
                  <DoodleArrowCurved className="w-12 h-8 text-white rotate-[-20deg]" />
                </div>
              </div>
            </div>

            {/* Right Column: Lined Paper Notebook with Binder Clip */}
            <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
              <div className="relative w-full max-w-md bg-white text-[#151515] rounded-3xl border-4 border-[#151515] shadow-sticker-lg p-5 sm:p-7 pt-9 sm:pt-11 rotate-[1deg] hover:rotate-0 hover:scale-[1.01] hover:shadow-sticker-xl transition-all duration-200">
                {/* Black Binder Clip Pinning the Notebook at Top */}
                <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 z-20">
                  <DoodleBinderClip className="w-11 h-11 sm:w-12 sm:h-12" />
                </div>

                {/* Notebook Header */}
                <div className="flex items-center justify-between border-b-2 border-[#151515] pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#1749E8]" />
                    <h3 className="font-display font-black text-base sm:text-xl text-[#151515] uppercase tracking-wide">
                      CURRENTLY EXPLORING:
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-[#1749E8] bg-[#EEF2FF] px-2 py-0.5 rounded border border-[#1749E8]">
                    2026 FOCUS
                  </span>
                </div>

                {/* Checklist of Real Technical Interests */}
                <ul className="space-y-2.5 sm:space-y-3 font-medium text-xs sm:text-sm text-[#334155]">
                  <li className="flex items-start gap-2.5 hover:text-[#1749E8] transition-colors">
                    <span className="text-base leading-none">🚀</span>
                    <div>
                      <strong className="text-[#151515] font-bold">Next.js 14/15 App Router:</strong> Server components, streaming &amp; static generation
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 hover:text-[#1749E8] transition-colors">
                    <span className="text-base leading-none">⚡</span>
                    <div>
                      <strong className="text-[#151515] font-bold">Backend Architecture:</strong> RESTful APIs, auth pipelines &amp; Node.js/Express
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 hover:text-[#1749E8] transition-colors">
                    <span className="text-base leading-none">🤖</span>
                    <div>
                      <strong className="text-[#151515] font-bold">AI/ML &amp; Python FastAPI:</strong> Anomaly detection, model integration &amp; async services
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 hover:text-[#1749E8] transition-colors">
                    <span className="text-base leading-none">🗄️</span>
                    <div>
                      <strong className="text-[#151515] font-bold">Database Engineering:</strong> MongoDB &amp; MySQL schema design, indexing &amp; CRUD
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5 hover:text-[#1749E8] transition-colors">
                    <span className="text-base leading-none">🎨</span>
                    <div>
                      <strong className="text-[#151515] font-bold">Full-Stack Products:</strong> End-to-end applications from scratch to deployment
                    </div>
                  </li>
                </ul>

                {/* Hand-Drawn Red Heart at Bottom Right */}
                <div className="flex justify-between items-end pt-3 sm:pt-4 mt-4 border-t border-slate-200">
                  <span className="font-handwriting text-sm sm:text-base font-bold text-[#64748B]">
                    Always learning &amp; building ✨
                  </span>
                  <DoodleHeart className="w-6 h-6 sm:w-7 sm:h-7 text-[#F43B2F] hover:scale-125 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
