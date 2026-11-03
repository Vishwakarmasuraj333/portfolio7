"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  DoodleSmiley,
  DoodleHeart,
  DoodleLightning,
  DoodleStar,
} from "../ui/Doodles";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#1749E8] text-white border-t-4 border-[#151515] overflow-hidden pt-14 sm:pt-16 pb-12 select-none">
      {/* Subtle grid pattern background */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b-2 border-white/20 items-start">
          {/* Left Column: Brand, Bio & Credit */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <Link
              href="#home"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Suraj Vishwakarma - Back to Top"
            >
              <div className="flex flex-col text-left leading-none">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-[#FFD52E] transition-colors">
                    SURAj
                  </span>
                  <DoodleSmiley className="w-6 h-6 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200" />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-sm text-[#FFD52E] tracking-widest uppercase">
                  VISHWAKARMA
                </span>
              </div>
            </Link>

            <p className="text-white/85 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              Full-Stack Developer passionate about building responsive web applications, practical digital products, and useful AI-powered experiences.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs text-[#FFD52E] bg-white/10 px-3 py-1 rounded-full border border-white/20 inline-block hover:bg-white/20 transition-colors">
                {siteConfig.credit}
              </span>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-[#FFD52E] mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white/90">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFD52E] hover:translate-x-1.5 transition-all inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Connect Links */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-[#FFD52E] mb-4">
                LET&apos;S CONNECT
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm font-medium text-white/90">
                <div className="flex items-center gap-2 group/item">
                  <Mail className="w-4 h-4 text-[#FFD52E] group-hover/item:scale-125 transition-transform" />
                  <a
                    href={siteConfig.links.email}
                    className="hover:underline text-white font-semibold"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                </div>

                <div className="flex items-center gap-2 group/item">
                  <Github className="w-4 h-4 text-[#FFD52E] group-hover/item:scale-125 transition-transform" />
                  <a
                    href={siteConfig.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    github.com/{siteConfig.links.githubUsername}
                  </a>
                </div>

                <div className="flex items-center gap-2 group/item">
                  <Linkedin className="w-4 h-4 text-[#FFD52E] group-hover/item:scale-125 transition-transform" />
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/{siteConfig.links.linkedinSlug}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="w-4 h-4 text-[#FFD52E]" />
                  <span>Bhayandar, Mumbai, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Playful White Sticker: "THANKS FOR STOPPING BY! <3" with hover bounce */}
            <div className="self-start sm:self-auto inline-flex items-center gap-2.5 bg-white text-[#151515] px-4 py-2.5 rounded-2xl border-2 border-[#151515] shadow-sticker rotate-[-3deg] hover:rotate-0 hover:scale-105 hover:shadow-sticker-lg transition-all duration-200 cursor-pointer">
              <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wide">
                THANKS FOR STOPPING BY!
              </span>
              <DoodleHeart className="w-4 h-4 text-[#F43B2F] animate-pulse" />
              <DoodleLightning className="w-3 h-5 text-[#FFD52E]" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/75 gap-3">
          <p>
            &copy; {currentYear} Suraj Vishwakarma. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
