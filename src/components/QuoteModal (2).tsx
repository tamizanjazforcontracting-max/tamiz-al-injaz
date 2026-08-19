import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import {
  X,
  Send,
  MessageSquare,
  FileText,
  Building,
  CheckCircle,
  UploadCloud,
  Check
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
  presetScope?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  lang,
  onClose,
  presetScope = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('الأحساء');
  const [service, setService] = useState('مقاولات عامة وإنشاءات');
  const [notes, setNotes] = useState(presetScope);
  const [files, setFiles] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketNum, setTicketNum] = useState('');

  useEffect(() => {
    if (presetScope) {
      setNotes(presetScope);
    }
  }, [presetScope]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketNum('TMZ-' + Math.floor(100000 + Math.random() * 900000));
    setIsSubmitted(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f: File) => f.name);
      setFiles((prev) => [...prev, ...names]);
    }
  };

  const generateWhatsAppMessage = () => {
    const text = `السلام عليكم ورحمة الله،
أود طلب تسعير مشروع هندسي جديد من مؤسسة تميز الإنجاز للمقاولات:
- الاسم: ${name}
- الجوال: ${phone}
- المدينة: ${city}
- الخدمة: ${service}
- التفاصيل: ${notes || 'مراجعة المخططات ودراسة التكاليف'}`;

    return encodeURIComponent(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-750 rounded-3xl overflow-hidden shadow-2xl my-8">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 z-20 p-2.5 rounded-full bg-slate-950/80 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-slate-800 bg-slate-950/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase mb-2">
            <FileText className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'طلب عرض سعر سريع' : 'Quick Quote Request'}</span>
          </div>
          <h2 className="text-xl font-bold text-white">
            {lang === 'ar' ? 'تسعير ودراسة المخططات الهندسية' : 'Engineering Quotation & Blueprints Review'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar'
              ? 'أرسل بيانات مشروعك وسيقوم مهندس المشاريع بمؤسسة تميز الإنجاز بالتواصل معك فوراً.'
              : 'Submit your project requirements and an engineer will contact you shortly.'}
          </p>
        </div>

        {/* Body Form */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'ar' ? 'تم استلام طلبكم بنجاح!' : 'Request Received Successfully!'}
              </h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto">
                {lang === 'ar'
                  ? `رقم التذكرة: ${ticketNum}. سيتواصل معك أحد مهندسينا خلال ساعات العمل بالأحساء.`
                  : `Ticket ID: ${ticketNum}. An engineer will reach out to you shortly.`}
              </p>

              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'المتابعة المباشرة عبر واتساب' : 'Chat Directly on WhatsApp'}</span>
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-bold"
                >
                  {lang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {lang === 'ar' ? 'الاسم *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'اسم العميل' : 'Your name'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {lang === 'ar' ? 'رقم الجوال *' : 'Phone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05xxxxxxxx"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {lang === 'ar' ? 'المدينة' : 'City'}
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder={lang === 'ar' ? 'الأحساء، الدمام، الرياض...' : 'Al-Ahsa, Dammam, Riyadh...'}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    {lang === 'ar' ? 'نوع المشروع' : 'Project Scope'}
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500"
                  >
                    <option value="مقاولات عامة وإنشاءات">{lang === 'ar' ? 'مقاولات عامة وإنشاءات' : 'General Contracting'}</option>
                    <option value="تشطيبات وديكور داخلي">{lang === 'ar' ? 'تشطيبات وديكور فاخر' : 'Fit-Out & Interior'}</option>
                    <option value="ترميم وتطوير">{lang === 'ar' ? 'ترميم وتدعيم إنشائي' : 'Renovation & Retrofit'}</option>
                    <option value="بنية تحتية وشبكات">{lang === 'ar' ? 'بنية تحتية وشبكات' : 'Infrastructure'}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'ar' ? 'تفاصيل ومواصفات المشروع' : 'Project Details / Notes'}
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'ar' ? 'المساحة، عدد الطوابق، المواصفات الخاصة...' : 'Area, floors, specific scope...'}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white text-xs focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              {/* Upload Files */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  {lang === 'ar' ? 'إرفاق المخططات (اختياري)' : 'Attach Blueprints (Optional)'}
                </label>
                <label className="border border-dashed border-slate-700 hover:border-cyan-500 rounded-xl p-3 flex items-center justify-center gap-2 cursor-pointer bg-slate-950/40 text-xs text-slate-400">
                  <UploadCloud className="w-4 h-4 text-cyan-400" />
                  <span>{lang === 'ar' ? 'رفع ملفات أو صور' : 'Upload drawings/photos'}</span>
                  <input type="file" multiple onChange={handleFileChange} className="hidden" />
                </label>
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {files.map((f, i) => (
                      <span key={i} className="text-[10px] bg-slate-800 text-cyan-300 px-2 py-0.5 rounded border border-slate-700 truncate max-w-[140px]">
                        {f}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'إرسال طلب التسعير' : 'Submit Quotation Request'}</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center"
                  title="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
