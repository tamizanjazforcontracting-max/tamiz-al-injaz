import React from 'react';
import { COMPANY_INFO, HERO_STATS } from '../data/companyData';
import { Language } from '../types';
import {
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowLeft,
  PhoneCall,
  CheckCircle2,
  FileSpreadsheet,
  Building,
  Sparkles,
  Download
} from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenQuoteModal: () => void;
  onDownloadProfile: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuoteModal, onDownloadProfile }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-950"
    >
      {/* Background Hero Image with Architectural Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="مؤسسة تميز الإنجاز للمقاولات العامة"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-40 filter contrast-110 brightness-75 scale-105 animate-pulse duration-10000"
        />
        {/* Modern multi-layer gradient overlays for depth and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-slate-950/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/95" />
        {/* Subtle architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:24px_24px]"
        />
        {/* Brand Glows */}
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-teal-500/15 via-cyan-500/15 to-blue-500/15 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md animate-fade-in shadow-lg shadow-cyan-950/30">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>
              {lang === 'ar'
                ? 'مصنفون ومعتمدون وفق كود البناء السعودي (SBC) • رؤية 2030'
                : 'Certified Contractor • Saudi Building Code (SBC) Compliant'}
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.25] sm:leading-[1.2] mb-6">
            {lang === 'ar' ? (
              <>
                نبني المستقبل بأعلى معايير{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500">
                  التميز والإنجاز
                </span>
              </>
            ) : (
              <>
                Building Excellence & Precision with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500">
                  Tamiz Al-Injaz Contracting
                </span>
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-3xl mx-auto">
            {lang === 'ar'
              ? 'رواد تنفيذ المشاريع الإنشائية الكبرى، الفلل السكنية الفاخرة، التشطيبات المعمارية الراقية، والبنية التحتية المتكاملة بالأحساء والمنطقة الشرقية وكافة مناطق المملكة مع إشراف هندسي ميداني مباشر ومطابقة لكود البناء السعودي (SBC).'
              : 'Leading turnkey general contracting, luxury villa construction, architectural fit-out, and infrastructure solutions with daily resident engineering supervision and full Saudi Building Code (SBC) compliance.'}
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenQuoteModal}
              id="hero-quote-btn"
              className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-extrabold text-base shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
            >
              <span>{lang === 'ar' ? 'طلب استشارة وعرض سعر مجاني' : 'Request Free Engineering Quote'}</span>
              <ArrowIcon className="w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </button>

            <a
              href="#projects"
              id="hero-portfolio-btn"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 hover:border-cyan-500/50 backdrop-blur-md transition-all flex items-center justify-center gap-2"
            >
              <Building className="w-5 h-5 text-cyan-400" />
              <span>{lang === 'ar' ? 'استعراض سابقة الأعمال' : 'Explore Projects Portfolio'}</span>
            </a>

            <button
              onClick={onDownloadProfile}
              id="hero-profile-btn"
              className="w-full sm:w-auto px-5 py-4 rounded-xl bg-slate-900/60 hover:bg-slate-850 text-slate-300 hover:text-cyan-300 font-semibold text-sm border border-slate-800 transition-all flex items-center justify-center gap-2"
              title={lang === 'ar' ? 'تحميل البروفايل' : 'Company Profile'}
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'ar' ? 'الملف التعريفي (Profile)' : 'Company Profile PDF'}</span>
            </button>
          </div>

          {/* Quick Value Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {HERO_STATS.map((stat, idx) => (
              <div
                key={idx}
                className="bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 rounded-xl p-3.5 sm:p-4 text-center backdrop-blur-sm transition-all hover:bg-slate-850/80"
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-400 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-xs text-slate-300 font-medium leading-tight">
                  {lang === 'ar' ? stat.labelAr : stat.labelEn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
