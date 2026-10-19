import React from 'react';
import { PageView } from '../types';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onSelectService?: (serviceId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectService }) => {
  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleServiceClick = (serviceId: string) => {
    onNavigate('services');
    if (onSelectService) {
      setTimeout(() => onSelectService(serviceId), 100);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0D0E11] border-t border-[#282A33] text-[#777B85] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand & Vision */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 rounded bg-[#191A1F] border border-[#282A33]">
                <span className="font-extrabold text-xs text-[#D6FF5F]">ETA</span>
              </div>
              <span className="font-bold text-base tracking-tight text-[#F5F5F0]">
                E-TACTICS AGENCY
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#777B85] max-w-sm">
              Creative Strategy. Measurable Growth. ETA helps ambitious businesses build stronger digital brands, reach relevant audiences, and drive accountable marketing performance.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-[#A3A7B2]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D6FF5F] shrink-0" />
                <span>Agadir 80000, Morocco (Serving Morocco, France & Worldwide)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D6FF5F] shrink-0" />
                <a
                  href="mailto:elgarram.aissa@outlook.com"
                  className="hover:text-[#D6FF5F] transition-colors"
                >
                  elgarram.aissa@outlook.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D6FF5F] shrink-0" />
                <a
                  href="tel:+212627130198"
                  className="hover:text-[#D6FF5F] transition-colors font-mono"
                >
                  +212 6 27130198 (Direct & WhatsApp)
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#F5F5F0] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('work')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  Work & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  About ETA
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  Start a Project
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('privacy')}
                  className="hover:text-[#F5F5F0] transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#F5F5F0] font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => handleServiceClick('performance-marketing')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Performance Marketing
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('paid-social-search')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Paid Social & Search
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('branding-creative-strategy')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Branding & Creative
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('email-marketing-automation')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Email Marketing & Flows
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('landing-pages-cro')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Landing Pages & CRO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceClick('product-design-digital-experiences')}
                  className="hover:text-[#F5F5F0] transition-colors text-left cursor-pointer"
                >
                  Product Design (UI/UX)
                </button>
              </li>
            </ul>
          </div>

          {/* Connect & Founder Profiles */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase font-mono tracking-wider text-[#F5F5F0] font-semibold">
              Connect
            </h4>
            <p className="text-xs text-[#777B85] leading-relaxed">
              Founder-led agency. Direct strategy with Aissa El Garram.
            </p>
            <div className="space-y-2 pt-1 text-sm">
              <a
                href="https://github.com/aissaelgarram"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#F5F5F0] hover:text-[#D6FF5F] transition-colors"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://dribbble.com/aissaelgarram"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#F5F5F0] hover:text-[#D6FF5F] transition-colors"
              >
                <span>Dribbble</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://behance.net/aissaelgarram"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#F5F5F0] hover:text-[#D6FF5F] transition-colors"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://aissaelgarram.netlify.app"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-[#A3A7B2] hover:text-[#D6FF5F] transition-colors text-xs pt-2"
              >
                <span>Founder Reference Portfolio</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#282A33] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#777B85]">
            © {new Date().getFullYear()} ETA — E-Tactics Agency. Founded by Aissa El Garram. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('privacy')}
              className="text-[#777B85] hover:text-[#F5F5F0] transition-colors"
            >
              Privacy Policy & Terms
            </button>
            <span className="text-[#282A33]">|</span>
            <span className="text-[#777B85]">
              Target Markets: Morocco · France · Europe · International
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
