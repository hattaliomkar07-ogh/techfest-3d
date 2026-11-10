import { useState, useEffect } from 'react';
import {
  GraduationCap,
  Trophy,
  Users,
  Compass,
  Wrench,
  Award,
  CheckCircle,
  HelpCircle,
} from 'lucide-react';
import { WHY_PARTICIPATE_BENEFITS, FESTIVAL_METRICS } from '../data/statsData';
import { TiltCard } from '../components/TiltCard';

const BENEFIT_ICONS: Record<string, React.ElementType> = {
  GraduationCap,
  Trophy,
  Users,
  Compass,
  Wrench,
  Award,
};

export function WhyParticipateSection() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  useEffect(() => {
    // Soft animated counter
    const duration = 2000;
    const steps = 40;
    const interval = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      const factor = stepCount / steps;
      setCounts(
        FESTIVAL_METRICS.map((m) => Math.round(m.numericTarget * factor))
      );

      if (stepCount >= steps) {
        clearInterval(timer);
        setCounts(FESTIVAL_METRICS.map((m) => m.numericTarget));
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="why-participate" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-4">
          <CheckCircle className="w-3.5 h-3.5" />
          The Builder Advantage
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy tracking-tight leading-tight">
          WHY PARTICIPATE IN <br />
          <span className="text-gradient-primary">TECHFEST 2026?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
          From undergraduate tinkerers to seasoned post-doctoral researchers, Techfest provides
          an unmatched launchpad to validate your inventions on the international stage.
        </p>
      </div>

      {/* 6 Core Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {WHY_PARTICIPATE_BENEFITS.map((benefit) => {
          const Icon = BENEFIT_ICONS[benefit.icon] || Trophy;

          return (
            <TiltCard key={benefit.id} maxTilt={6} className="h-full rounded-3xl">
              <div className="h-full p-7 rounded-3xl glass-card border border-white/80 shadow-glass hover:border-brand-blue/40 hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm"
                      style={{ backgroundColor: benefit.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {benefit.statBadge && (
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-blue-50 text-brand-blue border border-blue-200/60">
                        {benefit.statBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold font-display text-brand-navy mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Accredited certificate & mentorship</span>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>

      {/* Animated Festival Metrics & Statistics Area */}
      <div className="rounded-3xl glass-panel p-8 md:p-12 border border-white/90 shadow-glass relative overflow-hidden bg-gradient-to-r from-blue-50/40 via-white to-purple-50/30">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-blue block mb-1">
            Festival Scale & Global Footprint
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-brand-navy">
            Impact Across Continents
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Historical milestones and festival benchmarks. Verified benchmark figures from past editions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FESTIVAL_METRICS.map((metric, idx) => (
            <div
              key={metric.id}
              className="p-5 rounded-2xl bg-white/90 border border-slate-200/70 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-3xl sm:text-4xl font-extrabold font-display text-brand-navy">
                    {metric.id === 'prize' ? '₹' : ''}
                    {counts[idx]}
                    {metric.suffix}
                  </div>
                </div>

                <div className="text-sm font-bold text-slate-800 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {metric.subtext}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                <HelpCircle className="w-3 h-3 text-brand-blue" />
                <span>Verified IIT Bombay Festival Record</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

