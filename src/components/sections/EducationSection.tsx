"use client";

import React from "react";
import { educationList } from "@/lib/journey";
import {
  DoodleBinderClip,
  DoodleStar,
  DoodleHeart,
  DoodleSmiley,
} from "../ui/Doodles";
import { GraduationCap, Award, BookOpen, Calendar, MapPin, CheckCircle } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-14 sm:py-20 md:py-24 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-handwriting font-bold text-lg sm:text-xl text-[#F43B2F] tracking-wider uppercase">
              Academic Background
            </span>
            <DoodleStar className="w-5 h-5 text-[#151515] hover:rotate-90 hover:scale-125 transition-transform duration-300 cursor-pointer" />
          </div>

          <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight uppercase">
            ALWAYS BUILDING. ALWAYS LEARNING.
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] font-medium max-w-2xl mt-3">
            Real academic credentials and verified learning milestones from Abhinav College, Bhayandar, and professional certifications.
          </p>
        </div>

        {/* Paper-Note Scrapbook Cards Layout with Tactile Hover */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8">
          {/* 1. M.Sc. IT Card */}
          <div className="group relative bg-white rounded-3xl border-3 border-[#151515] shadow-sticker-md p-5 sm:p-7 pt-10 flex flex-col justify-between hover:-translate-y-2 hover:rotate-0 hover:shadow-sticker-xl transition-all duration-300 rotate-[-1deg] cursor-default">
            {/* Binder clip at top with hover wiggle */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform">
              <DoodleBinderClip className="w-10 h-10" />
            </div>

            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#151515] mb-4">
                <span className="font-mono text-xs font-bold text-[#1749E8] bg-[#EEF2FF] px-2.5 py-1 rounded-full border border-[#1749E8] group-hover:bg-[#1749E8] group-hover:text-white transition-colors">
                  Currently Pursuing
                </span>
                <span className="font-mono text-xs font-semibold text-[#64748B]">
                  2025 — Present
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#1749E8] mb-2">
                <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">
                  Postgraduate Degree
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#151515] leading-tight uppercase mb-3 group-hover:text-[#1749E8] transition-colors">
                Master of Science in Information Technology (M.Sc. IT)
              </h3>

              <div className="space-y-1.5 text-xs sm:text-sm text-[#475569] font-medium mb-4">
                <div className="flex items-center gap-2 text-[#151515] font-semibold">
                  <BookOpen className="w-4 h-4 text-[#1749E8]" />
                  <span>Abhinav College, Bhayandar</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#64748B]" />
                  <span>Bhayandar, Mumbai, Maharashtra</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Advanced postgraduate studies in Information Technology focusing on modern distributed architectures, scalable web applications, and cloud integration.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="font-handwriting font-bold text-sm text-[#1749E8]">
                Advanced Research
              </span>
              <DoodleStar className="w-4 h-4 text-[#FFD52E] group-hover:rotate-45 group-hover:scale-125 transition-transform" />
            </div>
          </div>

          {/* 2. B.Sc. IT Card */}
          <div className="group relative bg-white rounded-3xl border-3 border-[#151515] shadow-sticker-md p-5 sm:p-7 pt-10 flex flex-col justify-between hover:-translate-y-2 hover:rotate-0 hover:shadow-sticker-xl transition-all duration-300 rotate-[1deg] cursor-default">
            {/* Binder clip at top */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform">
              <DoodleBinderClip className="w-10 h-10" />
            </div>

            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#151515] mb-4">
                <span className="font-mono text-xs font-bold text-[#10B981] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#10B981] group-hover:bg-[#10B981] group-hover:text-white transition-colors">
                  Graduated in 2025
                </span>
                <span className="font-mono text-xs font-semibold text-[#64748B]">
                  2022 — 2025
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#F43B2F] mb-2">
                <GraduationCap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">
                  Undergraduate Degree
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#151515] leading-tight uppercase mb-3 group-hover:text-[#F43B2F] transition-colors">
                Bachelor of Science in Information Technology (B.Sc. IT)
              </h3>

              <div className="space-y-1.5 text-xs sm:text-sm text-[#475569] font-medium mb-4">
                <div className="flex items-center gap-2 text-[#151515] font-semibold">
                  <BookOpen className="w-4 h-4 text-[#F43B2F]" />
                  <span>Abhinav College, Bhayandar</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#64748B]" />
                  <span>Bhayandar, Mumbai, Maharashtra</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Undergraduate degree covering software engineering, frontend web technologies, core algorithms, data structures, and relational databases.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="font-handwriting font-bold text-sm text-[#10B981]">
                Completed 2025
              </span>
              <DoodleHeart className="w-5 h-5 text-[#F43B2F] group-hover:scale-125 transition-transform" />
            </div>
          </div>

          {/* 3. Professional Web Certification Card */}
          <div className="group relative bg-[#FFFDF7] rounded-3xl border-3 border-[#151515] shadow-sticker-md p-5 sm:p-7 pt-10 flex flex-col justify-between hover:-translate-y-2 hover:rotate-0 hover:shadow-sticker-xl transition-all duration-300 rotate-[-1deg] cursor-default">
            {/* Binder clip at top */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 group-hover:scale-110 transition-transform">
              <DoodleBinderClip className="w-10 h-10" />
            </div>

            <div>
              <div className="flex items-center justify-between pb-3 border-b-2 border-[#151515] mb-4">
                <span className="font-mono text-xs font-bold text-[#D97706] bg-[#FFFBEB] px-2.5 py-1 rounded-full border border-[#D97706] group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                  Verified Certification
                </span>
                <span className="font-mono text-xs font-semibold text-[#64748B]">
                  Continuous
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#D97706] mb-2">
                <Award className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-display font-bold text-xs uppercase tracking-wider">
                  Professional Learning
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl text-[#151515] leading-tight uppercase mb-3 group-hover:text-[#D97706] transition-colors">
                JavaScript &amp; Web Development Certification
              </h3>

              <div className="space-y-1.5 text-xs sm:text-sm text-[#475569] font-medium mb-4">
                <div className="flex items-center gap-2 text-[#151515] font-semibold">
                  <CheckCircle className="w-4 h-4 text-[#D97706]" />
                  <span>Simplilearn Certification</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#64748B]" />
                  <span>Online / Verified Coursework</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
                Practical, hands-on learning covering modern JavaScript (ES6+), asynchronous fetch calls, DOM manipulation, component state, and responsive frontend architectures.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="font-handwriting font-bold text-sm text-[#D97706]">
                Simplilearn Verified
              </span>
              <DoodleSmiley className="w-5 h-5 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
