import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onInquire
}) => {
  const [imageError, setImageError] = useState(false);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#191A1F] border border-[#282A33] shadow-2xl my-8 text-left max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#282A33] bg-[#191A1F]/90 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold">
              {project.badgeLabel}
            </span>
            <span className="text-xs text-[#777B85]">·</span>
            <span className="text-xs text-[#777B85] font-mono">
              {project.industry}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#777B85] hover:text-[#F5F5F0] hover:bg-[#282A33] transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto px-6 sm:px-8 py-8 space-y-8">
          {/* Title & Overview */}
          <div>
            <h2 id="case-study-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#777B85] font-mono mb-4">
              <span>Client / Entity: <strong className="text-[#F5F5F0] font-normal">{project.clientOrBrand}</strong></span>
              <span>·</span>
              <span>Category: <strong className="text-[#F5F5F0] font-normal">{project.serviceCategory}</strong></span>
              {project.collaboratorOrReference && (
                <>
                  <span>·</span>
                  <span>Reference: <strong className="text-[#D6FF5F] font-normal">{project.collaboratorOrReference}</strong></span>
                </>
              )}
            </div>
            <p className="text-base text-[#A3A7B2] leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="relative aspect-[16/9] w-full bg-[#101114] border border-[#282A33] overflow-hidden">
            {!imageError ? (
              <img
                src={project.image}
                alt={project.title}
                referrerPolicy="no-referrer"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xs font-mono text-[#777B85]">
                {project.title} — Visual Archive
              </div>
            )}
          </div>

          {/* Challenge & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-y border-[#282A33]">
            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D6FF5F] font-semibold mb-3">
                The Business Challenge
              </h3>
              <p className="text-sm text-[#F5F5F0] leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#D6FF5F] font-semibold mb-3">
                Key Objectives
              </h3>
              <ul className="space-y-2 text-sm text-[#F5F5F0]">
                {project.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#D6FF5F] font-bold mt-0.5">·</span>
                    <span className="leading-snug text-[#A3A7B2]">{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Strategic Approach */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-3">
              Strategic Approach
            </h3>
            <p className="text-sm text-[#A3A7B2] leading-relaxed">
              {project.strategy}
            </p>
          </div>

          {/* Execution & Deliverables */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-5 bg-[#101114] border border-[#282A33]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-3">
                Execution Steps
              </h4>
              <ul className="space-y-2.5 text-xs text-[#A3A7B2]">
                {project.execution.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="font-mono text-[#D6FF5F] font-semibold shrink-0">0{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-[#101114] border border-[#282A33]">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold mb-3">
                Delivered Assets
              </h4>
              <ul className="space-y-2 text-xs text-[#F5F5F0]">
                {project.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F] shrink-0 mt-0.5" />
                    <span>{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verified Results & Lessons Learned */}
          <div className="p-6 bg-[#101114] border border-[#282A33] space-y-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#D6FF5F] font-semibold block mb-1">
                {project.isVerified ? 'Documented Impact' : 'Strategic Expected Impact'}
              </span>
              <p className="text-sm text-[#F5F5F0] leading-relaxed">
                {project.verifiedResultsOrExpectedImpact}
              </p>
            </div>
            <div className="pt-3 border-t border-[#282A33]">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#777B85] font-semibold block mb-1">
                Key Strategic Takeaway
              </span>
              <p className="text-xs text-[#A3A7B2] leading-relaxed">
                {project.lessonsLearned}
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-6 sm:px-8 py-5 border-t border-[#282A33] bg-[#191A1F] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#777B85]">
            Interested in applying a similar strategic framework to your business?
          </div>
          <button
            onClick={() => {
              onInquire();
              onClose();
            }}
            className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start a Similar Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
