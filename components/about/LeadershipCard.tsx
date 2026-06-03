import Image from "next/image";
import { Linkedin } from "lucide-react";
import type { LeadershipMember } from "@/lib/data/leadership";

type LeadershipCardProps = {
  member: LeadershipMember;
};

function getInitials(name: string): string {
  const parts = name.trim().split(" ");
  if (parts.length < 2) return parts[0]?.[0]?.toUpperCase() ?? "";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function LeadershipCard({ member }: LeadershipCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
      {/* Avatar / Photo */}
      <div className="flex-shrink-0">
        {member.photoPath ? (
          <Image
            src={member.photoPath}
            alt={member.name}
            width={96}
            height={96}
            className="rounded-xl object-cover w-24 h-24"
          />
        ) : (
          <div className="w-24 h-24 rounded-xl bg-[#1E3A8A] flex items-center justify-center">
            <span className="text-white text-2xl font-bold tracking-wide">
              {getInitials(member.name)}
            </span>
          </div>
        )}
      </div>

      {/* Name and Title */}
      <div>
        <h3 className="text-[#0F172A] text-xl font-bold">{member.name}</h3>
        <p className="text-[#3B82F6] text-sm font-medium mt-0.5">{member.title}</p>
      </div>

      {/* Bio */}
      <p className="text-[#64748B] text-sm leading-relaxed flex-1">{member.bio}</p>

      {/* LinkedIn link */}
      {member.linkedinUrl && (
        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#3B82F6] text-sm font-medium hover:underline mt-auto"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      )}
    </div>
  );
}
