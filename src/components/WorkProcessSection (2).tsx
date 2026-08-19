import React from 'react';
import { WORK_STEPS } from '../data/companyData';
import { Language } from '../types';
import {
  Compass,
  FileSpreadsheet,
  FileCheck2,
  HardHat,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2
} from 'lucide-react';

interface WorkProcessSectionProps {
  lang: Language;
}

export const WorkProcessSection: React.FC<WorkProcessSectionProps> = ({ lang }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case 1:
        return <FileSpreadsheet className="w-5 h-5 text-teal-400" />;
      case 2:
        return <FileCheck2 className="w-5 h-5 text-cyan-400" />;
      case 3:
        return <HardHat className="w-5 h-5 text-blue-400" />;
      case 4:
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case 5:
        return <Award className="w-5 h-5 text-cyan-400" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-slate-900/90 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'منهجية العمل والتعاقد' : 'Execution Methodology & Workflow'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'مراحل تنفيذ المشروع مع تميز الإنجاز'
              : 'How We Build: From Engineering Concept to Certified Handover'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'نتبع منظومة هندسية وإدارية دقيقة تضمن الشفافية المطلقة، سلامة التنفيذ، وتسليم المشروع وفق أعلى معايير الجودة والوقت المحدد بالأحساء وجميع مناطق المملكة.'
              : 'A structured, transparent engineering lifecycle ensuring milestone precision, safety compliance, and flawless delivery.'}
          </p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WORK_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-7 rounded-2xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-950 flex flex-col justify-between group shadow-lg"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-4 rtl:right-4 rtl:left-auto ltr:left-4 ltr:right-auto text-4xl font-black text-slate-800/80 group-hover:text-cyan-500/20 transition-colors pointer-events-none">
                {step.step}
              </div>

              <div>
                {/* Step Icon Badge */}
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-750 flex items-center justify-center mb-5 group-hover:border-cyan-500/50 transition-colors">
                  {getStepIcon(idx)}
                </div>

                {/* Step Title */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors">
                  {step.title[lang]}
                </h3>

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.desc[lang]}
                </p>
              </div>

              {/* Step Duration Badge */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">{lang === 'ar' ? 'المدة التقديرية:' : 'Est. Duration:'}</span>
                <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 font-bold border border-cyan-500/20">
                  {step.duration[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
