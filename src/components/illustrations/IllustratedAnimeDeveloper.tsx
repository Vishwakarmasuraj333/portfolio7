"use client";

import React from "react";
import { DoodleClapperboard } from "../ui/Doodles";

export function IllustratedAnimeDeveloper() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-visible">
      {/* Background Cyber-Purple Radial Aura */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#100826] via-[#1b103b]/80 to-[#2e1065]/40 rounded-full blur-xl scale-95" />

      {/* SVG Vector Character Art: Energetic Developer waving in Purple Hoodie */}
      <svg
        viewBox="0 0 360 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[420px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {/* Gradients */}
          <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="50%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#5B21B6" />
          </linearGradient>

          <linearGradient id="hoodieShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#581C87" />
            <stop offset="100%" stopColor="#3B0764" />
          </linearGradient>

          <linearGradient id="skinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FED7AA" />
            <stop offset="100%" stopColor="#FDBA74" />
          </linearGradient>

          <linearGradient id="hairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E1B4B" />
            <stop offset="100%" stopColor="#090514" />
          </linearGradient>
        </defs>

        {/* --- BLUE SPLATTER WAVES IN BACKGROUND --- */}
        <path
          d="M20 280 C-10 230, 10 160, 45 140 C80 120, 110 150, 95 200 C80 250, 50 330, 20 280 Z"
          fill="#0284C7"
          opacity="0.3"
        />

        {/* --- HOODIE BODY & SHOULDERS --- */}
        <g id="hoodie-body">
          {/* Main Torso */}
          <path
            d="M80 340 C85 285, 120 260, 180 260 C240 260, 275 285, 280 340 L300 420 L60 420 Z"
            fill="url(#hoodieGrad)"
            stroke="#151515"
            strokeWidth="4"
          />

          {/* Torso Shadow folds */}
          <path
            d="M130 320 C150 360, 210 360, 230 320"
            stroke="url(#hoodieShadow)"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Hoodie Kangaroo Pocket */}
          <path
            d="M120 375 L240 375 L230 420 L130 420 Z"
            fill="#6D28D9"
            stroke="#151515"
            strokeWidth="3.5"
          />

          {/* Hood Collar Rim */}
          <path
            d="M125 245 C145 270, 215 270, 235 245 C255 275, 250 300, 230 310 C180 330, 130 310, 125 245 Z"
            fill="url(#hoodieShadow)"
            stroke="#151515"
            strokeWidth="4"
          />

          {/* White Hoodie Drawstrings */}
          <path
            d="M155 285 Q150 330 148 350"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="148" cy="353" r="3.5" fill="#FFFFFF" stroke="#151515" strokeWidth="2" />

          <path
            d="M205 285 Q210 330 212 350"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <circle cx="212" cy="353" r="3.5" fill="#FFFFFF" stroke="#151515" strokeWidth="2" />
        </g>

        {/* --- NECK --- */}
        <path
          d="M160 220 L160 260 C170 268, 190 268, 200 260 L200 220 Z"
          fill="url(#skinGrad)"
          stroke="#151515"
          strokeWidth="3.5"
        />
        <path
          d="M160 238 C175 250, 185 250, 200 238"
          fill="#FB923C"
          opacity="0.3"
        />

        {/* --- HEAD & FACE --- */}
        <g id="head">
          {/* Ears */}
          <ellipse
            cx="130"
            cy="185"
            rx="12"
            ry="16"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="3.5"
          />
          <ellipse cx="130" cy="185" rx="6" ry="9" fill="#FB923C" opacity="0.4" />

          <ellipse
            cx="230"
            cy="185"
            rx="12"
            ry="16"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="3.5"
          />
          <ellipse cx="230" cy="185" rx="6" ry="9" fill="#FB923C" opacity="0.4" />
          {/* Earring on left ear like reference */}
          <circle cx="123" cy="195" r="3" fill="#FFD52E" stroke="#151515" strokeWidth="1.5" />

          {/* Jaw / Face outline */}
          <path
            d="M135 160 C135 220, 155 245, 180 245 C205 245, 225 220, 225 160 C225 120, 135 120, 135 160 Z"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="4"
          />

          {/* Rosy Cheeks */}
          <ellipse cx="150" cy="195" rx="8" ry="4" fill="#F43F5E" opacity="0.45" />
          <ellipse cx="210" cy="195" rx="8" ry="4" fill="#F43F5E" opacity="0.45" />

          {/* Left Eye: Open & Radiant */}
          <ellipse cx="158" cy="178" rx="8.5" ry="11" fill="#FFFFFF" stroke="#151515" strokeWidth="2.5" />
          <ellipse cx="159" cy="178" rx="5.5" ry="8" fill="#151515" />
          <circle cx="157" cy="174" r="2.5" fill="#FFFFFF" />
          <circle cx="161" cy="181" r="1.2" fill="#FFFFFF" />
          {/* Left Eyebrow */}
          <path
            d="M148 162 Q160 156 168 162"
            stroke="#151515"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Eye: Playful Winking Arch (as in reference art!) */}
          <path
            d="M195 180 Q205 170 215 180"
            stroke="#151515"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          {/* Right Eyebrow */}
          <path
            d="M192 160 Q205 154 216 162"
            stroke="#151515"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Nose */}
          <path
            d="M178 182 Q182 186 179 188"
            stroke="#151515"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Big Cheerful Smile */}
          <path
            d="M162 198 Q180 225 198 198 Z"
            fill="#151515"
            stroke="#151515"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Teeth & Tongue */}
          <path
            d="M166 200 Q180 205 194 200"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M172 214 Q180 220 188 214"
            fill="#F43F5E"
          />
        </g>

        {/* --- STYLISH DARK ANIME SPIKY HAIR --- */}
        <g id="hair">
          {/* Back Volume */}
          <path
            d="M125 150 C110 130, 110 90, 140 70 C160 50, 210 50, 235 75 C255 95, 250 135, 235 155 Z"
            fill="url(#hairGrad)"
            stroke="#151515"
            strokeWidth="4"
          />

          {/* Spiky Front Bangs & Tuft */}
          <path
            d="M130 140 C140 100, 180 85, 210 95 C230 100, 240 120, 235 145 C225 130, 210 135, 200 125 C185 135, 170 120, 160 135 C145 130, 138 140, 130 140 Z"
            fill="url(#hairGrad)"
            stroke="#151515"
            strokeWidth="3.5"
          />

          {/* Expressive Hair Strands at top */}
          <path
            d="M160 70 Q165 40 178 55 Q195 35 205 60 Q225 45 220 75"
            fill="url(#hairGrad)"
            stroke="#151515"
            strokeWidth="3.5"
          />
        </g>

        {/* --- WAVING HAND (RIGHT SIDE) --- */}
        <g id="waving-hand" className="animate-wiggle origin-bottom-left">
          {/* Arm leading up */}
          <path
            d="M260 290 Q290 240 300 200"
            stroke="url(#hoodieGrad)"
            strokeWidth="32"
            strokeLinecap="round"
          />
          <path
            d="M260 290 Q290 240 300 200"
            stroke="#151515"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Wrist band / hoodie cuff */}
          <ellipse
            cx="300"
            cy="195"
            rx="18"
            ry="8"
            transform="rotate(-20 300 195)"
            fill="#5B21B6"
            stroke="#151515"
            strokeWidth="3"
          />

          {/* Palm & 4 Waving Fingers + Thumb */}
          <path
            d="M295 190 L305 155 C308 145, 318 145, 318 155 L318 185"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="3"
          />
          {/* Finger 1 */}
          <rect
            x="305"
            y="135"
            width="9"
            height="32"
            rx="4.5"
            transform="rotate(-15 305 135)"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="2.5"
          />
          {/* Finger 2 */}
          <rect
            x="318"
            y="132"
            width="9"
            height="35"
            rx="4.5"
            transform="rotate(-5 318 132)"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="2.5"
          />
          {/* Finger 3 */}
          <rect
            x="330"
            y="138"
            width="9"
            height="32"
            rx="4.5"
            transform="rotate(8 330 138)"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="2.5"
          />
          {/* Finger 4 (Pinky) */}
          <rect
            x="340"
            y="148"
            width="8"
            height="26"
            rx="4"
            transform="rotate(20 340 148)"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="2.5"
          />
          {/* Thumb */}
          <rect
            x="285"
            y="160"
            width="9"
            height="22"
            rx="4.5"
            transform="rotate(-40 285 160)"
            fill="url(#skinGrad)"
            stroke="#151515"
            strokeWidth="2.5"
          />

          {/* Palm center */}
          <circle cx="316" cy="172" r="14" fill="url(#skinGrad)" />

          {/* Motion lines indicating waving hand! */}
          <path
            d="M280 145 C275 155, 275 165, 280 175"
            stroke="#F43F5E"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M272 150 C268 158, 268 165, 272 170"
            stroke="#F43F5E"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
          />
        </g>
      </svg>
    </div>
  );
}

