import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "GTM hire who can read a P&L. Analyst who can write a landing page. Emma Sun, SF.",
};

export default function About() {
  return (
    <div className="bg-paper page-enter min-h-[calc(100vh-65px)] flex flex-col">
      <header className="px-5 md:px-12 pt-8 md:pt-10">
        <p className="label-mono">About</p>
        <h1 className="mt-3 text-[1.8rem] md:text-[2.6rem] leading-[1.05] tracking-[-0.02em] max-w-[22ch]">
          GTM for{" "}
          <span className="font-serif italic font-medium text-cobalt">
            AI startups.
          </span>
        </h1>
      </header>

      <section className="flex-1 px-5 md:px-12 py-6 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="md:col-span-4">
          <Image
            src="/images/portrait.jpg"
            alt="Emma Sun, portrait"
            width={800}
            height={1200}
            priority
            sizes="(max-width: 768px) 70vw, 360px"
            className="block w-full max-w-[260px] md:max-w-[360px] h-auto rounded-[2px]"
          />
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-3 md:space-y-4 text-[1rem] md:text-[1.08rem] leading-[1.55] text-ink/90 max-w-[62ch]">
          <p>
            I run go-to-market and the analytics behind it &mdash; finding
            your buyers, writing the message, building the funnel, and reading
            the numbers that show whether it worked.
          </p>
          <p>
            <span className="label-mono mr-2 align-middle">Today</span>
            GTM &amp; Sales at Miranda AI in the Antler residency. Marketing
            at Fengcha, the boba shop one block from Moscone. Growth analytics
            for a few pre-launch AI startups around SF.
          </p>
          <p>
            Three years in finance and data analytics before that, across
            Shanghai and SF. Which is where I learned that most &ldquo;marketing
            problems&rdquo; are math problems with worse handwriting.
          </p>
          <p>
            <span className="label-mono mr-2 align-middle">Receipts</span>
            2nd at the Stanford LAWxLLM Hackathon. PubMed AI agent demoed at
            AWS Startup Loft. MSBA Fellowship Scholar at UC Davis. GenAI certs
            from Google and NVIDIA.
          </p>
          <p>
            If you&rsquo;re early, building something good, and need someone
            who can find your buyers, write your message, and ship your
            funnel - send me a note.
          </p>

          <div className="mt-6 pt-4 border-t border-edge flex flex-wrap gap-x-7 gap-y-2 text-[0.92rem]">
            <a
              href="mailto:ruomengsyn@gmail.com"
              className="inline-flex items-center gap-1.5 text-ink hover:text-cobalt"
            >
              ruomengsyn@gmail.com
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ruomengsun/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-1.5 text-ink hover:text-cobalt"
            >
              LinkedIn
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
