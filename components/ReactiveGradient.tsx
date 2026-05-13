"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** 0..1 multiplier on the gradient strength */
  opacity?: number;
  /** Highlight color (the "hue shift" tint) */
  color?: string;
  /** Radius of the radial gradient in px */
  radius?: number;
};

export function ReactiveGradient({
  opacity = 1,
  color = "rgba(140, 160, 255, 0.55)",
  radius = 460,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const opacityRef = useRef(opacity);

  useEffect(() => {
    opacityRef.current = opacity;
  }, [opacity]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let mx = targetX;
    let my = targetY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      // Smoothing - lerp the rendered position toward target each frame.
      mx += (targetX - mx) * 0.18;
      my += (targetY - my) * 0.18;
      const el = ref.current;
      if (el) {
        el.style.setProperty("--mx", `${mx}px`);
        el.style.setProperty("--my", `${my}px`);
        el.style.opacity = `${opacityRef.current}`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-0 pointer-events-none z-[14]"
      style={{
        background: `radial-gradient(circle ${radius}px at var(--mx, 50%) var(--my, 50%), ${color}, transparent 70%)`,
        mixBlendMode: "screen",
        opacity: 0,
        transition: "opacity 0.4s ease",
      }}
    />
  );
}
