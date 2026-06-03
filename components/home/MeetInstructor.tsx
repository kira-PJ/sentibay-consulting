import Link from "next/link";
import { Youtube, Linkedin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function MeetInstructor() {
  return (
    <section className="relative py-24 px-6 section-barrier-light">
      <div className="absolute inset-0 bg-[#060a2e]/85" />
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Photo */}
        <ScrollReveal className="reveal-left">
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-accent/20 to-cyan-400/10 blur-2xl" />
            </div>
            <div className="relative z-10 w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <img src="/images/pauline2.jpg" alt="Pauline Namwakira, Lead Instructor"
                className="w-full h-full object-cover object-top" />
            </div>
            <div className="absolute bottom-4 -right-2 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-lg z-20">
              AWS Authorized Instructor
            </div>
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal className="reveal-right">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-widest">Meet the Instructor</span>
          <h2 className="text-4xl font-bold text-white mt-2 mb-5">Pauline Namwakira</h2>
          <p className="text-blue-100/80 text-lg leading-relaxed mb-4">
            Pauline is an AWS Authorized Instructor and Cloud Solutions Architect with 4+ years of experience
            empowering professionals and organizations through tailored cloud training and solutions.
          </p>
          <p className="text-blue-200/70 leading-relaxed mb-6">
            With a focus on AWS services, Terraform, Python, and infrastructure reliability,
            she has guided over 1000 professionals to achieve AWS certifications across banking,
            fintech, aviation, and energy sectors globally.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {["Solutions Architect Pro", "DevOps Pro", "Security Specialty", "ML Specialty", "+5 more"].map((c) => (
              <span key={c} className="bg-white/10 text-blue-200 text-xs font-medium px-3 py-1.5 rounded-full border border-white/20">
                {c}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link href="/about"
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-accent transition-colors duration-300 hover:-translate-y-0.5 transform">
              Full Profile <ArrowRight size={14} />
            </Link>
            <a href="https://www.linkedin.com/in/paulinenamwakira/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 text-muted text-sm font-medium px-5 py-2.5 rounded-xl hover:border-accent hover:text-accent transition-all duration-300">
              <Linkedin size={14} /> LinkedIn
            </a>
            <a href="https://www.youtube.com/@kiratechhub" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 text-muted text-sm font-medium px-5 py-2.5 rounded-xl hover:border-red-400 hover:text-red-500 transition-all duration-300">
              <Youtube size={14} /> YouTube
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
