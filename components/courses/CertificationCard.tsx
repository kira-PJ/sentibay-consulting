"use client";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import type { ExamPrepCourse } from "@/lib/data/courses";

type Props = { cert: ExamPrepCourse };

const levelStyles: Record<string, { badge: string; border: string }> = {
  Foundational: { badge: "bg-[#D1FAE5] text-[#059669]",  border: "border-t-2 border-[#059669]" },
  Associate:    { badge: "bg-[#EFF6FF] text-[#1E3A8A]",  border: "border-t-2 border-[#3B82F6]" },
  Professional: { badge: "bg-[#1E3A8A] text-white",      border: "border-t-2 border-[#1E3A8A]" },
  Specialty:    { badge: "bg-amber-100 text-amber-700",   border: "border-t-2 border-amber-500" },
};

export default function CertificationCard({ cert }: Props) {
  const [imgError, setImgError] = useState(false);
  const styles = levelStyles[cert.level] ?? levelStyles.Associate;

  return (
    <div className={`bg-white rounded-xl border border-gray-200 ${styles.border} p-5 flex flex-col gap-3 hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}>

      {/* Badge image */}
      <div className="flex justify-center py-2">
        {cert.badgeUrl && !imgError ? (
          <img
            src={cert.badgeUrl}
            alt={`${cert.name} badge`}
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-20 h-20 rounded-full flex items-center justify-center text-xs font-bold text-center leading-tight ${styles.badge}`}>
            {cert.code}
          </div>
        )}
      </div>

      {/* Level pill */}
      <span className={`self-start text-xs font-semibold px-2.5 py-0.5 rounded-full ${styles.badge}`}>
        {cert.level}
      </span>

      {/* Name */}
      <p className="text-[#0F172A] font-semibold text-sm leading-snug flex-1">
        {cert.name}
      </p>

      {/* Links */}
      <div className="flex flex-col gap-1.5">
        {cert.certUrl && (
          <a
            href={cert.certUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#1E3A8A] hover:text-[#3B82F6] transition-colors font-medium"
          >
            About this cert <ExternalLink size={11} />
          </a>
        )}
        {cert.outlineUrl && (
          <a
            href={cert.outlineUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-[#3B82F6] hover:text-[#1E3A8A] transition-colors font-medium"
          >
            View Outline <ExternalLink size={11} />
          </a>
        )}
      </div>
    </div>
  );
}
