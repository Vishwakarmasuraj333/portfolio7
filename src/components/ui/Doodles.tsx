import React from "react";

export interface DoodleProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// 1. Playful 4-Point or 5-Point Hand-Drawn Star
export function DoodleStar({ className = "w-6 h-6 text-[#151515]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="currentColor" className={`select-none ${className}`} {...props}>
      <path d="M20 2 C20 12, 28 20, 38 20 C28 20, 20 28, 20 38 C20 28, 12 20, 2 20 C12 20, 20 12, 20 2 Z" />
    </svg>
  );
}

// 2. Red Starburst with Cute Eyes ("IDEAS WITH PERSONALITY" sticker from reference)
export function DoodleStarburstRed({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M50 4 L59 26 L82 17 L77 40 L98 50 L77 60 L82 83 L59 74 L50 96 L41 74 L18 83 L23 60 L2 50 L23 40 L18 17 L41 26 Z"
        fill="#F43B2F"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Eye Left */}
      <circle cx="43" cy="46" r="4" fill="white" />
      <circle cx="44.5" cy="46" r="2" fill="#151515" />
      {/* Eye Right */}
      <circle cx="57" cy="46" r="4" fill="white" />
      <circle cx="58.5" cy="46" r="2" fill="#151515" />
      {/* Smile */}
      <path d="M47 55 Q50 58 53 55" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// 3. Blue Starburst with Cute Eyes (from bottom yellow banner)
export function DoodleStarburstBlue({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M50 4 L61 24 L84 15 L78 38 L98 48 L80 62 L87 85 L64 78 L50 97 L37 78 L14 85 L20 62 L2 48 L22 38 L16 15 L39 24 Z"
        fill="#1749E8"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Eye Left */}
      <circle cx="43" cy="46" r="4.5" fill="white" />
      <circle cx="44.5" cy="46" r="2.2" fill="#151515" />
      {/* Eye Right */}
      <circle cx="57" cy="46" r="4.5" fill="white" />
      <circle cx="58.5" cy="46" r="2.2" fill="#151515" />
      {/* Playful mouth */}
      <path d="M48 56 Q50 59 52 56" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// 4. Yellow Hand-Drawn Lightning Bolt
export function DoodleLightning({ className = "w-8 h-12", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 60" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M24 2 L4 34 L18 34 L12 58 L36 24 L22 24 Z"
        fill="#FFD52E"
        stroke="#151515"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 5. Curved Hand-Drawn Arrow (pointing down-right)
export function DoodleArrowCurved({ className = "w-16 h-12 text-[#151515]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 60" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M10 15 C35 8, 65 18, 75 42"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M62 42 L77 44 L78 28"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 6. Arrow pointing up-right (like the nav button CTA arrow)
export function DoodleArrowUpRight({ className = "w-12 h-10 text-[#151515]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M12 40 C18 20, 32 12, 48 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 8 L50 9 L46 22"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 7. Hand-Drawn Crown (above "WHAT I CAN BUILD")
export function DoodleCrown({ className = "w-10 h-7 text-[#151515]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M6 34 L12 12 L24 24 L30 8 L36 24 L48 12 L54 34 Z"
        fill="#FFD52E"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
      <circle cx="30" cy="6" r="2.5" fill="currentColor" />
      <circle cx="48" cy="10" r="2.5" fill="currentColor" />
    </svg>
  );
}

// 8. Cute Smiley Face (Theo Wilder logo & footer sticker)
export function DoodleSmiley({ className = "w-6 h-6", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={`select-none ${className}`} {...props}>
      <circle cx="20" cy="20" r="17" fill="#FFD52E" stroke="#151515" strokeWidth="2.5" />
      <circle cx="14" cy="16" r="2.2" fill="#151515" />
      <circle cx="26" cy="16" r="2.2" fill="#151515" />
      <path
        d="M13 24 Q20 31 27 24"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// 9. Hand-Drawn Red Heart
export function DoodleHeart({ className = "w-6 h-6 text-[#F43B2F]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 36" fill="currentColor" className={`select-none ${className}`} {...props}>
      <path
        d="M20 33 C18 31, 2 20, 2 11 C2 5, 6 1, 12 1 C16 1, 19 3, 20 6 C21 3, 24 1, 28 1 C34 1, 38 5, 38 11 C38 20, 22 31, 20 33 Z"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 10. Binder Clip (pinning the paper note from the top)
export function DoodleBinderClip({ className = "w-10 h-10", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      {/* Silver Wire Loop */}
      <path
        d="M22 26 L22 8 C22 4, 38 4, 38 8 L38 26"
        stroke="#4B5563"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Black Triangular Grip */}
      <polygon
        points="14,24 46,24 38,48 22,48"
        fill="#151515"
        stroke="#151515"
        strokeWidth="2"
      />
      <rect x="20" y="24" width="20" height="4" fill="#6B7280" />
    </svg>
  );
}

// 11. Hand-Drawn Pencil
export function DoodlePencil({ className = "w-12 h-12", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      <g transform="rotate(45 30 30)">
        <polygon points="12,18 48,18 48,32 12,32" fill="#FFD52E" stroke="#151515" strokeWidth="2.5" />
        <polygon points="48,18 56,25 48,32" fill="#F43B2F" stroke="#151515" strokeWidth="2.5" />
        <polygon points="12,18 4,25 12,32" fill="#E2E8F0" stroke="#151515" strokeWidth="2.5" />
        <polygon points="6,23 4,25 6,27" fill="#151515" />
        <line x1="24" y1="18" x2="24" y2="32" stroke="#151515" strokeWidth="2" />
        <line x1="36" y1="18" x2="36" y2="32" stroke="#151515" strokeWidth="2" />
      </g>
    </svg>
  );
}

// 12. Hand-Drawn Lightbulb (for Card 1: Frontend)
export function DoodleLightbulb({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      {/* Glowing rays */}
      <line x1="30" y1="4" x2="30" y2="10" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="16" y2="18" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="14" x2="44" y2="18" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="30" x2="12" y2="30" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="54" y1="30" x2="48" y2="30" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      {/* Bulb body */}
      <path
        d="M20 32 C17 28 16 25 16 20 C16 12 22 7 30 7 C38 7 44 12 44 20 C44 25 43 28 40 32 L38 38 L22 38 Z"
        fill="white"
        stroke="#151515"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      {/* Filament */}
      <path d="M26 23 L29 17 L31 17 L34 23" stroke="#FFD52E" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Base screw */}
      <rect x="24" y="38" width="12" height="4" fill="#E2E8F0" stroke="#151515" strokeWidth="2" />
      <rect x="25" y="42" width="10" height="3" fill="#E2E8F0" stroke="#151515" strokeWidth="2" />
      <path d="M27 45 Q30 48 33 45" stroke="#151515" strokeWidth="2" fill="none" />
    </svg>
  );
}

// 13. Hand-Drawn Price Tag / Key (for Card 2: Backend)
export function DoodleTag({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      <g transform="rotate(-15 30 30)">
        <path
          d="M12 28 L28 12 L50 12 L50 34 L34 50 Z"
          fill="white"
          stroke="#151515"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="42" cy="20" r="3" fill="#151515" />
        <line x1="24" y1="32" x2="38" y2="18" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 14. Hand-Drawn Pencil Pot / Database (for Card 3: Database & Integration)
export function DoodlePencilPot({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      {/* Pencils sticking out */}
      <line x1="22" y1="10" x2="26" y2="28" stroke="#FFD52E" strokeWidth="4" strokeLinecap="round" />
      <line x1="30" y1="6" x2="30" y2="28" stroke="#F43B2F" strokeWidth="4" strokeLinecap="round" />
      <line x1="38" y1="10" x2="34" y2="28" stroke="#1749E8" strokeWidth="4" strokeLinecap="round" />
      {/* Pot cup */}
      <path
        d="M18 26 L22 52 L38 52 L42 26 Z"
        fill="white"
        stroke="#151515"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <line x1="20" y1="36" x2="40" y2="36" stroke="#151515" strokeWidth="2" strokeDasharray="3 2" />
    </svg>
  );
}

// 15. Hand-Drawn Megaphone (for Card 4: Full-Stack & AI)
export function DoodleMegaphone({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      <g transform="rotate(-10 30 30)">
        {/* Cone */}
        <polygon points="20,24 44,12 44,48 20,36" fill="white" stroke="#151515" strokeWidth="3" strokeLinejoin="round" />
        {/* Back cylinder */}
        <rect x="12" y="24" width="8" height="12" rx="2" fill="#FFD52E" stroke="#151515" strokeWidth="2.5" />
        {/* Handle */}
        <path d="M24 36 L24 48 L29 46 L29 36" fill="#151515" />
        {/* Sound waves */}
        <path d="M49 22 Q54 30 49 38" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M54 18 Q60 30 54 42" stroke="#151515" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

// 16. Retro Red Rotary Telephone Sticker (from Yellow CTA banner)
export function DoodleTelephone({ className = "w-28 h-24", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={`select-none ${className}`} {...props}>
      {/* Handset */}
      <path
        d="M20 22 C20 14, 38 6, 60 6 C82 6, 100 14, 100 22 C94 28, 84 25, 80 20 C68 18, 52 18, 40 20 C36 25, 26 28, 20 22 Z"
        fill="#F43B2F"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Phone base body */}
      <path
        d="M26 34 L32 30 L88 30 L94 34 L102 78 C102 84, 98 88, 92 88 L28 88 C22 88, 18 84, 18 78 Z"
        fill="#F43B2F"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      {/* Rotary Dial */}
      <circle cx="60" cy="58" r="18" fill="white" stroke="#151515" strokeWidth="3" />
      <circle cx="60" cy="58" r="7" fill="#F43B2F" stroke="#151515" strokeWidth="2" />
      {/* Finger holes */}
      <circle cx="60" cy="45" r="2.5" fill="#151515" />
      <circle cx="69" cy="49" r="2.5" fill="#151515" />
      <circle cx="72" cy="58" r="2.5" fill="#151515" />
      <circle cx="68" cy="67" r="2.5" fill="#151515" />
      <circle cx="59" cy="71" r="2.5" fill="#151515" />
      <circle cx="51" cy="67" r="2.5" fill="#151515" />
      <circle cx="48" cy="58" r="2.5" fill="#151515" />
      <circle cx="51" cy="49" r="2.5" fill="#151515" />
      {/* Curly Cord */}
      <path
        d="M20 74 Q12 80 16 86 Q20 92 12 96"
        stroke="#151515"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// 17. Hand-Drawn Paper Airplane (from Paper Plane project card)
export function DoodlePaperAirplane({ className = "w-10 h-10 text-white", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 50" fill="none" className={`select-none ${className}`} {...props}>
      <polygon points="6,24 54,6 38,44 26,30" fill="white" stroke="#151515" strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points="54,6 26,30 38,24" fill="#E2E8F0" stroke="#151515" strokeWidth="2" />
      {/* Flight dashed trail */}
      <path d="M4 36 Q12 30 22 28" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    </svg>
  );
}

// 18. "Hey, I'm" Hand-Drawn Scribble Arrow (Signature reference element)
export function DoodleHeyArrow({ className = "w-28 h-16 text-white", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 120 70" fill="none" className={`select-none ${className}`} {...props}>
      {/* Handwritten "Hey," */}
      <text
        x="6"
        y="22"
        fill="currentColor"
        fontFamily="var(--font-handwriting), Caveat, cursive"
        fontSize="24"
        fontWeight="bold"
        className="select-none"
      >
        Hey,
      </text>
      {/* Hand-drawn arrow curving down-right to "I'm" */}
      <path
        d="M28 26 C28 42, 45 48, 62 48"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrow head */}
      <path
        d="M54 41 L64 48 L54 55"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Handwritten "I'm" */}
      <text
        x="72"
        y="54"
        fill="currentColor"
        fontFamily="var(--font-handwriting), Caveat, cursive"
        fontSize="32"
        fontWeight="bold"
        className="select-none"
      >
        I&apos;m
      </text>
    </svg>
  );
}

// 19. Yellow Doodle Crown (Right above name)
export function DoodleCrownYellow({ className = "w-12 h-9", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 36" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M5 30 L9 10 L20 20 L25 5 L30 20 L41 10 L45 30 Z"
        fill="#FFD52E"
        stroke="#151515"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="8" r="2.5" fill="#FFD52E" stroke="#151515" strokeWidth="1.5" />
      <circle cx="25" cy="4" r="2.5" fill="#FFD52E" stroke="#151515" strokeWidth="1.5" />
      <circle cx="41" cy="8" r="2.5" fill="#FFD52E" stroke="#151515" strokeWidth="1.5" />
    </svg>
  );
}

// 20. Cyan / Electric Speech Bubble ("LET'S BUILD SOMETHING AWESOME!")
export function DoodleSpeechBubble({
  text = "LET'S BUILD SOMETHING AWESOME!",
  className = "w-52 h-20",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { text?: string }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center px-4 py-2.5 rounded-[22px] bg-[#38BDF8] text-[#0A0514] font-display font-black text-xs sm:text-sm tracking-wide shadow-[0_4px_15px_rgba(56,189,248,0.5)] border-2 border-[#0A0514] rotate-[-4deg] hover:rotate-0 hover:scale-105 transition-all duration-200 select-none ${className}`}
      {...props}
    >
      <span>{text}</span>
      {/* Speech pointer tail */}
      <div className="absolute -bottom-2.5 left-6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[#38BDF8]" />
    </div>
  );
}

// 21. Lime / Yellow Sticker Smiley with doodle aura
export function DoodleSmileySticker({ className = "w-12 h-12", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      {/* Circular green/lime sticker background */}
      <circle cx="30" cy="30" r="25" fill="#CCFF00" stroke="#151515" strokeWidth="3" />
      {/* Eye left */}
      <ellipse cx="22" cy="24" rx="2.5" ry="3.5" fill="#151515" />
      {/* Eye right */}
      <ellipse cx="38" cy="24" rx="2.5" ry="3.5" fill="#151515" />
      {/* Big joyful smile */}
      <path
        d="M20 34 Q30 46 40 34"
        stroke="#151515"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Underline scribble */}
      <path
        d="M16 54 L44 52"
        stroke="#CCFF00"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// 22. Sharp Neon Yellow Lightning Bolt
export function DoodleLightningBolt({ className = "w-8 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 60" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M24 2 L4 34 L18 34 L10 58 L36 24 L22 24 Z"
        fill="#FFD52E"
        stroke="#0A0514"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 23. Cyan Fluid Splash / Wave on the Left Edge
export function DoodleFluidWave({ className = "w-40 h-40", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M20 20 C60 0, 110 30, 130 80 C150 130, 120 180, 80 190 C40 200, 0 170, 0 120 C0 70, -20 40, 20 20 Z"
        fill="#0284C7"
        opacity="0.85"
      />
      <circle cx="150" cy="50" r="10" fill="#38BDF8" opacity="0.9" />
      <circle cx="170" cy="85" r="5" fill="#38BDF8" opacity="0.75" />
      <circle cx="100" cy="185" r="7" fill="#0284C7" opacity="0.6" />
    </svg>
  );
}

// 24. Cute Pink / Orange Rabbit Head Doodle (from Showreel Card)
export function DoodleRabbitHead({ className = "w-10 h-10 text-pink-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      {/* Left ear */}
      <path
        d="M22 26 C20 12, 14 6, 20 4 C26 2, 28 14, 28 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right ear */}
      <path
        d="M38 26 C40 12, 46 6, 40 4 C34 2, 32 14, 32 26"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Head oval */}
      <circle cx="30" cy="40" r="16" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Eyes */}
      <circle cx="25" cy="38" r="2" fill="currentColor" />
      <circle cx="35" cy="38" r="2" fill="currentColor" />
      {/* Nose & mouth */}
      <path d="M29 43 L31 43" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M27 46 Q30 49 33 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// 25. Pink Sketch Hatch Lines (///)
export function DoodlePinkHatch({ className = "w-12 h-8 text-pink-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 40" fill="none" className={`select-none ${className}`} {...props}>
      <line x1="8" y1="32" x2="24" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="22" y1="32" x2="38" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="32" x2="52" y2="8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// 26. Purple Wavy Squiggle (~)
export function DoodlePurpleSquiggle({ className = "w-12 h-6 text-purple-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 30" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M4 16 C12 6, 20 26, 30 16 C40 6, 48 26, 56 16"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// 27. Green Lightning Squiggle (Bottom-left of Projects)
export function DoodleGreenSquiggle({ className = "w-10 h-14 text-[#CCFF00]", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 50 60" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M10 10 L25 22 L16 32 L35 44 L24 55"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

// 28. Looped Purple Ribbon Squiggle (Right side of Skills)
export function DoodlePurpleRibbon({ className = "w-16 h-16 text-purple-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M10 60 C30 75, 60 65, 55 40 C50 15, 20 20, 30 45 C40 70, 70 55, 75 35"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

// 29. Purple Brush Strokes (Bottom of About Me)
export function DoodlePurpleBrush({ className = "w-20 h-10 text-purple-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 50" fill="none" className={`select-none ${className}`} {...props}>
      <path
        d="M10 20 C35 15, 65 35, 90 22"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M20 34 C45 28, 70 45, 85 36"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

// 30. Purple Dope Circle Loops (Circling "DOPE!" or "AWESOME!")
export function DoodleDopeCircle({ className = "w-36 h-20 text-purple-400", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 140 70" fill="none" className={`select-none ${className}`} {...props}>
      <ellipse
        cx="70"
        cy="35"
        rx="64"
        ry="28"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="400"
        transform="rotate(-4 70 35)"
      />
      <ellipse
        cx="72"
        cy="36"
        rx="60"
        ry="25"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="380"
        transform="rotate(-1 72 36)"
        opacity="0.75"
      />
    </svg>
  );
}

// 31. Cute Blue Peace Monster Waving Mascot (Signature footer character from reference)
export function DoodleBlueMonster({ className = "w-24 h-28", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 100 120" fill="none" className={`select-none ${className}`} {...props}>
      {/* Mascot Body */}
      <path
        d="M20 115 C15 70, 20 45, 50 45 C80 45, 85 70, 80 115 Z"
        fill="#38BDF8"
        stroke="#0A0514"
        strokeWidth="3"
      />
      {/* Big Eyes */}
      <ellipse cx="40" cy="68" rx="6" ry="8" fill="white" stroke="#0A0514" strokeWidth="2.5" />
      <circle cx="42" cy="70" r="3.5" fill="#0A0514" />
      <ellipse cx="60" cy="68" rx="6" ry="8" fill="white" stroke="#0A0514" strokeWidth="2.5" />
      <circle cx="62" cy="70" r="3.5" fill="#0A0514" />
      {/* Big Happy Open Mouth with Tongue */}
      <path
        d="M40 85 Q50 102 60 85 Z"
        fill="#0A0514"
        stroke="#0A0514"
        strokeWidth="2"
      />
      <path
        d="M46 92 Q50 97 54 92"
        fill="#F43F5E"
      />
      {/* Waving Arm on Right making Peace / Victory Sign (V) */}
      <path
        d="M78 70 C88 50, 92 35, 92 25"
        stroke="#38BDF8"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M78 70 C88 50, 92 35, 92 25"
        stroke="#0A0514"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Two peace fingers */}
      <line x1="90" y1="28" x2="84" y2="10" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
      <line x1="90" y1="28" x2="84" y2="10" stroke="#0A0514" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="93" y1="28" x2="98" y2="12" stroke="#38BDF8" strokeWidth="7" strokeLinecap="round" />
      <line x1="93" y1="28" x2="98" y2="12" stroke="#0A0514" strokeWidth="2.5" strokeLinecap="round" />
      {/* Sparkles near peace sign */}
      <path d="M72 15 L74 22 L79 24 L74 26 L72 33 L70 26 L65 24 L70 22 Z" fill="#FFD52E" />
    </svg>
  );
}

// 32. Clapperboard / Code Terminal Sticker
export function DoodleClapperboard({ className = "w-14 h-14", ...props }: DoodleProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={`select-none ${className}`} {...props}>
      <rect x="8" y="22" width="44" height="30" rx="4" fill="#1E1E2E" stroke="#151515" strokeWidth="2.5" />
      {/* Top hinge bar */}
      <rect x="8" y="10" width="44" height="12" rx="2" fill="#151515" />
      {/* Diagonal stripes on hinge */}
      <line x1="16" y1="10" x2="22" y2="22" stroke="white" strokeWidth="2.5" />
      <line x1="26" y1="10" x2="32" y2="22" stroke="white" strokeWidth="2.5" />
      <line x1="36" y1="10" x2="42" y2="22" stroke="white" strokeWidth="2.5" />
      {/* Code play icon inside */}
      <polygon points="26,30 38,37 26,44" fill="white" />
    </svg>
  );
}
