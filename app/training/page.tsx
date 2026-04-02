import { atpCourses, examPrepCourses, categories, getLevelLabel } from "@/lib/data/courses";
import { ExternalLink, AlertTriangle, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";

const levelColor: Record<string, string> = {
  "100": "bg-green-100 text-green-700",
  "200": "bg-blue-100 text-blue-700",
  "300": "bg-violet-100 text-violet-700",
};

const examLevelColor: Record<string, string> = {
  Foundational: "bg-green-100 text-green-700",
  Associate: "bg-blue-100 text-blue-700",
  Professional: "bg-violet-100 text-violet-700",
  Specialty: "bg-amber-100 text-amber-700",
};

export default function TrainingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* Header */}
      <div className="mb-10">
        <span className="text-accent text-sm font-semibold uppercase tracking-widest">AWS Training Partner</span>
        <h1 className="text-4xl font-bold text-primary mt-2 mb-4">Corporate AWS Training</h1>
        <p className="text-muted text-lg max-w-2xl">
          AWS classroom training delivered through an AWS Training Partner.
          Browse the full catalog below and get in touch to schedule for your team.
        </p>
      </div>

      {/* ATP Warning Banner */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-14 flex gap-4">
        <AlertTriangle className="text-amber-500 shrink-0 mt-0.5" size={22} />
        <div>
          <p className="font-semibold text-amber-800 mb-1">Available through an AWS Training Partner</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            These courses are delivered through a certified AWS Training Partner program.
            I can connect you directly to the program team at <strong>Discoverer International</strong>.{" "}
            <Link href="/consulting" className="underline font-medium hover:text-amber-900">Contact me</Link>{" "}
            and I will get you set up.
          </p>
        </div>
      </div>

      {/* Course catalog by category */}
      <div className="space-y-14 mb-20">
        {categories.map((category) => {
          const courses = atpCourses.filter((c) => c.category === category);
          return (
            <div key={category}>
              <h2 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-gray-100">
                {category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {courses.map((course) => (
                  <div key={course.name}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex flex-col">
                    {/* AWS-style card header */}
                    <div className="bg-[#1a6b6b] px-5 pt-5 pb-8 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-[#2a9d8f]/40 rounded-bl-3xl" />
                      <div className="absolute top-0 right-16 w-8 h-8 bg-white/10 rounded-bl-2xl" />
                      <div className="flex items-center gap-1.5 mb-4">
                        <div className="bg-white rounded px-1.5 py-0.5">
                          <span className="text-[#232f3e] text-xs font-extrabold tracking-tight">aws</span>
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-sm leading-snug pr-8">{course.name}</h3>
                      <div className="mt-2 text-[#a8d8d8] text-xs">{getLevelLabel(course.level)} · {course.days}</div>
                    </div>
                    {/* Card body */}
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-muted text-sm leading-relaxed flex-1 mb-4">{course.description}</p>
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColor[course.level] ?? "bg-gray-100 text-gray-600"}`}>
                          Level {course.level}
                        </span>
                        {course.outlineUrl && (
                          <a href={course.outlineUrl} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-accent text-xs font-medium hover:underline">
                            Course outline <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Exam Prep Section */}
      <div className="mb-20">
        <div className="mb-8">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest">Certification Prep</span>
          <h2 className="text-3xl font-bold text-primary mt-2 mb-3">Exam Prep Courses</h2>
          <p className="text-muted max-w-2xl">
            Structured exam prep for all AWS certifications. Dates are scheduled based on demand.
            Get in touch to discuss availability and group options.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {examPrepCourses.map((course) => (
            <div key={course.code}
              className="bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-accent/30 transition-all flex items-start justify-between gap-3">
              <div>
                <div className="font-semibold text-[#0F172A] text-sm mb-1">{course.name}</div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted font-mono">{course.code}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${examLevelColor[course.level] ?? "bg-gray-100 text-gray-600"}`}>
                    {course.level}
                  </span>
                </div>
              </div>
              {course.outlineUrl ? (
                <a href={course.outlineUrl} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 text-accent hover:text-primary transition-colors mt-0.5">
                  <ExternalLink size={14} />
                </a>
              ) : (
                <Link href="/consulting" className="shrink-0 text-muted hover:text-accent transition-colors mt-0.5">
                  <MessageCircle size={14} />
                </Link>
              )}
            </div>
          ))}
        </div>
        <Link href="/consulting"
          className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
          <MessageCircle size={15} /> Discuss Exam Prep Dates
        </Link>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-br from-[#0a0f2e] to-primary rounded-2xl p-10 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="text-2xl font-bold mb-3 relative">Ready to train your team?</h2>
        <p className="text-blue-200 mb-6 max-w-lg mx-auto relative">
          Get in touch and I will connect you with the AWS Training Partner program team to schedule the right course for your organization.
        </p>
        <Link href="/consulting"
          className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors relative">
          <Mail size={16} /> Contact Me
        </Link>
      </div>
    </div>
  );
}
