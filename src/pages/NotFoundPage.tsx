import React from 'react';
import { PageView } from '../types';
import { ArrowLeft, Home, Compass, Briefcase, Mail } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (page: PageView) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-24 px-4 sm:px-6">
      <div className="max-w-xl w-full text-center p-8 sm:p-12 bg-[#191A1F] border border-[#282A33]">
        <span className="font-mono text-xs text-[#D6FF5F] tracking-widest uppercase font-semibold block mb-3">
          Error 404 · Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight mb-4">
          The requested page could not be located.
        </h1>
        <p className="text-sm text-[#777B85] leading-relaxed mb-8">
          The URL you followed may have been updated or moved. Use the links below to return to the agency overview.
        </p>

        <div className="grid grid-cols-2 gap-3 mb-8 text-xs font-semibold">
          <button
            onClick={() => onNavigate('home')}
            className="p-3 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-[#F5F5F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-[#D6FF5F]" />
            <span>Home</span>
          </button>
          <button
            onClick={() => onNavigate('services')}
            className="p-3 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-[#F5F5F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Compass className="w-3.5 h-3.5 text-[#D6FF5F]" />
            <span>Services</span>
          </button>
          <button
            onClick={() => onNavigate('work')}
            className="p-3 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-[#F5F5F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Briefcase className="w-3.5 h-3.5 text-[#D6FF5F]" />
            <span>Case Studies</span>
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="p-3 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-[#F5F5F0] transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[#D6FF5F]" />
            <span>Contact</span>
          </button>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-bold text-[#101114] bg-[#D6FF5F] hover:bg-[#cbf450] px-6 py-2.5 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Homepage</span>
        </button>
      </div>
    </div>
  );
};
