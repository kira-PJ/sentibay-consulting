import type { ExamPrepCourse } from "@/lib/data/courses";
import CertificationCard from "./CertificationCard";

type CertificationGroupProps = {
  level: string;
  certs: ExamPrepCourse[];
};

export default function CertificationGroup({ level, certs }: CertificationGroupProps) {
  return (
    <section>
      {/* Section heading with count badge */}
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-bold text-[#0F172A]">{level}</h2>
        <span className="text-xs font-semibold bg-gray-100 text-[#64748B] px-2.5 py-1 rounded-full">
          {certs.length}
        </span>
      </div>

      {/* Grid of CertificationCard components */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {certs.map((cert) => (
          <CertificationCard key={cert.code} cert={cert} />
        ))}
      </div>
    </section>
  );
}
