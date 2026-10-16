import { skillGroups } from "@/data/site";

export function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="scroll-mt-16 mb-16 md:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-canvas/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-50">
          Skills
        </h2>
      </div>

      <p className="mb-8 max-w-xl text-base leading-relaxed text-ink-300">
        Full-stack capable, backend-heavy. Strongest on APIs and systems —
        Docker and DevOps habits, Redis caching, rate limiting, reverse
        proxies, Nginx, and API gateways — plus the RAG and data work I ship
        day to day.
      </p>

      <ul className="space-y-8">
        {skillGroups.map((group) => (
          <li key={group.title}>
            <h3 className="text-sm font-semibold text-ink-50">{group.title}</h3>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label={group.title}>
              {group.items.map((item) => (
                <li key={item}>
                  <span
                    className={
                      group.title.startsWith("System")
                        ? "rounded-full border border-accent/25 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                        : "rounded-full bg-ink-800/80 px-3 py-1 text-xs font-medium text-ink-200"
                    }
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
