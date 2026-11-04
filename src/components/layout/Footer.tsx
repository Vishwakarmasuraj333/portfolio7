"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import {
  DoodleSmiley,
  DoodleHeart,
  DoodleLightning,
} from "../ui/Doodles";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#07030C]/95 text-white border-t border-purple-500/25 overflow-hidden pt-14 sm:pt-16 pb-12 select-none">
      {/* Ambient Red/Purple/Pink Nebula Glows inside footer */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[200px] bg-purple-600/15 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[180px] bg-pink-600/15 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 sm:pb-12 border-b border-purple-500/20 items-start">
          {/* Left Column: Brand with Smiley, Bio & Credit */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            <Link
              href="#home"
              className="flex items-center gap-2 group focus:outline-none"
              aria-label="Suraj Vishwakarma - Back to Top"
            >
              <div className="flex flex-col text-left leading-none">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight group-hover:text-pink-400 transition-colors">
                    SURAj
                  </span>
                  <DoodleSmiley className="w-6 h-6 text-pink-400 group-hover:rotate-45 group-hover:scale-125 transition-transform duration-200" />
                </div>
                <span className="font-display font-extrabold text-xs sm:text-sm tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-400">
                  VISHWAKARMA
                </span>
              </div>
            </Link>

            <p className="text-purple-200/75 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              Full-Stack Developer passionate about engineering responsive web applications, modern React &amp; Next.js platforms, Python microservices, and AI integrations.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs text-pink-400 bg-purple-950/50 px-3.5 py-1 rounded-full border border-purple-500/30 inline-block shadow-[0_0_12px_rgba(168,85,247,0.2)]">
                {siteConfig.credit}
              </span>
            </div>
          </div>

          {/* Center Column: Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-black text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-4">
              NAVIGATE
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-200/80">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-pink-400 hover:translate-x-1.5 transition-all inline-block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Connect Links & Signature Sticker */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div>
              <h4 className="font-display font-black text-xs uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 mb-4">
                LET&apos;S CONNECT
              </h4>

              <div className="space-y-2.5 text-xs sm:text-sm font-medium text-purple-200/80">
                <div className="flex items-center gap-2 group/item">
                  <Mail className="w-4 h-4 text-pink-400 group-hover/item:scale-125 transition-transform" />
                  <a
                    href={siteConfig.links.email}
                    className="hover:underline text-white font-semibold"
                  >
                    {siteConfig.links.rawEmail}
                  </a>
                </div>

                <div className="flex items-center gap-2 group/item">
                  <Github className="w-4 h-4 text-purple-400 group-hover/item:scale-125 transition-transform" />
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
                  <Linkedin className="w-4 h-4 text-pink-400 group-hover/item:scale-125 transition-transform" />
                  <a
                    href={siteConfig.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    linkedin.com/in/{siteConfig.links.linkedinSlug}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-purple-300/70">
                  <MapPin className="w-4 h-4 text-red-400" />
                  <span>Bhayandar / Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Glowing Signature Sticker */}
            <div className="self-start sm:self-auto inline-flex items-center gap-2.5 bg-space-850/80 text-white px-4 py-2.5 rounded-2xl border border-pink-500/40 shadow-[0_0_20px_rgba(236,72,153,0.3)] rotate-[-2deg] hover:rotate-0 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all duration-200 cursor-pointer backdrop-blur-md">
              <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-400">
                THANKS FOR STOPPING BY!
              </span>
              <DoodleHeart className="w-4 h-4 text-pink-500 animate-pulse" />
              <DoodleLightning className="w-3 h-5 text-purple-400" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-purple-300/60 gap-3">
          <p>
            &copy; {currentYear} Suraj Vishwakarma. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-xs font-medium">
            <span>Next.js 14 App Router</span>
            <span>•</span>
            <span>Three.js 3D</span>
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
