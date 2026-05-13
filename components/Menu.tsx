"use client";

import { SmoothLink } from "@/components/SmoothLink";

type Props = { onClose: () => void };

export function Menu({ onClose }: Props) {
  return (
    <div className="menu-bg w-full h-full min-h-screen flex flex-col">
      {/* Top chrome */}
      <div className="px-6 md:px-10 pt-5 md:pt-7 grid grid-cols-3 items-start">
        {/* Top-left slot left intentionally empty */}
        <div aria-hidden />

        <div className="flex flex-col items-center gap-1.5">
          <button
            type="button"
            onClick={onClose}
            className="chrome-mono hover:text-mute"
            aria-label="Close menu, return to landing"
          >
            Close
          </button>
          <span
            className="block w-1.5 h-1.5 rounded-full"
            style={{ background: "#2733E0" }}
            aria-hidden
          />
        </div>

        {/* Top-right slot is occupied by the emma wordmark on the home/menu view. */}
        <div aria-hidden />
      </div>

      {/* Items */}
      <div className="flex-1 px-6 md:px-10 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 md:gap-y-4 gap-x-12 w-full">
          <div className="flex flex-col gap-2 md:gap-3">
            <SmoothLink href="/about" className="menu-item">
              About
            </SmoothLink>
            <SmoothLink href="/experience" className="menu-item">
              Experience
            </SmoothLink>
            <SmoothLink href="/projects" className="menu-item">
              Projects
            </SmoothLink>
          </div>
          <div className="hidden md:block" aria-hidden />
        </div>
      </div>

      {/* Bottom chrome */}
      <div className="px-6 md:px-10 pb-5 md:pb-7 flex flex-col md:flex-row justify-between gap-2">
        <span className="chrome-mono">
          AI GTM by day, shipping side projects by night.
        </span>
        <span className="chrome-mono">San Francisco, CA</span>
      </div>
    </div>
  );
}
