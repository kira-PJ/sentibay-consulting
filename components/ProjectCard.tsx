"use client";
import Link from "next/link";
import { ArrowRight, Github, Youtube, Play } from "lucide-react";
import { Project } from "@/lib/data/projects";

const gradients = [
  "from-[#0a0f2e] to-[#1565c0]",
  "from-[#0d1b2a] to-[#2d6a4f]",
];

const tagColors = [
  "bg-blue-500/20 text-blue-200 border-blue-500/30",
  "bg-cyan-500/20 text-cyan-200 border-cyan-500/30",
  "bg-violet-500/20 text-violet-200 border-violet-500/30",
  "bg-emerald-500/20 text-emerald-200 border-emerald-500/30",
  "bg-amber-500/20 text-amber-200 border-amber-500/30",
];

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  const gradient = gradients[index % gradients.length];
  const hasVideo = !!(project.playlistUrl || project.youtubeUrl);

  return (
    <Link href={`/projects/${project.slug}`}
      className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col">

      {/* Gradient header */}
      <div className={`relative bg-gradient-to-br ${gradient} p-7 overflow-hidden min-h-[180px] flex flex-col justify-between`}>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }} />

        {/* Glow */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />

        {/* Service tags */}
        <div className="flex gap-2 flex-wrap relative z-10">
          {project.awsServices.slice(0, 4).map((s, i) => (
            <span key={s}
              className={`text-xs font-semibold px-2.5 py-1 rounded-lg border backdrop-blur ${tagColors[i % tagColors.length]}`}>
              {s}
            </span>
          ))}
          {project.awsServices.length > 4 && (
            <span className="bg-white/10 border border-white/20 text-white/70 text-xs px-2.5 py-1 rounded-lg">
              +{project.awsServices.length - 4}
            </span>
          )}
        </div>

        {/* Video badge */}
        {hasVideo && (
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full z-10 shadow-lg">
            <Play size={10} className="fill-white" /> Video Series
          </div>
        )}

        {/* Title */}
        <h3 className="text-white font-bold text-xl leading-snug relative z-10 mt-5 group-hover:text-blue-100 transition-colors duration-300">
          {project.title}
        </h3>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-muted text-sm leading-relaxed flex-1 mb-5">{project.summary}</p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex gap-3">
            {project.githubUrl && (
              <span className="inline-flex items-center gap-1.5 text-xs text-muted font-medium">
                <Github size={13} /> GitHub
              </span>
            )}
            {hasVideo && (
              <span className="inline-flex items-center gap-1.5 text-xs text-red-500 font-medium">
                <Youtube size={13} /> YouTube
              </span>
            )}
          </div>
          <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold group-hover:gap-2.5 transition-all duration-300">
            View project <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </Link>
  );
}
