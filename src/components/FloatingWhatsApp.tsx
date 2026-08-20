import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import { MessageSquare, X, PhoneCall, Send } from 'lucide-react';

interface FloatingWhatsAppProps {
  lang: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quickMsg, setQuickMsg] = useState('');

  const sendWhatsApp = (customText?: string) => {
    const text = customText || quickMsg || (lang === 'ar' ? 'السلام عليكم ورحمة الله، أود الاستفسار من مؤسسة تميز الإنجاز للمقاولات عن خدماتكم' : 'Hello, I would like to inquire about Tamiz Al-Injaz contracting services');
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 rtl:left-6 rtl:right-auto ltr:right-6 ltr:left-auto z-40">
      {isOpen && (
        <div className="mb-3 w-80 bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden animate-fade-in text-slate-100">
          {/* Header */}
          <div className="bg-emerald-600 p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold">
                  {lang === 'ar' ? 'خدمة عملاء تميز الإنجاز' : 'Tamiz Al-Injaz Support'}
                </h4>
                <span className="text-[10px] text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  {lang === 'ar' ? 'متصل الآن - بالأحساء' : 'Online - Al-Ahsa'}
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/25 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-slate-950/90 text-xs">
            <p className="text-slate-300 leading-relaxed">
              {lang === 'ar'
                ? 'مرحباً بك! يسعدنا تلقي استفساراتك حول تسعير المشاريع، التشطيبات، أو حجز موعد معاينة هندسية بالأحساء وجميع المناطق.'
                : 'Welcome! How can our engineering team assist you with your construction or fit-out project today?'}
            </p>

            {/* Quick Prompts */}
            <div className="space-y-1.5">
              {[
                { ar: 'أود طلب تسعير مشروع فيلا سكنية بالأحساء', en: 'I want a quote for a luxury villa' },
                { ar: 'أريد الاستفسار عن تشطيبات تجارية ومكاتب', en: 'Inquiring about commercial fit-out' },
                { ar: 'طلب زيارة ميدانية لمعاينة الموقع', en: 'Request on-site engineering survey' },
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => sendWhatsApp(lang === 'ar' ? item.ar : item.en)}
                  className="w-full text-start p-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 text-[11px] transition-colors"
                >
                  {lang === 'ar' ? item.ar : item.en}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 flex items-center gap-1.5">
              <input
                type="text"
                value={quickMsg}
                onChange={(e) => setQuickMsg(e.target.value)}
                placeholder={lang === 'ar' ? 'اكتب استفسارك هنا...' : 'Type your question...'}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') sendWhatsApp();
                }}
                className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-emerald-500"
              />
              <button
                onClick={() => sendWhatsApp()}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                title="Send"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-2xl shadow-emerald-500/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group"
        aria-label="Open WhatsApp Chat"
      >
        <MessageSquare className="w-7 h-7 text-slate-950 font-bold fill-current" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-950 animate-ping" />
      </button>
    </div>
  );
};
