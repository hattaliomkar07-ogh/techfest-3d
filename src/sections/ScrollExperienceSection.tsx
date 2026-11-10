import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollTransformCanvas } from '../three/ScrollTransformCanvas';
import { Sparkles, Layers, Orbit } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function ScrollExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeStage, setActiveStage] = useState<number>(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=200%', // 3 full screen heights of scrubbed scroll
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
          if (self.progress < 0.35) {
            setActiveStage(0);
          } else if (self.progress < 0.7) {
            setActiveStage(1);
          } else {
            setActiveStage(2);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const STAGES = [
    {
      step: '01 / FOUNDATION',
      title: 'QUANTUM DAWN',
      subtitle: 'From Fundamental Physics to Computational Reality',
      description:
        'Every breakthrough in artificial intelligence, aerospace, and robotics begins at the atom. We explore the deep scientific principles that power tomorrow’s technology.',
      icon: Orbit,
      badgeColor: 'bg-blue-100 text-brand-blue border-blue-200',
    },
    {
      step: '02 / CONVERGENCE',
      title: 'DIMENSIONAL CONVERGENCE',
      subtitle: 'Hardware, Code and Human Ingenuity Collide',
      description:
        'Robotics meets neuromorphic intelligence. Autonomous rovers communicate with stratospheric gliders. Theoretical concepts break free into physical kinetic motion.',
      icon: Layers,
      badgeColor: 'bg-purple-100 text-brand-violet border-purple-200',
    },
    {
      step: '03 / HORIZON',
      title: 'COGNITIVE SINGULARITY',
      subtitle: 'Transcending Physical and Technological Boundaries',
      description:
        'Beyond dimensions. A future authored by those audacious enough to imagine the impossible and build it with their own hands.',
      icon: Sparkles,
      badgeColor: 'bg-cyan-100 text-cyan-800 border-cyan-200',
    },
  ];

  return (
    <section
      id="scroll-3d"
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-background-light via-background-ice to-background-lavender"
    >
      {/* Dynamic Background Radial Gradients shifting smoothly */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        style={{
          background:
            activeStage === 0
              ? 'radial-gradient(circle at 60% 50%, rgba(40, 100, 255, 0.12) 0%, transparent 70%)'
              : activeStage === 1
              ? 'radial-gradient(circle at 50% 50%, rgba(121, 87, 255, 0.14) 0%, transparent 70%)'
              : 'radial-gradient(circle at 40% 50%, rgba(54, 197, 240, 0.15) 0%, transparent 70%)',
        }}
      />

      {/* 3D Scene Rendering in Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <ScrollTransformCanvas progress={scrollProgress} />
      </div>

      {/* Overlay Content UI */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-12 pointer-events-none">
        {/* Top Header info */}
        <div className="flex items-center justify-between pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              3D Dimension Scroll Experience
            </span>
          </div>

          {/* Scrub Progress Bar */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 font-mono">
              STAGE {activeStage + 1} / 3
            </span>
            <div className="w-32 h-2 bg-slate-200/80 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-blue to-brand-violet transition-all duration-150"
                style={{ width: `${Math.round(scrollProgress * 100)}%` }}
              />
            </div>
            <span className="text-xs font-mono font-bold text-brand-blue">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>
        </div>

        {/* Narrative Card - Changes smoothly with scroll stage */}
        <div className="max-w-xl pointer-events-auto">
          {STAGES.map((stage, idx) => {
            const isCurrent = activeStage === idx;
            const Icon = stage.icon;

            return (
              <div
                key={idx}
                className={`transition-all duration-700 transform ${
                  isCurrent
                    ? 'opacity-100 translate-y-0 scale-100 block'
                    : 'opacity-0 translate-y-8 scale-95 hidden'
                }`}
              >
                <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/90 shadow-glass">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${stage.badgeColor}`}>
                      {stage.step}
                    </span>
                    <Icon className="w-4 h-4 text-brand-blue" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-brand-navy mb-2">
                    {stage.title}
                  </h3>

                  <h4 className="text-sm sm:text-base font-semibold text-brand-blue mb-3">
                    {stage.subtitle}
                  </h4>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom indicator hint */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>Scroll down to initiate dimensional morphing</span>
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeStage === i ? 'w-6 bg-brand-blue' : 'w-2 bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

