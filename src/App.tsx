import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { DomainsSection } from './sections/DomainsSection';
import { ScrollExperienceSection } from './sections/ScrollExperienceSection';
import { InnovationSection } from './sections/InnovationSection';
import { WhyParticipateSection } from './sections/WhyParticipateSection';
import { CTASection } from './sections/CTASection';
import { FooterSection } from './sections/FooterSection';
import { DomainModal } from './components/DomainModal';
import { ProjectModal } from './components/ProjectModal';
import { RegisterModal } from './components/RegisterModal';
import { AudioController } from './components/AudioController';
import { DomainItem } from './data/domainsData';
import { ProjectItem } from './data/projectsData';
import { Ticket } from 'lucide-react';

export function App() {
  const [selectedDomain, setSelectedDomain] = useState<DomainItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState<boolean>(false);
  const [registerDomain, setRegisterDomain] = useState<string>('Artificial Intelligence');
  const [showFloatingPass, setShowFloatingPass] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingPass(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenRegister = (domainName?: string) => {
    if (domainName) {
      setRegisterDomain(domainName);
    }
    setIsRegisterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background-light font-sans selection:bg-brand-blue/20 selection:text-brand-blue">
      {/* Premium Floating Navigation */}
      <Navbar onOpenRegister={() => handleOpenRegister()} />

      {/* Main Sections */}
      <main>
        {/* Section 2: Immersive 3D Hero */}
        <HeroSection onOpenRegister={() => handleOpenRegister()} />

        {/* Section 3: The Experience */}
        <ExperienceSection />

        {/* Section 4: Explore the Domains */}
        <DomainsSection onSelectDomain={(domain) => setSelectedDomain(domain)} />

        {/* Section 5: 3D Scroll Experience */}
        <ScrollExperienceSection />

        {/* Section 6: Innovation Showcase */}
        <InnovationSection onSelectProject={(proj) => setSelectedProject(proj)} />

        {/* Section 7: Why Participate? */}
        <WhyParticipateSection />

        {/* Section 8: Final Call To Action */}
        <CTASection onOpenRegister={() => handleOpenRegister()} />
      </main>

      {/* Section 9: Footer */}
      <FooterSection />

      {/* Interactive Modals */}
      <DomainModal
        domain={selectedDomain}
        onClose={() => setSelectedDomain(null)}
        onRegisterClick={(title) => handleOpenRegister(title)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <RegisterModal
        isOpen={isRegisterOpen}
        initialDomain={registerDomain}
        onClose={() => setIsRegisterOpen(false)}
      />

      {/* Ambient Audio Controller (Procedural Web Audio) */}
      <AudioController />

      {/* Floating Quick Action Button for Pass */}
      {showFloatingPass && (
        <button
          onClick={() => handleOpenRegister()}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet text-white text-xs font-bold shadow-lg hover:shadow-glow-blue hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          aria-label="Get Techfest Pass"
        >
          <Ticket className="w-4 h-4" />
          <span>Get Festival Pass</span>
        </button>
      )}
    </div>
  );
}

export default App;
