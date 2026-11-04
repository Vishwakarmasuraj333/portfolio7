"use client";

import React, { useState } from "react";
import { servicesData, ServiceCardItem } from "@/lib/services";
import {
  Code2,
  Terminal,
  Database,
  Cpu,
  ArrowRight,
  CheckCircle2,
  X,
  Sparkles,
} from "lucide-react";

export function ServicesSection() {
  const [activeModal, setActiveModal] = useState<ServiceCardItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "frontend-dev":
        return <Code2 className="w-10 h-10 text-pink-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200" />;
      case "backend-dev":
        return <Terminal className="w-10 h-10 text-purple-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200" />;
      case "database-integration":
        return <Database className="w-10 h-10 text-red-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-200" />;
      case "fullstack-ai":
      default:
        return <Cpu className="w-10 h-10 text-fuchsia-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-200" />;
    }
  };

  const getCardCosmicStyle = (idx: number) => {
    switch (idx) {
      case 0:
        return {
          border: "border-pink-500/30 hover:border-pink-500/60",
          glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]",
          accentColor: "text-pink-400",
          badgeBg: "bg-pink-950/70 border-pink-500/40 text-pink-300",
        };
      case 1:
        return {
          border: "border-purple-500/30 hover:border-purple-500/60",
          glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]",
          accentColor: "text-purple-400",
          badgeBg: "bg-purple-950/70 border-purple-500/40 text-purple-300",
        };
      case 2:
        return {
          border: "border-red-500/30 hover:border-red-500/60",
          glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]",
          accentColor: "text-red-400",
          badgeBg: "bg-red-950/70 border-red-500/40 text-red-300",
        };
      case 3:
      default:
        return {
          border: "border-fuchsia-500/30 hover:border-fuchsia-500/60",
          glow: "hover:shadow-[0_0_30px_rgba(217,70,239,0.3)]",
          accentColor: "text-fuchsia-400",
          badgeBg: "bg-fuchsia-950/70 border-fuchsia-500/40 text-fuchsia-300",
        };
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>SKILLS &amp; CAPABILITIES</span>
          </div>

          <h2 className="font-display font-black text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase">
            WHAT I CAN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
              BUILD
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-purple-200/80 font-normal max-w-2xl mt-3">
            Four specialized technical disciplines bridging responsive frontend interfaces, resilient backend architectures, performant databases, and AI experimentation.
          </p>
        </div>

        {/* 4 Cosmic Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((item, idx) => {
            const cosmic = getCardCosmicStyle(idx);

            return (
              <div
                key={item.id}
                className={`group relative rounded-3xl bg-space-850/80 border ${cosmic.border} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ${cosmic.glow} cursor-pointer backdrop-blur-xl shadow-lg`}
                onClick={() => setActiveModal(item)}
              >
                <div>
                  {/* Top Bar with Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-space-900 border border-purple-500/20 shadow-md">
                      {getServiceIcon(item.id)}
                    </div>
                    <span className={`font-mono text-xs font-black uppercase px-2.5 py-1 rounded-full border ${cosmic.badgeBg}`}>
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-black text-xl text-white uppercase leading-snug mb-3 group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-purple-200/80 leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Tech Tags & Action */}
                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-purple-500/20 mb-4">
                    {item.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-[10px] font-bold text-purple-300 bg-space-900/90 px-2 py-0.5 rounded-md border border-purple-500/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className={`font-display font-black text-xs uppercase tracking-wider flex items-center gap-1 ${cosmic.accentColor} group-hover:translate-x-1 transition-transform`}>
                      DETAILS <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal View */}
      {activeModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="relative w-full max-w-lg bg-space-900 border border-purple-500/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(236,72,153,0.3)] text-white max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setActiveModal(null)}
              className="absolute top-5 right-5 p-2 rounded-xl border border-purple-500/30 bg-space-800 text-purple-300 hover:text-white hover:border-pink-500 focus:outline-none transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="font-mono text-xs font-black uppercase text-pink-400 bg-pink-950/60 px-3 py-1 rounded-full border border-pink-500/30">
                DISCIPLINE {activeModal.category}
              </span>
            </div>

            <h3 className="font-display font-black text-2xl text-white uppercase mb-3">
              {activeModal.title}
            </h3>

            <p className="text-sm text-purple-200/90 leading-relaxed mb-6 font-normal">
              {activeModal.description}
            </p>

            {/* Deliverables / Capabilities */}
            <div className="mb-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-pink-400 mb-3">
                KEY CAPABILITIES &amp; DELIVERABLES
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-purple-200/85">
                {activeModal.features?.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Tags */}
            <div className="pt-4 border-t border-purple-500/20">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-purple-400 mb-2.5">
                SKILLS &amp; TECHNOLOGIES
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModal.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-lg bg-space-800 border border-purple-500/30 text-xs font-mono font-bold text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
