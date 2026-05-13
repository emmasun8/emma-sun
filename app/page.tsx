"use client";

import { useEffect, useState } from "react";
import { Menu } from "@/components/Menu";
import { CursorTrail } from "@/components/CursorTrail";
import { ReactiveGradient } from "@/components/ReactiveGradient";
import { TerminalType } from "@/components/TerminalType";

const TERMINAL_PHRASES = [
  "hi, i'm emma",
  "i do gtm for ai startups",
  "based in sf",
];

const COBALT: [number, number, number] = [39, 51, 224]; // #2733E0
const PAPER: [number, number, number] = [242, 237, 229]; // #F2EDE5

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerpRgb = (
  a: [number, number, number],
  b: [number, number, number],
  t: number,
): [number, number, number] => [
  Math.round(lerp(a[0], b[0], t)),
  Math.round(lerp(a[1], b[1], t)),
  Math.round(lerp(a[2], b[2], t)),
];
const rgb = ([r, g, b]: [number, number, number]) => `rgb(${r}, ${g}, ${b})`;
const clamp = (v: number, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v));

export default function Home() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [scroll, setScroll] = useState(0); // 0 → 1 across the first 100vh

  // Loading counter, runs once on mount.
  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + 4);
      setLoadingProgress(n);
      if (n >= 100) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, []);

  // Scroll progress, mapped to the first viewport height.
  useEffect(() => {
    const onScroll = () => {
      const max = window.innerHeight * 0.85;
      setScroll(clamp(window.scrollY / max));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = scroll;
  const bgColor = rgb(lerpRgb(COBALT, PAPER, t));

  // Big wordmark fades out faster than t advances; small one fades in after a short delay.
  const bigOpacity = clamp(1 - t * 1.6);
  const smallOpacity = clamp((t - 0.35) * 2.6);

  // Hide loading + hint as soon as user begins scrolling.
  const chromeOpacity = clamp(1 - t * 4);

  return (
    <>
      <div
        aria-hidden
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ backgroundColor: bgColor }}
      />

      {/* Cream cursor trail across the cobalt scene; fades with scroll */}
      <CursorTrail opacity={bigOpacity * 0.45} color="#F2EDE5" />

      {/* Cobalt cursor trail across the cream menu; fades in with scroll */}
      <CursorTrail opacity={smallOpacity * 0.45} color="#2733E0" />

      {/* Reactive radial-gradient hue shift, follows the cursor on cobalt */}
      <ReactiveGradient
        opacity={bigOpacity * 0.9}
        color="rgba(150, 170, 255, 0.55)"
        radius={460}
      />

      {/* BIG WORDMARK - bottom-left, types out letter-by-letter, fades on scroll */}
      <h1
        className="fixed left-5 md:left-10 bottom-20 md:bottom-24 emma-wordmark pointer-events-none z-20"
        style={{
          fontSize: "clamp(8rem, 16vw, 15rem)",
          opacity: bigOpacity,
          transform: `translateY(${t * 28}px) scale(${1 - t * 0.05})`,
          transformOrigin: "bottom left",
        }}
        aria-label="Emma Sun"
      >
        {"emma".split("").map((char, i) => (
          <span
            key={i}
            className="anim-letter"
            style={{ animationDelay: `${260 + i * 110}ms` }}
          >
            {char}
          </span>
        ))}
        <span className="anim-caret" aria-hidden />
      </h1>

      {/* SMALL WORDMARK - top-right, fades in as scroll progresses */}
      <h1
        className="fixed right-5 md:right-8 top-3 md:top-4 emma-wordmark-small pointer-events-none z-20"
        style={{
          fontSize: "clamp(2rem, 3.6vw, 3.2rem)",
          opacity: smallOpacity,
          transform: `translateY(${(1 - t) * -12}px)`,
          transformOrigin: "top right",
        }}
        aria-hidden={smallOpacity < 0.5}
      >
        emma
      </h1>

      {/* TERMINAL TYPE - top-right of cobalt scene, cycles through phrases */}
      <div
        className="fixed right-5 md:right-10 top-16 md:top-24 z-20 pointer-events-none"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "clamp(15px, 1.5vw, 20px)",
          letterSpacing: "0.02em",
          color: "#F2EDE5",
          opacity: bigOpacity,
        }}
      >
        <TerminalType phrases={TERMINAL_PHRASES} />
      </div>

      {/* (LOADING) marker - top-left of cobalt scene */}
      <p
        className="fixed top-5 left-5 md:top-7 md:left-8 z-20 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "12px",
          letterSpacing: "0.2em",
          color: "#F2EDE5",
          opacity: chromeOpacity,
        }}
        aria-live="polite"
      >
        (LOADING {loadingProgress.toString().padStart(3, "0")}%)
      </p>

      {/* Scroll hint - lower-right of cobalt scene, only after loader 100% */}
      <div
        className="fixed right-5 md:right-[7%] bottom-32 md:bottom-44 z-20 select-none pointer-events-none uppercase"
        style={{
          fontFamily: "var(--font-jetbrains-mono), monospace",
          fontSize: "10.5px",
          letterSpacing: "0.2em",
          color: "#F2EDE5",
          opacity: loadingProgress >= 100 ? clamp(chromeOpacity * 0.85) : 0,
          transition: "opacity 600ms ease",
        }}
      >
        Scroll &darr;
      </div>

      {/* SECTION 1 - cobalt scene, 100vh of scroll space */}
      <section className="relative z-10 h-screen w-full" />

      {/* SECTION 2 - menu (transparent so the fixed cream bg shows through) */}
      <section className="relative z-10">
        <Menu
          onClose={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        />
      </section>
    </>
  );
}

function TypedLine({
  text,
  startDelay = 0,
  perChar = 18,
}: {
  text: string;
  startDelay?: number;
  perChar?: number;
}) {
  return (
    <>
      {Array.from(text).map((c, i) => (
        <span
          key={i}
          className="anim-typed-char"
          style={{
            animationDelay: `${startDelay + i * perChar}ms`,
            // Preserve spaces within an inline element
            whiteSpace: c === " " ? "pre" : undefined,
          }}
        >
          {c}
        </span>
      ))}
    </>
  );
}
