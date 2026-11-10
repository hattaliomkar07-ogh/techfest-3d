import { motion, AnimatePresence } from 'framer-motion';
import { X, Trophy, Users, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { DomainItem } from '../data/domainsData';

interface DomainModalProps {
  domain: DomainItem | null;
  onClose: () => void;
  onRegisterClick: (domainTitle: string) => void;
}

export function DomainModal({ domain, onClose, onRegisterClick }: DomainModalProps) {
  if (!domain) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/40 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="relative px-6 py-6 md:px-8 md:py-8 border-b border-slate-100 bg-gradient-to-r from-blue-50/60 via-purple-50/40 to-white">
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold tracking-wider uppercase text-brand-blue bg-blue-100/60 px-3 py-1 rounded-full">
                  {domain.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-navy mt-2">
                  {domain.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:scale-105 transition-all"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Total prize banner */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <Trophy className="w-4 h-4 text-emerald-600" />
                <span>Total Domain Prize Pool: {domain.totalPrize}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 bg-white/80 px-3 py-1.5 rounded-xl border border-slate-200/60">
                <Users className="w-4 h-4 text-brand-blue" />
                <span>Open to Global Students & Researchers</span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6 text-slate-700">
            {/* Detailed Description */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Overview & Scientific Scope
              </h4>
              <p className="text-base leading-relaxed text-slate-600">
                {domain.fullDesc}
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
              {domain.stats.map((s, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-lg md:text-xl font-bold text-brand-navy font-display">{s.value}</div>
                  <div className="text-xs text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Flagship Competitions */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-brand-violet" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  Flagship Competitions & Challenges
                </h4>
              </div>

              <div className="space-y-3">
                {domain.flagshipEvents.map((evt, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-sm hover:border-brand-blue/40 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <h5 className="font-bold text-slate-900 text-base">{evt.name}</h5>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 self-start sm:self-auto">
                        Prize: {evt.prize}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">{evt.description}</p>
                    <div className="mt-2.5 flex items-center gap-3 text-xs text-slate-400">
                      <span className="font-medium text-slate-500">Team Format: {evt.teamSize}</span>
                      <span>•</span>
                      <span>IIT Bombay Campus & Online Qualifiers</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Tags */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
                Key Focus Disciplines
              </h4>
              <div className="flex flex-wrap gap-2">
                {domain.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 bg-slate-100 text-slate-700 rounded-lg"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="p-4 md:p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle className="w-4 h-4 text-emerald-500" />
              <span>Free registration for collegiate participants</span>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-100 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onRegisterClick(domain.title);
                }}
                className="flex-1 sm:flex-initial px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-sm shadow-md hover:shadow-glow-blue hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>Register for Competitions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

