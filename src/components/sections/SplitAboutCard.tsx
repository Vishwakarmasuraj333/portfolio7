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
import { ArrowRight, GraduationCap, Award, CheckCircle2, Sparkles } from "lucide-react";

export function SplitAboutCard() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <>
      <section id="about" className="py-14 sm:py-20 relative overflow-hidden select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            
            {/* ================= LEFT CARD: LIME/YELLOW "FOCUS DISCIPLINE CONSISTENCY" ================= */}
            <div className="lg:col-span-5 relative rounded-3xl sm:rounded-[32px] bg-[#CCFF00] p-6 sm:p-8 text-[#0A0514] border-4 border-[#0A0514] shadow-[8px_8px_0px_#0A0514] flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:shadow-[12px_12px_0px_#0A0514] transition-all duration-300">
              
              {/* Top Banner Tag: FOCUS DISCIPLINE CONSISTENCY */}
              <div className="relative z-10">
                <div className="inline-block px-3.5 py-1.5 rounded-xl bg-[#0A0514] text-[#CCFF00] font-display font-black text-xs sm:text-sm uppercase tracking-wider mb-4 rotate-[-2deg] shadow-md">
                  FOCUS • DISCIPLINE • CONSISTENCY
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="font-display font-black text-xs uppercase tracking-widest text-[#0A0514]/80">
                    ACADEMIC EXCELLENCE
                  </span>
                </div>

                <h3 className="font-display font-black text-3xl sm:text-4xl text-[#0A0514] leading-[1.05] tracking-tight uppercase mb-2">
                  9.04 CGPA <br />
                  <span className="underline decoration-4 decoration-[#0A0514]">DISTINCTION</span>
                </h3>

                <p className="font-display font-bold text-xs sm:text-sm text-[#0A0514]/90 max-w-xs leading-relaxed">
                  B.Sc. IT &amp; M.Sc. IT Scholar at Abhinav College (Affiliated with University of Mumbai).
                </p>
              </div>

              {/* Developer Sketch Doodle with Crown (Matches the reference character sketch!) */}
              <div className="relative mt-6 pt-4 border-t-2 border-[#0A0514]/20 flex items-center justify-between">
                <div className="relative flex items-center gap-3">
                  {/* Avatar Circle with Hand-Drawn Crown */}
                  <div className="relative">
                    <div className="absolute -top-4 -left-1 z-20">
                      <DoodleCrownYellow className="w-8 h-6 text-[#FFD52E]" />
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#0A0514] overflow-hidden border-2 border-[#0A0514] p-1 flex items-center justify-center">
                      <Image
                        src="/images/suraj-portrait.jpg"
                        alt="Suraj Vishwakarma"
                        width={60}
                        height={60}
                        className="rounded-xl object-cover grayscale contrast-125"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-display font-black text-base text-[#0A0514]">
                      Suraj Vishwakarma
                    </h4>
                    <span className="font-mono text-xs font-bold text-[#0A0514]/80">
                      Full-Stack Developer
                    </span>
                  </div>
                </div>

                {/* Starburst badge */}
                <div className="w-12 h-12 rounded-full bg-[#0A0514] text-[#CCFF00] flex items-center justify-center font-display font-black text-[10px] uppercase text-center p-1 rotate-12 shadow-sm">
                  100% PASSION
                </div>
              </div>

            </div>

            {/* ================= RIGHT CARD: DARK "ABOUT ME" ================= */}
            <div className="lg:col-span-7 relative rounded-3xl sm:rounded-[32px] bg-[#111322] border-2 border-white/10 hover:border-purple-500/50 p-6 sm:p-8 lg:p-10 shadow-2xl flex flex-col justify-between transition-all duration-300">
              
              {/* Crown doodle top-left */}
              <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
                <DoodleCrownYellow className="w-10 h-8 text-[#FFD52E] opacity-70" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#CCFF00]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-purple-300">
                    DISCOVER MY STORY
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase mb-4">
                  ABOUT ME
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-5">
                  I&apos;m <strong className="text-white font-bold">Suraj Vishwakarma</strong>, a Full-Stack Developer and M.Sc. IT Scholar based in Bhayandar, Mumbai. I love turning complex architectural problems into playful, robust, and impactful digital experiences that deliver real performance.
                </p>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-6">
                  With a solid 9.04 CGPA honors background from Abhinav College (University of Mumbai), I pair rigorous backend principles in Python &amp; Node.js with modern frontend craftsmanship in React, Next.js 14, and TypeScript.
                </p>

                {/* Key Stat Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <span className="block font-display font-black text-base text-[#CCFF00]">
                      9.04 CGPA
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">
                      Distinction Honors
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left">
                    <span className="block font-display font-black text-base text-cyan-300">
                      M.Sc. IT
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">
                      Currently Pursuing
                    </span>
                  </div>

                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-left col-span-2 sm:col-span-1">
                    <span className="block font-display font-black text-base text-pink-400">
                      Available
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase font-mono">
                      Full-Time &amp; Freelance
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row with "Know More About Me ➔" and Purple Brush Stroke Doodle */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10 relative">
                <button
                  type="button"
                  onClick={() => setResumeOpen(true)}
                  className="group inline-flex items-center gap-2 font-display font-black text-sm sm:text-base text-[#CCFF00] hover:text-white transition-colors"
                >
                  <span>Know More About Me</span>
                  <span className="w-6 h-6 rounded-full bg-[#CCFF00] text-[#0A0514] flex items-center justify-center group-hover:scale-110 group-hover:bg-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </span>
                </button>

                {/* Purple Brush Stroke Doodle on bottom-right (matches reference!) */}
                <div className="pointer-events-none hidden sm:block">
                  <DoodlePurpleBrush className="w-16 h-8 text-purple-400 opacity-80" />
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

