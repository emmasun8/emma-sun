import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

type ResultProps = { value: string; context: string };

export function CaseStudyLayout({
  num,
  title,
  subtitle,
  teaser,
  meta,
  heroImage,
  children,
  result,
  artifact,
  prev,
  next,
}: {
  num: string;
  title: string;
  subtitle: string;
  teaser: string;
  meta?: { label: string; value: string }[];
  heroImage?: { ratio?: string; alt: string };
  children?: ReactNode;
  result?: ResultProps;
  artifact?: { ratio?: string; alt: string };
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
}) {
  return (
    <article>
      <header className="px-6 md:px-10 pt-10 md:pt-16 pb-10 md:pb-16">
        <div className="mx-auto max-w-[1480px]">
          <Link
            href="/projects"
            className="label-mono inline-flex items-center gap-1.5 mb-10 hover:text-ink"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All projects
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <p className="label-mono md:col-span-12">
              Case Study {num} &middot; {subtitle}
            </p>
            <h1 className="serif-display md:col-span-12 text-[2.4rem] md:text-[5rem] leading-[0.98] tracking-[-0.025em] max-w-[22ch]">
              {title}
            </h1>
            <p className="md:col-span-7 text-lg md:text-xl text-ink/75 leading-snug max-w-[56ch] mt-4 md:mt-8">
              {teaser}
            </p>
          </div>

          {meta ? (
            <dl className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-8 row-rule pt-6">
              {meta.map((m) => (
                <div key={m.label}>
                  <dt className="label-mono">{m.label}</dt>
                  <dd className="mt-1.5 text-sm md:text-base text-ink">
                    {m.value}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </header>

      {heroImage ? (
        <div className="px-6 md:px-10">
          <div className="mx-auto max-w-[1480px]">
            <ImagePlaceholder
              ratio={heroImage.ratio ?? "16/8"}
              alt={heroImage.alt}
            />
          </div>
        </div>
      ) : null}

      <div className="px-6 md:px-10 mt-12 md:mt-20">
        <div className="mx-auto max-w-[720px]">{children}</div>
      </div>

      {result ? (
        <section className="px-6 md:px-10 mt-12 md:mt-20">
          <div className="mx-auto max-w-[1480px] row-rule pt-12 md:pt-16">
            <p className="label-mono mb-6">Result</p>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-baseline">
              <span className="serif-display md:col-span-7 text-[4.5rem] md:text-[8rem] leading-[0.95] text-ink">
                {result.value}
              </span>
              <p className="md:col-span-5 text-ink/75 text-base md:text-lg leading-snug max-w-[44ch]">
                {result.context}
              </p>
            </div>
          </div>
        </section>
      ) : null}

      {artifact ? (
        <section className="px-6 md:px-10 mt-16 md:mt-24">
          <div className="mx-auto max-w-[1480px]">
            <p className="label-mono mb-4">Artifact</p>
            <ImagePlaceholder
              ratio={artifact.ratio ?? "16/9"}
              alt={artifact.alt}
            />
          </div>
        </section>
      ) : null}

      <nav className="mt-20 md:mt-28 row-rule px-6 md:px-10 py-8">
        <div className="mx-auto max-w-[1480px] flex justify-between items-center text-sm">
          {prev ? (
            <Link
              href={prev.href}
              className="label-mono inline-flex items-center gap-1.5 hover:text-ink"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> {prev.label}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next.href}
              className="label-mono inline-flex items-center gap-1.5 hover:text-ink"
            >
              {next.label} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          ) : (
            <span />
          )}
        </div>
      </nav>
    </article>
  );
}

export function CSBlock({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="py-8 md:py-12 row-rule">
      <p className="label-mono mb-4 md:mb-5">{label}</p>
      <div className="text-ink/85 text-[17px] md:text-[18px] leading-[1.65] [&_p]:my-3 [&_ul]:list-none [&_ul]:p-0 [&_li]:my-2.5">
        {children}
      </div>
    </section>
  );
}

export function ImagePlaceholder({
  ratio,
  alt,
}: {
  ratio: string;
  alt: string;
}) {
  return (
    <div
      className="bg-stone-200 rounded-md flex items-center justify-center text-ink/30"
      style={{ aspectRatio: ratio.replace("/", " / ") }}
      role="img"
      aria-label={alt}
    >
      <span className="label-mono px-6 text-center">IMAGE: {alt}</span>
    </div>
  );
}
