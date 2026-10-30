export interface ServiceItem {
  id: string;
  category: "local" | "international";
  title: string;
  description: string;
  iconName: string;
  features: string[];
  detailedExplanation?: string;
  keyBenefits?: string[];
  whatIncludes?: string[];
}

export const servicesData: ServiceItem[] = [
  // Local Services
  {
    id: "event-promotion",
    category: "local",
    title: "Event Promotion",
    description:
      "Creative campaigns and promotional content to increase event visibility and audience engagement.",
    iconName: "Calendar",
    features: [
      "Custom teaser content and countdown rollouts",
      "Audience reach optimization and local targeting",
      "Live event highlights and story coverage",
    ],
    detailedExplanation:
      "Our Event Promotion service transforms local events into high-attendance milestones. We develop a complete pre-event hype strategy, coordinate creative video teasers, and leverage localized social media targeting to maximize ticket sales, RSVPs, and live buzz.",
    keyBenefits: [
      "Accelerated event discoverability across local communities",
      "High-engagement teaser reels that spark word-of-mouth attendance",
      "Targeted regional demographics and attendee segmentation",
      "Comprehensive promotional coverage before, during, and after your event",
    ],
    whatIncludes: [
      "Strategic campaign timeline and countdown media calendar",
      "Short-form teaser videos, motion flyers, and invitation reels",
      "Localized social amplification and event hashtag positioning",
      "Post-event highlight reel production for future brand equity",
    ],
  },
  {
    id: "business-promotion",
    category: "local",
    title: "Business Promotion",
    description:
      "Help local businesses improve brand awareness and attract potential customers through digital promotion.",
    iconName: "Briefcase",
    features: [
      "Local market digital presence audit",
      "Targeted local customer acquisition campaigns",
      "High-engagement video and brand showcase reels",
    ],
    detailedExplanation:
      "Tailored for local enterprises, retail outlets, and service providers aiming to solidify their local market authority. We craft narrative-driven brand videos and targeted promotional campaigns that communicate your unique strengths directly to nearby customers.",
    keyBenefits: [
      "Measurable lift in local brand recall and footfall inquiries",
      "Professional visual presentation that differentiates you from local competitors",
      "Consistent stream of fresh short-form video assets for local audiences",
      "Cost-effective regional targeting with zero wasted ad spend",
    ],
    whatIncludes: [
      "In-depth analysis of your local market positioning and competitors",
      "On-brand promotional reels highlighting services, products, and customer value",
      "Platform optimization across Instagram, YouTube, and Google profile assets",
      "Targeted distribution strategies focused on regional radius customers",
    ],
  },
  {
    id: "doctor-clinic-promotion",
    category: "local",
    title: "Doctor & Clinic Promotion",
    description:
      "Professional digital presence and promotional content for doctors, clinics and healthcare professionals.",
    iconName: "Stethoscope",
    features: [
      "Ethical, authoritative medical branding",
      "Patient education video snippets and FAQs",
      "Local clinic discoverability & trust building",
    ],
    detailedExplanation:
      "Healthcare requires absolute trust, ethical communication, and authoritative clarity. Our Doctor & Clinic Promotion service helps healthcare providers educate their local community, demystify medical treatments, and establish dependable clinic discoverability.",
    keyBenefits: [
      "Establishes reputable medical authority within your city or region",
      "Builds genuine patient confidence through transparent educational media",
      "Increases appointment inquiries through local patient discovery funnels",
      "Adheres strictly to healthcare communication ethics and privacy guidelines",
    ],
    whatIncludes: [
      "Doctor spotlight & clinic tour video production",
      "Bite-sized patient FAQ reels answering frequent medical inquiries",
      "Local search discoverability and clinic review optimization strategy",
      "Professional content calendar focused on wellness and healthcare awareness",
    ],
  },

  // International Services
  {
    id: "international-doctor-marketing",
    category: "international",
    title: "International Doctor Marketing & Personal Branding",
    description:
      "Helping doctors build a professional identity, strengthen their online presence and connect with their target audience internationally.",
    iconName: "Globe",
    features: [
      "Global medical thought leadership positioning",
      "Multi-channel authority content architecture",
      "Cross-border patient inquiries and consulting reach",
    ],
    detailedExplanation:
      "For medical specialists, surgeons, and healthcare thought leaders seeking a global presence. We build an international personal brand that highlights your clinical breakthroughs, published expertise, and specialized procedures for cross-border patients and colleagues.",
    keyBenefits: [
      "Worldwide recognition as a premier specialist in your medical discipline",
      "Attraction of international medical tourism and global second-opinion consults",
      "Elevated thought leadership leading to speaking invitations and collaborative ventures",
      "Authoritative, high-trust digital presence that commands global respect",
    ],
    whatIncludes: [
      "Comprehensive global personal brand architecture & specialty positioning",
      "Production of high-production clinical thought-leadership videos",
      "Cross-border distribution strategy tailored to key international regions",
      "Unified digital footprint across YouTube, professional portals, and social channels",
    ],
  },
  {
    id: "youtube-promotion",
    category: "international",
    title: "YouTube Promotion",
    description:
      "Content promotion strategies to improve channel visibility and reach relevant audiences.",
    iconName: "Youtube",
    features: [
      "Algorithmic audience retention optimization",
      "High CTR thumbnails and metadata structuring",
      "Targeted global view growth and subscriber acquisition",
    ],
    detailedExplanation:
      "YouTube is the world's second-largest search engine. We implement rigorous algorithmic optimization, high-retention storytelling, and intentional audience targeting to transform your channel into a recurring engine of global views and loyal subscribers.",
    keyBenefits: [
      "Sustainable organic channel growth driven by YouTube recommendation algorithms",
      "Dramatic increase in click-through rates (CTR) and average view duration (AVD)",
      "Global audience acquisition tailored to your exact industry niche",
      "Establishment of long-term evergreen media assets that generate value for years",
    ],
    whatIncludes: [
      "Channel architecture audit and video metadata (titles, tags, descriptions) overhaul",
      "High-contrast, high-CTR thumbnail strategy and A/B packaging guidance",
      "Audience retention pacing analysis and script structuring",
      "Targeted international promotional campaigns to jumpstart video momentum",
    ],
  },
  {
    id: "instagram-reels",
    category: "international",
    title: "Instagram Reels",
    description:
      "Engaging short-form video content and promotional strategies for brands and creators.",
    iconName: "Film",
    features: [
      "Hook-driven storytelling & high-retention editing",
      "Viral audio and trending narrative integration",
      "Strategic hashtag & community distribution",
    ],
    detailedExplanation:
      "Short-form video is the primary discovery vehicle on modern social platforms. We design, script, and edit high-impact Instagram Reels that capture viewer attention within the first two seconds, sparking viral reach, comments, and follower conversions.",
    keyBenefits: [
      "Rapid reach into untapped non-follower audiences on the Explore and Reels feeds",
      "Dynamic vertical editing techniques that maximize full-watch rates and replay counts",
      "Cohesive aesthetic and brand tone that turns casual viewers into loyal advocates",
      "Seamless alignment with trending audio concepts and platform-native conventions",
    ],
    whatIncludes: [
      "Hook formulation, visual scripting, and creative storytelling outlines",
      "Fast-paced editing with custom motion typography, sound effects, and color grading",
      "Hashtag strategy, audio selection, and optimal publishing timeframes",
      "Performance analysis and continuous editorial iteration",
    ],
  },
  {
    id: "youtube-shorts",
    category: "international",
    title: "YouTube Shorts",
    description:
      "Short-form video content designed to increase visibility and audience engagement.",
    iconName: "Video",
    features: [
      "Fast-paced vertical editing and dynamic captions",
      "Short-to-long form viewer conversion funnels",
      "Daily algorithmic testing and growth loops",
    ],
    detailedExplanation:
      "YouTube Shorts provides unprecedented algorithmic reach to creators and companies. We structure high-velocity vertical videos that capture massive impressions and seamlessly direct engaged viewers toward your main channel, services, or website.",
    keyBenefits: [
      "Multi-million impression potential across global YouTube Shorts feeds",
      "Rapid subscriber acquisition and audience channel onboarding",
      "Smart funneling strategies linking Shorts to long-form videos and external inquiries",
      "Scalable production workflows allowing consistent daily or weekly output",
    ],
    whatIncludes: [
      "Vertical video scripting optimized for zero drop-off retention",
      "High-energy pacing, on-screen dynamic captions, and visual B-roll integration",
      "Related video linking to drive high-intent viewers into longer content",
      "Channel-wide Shorts shelf optimization and analytics evaluation",
    ],
  },
];
