"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  DoodleDopeCircle,
  DoodleBlueMonster,
  DoodleSmileySticker,
  DoodleLightningBolt,
  DoodleStar,
} from "../ui/Doodles";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.rawEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative bg-[#080911] text-white pt-16 sm:pt-24 pb-14 overflow-hidden select-none border-t-2 border-white/10">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-purple-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Massive Call To Action: "LET'S MAKE SOMETHING DOPE!" with purple circled doodle (Exact Reference) */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#CCFF00]" />
            <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold">
              GET IN TOUCH • READY FOR HIRE
            </span>
          </div>

          <h2 className="font-display font-black text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight uppercase leading-[1.05]">
            LET&apos;S MAKE <br />
            SOMETHING{" "}
            <span className="relative inline-block text-white">
              <span>DOPE!</span>
              {/* Hand-drawn Purple Oval Looping around DOPE! (Exact match!) */}
              <div className="absolute -inset-x-4 -inset-y-2 pointer-events-none flex items-center justify-center">
                <DoodleDopeCircle className="w-[125%] h-[150%] text-purple-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]" />
              </div>
            </span>
          </h2>
        </div>

        {/* Contact Strip matching reference layout: Email on left, Location in middle, Socials on right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/10">
          
          {/* Email Pill with Copy Button */}
          <div className="md:col-span-5 flex items-center gap-3">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111322] border border-white/15 hover:border-[#CCFF00]/60 transition-all shadow-md group">
              <Mail className="w-4 h-4 text-[#CCFF00]" />
              <a
                href={siteConfig.links.email}
                className="text-xs sm:text-sm font-mono text-gray-200 hover:text-white transition-colors"
              >
                {siteConfig.links.rawEmail}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-1 rounded-full bg-white/10 hover:bg-[#CCFF00] hover:text-[#0A0514] text-gray-300 transition-all ml-1"
                title="Copy email to clipboard"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {copied && (
              <span className="text-xs font-mono text-emerald-400 font-bold animate-fadeIn">
                Copied!
              </span>
            )}
          </div>

          {/* Location & Phone */}
          <div className="md:col-span-4 flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm font-mono text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Bhayandar, Mumbai, India</span>
            </div>
            <span className="hidden sm:inline text-gray-600">•</span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-pink-400 shrink-0" />
              <a href="tel:+919370944696" className="hover:text-white transition-colors">
                +91 93709 44696
              </a>
            </div>
          </div>

          {/* Social Icons Row */}
          <div className="md:col-span-3 flex items-center gap-3 justify-start md:justify-end">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#111322] border border-white/15 hover:border-[#CCFF00] hover:bg-[#CCFF00] hover:text-[#0A0514] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-[#111322] border border-white/15 hover:border-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#0A0514] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.email}
              className="w-10 h-10 rounded-full bg-[#111322] border border-white/15 hover:border-[#FF90E8] hover:bg-[#FF90E8] hover:text-[#0A0514] text-white flex items-center justify-center transition-all duration-200 shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Cute Blue Waving Mascot (Exact Reference!) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 relative">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-white text-sm">SURAJ.</span>
            <span>© {currentYear} Suraj Vishwakarma. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>

          {/* Cute Blue Doodle Mascot Waving Peace Sign ✌ (Bottom-Right Signature!) */}
          <div className="absolute -bottom-8 right-2 sm:right-6 pointer-events-none hidden sm:block">
            <DoodleBlueMonster className="w-24 h-28 drop-shadow-[0_10px_25px_rgba(56,189,248,0.4)]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
