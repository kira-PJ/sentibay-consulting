import Link from "next/link";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2);
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portfolio</span>
              <h2 className="text-4xl font-bold text-primary mt-2 mb-2">AWS Project Portfolio</h2>
              <p className="text-muted">Real AWS builds with video walkthroughs and code.</p>
            </div>
            <Link href="/projects" className="text-accent text-sm font-medium hover:underline hidden md:block">
              View all →
            </Link>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 gap-8">
          {featured.map((p, i) => (
            <ScrollReveal key={p.slug} delay={i * 120}>
              <ProjectCard project={p} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
