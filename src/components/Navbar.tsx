import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { Logo } from './Logo';
import {
  Phone,
  MessageSquare,
  Globe,
  Menu,
  X,
  FileText,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MapPin
} from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', labelAr: 'الرئيسية', labelEn: 'Home' },
    { href: '#about', labelAr: 'من نحن', labelEn: 'About Us' },
    { href: '#services', labelAr: 'خدماتنا', labelEn: 'Services' },
    { href: '#projects', labelAr: 'مشاريعنا', labelEn: 'Projects' },
    { href: '#calculator', labelAr: 'طلب دراسة التكلفة', labelEn: 'Get Project Quote' },
    { href: '#process', labelAr: 'مراحل العمل', labelEn: 'Process' },
    { href: '#contact', labelAr: 'تواصل معنا', labelEn: 'Contact' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-slate-800/80 py-3'
          : 'bg-gradient-to-b from-slate-950/95 via-slate-950/70 to-transparent py-4'
      }`}
    >
      {/* Top Bar for contact info on larger screens */}
      {!isScrolled && (
        <div className="hidden lg:block border-b border-slate-800/60 pb-2.5 mb-2.5 text-xs text-slate-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>{lang === 'ar' ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
                <span>{lang === 'ar' ? `سجل تجاري معتمد: ${COMPANY_INFO.crNumber}` : `CR: ${COMPANY_INFO.crNumber}`}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {/* Quick Social Icons */}
              <div className="flex items-center gap-2 ltr:flex-row rtl:flex-row">
                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/20 text-slate-300 hover:text-blue-400 flex items-center justify-center transition-colors"
                  title="Facebook"
                >
                  <Facebook className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-600/20 text-slate-300 hover:text-pink-400 flex items-center justify-center transition-colors"
                  title="Instagram"
                >
                  <Instagram className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-colors"
                  title="Twitter / X"
                >
                  <Twitter className="w-3 h-3" />
                </a>
                <a
                  href={COMPANY_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-6 h-6 rounded-md bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:bg-rose-600/20 text-slate-300 hover:text-rose-400 flex items-center justify-center transition-colors"
                  title={lang === 'ar' ? 'خرائط جوجل' : 'Google Maps'}
                >
                  <MapPin className="w-3 h-3" />
                </a>
              </div>

              <span className="text-slate-700">|</span>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <span>{COMPANY_INFO.email}</span>
              </a>
              <span className="text-slate-700">|</span>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                  lang === 'ar' ? 'السلام عليكم، أود الاستفسار عن خدمات مؤسسة تميز الإنجاز للمقاولات' : 'Hello, I would like to inquire about your contracting services'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'خدمة العملاء واتساب' : 'WhatsApp Support'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with exact vector icon & typography */}
          <a href="#home" id="brand-logo-link" className="inline-block">
            <Logo lang={lang} size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Toggle */}
            <button
              onClick={onToggleLang}
              id="lang-toggle-btn"
              className="px-2.5 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-cyan-400 border border-slate-700/60 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Request Quote Button */}
            <button
              onClick={onOpenQuoteModal}
              id="request-quote-nav-btn"
              className="relative inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 ml-1.5 mr-1.5" />
              <span>{lang === 'ar' ? 'طلب تسعير مجاني' : 'Request a Quote'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleLang}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800/90 text-slate-200 hover:text-cyan-400 border border-slate-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950/98 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fade-in shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-slate-200 hover:text-cyan-400 hover:bg-slate-900 font-medium text-sm transition-colors"
              >
                {lang === 'ar' ? link.labelAr : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 space-y-2.5">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'ar' ? 'طلب تسعير مجاني للمشروع' : 'Request Free Quote'}</span>
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                lang === 'ar' ? 'السلام عليكم، أود الاستفسار عن خدمات مؤسسة تميز الإنجاز للمقاولات' : 'Hello, I want to inquire about your services'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'ar' ? 'محادثة عبر الواتساب' : 'Chat on WhatsApp'}</span>
            </a>

            {/* Mobile Social Links Grid */}
            <div className="grid grid-cols-4 gap-2 pt-2 border-t border-slate-800">
              <a
                href={COMPANY_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 flex flex-col items-center justify-center gap-1 text-[10px]"
              >
                <Facebook className="w-4 h-4" />
                <span>فيسبوك</span>
              </a>
              <a
                href={COMPANY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-pink-400 flex flex-col items-center justify-center gap-1 text-[10px]"
              >
                <Instagram className="w-4 h-4" />
                <span>انستقرام</span>
              </a>
              <a
                href={COMPANY_INFO.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 flex flex-col items-center justify-center gap-1 text-[10px]"
              >
                <Twitter className="w-4 h-4" />
                <span>تويتر</span>
              </a>
              <a
                href={COMPANY_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 rounded-lg bg-slate-900 border border-slate-800 text-rose-400 flex flex-col items-center justify-center gap-1 text-[10px]"
              >
                <MapPin className="w-4 h-4" />
                <span>الخريطة</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
