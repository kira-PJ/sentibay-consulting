import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { atpCourses, categories, getLevelLabel } from "@/lib/data/courses";
import ScrollReveal from "@/components/ScrollReveal";

// Category photos and colors — visually rich, no icons
const categoryMeta: Record<string, { color: string; bg: string; photo: string; textColor: string }> = {
  "Architect": {
    color: "#3B82F6", bg: "#EFF6FF", textColor: "#1E3A8A",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&auto=format&fit=crop",
  },
  "Artificial Intelligence and Machine Learning": {
    color: "#8B5CF6", bg: "#F5F3FF", textColor: "#5B21B6",
    photo: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80&auto=format&fit=crop",
  },
  "Cloud Essentials": {
    color: "#059669", bg: "#D1FAE5", textColor: "#065F46",
    photo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80&auto=format&fit=crop",
  },
  "Data Analytics": {
    color: "#0D9488", bg: "#CCFBF1", textColor: "#0F766E",
    photo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80&auto=format&fit=crop",
  },
  "Databases": {
    color: "#F59E0B", bg: "#FEF3C7", textColor: "#92400E",
    photo: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80&auto=format&fit=crop",
  },
  "Developer": {
    color: "#EC4899", bg: "#FCE7F3", textColor: "#9D174D",
    photo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80&auto=format&fit=crop",
  },
  "DevOps": {
    color: "#6366F1", bg: "#EEF2FF", textColor: "#3730A3",
    photo: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&q=80&auto=format&fit=crop",
  },
  "Containers": {
    color: "#0EA5E9", bg: "#E0F2FE", textColor: "#0369A1",
    photo: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80&auto=format&fit=crop",
  },
  "Migration": {
    color: "#10B981", bg: "#D1FAE5", textColor: "#065F46",
    photo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80&auto=format&fit=crop",
  },
  "Networking": {
    color: "#F97316", bg: "#FED7AA", textColor: "#9A3412",
    photo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&q=80&auto=format&fit=crop",
  },
  "Operations": {
    color: "#64748B", bg: "#F1F5F9", textColor: "#334155",
    photo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80&auto=format&fit=crop",
  },
  "Serverless": {
    color: "#A855F7", bg: "#F3E8FF", textColor: "#6B21A8",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&auto=format&fit=crop",
  },
  "Security": {
    color: "#EF4444", bg: "#FEE2E2", textColor: "#991B1B",
    photo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&q=80&auto=format&fit=crop",
  },
  "Storage": {
    color: "#84CC16", bg: "#ECFCCB", textColor: "#3F6212",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80&auto=format&fit=crop",
  },
};

const levelColor: Record<string, string> = {
  "100": "bg-emerald-100 text-emerald-700",
  "200": "bg-blue-100 text-blue-700",
  "300": "bg-violet-100 text-violet-700",
};

