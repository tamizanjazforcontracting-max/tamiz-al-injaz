import React from 'react';
import { ProjectItem, Language } from '../types';
import {
  X,
  MapPin,
  Calendar,
  Layers,
  User,
  CheckCircle,
  Building,
  ArrowRight,
  ArrowLeft,
  MessageSquare
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ProjectModalProps {
  project: ProjectItem | null;
  lang: Language;
  onClose: () => void;
  onRequestQuote: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  lang,
  onClose,
  onRequestQuote
}) => {
  if (!project) return null;

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-750 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-950 border border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title[lang]}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500 text-slate-950 text-xs font-black uppercase mb-2">
              <Building className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              {project.title[lang]}
            </h2>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Key Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">{lang === 'ar' ? 'الموقع' : 'Location'}</span>
              <span className="font-bold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {project.location[lang]}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block mb-0.5">{lang === 'ar' ? 'المساحة' : 'Built-up Area'}</span>
              <span className="font-bold text-white flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {project.area}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block mb-0.5">{lang === 'ar' ? 'مدة التنفيذ' : 'Duration'}</span>
              <span className="font-bold text-white flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {project.duration[lang]}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block mb-0.5">{lang === 'ar' ? 'العميل' : 'Client'}</span>
              <span className="font-bold text-white flex items-center gap-1 truncate">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                {project.client[lang]}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">
              {lang === 'ar' ? 'نظرة عامة على المشروع والتحديات الإنشائية' : 'Project Overview & Engineering Scope'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description[lang]}
            </p>
          </div>

          {/* Scope Checklist */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
              {lang === 'ar' ? 'بنود الأعمال المنفذة' : 'Delivered Scope of Work'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope[lang].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-slate-950/50 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(
                `السلام عليكم ورحمة الله، أود الاستفسار من مؤسسة تميز الإنجاز عن تفاصيل تنفيذ مشروع مماثل لمشروع (${project.title.ar}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'ar' ? 'استفسار فوري عبر الواتساب' : 'Inquire on WhatsApp'}</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onRequestQuote(project.title[lang]);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
            >
              <span>{lang === 'ar' ? 'طلب عرض سعر لمشروع مماثل' : 'Request Quote for Similar Project'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
