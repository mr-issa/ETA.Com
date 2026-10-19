import React from 'react';
import { PageView } from '../types';
import { verifiedTestimonials } from '../data/testimonialsData';
import { CheckCircle2, ArrowRight, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageView) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  const principles = [
    {
      num: '01',
      title: 'Commercial Honesty Over Vanities',
      desc: 'We prioritize customer acquisition cost, conversion rate, and real pipeline growth over impressions, follower counts, and vanity metrics.'
    },
    {
      num: '02',
      title: 'Craft and Strategy Combined',
      desc: 'Great visuals fail without an understanding of customer incentives. Rigorous strategy fails if the creative execution looks amateur. We execute both with equal discipline.'
    },
    {
      num: '03',
      title: 'Direct Founder Accountability',
      desc: 'ETA is founder-led. You collaborate directly with Aissa El Garram and trusted senior execution partners—not junior account managers learning on your dime.'
    },
    {
      num: '04',
      title: 'Transparent Attribution',
      desc: 'We never hide behind confusing multi-touch jargon. We build clear tracking setups so you know exactly which campaigns, creatives, and channels generate return.'
    },
    {
      num: '05',
      title: 'International Agility',
      desc: 'Operating from Morocco with fluent reach into France, Europe, and international English-speaking markets, we deliver high-tier agency standards with lean, responsive execution.'
    }
  ];

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D6FF5F] uppercase font-semibold mb-3">
            <span>About ETA</span>
            <span aria-hidden="true">·</span>
            <span>Agency & Founder</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight mb-6">
            A founder-led agency connecting creative intuition with measurable commercial growth.
          </h1>
          <p className="text-base sm:text-lg text-[#A3A7B2] leading-relaxed">
            ETA (E-Tactics Agency) was established to solve a recurring frustration in modern business: agencies that either produce pretty visuals without business understanding, or run technical ad accounts with lifeless, uninspired creative.
          </p>
        </div>

        {/* Founder Profile Section */}
        <div className="p-8 sm:p-12 bg-[#191A1F] border border-[#282A33] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Graphic / Monogram visual */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center p-8 bg-[#101114] border border-[#282A33] text-center">
              <div className="w-24 h-24 rounded bg-[#191A1F] border-2 border-[#D6FF5F] flex items-center justify-center mb-6 shadow-xl">
                <span className="font-extrabold text-3xl text-[#D6FF5F] tracking-tighter">
                  AEG
                </span>
              </div>
              <h2 className="text-xl font-bold text-[#F5F5F0]">
                Aissa El Garram
              </h2>
              <span className="text-xs font-mono text-[#D6FF5F] mt-1">
                Founder · Creative Strategist & Media Buyer
              </span>
              <div className="mt-4 pt-4 border-t border-[#282A33] w-full text-xs text-[#777B85] space-y-1 font-mono">
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#D6FF5F]" />
                  <span>Agadir 80000, Morocco</span>
                </div>
                <div className="text-[11px] text-[#A3A7B2] pt-1">
                  Morocco · France · Europe · Global
                </div>
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-xs">
                <a
                  href="https://aissaelgarram.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[#A3A7B2] hover:text-[#D6FF5F] transition-colors"
                >
                  <span>Reference Portfolio</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Right: Founder Narrative & Facts */}
            <div className="lg:col-span-8 space-y-5">
              <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block">
                The Founder’s Background
              </span>
              <h3 className="text-2xl font-bold text-[#F5F5F0] tracking-tight">
                Hands-on strategy built from real campaign execution.
              </h3>
              <div className="space-y-4 text-sm sm:text-base text-[#A3A7B2] leading-relaxed">
                <p>
                  Aissa El Garram has developed a hands-on foundation spanning media buying, paid social, brand identity, email automation, and conversion-focused product design (UI/UX).
                </p>
                <p>
                  Through collaborations with creative teams like <strong className="text-[#F5F5F0]">MDG.Lab</strong>, e-commerce producers like <strong className="text-[#F5F5F0]">AEM-TU</strong>, and independent artisans, Aissa demonstrated that combining high-taste visual storytelling with structured paid advertising consistently beats generic, template-driven marketing.
                </p>
                <p className="text-xs sm:text-sm text-[#777B85]">
                  ETA was founded to institutionalize this approach into a dedicated agency: lean, focused, and completely transparent about what works and what doesn’t.
                </p>
              </div>

              {/* Verified Competencies */}
              <div className="pt-4 border-t border-[#282A33]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F5F5F0] font-semibold block mb-3">
                  Core Technical & Strategic Competencies
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#F5F5F0]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Paid Social (Meta & TikTok)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Google Search & Ads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Creative Ad Direction</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Brand Identity & Messaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Lifecycle Email Automation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D6FF5F]" />
                    <span>Product Design (UI/UX)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Agency Principles */}
        <div className="mb-20">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
              Our Principles
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight">
              Five non-negotiable rules guiding our client work.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="p-6 sm:p-8 bg-[#191A1F] border border-[#282A33]">
                <div className="font-mono text-xl font-bold text-[#D6FF5F] mb-4">
                  {p.num}
                </div>
                <h3 className="text-base font-bold text-[#F5F5F0] mb-2 tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs text-[#777B85] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verified Collaborator Testimonials */}
        <div className="mb-20">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
              Collaborator Endorsements
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight">
              Verified feedback from partners and clients.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {verifiedTestimonials.map((t, idx) => (
              <div key={idx} className="p-6 sm:p-7 bg-[#191A1F] border border-[#282A33] flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-[#F5F5F0] italic leading-relaxed mb-6">
                  “{t.quote}”
                </p>
                <div className="pt-4 border-t border-[#282A33]">
                  <strong className="text-xs text-[#F5F5F0] block font-semibold">{t.author}</strong>
                  <span className="text-[11px] text-[#777B85]">{t.role} · {t.organization}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="p-8 sm:p-12 bg-[#191A1F] border border-[#282A33] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-[#F5F5F0]">
              Ready to work with a dedicated strategic partner?
            </h3>
            <p className="text-xs sm:text-sm text-[#777B85] max-w-xl">
              We take on a limited number of clients per quarter to ensure deep involvement and direct founder execution on every account.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contact')}
            className="px-8 py-3.5 bg-[#D6FF5F] hover:bg-[#cbf450] text-[#101114] text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shrink-0"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
