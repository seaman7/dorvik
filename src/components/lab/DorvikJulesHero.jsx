"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { DorvikPixelFox } from "@/components/home/DorvikEditorViewport";

// Authentic Dorbik Jules-style ASCII art
const LOGO_LINES = [
  { indent: 6, text: "        :xx;                                                               :xx;" },
  { indent: 6, text: "        XMM0                                                               :M.W" },
  { indent: 0, text: "0MMMMKl   M       .dXMMMMKl    ,MMMMX:    0MMMMMKl   :xx;  0MM0             :M.W   MMW" },
  { indent: 0, text: "0MMc :MM0        ,WMN;  .cWMX  ,MMM  XMMc 0MMc :MM0  XMM0  0MMc :M.W       :MMW" },
  { indent: 0, text: "0MMc  0MM        0MM:    :MMM  ,MMMMMNXo  0MMMMMNKl   M    0MMl :MMW       :MMW" },
  { indent: 0, text: "0MMc  0MM        0MM:    :MMM  ,MMM  XMMc 0MMc :MM0  0MMx  0MM0.dXMM       :MMW" },
  { indent: 0, text: "0MMc :MM0        ;WMN;  .cWMX  ,MMM   XMM 0MMc :MM0  0MMx  0MMXMMMM:       :MMW" },
  { indent: 0, text: "0MMMMKl           .dXMMMMKl    ,MMM   XMM 0MMMMMKl   0M.d  0MMc  XMMc      :MMW" },
  { indent: 0, text: " .::;               .::;        .::.   .:: .::;     KK.M.X 0MM:   ;cl:     .::;" },
  { indent: 0, text: "                                                    ;cl:\x27" },
];

const INITIAL_FLOATING_GLYPHS = [
  { char: "D", xRatio: 0.08, yRatio: 0.49, color: "#F0C642", baseVx: 0.2, baseVy: -0.15, size: 16 },
  { char: "M", xRatio: 0.79, yRatio: 0.08, color: "#F0C642", baseVx: -0.1, baseVy: 0.2, size: 14 },
  { char: "B", xRatio: 0.88, yRatio: 0.22, color: "#E1308D", baseVx: 0.15, baseVy: 0.1, size: 15 },
  { char: "K", xRatio: 0.94, yRatio: 0.42, color: "#E1308D", baseVx: -0.2, baseVy: -0.1, size: 15 },
  { char: "o", xRatio: 0.91, yRatio: 0.65, color: "#818CF8", baseVx: -0.15, baseVy: 0.15, size: 14 },
  { char: "R", xRatio: 0.82, yRatio: 0.72, color: "#E1308D", baseVx: 0.2, baseVy: -0.15, size: 14 },
  { char: "X", xRatio: 0.68, yRatio: 0.78, color: "#F0C642", baseVx: -0.1, baseVy: 0.2, size: 15 },
  { char: "c", xRatio: 0.52, yRatio: 0.86, color: "#F0C642", baseVx: 0.18, baseVy: -0.1, size: 15 },
  { char: "W", xRatio: 0.73, yRatio: 0.89, color: "#818CF8", baseVx: -0.15, baseVy: -0.15, size: 14 },
];

