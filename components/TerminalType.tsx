"use client";

import { useEffect, useState } from "react";

type Props = {
  phrases: string[];
  /** ms per character while typing */
  typeSpeed?: number;
  /** ms per character while deleting */
  deleteSpeed?: number;
  /** pause at the end of a fully-typed phrase, ms */
  holdMs?: number;
};

export function TerminalType({
  phrases,
  typeSpeed = 55,
  deleteSpeed = 28,
  holdMs = 1500,
}: Props) {
  const [text, setText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (phrases.length === 0) return;
    const current = phrases[phraseIdx % phrases.length];

    if (!isDeleting && text === current) {
      // Fully typed - hold, then start deleting.
      const id = setTimeout(() => setIsDeleting(true), holdMs);
      return () => clearTimeout(id);
    }
    if (isDeleting && text.length === 0) {
      setIsDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
      return;
    }

    const speed = isDeleting ? deleteSpeed : typeSpeed;
    const id = setTimeout(() => {
      if (isDeleting) {
        setText(current.slice(0, text.length - 1));
      } else {
        setText(current.slice(0, text.length + 1));
      }
    }, speed);
    return () => clearTimeout(id);
  }, [text, isDeleting, phraseIdx, phrases, typeSpeed, deleteSpeed, holdMs]);

  return (
    <span className="inline-flex items-baseline whitespace-pre">
      <span className="opacity-60 mr-2">&gt;</span>
      <span>{text}</span>
      <span className="terminal-caret" aria-hidden>
        _
      </span>
    </span>
  );
}
