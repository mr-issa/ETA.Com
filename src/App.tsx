import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState<string | undefined>(undefined);

  // Sync with browser URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'services', 'work', 'about', 'contact', 'privacy'].includes(hash)) {
        setCurrentPage(hash as PageView);
      } else if (hash === '') {
        setCurrentPage('home');
      } else {
        setCurrentPage('not-found');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageView) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (serviceName?: string) => {
    setInquiryService(serviceName);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#101114] text-[#F5F5F0] font-sans antialiased selection:bg-[#D6FF5F] selection:text-[#101114]">
      {/* Top Bar Contract Compliant Navigation */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onOpenInquiryWithService={(svc) => handleOpenContactModal(svc)}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenInquiryWithService={(svc) => handleOpenContactModal(svc)}
          />
        )}
        {currentPage === 'work' && (
          <WorkPage onNavigate={navigateTo} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={navigateTo} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            initialService={inquiryService}
            onNavigate={navigateTo}
          />
        )}
        {currentPage === 'privacy' && (
          <PrivacyPage onNavigate={navigateTo} />
        )}
        {currentPage === 'not-found' && (
          <NotFoundPage onNavigate={navigateTo} />
        )}
      </main>

      {/* Consistent Footer */}
      <Footer
        onNavigate={navigateTo}
        onSelectService={(serviceId) => {
          navigateTo('services');
          console.log(`Service selected: ${serviceId}`);
        }}
      />

      {/* Global Interactive Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={inquiryService}
      />
    </div>
  );
}
