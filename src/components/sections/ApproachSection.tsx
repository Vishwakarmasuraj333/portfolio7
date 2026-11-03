"use client";

import React from "react";
import { approachPrinciples } from "@/lib/principles";
import { DoodleStarburstRed, DoodleStar } from "../ui/Doodles";
import { Code, Smartphone, ShieldCheck, Check } from "lucide-react";

export function ApproachSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-[#1749E8]" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-[#F43B2F]" />;
      case 2:
      default:
        return <ShieldCheck className="w-5 h-5 text-[#10B981]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Red Banner Header with Squiggle (matching "KIND WORDS" reference element) */}
        <div className="relative rounded-3xl bg-[#F43B2F] border-4 border-[#151515] shadow-sticker-lg p-5 sm:p-8 lg:p-10 mb-8 overflow-hidden text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group hover:shadow-sticker-xl transition-all duration-300">
          <div className="flex items-center gap-4 z-10">
            {/* White Doodle Starburst with hover spin */}
            <div className="w-12 h-12 rounded-2xl bg-white text-[#F43B2F] border-2 border-[#151515] shadow-sticker flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-200">
              <DoodleStar className="w-7 h-7 text-[#F43B2F]" />
            </div>

            <div>
              <span className="font-handwriting font-bold text-base sm:text-lg text-[#FFD52E] block">
                Engineering Philosophy
              </span>
              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl uppercase tracking-tight">
                HOW I APPROACH DEVELOPMENT
              </h2>
            </div>
          </div>

          <p className="text-white/90 font-medium text-xs sm:text-sm max-w-md z-10">
            No fictional quotes or inflated metrics. Honest engineering standards applied to every line of code, endpoint, and user interface.
          </p>

          {/* Background decorative doodles */}
          <div className="absolute -right-6 -bottom-6 opacity-20 pointer-events-none group-hover:rotate-45 transition-transform duration-500">
            <DoodleStarburstRed className="w-36 h-36" />
          </div>
        </div>

        {/* 3 Speech Bubble Quote Cards with Tactile Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approachPrinciples.map((item, idx) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl border-3 border-[#151515] shadow-sticker-md p-5 sm:p-7 flex flex-col justify-between hover:-translate-y-2 hover:rotate-[0.5deg] hover:shadow-sticker-lg transition-all duration-200"
            >
              <div>
                {/* Speech Bubble Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-slate-100 border border-[#151515] group-hover:scale-110 transition-transform">
                      {getIcon(idx)}
                    </div>
                    <span className="font-mono text-xs font-bold text-[#64748B] uppercase">
                      Principle 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-2xl text-[#FFD52E] font-serif leading-none group-hover:scale-125 transition-transform">
                    “
                  </span>
                </div>

                {/* Bold Principle Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-[#151515] uppercase tracking-wide mb-3 group-hover:text-[#1749E8] transition-colors">
                  {item.principle}
                </h3>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed italic mb-5">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Specific Implementation Standards */}
                <ul className="space-y-2 pt-3 border-t border-slate-100">
                  {item.bulletPoints.map((bp, bIdx) => (
                    <li key={bIdx} className="flex items-center gap-2 text-xs text-[#334155] font-medium">
                      <Check className="w-3.5 h-3.5 text-[#1749E8] shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="font-handwriting font-bold text-sm text-[#1749E8]">
                  Suraj Vishwakarma
                </span>
                <span className="font-mono text-[10px] text-[#64748B] uppercase">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
