"use client";

import React from "react";
import { processSteps } from "@/lib/process";
import {
  Search,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Zap,
} from "lucide-react";

export function ProcessSection() {
  const getStepIcon = (num: string) => {
    switch (num) {
      case "01":
        return <Search className="w-5 h-5 text-purple-300" />;
      case "02":
        return <PenTool className="w-5 h-5 text-pink-300" />;
      case "03":
        return <Code2 className="w-5 h-5 text-red-300" />;
      case "04":
        return <CheckCircle2 className="w-5 h-5 text-purple-300" />;
      case "05":
      default:
        return <Rocket className="w-5 h-5 text-pink-300" />;
    }
  };

  const getStepGradient = (idx: number) => {
    switch (idx) {
      case 0:
        return "from-purple-600 to-indigo-600 shadow-[0_0_15px_rgba(168,85,247,0.4)]";
      case 1:
        return "from-pink-600 to-rose-600 shadow-[0_0_15px_rgba(236,72,153,0.4)]";
      case 2:
        return "from-red-600 to-pink-600 shadow-[0_0_15px_rgba(239,68,68,0.4)]";
      case 3:
        return "from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.4)]";
      case 4:
      default:
        return "from-pink-500 to-red-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]";
    }
  };

  return (
    <section id="process" className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-5">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>ENGINEERING METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
              FROM IDEA TO{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                DEPLOYMENT
              </span>
            </h2>
          </div>

          {/* Right Badge: "STRUCTURED, ITERATIVE & RELIABLE!" */}
          <div className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-space-850 border border-pink-500/30 text-pink-300 shadow-[0_0_20px_rgba(236,72,153,0.25)] hover:scale-105 transition-all duration-300 cursor-default">
            <Zap className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              STRUCTURED, ITERATIVE &amp; RELIABLE
            </span>
          </div>
        </div>

        {/* 5 Connected Steps Grid / Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 sm:gap-6 relative">
          {processSteps.map((step, idx) => (
            <div key={step.number} className="relative flex flex-col">
              <div className="group relative bg-space-850/80 backdrop-blur-xl rounded-3xl border border-purple-500/25 p-5 sm:p-6 flex flex-col justify-between shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:-translate-y-2 hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(236,72,153,0.25)] transition-all duration-300 h-full">
                <div>
                  {/* Step Circle & Number Badge with hover scale */}
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br ${getStepGradient(
                        idx
                      )} text-white flex items-center justify-center font-display font-black text-base group-hover:scale-110 group-hover:rotate-6 transition-all duration-200`}
                    >
                      {step.number}
                    </div>

                    <div className="p-2.5 rounded-xl bg-space-900 border border-purple-500/30 group-hover:border-pink-500/40 transition-colors">
                      {getStepIcon(step.number)}
                    </div>
                  </div>

                  {/* Step Name */}
                  <h3 className="font-display font-black text-lg sm:text-xl text-white tracking-wide uppercase mb-1 group-hover:text-pink-300 transition-colors">
                    {step.step}
                  </h3>
                  <h4 className="font-mono font-bold text-xs uppercase text-purple-300 mb-3 tracking-wider">
                    {step.title}
                  </h4>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-purple-200/80 font-normal leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Specific deliverables */}
                  <ul className="space-y-2 pt-3 border-t border-purple-500/20 text-[11px] sm:text-xs text-purple-100/90 font-medium">
                    {step.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="text-pink-400 font-bold shrink-0">›</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Connecting arrow for intermediate steps on desktop */}
              {idx < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                  <div className="w-7 h-7 rounded-full bg-space-900 text-pink-400 flex items-center justify-center border border-pink-500/40 shadow-[0_0_12px_rgba(236,72,153,0.3)]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}

              {/* Connecting arrow on mobile between stacked cards */}
              {idx < processSteps.length - 1 && (
                <div className="md:hidden flex justify-center py-2 text-pink-400">
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
