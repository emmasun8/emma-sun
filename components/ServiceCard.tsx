import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Tier = { tier: string; price: string; duration: string };

export function ServiceCard({
  num,
  title,
  forWho,
  bullets,
  past,
  tiers,
  status,
  cta,
  ctaHref,
}: {
  num: string;
  title: string;
  forWho: string;
  bullets: string[];
  past?: string;
  tiers?: Tier[];
  status?: string;
  cta: string;
  ctaHref: string;
}) {
  return (
    <section className="row-rule pt-10 md:pt-16 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      <div className="md:col-span-4 md:sticky md:top-24 md:self-start">
        <p className="label-mono">Service {num}</p>
        <h2 className="serif-display text-[2.4rem] md:text-[3.4rem] leading-[1.02] mt-4">
          {title}
        </h2>
        {past ? (
          <p className="text-sm text-ink/65 mt-6">
            <span className="label-mono mr-1.5 inline-block">Past</span>
            {past}
          </p>
        ) : null}
      </div>

      <div className="md:col-span-8">
        <p className="text-ink text-lg md:text-xl leading-snug max-w-[56ch]">
          <span className="label-mono mr-2">For</span>
          {forWho}
        </p>

        <ul className="mt-8 md:mt-12 grid gap-3.5">
          {bullets.map((b, i) => (
            <li
              key={i}
              className="flex gap-3 text-ink/85 leading-relaxed text-[15px] md:text-base"
            >
              <span className="font-mono text-mute select-none mt-1.5 text-[10px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {tiers ? (
          <div className="mt-10 md:mt-14 row-rule">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left">
                  <th className="label-mono py-3 font-medium">Tier</th>
                  <th className="label-mono py-3 font-medium">Price</th>
                  <th className="label-mono py-3 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.tier} className="border-t border-cobalt/15">
                    <td className="py-4 text-ink">{t.tier}</td>
                    <td className="py-4 text-ink">{t.price}</td>
                    <td className="py-4 text-ink/65">{t.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}

        {status ? (
          <p className="mt-8 text-sm text-cobalt">{status}</p>
        ) : null}

        <div className="mt-10">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-full bg-ink text-paper px-6 py-3.5 text-sm font-medium hover:bg-cobalt transition-colors"
          >
            {cta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
