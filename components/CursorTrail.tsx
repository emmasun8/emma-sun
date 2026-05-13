"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** 0..1, used to fade out the trail as the cobalt scene leaves */
  opacity?: number;
  /** Trail color, default cream */
  color?: string;
};

export function CursorTrail({ opacity = 1, color = "#F2EDE5" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const opacityRef = useRef(opacity);

  // Keep opacity available to the rAF loop without re-binding handlers.
  useEffect(() => {
    opacityRef.current = opacity;
  }, [opacity]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth;
    let h = window.innerHeight;
    const setSize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    type P = { x: number; y: number; age: number };
    const trail: P[] = [];
    const MAX_TRAIL = 40;
    const LIFE = 36; // frames

    let lastMouseX = -1000;
    let lastMouseY = -1000;
    let mouseActive = false;

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastMouseX;
      const dy = e.clientY - lastMouseY;
      // Only add a new point if pointer moved enough (skip flooding).
      if (Math.hypot(dx, dy) < 1.5) return;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      mouseActive = true;
      trail.unshift({ x: e.clientX, y: e.clientY, age: 0 });
      if (trail.length > MAX_TRAIL) trail.length = MAX_TRAIL;
    };
    const onLeave = () => {
      mouseActive = false;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", setSize);

    const [r, g, b] = hexToRgb(color);

    let raf = 0;
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      const globalAlpha = opacityRef.current;
      if (globalAlpha > 0.02 && trail.length > 0) {
        for (let i = trail.length - 1; i >= 0; i--) {
          const p = trail[i];
          p.age += 1;
          if (p.age > LIFE) {
            trail.splice(i, 1);
            continue;
          }
          const a = (1 - p.age / LIFE) * globalAlpha;
          const radius = 4 + (1 - p.age / LIFE) * 6;
          ctx.beginPath();
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a * 0.92})`;
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
        // A larger soft halo on the most recent point (the cursor itself).
        if (mouseActive && trail.length > 0) {
          const head = trail[0];
          const grd = ctx.createRadialGradient(
            head.x,
            head.y,
            0,
            head.x,
            head.y,
            22,
          );
          grd.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${0.55 * globalAlpha})`);
          grd.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = grd;
          ctx.fillRect(head.x - 24, head.y - 24, 48, 48);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", setSize);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[15]"
    />
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const m = hex.replace("#", "");
  const n = parseInt(
    m.length === 3
      ? m
          .split("")
          .map((c) => c + c)
          .join("")
      : m,
    16,
  );
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
