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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 flex flex-col overflow-hidden group hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1"
            >
              {/* Service Card Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title[lang]}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent" />
                <div className="absolute top-4 right-4 rtl:right-4 rtl:left-auto ltr:left-4 ltr:right-auto w-12 h-12 rounded-xl bg-slate-950/80 backdrop-blur-md border border-slate-700/80 flex items-center justify-center shadow-lg">
                  {getServiceIcon(service.iconName)}
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc[lang]}
                  </p>

                  {/* Key Scope Bullets */}
                  <div className="space-y-2 mb-6 pt-2 border-t border-slate-800">
                    {service.features[lang].slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => onSelectService(service)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{lang === 'ar' ? 'التفاصيل والبنود' : 'View Specs'}</span>
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.id)}
                    className="py-2.5 px-3 rounded-lg bg-cyan-500/15 hover:bg-gradient-to-r hover:from-teal-500 hover:to-blue-600 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-bold flex items-center justify-center gap-1 transition-all"
                  >
                    <span>{lang === 'ar' ? 'طلب تسعير' : 'RFQ'}</span>
                    <ArrowIcon className="w-3.5 h-3.5" />
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
