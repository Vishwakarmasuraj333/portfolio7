"use client";

import React, { useEffect, useRef, useState } from "react";

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

    // Desktop pointer spotlight
    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia("(pointer: fine)").matches) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Multi-colored cosmic stardust particles canvas
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

    // Palette for cosmic particles: Neon Purple, Pink, Crimson Red, White
    const colors = [
      "rgba(168, 85, 247, ",  // Purple
      "rgba(236, 72, 153, ",  // Pink
      "rgba(239, 68, 68, ",   // Red
      "rgba(255, 255, 255, ", // White Star
      "rgba(244, 63, 94, ",   // Rose
    ];

    const particleCount = Math.min(65, Math.floor(width / 25));
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      colorPrefix: string;
      baseOpacity: number;
      twinkleSpeed: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      const baseOpacity = 0.2 + Math.random() * 0.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.8 + Math.random() * 1.8,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        baseOpacity,
        twinkleSpeed: 0.015 + Math.random() * 0.025,
      });
    }

    let tick = 0;
    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, idx) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Smooth sinusoidal twinkle
        const shimmer = Math.sin(tick * p.twinkleSpeed + idx) * 0.25;
        const currentOpacity = Math.max(0.1, Math.min(0.85, p.baseOpacity + shimmer));

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${currentOpacity})`;
        ctx.shadowColor = p.colorPrefix === "rgba(255, 255, 255, " ? "#FFFFFF" : "#EC4899";
        ctx.shadowBlur = p.size > 1.5 ? 4 : 0;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [prefersReducedMotion]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Cosmic Void Base Layer */}
      <div className="absolute inset-0 bg-[#07030C]" />

      {/* Atmospheric Cosmic Radial Nebulas: Purple, Pink, Crimson Red */}
      <div className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full bg-purple-900/40 blur-[140px] pointer-events-none" />
      <div className="absolute top-[25%] -right-[15%] w-[60vw] h-[60vw] rounded-full bg-pink-600/25 blur-[150px] pointer-events-none" />
      <div className="absolute top-[65%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-red-600/25 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-fuchsia-900/35 blur-[130px] pointer-events-none" />

      {/* Interactive Cursor Spotlight Glow */}
      {mousePos && (
        <div
          className="absolute w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(236, 72, 153, 0.05) 35%, rgba(239, 68, 68, 0.02) 60%, transparent 80%)",
          }}
        />
      )}

      {/* Subtle Cosmic Dust Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #EC4899 1px, transparent 1px), linear-gradient(to bottom, #A855F7 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Twinkling Cosmic Stardust Particles Canvas */}
      {!prefersReducedMotion && (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      )}
    </div>
  );
}
