import React, { useState } from 'react';
import { PageView } from '../types';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenContactModal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenContactModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langTooltipOpen, setLangTooltipOpen] = useState(false);

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrimaryAction = () => {
    if (onOpenContactModal) {
      onOpenContactModal();
    } else {
      handleNavClick('contact');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#101114]/95 backdrop-blur-md border-b border-[#282A33] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          aria-label="ETA — E-Tactics Agency Home"
        >
          <div className="flex items-center justify-center w-10 h-10 rounded bg-[#191A1F] border border-[#282A33] group-hover:border-[#D6FF5F] transition-colors">
            <span className="font-extrabold text-sm tracking-tight text-[#D6FF5F]">ETA</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-[#F5F5F0] group-hover:text-[#D6FF5F] transition-colors whitespace-nowrap">
              E-TACTICS AGENCY
            </span>
            <span className="text-[10px] tracking-wider uppercase text-[#777B85] font-mono">
              Creative Strategy · Growth
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNavClick('home')}
            className={`transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
              currentPage === 'home'
                ? 'text-[#F5F5F0] border-[#D6FF5F]'
                : 'text-[#777B85] border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
              currentPage === 'services'
                ? 'text-[#F5F5F0] border-[#D6FF5F]'
                : 'text-[#777B85] border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick('work')}
            className={`transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
              currentPage === 'work'
                ? 'text-[#F5F5F0] border-[#D6FF5F]'
                : 'text-[#777B85] border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Work & Case Studies
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
              currentPage === 'about'
                ? 'text-[#F5F5F0] border-[#D6FF5F]'
                : 'text-[#777B85] border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            About ETA
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`transition-colors cursor-pointer py-1 border-b-2 whitespace-nowrap ${
              currentPage === 'contact'
                ? 'text-[#F5F5F0] border-[#D6FF5F]'
                : 'text-[#777B85] border-transparent hover:text-[#F5F5F0]'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Actions (Language Indicator + 1 Primary CTA) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {/* Subtle localized indicator */}
          <div className="relative">
            <button
              onClick={() => setLangTooltipOpen(!langTooltipOpen)}
              onMouseEnter={() => setLangTooltipOpen(true)}
              onMouseLeave={() => setLangTooltipOpen(false)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs text-[#777B85] hover:text-[#F5F5F0] hover:bg-[#191A1F] transition-colors cursor-pointer"
              aria-label="Language selection"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="font-mono font-medium">EN</span>
            </button>
            {langTooltipOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 p-3 rounded bg-[#191A1F] border border-[#282A33] shadow-2xl text-xs z-50">
                <div className="flex items-center justify-between text-[#F5F5F0] font-semibold mb-1">
                  <span>Current: English</span>
                  <span className="text-[#D6FF5F] text-[10px] font-mono">ACTIVE</span>
                </div>
                <p className="text-[#777B85] text-[11px] leading-relaxed">
                  Version française en cours de finalisation pour nos clients en France et au Maroc.
                </p>
              </div>
            )}
          </div>

          <button
            onClick={handlePrimaryAction}
            className="flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-[#101114] bg-[#D6FF5F] hover:bg-[#cbf450] active:scale-[0.98] transition-all rounded whitespace-nowrap cursor-pointer shadow-sm hover:shadow-[#D6FF5F]/20"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={handlePrimaryAction}
            className="px-3 py-1.5 text-xs font-bold text-[#101114] bg-[#D6FF5F] rounded whitespace-nowrap"
          >
            Start Project
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#777B85] hover:text-[#F5F5F0] rounded bg-[#191A1F] border border-[#282A33] focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#282A33] bg-[#101114] px-6 py-5 space-y-3">
          <button
            onClick={() => handleNavClick('home')}
            className={`block w-full text-left py-2 text-base font-medium ${
              currentPage === 'home' ? 'text-[#D6FF5F]' : 'text-[#F5F5F0]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('services')}
            className={`block w-full text-left py-2 text-base font-medium ${
              currentPage === 'services' ? 'text-[#D6FF5F]' : 'text-[#F5F5F0]'
            }`}
          >
            Services (8 Capabilities)
          </button>
          <button
            onClick={() => handleNavClick('work')}
            className={`block w-full text-left py-2 text-base font-medium ${
              currentPage === 'work' ? 'text-[#D6FF5F]' : 'text-[#F5F5F0]'
            }`}
          >
            Work & Case Studies
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`block w-full text-left py-2 text-base font-medium ${
              currentPage === 'about' ? 'text-[#D6FF5F]' : 'text-[#F5F5F0]'
            }`}
          >
            About ETA & Founder
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-left py-2 text-base font-medium ${
              currentPage === 'contact' ? 'text-[#D6FF5F]' : 'text-[#F5F5F0]'
            }`}
          >
            Contact / Project Intake
          </button>
          <button
            onClick={() => handleNavClick('privacy')}
            className={`block w-full text-left py-2 text-sm text-[#777B85]`}
          >
            Privacy Policy
          </button>
          <div className="pt-3 border-t border-[#282A33] flex items-center justify-between text-xs text-[#777B85]">
            <span>Serving Morocco, France, Europe & International</span>
            <span className="font-mono text-[#D6FF5F]">EN (FR Soon)</span>
          </div>
        </div>
      )}
    </header>
  );
};
