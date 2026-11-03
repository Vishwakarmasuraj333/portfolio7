"use client";

import React from "react";
import {
  DoodleStarburstBlue,
  DoodleTelephone,
  DoodleArrowCurved,
} from "../ui/Doodles";
import { ArrowRight } from "lucide-react";

export function ContactCtaBanner() {
  return (
    <section className="py-12 sm:py-16 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bright Yellow CTA Panel */}
        <div className="group relative rounded-[2rem] sm:rounded-[3rem] lg:rounded-[3.5rem] bg-[#FFD52E] border-4 border-[#151515] p-5 sm:p-8 md:p-10 lg:p-12 shadow-sticker-lg hover:shadow-sticker-xl transition-all duration-300 text-[#151515] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            {/* Left: Royal Blue Starburst with Cute Eyes */}
            <div className="lg:col-span-2 hidden lg:flex justify-center items-center">
              <DoodleStarburstBlue className="w-24 h-24 drop-shadow-md animate-bounce group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" style={{ animationDuration: "3s" }} />
            </div>

            {/* Center: Main Headline, Subtext, & Black Pill CTA */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-[#151515] leading-[1.1] mb-3">
                READY TO BUILD SOMETHING <br />
                <span className="text-[#1749E8] doodle-underline inline-block hover:scale-[1.02] transition-transform origin-left">
                  THAT WORKS?
                </span>
              </h2>

              <p className="text-xs sm:text-sm md:text-base font-medium text-[#151515]/90 max-w-lg mb-6 leading-relaxed">
                Have an idea, a project, or an opportunity? Let&apos;s connect and turn it into something useful, responsive, and reliable.
              </p>

              <a
                href="#contact"
                className="group/btn inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#151515] text-white border-2 border-[#151515] shadow-sticker font-display font-black text-xs sm:text-sm tracking-wider uppercase hover:bg-black hover:shadow-sticker-lg hover:-translate-y-1 active:translate-x-0.5 active:translate-y-0.5 transition-all duration-200 focus:outline-none focus-visible:ring-3 focus-visible:ring-white"
              >
                <span>LET&apos;S TALK</span>
                <ArrowRight className="w-4 h-4 text-[#FFD52E] group-hover/btn:translate-x-1.5 transition-transform duration-200" />
              </a>
            </div>

            {/* Right: Retro Red Telephone Sticker with "DM ME ANYTIME!" Speech Bubble */}
            <div className="lg:col-span-3 flex justify-center items-center relative mt-4 lg:mt-0">
              <div className="relative group/phone cursor-pointer">
                {/* Red Telephone Sticker with hover wiggle */}
                <DoodleTelephone className="w-32 h-28 sm:w-40 sm:h-36 drop-shadow-lg group-hover/phone:animate-wiggle group-hover/phone:scale-105 transition-transform duration-200" />

                {/* Speech Bubble: "DM ME ANYTIME!" */}
                <div className="absolute -top-3 -right-2 sm:-right-6 bg-white border-2 border-[#151515] px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-2xl shadow-sticker rotate-[8deg] group-hover/phone:rotate-0 group-hover/phone:scale-110 transition-all duration-200">
                  <span className="font-display font-black text-xs sm:text-sm text-[#151515] tracking-wider uppercase">
                    DM ME ANYTIME!
                  </span>
                  <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-white border-r-2 border-b-2 border-[#151515] rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
