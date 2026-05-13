import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me what you're building. I reply within 24 hours.",
};

export default function Contact() {
  return (
    <>
      <section className="px-6 md:px-10 pt-12 md:pt-20 pb-12 md:pb-16">
        <div className="mx-auto max-w-[1480px]">
          <p className="label-mono">Contact</p>
          <h1 className="serif-display mt-6 text-[12vw] md:text-[8.5vw] leading-[0.95] tracking-[-0.025em] max-w-[20ch]">
            Tell me what you&rsquo;re{" "}
            <span className="serif-display-soft text-cobalt">building.</span>
          </h1>
          <p className="mt-8 text-ink/75 text-lg">I reply within 24 hours.</p>
        </div>
      </section>

      <section className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1480px] grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7">
            <p className="label-mono mb-4">The form</p>

            {/*
              TODO: Replace this placeholder with the real Tally embed.
              Form fields to configure in Tally:
                - Name (short text)
                - Company (short text)
                - Email (email)
                - What you need (dropdown):
                    * Sponsor at Fengcha
                    * AI Startup GTM
                    * Conference Outreach Playbook
                    * Other
                - Timeline (dropdown):
                    * This month
                    * Next quarter
                    * Exploring
                - Tell me more (long text)
              Embed code looks like:
              <iframe
                src="https://tally.so/embed/YOUR_FORM_ID?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600"
                frameBorder="0"
                title="Contact Emma"
                loading="lazy"
              />
            */}
            <div
              className="bg-stone-200/60 rounded-md flex flex-col items-center justify-center text-ink/40 p-12"
              style={{ minHeight: "520px" }}
              role="img"
              aria-label="Tally form embed placeholder"
            >
              <span className="label-mono">Tally form embed</span>
              <p className="mt-3 text-sm text-mute max-w-[36ch] text-center">
                Drop your Tally embed iframe here. Field map is in the page
                source.
              </p>
            </div>
          </div>

          <aside className="md:col-span-5 md:col-start-8 space-y-10">
            <div>
              <p className="label-mono mb-3">Or, more direct</p>
              <a
                href="mailto:ruomengsyn@gmail.com"
                className="serif-display text-[1.8rem] md:text-[2.4rem] leading-[1.05] hover:text-cobalt inline-flex items-baseline gap-2"
              >
                ruomengsyn@gmail.com
                <ArrowUpRight className="w-5 h-5 self-center stroke-[1.25]" />
              </a>
            </div>

            <div>
              <p className="label-mono mb-3">Or, book a 20-min fit call</p>
              {/*
                TODO: Replace with real Cal.com inline embed.
                Options:
                (a) Inline iframe from cal.com/YOUR-USERNAME?embed=true
                (b) Or use @calcom/embed-react:
                    npm install @calcom/embed-react
                    import Cal from "@calcom/embed-react"
                    <Cal calLink="emma-sun/intro" />
              */}
              <div
                className="bg-stone-200/60 rounded-md flex items-center justify-center text-ink/40"
                style={{ minHeight: "200px" }}
                role="img"
                aria-label="Cal.com embed placeholder"
              >
                <span className="label-mono">Cal.com inline embed</span>
              </div>
            </div>

            <div className="row-rule pt-6 text-sm text-ink/65 leading-relaxed">
              Best for: GTM roles, sponsorship inquiries, AI-product
              collaborations, or someone in SF who wants to compare notes on
              building a personal-injury motion.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
