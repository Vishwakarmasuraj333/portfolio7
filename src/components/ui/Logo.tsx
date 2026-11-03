"use client";

import React from "react";
import Link from "next/link";
import { DoodleSmiley } from "./Doodles";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="#home"
      className={`group flex items-center gap-2 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1749E8] rounded-xl p-1 transition-transform active:scale-95 ${className}`}
      aria-label="Suraj Vishwakarma - Home"
    >
      <div className="flex flex-col text-left leading-none">
        <div className="flex items-center gap-1.5">
          <span className="font-display font-black text-xl sm:text-2xl text-[#151515] tracking-tight group-hover:text-[#1749E8] transition-colors">
            SURAj
          </span>
          <DoodleSmiley className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
        <span className="font-display font-extrabold text-xs sm:text-sm text-[#151515] tracking-widest uppercase">
          VISHWAKARMA
        </span>
      </div>
    </Link>
  );
}
