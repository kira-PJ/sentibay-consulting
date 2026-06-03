import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import { ExternalLink, Github, Play, Youtube, Clock } from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">

      {/* AWS service tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.awsServices.map((s) => (
          <span key={s} className="bg-accent-light text-accent text-xs font-medium px-3 py-1 rounded-full">
            {s}
          </span>
        ))}
      </div>

      <h1 className="text-4xl font-bold text-primary mb-4">{project.title}</h1>
      <p className="text-muted text-lg mb-8 leading-relaxed">{project.summary}</p>

      {/* Links */}
      <div className="flex flex-wrap gap-4 mb-12">
        {project.playlistUrl && (
          <a href={project.playlistUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors">
            <Youtube size={15} /> Watch the Full Series
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-200 text-muted text-sm font-medium px-5 py-2.5 rounded-xl hover:border-accent hover:text-accent transition-colors">
            <Github size={15} /> View on GitHub
          </a>
        )}
        {project.youtubeUrl && !project.playlistUrl && (
          <a href={project.youtubeUrl} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-red-700 transition-colors">
            <Youtube size={15} /> Watch on YouTube
          </a>
        )}
      </div>

      {/* Architecture image */}
      {project.architectureImg && (
        <div className="mb-12 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
          <img src={project.architectureImg} alt="Architecture diagram" className="w-full" />
        </div>
      )}

      {/* Write-up */}
      <div className="prose max-w-none mb-14">
        <p className="text-muted leading-relaxed text-lg">{project.content}</p>
      </div>

      {/* Video list */}
      {project.videos && project.videos.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Series Videos</h2>
          <div className="space-y-3">
            {project.videos.map((v, i) => (
              <a key={i} href={v.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-accent/30 transition-all group">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Play size={16} className="fill-white text-white ml-0.5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-[#0F172A] text-sm leading-snug truncate">
                    Day {i + 2}: {v.title}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted text-xs shrink-0">
                  <Clock size={12} />
                  {v.duration}
                </div>
                <ExternalLink size={14} className="text-muted group-hover:text-accent transition-colors shrink-0" />
              </a>
            ))}
          </div>

          <div className="mt-6">
            <a href={project.playlistUrl ?? project.youtubeUrl ?? "#"} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors">
              <Youtube size={15} /> View Full Playlist on YouTube
            </a>
          </div>
        </div>
      )}

      {/* Back link */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <Link href="/projects" className="text-accent text-sm font-medium hover:underline">
          ← Back to all projects
        </Link>
      </div>
    </div>
  );
}
