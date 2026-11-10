export interface ExperiencePillar {
  id: string;
  title: string;
  tag: string;
  description: string;
  quote: string;
  color: {
    accent: string;
    gradient: string;
    bgHover: string;
    pill: string;
    border: string;
  };
  metrics: string;
  iconName: string;
  shapeType: 'torus' | 'octahedron' | 'icosahedron' | 'tetrahedron' | 'sphere';
}

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    id: "innovation",
    title: "Radical Innovation",
    tag: "01 / Breakthroughs",
    description: "Bridging bold academic theoretical breakthroughs with production-grade engineering prototypes to solve planetary challenges.",
    quote: "True innovation begins where conventional textbook constraints end.",
    color: {
      accent: "#2864FF",
      gradient: "from-blue-500/20 to-indigo-500/10",
      bgHover: "hover:border-blue-400/50 hover:shadow-blue-500/10",
      pill: "bg-blue-50 text-brand-blue border-blue-200",
      border: "border-blue-100",
    },
    metrics: "120+ Live Prototypes",
    iconName: "Zap",
    shapeType: "icosahedron",
  },
  {
    id: "technology",
    title: "Deep Technology",
    tag: "02 / Computing & Physics",
    description: "Hands-on immersion with quantum circuits, foundation models, humanoid actuators and autonomous aerospace navigation.",
    quote: "Democratizing state-of-the-art tech through interactive open access.",
    color: {
      accent: "#7957FF",
      gradient: "from-purple-500/20 to-violet-500/10",
      bgHover: "hover:border-purple-400/50 hover:shadow-purple-500/10",
      pill: "bg-purple-50 text-brand-violet border-purple-200",
      border: "border-purple-100",
    },
    metrics: "45+ Specialized Labs",
    iconName: "Cpu",
    shapeType: "torus",
  },
  {
    id: "creativity",
    title: "Creative Synthesis",
    tag: "03 / Spatial & Aesthetics",
    description: "Where aesthetic mastery meets algorithmic rigor. Spatial computing installations, generative audio, and human-first design.",
    quote: "Beauty is the ultimate expression of sophisticated engineering.",
    color: {
      accent: "#FF826E",
      gradient: "from-rose-500/20 to-pink-500/10",
      bgHover: "hover:border-rose-400/50 hover:shadow-rose-500/10",
      pill: "bg-rose-50 text-rose-600 border-rose-200",
      border: "border-rose-100",
    },
    metrics: "25+ Spatial Installations",
    iconName: "Sparkles",
    shapeType: "octahedron",
  },
  {
    id: "competition",
    title: "Elite Competition",
    tag: "04 / Arena Showdowns",
    description: "Electrifying arenas pitting the globe's sharpest engineers against one another across combat robotics, CTFs, and algorithmic grand slams.",
    quote: "Forging technical brilliance under intense time and physical limits.",
    color: {
      accent: "#36C5F0",
      gradient: "from-cyan-500/20 to-blue-500/10",
      bgHover: "hover:border-cyan-400/50 hover:shadow-cyan-500/10",
      pill: "bg-cyan-50 text-cyan-600 border-cyan-200",
      border: "border-cyan-100",
    },
    metrics: "₹50L+ Cash Grants & Honors",
    iconName: "Trophy",
    shapeType: "tetrahedron",
  },
  {
    id: "collaboration",
    title: "Global Collaboration",
    tag: "05 / Network & Synergy",
    description: "An international meeting ground uniting 175,000+ passionate students, Nobel laureates, astronauts, VC partners, and industry leaders.",
    quote: "Extraordinary ideas flourish when diverse perspectives collide.",
    color: {
      accent: "#FFB45C",
      gradient: "from-amber-500/20 to-orange-500/10",
      bgHover: "hover:border-amber-400/50 hover:shadow-amber-500/10",
      pill: "bg-amber-50 text-amber-700 border-amber-200",
      border: "border-amber-100",
    },
    metrics: "60+ Participating Nations",
    iconName: "Globe",
    shapeType: "sphere",
  },
];

