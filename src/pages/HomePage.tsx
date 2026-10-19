import React, { useState } from 'react';
import { PageView, ServiceItem, ProjectItem } from '../types';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { verifiedTestimonials } from '../data/testimonialsData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { ServiceDetailModal } from '../components/ServiceDetailModal';
import { CaseStudyModal } from '../components/CaseStudyModal';
import { ArrowUpRight, ArrowRight, Check, Compass, BarChart3, Layers, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenInquiryWithService?: (serviceName: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenInquiryWithService
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [heroImageError, setHeroImageError] = useState(false);

  const heroImage = '/src/assets/images/hero_creative_agency_1792447264434.jpg';

  const handleInquiryFromModal = (serviceName: string) => {
    if (onOpenInquiryWithService) {
      onOpenInquiryWithService(serviceName);
    } else {
      onNavigate('contact');
    }
  };

  const howWeWorkSteps = [
    {
      step: '01',
      title: 'Discover',
      tagline: 'Understand the business, audience, offer, and objectives.',
      description: 'We begin by analyzing your unit economics, current marketing assets, audience psychology, and competitive landscape. No assumptions; we identify the real leverage points.'
    },
    {
      step: '02',
      title: 'Strategize',
      tagline: 'Build a focused marketing and creative plan.',
      description: 'We construct an actionable campaign blueprint: channel allocation, creative messaging angles, testing hypotheses, and tracking requirements tailored to your revenue goals.'
    },
    {
      step: '03',
      title: 'Execute',
      tagline: 'Launch campaigns, create content, and deliver agreed assets.',
      description: 'We produce campaign creative, build responsive landing pages, structure ad accounts, and deploy campaigns with precise conversion tracking from day one.'
    },
    {
      step: '04',
      title: 'Optimize',
      tagline: 'Evaluate available data and improve the work over time.',
      description: 'We analyze real engagement and customer acquisition data. We double down on winning creative angles, eliminate underperforming ad sets, and iterate weekly.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-[#282A33] overflow-hidden">
        {/* Subtle background ambient grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#191A1F_1px,transparent_1px),linear-gradient(to_bottom,#191A1F_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Eyebrow, Display Headline & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Hero Eyebrow (unboxed text with typographic separators) */}
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D6FF5F] font-semibold">
                <span>DIGITAL MARKETING</span>
                <span aria-hidden="true">·</span>
                <span>CREATIVE STRATEGY</span>
                <span aria-hidden="true">·</span>
                <span>BRAND GROWTH</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5F5F0] tracking-tight leading-[1.08] text-balance">
                We turn digital strategy into business growth.
              </h1>

              {/* Supporting Body */}
              <p className="text-base sm:text-lg text-[#A3A7B2] leading-relaxed max-w-2xl">
                ETA helps ambitious brands reach the right audience, strengthen their digital presence, and turn attention into meaningful action through performance marketing, creative strategy, and digital experiences.
              </p>

              {/* Primary & Secondary Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 text-xs font-bold text-[#101114] bg-[#D6FF5F] hover:bg-[#cbf450] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[#D6FF5F]/20"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('work')}
                  className="px-7 py-3.5 text-xs font-semibold text-[#F5F5F0] bg-[#191A1F] border border-[#282A33] hover:border-[#D6FF5F]/60 active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Our Work</span>
                  <ArrowUpRight className="w-4 h-4 text-[#777B85]" />
                </button>
              </div>

              {/* Trust signals (clean, unboxed text) */}
              <div className="pt-8 border-t border-[#282A33]/80 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#777B85] font-mono">
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D6FF5F]" />
                  <span>Morocco · France · Europe · International</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D6FF5F]" />
                  <span>Founder-Led Strategic Execution</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D6FF5F]" />
                  <span>Accountable Data & Attribution</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Visual Asset */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[16/9] lg:aspect-[4/3] w-full bg-[#191A1F] border border-[#282A33] overflow-hidden group shadow-2xl">
                {!heroImageError ? (
                  <img
                    src={heroImage}
                    alt="ETA — E-Tactics Agency Creative Studio Environment"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImageError(true)}
                    className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#191A1F] to-[#101114]">
                    <span className="font-mono text-xs text-[#D6FF5F] tracking-widest uppercase mb-2">
                      ETA Creative Strategy
                    </span>
                    <span className="text-xl font-bold text-[#F5F5F0]">
                      Creative Strategy. Measurable Growth.
                    </span>
                  </div>
                )}
                {/* Visual caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#101114] via-[#101114]/80 to-transparent flex items-center justify-between text-[11px] font-mono text-[#A3A7B2]">
                  <span>Agency Direction & Campaign Studio</span>
                  <span className="text-[#D6FF5F]">ETA · 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. AGENCY INTRODUCTION */}
      <section className="py-20 sm:py-28 bg-[#101114] border-b border-[#282A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-3">
              Agency Philosophy
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight mb-6">
              Good marketing is more than visibility. It moves your business forward.
            </h2>
            <div className="space-y-4 text-base sm:text-lg text-[#A3A7B2] leading-relaxed">
              <p>
                Too many agencies treat marketing as an isolated creative exercise or a black-box ad spend game. At ETA, we connect audience psychology, commercial strategy, creative execution, and continuous performance measurement into a coherent growth system.
              </p>
              <p className="text-sm sm:text-base text-[#777B85]">
                Whether launching a direct-to-consumer brand, scaling a hospitality retreat, or modernizing an established enterprise, we build assets that elevate brand perception while driving accountable economic return.
              </p>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#282A33]">
            <div className="p-6 bg-[#191A1F] border border-[#282A33]">
              <Compass className="w-5 h-5 text-[#D6FF5F] mb-4" />
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2">Audience Depth</h3>
              <p className="text-xs text-[#777B85] leading-relaxed">
                Deep customer research to understand what motivates your buyers and why they choose you over competitors.
              </p>
            </div>

            <div className="p-6 bg-[#191A1F] border border-[#282A33]">
              <Layers className="w-5 h-5 text-[#D6FF5F] mb-4" />
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2">Creative Rigor</h3>
              <p className="text-xs text-[#777B85] leading-relaxed">
                Art-directed visuals, persuasive copy, and modern digital design that command attention in saturated feeds.
              </p>
            </div>

            <div className="p-6 bg-[#191A1F] border border-[#282A33]">
              <BarChart3 className="w-5 h-5 text-[#D6FF5F] mb-4" />
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2">Media Discipline</h3>
              <p className="text-xs text-[#777B85] leading-relaxed">
                Methodical media buying across Meta and Google Ads, avoiding budget waste through strict attribution and testing.
              </p>
            </div>

            <div className="p-6 bg-[#191A1F] border border-[#282A33]">
              <Sparkles className="w-5 h-5 text-[#D6FF5F] mb-4" />
              <h3 className="text-base font-bold text-[#F5F5F0] mb-2">Conversion Focus</h3>
              <p className="text-xs text-[#777B85] leading-relaxed">
                Friction-free landing pages and automated customer journeys that convert incoming attention into paying clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW */}
      <section className="py-20 sm:py-28 bg-[#101114] border-b border-[#282A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
                What We Do
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
                Strategic capabilities built for commercial impact.
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="flex items-center gap-2 text-xs font-semibold text-[#D6FF5F] hover:text-[#cbf450] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View All 8 Detailed Service Roadmaps</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Bento-style Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                onOpenDetails={(s) => setSelectedService(s)}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#191A1F] border border-[#282A33] hover:border-[#D6FF5F] text-xs font-semibold text-[#F5F5F0] transition-colors cursor-pointer"
            >
              <span>Explore All Capabilities (SEO, Product Design, CRO & Media)</span>
              <ArrowRight className="w-4 h-4 text-[#D6FF5F]" />
            </button>
          </div>
        </div>
      </section>

      {/* 4. SELECTED WORK & CASE STUDIES */}
      <section className="py-20 sm:py-28 bg-[#101114] border-b border-[#282A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
                Portfolio & Case Studies
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
                Selected work, real collaborations & strategic concepts.
              </h2>
              <p className="mt-2 text-sm text-[#777B85] max-w-xl">
                We believe in total transparency: verified founder projects and clearly labelled speculative campaigns demonstrating our strategic thinking.
              </p>
            </div>
            <button
              onClick={() => onNavigate('work')}
              className="flex items-center gap-2 text-xs font-semibold text-[#D6FF5F] hover:text-[#cbf450] transition-colors cursor-pointer self-start md:self-auto"
            >
              <span>View Full Case Study Archive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 3).map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW WE WORK (01 Discover, 02 Strategize, 03 Execute, 04 Optimize) */}
      <section className="py-20 sm:py-28 bg-[#101114] border-b border-[#282A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
              Methodology
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
              A transparent four-step process for accountable growth.
            </h2>
            <p className="mt-3 text-sm text-[#777B85]">
              No ambiguous retainer retainers or endless discovery phases. We move with speed and strategic clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howWeWorkSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 sm:p-8 bg-[#191A1F] border border-[#282A33] flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-extrabold text-[#D6FF5F] mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F0] mb-2 tracking-tight">
                    {step.title}
                  </h3>
                  <div className="text-xs font-medium text-[#D6FF5F] mb-3">
                    {step.tagline}
                  </div>
                  <p className="text-xs text-[#777B85] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOUNDER INTRODUCTION & CLIENT VOICES */}
      <section className="py-20 sm:py-28 bg-[#101114] border-b border-[#282A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Founder narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block">
                Leadership & Origin
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight">
                Strategy led by people who care about the work.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#A3A7B2] leading-relaxed">
                <p>
                  ETA was founded by <strong className="text-[#F5F5F0] font-semibold">Aissa El Garram</strong>, a digital marketer, media buyer, and creative strategist based in Agadir, Morocco.
                </p>
                <p>
                  Having collaborated on digital campaigns, brand identities, and e-commerce growth with partners such as MDG.Lab and independent brands across Morocco and Europe, Aissa established ETA to provide businesses with a more direct, agile alternative to bloated traditional agencies.
                </p>
                <p className="text-xs sm:text-sm text-[#777B85]">
                  When you work with ETA, your strategy is not passed down to junior account managers. It is planned, executed, and monitored directly by seasoned practitioners who care deeply about the craft and your commercial outcome.
                </p>
              </div>

              {/* Verified skills breakdown */}
              <div className="pt-6 border-t border-[#282A33] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-[#F5F5F0]">
                <div className="p-3 bg-[#191A1F] border border-[#282A33]">
                  <span className="text-[#D6FF5F] block font-bold mb-1">01</span>
                  <span>Media Buying</span>
                </div>
                <div className="p-3 bg-[#191A1F] border border-[#282A33]">
                  <span className="text-[#D6FF5F] block font-bold mb-1">02</span>
                  <span>Creative Strategy</span>
                </div>
                <div className="p-3 bg-[#191A1F] border border-[#282A33]">
                  <span className="text-[#D6FF5F] block font-bold mb-1">03</span>
                  <span>Brand Identity</span>
                </div>
                <div className="p-3 bg-[#191A1F] border border-[#282A33]">
                  <span className="text-[#D6FF5F] block font-bold mb-1">04</span>
                  <span>Product Design</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D6FF5F] hover:text-[#cbf450] transition-colors cursor-pointer"
                >
                  <span>Read the Full Agency & Founder Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Client Testimonials (Verified from founder portfolio) */}
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs text-[#777B85] uppercase tracking-wider font-semibold block mb-2">
                Verified Collaborator Voices
              </span>

              {verifiedTestimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#191A1F] border border-[#282A33] text-left space-y-3"
                >
                  <p className="text-xs sm:text-sm text-[#F5F5F0] italic leading-relaxed">
                    “{t.quote}”
                  </p>
                  <div className="pt-2 border-t border-[#282A33] flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-[#F5F5F0] block font-medium">{t.author}</strong>
                      <span className="text-[#777B85]">{t.role} · {t.organization}</span>
                    </div>
                    {t.language === 'French' && (
                      <span className="text-[10px] font-mono text-[#D6FF5F]">FR</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. FINAL CONVERSION SECTION */}
      <section className="py-20 sm:py-28 bg-[#101114]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 bg-[#191A1F] border border-[#282A33] relative overflow-hidden">
            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block">
                Next Steps
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
                Have a growth challenge? Let’s talk.
              </h2>
              <p className="text-sm sm:text-base text-[#A3A7B2] leading-relaxed">
                Whether you need a performance marketing overhaul, a compelling brand positioning, or a conversion-focused digital experience, we are ready to analyze your challenges and provide an honest assessment.
              </p>
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-3.5 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-[#D6FF5F]/20"
                >
                  <span>Tell Us About Your Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="mailto:elgarram.aissa@outlook.com"
                  className="px-6 py-3.5 bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] text-[#F5F5F0] text-xs font-semibold transition-colors flex items-center gap-2"
                >
                  <span>Direct Email Inquiry</span>
                </a>
              </div>
            </div>

            {/* Decorative subtle graphic element */}
            <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 rounded-full bg-[#D6FF5F]/5 blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Modals */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={handleInquiryFromModal}
      />

      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={() => onNavigate('contact')}
      />
    </div>
  );
};
