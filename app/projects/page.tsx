import { projects } from "@/lib/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-14">
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">Portfolio</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-4">AWS Project Portfolio</h1>
        <p className="text-muted text-lg max-w-2xl">
          Real-world AWS builds with architecture write-ups, video walkthroughs, and code.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}
