"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ResumeModal } from "../ui/ResumeModal";
import {
  DoodleCrownYellow,
  DoodlePurpleBrush,
  DoodleStar,
} from "../ui/Doodles";
import { ArrowRight, GraduationCap, Award, CheckCircle2, Sparkles, BookOpen, Star } from "lucide-react";

export function AboutSection() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-14 sm:py-20 md:py-24 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* ================= LEFT CARD: COSMIC GLASS "FOCUS DISCIPLINE CONSISTENCY" ================= */}
            <div className="lg:col-span-5 relative rounded-3xl sm:rounded-[32px] bg-space-850/85 backdrop-blur-xl p-6 sm:p-8 text-white border-2 border-purple-500/30 shadow-[0_0_35px_rgba(168,85,247,0.18)] hover:border-pink-500/50 hover:shadow-[0_0_45px_rgba(236,72,153,0.25)] flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5 transition-all duration-300">
              
              {/* Background ambient decorative glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-pink-500/20 via-purple-600/20 to-transparent rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-tr from-red-600/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

              {/* Top Banner Tag: FOCUS DISCIPLINE CONSISTENCY */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-mono font-black text-xs uppercase tracking-wider mb-5 shadow-[0_0_15px_rgba(236,72,153,0.4)]">
                  <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                  <span>FOCUS • DISCIPLINE • CONSISTENCY</span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-pink-400" />
                  <span className="font-mono font-bold text-xs uppercase tracking-widest text-pink-300">
                    ACADEMIC EXCELLENCE
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-white leading-[1.08] tracking-tight uppercase mb-3">
                  9.04 CGPA <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-300 underline decoration-pink-500/50 decoration-4 underline-offset-4">
                    DISTINCTION
                  </span>
                </h3>

                <p className="text-purple-200/90 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
                  B.Sc. IT &amp; M.Sc. IT Scholar at Abhinav College (Affiliated with University of Mumbai). Rigorous academic foundation paired with hands-on full-stack engineering.
                </p>
              </div>

              {/* Developer Profile Strip */}
              <div className="relative mt-8 pt-5 border-t border-purple-500/20 flex items-center justify-between z-10">
                <div className="relative flex items-center gap-3.5">
                  {/* Avatar Circle with Hand-Drawn Crown */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-1 z-20 pointer-events-none">
                      <DoodleCrownYellow className="w-7 h-5 text-[#FFD52E] drop-shadow-[0_2px_6px_rgba(255,213,46,0.6)]" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-space-900 overflow-hidden border-2 border-pink-500/50 p-0.5 flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.3)]">
                      <Image
                        src="/images/suraj-portrait.jpg"
                        alt="Suraj Vishwakarma"
                        width={60}
                        height={60}
                        className="rounded-xl object-cover object-top w-full h-full contrast-110"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-black text-base text-white group-hover:text-pink-300 transition-colors">
                      Suraj Vishwakarma
                    </h4>
                    <span className="font-mono text-xs font-semibold text-purple-300/90">
                      Full-Stack &amp; AI Developer
                    </span>
                  </div>
                </div>

                {/* Starburst badge */}
                <div className="px-3 py-1.5 rounded-full bg-space-900/90 border border-pink-500/40 text-pink-300 flex items-center gap-1 font-mono font-bold text-[11px] uppercase shadow-[0_0_12px_rgba(236,72,153,0.25)]">
                  <Star className="w-3 h-3 text-pink-400 fill-pink-400" />
                  <span>100% PASSION</span>
                </div>
              </div>

            </div>

            {/* ================= RIGHT CARD: COSMIC "ABOUT ME" ================= */}
            <div className="lg:col-span-7 relative rounded-3xl sm:rounded-[32px] bg-space-850/85 backdrop-blur-xl border-2 border-purple-500/30 hover:border-pink-500/50 p-6 sm:p-8 lg:p-10 shadow-[0_0_35px_rgba(168,85,247,0.18)] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group">
              
              {/* Crown doodle top-right */}
              <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
                <DoodleCrownYellow className="w-10 h-8 text-[#FFD52E] opacity-70" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
                    DISCOVER MY STORY
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase mb-4">
                  ABOUT{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                    ME
                  </span>
                </h3>

                <p className="text-purple-100/90 text-sm sm:text-base leading-relaxed font-normal mb-4">
                  I&apos;m <strong className="text-white font-bold">Suraj Vishwakarma</strong>, a Full-Stack Developer and M.Sc. IT Scholar based in Bhayandar, Mumbai. I engineer resilient backend services, responsive frontend interfaces, and machine learning pipelines that solve tangible problems.
                </p>

                <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  With a solid 9.04 CGPA honors background from Abhinav College (University of Mumbai), I pair rigorous backend principles in Python &amp; Node.js with modern frontend craftsmanship in React, Next.js 14, and TypeScript.
                </p>

                {/* Key Stat Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-2xl bg-space-900/80 border border-purple-500/30 text-left hover:border-pink-500/40 transition-colors shadow-sm">
                    <span className="block font-display font-black text-base text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                      9.04 CGPA
                    </span>
                    <span className="text-[10px] text-purple-300/80 uppercase font-mono">
                      Distinction Honors
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-space-900/80 border border-purple-500/30 text-left hover:border-purple-400/40 transition-colors shadow-sm">
                    <span className="block font-display font-black text-base text-purple-300">
                      M.Sc. IT
                    </span>
                    <span className="text-[10px] text-purple-300/80 uppercase font-mono">
                      Currently Pursuing
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-space-900/80 border border-purple-500/30 text-left col-span-2 sm:col-span-1 hover:border-pink-500/40 transition-colors shadow-sm">
                    <div className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="block font-display font-black text-base text-pink-300">
                        Available
                      </span>
                    </div>
                    <span className="text-[10px] text-purple-300/80 uppercase font-mono">
                      Full-Time &amp; Freelance
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row with "Know More About Me ➔" and Purple Brush Stroke Doodle */}
              <div className="flex items-center justify-between pt-4 border-t border-purple-500/20 relative">
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center gap-2.5 font-display font-black text-sm sm:text-base text-pink-300 hover:text-white transition-colors"
                >
                  <span>Know More About Me</span>
                  <span className="w-7 h-7 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white flex items-center justify-center group-hover:scale-110 shadow-[0_0_12px_rgba(236,72,153,0.4)] transition-all">
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </button>

                {/* Purple Brush Stroke Doodle on bottom-right */}
                <div className="pointer-events-none hidden sm:block">
                  <DoodlePurpleBrush className="w-16 h-8 text-purple-400 opacity-70" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Resume Modal */}
      {resumeOpen && <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />}
    </>
  );
}
