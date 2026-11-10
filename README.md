<div align="center">

# 🌐 TECHFEST 3D — BEYOND DIMENSIONS
### Asia's Largest Science & Technology Festival | IIT Bombay

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r169-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![React Three Fiber](https://img.shields.io/badge/R3F-8.17-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://docs.pmnd.rs/react-three-fiber)
[![GSAP](https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=black)](https://greensock.com/gsap/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  A premium, interactive, 3D WebGL web platform built with a <b>Bright Premium Aesthetic</b> (Apple-style presentation, glassmorphism, dynamic physical refraction, GSAP ScrollTrigger, and real-time procedural Web Audio).
</p>

[Explore Sections](#-comprehensive-website-architecture) • [Getting Started](#-getting-started) • [Evaluator Presentation](#-presentation-highlights-for-college-evaluators)

</div>

---

## 🌟 Executive Overview & Design Vision

**Techfest 3D — Beyond Dimensions** is a production-grade, interactive 3D web experience designed for **Techfest, IIT Bombay** (29th Edition). 

Rejecting typical dark cyberpunk tropes, this platform establishes a **Bright Premium Theme** inspired by Apple product announcements, modern architectural WebGL showcases, and high-end digital design portfolios.

### 🎨 Thematic Palette & Design Tokens
* **Canvas & Surfaces**: Soft Slate White (`#F8FAFC`), Ice Blue (`#EAF5FF`), Light Lavender (`#F1EDFF`)
* **Vibrant Accents**: Electric Blue (`#2864FF`), Vibrant Violet (`#7957FF`), Cyan Glow (`#36C5F0`), Solar Coral (`#FF826E`), Amber Light (`#FFB45C`)
* **Visual Stylings**: Multi-layered glassmorphism (`backdrop-filter: blur(16px)`), physical glass refraction, iridescent surfaces, procedural Web Audio synthesizer, and physics-based cursor tilt.

---

## 🏛️ Comprehensive Website Architecture

```
                                    ┌───────────────────────┐
                                    │    Navbar & HUD       │  (Active tracker, mobile drawer)
                                    └───────────┬───────────┘
                                                │
                 ┌──────────────────────────────┴──────────────────────────────┐
                 │                                                             │
  ┌──────────────▼──────────────┐                               ┌──────────────▼──────────────┐
  │   Section 2: 3D Hero Core   │                               │    Section 3: Experience    │
  │ • Glass icosahedron (IOR 1.52)│                             │ • 5 Pillars with isolated   │
  │ • 3 Gyro orbital rings      │                               │   interactive 3D shape canvases
  │ • Parallax mouse camera rig │                               │ • Specular glare tilt cards │
  └──────────────┬──────────────┘                               └──────────────┬──────────────┘
                 │                                                             │
  ┌──────────────▼──────────────┐                               ┌──────────────▼──────────────┐
  │   Section 4: Domains Grid   │                               │  Section 5: 3D Scroll (GSAP)│
  │ • 8 Flagship tracks         │                               │ • 3-stage morphing geometry │
  │ • Modal competition specs   │                               │ • Accelerated particle dive │
  └──────────────┬──────────────┘                               └──────────────┬──────────────┘
                 │                                                             │
  ┌──────────────▼──────────────┐                               ┌──────────────▼──────────────┐
  │ Section 6: Innovation Labs  │                               │ Section 7: Why Participate? │
  │ • Real lab prototypes & data│                               │ • Animated live counters    │
  │ • Blueprint viewer modal    │                               │ • 6 Educational advantages  │
  └──────────────┬──────────────┘                               └──────────────┬──────────────┘
                 │                                                             │
                 └──────────────────────────────┬──────────────────────────────┘
                                                │
                                 ┌──────────────▼──────────────┐
                                 │   Section 8: CTA & Pass     │  (Digital QR pass generator + Confetti)
                                 │   Section 9: Campus Footer  │
                                 └─────────────────────────────┘
```

### Key Sections:

1. **🧭 Floating Glass Navigation Bar (`Navbar.tsx`)**
   - Translucent frosted glass pill with dynamic scroll elevation.
   - Section tracking active indicators, smooth anchor jumps (`Home`, `Experience`, `Events`, `Dimensions`, `Innovation`, `About`, `Contact`).
   - Responsive mobile menu drawer and interactive pass trigger.

2. **🌌 Immersive 3D Hero Section (`HeroSection.tsx`)**
   - **Heading**: *"THE FUTURE IS BUILT BY THE BOLD."*
   - **Supporting**: *"Explore ideas. Build innovations. Experience the extraordinary."*
   - **Interactive 3D Quantum Core**:
     - Central faceted icosahedron with physical glass transmission (`transmission: 0.88`, `roughness: 0.08`, `ior: 1.52`, `clearcoat: 1.0`).
     - Pulsating inner metallic octahedron and cyan wireframe edges.
     - Three gyroscopic counter-rotating orbital rings with tracking satellite nodes.
     - Levitating glass and chrome buoyant spheres.
     - 650-point volumetric atmospheric particle field.
     - Dynamic camera rig lerping smoothly with cursor and touch coordinates.
   - **Floating HUD Cards**: Real-time UNESCO patronization badges, open registration indicator, and exploration CTAs.

3. **✨ The Experience Odyssey (`ExperienceSection.tsx`)**
   - **Heading**: *"NOT JUST AN EVENT. AN EXPERIENCE."*
   - 5 foundational pillars: **Innovation**, **Technology**, **Creativity**, **Competition**, **Collaboration**.
   - **Interactive Mini 3D Canvases**: Each card embeds a live interactive 3D geometric shape (icosahedron, torus, octahedron, tetrahedron, sphere) that responds dynamically when hovered.
   - Physics-based 3D card tilt with mouse-tracking specular glare.

4. **🚀 Explore the Domains (`DomainsSection.tsx` & `DomainModal.tsx`)**
   - 8 dedicated disciplines:
     1. **Artificial Intelligence** (LLMs, Multi-Agent Systems, Vision, Edge AI)
     2. **Robotics & Automation** (RoboWars, Swarm Drones, Search-and-Rescue Quadrupeds)
     3. **Coding & Programming** (CodeMatrix ICPC, 36h National Hackathon, CTF Defense)
     4. **Space & Science** (Mars Rover Challenge, CubeSat Avionics, Orbital Mechanics)
     5. **Engineering Innovation** (Formula Green EV, Solid-Oxide Hydrogen, Smart Microgrids)
     6. **Entrepreneurship** (Seed Pitch Fest, PMF Clinic, DeepTech Grants)
     7. **Design & Creativity** (Spatial UI / VisionOS Jam, Speculative Hardware, Generative Art)
     8. **Emerging Technologies** (Quantum Annealing, Brain-Computer Interfaces, Synthetic Biology)
   - Filter tags and interactive detail modals featuring flagship prize breakdowns, team sizes, and one-click registration integration.

5. **🌀 3D Dimension Voyage (`ScrollExperienceSection.tsx`)**
   - Dedicated full-screen scroll experience driven by **GSAP ScrollTrigger**.
   - As the visitor scrolls:
     - Central 3D hyper-structure morphs from a dense dodecahedron into an expanding Mobius torus knot and stellar array.
     - Camera dives through the coordinate space creating tangible cinematic depth.
     - Drifting particle vortex accelerates based on scroll momentum.
     - Background radial gradients shift harmoniously between Electric Blue, Violet, and Cyan.
     - Three narrative milestones reveal in synchronized stages (*Quantum Dawn*, *Dimensional Convergence*, *Cognitive Singularity*).

6. **💡 Innovation Showcase (`InnovationSection.tsx` & `ProjectModal.tsx`)**
   - **Heading**: *"IDEAS THAT MOVE THE WORLD."*
   - Deep-tech research exhibits from IIT Bombay labs and global partners (e.g., *Aura-X Neural Prosthetic*, *Valkyrie Quadruped*, *Pratham-II Lunar Micro-Lander*, *HydroFlow Hydrogen Electrolyzer*).
   - Category filtering, real hardware benchmark metrics, and blueprint inspection modals.

7. **🏆 Why Participate? (`WhyParticipateSection.tsx`)**
   - 6 key growth advantages (*Learn Beyond Classrooms*, *Compete with Top Minds*, *Collaborate with Innovators*, *Explore Emerging Frontiers*, *Build Practical Experience*, *Showcase Ingenuity*).
   - **Animated Statistics Counter**: Benchmark metrics (*175,000+ Footfall*, *2,500+ Colleges*, *₹50L+ Prizes & Grants*, *60+ Countries*).

8. **🎯 Final Call to Action (`CTASection.tsx`)**
   - **Heading**: *"YOUR NEXT BIG IDEA STARTS HERE."*
   - Ambient floating 3D polyhedral composition with soft volumetric lighting.
   - One-click trigger for festival passes and competition registrations.

9. **🌐 Footer & Campus Hub (`FooterSection.tsx`)**
   - Official Techfest IIT Bombay branding, Student Activity Centre address, verified social media placeholders, and smooth back-to-top button.

### 🎵 Procedural Web Audio Ambient Soundtrack (`AudioController.tsx`)
- Built-in Web Audio API synthesizer generating peaceful harmonic ambient tones in a pentatonic scale.
- Completely self-contained: no external audio files or network requests required. Toggleable anytime via bottom-left pill.

### 🎫 Interactive Festival Pass Generator (`RegisterModal.tsx`)
- Complete registration workflow with input validation, track selection, celebratory confetti burst (`canvas-confetti`), and an instantly generated digital pass with unique identifier and QR code.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology |
|---|---|
| **Framework** | React 18.3.1 + Vite 5.4 |
| **Language** | TypeScript (ES2020) |
| **3D Engine** | Three.js + @react-three/fiber + @react-three/drei |
| **Scroll Animation** | GSAP 3.12 + ScrollTrigger |
| **UI Motion** | Framer Motion 11 |
| **Styling** | Tailwind CSS 3.4 + Custom Glassmorphism Utilities |
| **Icons** | Lucide React |
| **Special FX** | Canvas Confetti, Web Audio API |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended, tested on Node v24)
- **npm** (v9.0 or higher)

### 1. Installation
Clone the repository or navigate to the project directory:
```bash
git clone https://github.com/hattaliomkar07-ogh/techfest-3d.git
cd techfest-3d
npm install
```

### 2. Development Server
Start the local Vite development server:
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 3. Production Build & Preview
To create an optimized production bundle:
```bash
npm run build
npm run preview
```
The optimized assets will be emitted into the `dist/` directory with code splitting (`three`, `r3f`, `animation`, `vendor`).

---

## 💻 Directory Structure

```
techfest-3d/
├── public/
│   └── favicon.svg               # SVG Favicon badge
├── src/
│   ├── animations/               # Animation helper hooks & timeline presets
│   ├── components/
│   │   ├── AudioController.tsx   # Procedural Web Audio synthesizer
│   │   ├── DomainModal.tsx       # Flagship competitions modal
│   │   ├── Navbar.tsx            # Floating frosted navigation pill
│   │   ├── ProjectModal.tsx      # Deep-tech blueprint modal
│   │   ├── RegisterModal.tsx     # Pass claiming form & confetti
│   │   └── TiltCard.tsx          # 3D interactive physics tilt card
│   ├── data/
│   │   ├── domainsData.ts        # 8 domain specifications & prizes
│   │   ├── experienceData.ts     # 5 experience pillars & geometry
│   │   ├── projectsData.ts       # Deep-tech exhibit blueprints
│   │   └── statsData.ts          # Festival metrics & benefits
│   ├── hooks/
│   │   ├── useMediaQuery.ts      # Responsive & reduced motion detector
│   │   └── useMousePosition.ts   # Lerped mouse & touch tracking
│   ├── sections/
│   │   ├── CTASection.tsx        # Section 8: Call to Action with 3D canvas
│   │   ├── DomainsSection.tsx    # Section 4: 8 Domains grid
│   │   ├── ExperienceSection.tsx # Section 3: 5 Pillars & mini 3D shapes
│   │   ├── FooterSection.tsx     # Section 9: IIT Bombay campus footer
│   │   ├── HeroSection.tsx       # Section 2: 3D Quantum Core Hero
│   │   ├── InnovationSection.tsx # Section 6: Research project showcase
│   │   ├── ScrollExperienceSection.tsx # Section 5: GSAP ScrollTrigger 3D
│   │   └── WhyParticipateSection.tsx   # Section 7: Benefits & animated stats
│   ├── styles/
│   │   └── index.css             # Glassmorphism, glow & typography styles
│   ├── three/
│   │   ├── FloatingParticles.tsx # 650-point particle field
│   │   ├── GlassSpheres.tsx      # Refractive floating glass pearls
│   │   ├── HeroCameraRig.tsx     # Parallax camera controller
│   │   ├── HeroCanvas.tsx        # WebGL canvas with error fallback
│   │   ├── HeroScene.tsx         # Lighting and composition assembler
│   │   ├── MiniShape.tsx         # Interactive 3D shapes for cards
│   │   ├── OrbitalRings.tsx      # 3 Gyroscopic counter-rotating rings
│   │   ├── QuantumCore.tsx       # Faceted physical glass icosahedron
│   │   ├── ScrollTransformCanvas.tsx # 3D scroll canvas wrapper
│   │   └── ScrollTransformScene.tsx  # Morphing hyper-structure & camera dive
│   ├── App.tsx                   # Master coordinator & state
│   └── main.tsx                  # Application bootstrap
├── index.html                    # HTML5 entry with Plus Jakarta Sans & Space Grotesk
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🏆 Presentation Highlights for College Evaluators

1. **Bright Theme Elegance**: Avoids dark cliché cyberpunk styles; demonstrates sophisticated mastery over white/ice-blue glassmorphism, soft ambient shadows, and editorial typography.
2. **Real WebGL & Three.js Physics**: Features genuine 3D geometries, `MeshPhysicalMaterial` transmission, clearcoat roughness, and specular reflections rather than static video loops or CSS 2D approximations.
3. **Scroll-Driven GSAP Transformation**: Section 5 utilizes GSAP ScrollTrigger to scrub 3D rotations, geometric morphing, particle velocity, and camera coordinates synchronously with scroll position.
4. **Interactive 3D Cards**: Section 3 cards each run an isolated interactive R3F canvas that accelerates when hovered, paired with 3D perspective tilt.
5. **Robust Error Resilience & Performance**: Includes WebGL fallback boundaries, responsive DPR clamp (`[1, 1.5]`), lazy chunk splitting, and `prefers-reduced-motion` compliance.
6. **Zero Dead Ends**: Every single button, modal, filter tab, registration flow, and audio chime is fully implemented and operational.

---

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

*Techfest, IIT Bombay &bull; Designed & Developed with Precision.*
