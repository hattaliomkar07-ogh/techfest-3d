export interface ProjectItem {
  id: string;
  title: string;
  category: 'AI & Neural' | 'Robotics' | 'Space Exploration' | 'Green Tech';
  tagline: string;
  summary: string;
  specs: { label: string; value: string }[];
  impact: string;
  innovators: string;
  modelType: string;
  status: 'Prototype Validated' | 'In Field Trials' | 'Patent Granted' | 'Deployed at Scale';
  featuredImage: string;
  badges: string[];
}

export const INNOVATION_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Aura-X Neural Prosthetic Interface",
    category: "AI & Neural",
    tagline: "Sub-5ms closed-loop myoelectric neural decoder for multi-finger intuitive control.",
    summary: "A revolutionary biomedical prosthetic hand driven by high-density surface EMG sensors and an ultra-low-power neuromorphic chip. Features real-time tactile haptic feedback streamed back to the patient via non-invasive transcutaneous nerve stimulation.",
    specs: [
      { label: "Latency", value: "< 4.8ms" },
      { label: "Degrees of Freedom", value: "16 Active Joints" },
      { label: "Battery Life", value: "36+ Hours Continuous" },
      { label: "Weight", value: "380 grams (Carbon Fiber)" },
    ],
    impact: "Restores natural grip reflex and independent finger articulation to upper-limb amputees at 1/10th the cost of proprietary European bionic systems.",
    innovators: "Biomedical Systems Lab, IIT Bombay",
    modelType: "Neuromorphic SNN",
    status: "In Field Trials",
    featuredImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80",
    badges: ["Healthcare Gold Medal", "Best Hardware 2025", "Patented"],
  },
  {
    id: "proj-2",
    title: "Valkyrie Agile Quadruped Robot",
    category: "Robotics",
    tagline: "Autonomous search-and-rescue quadruped with terrain-adaptive dynamic balance.",
    summary: "Built for extreme search and rescue in disaster collapse zones, nuclear inspection and extraterrestrial mapping. Powered by high-torque quasi-direct-drive actuators, 3D LiDAR SLAM and an onboard vision-language model for hazard identification.",
    specs: [
      { label: "Payload Capacity", value: "18 kg" },
      { label: "Max Speed", value: "4.2 m/s (Sprint)" },
      { label: "Terrain Incline", value: "Up to 42° slope" },
      { label: "Perception", value: "Livox 3D LiDAR + RGBD" },
    ],
    impact: "Successfully navigated complex rubble simulations at NDMA Mumbai, identifying thermal signatures of survivors under concrete slabs.",
    innovators: "Robotics & Autonomous Systems Group",
    modelType: "Model Predictive Control + RL",
    status: "Prototype Validated",
    featuredImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80",
    badges: ["DRDO Commendation", "Autonomous SLAM", "Water Resistant IP67"],
  },
  {
    id: "proj-3",
    title: "Pratham-II Lunar Micro-Lander",
    category: "Space Exploration",
    tagline: "Sub-50kg modular deep-space lander with autonomous visual terrain relative navigation.",
    summary: "Engineered to deliver scientific micro-payloads to the permanently shadowed lunar craters. Features a hybrid green-propellant bipropellant thruster assembly and closed-loop crater hazard avoidance powered by real-time photogrammetry.",
    specs: [
      { label: "Dry Mass", value: "38 kg" },
      { label: "Delta-V Budget", value: "1,850 m/s" },
      { label: "Landing Precision", value: "< 25 meters CEP" },
      { label: "Telemetry", value: "X-Band Deep Space Mesh" },
    ],
    impact: "Provides affordable rideshare opportunities for university science payloads exploring lunar water-ice deposits at the Lunar South Pole.",
    innovators: "Student Satellite Project & Aerospace Eng.",
    modelType: "Optical Terrain Hazard Avoidance",
    status: "Prototype Validated",
    featuredImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    badges: ["ISRO Mentorship Track", "National Aero Winner", "CubeSat Compatible"],
  },
  {
    id: "proj-4",
    title: "HydroFlow Solid-Oxide Electrolyzer",
    category: "Green Tech",
    tagline: "Zero-emission industrial green hydrogen generator with 82% electrical efficiency.",
    summary: "Utilises high-temperature waste heat from thermal plants to split steam into ultra-pure hydrogen gas. Integrates customized nanostructured perovskite catalysts to lower activation energy barriers and eliminate noble metals.",
    specs: [
      { label: "Stack Efficiency", value: "82.4% LHV" },
      { label: "H2 Purity", value: "99.999% Industrial" },
      { label: "Operating Temp", value: "650°C Intermediate" },
      { label: "Degradation Rate", value: "< 0.8% per 1000h" },
    ],
    impact: "Enables zero-emission green hydrogen production below \$1.80/kg, bridging the cost parity curve for heavy transport and steel manufacturing.",
    innovators: "Energy Science & Chemical Eng. Consortium",
    modelType: "Nanocatalytic Solid-Oxide Matrix",
    status: "Patent Granted",
    featuredImage: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80",
    badges: ["Clean Energy Grand Prize", "Zero-Carbon Certified", "Scalable Modular"],
  },
  {
    id: "proj-5",
    title: "Synapse-Grid Edge AI Sensor",
    category: "AI & Neural",
    tagline: "Self-powered acoustic transformer sensor predicting mechanical turbine failure 3 weeks in advance.",
    summary: "Harvesters parasitic vibrational energy directly from machine casings to run continuous 8-bit quantized anomaly detection audio models without any external battery replacement.",
    specs: [
      { label: "Power Draw", value: "85 microwatts" },
      { label: "Inference Speed", value: "1.2ms local" },
      { label: "Frequency Range", value: "20Hz - 96kHz Ultrasonics" },
      { label: "Wireless Protocol", value: "Sub-GHz LoRaWAN" },
    ],
    impact: "Deploys zero-maintenance industrial predictive maintenance across offshore wind farms and heavy manufacturing refineries.",
    innovators: "Microelectronics & VLSI Research Wing",
    modelType: "Ultra-Sparse Audio Transformer",
    status: "Deployed at Scale",
    featuredImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    badges: ["Industry 4.0 Standard", "Self-Powered", "LoRaWAN Ready"],
  },
  {
    id: "proj-6",
    title: "AeroGlide Solar Stratospheric HAPS",
    category: "Space Exploration",
    tagline: "High-Altitude Pseudo-Satellite offering uninterrupted rural 5G connectivity for 90 days.",
    summary: "An ultra-lightweight carbon composite aircraft operating at 65,000 feet above weather systems. Armed with GaAs flexible solar cells and lithium-sulfur batteries to establish emergency communications in natural calamity zones.",
    specs: [
      { label: "Wingspan", value: "32 meters" },
      { label: "Total Mass", value: "72 kg" },
      { label: "Cruising Altitude", value: "20 km (Stratosphere)" },
      { label: "Coverage Radius", value: "100 km Ground Footprint" },
    ],
    impact: "Provides immediate high-speed internet and thermal earth-observation backhaul to remote Himalayan valleys and maritime rescue squads.",
    innovators: "IIT Bombay Aerospace & Unmanned Aerial Systems",
    modelType: "Stratospheric Autonomous Glider",
    status: "In Field Trials",
    featuredImage: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&w=1000&q=80",
    badges: ["Civil Aviation Clearance", "90-Day Endurance", "Carbon Neutral"],
  },
];

