import React from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Language } from '../types';
import { Star, MessageSquare, Quote, Building2 } from 'lucide-react';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const partnerLogos = [
    { name: 'اعتماد كود البناء السعودي SBC' },
    { name: 'بلدي - وزارة الشؤون البلدية والقروية' },
    { name: 'الدفاع المدني السعودي' },
    { name: 'الهيئة السعودية للمهندسين' },
    { name: 'مختبرات فحص الجودة المعتمدة' },
  ];

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-900/90 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'آراء العملاء وشركاء النجاح' : 'Client Testimonials & Trust'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'ثقة نبنيها مع كل عميل ومشروع'
              : 'Trust Built Stone by Stone with Our Valued Clients'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'نفخر بعلاقاتنا المستدامة مع نخبة من المطورين العقاريين، الشركات، والعملاء الذين وثقوا في قدراتنا الإنشائية بالأحساء والمنطقة الشرقية.'
              : 'Proud of our enduring relationships with leading developers, corporations, and private property owners.'}
          </p>
        </div>

        {/* Testimonials 3-Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between relative group shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 rtl:right-6 rtl:left-auto ltr:left-6 ltr:right-auto text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, rIdx) => (
                    <Star key={rIdx} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>

                {/* Project Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 mb-3">
                  {test.projectType[lang]}
                </div>

                {/* Content */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{test.content[lang]}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
                <img
                  src={test.avatar}
                  alt={test.name[lang]}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-cyan-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{test.name[lang]}</h4>
                  <div className="text-xs text-slate-400">{test.role[lang]}</div>
                  <div className="text-[11px] text-cyan-400/80">{test.company[lang]}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Accredited Authorities & Standards Banner */}
        <div className="border-t border-slate-800 pt-12 text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            {lang === 'ar'
              ? 'الجهات والاعتمادات والمعايير الهندسية'
              : 'Accredited Authorities & Engineering Compliance'}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {partnerLogos.map((logo, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2 hover:border-slate-700 transition-colors"
              >
                <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
