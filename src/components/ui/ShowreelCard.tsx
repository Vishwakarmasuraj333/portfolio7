"use client";

import React, { useState } from "react";
import {
  DoodlePinkHatch,
  DoodleStar,
} from "./Doodles";
import { Play, Sparkles, ShieldCheck, Activity, Terminal, ArrowUpRight, X, Cpu, CheckCircle2 } from "lucide-react";

export function ShowreelCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Container matching the flagship video/showreel card */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 mb-16 select-none">
        <div className="relative rounded-[28px] sm:rounded-[36px] bg-space-850/80 border-2 border-purple-500/25 p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_30px_rgba(168,85,247,0.15)] overflow-hidden transition-all duration-300 hover:border-pink-500/40 backdrop-blur-xl">
          {/* Ambient background glows */}
          <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-pink-600/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-[300px] h-[200px] bg-purple-600/15 blur-[90px] pointer-events-none" />

          {/* Doodles on the right edge */}
          <div className="absolute top-6 right-6 hidden sm:block pointer-events-none">
            <DoodlePinkHatch className="w-12 h-8 text-pink-400 opacity-80" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-5 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono font-bold uppercase tracking-wider text-pink-300 mb-3 shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                <span>FLAGSHIP SYSTEM SHOWREEL</span>
              </div>

              <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight uppercase mb-3">
                INTELLITWIN AI{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                  DEMO
                </span>
              </h3>

              <p className="text-purple-200/80 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                A live architectural walkthrough of my flagship platform: telemetry ingestion with asynchronous Python FastAPI, XGBoost cybersecurity anomaly classification, and SHAP interpretability.
              </p>

              {/* Watch Now Link */}
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-2.5 font-display font-black text-sm sm:text-base text-pink-400 hover:text-white transition-colors cursor-pointer"
              >
                <span>Launch Architecture Demo</span>
                <span className="w-7 h-7 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.5)] group-hover:scale-110 transition-transform">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
              </button>
            </div>

            {/* Right Video / Preview Thumbnail Column */}
            <div className="lg:col-span-7">
              <div
                onClick={() => setIsModalOpen(true)}
                className="relative aspect-video w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer group border-2 border-purple-500/30 hover:border-pink-500/60 transition-all duration-300 shadow-2xl bg-space-950"
              >
                {/* Cyberpunk City / Architecture Visual */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#08020f] via-[#210936] to-[#5a189a] opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out">
                  {/* Cyberpunk Skyline & Radar Grid Vector */}
                  <svg viewBox="0 0 800 450" className="w-full h-full object-cover opacity-65">
                    <defs>
                      <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e0538" />
                        <stop offset="60%" stopColor="#4c0e66" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                      <linearGradient id="sunGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>

                    {/* Dark Skyline Silhouettes */}
                    <rect x="0" y="0" width="800" height="450" fill="url(#skyGrad)" />
                    {/* Big Neon Sunset Orb */}
                    <circle cx="560" cy="220" r="110" fill="url(#sunGrad)" opacity="0.85" />
                    {/* Horizontal Sun Blinds */}
                    <line x1="450" y1="210" x2="670" y2="210" stroke="#1e0538" strokeWidth="4" />
                    <line x1="450" y1="230" x2="670" y2="230" stroke="#1e0538" strokeWidth="6" />
                    <line x1="450" y1="255" x2="670" y2="255" stroke="#1e0538" strokeWidth="8" />

                    {/* Cyber City Skyscrapers */}
                    <path
                      d="M0 450 L0 340 L60 340 L60 300 L120 300 L120 380 L180 380 L180 270 L240 270 L240 330 L320 330 L320 250 L400 250 L400 370 L480 370 L480 280 L550 280 L550 350 L620 350 L620 290 L700 290 L700 360 L800 360 L800 450 Z"
                      fill="#07030C"
                    />

                    {/* Glowing Perspective Grid */}
                    <path
                      d="M0 450 L400 370 M200 450 L400 370 M400 450 L400 370 M600 450 L400 370 M800 450 L400 370"
                      stroke="#EC4899"
                      strokeWidth="1.5"
                      opacity="0.35"
                    />

                    {/* Silhouette of Developer at Workstation */}
                    <path
                      d="M380 450 C380 380, 400 360, 420 360 C440 360, 460 380, 460 450 Z"
                      fill="#07030C"
                    />
                    <circle cx="420" cy="335" r="22" fill="#07030C" />
                  </svg>
                </div>

                {/* Cyber HUD overlay */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-space-900/85 border border-purple-500/40 text-[11px] font-mono font-bold text-pink-300 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    INTELLITWIN AI • 99.2% ACCURACY
                  </span>
                </div>

                {/* Big Center Play Button (Pulsing Gradient Circle) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative flex items-center justify-center">
                    {/* Ripple aura */}
                    <div className="absolute w-20 h-20 rounded-full bg-pink-500/30 animate-ping" />
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-[0_0_35px_rgba(236,72,153,0.8)] group-hover:scale-110 transition-all duration-300">
                      <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Bottom Bar Info */}
                <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between text-xs text-purple-200/90 font-mono">
                  <span>FastAPI • XGBoost • Next.js 14</span>
                  <span className="text-pink-400 font-bold uppercase tracking-wider">CLICK TO LAUNCH DEMO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl bg-space-900 border-2 border-purple-500/50 p-6 sm:p-8 shadow-[0_0_50px_rgba(168,85,247,0.4)] text-left text-white max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="p-2.5 rounded-2xl bg-purple-600/30 border border-purple-500/50 text-pink-400">
                <ShieldCheck className="w-6 h-6 text-pink-400" />
              </span>
              <div>
                <h3 className="font-display font-black text-2xl text-white">
                  IntelliTwin AI — Flagship Architecture
                </h3>
                <p className="text-xs text-purple-300/80 font-mono">
                  Python • FastAPI • Next.js 14 • PostgreSQL • XGBoost • SHAP
                </p>
              </div>
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-white/5 border border-purple-500/30 text-center">
                <span className="block font-display font-black text-xl text-pink-400">99.2%</span>
                <span className="text-[11px] text-gray-400 uppercase font-bold">Accuracy</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-purple-500/30 text-center">
                <span className="block font-display font-black text-xl text-purple-300">&lt; 18ms</span>
                <span className="text-[11px] text-gray-400 uppercase font-bold">Inference</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-purple-500/30 text-center">
                <span className="block font-display font-black text-xl text-red-400">SHAP</span>
                <span className="text-[11px] text-gray-400 uppercase font-bold">Explainability</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-purple-500/30 text-center">
                <span className="block font-display font-black text-xl text-cyan-300">FastAPI</span>
                <span className="text-[11px] text-gray-400 uppercase font-bold">Async Core</span>
              </div>
            </div>

            {/* System Breakdown */}
            <div className="space-y-4 mb-6 text-sm text-gray-300 leading-relaxed font-normal">
              <p>
                IntelliTwin AI is an enterprise-grade cybersecurity anomaly detection platform engineered to identify network intrusions, DDoS vectors, and zero-day threat patterns before they compromise production databases.
              </p>
              <div className="p-4 rounded-2xl bg-space-950/90 border border-purple-500/30 font-mono text-xs text-purple-200 space-y-1.5">
                <p className="text-pink-400 font-bold">// REAL-TIME STREAM PIPELINE</p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>1. Ingestion: FastAPI async stream handler ingesting telemetry packets</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>2. Preprocessing: Feature normalization &amp; dimensionality reduction</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>3. Inference: Gradient-boosted tree model predicting anomaly score</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>4. Explainability: SHAP tensors highlighting top feature triggers</span>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-purple-500/20">
              <a
                href="https://github.com/Vishwakarmasuraj333/IntelliTwin-AI"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white font-display font-black text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-[0_0_20px_rgba(236,72,153,0.4)]"
              >
                <span>View GitHub Repository</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-display font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Close Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
