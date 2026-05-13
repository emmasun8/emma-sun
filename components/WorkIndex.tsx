import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type WorkRow = {
  num: string;
  title: string;
  client: string;
  year: string;
  category: string;
  href: string;
};

export const WORK: WorkRow[] = [
  {
    num: "01",
    title: "How Orb captured Stripe Sessions traffic from outside the venue",
    client: "Fengcha + Orb",
    year: "2026",
    category: "Sponsorship",
    href: "/projects/fengcha-orb",
  },
  {
    num: "02",
    title: "Conference Outreach Playbook",
    client: "Stripe Sessions, HumanX",
    year: "2026",
    category: "Outreach",
    href: "/projects/conference-outreach",
  },
  {
    num: "03",
    title: "Voice AI legal assistant",
    client: "Stanford LAWxLLM",
    year: "2025",
    category: "Build",
    href: "/projects/lawxllm",
  },
];

export function WorkIndex({
  rows = WORK,
  showHeading = true,
}: {
  rows?: WorkRow[];
  showHeading?: boolean;
}) {
  return (
    <section className="px-6 md:px-10 py-16 md:py-24">
      <div className="mx-auto max-w-[1480px]">
        {showHeading && (
          <div className="flex items-baseline justify-between mb-10 md:mb-14 row-rule pt-8">
            <h2 className="label-mono">Selected Work, 2025 &ndash; 2026</h2>
            <span className="label-mono">{rows.length.toString().padStart(2, "0")} entries</span>
          </div>
        )}

        <ul>
          {rows.map((row, i) => (
            <li
              key={row.href}
              className={i === 0 ? "" : "row-rule"}
            >
              <Link
                href={row.href}
                className="group grid grid-cols-12 gap-4 items-baseline py-7 md:py-9 transition-colors"
              >
                <span className="col-span-2 md:col-span-1 label-mono pt-2">
                  {row.num}
                </span>

                <div className="col-span-10 md:col-span-7">
                  <h3 className="serif-display text-[2rem] md:text-[3.6rem] leading-[1.02] text-ink group-hover:text-cobalt transition-colors">
                    {row.title}
                  </h3>
                  <p className="mt-2 text-ink/65 text-sm md:text-base">
                    {row.client}
                  </p>
                </div>

                <span className="col-span-6 md:col-span-2 text-sm text-ink/55 mt-3 md:mt-0">
                  {row.category}
                </span>
                <span className="col-span-4 md:col-span-1 text-sm text-ink/55 mt-3 md:mt-0">
                  {row.year}
                </span>
                <span className="col-span-2 md:col-span-1 mt-3 md:mt-0 flex justify-end">
                  <ArrowUpRight className="w-5 h-5 text-ink/40 group-hover:text-cobalt group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="row-rule" />
      </div>
    </section>
  );
}