export function DorvikJulesHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 280);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 280;
    };

    window.addEventListener("resize", handleResize);

    const floating = INITIAL_FLOATING_GLYPHS.map((g) => ({
      ...g,
      x: g.xRatio * width,
      y: g.yRatio * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      angle: Math.random() * Math.PI * 2,
    }));

    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      floating.forEach((g) => {
        const dx = g.x - mx;
        const dy = g.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 220) {
          const force = (1 - dist / 220) * 9;
          g.vx += (dx / (dist || 1)) * force + (Math.random() - 0.5) * 4;
          g.vy += (dy / (dist || 1)) * force + (Math.random() - 0.5) * 4;
        }
      });
    };

    canvas.addEventListener("click", handleClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep Google Jules background gradient
      const bgGrad = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        20,
        width * 0.5,
        height * 0.45,
        width * 0.65
      );
      bgGrad.addColorStop(0, "rgba(71, 35, 148, 0.45)");
      bgGrad.addColorStop(1, "rgba(20, 0, 46, 0)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      const baseFontSize = Math.min(13.5, Math.max(7.5, width / 74));
      ctx.font = `600 ${baseFontSize}px "Roboto Mono", "Geist Mono", monospace`;

      const charWidth = baseFontSize * 0.61;
      const lineHeight = baseFontSize * 1.32;
      const logoTotalWidth = 84 * charWidth;
      const startX = Math.max(8, (width - logoTotalWidth) / 2);
      const startY = 32;

      LOGO_LINES.forEach((line, lineIdx) => {
        const lineY = startY + lineIdx * lineHeight;
        const indentX = startX + line.indent * charWidth;

        for (let charIdx = 0; charIdx < line.text.length; charIdx++) {
          const ch = line.text[charIdx];
          if (ch === " ") continue;

          const cx = indentX + charIdx * charWidth;

          if (ch === "@") {
            ctx.fillStyle = "#00D2EF";
          } else if (ch === "0" && (charIdx > 60 || (lineIdx === 2 && charIdx === 0))) {
            ctx.fillStyle = "#E1308D";
          } else if (ch === "K" && (lineIdx === 2 || lineIdx === 4 || lineIdx === 7)) {
            ctx.fillStyle = "#E1308D";
          } else if (ch === "N" && lineIdx === 4) {
            ctx.fillStyle = "#E1308D";
          } else if (ch === "x" || ch === "X" || ch === "M") {
            ctx.fillStyle = "#D0B9FF";
          } else if (ch === ":" || ch === ";" || ch === "." || ch === ",") {
            ctx.fillStyle = "#A78BFA";
          } else {
            ctx.fillStyle = "#C4B5FD";
          }

          ctx.fillText(ch, cx, lineY);
        }
      });

      // Floating glyphs with Jules oscillation
      floating.forEach((g) => {
        g.angle += 0.02;
        g.x += g.vx + Math.sin(g.angle) * 0.35;
        g.y += g.vy + Math.cos(g.angle) * 0.35;

        g.vx *= 0.97;
        g.vy *= 0.97;

        if (g.x < 15) {
          g.x = 15;
          g.vx = Math.abs(g.vx) + 0.2;
        } else if (g.x > width - 20) {
          g.x = width - 20;
          g.vx = -Math.abs(g.vx) - 0.2;
        }

        if (g.y < 20) {
          g.y = 20;
          g.vy = Math.abs(g.vy) + 0.2;
        } else if (g.y > height - 35) {
          g.y = height - 35;
          g.vy = -Math.abs(g.vy) - 0.2;
        }

        ctx.font = `bold ${Math.max(12, baseFontSize * 1.15)}px "Roboto Mono", monospace`;
        ctx.fillStyle = g.color;
        ctx.shadowColor = g.color;
        ctx.shadowBlur = 8;
        ctx.fillText(g.char, g.x, g.y);
        ctx.shadowBlur = 0;
      });

      // Subtitle: "An Autonomous Coding Agent"
      const subText = "An Autonomous Coding Agent";
      ctx.font = `500 ${Math.max(12, baseFontSize * 0.95)}px "Roboto Mono", monospace`;
      const subWidth = ctx.measureText(subText).width;
      const subX = (width - subWidth) / 2;
      const subY = startY + 11.2 * lineHeight;

      ctx.fillStyle = "#F3F4F6";
      ctx.fillText(subText, subX, subY);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("click", handleClick);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-center select-none pt-4 pb-2">
      {/* Top Navbar Strip matching Jules */}
      <div className="w-full max-w-5xl flex items-center justify-between px-4 py-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7">
            <DorvikPixelFox className="w-full h-full" />
          </div>
          <span className="font-mono font-bold text-white text-sm tracking-wider">
            DORVIK <span className="text-cyan-400 text-xs font-normal">/ LAB</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://discord.gg"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-[#2b0b5e] hover:bg-[#381078] border border-purple-600 text-purple-200 hover:text-white text-xs font-mono rounded-pixel-sm transition-all"
          >
            # Discord
          </a>
          <Link
            href="/contact"
            className="px-4 py-1.5 bg-[#00D2EF] hover:bg-[#3de2f7] text-[#09051c] font-bold text-xs font-mono rounded-pixel-sm transition-all shadow-[0_0_15px_rgba(0,210,239,0.4)]"
          >
            Try Dorvik
          </Link>
        </div>
      </div>

      {/* Interactive ASCII Art Canvas */}
      <div className="w-full max-w-5xl cursor-pointer">
        <canvas ref={canvasRef} className="w-full block" />
      </div>
    </div>
  );
}
