import React, { useState } from 'react';
import { COMPANY_INFO, LEADERSHIP } from '../data/companyData';
import { Language } from '../types';
import {
  Building,
  Home,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  FileSpreadsheet,
  Layers,
  HardHat,
  UserCheck,
  PhoneCall,
  SendHorizontal
} from 'lucide-react';

interface CostCalculatorProps {
  lang: Language;
  onOpenQuoteModal: (details?: string) => void;
}

export const CostCalculator: React.FC<CostCalculatorProps> = ({ lang, onOpenQuoteModal }) => {
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const [projectType, setProjectType] = useState<'residential' | 'commercial' | 'fitout' | 'renovation'>('residential');
  const [finishLevel, setFinishLevel] = useState<'skeleton_materials' | 'deluxe_turnkey' | 'super_lux' | 'palace_premium'>('deluxe_turnkey');
  const [area, setArea] = useState<number>(450);
  const [floors, setFloors] = useState<number>(2);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['smart_home', 'central_ac']);

  const projectTypeLabels = {
    residential: { ar: 'سكني / فيلا خاصة', en: 'Residential Villa' },
    commercial: { ar: 'تجاري / مكاتب', en: 'Commercial / Office' },
    fitout: { ar: 'تشطيبات وديكور معماري', en: 'Fit-Out & Interior' },
    renovation: { ar: 'ترميم وتطوير عقاري', en: 'Renovation & Modernization' },
  };

  const finishLevelLabels = {
    skeleton_materials: {
      ar: 'عظم بالمواد الإنشائية المعتمدة',
      en: 'Skeleton Structure with Materials',
      descAr: 'خرسانة جاهزة معتمدة، حديد تسليح سابك، مباني وبلك، عوازل مائية وحرارية',
      descEn: 'Certified ready-mix concrete, Sabic rebar, blocks & full thermal insulation'
    },
    deluxe_turnkey: {
      ar: 'تسليم مفتاح ديلوكس شامل',
      en: 'Deluxe Turnkey Handover',
      descAr: 'تشطيب كامل، بورسلان نخب أول، دهانات جوتن، سباكة وكهرباء معتمدة',
      descEn: 'Turnkey fit-out, grade-A porcelain, Jotun paints, certified MEP'
    },
    super_lux: {
      ar: 'سوبر لوكس فاخر مع تصاميم معمارية',
      en: 'Super Lux Premium Fit-Out',
      descAr: 'رخام طبيعي، واجهات زجاجية استركشر، أطقم صحية أوروبية، إنارة حديثة',
      descEn: 'Natural marble, curtain walls, European sanitary, modern illumination'
    },
    palace_premium: {
      ar: 'قصور وتشطيبات VIP فائقة الجودة',
      en: 'VIP Bespoke Palace Standards',
      descAr: 'ترافنتينو إيطالي، نظام سمارت هوم ذكي، أبواب خشبية خاصة، أسقف ديكورية',
      descEn: 'Italian Travertine, full smart home, custom architectural joinery'
    },
  };

  const addonsList = [
    { id: 'pool', labelAr: 'مسبح خارجي متكامل مع فلاتر', labelEn: 'Swimming Pool & Filtration' },
    { id: 'landscape', labelAr: 'لاندسكيب وحدائق وشلالات جدارية', labelEn: 'Landscape & Water Features' },
    { id: 'central_ac', labelAr: 'تكييف مركزي مخفي (Concealed / VRF)', labelEn: 'Concealed / VRF Central HVAC' },
    { id: 'elevator', labelAr: 'مصعد هيدروليكي / بانورامي', labelEn: 'Panoramic / Hydraulic Elevator' },
    { id: 'smart_home', labelAr: 'نظام المنزل الذكي (Smart Home)', labelEn: 'Full Smart Home Automation' },
    { id: 'facade_cladding', labelAr: 'واجهات زجاجية وكلادينج ديكوري', labelEn: 'Curtain Wall & Modern Cladding' },
  ];

  const toggleAddon = (id: string) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const engineer = LEADERSHIP[1]; // Eng. Abdulsamad Kamal

  const generateWhatsAppMessage = () => {
    const pType = projectTypeLabels[projectType][lang === 'ar' ? 'ar' : 'en'];
    const fLevel = finishLevelLabels[finishLevel][lang === 'ar' ? 'ar' : 'en'];
    const chosenAddons = selectedAddons
      .map((id) => addonsList.find((a) => a.id === id)?.[lang === 'ar' ? 'labelAr' : 'labelEn'])
      .filter(Boolean)
      .join('، ');

    const text = lang === 'ar'
      ? `السلام عليكم ورحمة الله،
أود طلب دراسة وتحديد التكلفة الهندسية لمشروعي من مؤسسة تميز الإنجاز للمقاولات:

📋 *تفاصيل ومواصفات المشروع:*
• نوع المشروع: ${pType}
• مستوى التنفيذ: ${fLevel}
• مساحة البناء الإجمالية: ${area} متر مربع
• عدد الطوابق: ${floors} طوابق
${chosenAddons ? `• أنظمة وإضافات مطلوبة: ${chosenAddons}` : ''}

أرجو التواصل لترتيب استلام المخططات الهندسية وتحديد التكلفة والجدول الزمني بدقة مع مدير المشاريع م. عبدالصمد كمال دخيل.`
      : `Hello,
I would like to request an engineering study and cost quotation for my project from Tamiz Al-Injaz Contracting:

📋 *Project Specifications:*
• Project Type: ${pType}
• Execution Level: ${fLevel}
• Total Built-up Area: ${area} sqm
• Floors: ${floors} floors
${chosenAddons ? `• Add-ons: ${chosenAddons}` : ''}

Please contact me to review architectural/structural blueprints and prepare a detailed cost and timeline study with Projects Director Eng. Abdulsamad Kamal Dakheel.`;

    return encodeURIComponent(text);
  };

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-slate-900/90 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب تسعير ودراسة التكلفة عبر الواتساب' : 'Direct WhatsApp Project Quotation'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'حدد مواصفات مشروعك واطلب التسعير المباشر'
              : 'Specify Project Scope & Inquire Directly via WhatsApp'}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'اختر نوع ومساحة ومستوى تنفيذ مشروعك، وسيتم إرسال التفاصيل مباشرة إلى الفريق الهندسي لمراجعة المخططات وحساب التكلفة الدقيقة.'
              : 'Select your project category, built-up area, and finish grade to send the specifications directly to our lead engineer on WhatsApp.'}
          </p>
        </div>

        {/* Form Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Specifications Selector (7 cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 backdrop-blur-md shadow-xl">
            {/* 1. Project Type Selector */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                {lang === 'ar' ? '١. نوع المشروع الإنشائي / المعماري' : '1. Project Category'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'residential', labelAr: 'سكني / فيلا', labelEn: 'Residential Villa' },
                  { id: 'commercial', labelAr: 'تجاري / مكاتب', labelEn: 'Commercial / Office' },
                  { id: 'fitout', labelAr: 'تشطيبات وديكور', labelEn: 'Fit-Out & Decor' },
                  { id: 'renovation', labelAr: 'ترميم وتطوير', labelEn: 'Renovation' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                      projectType === item.id
                        ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white border-cyan-500 shadow-md shadow-cyan-500/20'
                        : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Finish Level */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3">
                {lang === 'ar' ? '٢. مستوى التنفيذ والتشطيب المطلوب' : '2. Execution & Finish Level'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { id: 'skeleton_materials', key: 'skeleton_materials' },
                  { id: 'deluxe_turnkey', key: 'deluxe_turnkey' },
                  { id: 'super_lux', key: 'super_lux' },
                  { id: 'palace_premium', key: 'palace_premium' },
                ].map((item) => {
                  const lvl = finishLevelLabels[item.key as keyof typeof finishLevelLabels];
                  const isSelected = finishLevel === item.id;
                  return (
                    <div
                      key={item.id}
                      onClick={() => setFinishLevel(item.id as any)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        isSelected
                          ? 'bg-cyan-500/10 border-cyan-500 shadow-md ring-1 ring-cyan-500'
                          : 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="text-sm font-bold text-white">
                          {lang === 'ar' ? lvl.ar : lvl.en}
                        </div>
                        {isSelected && (
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 leading-snug">
                        {lang === 'ar' ? lvl.descAr : lvl.descEn}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Area & Floors Slider */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'ar' ? '٣. مساحة البناء الإجمالية' : '3. Total Built-Up Area'}
                  </label>
                  <span className="text-sm font-black text-cyan-400">
                    {area} {lang === 'ar' ? 'م²' : 'm²'}
                  </span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="4000"
                  step="50"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>100 م²</span>
                  <span>1,500 م²</span>
                  <span>4,000 م²</span>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {lang === 'ar' ? 'عدد الطوابق' : 'Number of Floors'}
                  </label>
                  <span className="text-sm font-black text-cyan-400">
                    {floors} {lang === 'ar' ? 'طوابق' : 'Floors'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={floors}
                  onChange={(e) => setFloors(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>1 طابق</span>
                  <span>4 طوابق</span>
                  <span>8 طوابق</span>
                </div>
              </div>
            </div>

            {/* 4. Addons */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                {lang === 'ar' ? '٤. أنظمة وإضافات خاصة مرغوبة (اختياري)' : '4. Optional Add-ons & Smart Systems'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {addonsList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-lg border text-xs cursor-pointer flex items-center justify-between transition-all ${
                        isChecked
                          ? 'bg-slate-800 border-cyan-500/60 text-white'
                          : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center ${
                            isChecked
                              ? 'bg-cyan-500 border-cyan-500 text-slate-950'
                              : 'border-slate-600 bg-slate-800'
                          }`}
                        >
                          {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                        <span>{lang === 'ar' ? addon.labelAr : addon.labelEn}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Specifications Summary & Direct WhatsApp Send (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sticky top-24">
            <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-750 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              {/* Top glow */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                    {lang === 'ar' ? 'ملخص المواصفات المحددة' : 'Selected Specifications'}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    {lang === 'ar' ? 'جاهز للإرسال والمراجعة الهندسية' : 'Ready for Engineering Review'}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
              </div>

              {/* Selected Specs Card */}
              <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 mb-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{lang === 'ar' ? 'نوع المشروع:' : 'Project Type:'}</span>
                  <span className="font-bold text-white">{projectTypeLabels[projectType][lang === 'ar' ? 'ar' : 'en']}</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{lang === 'ar' ? 'مستوى التنفيذ:' : 'Finish Grade:'}</span>
                  <span className="font-bold text-cyan-300">{finishLevelLabels[finishLevel][lang === 'ar' ? 'ar' : 'en']}</span>
                </div>

                <div className="flex items-center justify-between text-xs pb-2.5 border-b border-slate-800/80">
                  <span className="text-slate-400">{lang === 'ar' ? 'المساحة والطوابق:' : 'Area & Floors:'}</span>
                  <span className="font-bold text-white">{area} م² • {floors} طوابق</span>
                </div>

                {selectedAddons.length > 0 && (
                  <div className="text-xs pt-1">
                    <span className="text-slate-400 block mb-1">{lang === 'ar' ? 'الأنظمة المضافة:' : 'Add-ons:'}</span>
                    <div className="flex flex-wrap gap-1">
                      {selectedAddons.map((id) => {
                        const addon = addonsList.find((a) => a.id === id);
                        if (!addon) return null;
                        return (
                          <span key={id} className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-750 text-[11px] text-slate-300">
                            {lang === 'ar' ? addon.labelAr : addon.labelEn}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Engineer In Charge Banner */}
              <div className="p-3.5 rounded-xl bg-gradient-to-r from-slate-950 to-slate-900 border border-slate-800 flex items-center gap-3.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 text-cyan-400">
                  <HardHat className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <div className="font-bold text-white">{engineer ? (lang === 'ar' ? engineer.nameAr : engineer.nameEn) : 'المسؤول الهندسي'}</div>
                  <div className="text-[11px] text-slate-400">{lang === 'ar' ? 'مراجعة المخططات وجدول الكميات وإعداد التسعير' : 'Blueprint & BOQ Engineering Review'}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="send-specs-whatsapp-btn"
                  className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/50 hover:shadow-emerald-900/60 hover:-translate-y-0.5 active:translate-y-0 transition-all text-center group"
                >
                  <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{lang === 'ar' ? 'إرسال المواصفات عبر الواتساب لتحديد التكلفة' : 'Send Project Specs via WhatsApp'}</span>
                </a>

                <button
                  onClick={() =>
                    onOpenQuoteModal(
                      `مواصفات محددة: مساحة ${area}م² - ${projectTypeLabels[projectType].ar} - ${finishLevelLabels[finishLevel].ar}`
                    )
                  }
                  id="open-rfq-modal-from-calc"
                  className="w-full py-3 px-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-750 hover:border-cyan-500/40 font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'ar' ? 'طلب عرض سعر رسمي مع إرفاق المخططات' : 'Upload Blueprints for Official RFQ'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
