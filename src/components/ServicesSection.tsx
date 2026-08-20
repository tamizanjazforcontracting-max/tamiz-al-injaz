import React from 'react';
import { SERVICES } from '../data/companyData';
import { Language, ServiceItem } from '../types';
import {
  Building2,
  Sparkles,
  Network,
  Hammer,
  Zap,
  ClipboardCheck,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Layers,
  FileCheck
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
  onOpenQuoteModal: (defaultServiceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
  onOpenQuoteModal
}) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-cyan-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-teal-400" />;
      case 'Network':
        return <Network className="w-6 h-6 text-blue-400" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-cyan-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-teal-400" />;
      case 'ClipboardCheck':
        return <ClipboardCheck className="w-6 h-6 text-blue-400" />;
      default:
        return <Building2 className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'خدماتنا الهندسية الشاملة' : 'Our Engineering Services'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'حلول إنشائية ومعمارية متكاملة من الأساس حتى المفتاح'
              : 'End-to-End Construction & Architectural Solutions'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'نوظف أحدث التقنيات الهندسية وأعلى معايير كود البناء السعودي لتقديم خدمات تنفيذ متفوقة تلبي تطلعات الأفراد والشركات والقطاعات الحكومية بالأحساء وكافة المناطق.'
              : 'Employing advanced engineering methodologies and Saudi Building Code standards to deliver high-performance contracting solutions.'}
          </p>
        </div>

        {/* Services Grid (3 Columns) */}
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-[0_16px_50px_rgba(15,23,42,0.42)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.14)]"
            >
              {/* Service Card Image */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/15 to-transparent" />
                <div className={`absolute top-4 ${isRtl ? 'left-4' : 'right-4'} flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/75 shadow-lg backdrop-blur-md`}>
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div className={isRtl ? 'text-right' : 'text-left'}>
                  <h3 className="mb-3 text-xl font-extrabold leading-snug text-white transition-colors group-hover:text-cyan-300">
                    {service.title[lang]}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-300">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Key Scope Bullets */}
                  <div className="space-y-2.5 border-t border-slate-800 pt-3">
                    {service.features[lang].slice(0, 2).map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className={`flex items-start gap-2 text-sm ${isRtl ? 'flex-row-reverse text-right' : 'text-left'}`}
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-cyan-400" />
                        <span className="text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className={`mt-5 flex items-center gap-3 border-t border-slate-800 pt-4 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 rounded-xl bg-slate-800 px-3 py-2.5 text-xs font-bold text-white transition-colors hover:bg-slate-700"
                  >
                    <span>{lang === 'ar' ? 'التفاصيل والبنود' : 'View Specs'}</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="flex items-center justify-center gap-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 px-3 py-2.5 text-xs font-bold text-cyan-300 transition-all hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 hover:text-white"
                  >
                    <span>{lang === 'ar' ? 'طلب تسعير' : 'RFQ'}</span>
                    <ArrowIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Consultation */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-start">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {lang === 'ar'
                ? 'هل لديك مشروع خاص أو مخططات جاهزة تحتاج إلى تسعير هندسي دقيق؟'
                : 'Have architectural blueprints or a specific construction scope?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'ar'
                ? 'فريقنا جاهز لمراجعة المخططات وإعداد جدول الكميات (BOQ) ودراسة التكلفة مجاناً.'
                : 'Our engineers will review your drawings and prepare a comprehensive BOQ breakdown with zero obligation.'}
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-sm whitespace-nowrap shadow-lg shadow-cyan-500/20 transition-all"
          >
            {lang === 'ar' ? 'إرسال المخططات للتسعير' : 'Submit Blueprints for Quote'}
          </button>
        </div>
      </div>
    </section>
  );
};
