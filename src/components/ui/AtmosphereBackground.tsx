"use client";

import React, { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  glowColor: string;
  baseOpacity: number;
  twinkleSpeed: number;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  opacity: number;
  active: boolean;
}

export function AtmosphereBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleChange);

    // Desktop pointer tracking for particle attraction & glowing spotlight
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

  // Multi-layered Canvas Animation: Constellations, Star Particles, and Shooting Stars
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

    // Color definitions for cosmic stardust
    const particlePalette = [
      { color: "rgba(168, 85, 247, ", glow: "#A855F7" }, // Neon Purple
      { color: "rgba(236, 72, 153, ", glow: "#EC4899" }, // Magenta Pink
      { color: "rgba(239, 68, 68, ", glow: "#EF4444" },  // Crimson Red
      { color: "rgba(255, 255, 255, ", glow: "#FFFFFF" }, // Bright Star
      { color: "rgba(217, 70, 239, ", glow: "#D946EF" }, // Fuchsia
    ];

    const particleCount = Math.min(85, Math.floor(width / 20));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const palette = particlePalette[Math.floor(Math.random() * particlePalette.length)];
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.9 + Math.random() * 2.2,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        color: palette.color,
        glowColor: palette.glow,
        baseOpacity: 0.3 + Math.random() * 0.55,
        twinkleSpeed: 0.02 + Math.random() * 0.035,
      });
    }

    // Shooting Stars / Meteors collection
    const shootingStars: ShootingStar[] = [];
    const spawnShootingStar = () => {
      if (shootingStars.length >= 2) return;
      shootingStars.push({
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.4),
        length: 80 + Math.random() * 120,
        speed: 12 + Math.random() * 8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 degrees diagonal
        opacity: 1,
        active: true,
      });
    };

    // Spawn shooting star every 4 to 7 seconds
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.3) {
        spawnShootingStar();
      }
    }, 4500);

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // 1. Update and Draw Particles
      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries smoothly
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Smooth sinusoidal twinkle
        const shimmer = Math.sin(tick * p.twinkleSpeed + idx) * 0.28;
        const currentOpacity = Math.max(0.12, Math.min(0.95, p.baseOpacity + shimmer));

        // Subtle mouse interaction (gentle proximity push/pull)
        if (mousePos) {
          const dx = mousePos.x - p.x;
          const dy = mousePos.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120 && dist > 5) {
            p.x -= (dx / dist) * 0.6;
            p.y -= (dy / dist) * 0.6;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentOpacity})`;
        ctx.shadowColor = p.glowColor;
        ctx.shadowBlur = p.size > 1.6 ? 7 : 3;
        ctx.fill();
      });

      // 2. Connective Constellation Filaments between nearby particles
      ctx.shadowBlur = 0;
      const maxDistance = 90;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.16;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect to mouse cursor with vibrant pink/purple filament if close
        if (mousePos) {
          const mdx = particles[i].x - mousePos.x;
          const mdy = particles[i].y - mousePos.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 130) {
            const mAlpha = (1 - mdist / 130) * 0.28;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // 3. Update & Draw Shooting Stars (Comet streaks)
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];
        if (!star.active) {
          shootingStars.splice(i, 1);
          continue;
        }

        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity -= 0.018;

        if (star.opacity <= 0 || star.x > width + 100 || star.y > height + 100) {
          star.active = false;
          continue;
        }

        const tailX = star.x - Math.cos(star.angle) * star.length;
        const tailY = star.y - Math.sin(star.angle) * star.length;

        const gradient = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
        gradient.addColorStop(0, "rgba(236, 72, 153, 0)");
        gradient.addColorStop(0.6, `rgba(168, 85, 247, ${star.opacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${star.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(star.x, star.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.8;
        ctx.lineCap = "round";
        ctx.stroke();

        // Glowing comet head
        ctx.beginPath();
        ctx.arc(star.x, star.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.shadowColor = "#EC4899";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(shootingStarInterval);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion, mousePos]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Cosmic Void Base Layer */}
      <div className="absolute inset-0 bg-[#07030C]" />

      {/* Living Atmospheric Nebulas with Smooth Breathing Motion */}
      {/* 1. Purple Nebula - Top Left */}
      <div className="absolute -top-[15%] -left-[10%] w-[68vw] h-[68vw] rounded-full bg-purple-900/40 blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />

      {/* 2. Magenta Pink Nebula - Top Right */}
      <div className="absolute top-[20%] -right-[15%] w-[62vw] h-[62vw] rounded-full bg-pink-600/30 blur-[150px] pointer-events-none animate-pulse" style={{ animationDuration: "10s" }} />

      {/* 3. Crimson Red Nebula - Mid Left */}
      <div className="absolute top-[55%] -left-[12%] w-[58vw] h-[58vw] rounded-full bg-red-600/25 blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: "12s" }} />

      {/* 4. Electric Violet Nebula - Bottom Right */}
      <div className="absolute -bottom-[20%] right-[10%] w-[55vw] h-[55vw] rounded-full bg-fuchsia-900/35 blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: "9s" }} />

      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute w-[550px] h-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-200"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, rgba(236, 72, 153, 0.08) 35%, rgba(239, 68, 68, 0.03) 65%, transparent 80%)",
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

      {/* High-Performance Canvas for Constellations, Stardust, and Shooting Stars */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}
