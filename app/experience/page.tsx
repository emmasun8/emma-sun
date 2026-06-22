import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Six roles. Three+ years of data infrastructure, pipelines, and models across SaaS, logistics, e-commerce, and SF marketing.",
};

type Role = {
  years: string;
  title: string;
  company: string;
  location: string;
  detail: string;
};

const ROLES: Role[] = [
  {
    years: "Apr 2026 - Present",
    title: "GTM & Sales",
    company: "Miranda AI (Antler Residency)",
    location: "San Francisco, CA",
    detail:
      "Built outbound pipeline and structured lead-tracking workflows that opened visibility into conversion funnel and sales performance. Executed multi-channel GTM outreach, ran daily prospecting and engagement tracking, and worked with the founders to refine messaging and positioning against real customer-response data.",
  },
  {
    years: "Feb 2026 - Present",
    title: "Data Marketing Manager (Part-Time)",
    company: "FengCha",
    location: "San Francisco, CA",
    detail:
      "Built a lead-tracking dataset capturing 50+ weekly outreach touchpoints for funnel analysis and quarterly revenue reporting. Engagement analytics across 4 platforms (Instagram, TikTok, LinkedIn, X) over 100+ monthly posts, plus a tracking framework for 12+ annual in-store events and citywide activations.",
  },
  {
    years: "Oct 2025 - Present",
    title: "Data & Growth Analyst",
    company: "Foodle",
    location: "San Francisco, CA",
    detail:
      "End-to-end marketplace analytics framework using the AARRR model. 12+ core KPIs (activation rate, 7-day retention, review-to-visit conversion, LTV/CAC), CAC-sensitivity simulation across three monetization scenarios, and 8 prioritized A/B tests on onboarding, geo-ranking, and creator engagement before MVP.",
  },
  {
    years: "Aug 2024 - Jun 2025",
    title: "Data Analyst (Practicum)",
    company: "The Best Notary",
    location: "San Francisco, CA",
    detail:
      "Data pipelines, models, and ETL across a 16-state dataset for operational analytics. Built predictive compliance models in Python to flag underperforming notary firms, lifting SLA adherence 25%. Slack-integrated multi-state reporting cut manual lookup time 85%.",
  },
  {
    years: "Apr 2024 - Jul 2024",
    title: "Business Analyst Intern",
    company: "WMF",
    location: "Shanghai, China",
    detail:
      "Risk and pricing assessments via regression and cohort analysis lifted campaign ROI 15%. Governance and compliance review across 2M+ transaction records. Channel-mix and pricing optimization cut CAC 12%. Real-time Power BI / Tableau dashboards shortened reporting cycles 40%.",
  },
  {
    years: "Jun 2023 - Apr 2024",
    title: "Operations Analyst",
    company: "Yiming E-Commerce",
    location: "Shanghai, China",
    detail:
      "Influencer and campaign analytics drove 12% MoM user acquisition growth. Streamlined onboarding and scheduling lifted host retention 18%. Weekly dashboards delivered insights that improved campaign ROI 10%.",
  },
  {
    years: "Jun 2022 - Dec 2022",
    title: "Consultant Intern",
    company: "Yingfan Digital",
    location: "Shanghai, China",
    detail:
      "SQL pipelines for near real-time dashboards covering 5K+ daily e-commerce transactions, lifting reporting speed 40%. GMV-growth and pricing-elasticity analysis surfaced $1.2M in untapped revenue. Python imputation workflows raised dataset completeness 25%.",
  },
];

const EDU = [
  {
    years: "Aug 2024 - Aug 2025",
    title: "M.S. Business Analytics",
    school:
      "UC Davis Graduate School of Management - MSBA Fellowship Scholar",
    location: "San Francisco, CA",
  },
  {
    years: "Sep 2019 - Jun 2023",
    title: "B. Econ, Finance",
    school: "Shanghai Sanda University",
    location: "Shanghai, China",
  },
];

const CERTS = [
  "Gen AI Leader · Google",
  "Professional ML Engineer · Google",
  "Building Agentic AI · NVIDIA",
];

const SKILLS = [
  "SQL",
  "Python",
  "Snowflake",
  "Data Modeling",
  "ETL",
  "Tableau",
  "Power BI",
  "AWS",
  "GCP",
  "Predictive Modeling",
];

export default function ExperiencePage() {
  return (
    <div className="bg-paper page-enter">
      <header className="px-5 md:px-12 pt-10 md:pt-16 pb-10 md:pb-14">
        <p className="label-mono">Experience</p>
        <h1 className="heavy-display mt-5 text-[clamp(2.4rem,7vw,5.4rem)] max-w-[18ch]">
          Six roles,
          <br />
          <span className="heavy-display-cobalt">one through-line.</span>
        </h1>
        <p className="mt-7 max-w-[62ch] text-[1rem] md:text-[1.1rem] text-ink/75 leading-snug">
          Three+ years across data infrastructure, pipelines, and models for
          SaaS, logistics, and e-commerce. SQL, Python, Snowflake, Tableau,
          Power BI - plus the dashboards and forecasts that make decisions
          move.
        </p>
      </header>

      <section className="border-t border-edge">
        {ROLES.map((r, i) => (
          <Reveal
            key={`${r.company}-${r.years}`}
            variant={i % 2 === 0 ? "left" : "right"}
          >
            <RoleRow role={r} />
          </Reveal>
        ))}
      </section>

      <section className="px-5 md:px-12 py-12 md:py-20 border-t border-edge grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <Reveal variant="left" className="md:col-span-7">
          <div>
            <p className="label-mono mb-5">Education</p>
            <ul>
              {EDU.map((e) => (
                <li
                  key={e.school}
                  className="border-t border-edge py-5 first:border-t-0 first:pt-0"
                >
                  <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
                    <span className="label-mono min-w-[170px]">
                      {e.years}
                    </span>
                    <span className="heavy-display text-[1.4rem] md:text-[1.8rem]">
                      {e.title}
                    </span>
                  </div>
                  <p className="mt-1 text-ink/70 text-[0.95rem]">
                    {e.school}
                  </p>
                  <p className="mt-0.5 text-mute text-[0.82rem]">
                    {e.location}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal variant="right" className="md:col-span-5 md:col-start-8">
          <div className="grid grid-cols-1 gap-9">
            <div>
              <p className="label-mono mb-5">Certifications</p>
              <ul className="space-y-2.5">
                {CERTS.map((c) => (
                  <li
                    key={c}
                    className="text-ink/85 text-[0.98rem] leading-snug"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono mb-5">Core skills</p>
              <ul className="flex flex-wrap gap-x-2 gap-y-2">
                {SKILLS.map((s) => (
                  <li
                    key={s}
                    className="text-[0.86rem] text-ink/85 border border-cobalt/30 rounded-full px-3 py-1"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function RoleRow({ role }: { role: Role }) {
  return (
    <article className="exp-row px-5 md:px-12 py-10 md:py-14 border-b border-edge last:border-b-0 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
      <div className="md:col-span-7">
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
          <span className="label-mono">{role.years}</span>
          <span className="label-mono text-mute/60">·</span>
          <span className="label-mono">{role.location}</span>
        </div>
        <h2 className="exp-company">{role.company}</h2>
        <p className="mt-3 text-ink/85 text-[1rem] md:text-[1.05rem]">
          {role.title}
        </p>
      </div>

      <div className="md:col-span-5 md:pt-3 self-end">
        <p className="text-ink/80 text-[0.98rem] md:text-[1rem] leading-[1.55] max-w-[52ch]">
          {role.detail}
        </p>
      </div>
    </article>
  );
}
