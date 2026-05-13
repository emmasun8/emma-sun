"use client";

import { useRouter } from "next/navigation";
import { MouseEvent, ReactNode, AnchorHTMLAttributes } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function SmoothLink({ href, children, className, onClick, ...rest }: Props) {
  const router = useRouter();

  const handle = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;

    e.preventDefault();

    if (typeof document !== "undefined" && "startViewTransition" in document) {
      document.startViewTransition(() => router.push(href));
    } else {
      router.push(href);
    }
  };

  return (
    <a href={href} onClick={handle} className={className} {...rest}>
      {children}
    </a>
  );
}
