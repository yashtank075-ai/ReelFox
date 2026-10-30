export interface TeamMember {
  id: string;
  role: string;
  name: string;
  designation: string;
  bio: string;
  photoUrl: string;
  linkedin?: string;
  email?: string;
}

export const teamData: TeamMember[] = [
  {
    id: "founder",
    role: "Founder",
    name: "[Founder Name Placeholder]",
    designation: "Founder & Chief Executive",
    bio: "Passionate media strategist and brand architect guiding ReelFox Media's creative vision, digital campaign roadmaps, and client success.",
    photoUrl: "/team-placeholder.svg",
    linkedin: "https://linkedin.com",
    email: "founder@reelfoxmedia.com",
  },
  {
    id: "partner",
    role: "Partner",
    name: "[Partner Name Placeholder]",
    designation: "Managing Partner & Strategic Growth",
    bio: "Driving strategic partnerships, commercial scale, and cross-border campaign initiatives across local and international markets.",
    photoUrl: "/team-placeholder.svg",
    linkedin: "https://linkedin.com",
    email: "partner@reelfoxmedia.com",
  },
  {
    id: "sales-executive",
    role: "Sales Executive",
    name: "[Sales Executive Name Placeholder]",
    designation: "Client Solutions & Sales Executive",
    bio: "Connecting businesses, clinics, and professionals with tailored growth strategies, media plans, and promotional packages.",
    photoUrl: "/team-placeholder.svg",
    linkedin: "https://linkedin.com",
    email: "sales@reelfoxmedia.com",
  },
  {
    id: "hr",
    role: "HR",
    name: "[HR Lead Name Placeholder]",
    designation: "Human Resources & Talent Lead",
    bio: "Fostering our collaborative agency culture, sourcing top-tier creative talent, and supporting internal team growth.",
    photoUrl: "/team-placeholder.svg",
    linkedin: "https://linkedin.com",
    email: "hr@reelfoxmedia.com",
  },
  {
    id: "technical-team",
    role: "Technical Team",
    name: "[Technical Lead Placeholder]",
    designation: "Technical & Post-Production Lead",
    bio: "Overseeing digital media workflows, video rendering pipelines, analytics integration, and high-performance delivery systems.",
    photoUrl: "/team-placeholder.svg",
    linkedin: "https://linkedin.com",
    email: "tech@reelfoxmedia.com",
  },
];

