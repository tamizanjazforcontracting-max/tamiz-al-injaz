import React, { useState } from 'react';
import { FAQS } from '../data/companyData';
import { Language } from '../types';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'الأسئلة الشائعة والمكررة' : 'Frequently Asked Questions'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'كل ما يهمك معرفته قبل بدء مشروعك'
              : 'Key Questions Answered Before Breaking Ground'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'إجابات واضحة ومفصلة عن استفساراتكم حول التعاقد، الضمانات، مراحل التنفيذ وحساب التكاليف بالأحساء وكافة مناطق المملكة.'
              : 'Clear and detailed answers regarding contracts, warranties, milestones, and budgeting.'}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-slate-900 border-cyan-500/50 shadow-lg shadow-cyan-950/40'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 flex-shrink-0" />
                    <span>{faq.question[lang]}</span>
                  </span>
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80">
                    <p className="pt-2">{faq.answer[lang]}</p>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-cyan-400 font-medium">
                      <span>{faq.category[lang]}</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
