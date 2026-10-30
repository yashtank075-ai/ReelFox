import React from "react";
import Image from "next/image";
import { Mail, User } from "lucide-react";
import { TeamMember } from "@/data/team";
import { LinkedinIcon } from "./SocialIcons";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:border-[#FF6A00] hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* Photo Container */}
        <div className="relative w-full aspect-[4/3] bg-neutral-100 overflow-hidden border-b border-gray-200">
          <Image
            src={member.photoUrl}
            alt={member.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-3.5 left-3.5">
            <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-md bg-[#111111] text-white">
              {member.role}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#FF6A00] uppercase tracking-wider mb-1.5">
            <User className="w-4 h-4" />
            <span>{member.designation}</span>
          </div>

          <h3 className="text-xl font-extrabold text-[#111111] mb-2">{member.name}</h3>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{member.bio}</p>
        </div>
      </div>

      {/* Footer Contact Placeholder */}
      <div className="px-7 py-4.5 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs sm:text-sm text-gray-600">
        <span className="truncate max-w-[170px] font-mono text-xs text-gray-500 font-medium">
          {member.email}
        </span>
        <div className="flex items-center space-x-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-[#FF6A00] hover:bg-orange-50 transition-colors"
              aria-label={`${member.role} LinkedIn`}
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="p-2 rounded-lg text-gray-600 hover:text-[#FF6A00] hover:bg-orange-50 transition-colors"
              aria-label={`${member.role} Email`}
            >
              <Mail className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
