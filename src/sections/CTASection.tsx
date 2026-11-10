import { ArrowRight, Compass, Sparkles, CheckCircle2 } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';

function FloatingCtaScene() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 3]} intensity={2.0} color="#FFFFFF" />
      <pointLight position={[-3, -3, 2]} intensity={2.0} color="#2864FF" />
      <pointLight position={[3, 3, 2]} intensity={2.0} color="#7957FF" />

      <Float speed={2.5} rotationIntensity={1.2} floatIntensity={1.2}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.6, 0]} />
          <meshPhysicalMaterial
            color="#EAF5FF"
            emissive="#2864FF"
            emissiveIntensity={0.25}
            roughness={0.08}
            metalness={0.2}
            transmission={0.88}
            thickness={1.5}
            ior={1.5}
            clearcoat={1.0}
            transparent
            opacity={0.85}
          />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh position={[2.2, 1.2, -1]}>
          <torusGeometry args={[0.7, 0.1, 16, 32]} />
          <meshStandardMaterial color="#36C5F0" emissive="#36C5F0" emissiveIntensity={0.5} metalness={0.9} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.0} floatIntensity={1.0}>
        <mesh position={[-2.2, -1.0, -0.8]}>
          <octahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial color="#FF826E" emissive="#FF826E" emissiveIntensity={0.4} metalness={0.8} />
        </mesh>
      </Float>
    </>
  );
}

interface CTASectionProps {
  onOpenRegister: () => void;
}

export function CTASection({ onOpenRegister }: CTASectionProps) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      <div className="relative rounded-3xl md:rounded-[40px] overflow-hidden p-8 sm:p-14 lg:p-20 bg-gradient-to-br from-brand-navy via-slate-900 to-indigo-950 text-white shadow-2xl border border-slate-700/60">
        {/* Floating 3D Background Canvas */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 1.5]}
            gl={{ alpha: true, antialias: true }}
          >
            <FloatingCtaScene />
          </Canvas>
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-violet/30 rounded-full blur-3xl pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-2xl text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Join the Next Dimension
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-white leading-tight mb-5">
            YOUR NEXT BIG IDEA <br />
            <span className="bg-gradient-to-r from-brand-cyan via-blue-300 to-indigo-300 bg-clip-text text-transparent">
              STARTS HERE.
            </span>
          </h2>

          <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-xl">
            Step into the world of innovation, creativity and limitless possibilities.
            Register now to claim your official digital delegate pass or submit your team&apos;s competition entry.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              onClick={onOpenRegister}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-[length:200%_auto] hover:bg-right text-white font-bold text-sm shadow-glow-blue hover:shadow-glow-violet hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2.5"
            >
              <span>Explore Techfest</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('domains')}
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold text-sm border border-white/30 hover:border-white transition-all flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-brand-cyan" />
              <span>Discover Events</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free Student Entry</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Certificate Verification</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Campus Accommodation Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

