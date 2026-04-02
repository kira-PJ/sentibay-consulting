import Link from "next/link";
import { BookOpen, Server, Award, Brain, TrendingDown } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  {
    icon: Award,
    title: "Certification Prep",
    description: "Structured courses for every AWS certification — Cloud Practitioner to Professional and Specialty tracks.",
    color: "from-blue-500 to-blue-700",
    href: "/consulting",
  },
  {
    icon: Server,
    title: "Cloud Consulting",
    description: "Architecture reviews, cost optimization, and hands-on implementation support for startups and enterprise teams.",
    color: "from-indigo-500 to-indigo-700",
    href: "/consulting",
  },
  {
    icon: BookOpen,
    title: "Corporate Training",
    description: "Customized AWS training programs delivered to your team — in-person or virtual, tailored to your industry.",
    color: "from-cyan-500 to-cyan-700",
    href: "/training",
  },
  {
    icon: Brain,
    title: "Generative AI on AWS",
    description: "Hands-on guidance building GenAI apps with Amazon Bedrock — agents, RAG pipelines, and production deployments.",
    color: "from-violet-500 to-violet-700",
    href: "/consulting",
  },
  {
    icon: TrendingDown,
    title: "FinOps and Cost Optimization",
    description: "Identify and eliminate cloud waste — rightsizing, reserved capacity planning, and tagging strategies.",
    color: "from-emerald-500 to-emerald-700",
    href: "/consulting",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">What I Offer</span>
            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">Services</h2>
            <p className="text-muted max-w-xl mx-auto">
              From individual cert prep to enterprise cloud strategy.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6 stagger">
          {items.map(({ icon: Icon, title, description, color, href }, i) => (
            <ScrollReveal key={title} delay={i * 80}>
              <Link href={href}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden block h-full">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
                <p className="text-muted text-sm leading-relaxed">{description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
