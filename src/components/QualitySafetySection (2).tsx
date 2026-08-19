import React from 'react';
import { Language } from '../types';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  HardHat,
  FileCheck,
  Flame,
  Building,
  HeartHandshake
} from 'lucide-react';

interface QualitySafetySectionProps {
  lang: Language;
  onOpenQuoteModal: () => void;
}

export const QualitySafetySection: React.FC<QualitySafetySectionProps> = ({ lang, onOpenQuoteModal }) => {
  const standards = [
    {
      titleAr: 'مطابقة تامة لكود البناء السعودي (SBC)',
      titleEn: 'Strict Saudi Building Code Compliance (SBC)',
      descAr: 'تطبيق الأحمال الإنشائية، العزل الحراري والمائي، والاشتراطات الزلزالية المعتمدة في المملكة.',
      descEn: 'Full structural load engineering, thermal/waterproofing, and seismic compliance.',
      icon: <Building className="w-6 h-6 text-cyan-400" />
    },
    {
      titleAr: 'إشراف هندسي وضمان جودة التنفيذ',
      titleEn: 'Certified Quality Engineering & Handover',
      descAr: 'إشراف ميداني يومي ومتابعة دقيقة لصب الخرسانات وسلامة التسليح وتركيب العوازل ومطابقة المخططات.',
      descEn: 'Daily on-site resident supervision ensuring proper concrete curing, rebar placement, and blueprint accuracy.',
      icon: <Award className="w-6 h-6 text-teal-400" />
    },
    {
      titleAr: 'فحوصات واختبارات مخبرية دورية',
      titleEn: 'Accredited Material & Concrete Lab Testing',
      descAr: 'عينات تكسير خرسانة بعد 7 و28 يوماً، واختبارات شد حديد التسليح لضمان أقصى متانة.',
      descEn: '7 & 28-day concrete cylinder crushing tests and rebar tensile strength lab audits.',
      icon: <FileCheck className="w-6 h-6 text-cyan-400" />
    },
    {
      titleAr: 'بروتوكول السلامة والصحة المهنية (HSE)',
      titleEn: 'HSE & OSHA Safety Protocols',
      descAr: 'التزام صارم بارتداء مهمات الوقاية، تأمين السقالات، وخطة طوارئ معتمدة في كافة المواقع.',
      descEn: 'Zero-compromise site safety, full PPE enforcement, and certified safety officers on site.',
      icon: <HardHat className="w-6 h-6 text-blue-400" />
    },
    {
      titleAr: 'اعتمادات الدفاع المدني والسلامة',
      titleEn: 'Civil Defense & Fire Protection Approvals',
      descAr: 'تنفيذ أنظمة الإنذار والإطفاء واعتمادها رسمياً من الهيئة العامة للدفاع المدني.',
      descEn: 'Full execution of certified fire alarm, sprinkler, and emergency suppression systems.',
      icon: <Flame className="w-6 h-6 text-cyan-400" />
    },
    {
      titleAr: 'خدمة ما بعد التسليم والصيانة الدورية',
      titleEn: 'After-Handover Support & Maintenance',
      descAr: 'فريق دعم فني متجاوب لأي ملاحظات أو صيانة دورية خلال فترة الضمان المعتمدة.',
      descEn: 'Responsive post-handover technical team for scheduled maintenance and adjustments.',
      icon: <HeartHandshake className="w-6 h-6 text-teal-400" />
    }
  ];

  return (
    <section id="quality" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الجودة والسلامة والضمانات' : 'Quality, Safety & Warranties'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'معايير هندسية صارمة لا تقبل المساومة'
              : 'Rigorous Engineering Standards with Zero Compromise'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'في مؤسسة تميز الإنجاز للمقاولات، تمثل الجودة والسلامة ركيزتين أساسيتين في كل خطوة ومرحلة تنفيذ لضمان استدامة وأمان منشآتكم لأجيال قادمة.'
              : 'Quality and occupational safety are the twin pillars of our business, ensuring maximum durability and security for every project.'}
          </p>
        </div>

        {/* 6 Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {standards.map((std, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-850 group shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-750 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all">
                {std.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {lang === 'ar' ? std.titleAr : std.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {lang === 'ar' ? std.descAr : std.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* SBC & Engineering Compliance Trust Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-teal-500/15 via-slate-900 to-blue-600/15 border border-cyan-500/30 p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600 text-white flex items-center justify-center font-black text-xl flex-shrink-0 shadow-lg shadow-cyan-500/30">
              SBC
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {lang === 'ar'
                  ? 'الالتزام التام بكود البناء السعودي (SBC) وجودة التنفيذ'
                  : 'Full Saudi Building Code (SBC) Compliance & Quality Assurance'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'ar'
                  ? 'تسليم هندسي موثق وتقارير فحص مخبرية دورية معتمدة عند إنهاء كافة مراحل المشروع بالأحساء وجميع المناطق.'
                  : 'Documented engineering handover and accredited material lab inspection reports upon project completion.'}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenQuoteModal}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm whitespace-nowrap shadow-lg shadow-cyan-500/20 transition-all"
          >
            {lang === 'ar' ? 'طلب استشارة هندسية' : 'Request Engineering Consultation'}
          </button>
        </div>
      </div>
    </section>
  );
};
