import React from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { Logo } from './Logo';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  MessageSquare,
  Award,
  Facebook,
  Instagram,
  Twitter,
  Navigation
} from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenQuoteModal }) => {
  const isRtl = lang === 'ar';
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'Facebook',
      nameAr: 'فيسبوك',
      url: COMPANY_INFO.facebook,
      icon: <Facebook className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />,
      hoverBg: 'hover:bg-blue-600/20 hover:border-blue-500/50'
    },
    {
      name: 'Instagram',
      nameAr: 'انستقرام',
      url: COMPANY_INFO.instagram,
      icon: <Instagram className="w-4 h-4 text-teal-400 group-hover:text-teal-300" />,
      hoverBg: 'hover:bg-pink-600/20 hover:border-pink-500/50'
    },
    {
      name: 'X (Twitter)',
      nameAr: 'تويتر / X',
      url: COMPANY_INFO.twitter,
      icon: <Twitter className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />,
      hoverBg: 'hover:bg-cyan-600/20 hover:border-cyan-500/50'
    },
    {
      name: 'Google Maps',
      nameAr: 'خريطة الموقع',
      url: COMPANY_INFO.googleMaps,
      icon: <MapPin className="w-4 h-4 text-rose-400 group-hover:text-rose-300" />,
      hoverBg: 'hover:bg-rose-600/20 hover:border-rose-500/50'
    },
    {
      name: 'WhatsApp',
      nameAr: 'واتساب',
      url: `https://wa.me/${COMPANY_INFO.whatsapp}`,
      icon: <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300" />,
      hoverBg: 'hover:bg-emerald-600/20 hover:border-emerald-500/50'
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Footer 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="flex items-center gap-3 group inline-block">
              <Logo variant="icon" size="md" />
              <div className="flex flex-col">
                <div className="text-base font-black tracking-tight text-white flex items-center gap-1.5">
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {lang === 'ar' ? 'تميز الإنجاز' : 'TAMIZ AL-INJAZ'}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
                    {lang === 'ar' ? 'للمقاولات' : 'CONTRACTING'}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400">
                  {lang === 'ar' ? 'مؤسسة تميز الإنجاز للمقاولات العامة' : 'General Contracting Establishment'}
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {lang === 'ar'
                ? 'شريككم الهندسي الموثوق لتنفيذ المشاريع الإنشائية، التشطيبات الفاخرة، أعمال البنية التحتية وإدارة المشاريع بالأحساء وجميع مناطق المملكة العربية السعودية.'
                : 'Your trusted partner for civil construction, luxury fit-out, infrastructure networks and turnkey engineering in Saudi Arabia.'}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'ar' ? `سجل تجاري: ${COMPANY_INFO.crNumber} - الأحساء` : `CR: ${COMPANY_INFO.crNumber} - Al-Ahsa`}</span>
                </div>
              </div>

              {/* Social Channels Icons Row */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-300 mb-2">
                  {lang === 'ar' ? 'تابعنا على مواقع التواصل الاجتماعي:' : 'Connect with Us:'}
                </div>
                <div className="flex items-center gap-2">
                  {socialLinks.map((s, idx) => (
                    <a
                      key={idx}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 transition-all group ${s.hoverBg} shadow-sm`}
                      title={lang === 'ar' ? s.nameAr : s.name}
                      aria-label={s.name}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'روابط سريعة' : 'Quick Navigation'}
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { href: '#home', labelAr: 'الرئيسية', labelEn: 'Home' },
                { href: '#about', labelAr: 'من نحن', labelEn: 'About Us' },
                { href: '#services', labelAr: 'خدماتنا الهندسية', labelEn: 'Our Services' },
                { href: '#projects', labelAr: 'سابقة المشاريع', labelEn: 'Projects' },
                { href: '#calculator', labelAr: 'طلب دراسة التكلفة', labelEn: 'Project Quotation' },
                { href: '#process', labelAr: 'مراحل العمل', labelEn: 'Process' },
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronIcon className="w-3 h-3 text-slate-600" />
                    <span>{lang === 'ar' ? link.labelAr : link.labelEn}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'الخدمات الرئيسية' : 'Key Services'}
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { labelAr: 'المقاولات العامة والإنشاءات الكبرى', labelEn: 'Turnkey Construction' },
                { labelAr: 'التشطيبات المعمارية والواجهات', labelEn: 'Luxury Fit-Out & Facades' },
                { labelAr: 'البنية التحتية وشبكات المرافق', labelEn: 'Infrastructure & Utilities' },
                { labelAr: 'الترميم والتدعيم الإنشائي', labelEn: 'Structural Retrofitting' },
                { labelAr: 'الأعمال الكهروميكانيكية والتكييف MEP', labelEn: 'MEP Systems & HVAC' },
                { labelAr: 'إدارة المشاريع والإشراف الهندسي', labelEn: 'Project Management' },
              ].map((srv, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/80" />
                  <span>{lang === 'ar' ? srv.labelAr : srv.labelEn}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === 'ar' ? 'التواصل المباشر' : 'Get in Touch'}
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2 text-slate-300 hover:text-cyan-400 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors ltr:font-mono"
              >
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </a>

              <a
                href={COMPANY_INFO.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
                title={lang === 'ar' ? 'فتح موقعنا على خرائط جوجل' : 'Open in Google Maps'}
              >
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="underline-offset-2 hover:underline">{lang === 'ar' ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn} (خرائط Google)</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-xs shadow-md shadow-cyan-500/20 transition-all"
              >
                {lang === 'ar' ? 'طلب تسعير فوري لمشروعك' : 'Request Instant RFQ'}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {lang === 'ar'
              ? `© ${new Date().getFullYear()} مؤسسة تميز الإنجاز للمقاولات العامة. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Tamiz Al-Injaz General Contracting. All Rights Reserved.`}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 transition-colors flex items-center gap-1.5"
              title={lang === 'ar' ? 'الرجوع للأعلى' : 'Back to top'}
            >
              <span>{lang === 'ar' ? 'للأعلى' : 'Top'}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
