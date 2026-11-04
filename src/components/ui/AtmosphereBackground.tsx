"use client";

import React, { useEffect, useRef, useState } from "react";

interface StarParticle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  glowColor: string;
  baseOpacity: number;
  twinkleSpeed: number;
  hasSpikes: boolean;
  spikeLength: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
  color: string;
}

export function AtmosphereBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preferences
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Desktop pointer tracking for dynamic stardust interaction
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: fine)").matches) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    const handleMouseLeave = () => {
      setMousePos(null);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Professional Starfield Canvas with 3-Depth Star Layers, Diffraction Flares, Constellations, and Meteors
  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Palette for cosmic stardust
    const starPalette = [
      { color: "rgba(255, 255, 255, ", glow: "#FFFFFF" }, // Diamond White Star
      { color: "rgba(236, 72, 153, ", glow: "#EC4899" },  // Magenta Pink
      { color: "rgba(168, 85, 247, ", glow: "#A855F7" },  // Electric Violet / Purple
      { color: "rgba(239, 68, 68, ", glow: "#EF4444" },   // Crimson Red
      { color: "rgba(56, 189, 248, ", glow: "#38BDF8" },  // Cyan Star
      { color: "rgba(251, 191, 36, ", glow: "#FBBF24" },  // Gold Starlight
    ];

    const starCount = Math.min(115, Math.max(65, Math.floor(width / 14)));
    const stars: StarParticle[] = [];

    for (let i = 0; i < starCount; i++) {
      const palette = starPalette[Math.floor(Math.random() * starPalette.length)];
      const isForeground = i % 8 === 0; // ~12% are prominent stars with cross-sparkle diffraction spikes
      const size = isForeground ? 1.8 + Math.random() * 1.6 : 0.8 + Math.random() * 1.4;

      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        speedX: (Math.random() - 0.5) * (isForeground ? 0.35 : 0.2),
        speedY: (Math.random() - 0.5) * (isForeground ? 0.35 : 0.2),
        color: palette.color,
        glowColor: palette.glow,
        baseOpacity: 0.35 + Math.random() * 0.55,
        twinkleSpeed: 0.018 + Math.random() * 0.035,
        hasSpikes: isForeground,
        spikeLength: size * (3.5 + Math.random() * 2),
      });
    }

    // Shooting Stars / Meteors collection
    const shootingStars: ShootingStar[] = [];
    const cometColors = ["#EC4899", "#A855F7", "#38BDF8", "#FFFFFF"];

    const spawnShootingStar = () => {
      if (shootingStars.length >= 2) return;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.22; // ~45 deg diagonal flight
      shootingStars.push({
        x: Math.random() * (width * 0.85),
        y: Math.random() * (height * 0.35),
        length: 90 + Math.random() * 130,
        speed: 13 + Math.random() * 9,
        angle,
        opacity: 1,
        active: true,
        color: cometColors[Math.floor(Math.random() * cometColors.length)],
      });
    };

    // Spawn shooting stars periodically
    const meteorInterval = setInterval(() => {
      if (Math.random() > 0.25) {
        spawnShootingStar();
      }
    }, 4200);

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Star Constellation Filaments between close stars
      const maxDistance = 90;
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.14;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(stars[j].x, stars[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }

        // Connect stars to user's cursor with luminous filament
        if (mousePos) {
          const mdx = stars[i].x - mousePos.x;
          const mdy = stars[i].y - mousePos.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 140) {
            const mAlpha = (1 - mdist / 140) * 0.26;
            ctx.beginPath();
            ctx.moveTo(stars[i].x, stars[i].y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 2. Update and Draw Stars with Twinkle & Cross Diffraction Spikes
      stars.forEach((star, idx) => {
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap boundaries smoothly
        if (star.x < -15) star.x = width + 15;
        if (star.x > width + 15) star.x = -15;
        if (star.y < -15) star.y = height + 15;
        if (star.y > height + 15) star.y = -15;

        // Interactive gentle cursor sway
        if (mousePos) {
          const dx = mousePos.x - star.x;
          const dy = mousePos.y - star.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130 && dist > 5) {
            star.x -= (dx / dist) * 0.55;
            star.y -= (dy / dist) * 0.55;
          }
        }

        // Sinusoidal twinkle calculation
        const shimmer = Math.sin(tick * star.twinkleSpeed + idx) * 0.28;
        const opacity = Math.max(0.12, Math.min(0.96, star.baseOpacity + shimmer));

        // Core star circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `${star.color}${opacity})`;
        ctx.shadowColor = star.glowColor;
        ctx.shadowBlur = star.size > 1.8 ? 9 : 4;
        ctx.fill();

        // 4-pointed cross diffraction spikes for foreground luminous stars
        if (star.hasSpikes && opacity > 0.45) {
          const spikeAlpha = opacity * 0.65;
          ctx.beginPath();
          // Horizontal spike
          ctx.moveTo(star.x - star.spikeLength, star.y);
          ctx.lineTo(star.x + star.spikeLength, star.y);
          // Vertical spike
          ctx.moveTo(star.x, star.y - star.spikeLength);
          ctx.lineTo(star.x, star.y + star.spikeLength);
          ctx.strokeStyle = `${star.color}${spikeAlpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();

          // Diagonal micro-spikes for astronomical glint
          const diagLen = star.spikeLength * 0.45;
          ctx.beginPath();
          ctx.moveTo(star.x - diagLen, star.y - diagLen);
          ctx.lineTo(star.x + diagLen, star.y + diagLen);
          ctx.moveTo(star.x - diagLen, star.y + diagLen);
          ctx.lineTo(star.x + diagLen, star.y - diagLen);
          ctx.strokeStyle = `${star.color}${spikeAlpha * 0.5})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      });

      // 3. Update & Draw Shooting Stars (Meteors with Luminous Fading Trails)
      ctx.shadowBlur = 0;
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const meteor = shootingStars[i];
        if (!meteor.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        meteor.x += Math.cos(meteor.angle) * meteor.speed;
        meteor.y += Math.sin(meteor.angle) * meteor.speed;
        meteor.opacity -= 0.016;

        if (meteor.opacity <= 0 || meteor.x > width + 120 || meteor.y > height + 120) {
          meteor.active = false;
          continue;
        }

        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        gradient.addColorStop(0, "rgba(236, 72, 153, 0)");
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${meteor.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2.2;
        ctx.lineCap = "round";
        ctx.stroke();

        // Radiant comet head
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.opacity})`;
        ctx.shadowColor = meteor.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(meteorInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion, mousePos]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Deep Cosmic Void Base Layer */}
      <div className="absolute inset-0 bg-[#07030C]" />

      {/* Living Atmospheric Nebulas with Smooth Breathing Motion */}
      {/* 1. Purple Nebula - Top Left */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[68vw] h-[68vw] rounded-full bg-purple-900/40 blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* 2. Magenta Pink Nebula - Top Right */}
      <div
        className="absolute top-[20%] -right-[15%] w-[62vw] h-[62vw] rounded-full bg-pink-600/30 blur-[150px] pointer-events-none animate-pulse"
        style={{ animationDuration: "10s" }}
      />

      {/* 3. Crimson Red Nebula - Mid Left */}
      <div
        className="absolute top-[55%] -left-[12%] w-[58vw] h-[58vw] rounded-full bg-red-600/25 blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDuration: "12s" }}
      />

      {/* 4. Electric Violet Nebula - Bottom Right */}
      <div
        className="absolute -bottom-[20%] right-[10%] w-[55vw] h-[55vw] rounded-full bg-fuchsia-900/35 blur-[130px] pointer-events-none animate-pulse"
        style={{ animationDuration: "9s" }}
      />

      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(236, 72, 153, 0.09) 35%, rgba(239, 68, 68, 0.03) 65%, transparent 80%)",
          }}
        />
      )}

      {/* Subtle Cosmic Cyber Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EC4899 1px, transparent 1px), linear-gradient(to bottom, #A855F7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* High-Performance Canvas for Constellations, Cross-Spike Stars, and Meteors */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}
