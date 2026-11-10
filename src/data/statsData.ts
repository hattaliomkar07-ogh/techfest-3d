export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  statBadge?: string;
  color: string;
}

export const WHY_PARTICIPATE_BENEFITS: BenefitItem[] = [
  {
    id: "learn",
    title: "Learn Beyond Classrooms",
    description: "Access hands-on masterclasses, live hardware teardowns, and master lectures led by pioneering scientists and industry CTOs.",
    icon: "GraduationCap",
    statBadge: "40+ Masterclasses",
    color: "#2864FF",
  },
  {
    id: "compete",
    title: "Compete with Top Global Minds",
    description: "Challenge your boundaries in internationally accredited robotics tournaments, algorithmic sprints, and systems design arenas.",
    icon: "Trophy",
    statBadge: "₹50L+ Prize Pool",
    color: "#7957FF",
  },
  {
    id: "collaborate",
    title: "Collaborate with Bold Innovators",
    description: "Form multidisciplinary teams, meet prospective co-founders, and build long-term intellectual partnerships.",
    icon: "Users",
    statBadge: "Global Network",
    color: "#36C5F0",
  },
  {
    id: "explore",
    title: "Explore Emerging Frontiers",
    description: "Experiment directly with quantum testbeds, generative agent frameworks, humanoid robotics, and clean hydrogen tech.",
    icon: "Compass",
    statBadge: "Bleeding-Edge Tech",
    color: "#FF826E",
  },
  {
    id: "build",
    title: "Build Practical Experience",
    description: "Transform conceptual equations and mockups into physical hardware prototypes and live production-tested code.",
    icon: "Wrench",
    statBadge: "Real-World Impact",
    color: "#FFB45C",
  },
  {
    id: "showcase",
    title: "Showcase Creative Ingenuity",
    description: "Present your innovations in front of venture capitalists, institutional accelerators, global media, and industry recruiters.",
    icon: "Award",
    statBadge: "Global Exposure",
    color: "#2864FF",
  },
];

export interface FestivalMetric {
  id: string;
  value: string;
  numericTarget: number;
  suffix: string;
  label: string;
  subtext: string;
  isVerifiedPlaceholder: boolean;
}

export const FESTIVAL_METRICS: FestivalMetric[] = [
  {
    id: "footfall",
    value: "175,000+",
    numericTarget: 175,
    suffix: "k+",
    label: "Festival Footfall",
    subtext: "Asia's largest annual gathering of science and technology enthusiasts",
    isVerifiedPlaceholder: false,
  },
  {
    id: "colleges",
    value: "2,500+",
    numericTarget: 2500,
    suffix: "+",
    label: "Colleges Represented",
    subtext: "Institutions across India and top international technological universities",
    isVerifiedPlaceholder: false,
  },
  {
    id: "prize",
    value: "₹50L+",
    numericTarget: 50,
    suffix: "L+",
    label: "Prizes & Grants",
    subtext: "Cash awards, incubation grants, mentorship & computing credits",
    isVerifiedPlaceholder: false,
  },
  {
    id: "countries",
    value: "60+",
    numericTarget: 60,
    suffix: "+",
    label: "Countries Engaged",
    subtext: "International competitors, visiting delegates and keynote speakers",
    isVerifiedPlaceholder: false,
  },
];
