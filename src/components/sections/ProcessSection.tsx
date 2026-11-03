"use client";

import React from "react";
import { processSteps } from "@/lib/process";
import {
  DoodleSmiley,
  DoodleStar,
} from "../ui/Doodles";
import {
  Search,
  PenTool,
  Code2,
  CheckCircle,
  Rocket,
  ArrowRight,
  ArrowDown,
} from "lucide-react";

export function ProcessSection() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Search className="w-5 h-5" />;
      case "02":
        return <PenTool className="w-5 h-5" />;
      case "03":
        return <Code2 className="w-5 h-5" />;
      case "04":
        return <CheckCircle className="w-5 h-5" />;
      case "05":
      default:
        return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-14 sm:py-20 md:py-24 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5">
          <div>
            <span className="font-handwriting font-bold text-lg sm:text-xl text-[#1749E8] tracking-wider uppercase block mb-1">
              Methodology
            </span>
            <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight uppercase">
              FROM IDEA TO DEPLOYMENT
            </h2>
          </div>

          {/* Left / Top Badge: "STRUCTURED, ITERATIVE & RELIABLE!" */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1749E8] text-white border-2 border-[#151515] shadow-sticker rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-200 cursor-default">
            <DoodleSmiley className="w-5 h-5" />
            <span className="font-display font-black text-xs sm:text-sm tracking-wider uppercase">
              STRUCTURED, ITERATIVE &amp; RELIABLE!
            </span>
          </div>
        </div>

        {/* 5 Connected Steps Grid / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              <div
                className="group relative bg-white rounded-3xl border-3 border-[#151515] shadow-sticker-md p-5 sm:p-6 flex flex-col justify-between hover:-translate-y-2 hover:shadow-sticker-lg transition-all duration-200 h-full"
              >
                <div>
                  {/* Step Circle & Number Badge with hover scale */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full ${step.badgeBg} ${step.badgeText} border-2 border-[#151515] shadow-sticker flex items-center justify-center font-display font-black text-base group-hover:scale-110 group-hover:rotate-6 transition-all duration-200`}
                    >
                      {step.number}
                    </div>

                    <div className="p-2 rounded-xl bg-slate-100 border border-[#151515] text-[#151515] group-hover:bg-[#FFD52E] transition-colors">
                      {getStepIcon(step.number)}
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 className="font-display font-black text-lg sm:text-xl text-[#151515] tracking-wide uppercase mb-1.5 group-hover:text-[#1749E8] transition-colors">
                    {step.step}
                  </h3>
                  <h4 className="font-display font-bold text-xs uppercase text-[#1749E8] mb-3">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-[#475569] font-medium leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Specific deliverables */}
                  <ul className="space-y-1.5 pt-3 border-t border-slate-100 text-[11px] sm:text-xs text-[#334155] font-medium">
                    {step.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5">
                        <span className="text-[#1749E8]">•</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting arrow for intermediate steps on desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-[#151515] text-white flex items-center justify-center border-2 border-white shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}

              {/* Connecting arrow on mobile between stacked cards */}
              {idx < processSteps.length - 1 && (
                <div className="md:hidden flex justify-center py-2 text-[#151515]">
                  <ArrowDown className="w-5 h-5 animate-bounce" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
