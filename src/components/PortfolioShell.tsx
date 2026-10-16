"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Spotlight } from "@/components/Spotlight";
import { nav, profile } from "@/data/site";

type Props = {
  children: ReactNode;
};

export function PortfolioShell({ children }: Props) {
  const [active, setActive] = useState<string>(nav[0].id);

  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) setActive(visible[0].target.id);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Spotlight />
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-canvas"
      >
        Skip to Content
      </a>
      <div className="relative mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:flex lg:justify-between lg:gap-4 lg:px-24 lg:py-0">
        <Sidebar active={active} />
        <div id="content" className="pt-12 lg:w-[55%] lg:py-24">
          {children}
          <footer className="max-w-md text-sm leading-relaxed text-ink-500">
            <p>
              <a
                href={`mailto:${profile.email}`}
                className="text-ink-300 transition hover:text-accent focus-ring rounded-sm"
              >
                {profile.email}
              </a>
              {" · "}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ink-300 transition hover:text-accent focus-ring rounded-sm"
              >
                GitHub
              </a>
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
