import { Window } from "@/components/Window";

export type Skill = { label: string; rating?: number };

// Mix of operator skills + playful self-aware entries (à la "Long stories... short").
export const SKILLS: Skill[] = [
  { label: "GTM from zero" },
  { label: "Sponsorship motions" },
  { label: "Conference week plays" },
  { label: "Cold copy" },
  { label: "Data to story" },
  { label: "Long stories... short" },
  { label: "Vibing with AI" },
  { label: "Positive energy" },
];

function FiveStars({ count = 5 }: { count?: number }) {
  return (
    <span className="inline-flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarGlyph key={i} filled={i < count} />
      ))}
    </span>
  );
}

function StarGlyph({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill={filled ? "#2733E0" : "none"}
      stroke="#2733E0"
      strokeWidth="1.2"
      strokeLinejoin="round"
    >
      <polygon points="8,1.5 10.1,5.9 14.9,6.6 11.4,9.9 12.3,14.6 8,12.3 3.7,14.6 4.6,9.9 1.1,6.6 5.9,5.9" />
    </svg>
  );
}

export function SkillsList({
  skills = SKILLS,
  title = "Skillz · All",
}: {
  skills?: Skill[];
  title?: string;
}) {
  return (
    <Window title={title}>
      <div className="bg-white px-4 py-1">
        <ul>
          {skills.map((s, i) => (
            <li
              key={s.label}
              className={`flex items-center justify-between py-3.5 ${
                i === skills.length - 1 ? "" : "border-b border-cobalt/15"
              }`}
            >
              <span className="font-mono text-[11.5px] tracking-[0.18em] uppercase text-cobalt font-medium">
                {s.label}
              </span>
              <FiveStars count={s.rating ?? 5} />
            </li>
          ))}
        </ul>
      </div>
    </Window>
  );
}

export function SkillsMarquee({
  skills = SKILLS,
}: {
  skills?: Skill[];
}) {
  // Duplicate the list so the marquee can loop seamlessly.
  const doubled = [...skills, ...skills];
  return (
    <Window>
      <div className="bg-white overflow-hidden whitespace-nowrap py-3.5 px-2">
        <div
          className="inline-flex items-center gap-7 animate-marquee"
          aria-hidden
        >
          {doubled.map((s, i) => (
            <span key={i} className="inline-flex items-center gap-3.5">
              <span
                className="text-cobalt"
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontSize: "1.45rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {s.label}
              </span>
              <FiveStars count={s.rating ?? 5} />
              <span className="text-cobalt/50 text-[1.4rem] leading-none">
                &middot;
              </span>
            </span>
          ))}
        </div>
        <span className="sr-only">
          {skills.map((s) => s.label).join(", ")}
        </span>
      </div>
    </Window>
  );
}
