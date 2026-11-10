import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Ticket, QrCode, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegisterModalProps {
  isOpen: boolean;
  initialDomain?: string;
  onClose: () => void;
}

export function RegisterModal({ isOpen, initialDomain = 'Artificial Intelligence', onClose }: RegisterModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [institution, setInstitution] = useState('');
  const [domain, setDomain] = useState(initialDomain);
  const [track, setTrack] = useState('Competition & Hackathons');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    // Generate random pass id
    const passCode = 'TF26-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    setTicketId(passCode);
    setSubmitted(true);

    // Fire celebratory confetti!
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#2864FF', '#7957FF', '#36C5F0', '#FF826E'],
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setInstitution('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-brand-navy/45 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/80 overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 md:p-7 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-violet flex items-center justify-center text-white shadow-sm">
                <Ticket className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-display text-brand-navy">
                  {submitted ? 'Pass Confirmed' : 'Festival Access Pass'}
                </h3>
                <p className="text-xs text-slate-500">Techfest 2026 • IIT Bombay</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-white shadow-sm border border-slate-200/60 flex items-center justify-center text-slate-500 hover:text-slate-800"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {!submitted ? (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="p-6 md:p-7 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Aryan Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  Institutional Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="aryan@iitb.ac.in or personal email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                  University / College / Organization
                </label>
                <input
                  type="text"
                  placeholder="e.g. IIT Bombay / BITS Pilani / Stanford"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 text-sm transition-all"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                    Primary Domain
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-sm bg-white"
                  >
                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                    <option value="Robotics & Automation">Robotics & Automation</option>
                    <option value="Coding & Programming">Coding & Programming</option>
                    <option value="Space & Science">Space & Science</option>
                    <option value="Engineering Innovation">Engineering Innovation</option>
                    <option value="Entrepreneurship">Entrepreneurship</option>
                    <option value="Design & Creativity">Design & Creativity</option>
                    <option value="Emerging Technologies">Emerging Technologies</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5">
                    Participation Track
                  </label>
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-brand-blue text-sm bg-white"
                  >
                    <option value="Competitions & Hackathons">Competitions & Arenas</option>
                    <option value="Keynotes & Masterclasses">Keynotes & Masterclasses</option>
                    <option value="Exhibitor & Innovator">Exhibitor & Startup</option>
                    <option value="Visitor & General Delegate">Visitor & General Delegate</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-violet text-white font-semibold text-sm shadow-md hover:shadow-glow-blue hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <span>Claim Official Digital Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-center text-xs text-slate-400">
                100% Free registration for students & builders. Instant pass issued.
              </p>
            </form>
          ) : (
            /* Digital Pass Result */
            <div className="p-6 md:p-7 space-y-5">
              <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 p-3 rounded-xl border border-emerald-100 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>Registration confirmed! Your digital festival pass is active.</span>
              </div>

              {/* Pass Card Preview */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-brand-navy via-slate-900 to-indigo-950 text-white shadow-xl relative overflow-hidden border border-slate-700">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] tracking-widest uppercase text-brand-cyan font-bold">
                      OFFICIAL DELEGATE PASS
                    </span>
                    <h4 className="text-lg font-bold font-display mt-0.5">{name}</h4>
                    <p className="text-xs text-slate-300">{institution || 'Student Delegate'}</p>
                  </div>
                  <div className="p-2 bg-white rounded-lg">
                    <QrCode className="w-10 h-10 text-brand-navy" />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-700/60 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px]">TRACK</span>
                    <span className="font-semibold text-slate-200">{domain}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">PASS ID</span>
                    <span className="font-mono font-bold text-brand-orange">{ticketId}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleReset}
                  className="flex-1 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
