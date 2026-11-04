"use client";

import React from "react";
import {
  DoodleStarburstBlue,
  DoodleTelephone,
} from "../ui/Doodles";
import { ArrowRight, Sparkles, MessageSquare, Send } from "lucide-react";

export function ContactCtaBanner() {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Deep Cosmic Red-Pink-Purple CTA Panel */}
        <div className="group relative rounded-[2.5rem] sm:rounded-[3.5rem] bg-gradient-to-r from-red-950/70 via-purple-950/80 to-pink-950/70 border border-purple-500/40 p-7 sm:p-10 md:p-12 lg:p-14 shadow-[0_0_50px_rgba(236,72,153,0.2)] hover:shadow-[0_0_70px_rgba(236,72,153,0.35)] transition-all duration-500 text-white overflow-hidden backdrop-blur-2xl">
          {/* Ambient Glowing Gradients inside banner */}
          <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-pink-500/15 blur-[90px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-purple-600/20 blur-[90px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center relative z-10">
            {/* Center: Main Headline, Subtext, & Glowing Neon Pill CTA */}
            <div className="lg:col-span-8 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/70 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-4 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white leading-[1.08] mb-4">
                READY TO BUILD SOMETHING <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                  EXTRAORDINARY?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-purple-200/90 max-w-xl mb-7 leading-relaxed font-normal">
                Have an idea, an engineering opportunity, or a project in mind? Let&apos;s connect and turn high standards into scalable, responsive, and reliable software.
              </p>

              <a
                href="#contact"
                className="group/btn inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 text-white border border-pink-400/40 shadow-[0_0_25px_rgba(236,72,153,0.4)] font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase hover:shadow-[0_0_40px_rgba(236,72,153,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
              >
                <span>LET&apos;S TALK CODE</span>
                <Send className="w-4 h-4 text-pink-200 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Right: Retro Cosmic Communication Widget */}
            <div className="lg:col-span-4 flex justify-center items-center relative mt-4 lg:mt-0">
              <div className="relative group/phone cursor-pointer">
                {/* Glowing Cosmic Badge */}
                <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-purple-900/60 via-pink-900/50 to-red-900/40 border border-purple-500/40 shadow-[0_0_35px_rgba(168,85,247,0.3)] flex items-center justify-center group-hover/phone:scale-110 group-hover/phone:rotate-6 transition-all duration-300">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-space-900/90 border border-pink-500/50 flex flex-col items-center justify-center text-center p-3">
                    <MessageSquare className="w-8 h-8 text-pink-400 mb-1 group-hover/phone:animate-bounce" />
                    <span className="font-mono text-[10px] text-purple-300 uppercase tracking-widest">
                      FAST RESPONSE
                    </span>
                    <span className="font-display font-black text-xs text-white">
                      &lt; 24 HOURS
                    </span>
                  </div>
                </div>

                {/* Speech Bubble: "DM ME ANYTIME!" */}
                <div className="absolute -top-3 -right-2 sm:-right-4 bg-space-900/95 border border-pink-500/50 px-3.5 py-1.5 rounded-2xl shadow-[0_0_15px_rgba(236,72,153,0.3)] rotate-[8deg] group-hover/phone:rotate-0 group-hover/phone:scale-110 transition-all duration-300">
                  <span className="font-display font-black text-xs text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-300 tracking-wider uppercase">
                    DM ME ANYTIME! ⚡
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
