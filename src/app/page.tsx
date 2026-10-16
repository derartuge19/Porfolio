import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { PortfolioShell } from "@/components/PortfolioShell";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <PortfolioShell>
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </PortfolioShell>
  );
}
