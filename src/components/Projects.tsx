import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons";
import { projects } from "@/data/site";

export function Projects() {
  return (
    <section
      id="projects"
      aria-label="Selected projects"
      className="scroll-mt-16 mb-16 md:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-canvas/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-50">
          Projects
        </h2>
      </div>

      <ul className="group/list space-y-10">
        {projects.map((project) => {
          const link = project.href ?? project.repo;
          return (
            <li key={project.title}>
              <div className="group relative grid gap-4 rounded-lg transition sm:grid-cols-8 sm:gap-8 lg:gap-4 lg:px-4 lg:py-3 motion-safe:hover:bg-ink-800/40">
                <div className="z-10 sm:order-2 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-ink-50">
                    {link ? (
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group/link inline-flex items-baseline gap-1 focus-ring rounded-sm"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span className="inline-flex items-center">
                          {project.title}
                          <ArrowUpRight className="ml-1 size-3.5 shrink-0 transition group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                        </span>
                      </a>
                    ) : (
                      project.title
                    )}
                    {project.badge ? (
                      <span className="ml-2 align-middle rounded-full border border-accent/25 bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        {project.badge}
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-ink-300">
                    {project.description}
                  </p>
                  {project.repo ? (
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="relative z-20 inline-flex items-center gap-1.5 text-xs text-ink-400 transition hover:text-accent focus-ring rounded-sm"
                        aria-label={`${project.title} on GitHub`}
                      >
                        <GitHubIcon className="size-3.5" />
                        Code
                      </a>
                    </div>
                  ) : null}
                  <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
                    {project.tech.map((t) => (
                      <li key={t}>
                        <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                          {t}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="sm:order-1 sm:col-span-2">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-ink-700/80 bg-ink-800/60 shadow-sm transition group-hover:border-ink-500/80">
                    <Image
                      src={project.image}
                      alt={`Illustration for ${project.title}`}
                      width={640}
                      height={400}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
