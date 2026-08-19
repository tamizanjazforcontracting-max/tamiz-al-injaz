import React, { useState, useEffect } from 'react';
import { Language, ProjectItem, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { CostCalculator } from './components/CostCalculator';
import { ProjectsSection } from './components/ProjectsSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { QualitySafetySection } from './components/QualitySafetySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ServiceModal } from './components/ServiceModal';
import { QuoteModal } from './components/QuoteModal';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quotePresetScope, setQuotePresetScope] = useState<string>('');
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  // Sync HTML dir and lang attributes with selected language
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenQuoteModal = (preset?: string) => {
    setQuotePresetScope(preset || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 ${lang === 'ar' ? 'font-[\'Cairo\',sans-serif]' : 'font-[\'Plus_Jakarta_Sans\',sans-serif]'}`}>
      {/* Sticky Top Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onDownloadProfile={() => setIsProfileModalOpen(true)}
        />

        {/* About Section */}
        <AboutSection
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onDownloadProfile={() => setIsProfileModalOpen(true)}
        />

        {/* Services Section */}
        <ServicesSection
          lang={lang}
          onSelectService={(srv) => setSelectedService(srv)}
          onOpenQuoteModal={(serviceId) => handleOpenQuoteModal(serviceId)}
        />

        {/* Cost & Timeline Estimator Calculator */}
        <CostCalculator
          lang={lang}
          onOpenQuoteModal={(details) => handleOpenQuoteModal(details)}
        />

        {/* Projects & Portfolio Section */}
        <ProjectsSection
          lang={lang}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Work Methodology & Process Section */}
        <WorkProcessSection lang={lang} />

        {/* Quality, Safety & 10-Year Warranty Section */}
        <QualitySafetySection
          lang={lang}
          onOpenQuoteModal={() => handleOpenQuoteModal('استفسار عن الضمانات الإنشائية واشتراطات كود البناء السعودي')}
        />

        {/* Testimonials & Trust Partners */}
        <TestimonialsSection lang={lang} />

        {/* FAQs Section */}
        <FAQSection lang={lang} />

        {/* Contact & RFQ Section */}
        <ContactSection
          lang={lang}
          initialMessage={quotePresetScope}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        lang={lang}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating Interactive WhatsApp Concierge */}
      <FloatingWhatsApp lang={lang} />

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        lang={lang}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(title) => handleOpenQuoteModal(`طلب مشروع مماثل: ${title}`)}
      />

      <ServiceModal
        service={selectedService}
        lang={lang}
        onClose={() => setSelectedService(null)}
        onOpenQuote={(title) => handleOpenQuoteModal(`طلب تسعير خدمة: ${title}`)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        lang={lang}
        onClose={() => setIsQuoteModalOpen(false)}
        presetScope={quotePresetScope}
      />

      <CompanyProfileModal
        isOpen={isProfileModalOpen}
        lang={lang}
        onClose={() => setIsProfileModalOpen(false)}
        onOpenQuote={() => {
          setIsProfileModalOpen(false);
          handleOpenQuoteModal();
        }}
      />
    </div>
  );
}
