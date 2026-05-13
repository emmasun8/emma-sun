import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Three case studies. Fengcha + Orb sponsorship, conference outreach playbook, voice AI legal assistant.",
};

type Project = {
  slug: string;
  label: string;
  copy: string;
  imageNote: string;
  imageBg?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "fengcha-orb",
    label: "Fengcha × Orb",
    copy: "Fengcha is a boba shop one block from Moscone. During Stripe Sessions 2026 we packaged the storefront LED as media inventory and closed Orb as the first enterprise sponsor.",
    imageNote: "Fengcha LED at night, Moscone visible",
    imageBg: "linear-gradient(135deg, #1c1c1c, #2a2a2a)",
  },
  {
    slug: "conference-outreach",
    label: "Conference Playbook",
    copy: "A repeatable conference-week outreach system, built across Stripe Sessions and HumanX. LinkedIn cold lost; Luma side events won. The playbook is a cost-ranked channel menu.",
    imageNote: "Conference badges, half-empty Stripe Sessions hall",
    imageBg: "linear-gradient(135deg, #2c3e2f, #3a503e)",
  },
  {
    slug: "lawxllm",
    label: "LAWxLLM",
    copy: "A voice-first AI legal assistant for personal-injury intake. 36 hours, two collaborators, 2nd place at Stanford LAWxLLM. The product is the structured brief; voice is the invitation.",
    imageNote: "Voice waveform on a courthouse facade",
    imageBg: "linear-gradient(135deg, #4a3520, #5e4329)",
  },
];

export default function ProjectsPage() {
  return (
    <div className="has-bottom-pill bg-paper page-enter">
      <header className="px-5 md:px-12 py-10 md:py-16">
        <p className="label-mono">Projects, 2025 &ndash; 2026</p>
        <h1 className="mt-3 text-[2.2rem] md:text-[3.4rem] leading-[1.05] tracking-[-0.02em] max-w-[28ch]">
          Three case studies. Each one a sales motion.
        </h1>
      </header>

      <div className="border-t border-edge">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.slug} variant={i % 2 === 0 ? "left" : "right"}>
            <ProjectRow project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block split-row hover:bg-paper-deep/40 transition-colors"
    >
      <div className="split-text">
        <span className="label-mono">{project.label.toUpperCase()}</span>
        <p className="mt-6 md:mt-10 split-body">{project.copy}</p>
        <span className="label-mono mt-auto pt-10 inline-flex items-center gap-1.5 group-hover:text-ink transition-colors">
          Read case study
          <ArrowRightTiny />
        </span>
      </div>
      <div
        className="split-image"
        style={{
          background:
            project.imageBg ?? "linear-gradient(135deg, #EAE5D8, #D8D2C2)",
        }}
        role="img"
        aria-label={project.imageNote}
      >
        <span className="absolute left-5 bottom-5 font-mono text-[10px] tracking-[0.2em] uppercase text-paper/55">
          IMAGE: {project.imageNote}
        </span>
      </div>
    </Link>
  );
}

function ArrowRightTiny() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    >
      <line x1="1" y1="5" x2="12" y2="5" />
      <polyline points="8,1 12,5 8,9" />
    </svg>
  );
}
