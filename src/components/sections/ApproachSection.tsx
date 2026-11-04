"use client";

import React from "react";
import { approachPrinciples } from "@/lib/principles";
import { DoodleStarburstRed, DoodleStar } from "../ui/Doodles";
import { Code, Smartphone, ShieldCheck, Check, Sparkles, Terminal } from "lucide-react";

export function ApproachSection() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Code className="w-5 h-5 text-purple-400" />;
      case 1:
        return <Smartphone className="w-5 h-5 text-pink-400" />;
      case 2:
      default:
        return <ShieldCheck className="w-5 h-5 text-red-400" />;
    }
  };

  const getBorderGlow = (idx: number) => {
    switch (idx) {
      case 0:
        return "hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.3)]";
      case 1:
        return "hover:border-pink-500/60 hover:shadow-[0_0_35px_rgba(236,72,153,0.3)]";
      case 2:
      default:
        return "hover:border-red-500/60 hover:shadow-[0_0_35px_rgba(239,68,68,0.3)]";
    }
  };

  const getPillColor = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-purple-950/70 text-purple-300 border-purple-500/30";
      case 1:
        return "bg-pink-950/70 text-pink-300 border-pink-500/30";
      case 2:
      default:
        return "bg-red-950/70 text-red-300 border-red-500/30";
    }
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Red/Purple/Pink Banner Header with Nebula Glow */}
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950/70 via-pink-950/60 to-purple-950/70 border border-red-500/30 p-6 sm:p-8 lg:p-10 mb-8 backdrop-blur-2xl shadow-[0_0_40px_rgba(239,68,68,0.2)] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group hover:border-pink-500/50 transition-all duration-300">
          <div className="flex items-center gap-4 z-10">
            {/* Glowing Starburst with hover spin */}
            <div className="w-12 h-12 rounded-2xl bg-space-900/90 text-pink-400 border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.3)] flex items-center justify-center shrink-0 group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="w-6 h-6 text-pink-400" />
            </div>

            <div>
              <span className="font-mono font-bold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-300 to-purple-300 uppercase tracking-widest block mb-1">
                Engineering Philosophy
              </span>
              <h2 className="font-display font-black text-2xl xs:text-3xl sm:text-4xl text-white uppercase tracking-tight">
                HOW I APPROACH DEVELOPMENT
              </h2>
            </div>
          </div>

          <p className="text-purple-200/90 font-medium text-xs sm:text-sm max-w-md z-10 leading-relaxed">
            No fictional quotes or inflated metrics. Honest engineering standards applied to every line of code, endpoint, and user interface.
          </p>

          {/* Background decorative ambient glow */}
          <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-pink-600/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        </div>

        {/* 3 Cosmic Glass Principle Cards with Tactile 3D Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approachPrinciples.map((item, idx) => (
            <div
              key={item.id}
              className={`group relative bg-space-850/80 backdrop-blur-xl rounded-3xl border border-purple-500/25 p-6 sm:p-8 flex flex-col justify-between shadow-[0_0_25px_rgba(168,85,247,0.12)] hover:-translate-y-2.5 transition-all duration-300 ${getBorderGlow(
                idx
              )}`}
            >
              <div>
                {/* Speech Bubble Header */}
                <div className="flex items-center justify-between pb-4 border-b border-purple-500/20 mb-5">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-space-900 border border-purple-500/30 group-hover:scale-110 transition-transform">
                      {getIcon(idx)}
                    </div>
                    <span
                      className={`font-mono text-xs font-bold uppercase px-2.5 py-1 rounded-full border ${getPillColor(
                        idx
                      )}`}
                    >
                      Principle 0{idx + 1}
                    </span>
                  </div>

                  <span className="text-3xl text-pink-400/80 font-serif leading-none group-hover:scale-125 transition-transform">
                    “
                  </span>
                </div>

                {/* Bold Principle Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-pink-400 group-hover:to-purple-300 transition-colors">
                  {item.principle}
                </h3>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-purple-200/80 font-medium leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Specific Implementation Standards */}
                <ul className="space-y-2.5 pt-4 border-t border-purple-500/20">
                  {item.bulletPoints.map((bp, bIdx) => (
                    <li
                      key={bIdx}
                      className="flex items-center gap-2.5 text-xs text-purple-100/90 font-medium"
                    >
                      <Check className="w-4 h-4 text-pink-400 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-6 border-t border-purple-500/20 flex items-center justify-between">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Suraj Vishwakarma
                </span>
                <span className="font-mono text-[10px] text-purple-400/70 uppercase">
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
