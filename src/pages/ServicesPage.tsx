import React, { useState } from 'react';
import { PageView, ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageView) => void;
  onOpenInquiryWithService?: (serviceName: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenInquiryWithService
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'core' | 'advisory'>('all');

  const filteredServices = servicesData.filter((s) => {
    if (filter === 'core') return s.isCoreService;
    if (filter === 'advisory') return !s.isCoreService;
    return true;
  });

  const handleInquiry = (serviceName: string) => {
    if (onOpenInquiryWithService) {
      onOpenInquiryWithService(serviceName);
    } else {
      onNavigate('contact');
    }
  };

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D6FF5F] uppercase font-semibold mb-3">
            <span>Capabilities</span>
            <span aria-hidden="true">·</span>
            <span>8 Disciplines</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight mb-4">
            Services engineered for clarity, strategy, and business scale.
          </h1>
          <p className="text-base sm:text-lg text-[#A3A7B2] leading-relaxed">
            We avoid one-size-fits-all packages. Every engagement is structured around your specific business model, target market, unit economics, and growth bottlenecks.
          </p>
        </div>

        {/* Filter Controls (buttons with active state, no decorative pills) */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[#191A1F] border border-[#282A33] inline-flex">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              filter === 'all'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            All Capabilities ({servicesData.length})
          </button>
          <button
            onClick={() => setFilter('core')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              filter === 'core'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            Core Offerings (Active)
          </button>
          <button
            onClick={() => setFilter('advisory')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              filter === 'advisory'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            Advisory & Expansion
          </button>
        </div>

        {/* Services List with Full Specifications */}
        <div className="space-y-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-6 sm:p-10 bg-[#191A1F] border border-[#282A33] hover:border-[#D6FF5F]/50 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Code, Title, Short & Full Desc */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#D6FF5F] font-bold">
                      {service.code}
                    </span>
                    <span className="text-xs text-[#777B85] font-mono">
                      {service.isCoreService ? 'Active Delivery' : 'Advisory / Strategic Expansion'}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-[#F5F5F0] tracking-tight">
                    {service.title}
                  </h2>

                  <p className="text-sm text-[#A3A7B2] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D6FF5F] hover:text-[#cbf450] transition-colors cursor-pointer"
                    >
                      <span>Review Full Deliverables & Methodology</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Center: Who it is for & Problems */}
                <div className="lg:col-span-4 space-y-4 pt-2 lg:pt-0 lg:border-l lg:border-[#282A33] lg:pl-8">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-2">
                      Who This Is For
                    </h3>
                    <ul className="space-y-1.5 text-xs text-[#A3A7B2]">
                      {service.whoItIsFor.map((w, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#D6FF5F] font-bold">·</span>
                          <span>{w}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-2">
                      Key Deliverables
                    </h3>
                    <ul className="space-y-1 text-xs text-[#777B85]">
                      {service.deliverables.slice(0, 3).map((d, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F] shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right: Next step & Action */}
                <div className="lg:col-span-3 flex flex-col justify-between h-full pt-4 lg:pt-0 lg:border-l lg:border-[#282A33] lg:pl-8 space-y-4">
                  <div className="p-4 bg-[#101114] border border-[#282A33] text-xs text-[#777B85]">
                    <span className="text-[#F5F5F0] font-medium block mb-1">Recommended Starting Point:</span>
                    <span className="leading-relaxed">{service.nextStep}</span>
                  </div>

                  <button
                    onClick={() => handleInquiry(service.title)}
                    className="w-full px-5 py-3 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-[#191A1F] border border-[#282A33] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold text-[#F5F5F0]">
              Need a bespoke combination of services?
            </h3>
            <p className="text-xs text-[#777B85] mt-1 max-w-xl">
              Many clients combine Creative Strategy with Paid Social and Conversion Optimization. We formulate tailored agreements without unnecessary retainers.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-xs font-semibold text-[#F5F5F0] transition-colors cursor-pointer shrink-0"
          >
            Discuss Custom Scope
          </button>
        </div>
      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={handleInquiry}
      />
    </div>
  );
};
