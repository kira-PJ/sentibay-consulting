import { Award, Users, BookOpen, Globe, Youtube, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Award, label: "AWS Certifications", value: "9+" },
  { icon: Users, label: "Engineers Trained", value: "500+" },
  { icon: BookOpen, label: "Pass Rate", value: "100%" },
  { icon: Globe, label: "Industries Served", value: "5+" },
];

const certs = [
  "Solutions Architect – Professional",
  "DevOps Engineer – Professional",
  "Security – Specialty",
  "Machine Learning – Specialty",
  "Data Engineer – Associate",
  "Developer – Associate",
  "SysOps Administrator – Associate",
  "Solutions Architect – Associate",
  "Cloud Practitioner",
];

const timeline = [
  {
    year: "Now",
    role: "AWS Authorized Instructor & Cloud Consultant",
    org: "Discoverer International / Independent",
    desc: "Delivering AWS training across industries globally — banking, fintech, aviation, energy. Also building KiraTechHub to make cloud education more accessible.",
  },
  {
    year: "2023",
    role: "Cloud Engineering Trainer Team Lead",
    org: "Azubi Africa",
    desc: "Led a team of trainers, oversaw cloud engineering programs from inception to completion, and mentored hundreds of African engineers into cloud careers.",
  },
  {
    year: "2022",
    role: "AWS Community Builder & Organizer",
    org: "AWS Community Day Kenya",
    desc: "Organized community events, delivered workshops and bootcamps across Kenya and Uganda. Ran a 9-month bootcamp in Kampala that got 10 community members AWS certified.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="relative bg-[#0a0f2e] text-white overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-blue-300 text-sm mb-5">
              <MapPin size={13} /> Nairobi, Kenya
            </div>
            <h1 className="text-5xl font-extrabold mb-5 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Pauline
            </span>
            </h1>
            <p className="text-blue-100/80 text-lg leading-relaxed mb-6">
              I'm a cloud person who genuinely loves people. My career has taken me from university
              classrooms to corporate boardrooms — training engineers, organizing community events,
              and building things on AWS that actually solve problems.
            </p>
            <p className="text-blue-100/70 leading-relaxed mb-8">
              I identify as a techie, but what drives me is the moment something clicks for someone.
              That's why I teach the way I do — with analogies, real examples, and a lot of patience.
              I've worked with teams across banking, fintech, aviation, and energy, and I've learned
              that the best cloud training meets people exactly where they are.
            </p>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/@kiratechhub" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-500/20 text-red-300 border border-red-500/30 font-medium px-5 py-2.5 rounded-xl hover:bg-red-500/30 transition-colors text-sm">
                <Youtube size={15} /> YouTube
              </a>
              <a href="https://www.linkedin.com/in/paulinenamwakira/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium px-5 py-2.5 rounded-xl hover:bg-blue-500/30 transition-colors text-sm">
                <Linkedin size={15} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-400/20 blur-2xl" />
            </div>
            <div className="relative z-10 w-64 h-80 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl">
              <img src="/images/pauline.jpg" alt="Pauline Namwakira"
                className="w-full h-full object-cover object-top" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label}
              className="bg-accent-light rounded-2xl p-6 text-center border border-blue-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Icon className="text-accent" size={20} />
              </div>
              <div className="text-3xl font-extrabold text-primary">{value}</div>
              <div className="text-sm text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-6 pb-16">
        <h2 className="text-2xl font-bold text-primary mb-10">The journey so far</h2>
        <div className="relative border-l-2 border-accent/20 pl-8 space-y-10">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[2.65rem] w-5 h-5 rounded-full bg-accent border-4 border-white shadow" />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">{t.year}</span>
              <h3 className="text-lg font-semibold text-primary mt-1">{t.role}</h3>
              <div className="text-sm text-accent mb-2">{t.org}</div>
              <p className="text-muted text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-50 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8">AWS Certifications</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {certs.map((cert) => (
              <div key={cert}
                className="flex items-center gap-3 bg-white border border-blue-100 rounded-xl px-4 py-3 hover:shadow-sm transition-shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-accent shrink-0" />
                <span className="text-sm font-medium text-primary">AWS {cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-[#0a0f2e] to-primary rounded-3xl p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl font-bold mb-3 relative">Let's work together</h2>
          <p className="text-blue-200 mb-6 relative">
            Whether it's training your team, reviewing your architecture, or just a conversation about cloud.
          </p>
          <Link href="/consulting"
            className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl hover:bg-blue-50 transition-colors relative">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
