import { BadgeCheck, TrendingUp, Briefcase, Globe, type LucideIcon } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  TrendingUp,
  Briefcase,
  Globe,
};

// Override differentiator content with corrected copy
const items = [
  {
    iconName: "BadgeCheck",
    title: "AWS Authorized Instructors",
    description:
      "Our instructors are officially authorized by Amazon Web Services to deliver AWS training. Every session follows the AWS curriculum framework, so the content is accurate and current.",
  },
  {
    iconName: "TrendingUp",
    title: "Proven Pass Rates",
    description:
      "Our students consistently pass AWS certification exams on their first attempt. We maintain an average pass rate of 93% and an average student rating of 4.9 out of 5.",
  },
  {
    iconName: "Briefcase",
    title: "Industry-Specific Training",
    description:
      "We have delivered training to teams in banking, fintech, aviation, oil and gas, and energy. We adapt examples and labs to your sector.",
  },
  {
    iconName: "Globe",
    title: "Training Delivered Globally",
    description:
      "We deliver training to professionals worldwide, both in-person and virtually. We accommodate all time zones so your team can learn without disruption.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Why SentiBay Consulting
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            What makes us different from other training providers.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger">
          {items.map(({ iconName, title, description }, i) => {
            const Icon = iconMap[iconName];
            return (
              <ScrollReveal key={title} delay={i * 80}>
                <div className="group flex gap-5 p-7 rounded-2xl border border-gray-200 hover:border-[#059669]/30 hover:shadow-lg transition-all duration-300 bg-white card-lift">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-[#D1FAE5] flex items-center justify-center group-hover:bg-[#059669] transition-colors duration-300">
                    {Icon && <Icon className="text-[#059669] group-hover:text-white transition-colors duration-300" size={22} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
