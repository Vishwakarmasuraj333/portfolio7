"use client";

import React, { useState } from "react";
import { servicesData, ServiceCardItem } from "@/lib/services";
import {
  DoodleCrown,
  DoodleLightbulb,
  DoodleTag,
  DoodlePencilPot,
  DoodleMegaphone,
} from "../ui/Doodles";
import { ArrowRight, CheckCircle2, X } from "lucide-react";

export function ServicesSection() {
  const [activeModal, setActiveModal] = useState<ServiceCardItem | null>(null);

  const renderDoodleIcon = (id: string) => {
    switch (id) {
      case "frontend-dev":
        return <DoodleLightbulb className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200" />;
      case "backend-dev":
        return <DoodleTag className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200" />;
      case "database-integration":
        return <DoodlePencilPot className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200" />;
      case "fullstack-ai":
        return <DoodleMegaphone className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200" />;
      default:
        return <DoodleLightbulb className="w-14 h-14 sm:w-16 sm:h-16 group-hover:scale-110 transition-transform duration-200" />;
    }
  };

  return (
    <section id="skills" className="py-14 sm:py-20 md:py-24 bg-[#FFFDF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Hand-Drawn Crown */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-handwriting font-bold text-lg sm:text-xl text-[#1749E8] tracking-wider uppercase">
              Skills &amp; Capabilities
            </span>
          </div>

          <div className="flex items-center gap-3">
            <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-[#151515] tracking-tight uppercase">
              WHAT I CAN BUILD
            </h2>
            <DoodleCrown className="w-8 h-7 sm:w-10 sm:h-8 text-[#151515] hidden sm:block hover:rotate-12 transition-transform cursor-pointer" />
          </div>

          <p className="text-sm sm:text-base md:text-lg text-[#475569] font-medium max-w-2xl mt-3">
            Four specialized technical disciplines bridging responsive frontend interfaces, resilient backend architectures, performant databases, and AI experimentation.
          </p>
        </div>

        {/* 4 Colorful Cards Matching Reference Composition with Tactile Hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-3xl ${item.bgClass} ${item.borderClass} shadow-sticker-md p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:-translate-y-2 hover:shadow-sticker-lg cursor-pointer`}
              onClick={() => setActiveModal(item)}
            >
              {/* Card Top: Doodle Icon & Badge */}
              <div>
                <div className="flex items-center justify-between mb-5 sm:mb-6">
                  {/* Custom Doodle Illustration */}
                  <div className="p-2 sm:p-2.5 rounded-2xl bg-white/25 backdrop-blur-xs border border-black/10 group-hover:scale-105 transition-transform">
                    {renderDoodleIcon(item.id)}
                  </div>

                  <span className="font-mono text-[10px] sm:text-xs font-black tracking-widest uppercase px-2.5 py-1 rounded-full bg-black/15">
                    {item.category}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl leading-tight uppercase tracking-wide mb-2.5 sm:mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm font-medium opacity-90 leading-relaxed mb-5 sm:mb-6">
                  {item.description}
                </p>

                {/* Core Verified Skills Checklist */}
                <div className="space-y-2 pt-4 border-t border-black/15 text-xs sm:text-sm font-semibold">
                  {item.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Bottom: Arrow Button */}
              <div className="pt-6 sm:pt-8 flex items-center justify-between mt-auto">
                <span className="font-display font-bold text-xs uppercase tracking-wider underline group-hover:opacity-80">
                  View details
                </span>

                <div
                  className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 group-hover:translate-x-1 transition-all duration-200 shrink-0"
                >
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="w-full max-w-lg bg-[#FFFDF7] text-[#151515] rounded-3xl border-4 border-[#151515] shadow-sticker-lg p-6 sm:p-8 animate-in zoom-in-95 duration-200 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between pb-4 border-b-2 border-[#151515] mb-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#1749E8] uppercase tracking-wider">
                  {activeModal.category} • {activeModal.badge}
                </span>
                <h3 className="font-display font-black text-2xl text-[#151515] uppercase tracking-wide mt-1">
                  {activeModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-xl border-2 border-[#151515] bg-white text-[#151515] shadow-sticker hover:bg-slate-100"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#475569] font-medium leading-relaxed mb-5">
              {activeModal.description}
            </p>

            <h4 className="font-display font-bold text-xs sm:text-sm uppercase tracking-wider text-[#151515] mb-3">
              Implementation Capabilities:
            </h4>
            <ul className="space-y-2.5 mb-6">
              {activeModal.features.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#334155] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] mt-0.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t-2 border-[#151515] flex justify-end">
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="px-6 py-2.5 rounded-full bg-[#FFD52E] text-[#151515] border-2 border-[#151515] shadow-sticker font-display font-black text-xs uppercase tracking-wider hover:shadow-sticker-hover active:translate-x-0.5 active:translate-y-0.5 transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
