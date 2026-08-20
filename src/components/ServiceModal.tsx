import React from 'react';
import { ServiceItem, Language } from '../types';
import {
  X,
  CheckCircle2,
  FileText,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Building2,
  PackageCheck
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  lang: Language;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  lang,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-750 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white hover:bg-slate-950 border border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Banner */}
        <div className="relative h-56 sm:h-72 w-full overflow-hidden">
          <img
            src={service.image}
            alt={service.title[lang]}
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80';
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {service.title[lang]}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              {lang === 'ar' ? 'الوصف الهندسي والمجال الفني' : 'Engineering Description & Scope'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.fullDesc[lang]}
            </p>
          </div>

          {/* Features / Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              {lang === 'ar' ? 'المواصفات والبنود التي ننفذها' : 'Technical Specifications & Scope'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features[lang].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
              {lang === 'ar' ? 'المخرجات والوثائق المسلمة للعميل' : 'Client Deliverables & Certificates'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {service.deliverables[lang].map((del, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-xs text-cyan-300 flex items-center gap-2"
                >
                  <PackageCheck className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Action */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold transition-colors"
            >
              {lang === 'ar' ? 'إغلاق' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(service.title[lang]);
              }}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all"
            >
              <span>{lang === 'ar' ? 'طلب تسعير لهذه الخدمة' : 'Request RFQ for This Service'}</span>
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
