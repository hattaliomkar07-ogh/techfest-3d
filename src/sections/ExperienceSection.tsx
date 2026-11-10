import { useState } from 'react';
import { Zap, Cpu, Sparkles, Trophy, Globe, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/experienceData';
import { TiltCard } from '../components/TiltCard';
import { MiniShapeCanvas } from '../three/MiniShape';

const ICONS_MAP: Record<string, React.ElementType> = {
  Zap,
  Cpu,
  Sparkles,
  Trophy,
  Globe,
};

export function ExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Section Background Subtle Glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-violet/5 rounded-full blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-brand-blue text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          The Techfest Odyssey
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
          NOT JUST AN EVENT. <br />
          <span className="text-gradient-accent">AN EXPERIENCE.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          Over three electric days, IIT Bombay transforms into an epicenter of raw curiosity,
          pioneering research, and radical problem solving. Discover the five foundational pillars
          that fuel this global phenomenon.
        </p>
      </div>

      {/* 5 Layered Experience Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {EXPERIENCE_PILLARS.map((pillar, idx) => {
          const IconComponent = ICONS_MAP[pillar.iconName] || Zap;
          const isHovered = hoveredCard === pillar.id;

          return (
            <div
              key={pillar.id}
              className={idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}
              onMouseEnter={() => setHoveredCard(pillar.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <TiltCard maxTilt={8} className="h-full rounded-3xl">
                <div
                  className={`h-full p-7 rounded-3xl glass-card transition-all duration-300 flex flex-col justify-between border ${
                    isHovered
                      ? 'border-brand-blue/50 shadow-glass-hover bg-white'
                      : 'border-white/80 shadow-glass bg-white/70'
                  }`}
                >
                  <div>
                    {/* Top Tag and Metrics Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {pillar.tag}
                      </span>
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg border ${pillar.color.pill}`}>
                        {pillar.metrics}
                      </span>
                    </div>

                    {/* Interactive 3D Geometry Preview Window */}
                    <div className="relative w-full h-36 mb-4 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-50 to-white/60 border border-slate-100 flex items-center justify-center">
                      <MiniShapeCanvas
                        shapeType={pillar.shapeType}
                        color={pillar.color.accent}
                        isHovered={isHovered}
                      />
                      <div className="absolute top-2 left-2 w-8 h-8 rounded-lg bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
                        <IconComponent className="w-4 h-4 text-brand-navy" />
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold font-display text-brand-navy mb-2 flex items-center justify-between">
                      <span>{pillar.title}</span>
                      <ArrowUpRight
                        className={`w-4 h-4 text-slate-300 transition-transform duration-300 ${
                          isHovered ? 'translate-x-0.5 -translate-y-0.5 text-brand-blue' : ''
                        }`}
                      />
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Quote footer */}
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs italic text-slate-500 font-medium">
                      &ldquo;{pillar.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </TiltCard>
            </div>
          );
        })}
      </div>
    </section>
  );
}

