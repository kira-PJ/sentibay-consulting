import Link from "next/link";
import { ArrowRight, Monitor, Building2, BookOpen, Clock } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const options = [
  {
    icon: Monitor,
    title: "Live Virtual Training",
    description:
      "Instructor-led sessions delivered online. Scheduled cohorts and private group bookings available. Covers all AWS certification tracks.",
    href: "/consulting",
    // Laptop with video call / virtual training
    photo: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=600&q=80&auto=format&fit=crop",
    photoAlt: "Professional on a virtual training call",
    accent: "#3B82F6",
    accentBg: "#EFF6FF",
    comingSoon: false,
  },
  {
    icon: Building2,
    title: "Corporate On-Site Training",
    description:
      "We come to your office or training facility in Kenya. Customized curriculum aligned to your team's role and industry.",
    href: "/consulting",
    // Mixed-race diverse classroom / workshop setting
    photo: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format&fit=crop",
    photoAlt: "Diverse team in a corporate training workshop",
    accent: "#059669",
    accentBg: "#D1FAE5",
    comingSoon: false,
  },
  {
    icon: BookOpen,
    title: "Self-Paced Exam Prep",
    description:
      "Structured course outlines, practice questions, and direct access to your instructor. Study at your own pace.",
    href: "https://learn.sentibay.com/courses",
    photo: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80&auto=format&fit=crop",
    photoAlt: "Student studying for AWS certification",
    accent: "#0D9488",
    accentBg: "#CCFBF1",
    comingSoon: true,
  },
];

export default function TrainingOptions() {
  return (
    <section className="py-28 px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            How We Train
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the format that works best for you and your team.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {options.map(({ icon: Icon, title, description, href, photo, photoAlt, accent, accentBg, comingSoon }, i) => (
            <ScrollReveal key={title} delay={i * 100}>
              <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 flex flex-col card-lift relative">

                {/* Coming Soon badge */}
                {comingSoon && (
                  <div className="absolute top-3 right-3 z-20 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Coming Soon
                  </div>
                )}

                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={photo}
                    alt={photoAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div
                    className="absolute bottom-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: accentBg }}
                  >
                    <Icon size={20} style={{ color: accent }} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-1 mb-5">{description}</p>
                  {comingSoon ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                    >
                      <Clock size={14} /> Coming Soon &middot; View Courses
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200"
                      style={{ color: accent }}
                    >
                      Learn more <ArrowRight size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
