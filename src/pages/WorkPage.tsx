import React, { useState } from 'react';
import { PageView, ProjectItem } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/ProjectCard';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ArrowRight, Info } from 'lucide-react';

interface WorkPageProps {
  onNavigate: (page: PageView) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onNavigate }) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'verified') return p.isVerified;
    if (activeFilter === 'concept') return !p.isVerified;
    if (activeFilter === 'ecommerce') return p.industry.toLowerCase().includes('ecommerce') || p.industry.toLowerCase().includes('retail') || p.industry.toLowerCase().includes('goods');
    if (activeFilter === 'hospitality') return p.industry.toLowerCase().includes('hospitality') || p.industry.toLowerCase().includes('tourism');
    return true;
  });

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D6FF5F] uppercase font-semibold mb-3">
            <span>Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Case Studies</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight mb-4">
            Strategic campaigns, verified collaborations & concept blueprints.
          </h1>
          <p className="text-base sm:text-lg text-[#A3A7B2] leading-relaxed">
            We hold ourselves to a strict standard of commercial truth. Our portfolio features real founder collaborations with clear attribution alongside clearly labelled concept projects designed to demonstrate our strategic thinking.
          </p>
        </div>

        {/* Transparency Disclosure */}
        <div className="p-4 sm:p-5 bg-[#191A1F] border border-[#282A33] mb-12 flex items-start gap-3.5 text-xs text-[#A3A7B2]">
          <Info className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-semibold text-[#F5F5F0] block">
              The ETA Transparency Commitment
            </span>
            <p className="leading-relaxed">
              We never fabricate client relationships, fake revenue charts, or publish unsupported ROAS claims. Verified founder projects originate from founder Aissa El Garram’s professional track record, while hypothetical blueprints are explicitly marked as <strong className="text-[#D6FF5F] font-mono font-normal">Concept Project</strong>.
            </p>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-12 p-1.5 bg-[#191A1F] border border-[#282A33] inline-flex">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            All Work ({projectsData.length})
          </button>
          <button
            onClick={() => setActiveFilter('verified')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'verified'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            Verified Founder Work
          </button>
          <button
            onClick={() => setActiveFilter('concept')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'concept'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            Concept Projects
          </button>
          <button
            onClick={() => setActiveFilter('ecommerce')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'ecommerce'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            E-Commerce & DTC
          </button>
          <button
            onClick={() => setActiveFilter('hospitality')}
            className={`px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
              activeFilter === 'hospitality'
                ? 'bg-[#101114] text-[#D6FF5F] shadow-sm font-semibold'
                : 'text-[#777B85] hover:text-[#F5F5F0]'
            }`}
          >
            Hospitality & Travel
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 p-8 sm:p-12 bg-[#191A1F] border border-[#282A33] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <h3 className="text-xl font-bold text-[#F5F5F0]">
              Have a similar campaign or product to scale?
            </h3>
            <p className="text-xs sm:text-sm text-[#777B85] mt-2 leading-relaxed">
              We apply proven audience segmentation, rigorous ad testing, and conversion-first landing page design to help your business gain sustainable digital traction.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3.5 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => onNavigate('contact')}
      />
    </div>
  );
};
