import React, { useState } from 'react';
import { ProjectItem } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      onClick={() => onOpenCaseStudy(project)}
      className="group flex flex-col justify-between bg-[#191A1F] border border-[#282A33] hover:border-[#D6FF5F]/70 transition-all duration-300 cursor-pointer overflow-hidden"
    >
      {/* Featured visual */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#101114]">
        {!imageError ? (
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#191A1F] to-[#101114] text-center">
            <span className="font-mono text-xs text-[#D6FF5F] tracking-wider uppercase mb-1">
              {project.industry}
            </span>
            <span className="text-sm font-bold text-[#F5F5F0]">
              {project.title}
            </span>
          </div>
        )}

        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#191A1F] via-transparent to-transparent opacity-80" />

        {/* Unboxed label at top right */}
        <div className="absolute top-4 right-4 text-[11px] font-mono tracking-wider font-semibold text-[#F5F5F0] bg-[#101114]/90 px-2.5 py-1 border border-[#282A33]">
          {project.badgeLabel}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Metadata line: clean unboxed text with typographic separators */}
          <div className="flex items-center gap-2 text-xs text-[#777B85] font-mono mb-2">
            <span>{project.industry}</span>
            <span aria-hidden="true">·</span>
            <span>{project.serviceCategory}</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F0] tracking-tight mb-2.5 group-hover:text-[#D6FF5F] transition-colors leading-snug">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm text-[#A3A7B2] leading-relaxed line-clamp-3 mb-6">
            {project.summary}
          </p>
        </div>

        {/* Footer trigger */}
        <div className="pt-4 border-t border-[#282A33] flex items-center justify-between text-xs font-semibold text-[#F5F5F0] group-hover:text-[#D6FF5F] transition-colors">
          <span>Read Case Study</span>
          <ArrowUpRight className="w-4 h-4 text-[#777B85] group-hover:text-[#D6FF5F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </div>
  );
};
