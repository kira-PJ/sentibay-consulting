import Link from "next/link";
import { Clock, Bell } from "lucide-react";

export default function CoursesPage() {
  return (
    <div className="min-h-[80vh] bg-[#0a0f2e] text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative text-center max-w-xl">
        <div className="w-16 h-16 bg-accent/20 border border-accent/30 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <Clock className="text-accent" size={28} />
        </div>
        <span className="inline-block bg-amber-400/20 border border-amber-400/30 text-amber-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          Coming Soon
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
          Certification Prep<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Courses in the Works
          </span>
        </h1>
        <p className="text-blue-200 text-lg leading-relaxed mb-10">
          We're building structured AWS certification prep courses — from Cloud Practitioner
          to Professional and Specialty tracks. Video lessons, hands-on labs, practice exams.
          All in one place.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 text-left space-y-3">
          {[
            "AWS Cloud Practitioner (CLF-C02)",
            "Solutions Architect – Associate",
            "DevOps Engineer – Professional",
            "Generative AI on AWS",
            "Security Engineering on AWS",
          ].map((course) => (
            <div key={course} className="flex items-center gap-3 text-blue-100 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {course}
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consulting"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-blue-500 transition-colors">
            <Bell size={15} /> Get Notified
          </Link>
          <Link href="/training"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
            View Corporate Training
          </Link>
        </div>
      </div>
    </div>
  );
}
