import React from 'react';
import { PageView } from '../types';
import { ArrowLeft, Shield } from 'lucide-react';

interface PrivacyPageProps {
  onNavigate: (page: PageView) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-xs font-mono text-[#D6FF5F] hover:text-[#cbf450] mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-[#D6FF5F]" />
          <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold">
            Legal & Data Protection
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F0] tracking-tight mb-4">
          Privacy Policy & Data Notice
        </h1>
        <p className="text-xs font-mono text-[#777B85] mb-12">
          Effective Date: January 1, 2026 · Last Updated: October 2026
        </p>

        <div className="space-y-10 text-sm text-[#A3A7B2] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">1. Data Controller Information</h2>
            <p>
              This website and associated digital services are operated by <strong>ETA — E-Tactics Agency</strong>, founded by <strong>Aissa El Garram</strong>, located in Agadir 80000, Morocco. For any data protection inquiries, you may contact us directly at <a href="mailto:elgarram.aissa@outlook.com" className="text-[#D6FF5F] underline">elgarram.aissa@outlook.com</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">2. Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide when submitting a project brief or contact inquiry:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#777B85]">
              <li>Contact details: Full Name, Business Email Address, Telephone / WhatsApp number (if provided)</li>
              <li>Company information: Organization Name, Website URL, Country or Market</li>
              <li>Project specifications: Selected service category, estimated budget, timeline, and project description</li>
            </ul>
            <p className="text-xs">
              We do not collect sensitive personal data (such as health, biometric, political, or financial account details).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">3. Purpose and Legal Basis of Processing</h2>
            <p>
              We process your personal information strictly for legitimate commercial purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#777B85]">
              <li>Evaluating your inquiry and preparing tailored proposals or audit reports</li>
              <li>Communicating with you regarding project scope, scheduling discovery calls, and contract execution</li>
              <li>Fulfilling agreed-upon digital marketing, branding, or media buying services</li>
            </ul>
            <p className="text-xs">
              We never sell, rent, or trade your contact or project information with third-party advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">4. Data Retention & Confidentiality Standards</h2>
            <p>
              Client inquiries and project correspondence are retained for the duration of the commercial relationship plus standard statutory limitation periods. We treat all client business metrics, ad account information, and creative assets under strict confidentiality. Mutual Non-Disclosure Agreements (NDAs) are gladly executed prior to deeper data access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">5. Your Rights (GDPR & Moroccan Law 09-08)</h2>
            <p>
              Regardless of your jurisdiction, you have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or request complete deletion of your submission records. To exercise any of these rights, email <a href="mailto:elgarram.aissa@outlook.com" className="text-[#D6FF5F] underline">elgarram.aissa@outlook.com</a> with your request.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F5F5F0]">6. Analytics and Cookies</h2>
            <p>
              This website employs minimal, privacy-conscious technical logs strictly required for performance and security. We do not engage in cross-site tracking or unsolicited tracking beacons.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
