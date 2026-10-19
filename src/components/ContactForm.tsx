import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import { servicesData } from '../data/servicesData';
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, Phone, MapPin } from 'lucide-react';

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService, onSuccess }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    company: '',
    website: '',
    country: 'Morocco',
    service: initialService || servicesData[0].title,
    budget: '$2,500 - $5,000',
    timeline: 'Within 1 month',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedData, setSubmittedData] = useState<{ id: string; timestamp: string } | null>(null);

  const countries = [
    'Morocco',
    'France',
    'United Kingdom',
    'Germany',
    'Spain',
    'Belgium / Switzerland',
    'United States',
    'Canada',
    'United Arab Emirates / GCC',
    'Other International'
  ];

  const budgetTiers = [
    'Under $2,500',
    '$2,500 - $5,000',
    '$5,000 - $10,000',
    '$10,000+',
    'Undisclosed / Discussion Required'
  ];

  const timelineOptions = [
    'Immediate (within 1-2 weeks)',
    'Within 1 month',
    '1 - 3 months',
    'Exploring / Strategic Planning'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    // Validation
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMessage('Please provide your full name.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMessage('Please describe your project objectives (minimum 10 characters).');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setSubmittedData({
        id: data.inquiryId,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      // Also save locally as redundancy
      const existingInquiries = JSON.parse(localStorage.getItem('eta_user_inquiries') || '[]');
      existingInquiries.push({ ...formData, id: data.inquiryId, date: new Date().toISOString() });
      localStorage.setItem('eta_user_inquiries', JSON.stringify(existingInquiries));

      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error communicating with the server.';
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      {/* Left Column: Direct Contact Details & SLA */}
      <div className="lg:col-span-5 space-y-8 p-6 sm:p-8 bg-[#191A1F] border border-[#282A33]">
        <div>
          <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-2">
            Project Intake & Inquiry
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F0] tracking-tight">
            Tell Us About Your Project
          </h3>
          <p className="mt-3 text-sm text-[#777B85] leading-relaxed">
            Every submission is reviewed directly by founder Aissa El Garram. We evaluate your market, assess your commercial objectives, and respond within 24 business hours.
          </p>
        </div>

        {/* Verified details */}
        <div className="pt-6 border-t border-[#282A33] space-y-4">
          <div className="flex items-start gap-3 text-xs text-[#A3A7B2]">
            <MapPin className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F5F5F0] block font-medium">Headquarters & Operations</strong>
              <span>Agadir 80000, Morocco</span>
              <span className="text-[#777B85] block mt-0.5">Serving clients across Morocco, France, Europe & International</span>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-[#A3A7B2]">
            <Mail className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F5F5F0] block font-medium">Direct Founder Email</strong>
              <a
                href="mailto:elgarram.aissa@outlook.com"
                className="text-[#F5F5F0] hover:text-[#D6FF5F] transition-colors"
              >
                elgarram.aissa@outlook.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 text-xs text-[#A3A7B2]">
            <Phone className="w-4 h-4 text-[#D6FF5F] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F5F5F0] block font-medium">Direct Telephone & WhatsApp</strong>
              <a
                href="tel:+212627130198"
                className="text-[#F5F5F0] hover:text-[#D6FF5F] transition-colors font-mono"
              >
                +212 6 27130198
              </a>
              <span className="text-[#777B85] block mt-0.5">Monday – Friday: 09:00 – 19:00 (GMT+1)</span>
            </div>
          </div>
        </div>

        {/* Commitment box */}
        <div className="p-4 bg-[#101114] border border-[#282A33] text-xs text-[#777B85] space-y-2">
          <div className="text-[#F5F5F0] font-semibold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#D6FF5F]" />
            <span>The ETA Confidentiality Standard</span>
          </div>
          <p className="leading-relaxed">
            We sign NDAs upon request. We never share, resell, or publicly display your commercial metrics or campaign data without explicit written consent.
          </p>
        </div>
      </div>

      {/* Right Column: Intake Form */}
      <div className="lg:col-span-7 bg-[#191A1F] border border-[#282A33] p-6 sm:p-10">
        {submittedData ? (
          <div className="py-12 px-4 text-center space-y-6">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#101114] border border-[#D6FF5F] text-[#D6FF5F]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-[#F5F5F0] tracking-tight">
                Inquiry Received
              </h4>
              <p className="font-mono text-xs text-[#D6FF5F] mt-1">
                Reference ID: {submittedData.id}
              </p>
            </div>
            <p className="text-sm text-[#A3A7B2] max-w-md mx-auto leading-relaxed">
              Thank you for sharing your project goals. Aissa El Garram has received your brief and will review your requirements. You will receive an initial response at <strong className="text-[#F5F5F0]">{formData.email}</strong> within 24 business hours.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmittedData(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    company: '',
                    website: '',
                    country: 'Morocco',
                    service: servicesData[0].title,
                    budget: '$2,500 - $5,000',
                    timeline: 'Within 1 month',
                    description: ''
                  });
                }}
                className="px-5 py-2.5 text-xs font-semibold text-[#F5F5F0] bg-[#101114] border border-[#282A33] hover:border-[#D6FF5F] transition-colors cursor-pointer"
              >
                Submit Another Inquiry
              </button>
              <a
                href={`mailto:elgarram.aissa@outlook.com?subject=Regarding Inquiry ${submittedData.id}`}
                className="px-5 py-2.5 text-xs font-bold text-[#101114] bg-[#D6FF5F] hover:bg-[#cbf450] transition-colors"
              >
                Email Aissa Directly
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {errorMessage && (
              <div className="p-4 bg-red-950/40 border border-red-500/50 flex items-start gap-3 text-xs text-red-200">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <strong className="block font-semibold">Unable to submit</strong>
                  <span>{errorMessage}</span>
                </div>
              </div>
            )}

            {/* Row 1: Name and Business Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="fullName" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Full Name <span className="text-[#D6FF5F]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Marc Dubois"
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] placeholder-[#777B85] focus:border-[#D6FF5F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Business Email <span className="text-[#D6FF5F]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] placeholder-[#777B85] focus:border-[#D6FF5F] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 2: Company & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Company / Brand Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Atlas Atelier"
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] placeholder-[#777B85] focus:border-[#D6FF5F] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Current Website / Store URL (optional)
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] placeholder-[#777B85] focus:border-[#D6FF5F] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Row 3: Country / Market & Service of Interest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="country" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Target Market / Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] focus:border-[#D6FF5F] focus:outline-none transition-colors cursor-pointer"
                >
                  {countries.map((c) => (
                    <option key={c} value={c} className="bg-[#191A1F] text-[#F5F5F0]">
                      {c}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] focus:border-[#D6FF5F] focus:outline-none transition-colors cursor-pointer"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title} className="bg-[#191A1F] text-[#F5F5F0]">
                      {s.code}. {s.title}
                    </option>
                  ))}
                  <option value="Comprehensive Agency Partnership" className="bg-[#191A1F] text-[#F5F5F0]">
                    Full Agency Partnership / Multi-Service
                  </option>
                </select>
              </div>
            </div>

            {/* Row 4: Budget Tier & Timeline */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="budget" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Estimated Monthly / Project Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] focus:border-[#D6FF5F] focus:outline-none transition-colors cursor-pointer"
                >
                  {budgetTiers.map((b) => (
                    <option key={b} value={b} className="bg-[#191A1F] text-[#F5F5F0]">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                  Desired Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] focus:border-[#D6FF5F] focus:outline-none transition-colors cursor-pointer"
                >
                  {timelineOptions.map((t) => (
                    <option key={t} value={t} className="bg-[#191A1F] text-[#F5F5F0]">
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 5: Description */}
            <div>
              <label htmlFor="description" className="block text-xs font-mono uppercase tracking-wider text-[#A3A7B2] mb-2">
                Project Overview & Growth Challenge <span className="text-[#D6FF5F]">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Briefly describe your business, primary offer, target audience, and what you aim to achieve..."
                className="w-full px-4 py-3 bg-[#101114] border border-[#282A33] text-sm text-[#F5F5F0] placeholder-[#777B85] focus:border-[#D6FF5F] focus:outline-none transition-colors resize-y"
              />
              <span className="text-[11px] text-[#777B85] mt-1 block">
                Minimum 10 characters. Clear context helps us prepare actionable insights before our first discussion.
              </span>
            </div>

            {/* Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#D6FF5F] hover:bg-[#cbf450] disabled:opacity-50 text-[#101114] text-xs font-bold tracking-wide uppercase transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-[#D6FF5F]/20"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Brief...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
