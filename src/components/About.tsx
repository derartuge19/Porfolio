import { about } from "@/data/site";

export function About() {
  return (
    <section
      id="about"
      aria-label="About me"
      className="scroll-mt-16 mb-16 md:mb-24 lg:scroll-mt-24"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-canvas/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-ink-50">
          About
        </h2>
      </div>

      <div className="space-y-4 text-base leading-relaxed text-ink-300">
        {about.paragraphs.map((p) => (
          <p key={p.slice(0, 32)}>{p}</p>
        ))}
      </div>
    </section>
  );
}
