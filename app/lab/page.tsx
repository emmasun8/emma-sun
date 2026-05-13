import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab",
  description: "Experiments in progress. Check back soon.",
};

export default function Lab() {
  return (
    <section className="px-6 md:px-10 pt-12 md:pt-20 pb-32 md:pb-40">
      <div className="mx-auto max-w-[1480px]">
        <p className="label-mono">Lab</p>
        <h1 className="serif-display mt-6 text-[14vw] md:text-[10vw] leading-[0.95] tracking-[-0.03em]">
          Experiments in
          <br />
          <span className="serif-display-soft text-cobalt">progress.</span>
        </h1>
        <p className="mt-10 text-ink/65 text-lg max-w-[44ch]">
          Check back soon.
        </p>
      </div>
    </section>
  );
}
