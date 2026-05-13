"use client";
import { usePathname } from "next/navigation";
import { SmoothLink } from "@/components/SmoothLink";

const links = [
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
];

export function Nav() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <header className="relative z-30 border-b border-edge/80 bg-paper">
      <div className="mx-auto max-w-[1480px] px-5 md:px-8 py-4 flex items-center justify-between">
        <SmoothLink
          href="/"
          className="font-serif italic font-semibold text-[1.4rem] leading-none text-cobalt hover:text-ink tracking-tight"
        >
          emma
        </SmoothLink>
        <nav className="flex items-center gap-6 md:gap-9 font-mono text-[11px] tracking-[0.18em] uppercase">
          {links.map((l) => {
            const active = pathname?.startsWith(l.href);
            return (
              <SmoothLink
                key={l.href}
                href={l.href}
                className={`hover:text-ink ${active ? "text-ink" : "text-ink/55"}`}
              >
                {l.label}
              </SmoothLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
