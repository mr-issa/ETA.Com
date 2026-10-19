import React from 'react';
import { ContactForm } from './ContactForm';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="relative w-full max-w-5xl bg-[#191A1F] border border-[#282A33] shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#777B85] hover:text-[#F5F5F0] hover:bg-[#282A33] transition-colors cursor-pointer z-10"
          aria-label="Close contact modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-12">
          <span className="font-mono text-xs text-[#D6FF5F] uppercase tracking-wider font-semibold block mb-1">
            Project Intake
          </span>
          <h2 id="contact-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F5F5F0] tracking-tight">
            Start Your Project with ETA
          </h2>
          <p className="text-xs sm:text-sm text-[#777B85] mt-1">
            Share your goals and requirements. Aissa El Garram will review your brief within 24 business hours.
          </p>
        </div>

        <ContactForm initialService={initialService} onSuccess={onClose} />
      </div>
    </div>
  );
};
