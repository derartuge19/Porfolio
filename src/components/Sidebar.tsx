"use client";

import { motion } from "motion/react";
import { FileText, Mail, MapPin } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { nav, profile } from "@/data/site";

type Props = {
  active: string;
};

export function Sidebar({ active }: Props) {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[40%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-ink-50 sm:text-5xl">
            <a href="/" className="focus-ring rounded-sm">
              {profile.name}
            </a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-ink-100 sm:text-xl">
            {profile.role}
          </h2>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-ink-400">
            {profile.tagline}
          </p>
        </motion.div>

        <motion.nav
          aria-label="In-page"
          className="nav-desktop mt-12 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <ul className="flex w-max flex-col gap-1">
            {nav.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center gap-3 py-2"
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-accent"
                          : "w-8 bg-ink-500 group-hover:w-16 group-hover:bg-ink-200"
                      }`}
                    />
                    <span
                      className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-ink-50"
                          : "text-ink-400 group-hover:text-ink-200"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </div>

      <motion.div
        className="mt-8 flex flex-col gap-4 lg:mt-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
      >
        <p className="flex items-center gap-2 text-sm text-ink-400">
          <MapPin className="size-4 text-accent" aria-hidden />
          {profile.location}
        </p>
        <ul className="flex items-center gap-5" aria-label="Social">
          <li>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-400 transition hover:text-accent focus-ring rounded-sm"
              aria-label="GitHub"
            >
              <GitHubIcon className="size-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="text-ink-400 transition hover:text-accent focus-ring rounded-sm"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </li>
        </ul>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent/20 focus-ring"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-ink-700 px-4 py-2 text-sm font-medium text-ink-200 transition hover:border-ink-500 hover:text-ink-50 focus-ring"
          >
            <FileText className="size-4" aria-hidden />
            Résumé
          </a>
        </div>
      </motion.div>
    </header>
  );
}
