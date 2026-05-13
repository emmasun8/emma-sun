import Link from "next/link";

export function Footer() {
  // Floating bottom pill (visible on every page).
  return (
    <div className="bottom-pill" aria-label="Quick contact">
      <Link href="/" className="mark" aria-label="Emma home">
        e<span className="not-italic" style={{ fontStyle: "normal" }}>.</span>
      </Link>
      <a className="cta" href="mailto:ruomengsyn@gmail.com">
        Get in touch
        <ArrowRightTiny />
      </a>
    </div>
  );
}

function ArrowRightTiny() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <line x1="1" y1="5" x2="12" y2="5" />
      <polyline points="8,1 12,5 8,9" />
    </svg>
  );
}