export default function TrainingPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#0C4A6E] py-24 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="blob-1 absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-[#3B82F6]/30 blur-[90px]" />
          <div className="blob-2 absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#059669]/20 blur-[80px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-[#059669]/15 border border-[#059669]/25 text-[#34D399] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              AWS Authorized Instructors
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              Corporate AWS Training
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Official AWS classroom training delivered by AWS Authorized Instructors.
              Browse the full catalog and get in touch to schedule for your team.
            </p>
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Schedule Training <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/30 to-[#059669]/20 blur-2xl scale-105" />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=700&q=80&auto=format&fit=crop"
              alt="Corporate training session with diverse learners"
              className="relative z-10 w-full h-72 object-cover rounded-3xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── ATP Disclaimer ── */}
      <section className="py-6 px-6 bg-amber-50 border-b border-amber-200">
        <div className="max-w-6xl mx-auto flex items-start gap-3">
          <div className="shrink-0 w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center mt-0.5">
            <span className="text-white text-xs font-bold">i</span>
          </div>
          <p className="text-amber-800 text-sm leading-relaxed">
            <span className="font-semibold">Delivery note:</span> These AWS classroom courses are delivered through an official AWS Training Partner program.
            SentiBay Consulting works with <span className="font-semibold">Discoverer International</span>, our ATP sponsor, to facilitate course delivery.
            When you get in touch, we will connect you directly with the program team to schedule and confirm your training.
          </p>
        </div>
      </section>

      {/* ── Category photo cards ── */}
      <section className="py-20 px-6 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
              Training Categories
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From cloud fundamentals to advanced AI and ML, we cover the full AWS curriculum.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => {
              const meta = categoryMeta[cat] ?? { color: "#3B82F6", bg: "#EFF6FF", textColor: "#1E3A8A", photo: "" };
              const count = atpCourses.filter((c) => c.category === cat).length;
              return (
                <ScrollReveal key={cat} delay={i * 40}>
                  <a
                    href={`#cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                    className="group block bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 card-lift"
                  >
                    {/* Photo */}
                    <div className="relative h-28 overflow-hidden">
                      <img
                        src={meta.photo}
                        alt={cat}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(to bottom, ${meta.color}33, ${meta.color}88)` }}
                      />
                    </div>
                    {/* Label */}
                    <div className="p-3">
                      <p className="text-xs font-bold text-slate-900 leading-snug">{cat}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{count} course{count !== 1 ? "s" : ""}</p>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Full catalog by category ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto space-y-20">
          {categories.map((cat) => {
            const meta = categoryMeta[cat] ?? { color: "#3B82F6", bg: "#EFF6FF", textColor: "#1E3A8A", photo: "" };
            const courses = atpCourses.filter((c) => c.category === cat);
            return (
              <div key={cat} id={`cat-${cat.replace(/\s+/g, "-").toLowerCase()}`}>
                <ScrollReveal>
                  {/* Category header with photo strip */}
                  <div className="relative rounded-2xl overflow-hidden mb-8 h-32">
                    <img
                      src={meta.photo}
                      alt={cat}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/80 to-[#0F172A]/30" />
                    <div className="absolute inset-0 flex items-center px-6">
                      <div>
                        <h2 className="text-2xl font-bold text-white">{cat}</h2>
                        <p className="text-slate-300 text-sm mt-0.5">{courses.length} course{courses.length !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {courses.map((course, i) => (
                    <ScrollReveal key={course.name} delay={i * 60}>
                      <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-300 flex flex-col card-lift h-full">
                        {/* AWS-branded header */}
                        <div
                          className="px-5 pt-5 pb-6 relative overflow-hidden"
                          style={{ background: `linear-gradient(135deg, ${meta.color}18 0%, ${meta.color}06 100%)` }}
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <div className="bg-[#232F3E] rounded px-2 py-0.5 inline-flex items-center">
                              <span className="text-[#FF9900] text-xs font-extrabold tracking-tight">aws</span>
                            </div>
                            <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${levelColor[course.level] ?? "bg-gray-100 text-gray-600"}`}>
                              {getLevelLabel(course.level)}
                            </span>
                            <span className="text-xs text-slate-400 ml-auto">{course.days}</span>
                          </div>
                          <h3 className="text-slate-900 font-semibold text-sm leading-snug">{course.name}</h3>
                        </div>

                        {/* Body */}
                        <div className="p-5 flex flex-col flex-1">
                          <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">{course.description}</p>
                          {course.outlineUrl && (
                            <a
                              href={course.outlineUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors"
                              style={{ color: meta.color }}
                            >
                              View Course Outline <ExternalLink size={11} />
                            </a>
                          )}
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] to-[#0C4A6E] py-24 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#3B82F6]/20 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#059669]/15 blur-[70px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-5">Ready to train your team?</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Get in touch and we will schedule the right course for your organization.
          </p>
          <Link
            href="/consulting"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1E3A8A] font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:-translate-y-0.5"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
