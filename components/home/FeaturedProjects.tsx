import Link from "next/link";
import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function FeaturedProjects() {
  const featured = projects.slice(0, 2);
  return (
    <section className="relative py-24 px-6">
      <div className="absolute inset-0 bg-[#050823]/80" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Portfolio</span>
              <h2 className="text-4xl font-bold text-white mt-2 mb-2">AWS Project Portfolio</h2>
              <p className="text-blue-200/70">Real AWS builds with video walkthroughs and code.</p>
            </div>
            <Link href="/projects" className="text-blue-400 text-sm font-medium hover:text-white transition-colors hidden md:block">
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
