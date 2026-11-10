export interface DomainItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  flagshipEvents: {
    name: string;
    description: string;
    teamSize: string;
    prize: string;
  }[];
  totalPrize: string;
  stats: { label: string; value: string }[];
  tags: string[];
  color: {
    from: string;
    to: string;
    border: string;
    bgGlow: string;
    badge: string;
  };
  icon: string;
}

export const DOMAINS: DomainItem[] = [
  {
    id: "ai-data",
    title: "Artificial Intelligence",
    category: "Neural Systems & ML",
    shortDesc: "Architect next-generation foundation models, autonomous agents, computer vision pipelines and generative neural interfaces.",
    fullDesc: "The AI domain pushes boundaries across large language architectures, reinforcement learning algorithms, multimodal diffusion networks and edge ML inference. Compete against top researchers and engineers solving real-world computer vision, NLP and generative AI challenges.",
    flagshipEvents: [
      {
        name: "Generative AI Grand Challenge",
        description: "Develop autonomous multi-agent reasoning workflows solving complex enterprise and societal bottlenecks.",
        teamSize: "2-4 Members",
        prize: "₹3,50,000",
      },
      {
        name: "Vision-Language Hackathon",
        description: "Train and fine-tune real-time multimodal perception models on custom high-frequency sensor streams.",
        teamSize: "1-3 Members",
        prize: "₹2,00,000",
      },
      {
        name: "Edge AI & Quantization Sprint",
        description: "Compress 7B+ parameter transformer architectures to run sub-10ms on constrained embedded chips.",
        teamSize: "1-3 Members",
        prize: "₹1,50,000",
      },
    ],
    totalPrize: "₹7,00,000",
    stats: [
      { label: "Participants", value: "8,500+" },
      { label: "Submissions", value: "1,200+" },
      { label: "Mentors", value: "35+ Industry Leads" },
    ],
    tags: ["LLMs", "Autonomous Agents", "Computer Vision", "Diffusion", "Edge AI"],
    color: {
      from: "#2864FF",
      to: "#7957FF",
      border: "rgba(40, 100, 255, 0.4)",
      bgGlow: "rgba(40, 100, 255, 0.12)",
      badge: "bg-blue-50 text-brand-blue border-blue-200",
    },
    icon: "Brain",
  },
  {
    id: "robotics",
    title: "Robotics & Automation",
    category: "Mechatronics & Kinematics",
    shortDesc: "Design bipedal humanoids, agile swarm drones, search-and-rescue rovers and high-precision manipulator arms.",
    fullDesc: "Witness metal and code collide in arena showdowns, obstacle navigations and cooperative swarm systems. From inverse kinematics in robotic arms to dynamic quadruped gaits, the Robotics domain is IIT Bombay's most electric battleground.",
    flagshipEvents: [
      {
        name: "RoboWars: Heavyweight Supremacy",
        description: "The ultimate 60kg combat robotics tournament inside an armored polycarbonate arena.",
        teamSize: "3-6 Members",
        prize: "₹5,00,000",
      },
      {
        name: "Autonomous Drone Swarm Race",
        description: "Indoor obstacle course navigated purely via onboard LiDAR, optical flow and SLAM without GPS.",
        teamSize: "2-4 Members",
        prize: "₹2,75,000",
      },
      {
        name: "Search & Rescue Quadruped Trial",
        description: "Navigate unmapped disaster terrain with simulated victim detection and thermal imaging.",
        teamSize: "2-5 Members",
        prize: "₹2,25,000",
      },
    ],
    totalPrize: "₹10,00,000",
    stats: [
      { label: "Teams", value: "450+" },
      { label: "Arenas", value: "4 Specialized Rings" },
      { label: "Payload Capacity", value: "Up to 60kg" },
    ],
    tags: ["Combat Robotics", "SLAM", "Drones", "Kinematics", "Bipedals"],
    color: {
      from: "#36C5F0",
      to: "#2864FF",
      border: "rgba(54, 197, 240, 0.4)",
      bgGlow: "rgba(54, 197, 240, 0.12)",
      badge: "bg-cyan-50 text-cyan-700 border-cyan-200",
    },
    icon: "Bot",
  },
  {
    id: "coding",
    title: "Coding & Programming",
    category: "Algorithms & Distributed Systems",
    shortDesc: "Compete in lightning algorithmic face-offs, systems programming duels and full-stack architecture marathons.",
    fullDesc: "Craft ultra-performant code under extreme latency constraints. From low-level C++ concurrency to zero-knowledge cryptography and high-throughput microservices, showcase technical precision and speed against the brightest coders globally.",
    flagshipEvents: [
      {
        name: "CodeMatrix: Grand Algorithmic Clash",
        description: "ICPC-style contest featuring competitive programming problems of world finals caliber.",
        teamSize: "Individual",
        prize: "₹2,50,000",
      },
      {
        name: "36-Hour National Hackathon",
        description: "Sprint to architect production-ready cloud-native applications with live deployment tests.",
        teamSize: "2-4 Members",
        prize: "₹4,00,000",
      },
      {
        name: "Capture The Flag (CTF) Cyber Defense",
        description: "Reverse engineer binaries, exploit zero-days and defend sovereign sandbox environments.",
        teamSize: "1-3 Members",
        prize: "₹2,00,000",
      },
    ],
    totalPrize: "₹8,50,000",
    stats: [
      { label: "Coders", value: "14,000+" },
      { label: "Test Cases", value: "250,000+" },
      { label: "Fastest Solve", value: "3m 42s" },
    ],
    tags: ["Algorithms", "Rust/C++", "Distributed Systems", "Cybersecurity", "CTF"],
    color: {
      from: "#7957FF",
      to: "#2864FF",
      border: "rgba(121, 87, 255, 0.4)",
      bgGlow: "rgba(121, 87, 255, 0.12)",
      badge: "bg-purple-50 text-brand-violet border-purple-200",
    },
    icon: "Terminal",
  },
  {
    id: "space",
    title: "Space & Science",
    category: "Aero & Astrophysical Frontiers",
    shortDesc: "Pioneer lunar lander designs, orbital trajectory calculators, sounding rockets and deep-space telemetry.",
    fullDesc: "Dedicated to humanity's quest into the cosmos. Tackle complex orbital mechanics, miniaturized CubeSat avionics, propulsion dynamics and exoplanet atmospheric spectral analysis in partnership with leading aerospace pioneers.",
    flagshipEvents: [
      {
        name: "Mars Rover Challenge",
        description: "Design and pilot an off-grid planetary exploration rover across harsh simulated Martian craters.",
        teamSize: "4-8 Members",
        prize: "₹4,50,000",
      },
      {
        name: "CubeSat Avionics Design",
        description: "Engineer 1U/3U nanosatellite subsystems with attitude control and radiation-hardened circuitry.",
        teamSize: "2-4 Members",
        prize: "₹2,50,000",
      },
      {
        name: "Orbital Mechanics Optimization",
        description: "Simulate interplanetary transfer orbits with gravitational assists under strict fuel budgets.",
        teamSize: "1-2 Members",
        prize: "₹1,50,000",
      },
    ],
    totalPrize: "₹8,50,000",
    stats: [
      { label: "Rovers Built", value: "120+" },
      { label: "Max Payload", value: "25kg Martian Sim" },
      { label: "Global Teams", value: "18 Nations" },
    ],
    tags: ["Astrodynamics", "CubeSats", "Mars Rover", "Avionics", "Rocketry"],
    color: {
      from: "#2864FF",
      to: "#36C5F0",
      border: "rgba(40, 100, 255, 0.4)",
      bgGlow: "rgba(40, 100, 255, 0.1)",
      badge: "bg-sky-50 text-sky-700 border-sky-200",
    },
    icon: "Orbit",
  },
  {
    id: "engineering",
    title: "Engineering Innovation",
    category: "Hardware & Sustainable Systems",
    shortDesc: "Transform raw physics into sustainable electric mobility, green hydrogen grids and microgrid infrastructure.",
    fullDesc: "Real-world engineering triumphs require multidisciplinary excellence across thermodynamics, structural integrity, power electronics and fluid mechanics. Build solutions solving national decarbonization and industrial resilience.",
    flagshipEvents: [
      {
        name: "Formula Green EV Prototype",
        description: "Design high-torque electric powertrain chassis with regenerative braking and BMS telemetry.",
        teamSize: "5-15 Members",
        prize: "₹6,00,000",
      },
      {
        name: "Clean Hydrogen & Fuel Cell Sprint",
        description: "Prototype scalable water-electrolysis setups and hydrogen storage vessels with zero emissions.",
        teamSize: "2-4 Members",
        prize: "₹2,50,000",
      },
      {
        name: "Smart Microgrid Challenge",
        description: "Simulate resilient decentralised renewable microgrids under sudden industrial demand surges.",
        teamSize: "2-3 Members",
        prize: "₹1,50,000",
      },
    ],
    totalPrize: "₹10,00,000",
    stats: [
      { label: "Vehicles Tested", value: "60+ EVs" },
      { label: "Energy Saved", value: "4.2 MWh Sim" },
      { label: "Patents Filed", value: "22+" },
    ],
    tags: ["EV Powertrains", "Green Hydrogen", "BMS", "CAD/CFD", "Grid Tech"],
    color: {
      from: "#36C5F0",
      to: "#7957FF",
      border: "rgba(54, 197, 240, 0.4)",
      bgGlow: "rgba(54, 197, 240, 0.1)",
      badge: "bg-teal-50 text-teal-700 border-teal-200",
    },
    icon: "Cpu",
  },
  {
    id: "entrepreneurship",
    title: "Entrepreneurship",
    category: "Ventures & Venture Capital",
    shortDesc: "Pitch disruptive deep-tech startups to top tier venture funds, angel syndicates and legendary founders.",
    fullDesc: "Bridging laboratory breakthrough to commercial viability. Techfest's Entrepreneurship domain unites seed-stage innovators with tier-1 venture investors, providing seed grant tracks, product-market fit clinics and angel networks.",
    flagshipEvents: [
      {
        name: "Techfest Seed Pitch Fest",
        description: "Live 5-minute pitches to an elite jury of VC partners with immediate investment syndication.",
        teamSize: "1-4 Co-founders",
        prize: "₹15,00,000 Grant Pool",
      },
      {
        name: "Product-Market Fit Clinic",
        description: "Intensive 48-hour teardown of unit economics, go-to-market funnels and customer validation.",
        teamSize: "1-3 Members",
        prize: "₹2,00,000",
      },
      {
        name: "Deep-Tech Commercialization Grant",
        description: "Special institutional fund supporting university research spin-offs ready for scale.",
        teamSize: "Research Teams",
        prize: "₹10,00,000",
      },
    ],
    totalPrize: "₹27,00,000+",
    stats: [
      { label: "VCs Attending", value: "40+ Funds" },
      { label: "Startups Funded", value: "18+ Past Cohort" },
      { label: "Total Raised", value: "₹45 Cr+" },
    ],
    tags: ["DeepTech Seed", "Venture Capital", "Unit Economics", "GTM Strategy"],
    color: {
      from: "#FF826E",
      to: "#FFB45C",
      border: "rgba(255, 130, 110, 0.4)",
      bgGlow: "rgba(255, 130, 110, 0.12)",
      badge: "bg-orange-50 text-orange-700 border-orange-200",
    },
    icon: "Rocket",
  },
  {
    id: "design",
    title: "Design & Creativity",
    category: "Spatial Computing & Interaction",
    shortDesc: "Craft evocative spatial UI, 3D digital experiences, speculative hardware concepts and generative art.",
    fullDesc: "Technology without thoughtful design lacks human resonance. Immerse yourself in spatial computing paradigms (VisionOS/WebXR), physical computing prototypes, brand aesthetics and generative algorithmic installations.",
    flagshipEvents: [
      {
        name: "Spatial UI / VisionOS Jam",
        description: "Design immersive 3D spatial user interfaces for next-generation mixed reality devices.",
        teamSize: "1-3 Designers",
        prize: "₹2,50,000",
      },
      {
        name: "Speculative Hardware Design",
        description: "Craft physical industrial forms and interactive ergonomic concepts for technology in 2040.",
        teamSize: "1-3 Members",
        prize: "₹1,75,000",
      },
      {
        name: "Generative Art & Sound Exhibition",
        description: "Interactive real-time audio-visual canvas responding to live audience proximity and gestures.",
        teamSize: "1-2 Artists",
        prize: "₹1,50,000",
      },
    ],
    totalPrize: "₹5,75,000",
    stats: [
      { label: "Installations", value: "30+ Live Exhibits" },
      { label: "Creative Tools", value: "Blender, Three.js, Figma" },
      { label: "Jury", value: "Apple & Pentagram Alumni" },
    ],
    tags: ["Spatial Computing", "UX Architecture", "Industrial Design", "Generative Art"],
    color: {
      from: "#7957FF",
      to: "#FF826E",
      border: "rgba(121, 87, 255, 0.4)",
      bgGlow: "rgba(121, 87, 255, 0.1)",
      badge: "bg-rose-50 text-rose-700 border-rose-200",
    },
    icon: "Layers",
  },
  {
    id: "emerging-tech",
    title: "Emerging Technologies",
    category: "Quantum, Biotech & Next-Gen",
    shortDesc: "Unlock quantum algorithmic supremacy, synthetic biological circuits and brain-computer interfaces.",
    fullDesc: "Step into the bleeding edge of human capability. Experiment with Qiskit quantum circuits, DNA storage encoding algorithms, neural signal processing pipelines and post-quantum cryptographic primitives.",
    flagshipEvents: [
      {
        name: "Quantum Computing Hackathon",
        description: "Formulate quantum annealing and variational quantum eigensolvers for chemical simulation.",
        teamSize: "1-3 Members",
        prize: "₹3,50,000",
      },
      {
        name: "Brain-Computer Interface (BCI) Challenge",
        description: "Decode EEG sensor signals in real time to steer robotic actuators or software interfaces.",
        teamSize: "2-4 Members",
        prize: "₹2,50,000",
      },
      {
        name: "Synthetic Biology Code Jam",
        description: "Design algorithmic genetic circuits and metabolic engineering models for biomanufacturing.",
        teamSize: "1-3 Members",
        prize: "₹2,00,000",
      },
    ],
    totalPrize: "₹8,00,000",
    stats: [
      { label: "Quantum Qubits Sim", value: "34+ Qubits" },
      { label: "BCI Channels", value: "16-Channel Dry EEG" },
      { label: "Labs Partnered", value: "12 National Labs" },
    ],
    tags: ["Quantum Qiskit", "BCI & EEG", "Synthetic Bio", "Post-Quantum Crypto"],
    color: {
      from: "#2864FF",
      to: "#FF826E",
      border: "rgba(40, 100, 255, 0.4)",
      bgGlow: "rgba(40, 100, 255, 0.1)",
      badge: "bg-indigo-50 text-indigo-700 border-indigo-200",
    },
    icon: "Sparkles",
  },
];
