import React from 'react';
import { COMPANY_INFO, VALUES_LIST, LEADERSHIP } from '../data/companyData';
import { Language } from '../types';
import {
  Clock,
  ShieldCheck,
  FileCheck,
  HardHat,
  Target,
  Compass,
  Award,
  CheckCircle,
  Download,
  Building2,
  Users,
  Briefcase,
  UserCheck,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
  onOpenQuoteModal: () => void;
  onDownloadProfile: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang, onOpenQuoteModal, onDownloadProfile }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Clock':
        return <Clock className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-teal-400" />;
      case 'FileCheck':
        return <FileCheck className="w-6 h-6 text-cyan-400" />;
      case 'HardHat':
        return <HardHat className="w-6 h-6 text-blue-400" />;
      default:
        return <Award className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-900/90 text-slate-100 relative overflow-hidden">
      {/* Background architectural glow */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'نبذة عن المؤسسة' : 'About Tamiz Al-Injaz'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'صرح هندسي رائد يجسد معايير التميز والإنجاز'
              : 'A Pioneering Engineering Contractor Delivering Excellence & Precision'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'تأسست مؤسسة تميز الإنجاز للمقاولات العامة لتكون شريكاً استراتيجياً وموثوقاً في قطاع المقاولات والإنشاءات بالمملكة العربية السعودية، متسلحين بخبرات هندسية متطورة وإدارة تنفيذية متخصصة بالأحساء وكافة المناطق.'
              : 'Founded to be a trusted strategic partner in the Saudi general contracting and infrastructure sector, backed by dedicated executive leadership and precision project engineering.'}
          </p>
        </div>

        {/* Vision, Mission, and Core Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Column: Story & Vision/Mission Cards */}
          <div className="lg:col-span-7 space-y-6">
            {/* Vision & Mission Bento Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all group shadow-lg shadow-black/20">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Target className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'ar' ? 'رؤيتنا الإستراتيجية' : 'Our Strategic Vision'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'أن نكون في طليعة شركات المقاولات العامة بالمملكة، ونموذجاً يحتذى به في الابتكار الإنشائي والجودة المستدامة المتوافقة مع مستهدفات رؤية 2030.'
                    : 'To lead the Kingdom’s general contracting landscape as a benchmark for construction innovation and sustainable quality aligned with Vision 2030.'}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all group shadow-lg shadow-black/20">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <Compass className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {lang === 'ar' ? 'رسالتنا للمشاريع' : 'Our Core Mission'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {lang === 'ar'
                    ? 'تقديم خدمات إنشائية ومعمارية فائقة الجودة تلتزم بالمواعيد الصارمة وتحقق أعلى عائد استثماري لعملائنا من خلال كفاءة إدارة التكاليف والهندسة القيمة.'
                    : 'Delivering exceptional turnkey construction on strict deadlines while maximizing client value through rigorous cost engineering and flawless safety.'}
                </p>
              </div>
            </div>

            {/* Paragraph Highlights */}
            <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800 space-y-3">
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-teal-400" />
                <span>
                  {lang === 'ar'
                    ? 'لماذا يختارنا كبار المطورين والمستثمرين والعملاء؟'
                    : 'Why Developers & Private Clients Trust Us?'}
                </span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'اعتماد كامل ومطابقة لجميع متطلبات كود البناء السعودي (SBC) ونظام بلدي.'
                      : 'Full compliance with Saudi Building Code (SBC) and Balady municipal standards.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'مختبرات فحص معتمدة للخرسانة وحديد التسليح قبل وأثناء كل مرحلة صب.'
                      : 'Certified laboratory testing for concrete batching and rebar integrity on every pour.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'إشراف هندسي مقيم على مدار الساعة وتقارير إنجاز أسبوعية عبر منصة المتابعة.'
                      : 'Full-time resident engineers on site with automated weekly photographic progress logs.'}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'عقود رسمية شفافة توثق جدول الدفعات المرتبط بنسب الإنجاز الفعلي للمشروع.'
                      : 'Transparent FIDIC-based milestone contracts tying payment tranches strictly to verified progress.'}
                  </span>
                </li>
              </ul>
            </div>

            {/* Profile Action */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDownloadProfile}
                id="about-download-profile-btn"
                className="px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-cyan-500/50 flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'ar' ? 'تحميل الملف التعريفي وسابقة الأعمال (PDF)' : 'Download Profile & Portfolio (PDF)'}</span>
              </button>
              <button
                onClick={onOpenQuoteModal}
                id="about-request-quote-btn"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-md shadow-cyan-500/20 transition-all"
              >
                <span>{lang === 'ar' ? 'طلب استشارة هندسية' : 'Consult an Engineer'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Key Metric Tiles and Visual Feature */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80"
                alt="إشراف مدير المشاريع الميداني - مؤسسة تميز الإنجاز"
                referrerPolicy="no-referrer"
                className="w-full h-64 sm:h-80 object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6">
                <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {lang === 'ar' ? 'الإشراف الهندسي الميداني' : 'Field Engineering Leadership'}
                </div>
                <div className="text-lg font-bold text-white">
                  {lang === 'ar'
                    ? 'إشراف هندسي مباشر ومتخصص قائم على كافة المشاريع'
                    : 'Direct On-Site Engineering Leadership Across All Projects'}
                </div>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <HardHat className="w-5 h-5 text-cyan-400 mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">100%</div>
                <div className="text-xs text-slate-400 font-medium">
                  {lang === 'ar' ? 'إشراف هندسي مباشر' : 'Direct Engineering'}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-center">
                <Briefcase className="w-5 h-5 text-teal-400 mx-auto mb-1.5" />
                <div className="text-2xl font-black text-white">+280</div>
                <div className="text-xs text-slate-400 font-medium">
                  {lang === 'ar' ? 'مشروع سلم بنجاح' : 'Successful Projects'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Engineering Management Cards */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-2">
              <UserCheck className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'الإدارة والإشراف الهندسي' : 'Leadership & Engineering'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {lang === 'ar'
                ? 'قيادة وإشراف هندسي مباشر لضمان أعلى مستويات الدقة'
                : 'Executive Leadership & Dedicated Direct Engineering Oversight'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all shadow-xl hover:shadow-cyan-500/10 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-teal-500 via-cyan-400 to-blue-500 opacity-80" />
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-cyan-400 shadow-md group-hover:scale-105 group-hover:border-cyan-500/50 transition-all flex-shrink-0">
                    {leader.iconName === 'Building2' ? (
                      <Building2 className="w-7 h-7 text-cyan-400" />
                    ) : (
                      <HardHat className="w-7 h-7 text-teal-400" />
                    )}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 inline-block mb-1">
                      {lang === 'ar' ? leader.roleAr : leader.roleEn}
                    </span>
                    <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {lang === 'ar' ? leader.nameAr : leader.nameEn}
                    </h4>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {lang === 'ar' ? leader.descAr : leader.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values 4-Column Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES_LIST.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-900 group shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-500/50 transition-all">
                {getIcon(val.iconName)}
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                {lang === 'ar' ? val.title.ar : val.title.en}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {lang === 'ar' ? val.desc.ar : val.desc.en}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
