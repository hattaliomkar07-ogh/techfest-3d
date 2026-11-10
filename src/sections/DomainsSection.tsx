import { useState } from 'react';
import {
  Brain,
  Bot,
  Terminal,
  Orbit,
  Cpu,
  Rocket,
  Layers,
  Sparkles,
  ArrowRight,
  Trophy,
} from 'lucide-react';
import { DOMAINS, DomainItem } from '../data/domainsData';
import { TiltCard } from '../components/TiltCard';

const DOMAIN_ICONS: Record<string, React.ElementType> = {
  Brain,
  Bot,
  Terminal,
  Orbit,
  Cpu,
  Rocket,
  Layers,
  Sparkles,
};

interface DomainsSectionProps {
  onSelectDomain: (domain: DomainItem) => void;
}

export function DomainsSection({ onSelectDomain }: DomainsSectionProps) {
  const [filterTag, setFilterTag] = useState<string>('All');

  const filterOptions = ['All', 'AI & Software', 'Robotics & Hardware', 'Space & Science', 'Ventures'];

  const filteredDomains = DOMAINS.filter((d) => {
    if (filterTag === 'All') return true;
    if (filterTag === 'AI & Software') return d.id === 'ai-data' || d.id === 'coding' || d.id === 'design';
    if (filterTag === 'Robotics & Hardware') return d.id === 'robotics' || d.id === 'engineering';
    if (filterTag === 'Space & Science') return d.id === 'space' || d.id === 'emerging-tech';
    if (filterTag === 'Ventures') return d.id === 'entrepreneurship';
    return true;
  });

  return (
    <section id="domains" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background radial accent */}
      <div className="absolute top-1/4 -right-16 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-brand-violet text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            Competitive Tracks & Arenas
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            EXPLORE THE <span className="text-gradient-primary">DOMAINS.</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl text-base sm:text-lg">
            Eight specialized technological disciplines. Click any domain card to view flagship
            competitions, eligibility guidelines, prize pools, and instant registration.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setFilterTag(opt)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterTag === opt
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* 8 Domains Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDomains.map((domain) => {
          const IconComp = DOMAIN_ICONS[domain.icon] || Sparkles;

          return (
            <TiltCard
              key={domain.id}
              maxTilt={7}
              onClick={() => onSelectDomain(domain)}
              className="cursor-pointer rounded-3xl group"
            >
              <div className="h-full p-6 rounded-3xl glass-card group-hover:bg-white group-hover:border-brand-blue/50 transition-all duration-300 flex flex-col justify-between border border-white/80 shadow-glass">
                <div>
                  {/* Top Header: Icon & Category */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform"
                      style={{
                        background: `linear-gradient(135deg, ${domain.color.from}, ${domain.color.to})`,
                      }}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${domain.color.badge}`}>
                      {domain.totalPrize}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400 block mb-1">
                    {domain.category}
                  </span>
                  <h3 className="text-xl font-bold font-display text-brand-navy mb-2.5 group-hover:text-brand-blue transition-colors">
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {domain.shortDesc}
                  </p>
                </div>

                {/* Tags & Action Link */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {domain.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 bg-slate-100 text-slate-600 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-blue group-hover:translate-x-0.5 transition-transform">
                    <span>View Events & Challenges</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
}

