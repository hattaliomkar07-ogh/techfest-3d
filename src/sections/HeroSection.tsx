import { ArrowRight, ChevronDown, Compass, Award, ShieldCheck, Sparkles } from 'lucide-react';
import { HeroCanvas } from '../three/HeroCanvas';
import { useMousePosition } from '../hooks/useMousePosition';
import { TiltCard } from '../components/TiltCard';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export function HeroSection({ onOpenRegister }: HeroSectionProps) {
  const mouse = useMousePosition();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-8 overflow-hidden bg-radial-hero"
    >
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-brand-violet/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Content Area: Split 3D & Typography */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 z-10">
        {/* Left Column: Hero Typography & Actions */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-6 lg:pt-0">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-brand-blue/30 shadow-sm backdrop-blur-md mb-6 hover:border-brand-blue transition-colors">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-xs font-semibold text-brand-blue tracking-wide uppercase">
              Techfest 2026 • 29th Edition
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-xs font-medium text-slate-600">IIT Bombay</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-brand-navy leading-[1.08] mb-6">
            THE FUTURE IS <br />
            <span className="text-gradient-primary">BUILT BY THE</span> <br />
            <span className="relative">
              <span className="text-gradient-accent">BOLD.</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-violet to-brand-cyan rounded-full opacity-60" />
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed font-normal">
            Explore ideas. Build innovations. Experience the extraordinary.
            Immerse yourself in Asia&apos;s most prestigious science and technology festival,
            where physical boundaries dissolve into multidimensional exploration.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={() => scrollTo('experience')}
              className="px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-blue via-brand-violet to-brand-blue bg-[length:200%_auto] hover:bg-right text-white font-semibold text-sm shadow-glow-blue hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              <Compass className="w-4 h-4" />
              <span>Explore the Experience</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => scrollTo('domains')}
              className="px-6 py-3.5 rounded-full bg-white/90 hover:bg-white text-brand-navy font-semibold text-sm border border-slate-200/90 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-brand-violet" />
              <span>Discover Events</span>
            </button>
          </div>

          {/* Highlights Mini Row */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/60 w-full max-w-lg">
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-navy">175k+</div>
              <div className="text-xs text-slate-500 font-medium">Annual Attendees</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-blue">₹50L+</div>
              <div className="text-xs text-slate-500 font-medium">Prize Pool & Grants</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-display text-brand-violet">60+</div>
              <div className="text-xs text-slate-500 font-medium">Global Nations</div>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Canvas with Floating Real-time HUD Cards */}
        <div className="w-full lg:w-1/2 h-[450px] sm:h-[540px] lg:h-[620px] relative flex items-center justify-center">
          {/* Interactive WebGL 3D Canvas */}
          <div className="w-full h-full relative z-10">
            <HeroCanvas pointer={{ x: mouse.normalizedX, y: mouse.normalizedY }} />
          </div>

          {/* Floating Card 1: Top Right */}
          <div className="absolute top-4 right-0 sm:right-6 z-20 hidden sm:block animate-float-slow">
            <TiltCard maxTilt={8}>
              <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-brand-blue">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">ISO 9001:2015</div>
                  <div className="text-[10px] text-slate-500">Patronized by UNESCO & UNICEF</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Floating Card 2: Bottom Left */}
          <div className="absolute bottom-6 left-0 sm:left-4 z-20 hidden sm:block animate-float-reverse">
            <TiltCard maxTilt={8} onClick={onOpenRegister}>
              <div className="glass-card px-4 py-3 rounded-2xl flex items-center gap-3 cursor-pointer group hover:border-brand-violet/50 transition-all">
                <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-brand-violet group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    <span>Grand Competitions</span>
                    <ArrowRight className="w-3 h-3 text-brand-violet" />
                  </div>
                  <div className="text-[10px] text-slate-500">Registrations Open for 2026</div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* 3D Interaction Hint Badge */}
          <div className="absolute bottom-2 right-4 z-20 pointer-events-none">
            <span className="text-[11px] font-medium text-slate-400 bg-white/70 px-2.5 py-1 rounded-full border border-slate-200/60 backdrop-blur-xs flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
              Interactive 3D • Move cursor to explore
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Scroll-Down Indicator */}
      <div className="w-full flex justify-center items-center pt-4 z-10">
        <button
          onClick={() => scrollTo('experience')}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-brand-blue transition-colors group"
          aria-label="Scroll to experience"
        >
          <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 group-hover:text-brand-blue">
            Scroll to Discover
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-slate-400 group-hover:text-brand-blue" />
        </button>
      </div>
    </section>
  );
}
