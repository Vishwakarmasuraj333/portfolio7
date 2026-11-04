"use client";

import React from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import {
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
  Award,
  CheckCircle2,
} from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large Cosmic Night Glass Panel with Glowing Border */}
        <div className="relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-space-850/80 border border-purple-500/30 p-6 sm:p-10 md:p-12 lg:p-16 shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-2xl text-white overflow-hidden">
          {/* Ambient Glowing Gradients inside panel */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-pink-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-purple-600/15 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Greeting, Bio, Education Details & CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-4 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>ABOUT SURAJ VISHWAKARMA</span>
              </div>

              {/* Main Heading */}
              <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase leading-[1.08] mb-6">
                DRIVEN BY PASSION. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                  ENGINEERED WITH
                </span>{" "}
                DISCIPLINE.
              </h2>

              {/* Bio Paragraphs */}
              <p className="text-base sm:text-lg text-purple-100/90 leading-relaxed font-normal mb-6 max-w-xl">
                I&apos;m a Full-Stack Developer with a deep commitment to engineering high-performance web applications, scalable RESTful microservices, and practical AI integrations. I bridge the gap between intuitive user experiences and dependable backend architecture.
              </p>

              {/* Academic Details Card: Abhinav College, Bhayandar */}
              <div className="bg-space-900/80 border border-purple-500/30 rounded-2xl p-5 mb-8 w-full max-w-xl shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:border-pink-500/50 transition-all">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-pink-400 font-display font-bold text-xs sm:text-sm tracking-wide">
                    <GraduationCap className="w-5 h-5 text-pink-400" />
                    <span>ACADEMIC FOUNDATION • ABHINAV COLLEGE</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-950/80 border border-pink-500/40 text-[10px] font-mono font-bold text-pink-300">
                    MUMBAI UNIVERSITY
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-purple-200/90 space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">M.Sc. Information Technology:</strong> Abhinav College, Bhayandar (Currently Pursuing, 2025 — Present)
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                    <p>
                      <strong className="text-white">B.Sc. Information Technology:</strong> Graduated with <strong className="text-pink-300">9.04 CGPA (A Grade)</strong> honors from Abhinav College (2022 — 2025)
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex items-center gap-4">
                <a
                  href="#skills"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-xs sm:text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(236,72,153,0.4)] hover:shadow-[0_0_30px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <span>EXPLORE MY TECH STACK</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </a>
              </div>
            </div>

            {/* Right Column: Currently Exploring Cosmic Focus Card */}
            <div className="lg:col-span-5 flex justify-center items-center mt-4 lg:mt-0">
              <div className="relative w-full max-w-md bg-space-900/90 text-white rounded-3xl border border-purple-500/40 p-6 sm:p-8 shadow-[0_0_35px_rgba(168,85,247,0.2)] hover:border-pink-500/50 hover:shadow-[0_0_45px_rgba(236,72,153,0.3)] transition-all duration-300">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-purple-500/25 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
                    <h3 className="font-display font-black text-base sm:text-lg text-white uppercase tracking-wider">
                      CURRENTLY EXPLORING:
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] font-bold text-pink-300 bg-pink-950/60 px-2.5 py-0.5 rounded-full border border-pink-500/30">
                    2026 FOCUS
                  </span>
                </div>

                {/* Checklist */}
                <ul className="space-y-3.5 font-medium text-xs sm:text-sm text-purple-200/85">
                  <li className="flex items-start gap-3 hover:text-white transition-colors group">
                    <span className="text-base p-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 shrink-0">🚀</span>
                    <div>
                      <strong className="text-white font-bold block">Next.js 14/15 App Router:</strong> Server components, streaming &amp; static optimization
                    </div>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors group">
                    <span className="text-base p-1.5 rounded-lg bg-pink-950/60 border border-pink-500/30 shrink-0">⚡</span>
                    <div>
                      <strong className="text-white font-bold block">Backend Architecture:</strong> RESTful microservices, auth pipelines &amp; Node.js/Express
                    </div>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors group">
                    <span className="text-base p-1.5 rounded-lg bg-red-950/60 border border-red-500/30 shrink-0">🤖</span>
                    <div>
                      <strong className="text-white font-bold block">AI/ML &amp; Python FastAPI:</strong> Anomaly detection, model integration &amp; async APIs
                    </div>
                  </li>
                  <li className="flex items-start gap-3 hover:text-white transition-colors group">
                    <span className="text-base p-1.5 rounded-lg bg-purple-950/60 border border-purple-500/30 shrink-0">🗄️</span>
                    <div>
                      <strong className="text-white font-bold block">Database Engineering:</strong> MongoDB &amp; MySQL schema design, indexing &amp; CRUD
                    </div>
                  </li>
                </ul>

                {/* Footer Note with Heart */}
                <div className="flex justify-between items-center pt-4 mt-5 border-t border-purple-500/20">
                  <span className="font-handwriting text-sm sm:text-base font-bold text-pink-300">
                    Always building &amp; learning ✨
                  </span>
                  <DoodleHeart className="w-5 h-5 text-pink-500 animate-pulse hover:scale-125 transition-transform cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
