import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry
}) => {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative w-full max-w-3xl bg-[#191A1F] border border-[#282A33] shadow-2xl p-6 sm:p-10 my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#777B85] hover:text-[#F5F5F0] hover:bg-[#282A33] transition-colors cursor-pointer"
          aria-label="Close service modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-10">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-xs text-[#D6FF5F] tracking-widest font-semibold">
              CAPABILITY {service.code}
            </span>
            <span className="text-xs text-[#777B85]">·</span>
            <span className="text-xs text-[#777B85] font-mono">
              {service.isCoreService ? 'Active Agency Offering' : 'Advisory / Strategic Capability'}
            </span>
          </div>
          <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight">
            {service.title}
          </h2>
          <p className="mt-3 text-base text-[#A3A7B2] leading-relaxed">
            {service.fullDesc}
          </p>
        </div>

        {/* Grid: Who it is for & Problems Solved */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 py-6 border-y border-[#282A33]">
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D6FF5F] font-semibold mb-3">
              Who This Is For
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F5F0]">
              {service.whoItIsFor.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#D6FF5F] font-bold mt-0.5">·</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#D6FF5F] font-semibold mb-3">
              Challenges Addressed
            </h3>
            <ul className="space-y-2 text-sm text-[#F5F5F0]">
              {service.problemsSolved.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#777B85] mt-0.5">✕</span>
                  <span className="leading-snug text-[#A3A7B2]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-3">
            Our Strategic Approach
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.approach.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 bg-[#101114] border border-[#282A33] flex items-start gap-3 text-xs leading-relaxed text-[#A3A7B2]"
              >
                <span className="font-mono text-[#D6FF5F] font-bold shrink-0">
                  0{idx + 1}.
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-3">
            Tangible Deliverables
          </h3>
          <div className="space-y-2">
            {service.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F5F5F0]">
                <CheckCircle2 className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
                <span>{deliv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step & CTA */}
        <div className="pt-6 border-t border-[#282A33] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#777B85] max-w-md">
            <span className="text-[#F5F5F0] font-semibold block mb-0.5">Recommended Next Step:</span>
            {service.nextStep}
          </div>

          <button
            onClick={() => {
              onSelectForInquiry(service.title);
              onClose();
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold rounded transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Inquire for {service.title.split('&')[0].trim()}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
