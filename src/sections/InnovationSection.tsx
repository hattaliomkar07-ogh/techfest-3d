import { useState } from 'react';
import { Sparkles, ArrowRight, Layers, CheckCircle2, Cpu } from 'lucide-react';
import { INNOVATION_PROJECTS, ProjectItem } from '../data/projectsData';
import { TiltCard } from '../components/TiltCard';

interface InnovationSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export function InnovationSection({ onSelectProject }: InnovationSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'AI & Neural', 'Robotics', 'Space Exploration', 'Green Tech'];

  const filteredProjects = INNOVATION_PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="innovation" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-brand-violet/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-brand-blue text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Research & Deep-Tech Exhibits
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-brand-navy tracking-tight">
            IDEAS THAT <span className="text-gradient-accent">MOVE THE WORLD.</span>
          </h2>
          <p className="mt-3 text-slate-600 max-w-xl text-base sm:text-lg">
            Groundbreaking university research projects, robotics patents, and deep-space
            technologies pioneered across labs at IIT Bombay and international partner institutes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <TiltCard
            key={project.id}
            maxTilt={6}
            onClick={() => onSelectProject(project)}
            className="cursor-pointer rounded-3xl group"
          >
            <div className="h-full rounded-3xl glass-card overflow-hidden border border-white/80 shadow-glass group-hover:border-brand-blue/50 group-hover:shadow-glass-hover transition-all duration-300 flex flex-col justify-between">
              <div>
                {/* Visual Image Header */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-brand-navy shadow-sm">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="absolute top-3 right-3">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/90 text-white backdrop-blur-xs flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" />
                      {project.status}
                    </span>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-200 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <p className="text-xs font-semibold text-brand-blue mb-2 line-clamp-1">
                    {project.tagline}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {project.summary}
                  </p>

                  {/* Quick Specs Preview */}
                  <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] mb-4">
                    {project.specs.slice(0, 2).map((sp, idx) => (
                      <div key={idx}>
                        <span className="text-slate-400 block">{sp.label}</span>
                        <span className="font-bold text-slate-700">{sp.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.badges.map((b, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium px-2 py-0.5 bg-blue-50 text-brand-blue rounded-md flex items-center gap-1"
                      >
                        <Layers className="w-2.5 h-2.5" />
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between text-xs font-semibold text-slate-700 group-hover:text-brand-blue transition-colors">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-brand-violet" />
                  <span>Inspect Blueprint</span>
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
