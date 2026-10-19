import React from 'react';
import { ServiceItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails }) => {
  return (
    <div className="group relative flex flex-col justify-between p-6 sm:p-8 bg-[#191A1F] border border-[#282A33] hover:border-[#D6FF5F]/60 transition-all duration-300 rounded-none">
      <div>
        {/* Top editorial numbering & status */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <span className="font-mono text-xs text-[#D6FF5F] tracking-widest font-semibold">
            {service.code}
          </span>
          <div className="text-xs text-[#777B85] font-mono">
            {service.isCoreService ? (
              <span>Active Service</span>
            ) : (
              <span>Advisory & Expansion</span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-[#F5F5F0] tracking-tight mb-3 group-hover:text-[#D6FF5F] transition-colors">
          {service.title}
        </h3>

        {/* Short description */}
        <p className="text-sm text-[#777B85] leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Solves problems list (unboxed, clean typography) */}
        <div className="space-y-2 mb-8 pt-4 border-t border-[#282A33]/60">
          <span className="text-[11px] uppercase tracking-wider text-[#A3A7B2] font-mono font-medium block">
            Key Focus Areas
          </span>
          <ul className="space-y-1.5 text-xs text-[#A3A7B2]">
            {service.approach.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#D6FF5F] font-bold mt-0.5">·</span>
                <span className="leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action button */}
      <div className="pt-4 border-t border-[#282A33]">
        <button
          onClick={() => onOpenDetails(service)}
          className="flex items-center justify-between w-full text-xs font-semibold text-[#F5F5F0] group-hover:text-[#D6FF5F] transition-colors cursor-pointer"
        >
          <span>Examine Deliverables & Process</span>
          <ArrowUpRight className="w-4 h-4 text-[#777B85] group-hover:text-[#D6FF5F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </button>
      </div>
    </div>
  );
};
