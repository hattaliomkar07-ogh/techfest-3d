import { ArrowUp, MapPin, Mail, Sparkles } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="w-full bg-white border-t border-slate-200/80 pt-16 pb-12 mt-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-100">
          {/* Brand Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue to-brand-violet p-[1.5px] shadow-sm">
                <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center font-display font-extrabold text-brand-blue">
                  T
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg text-brand-navy tracking-tight">
                  TECHFEST 2026
                </span>
                <span className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">
                  IIT BOMBAY • BEYOND DIMENSIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-6">
              Asia&apos;s Largest Science and Technology Festival. Providing an international platform
              for engineers, researchers, and creators to shape the future through innovation.
            </p>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Techfest Office, Student Activity Centre, IIT Bombay, Powai, Mumbai 400076</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-violet flex-shrink-0" />
                <span>festival.desk@techfest.org (General Inquiries Desk)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Explore Festival
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>
                <button onClick={() => scrollTo('hero')} className="hover:text-brand-blue transition-colors">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('experience')} className="hover:text-brand-blue transition-colors">
                  The Experience
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('domains')} className="hover:text-brand-blue transition-colors">
                  Domains & Arenas
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('scroll-3d')} className="hover:text-brand-blue transition-colors">
                  3D Dimension Voyage
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('innovation')} className="hover:text-brand-blue transition-colors">
                  Innovation Showcase
                </button>
              </li>
            </ul>
          </div>

          {/* Festival Domains */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Major Arenas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
              <li>Artificial Intelligence</li>
              <li>Robotics & RoboWars</li>
              <li>Coding & Hackathons</li>
              <li>Space & Lunar Rovers</li>
              <li>Formula Green EV</li>
              <li>DeepTech Venture Pitch</li>
            </ul>
          </div>

          {/* Social Links & Back To Top */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
              Connect With Us
            </h4>
            <p className="text-xs text-slate-500 mb-3">
              Official Social Media & Announcements (Verified placeholders):
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Twitter / X', 'Instagram', 'LinkedIn', 'YouTube'].map((net) => (
                <span
                  key={net}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200/60 hover:bg-slate-200 cursor-pointer transition-colors"
                >
                  {net}
                </span>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-brand-navy font-semibold text-xs flex items-center justify-center gap-2 border border-slate-200 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Credits & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Techfest, IIT Bombay © 2026. All Rights Reserved.</span>
          </div>
          <div className="text-slate-400 text-center sm:text-right">
            Designed for Techfest 3D &bull; High-Performance WebGL Experience
          </div>
        </div>
      </div>
    </footer>
  );
}
