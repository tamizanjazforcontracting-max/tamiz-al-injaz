import React from 'react';
import { COMPANY_INFO, SERVICES, HERO_STATS, LEADERSHIP } from '../data/companyData';
import { Language } from '../types';
import { Logo } from './Logo';
import {
  X,
  Printer,
  ShieldCheck,
  Award,
  CheckCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  Building2,
  HardHat,
  UserCheck
} from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  onOpenQuote: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  lang,
  onClose,
  onOpenQuote
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl my-8 border border-slate-200">
        {/* Top Control Bar */}
        <div className="bg-slate-950 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <Logo size="sm" />
            <span className="text-sm font-bold">
              {lang === 'ar' ? 'الملف التعريفي الرسمي للمؤسسة (Company Profile)' : 'Official Company Profile'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
              title="Print"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-700"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Profile Document Body */}
        <div className="p-6 sm:p-10 space-y-8 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible">
          {/* Header & Logo */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-cyan-500">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 p-2 flex items-center justify-center shadow-lg border border-slate-800">
                <Logo size="lg" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-black text-slate-950">
                  {lang === 'ar' ? COMPANY_INFO.nameAr : COMPANY_INFO.nameEn}
                </h1>
                <p className="text-xs sm:text-sm text-cyan-700 font-bold mt-0.5">
                  {lang === 'ar' ? COMPANY_INFO.sloganAr : COMPANY_INFO.sloganEn}
                </p>
              </div>
            </div>

            <div className="text-center sm:text-end text-xs text-slate-600 space-y-1">
              <div className="font-bold text-slate-900">
                {lang === 'ar' ? `السجل التجاري: ${COMPANY_INFO.crNumber} - الأحساء` : `CR: ${COMPANY_INFO.crNumber} - Al-Ahsa`}
              </div>
              <div>{lang === 'ar' ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</div>
              <div className="text-cyan-600 font-bold">{COMPANY_INFO.email}</div>
            </div>
          </div>

          {/* About & Statement */}
          <div className="space-y-3">
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <span>{lang === 'ar' ? 'نبذة عن المؤسسة ومسيرة الإنجاز' : 'Establishment Overview & Mission'}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {lang === 'ar'
                ? 'تعتبر مؤسسة تميز الإنجاز للمقاولات العامة إحدى الكيانات الوطنية الرائدة في قطاع الإنشاءات وتطوير البنية التحتية والتشطيبات الفاخرة بالأحساء وجميع مناطق المملكة. نعتمد على كادر هندسي متمرس وإشراف ميداني دقيق متوافق مع كود البناء السعودي (SBC) لضمان تسليم المشاريع وفق أعلى مواصفات الأمان والجودة العالمية.'
                : 'Tamiz Al-Injaz General Contracting Establishment is a premier engineering and contracting firm in Saudi Arabia, specializing in turnkey construction, luxury fit-out, and infrastructure compliant with the Saudi Building Code.'}
            </p>
          </div>

          {/* Key Numbers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
            {HERO_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl font-black text-cyan-600">{stat.value}</div>
                <div className="text-[11px] text-slate-600 font-semibold">{lang === 'ar' ? stat.labelAr : stat.labelEn}</div>
              </div>
            ))}
          </div>

          {/* Leadership & Project Engineering */}
          <div className="space-y-3">
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <span>{lang === 'ar' ? 'الهيكل الإداري والإشراف الهندسي' : 'Administrative & Engineering Leadership'}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {LEADERSHIP.map((leader, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-cyan-200 bg-cyan-50/50">
                  <div className="text-[11px] font-bold text-cyan-800 uppercase tracking-wider mb-0.5">
                    {lang === 'ar' ? leader.roleAr : leader.roleEn}
                  </div>
                  <div className="font-extrabold text-sm text-slate-950 mb-1.5">
                    {lang === 'ar' ? leader.nameAr : leader.nameEn}
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    {lang === 'ar' ? leader.descAr : leader.descEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Scope of Services */}
          <div className="space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
              <span>{lang === 'ar' ? 'مجالات العمل والخدمات المعتمدة' : 'Scope of Accredited Services'}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICES.map((srv, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/60">
                  <div className="font-bold text-xs text-slate-900 mb-1 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-600 flex-shrink-0" />
                    <span>{srv.title[lang]}</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {srv.shortDesc[lang]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality & Warranties */}
          <div className="p-4 rounded-2xl bg-cyan-50 border border-cyan-200 text-xs text-slate-800 space-y-2">
            <div className="font-bold text-cyan-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-600" />
              <span>{lang === 'ar' ? 'الالتزامات الهندسية ومعايير الجودة' : 'Engineering Standards & Quality Assurance'}</span>
            </div>
            <p className="text-slate-700 leading-relaxed">
              {lang === 'ar'
                ? 'تلتزم المؤسسة بتقديم أعلى معايير الجودة التنفيذية على جميع الأعمال الإنشائية والخرسانية ومطابقة كود البناء السعودي (SBC)، مع تقديم تقارير فحص مخبري معتمدة وتطبيق بروتوكولات السلامة المهنية الشاملة.'
                : 'The establishment is committed to delivering maximum engineering quality across all structural concrete works strictly compliant with the Saudi Building Code (SBC), including accredited laboratory testing and stringent HSE site protocols.'}
            </p>
          </div>

          {/* Contact Details in Profile */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="space-y-1">
              <div><strong>{lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> {COMPANY_INFO.email}</div>
              <div><strong>{lang === 'ar' ? 'الجوال:' : 'Phone:'}</strong> {COMPANY_INFO.phone}</div>
              <div><strong>{lang === 'ar' ? 'المقر:' : 'Address:'}</strong> {lang === 'ar' ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}</div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenQuote();
              }}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white font-bold hover:from-teal-400 hover:to-blue-500 transition-colors shadow-md shadow-cyan-500/20"
            >
              {lang === 'ar' ? 'طلب عرض سعر رسمي' : 'Request Official RFQ'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
