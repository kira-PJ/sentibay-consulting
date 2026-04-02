import ConsultingForm from "@/components/ConsultingForm";
import { services } from "@/lib/data/services";
import { CheckCircle } from "lucide-react";

export default function ConsultingPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left */}
        <div>
          <h1 className="text-4xl font-bold text-primary mb-4">Cloud Consulting & Training</h1>
          <p className="text-muted text-lg mb-10">
            Whether you need a cloud architecture review, a team upskilling program, or hands-on
            AWS implementation support — let's talk.
          </p>
          <div className="space-y-6">
            {services.map((s) => (
              <div key={s.title} className="flex gap-4">
                <CheckCircle className="text-accent mt-1 shrink-0" size={20} />
                <div>
                  <div className="font-semibold text-[#0F172A]">{s.title}</div>
                  <div className="text-muted text-sm">{s.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — inquiry form */}
        <div className="bg-accent-light rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-primary mb-6">Send an Inquiry</h2>
          <ConsultingForm />
        </div>
      </div>
    </div>
  );
}
