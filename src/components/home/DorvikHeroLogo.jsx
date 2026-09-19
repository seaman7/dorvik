"use client";

import React, { useEffect, useRef, useState } from "react";

// Crisp, unmistakable 8-bit chunky block font spelling D O R V I K
const DORVIK_ASCII = [
  " ██████╗    ██████╗  ██████╗  ██╗   ██╗ ██╗ ██╗  ██╗",
  " ██╔══██╗  ██╔═══██╗ ██╔══██╗ ██║   ██║ ██║ ██║ ██╔╝",
  " ██║  ██║  ██║   ██║ ██████╔╝ ██║   ██║ ██║ █████╔╝ ",
  " ██║  ██║  ██║   ██║ ██╔══██╗ ╚██╗ ██╔╝ ██║ ██╔═██╗ ",
  " ██████╔╝  ╚██████╔╝ ██║  ██║  ╚████╔╝  ██║ ██║  ██╗",
  " ╚═════╝    ╚═════╝  ╚═╝  ╚═╝   ╚═══╝   ╚═╝ ╚═╝  ╚═╝",
];

const MOBILE_ASCII = [
  "████╗  ████╗ ████╗ ██╗   ██╗██╗██╗  ██╗",
  "██╔██╗██╔═██╗██╔██╗██║   ██║██║██║ ██╔╝",
  "██║██║██║ ██║████╔╝██║   ██║██║█████╔╝ ",
  "██╔██║██║ ██║██╔██╗╚██╗ ██╔╝██║██╔═██╗ ",
  "████╔╝╚████╔╝██║██║ ╚████╔╝ ██║██║  ██╗",
  "╚═══╝  ╚═══╝ ╚═╝╚═╝  ╚═══╝  ╚═╝╚═╝  ╚═╝",
];

function getLetterColor(colFraction) {
  if (colFraction < 0.2) return "#00D2EF"; // D: Cyan
  if (colFraction < 0.4) return "#D0B9FF"; // O: Lavender
  if (colFraction < 0.6) return "#E1308D"; // R: Fuchsia
  if (colFraction < 0.78) return "#00D2EF"; // V: Cyan
  if (colFraction < 0.88) return "#F0C642"; // I: Amber
  return "#E1308D"; // K: Fuchsia
}

