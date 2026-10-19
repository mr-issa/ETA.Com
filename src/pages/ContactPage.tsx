import React from 'react';
import { PageView } from '../types';
import { ContactForm } from '../components/ContactForm';
import { HelpCircle } from 'lucide-react';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: PageView) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService }) => {
  const faqs = [
    {
      q: 'How does ETA typically begin a new client engagement?',
      a: 'We review your project submission, conduct an initial audit of your existing channels, and schedule a 30-minute discovery call to confirm strategic alignment, timeline, and deliverables.'
    },
    {
      q: 'Do you work with international clients outside Morocco?',
      a: 'Yes. Our primary client markets include Morocco, France, the United Kingdom, Switzerland, Belgium, and North America. All communication and deliverables are provided in professional English or French.'
    },
    {
      q: 'What is your typical project scope and budget requirement?',
      a: 'We work across focused sprint engagements (e.g., brand strategy, landing page CRO, or ad account restructuring) starting at $1,500 – $2,500, as well as ongoing monthly performance management partnerships.'
    },
    {
      q: 'Do you offer performance guarantees?',
      a: 'In accordance with our commercial honesty code, we never make unsupported guarantees on ad algorithms or external market behavior. We guarantee disciplined methodology, transparent data access, and weekly optimization.'
    }
  ];

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#D6FF5F] uppercase font-semibold mb-3">
            <span>Project Intake</span>
            <span aria-hidden="true">·</span>
            <span>Discovery & Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F5F5F0] tracking-tight leading-tight mb-4">
            Start a project with ETA.
          </h1>
          <p className="text-base sm:text-lg text-[#A3A7B2] leading-relaxed">
            Tell us about your brand, current performance hurdles, and growth targets. We will review your materials and prepare tailored recommendations.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mb-20">
          <ContactForm initialService={initialService} />
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-16 border-t border-[#282A33]">
          <div className="max-w-2xl mb-10">
            <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
              Engagement FAQs
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight">
              Common questions before reaching out.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 bg-[#191A1F] border border-[#282A33] space-y-2">
                <div className="flex items-start gap-2.5">
                  <HelpCircle className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
                  <h3 className="text-sm font-bold text-[#F5F5F0]">
                    {faq.q}
                  </h3>
                </div>
                <p className="text-xs text-[#777B85] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
