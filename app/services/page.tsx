import { ServiceCard } from "@/components/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three ways to work together: conference sponsorship at Fengcha, AI startup GTM, conference outreach playbook.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="px-6 md:px-10 pt-12 md:pt-20 pb-8 md:pb-16">
        <div className="mx-auto max-w-[1480px]">
          <p className="label-mono">Services</p>
          <h1 className="serif-display mt-6 text-[12vw] md:text-[8.5vw] leading-[0.95] tracking-[-0.025em] max-w-[18ch]">
            Three ways to{" "}
            <span className="serif-display-soft text-cobalt">
              work together.
            </span>
          </h1>
          <p className="mt-8 max-w-[44ch] text-ink/75 text-lg">
            Pick the one that matches what you need this quarter. All three are
            scoped, priced, and tested on real motion.
          </p>
        </div>
      </section>

      <div className="px-6 md:px-10 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1480px]">
          <ServiceCard
            num="01"
            title="Conference Week Sponsorship"
            forWho="AI/SaaS exhibitors who want presence beyond the booth."
            bullets={[
              "LED window placement, three tiers",
              "In-store sampling and branded cups during your conference week",
              "Co-hosted side event option",
              "Foot traffic data after the week",
            ]}
            past="Orb, Stripe Sessions 2026"
            cta="Inquire about sponsorship"
            ctaHref="/contact?need=sponsorship"
          />

          <ServiceCard
            num="02"
            title="AI Startup GTM"
            forWho="Pre-seed and seed founders who need a real GTM motion before the next raise."
            bullets={[
              'A sharp answer to "who do we sell to first" backed by 5 customer discovery calls',
              "A messaging doc (positioning, 3 hooks, objection map) tested on real prospects",
              "2 outreach sequences live, with tracking",
              "A working pipeline view",
              "First 20-30 booked discovery calls (target)",
              "A 90-day playbook to run it without me",
            ]}
            tiers={[
              { tier: "Audit", price: "$1,500", duration: "1 week" },
              { tier: "Sprint", price: "$6,000", duration: "4 weeks" },
              { tier: "Fractional", price: "$4,000/mo", duration: "2-month min" },
            ]}
            status="Currently accepting first 3 clients. Founder discount available."
            cta="Start with an audit"
            ctaHref="/contact?need=gtm"
          />

          <ServiceCard
            num="03"
            title="Conference Outreach Playbook"
            forWho="SaaS sales teams attending Stripe Sessions, RSAC, HumanX."
            bullets={[
              "Pre-event ICP list",
              "Multi-channel sequence (cold, warm, side event)",
              "Day-of execution support",
              "Post-event follow-up cadence",
            ]}
            past="Fengcha (my own playbook)"
            cta="Inquire for next conference week"
            ctaHref="/contact?need=playbook"
          />
        </div>
      </div>
    </>
  );
}
