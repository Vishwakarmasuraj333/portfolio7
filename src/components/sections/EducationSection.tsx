"use client";

import React from "react";
import { educationList } from "@/lib/journey";
import { EducationItem } from "@/types";
import {
  GraduationCap,
  BookOpen,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  Calendar,
} from "lucide-react";

export function EducationSection() {
  const getBadgeStyle = (status: string, idx: number) => {
    if (status === "Pursuing") {
      return "bg-pink-950/70 text-pink-300 border-pink-500/40 shadow-[0_0_12px_rgba(236,72,153,0.3)]";
    }
    if (idx === 1) {
      return "bg-purple-950/70 text-purple-300 border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]";
    }
    return "bg-space-900 text-purple-300/80 border-purple-500/20";
  };

  const getBorderGlow = (idx: number) => {
    switch (idx) {
      case 0:
        return "hover:border-pink-500/60 hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]";
      case 1:
        return "hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]";
      case 2:
      default:
        return "hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]";
    }
  };

  return (
    <section id="education" className="py-14 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-4 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>ACADEMIC FOUNDATION</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase mb-4">
            EDUCATION &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
              GROWTH
            </span>
          </h2>

          <p className="text-purple-200/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
            Formal degrees and dedicated engineering training that established my software architecture, modern full-stack development, and database engineering principles.
          </p>
        </div>

        {/* Responsive Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          {educationList.slice(0, 3).map((edu: EducationItem, idx: number) => (
            <div
              key={edu.degree + idx}
              className={`group relative bg-space-850/80 backdrop-blur-xl rounded-3xl border border-purple-500/25 p-6 sm:p-7 flex flex-col justify-between shadow-[0_0_20px_rgba(168,85,247,0.1)] hover:-translate-y-2 transition-all duration-300 ${getBorderGlow(
                idx
              )}`}
            >
              <div>
                {/* Status & Period Strip */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-purple-500/20 mb-5">
                  <span
                    className={`font-mono text-xs font-extrabold uppercase px-3 py-1 rounded-full border ${getBadgeStyle(
                      edu.status,
                      idx
                    )}`}
                  >
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 font-mono text-xs text-purple-300/80">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree Label & CGPA Pill */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 text-pink-400">
                    <GraduationCap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <span className="font-mono font-bold text-[11px] uppercase tracking-wider">
                      Academic Degree
                    </span>
                  </div>
                  {edu.cgpa && (
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-space-900 border border-purple-500/40 text-[11px] font-mono font-bold text-pink-300 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                      <Award className="w-3 h-3 text-pink-400" />
                      <span>{edu.cgpa}</span>
                    </div>
                  )}
                </div>

                {/* Degree Title */}
                <h3 className="font-display font-black text-lg sm:text-xl text-white leading-snug uppercase mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:via-pink-400 group-hover:to-purple-300 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div className="space-y-1.5 text-xs sm:text-sm text-purple-200/80 font-normal mb-4">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <BookOpen className="w-4 h-4 text-pink-400 shrink-0" />
                    <span>{edu.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-purple-300/70">
                    <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-purple-200/70 leading-relaxed mb-5 font-normal">
                  {edu.description}
                </p>

                {/* Key Coursework & Highlights */}
                <div className="space-y-2 pt-3 border-t border-purple-500/20 mb-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-pink-400 block mb-1">
                    Key Highlights &amp; Skills:
                  </span>
                  {edu.highlights.map((h: string, hIdx: number) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-purple-100/90 font-medium leading-tight"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between">
                <span className="font-display font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                  Abhinav College Scholar
                </span>
                <Sparkles className="w-4 h-4 text-pink-400 group-hover:rotate-45 group-hover:scale-125 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