export function DorvikHeroLogo() {
  const canvasRef = useRef(null);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 960);
    let height = (canvas.height = Math.min(230, Math.max(160, width * 0.19)));

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = Math.min(230, Math.max(160, width * 0.19));
    };

    window.addEventListener("resize", handleResize);

    const isMobile = width < 640;
    const asciiGrid = isMobile ? MOBILE_ASCII : DORVIK_ASCII;

    const gridCols = Math.max(...asciiGrid.map((row) => row.length));
    const maxCharWidth = Math.floor((width - 32) / gridCols);
    const fontSize = Math.min(21, Math.max(10, maxCharWidth * 1.55));

    ctx.font = `bold ${fontSize}px "Roboto Mono", monospace`;
    const charWidth = ctx.measureText("█").width;
    const charHeight = fontSize * 1.28;

    const gridRows = asciiGrid.length;
    const totalW = gridCols * charWidth;
    const totalH = gridRows * charHeight;
    const startX = Math.max(10, Math.floor((width - totalW) / 2));
    const startY = Math.max(22, Math.floor((height - totalH) / 2) + fontSize);

    const particles = [];
    for (let r = 0; r < gridRows; r++) {
      const rowStr = asciiGrid[r] || "";
      for (let c = 0; c < rowStr.length; c++) {
        const char = rowStr[c];
        if (char && char !== " ") {
          const colFrac = c / gridCols;
          const baseColor = getLetterColor(colFrac);
          particles.push({
            char,
            targetX: startX + c * charWidth,
            targetY: startY + r * charHeight,
            x: startX + c * charWidth,
            y: startY + r * charHeight,
            vx: 0,
            vy: 0,
            color: baseColor,
          });
        }
      }
    }

    setParticleCount(particles.length);

    let robot = {
      x: startX,
      y: startY,
      targetIndex: 0,
      speed: 3.5,
    };

    const handleCanvasClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      particles.forEach((p) => {
        const dx = p.x - clickX;
        const dy = p.y - clickY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 140) {
          const force = (1 - dist / 140) * 14;
          p.vx = (dx / (dist || 1)) * force + (Math.random() - 0.5) * 6;
          p.vy = (dy / (dist || 1)) * force + (Math.random() - 0.5) * 6;
        }
      });
    };

    canvas.addEventListener("click", handleCanvasClick);

    const render = () => {
      ctx.fillStyle = "#1D0245";
      ctx.fillRect(0, 0, width, height);

      // Subtle background grid
      ctx.fillStyle = "#2b0b5e";
      for (let gx = 0; gx < width; gx += 28) {
        for (let gy = 0; gy < height; gy += 28) {
          ctx.fillRect(gx, gy, 1.5, 1.5);
        }
      }

      // Draw particles
      ctx.font = `bold ${fontSize}px "Roboto Mono", monospace`;
      particles.forEach((p) => {
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        p.vx += dx * 0.08;
        p.vy += dy * 0.08;
        p.vx *= 0.82;
        p.vy *= 0.82;

        p.x += p.vx;
        p.y += p.vy;

        ctx.fillStyle = p.color;
        ctx.fillText(p.char, p.x, p.y);
      });

      // Robot cursor movement
      if (particles.length > 0) {
        const targetP = particles[robot.targetIndex % particles.length];
        const rdx = targetP.x - robot.x;
        const rdy = targetP.y - robot.y;
        const rDist = Math.sqrt(rdx * rdx + rdy * rdy);

        if (rDist < 12) {
          robot.targetIndex = (robot.targetIndex + 23) % particles.length;
        } else {
          robot.x += (rdx / rDist) * robot.speed;
          robot.y += (rdy / rDist) * robot.speed;
        }

        // Draw Robot "@"
        ctx.fillStyle = "#F0C642";
        ctx.font = `bold ${Math.max(12, fontSize * 0.85)}px "Roboto Mono", monospace`;
        ctx.fillText("@", robot.x, robot.y - 6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("click", handleCanvasClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full pt-20 md:pt-24 pb-4 px-4 max-w-screen-xl mx-auto flex flex-col items-center select-none">
      {/* Top Banner Tag: Software & Web Development + AI Bug Fixer */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-900/90 border border-purple-600 text-xs font-mono text-purple-100 mb-3 shadow-md">
        <span className="w-2.5 h-2.5 bg-cyan-400 inline-block animate-pulse"></span>
        <span className="text-cyan-300 font-black">DORVIK</span>
        <span className="text-purple-400">|</span>
        <span className="text-fuchsia-300 font-bold hidden sm:inline">Software & Web Development</span>
        <span className="text-purple-400 hidden sm:inline">•</span>
        <span className="text-amber-300 font-bold">Autonomous AI Bug Fixer Agent</span>
      </div>

      {/* Interactive ASCII Logo Canvas */}
      <div className="w-full relative flex justify-center cursor-pointer overflow-hidden group">
        <canvas
          ref={canvasRef}
          className="w-full max-w-5xl rounded-pixel-sm border-2 border-purple-800 shadow-2xl bg-[#1D0245] group-hover:border-purple-600 transition-colors"
        />
        <div className="absolute bottom-2 right-4 text-[10px] text-purple-400/90 font-mono hidden sm:flex items-center gap-2">
          <span className="text-cyan-400 font-bold">{particleCount} Particles</span>
          <span>•</span>
          <span>[Click logo to scatter & reassemble]</span>
        </div>
      </div>

      {/* Core Capability Badges directly under Logo */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs font-mono">
        <span className="px-2.5 py-1 bg-[#130825] border border-cyan-400 text-cyan-300">
          Full-Stack Web Apps (Next.js / React / Node)
        </span>
        <span className="px-2.5 py-1 bg-[#130825] border border-fuchsia-400 text-fuchsia-300">
          Autonomous Bug Diagnosis & PR Patches
        </span>
        <span className="px-2.5 py-1 bg-[#130825] border border-amber-400 text-amber-300">
          High-Performance APIs & Cloud Infra
        </span>
      </div>
    </div>
  );
}
