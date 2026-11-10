import { motion, AnimatePresence } from 'framer-motion';
import { X, Cpu, Check, Layers, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/projectsData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/40 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Image with Overlay */}
          <div className="relative h-48 md:h-56 w-full overflow-hidden bg-slate-100">
            <img
              src={project.featuredImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent" />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-md text-slate-800 flex items-center justify-center hover:bg-white transition-all shadow-sm"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-blue text-white inline-block mb-2">
                {project.category}
              </span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-5 text-slate-700">
            <div>
              <p className="text-sm md:text-base font-medium text-brand-blue mb-2">
                {project.tagline}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                {project.summary}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-brand-blue" />
                Technical Benchmark Metrics
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {project.specs.map((s, idx) => (
                  <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200/60">
                    <span className="text-xs text-slate-400 block">{s.label}</span>
                    <span className="text-sm font-bold text-slate-800">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact & Research Lab */}
            <div className="space-y-3">
              <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100/60">
                <span className="text-xs font-bold uppercase text-brand-blue block mb-1">
                  Societal & Industry Impact
                </span>
                <p className="text-xs md:text-sm text-slate-600">{project.impact}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2">
                <div>
                  <span className="font-semibold text-slate-700">Research Group: </span>
                  {project.innovators}
                </div>
                <div className="flex items-center gap-1 text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                  <Check className="w-3.5 h-3.5" />
                  <span>{project.status}</span>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.badges.map((b, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium px-2.5 py-1 bg-slate-100 text-slate-600 rounded-lg flex items-center gap-1"
                >
                  <Layers className="w-3 h-3 text-brand-violet" />
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-4 md:p-6 border-t border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
            <span className="text-xs text-slate-400">
              Architecture ID: {project.id} • IIT Bombay
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-brand-blue transition-colors flex items-center gap-2"
            >
              <span>Done Viewing</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
