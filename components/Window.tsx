import { ReactNode } from "react";

export function Window({
  children,
  className = "",
  style,
  withToggle = false,
  title,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  withToggle?: boolean;
  title?: string;
}) {
  if (title) {
    return (
      <div className={`win ${className}`} style={style}>
        <div className="win-header-titled">
          <span className="title">{title}</span>
          <span className="win-x" aria-hidden>
            <CloseGlyph />
          </span>
        </div>
        <div className="relative">{children}</div>
      </div>
    );
  }
  return (
    <div className={`win ${className}`} style={style}>
      <div className={`win-header ${withToggle ? "with-toggle" : ""}`}>
        {withToggle ? <span className="win-toggle" aria-hidden /> : null}
        <span className="win-x" aria-hidden>
          <CloseGlyph />
        </span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

function CloseGlyph() {
  return (
    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <line x1="1" y1="1" x2="6" y2="6" />
      <line x1="6" y1="1" x2="1" y2="6" />
    </svg>
  );
}

/* ----------- Decorative components ----------- */

export function Signature() {
  return (
    <svg viewBox="0 0 110 30" width="100%" height="100%" fill="none" stroke="#2733E0" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" preserveAspectRatio="xMidYMid meet">
      <path d="M 4 22 C 10 6, 18 6, 22 16 C 26 26, 33 28, 38 18 C 42 8, 48 6, 52 18 L 56 14 L 60 22 L 66 12 L 72 22 C 78 16, 84 12, 90 18 C 95 23, 100 18, 104 14" />
    </svg>
  );
}

export function PixelHeart({ size = 64 }: { size?: number }) {
  const grid = [
    ".##...##.",
    "#########",
    "#########",
    "#########",
    ".#######.",
    "..#####..",
    "...###...",
    "....#....",
  ];
  const w = grid[0].length;
  const h = grid.length;
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      width={size}
      height={(size * h) / w}
      fill="#2733E0"
      shapeRendering="crispEdges"
    >
      {grid.flatMap((row, y) =>
        row.split("").map((c, x) =>
          c === "#" ? (
            <rect key={`${x}-${y}`} x={x + 0.05} y={y + 0.05} width={0.9} height={0.9} />
          ) : null,
        ),
      )}
    </svg>
  );
}

export function FlipPhone({ size = 36 }: { size?: number }) {
  return (
    <svg viewBox="0 0 24 56" width={size} height={size * (56 / 24)} fill="#2733E0">
      {/* lower body */}
      <rect x="0" y="20" width="24" height="36" rx="2.5" />
      {/* upper hinge body */}
      <rect x="2" y="0" width="20" height="22" rx="2.5" />
      {/* screen */}
      <rect x="5" y="4" width="14" height="11" fill="#F2EEE5" />
      {/* tiny digits */}
      <rect x="14" y="6" width="3" height="0.8" fill="#2733E0" />
      <rect x="14" y="8" width="2.2" height="0.8" fill="#2733E0" />
      {/* keypad dots */}
      {[0, 1, 2].map((r) =>
        [0, 1, 2].map((c) => (
          <rect
            key={`${r}-${c}`}
            x={4 + c * 5.5}
            y={26 + r * 6}
            width={3}
            height={3}
            rx={0.5}
            fill="#F2EEE5"
          />
        )),
      )}
      <rect x="9.5" y="44" width="5" height="1.5" fill="#F2EEE5" />
    </svg>
  );
}

export function FolderIcon({ size = 40 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 26" width={size} height={(size * 26) / 32} fill="none" stroke="#2733E0" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M 1 5 L 1 24 L 31 24 L 31 8 L 14 8 L 11 5 Z" />
    </svg>
  );
}
