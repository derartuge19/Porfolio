import { ArrowUpRight } from "lucide-react";
import { experience } from "@/data/site";

export function Experience() {
  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="scroll-mt-16 mb-16 md:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-canvas/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-50">
          Experience
        </h2>
      </div>

      <ol className="group/list space-y-4">
        {experience.map((job) => (
          <li key={`${job.company}-${job.range}`}>
            <div className="group relative grid gap-4 rounded-lg transition motion-safe:hover:bg-ink-800/40 sm:grid-cols-8 sm:gap-8 lg:gap-4 lg:px-4 lg:py-4">
              <header
                className="z-10 mb-1 mt-1 text-xs font-semibold uppercase tracking-wide text-ink-400 sm:col-span-2"
                aria-label={job.range}
              >
                {job.range}
              </header>
              <div className="z-10 sm:col-span-6">
                <h3 className="font-medium leading-snug text-ink-50">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group/link inline-flex items-baseline gap-1 focus-ring rounded-sm"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {job.title} ·{" "}
                        <span className="inline-flex items-center">
                          {job.company}
                          <ArrowUpRight className="ml-1 size-3.5 shrink-0 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5" />
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span>
                      {job.title} · {job.company}
                    </span>
                  )}
                </h3>
                <p className="mt-1 text-sm text-ink-400">{job.location}</p>
                <ul className="mt-3 space-y-2 text-sm leading-normal text-ink-300">
                  {job.bullets.map((b) => (
                    <li key={b.slice(0, 40)}>{b}</li>
                  ))}
                </ul>
                <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t}>
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
