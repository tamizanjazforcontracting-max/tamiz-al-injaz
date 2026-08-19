import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Language } from '../types';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  UploadCloud,
  CheckCircle,
  FileText,
  Building,
  ShieldCheck,
  Check,
  Facebook,
  Instagram,
  Twitter,
  ExternalLink,
  Navigation
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  initialMessage?: string;
  initialServiceId?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  initialMessage = '',
  initialServiceId = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'الأحساء (Al-Ahsa)',
    projectType: initialServiceId || 'general-contracting',
    estimatedBudget: '500,000 - 1,500,000 SAR',
    description: initialMessage || '',
  });

  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f: File) => f.name);
      setUploadedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomTicket = 'TMZ-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setIsSubmitted(true);
  };

  const generateWhatsAppMessage = () => {
    const text = `السلام عليكم ورحمة الله،
أود طلب عرض سعر ودراسة هندسية لمشروع جديد مع مؤسسة تميز الإنجاز للمقاولات:
- الاسم: ${formData.name || 'عميل جديد'}
- رقم الجوال: ${formData.phone || 'غير محدد'}
- المدينة/الموقع: ${formData.location}
- نوع المشروع: ${formData.projectType}
- الميزانية التقديرية: ${formData.estimatedBudget}
- تفاصيل المشروع: ${formData.description || 'أرجو التواصل للاطلاع على المخططات'}
${uploadedFiles.length > 0 ? `- المرفقات الجاهزة: ${uploadedFiles.join(', ')}` : ''}`;

    return encodeURIComponent(text);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-900/90 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'ar' ? 'تواصل معنا وطلب عرض سعر' : 'Contact Us & Request RFQ'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {lang === 'ar'
              ? 'جاهزون لتحويل رؤيتكم إلى صرح معماري متميز'
              : 'Ready to Transform Your Vision into Architectural Excellence'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {lang === 'ar'
              ? 'تواصل مباشرة مع فريقنا الهندسي بالأحساء لدراسة مشروعك، مراجعة المخططات، والحصول على عرض سعر مفصل ودقيق.'
              : 'Reach out directly to our engineering team in Al-Ahsa to review your blueprints and receive a detailed project proposal.'}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Map Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact Cards */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white pb-3 border-b border-slate-800">
                {lang === 'ar' ? 'بيانات التواصل الرسمية' : 'Corporate Contact Info'}
              </h3>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{lang === 'ar' ? 'البريد الإلكتروني المباشر' : 'Official Email'}</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Phone / Call */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{lang === 'ar' ? 'الاتصال المباشر وخدمة العملاء' : 'Customer Service & Phone'}</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-sm font-bold text-white hover:text-cyan-400 transition-colors ltr:font-mono"
                  >
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* WhatsApp Quick Chat */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{lang === 'ar' ? 'واتساب الإدارة الهندسية' : 'Engineering WhatsApp'}</div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    {lang === 'ar' ? 'بدء محادثة واتساب فورية' : 'Start Instant WhatsApp Chat'}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400 font-medium">{lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}</div>
                  <div className="text-sm font-bold text-white mb-2">
                    {lang === 'ar' ? COMPANY_INFO.addressAr : COMPANY_INFO.addressEn}
                  </div>
                  <a
                    href={COMPANY_INFO.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all group"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    <span>{lang === 'ar' ? 'عرض الموقع على خرائط Google' : 'Open in Google Maps'}</span>
                    <ExternalLink className="w-3 h-3 text-cyan-400" />
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">{lang === 'ar' ? 'أوقات العمل الميداني والمكتبي' : 'Working Hours'}</div>
                  <div className="text-sm font-bold text-slate-300">
                    {lang === 'ar' ? COMPANY_INFO.workingHoursAr : COMPANY_INFO.workingHoursEn}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Channels Card */}
            <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between">
                <span>{lang === 'ar' ? 'قنوات التواصل الاجتماعي الرسمية' : 'Official Social Channels'}</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={COMPANY_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-blue-600/10 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <Facebook className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">فيسبوك</div>
                    <div className="text-[10px] text-slate-400">Facebook</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500/50 hover:bg-pink-600/10 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-pink-600/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">انستقرام</div>
                    <div className="text-[10px] text-slate-400">Instagram</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-600/10 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-600/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Twitter className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">تويتر / X</div>
                    <div className="text-[10px] text-slate-400">Twitter</div>
                  </div>
                </a>

                <a
                  href={COMPANY_INFO.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-rose-500/50 hover:bg-rose-600/10 transition-all flex items-center gap-2.5 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-rose-600/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">خرائط جوجل</div>
                    <div className="text-[10px] text-slate-400">Google Maps</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Saudi Licensing Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-white">
                  {lang === 'ar' ? 'سجل تجاري معتمد ومرخص رسمياً' : 'Officially Licensed & Registered'}
                </div>
                <div className="text-slate-400 mt-0.5">
                  {lang === 'ar' ? `رقم السجل: ${COMPANY_INFO.crNumber} - الأحساء` : `CR: ${COMPANY_INFO.crNumber} - Al-Ahsa`}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive RFQ Form (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {lang === 'ar' ? 'تم استلام طلب المشروع بنجاح!' : 'Project RFQ Submitted Successfully!'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    {lang === 'ar'
                      ? `شكراً لتواصلك مع مؤسسة تميز الإنجاز للمقاولات. تم توليد رقم المرجع الهندسي (${ticketId}) وسيقوم مهندس المشروعات بالتواصل معك خلال ٢٤ ساعة.`
                      : `Thank you for choosing Tamiz Al-Injaz Contracting. Your ticket ID is (${ticketId}). A project engineer will review your scope and contact you within 24 hours.`}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'متابعة سريعة عبر واتساب' : 'Fast-Track on WhatsApp'}</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setUploadedFiles([]);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 font-bold text-xs sm:text-sm"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {lang === 'ar' ? 'نموذج طلب عرض سعر وتدقيق هندسي' : 'Request Official Project Quotation'}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {lang === 'ar'
                        ? 'املأ بيانات المشروع وسيتواصل معك مهندس معتمد لمراجعة التفاصيل مجاناً.'
                        : 'Provide your project details for a comprehensive engineering review.'}
                    </p>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'الاسم الكريم / اسم المنشأة *' : 'Full Name / Company *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={lang === 'ar' ? 'مثال: م. فهد العتيبي' : 'e.g. Eng. Fahad Al-Otaibi'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'رقم الجوال / الواتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={lang === 'ar' ? '05xxxxxxxx' : '+966 5x xxx xxxx'}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>
                </div>

                {/* Email & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'مدينة وموقع المشروع *' : 'Project Location *'}
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="الأحساء (Al-Ahsa)">{lang === 'ar' ? 'الأحساء (المقر الرئيسي)' : 'Al-Ahsa (Headquarters)'}</option>
                      <option value="المنطقة الشرقية (الدمام والخبر والجبيل)">{lang === 'ar' ? 'المنطقة الشرقية (الدمام والخبر والجبيل)' : 'Eastern Province (Dammam / Khobar / Jubail)'}</option>
                      <option value="الرياض (Riyadh)">{lang === 'ar' ? 'الرياض' : 'Riyadh'}</option>
                      <option value="جدة ومكة المكرمة (Jeddah & Makkah)">{lang === 'ar' ? 'جدة ومكة المكرمة' : 'Jeddah & Makkah'}</option>
                      <option value="القصيم (Qassim)">{lang === 'ar' ? 'القصيم' : 'Qassim'}</option>
                      <option value="نيوم والمشاريع الكبرى">{lang === 'ar' ? 'نيوم والمشاريع الكبرى' : 'NEOM & Mega Projects'}</option>
                      <option value="مدينة أخرى">{lang === 'ar' ? 'مدينة أخرى في المملكة' : 'Other City in KSA'}</option>
                    </select>
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'نوع الخدمة المطلوبة *' : 'Required Service Scope *'}
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="general-contracting">{lang === 'ar' ? 'مقاولات عامة وإنشاءات (تسليم مفتاح / عظم)' : 'General Contracting / Turnkey Construction'}</option>
                      <option value="interior-exterior-finishing">{lang === 'ar' ? 'تشطيبات وديكور داخلي وخارجي فاخر' : 'Luxury Fit-out & Facades'}</option>
                      <option value="infrastructure-works">{lang === 'ar' ? 'بنية تحتية وشبكات ومرافق' : 'Infrastructure & Utilities'}</option>
                      <option value="renovation-restoration">{lang === 'ar' ? 'ترميم وتطوير وتدعيم إنشائي' : 'Structural Retrofit & Renovation'}</option>
                      <option value="mep-works">{lang === 'ar' ? 'أعمال كهروميكانيكية وتكييف MEP' : 'MEP Systems & HVAC'}</option>
                      <option value="project-management">{lang === 'ar' ? 'إدارة مشاريع وإشراف هندسي' : 'Project Management & Supervision'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'ar' ? 'الميزانية التقديرية المتوقعة' : 'Estimated Budget Range'}
                    </label>
                    <select
                      value={formData.estimatedBudget}
                      onChange={(e) => setFormData({ ...formData, estimatedBudget: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    >
                      <option value="200,000 - 500,000 SAR">200,000 - 500,000 ر.س</option>
                      <option value="500,000 - 1,500,000 SAR">500,000 - 1,500,000 ر.س</option>
                      <option value="1,500,000 - 4,000,000 SAR">1,500,000 - 4,000,000 ر.س</option>
                      <option value="4,000,000 - 10,000,000 SAR">4,000,000 - 10,000,000 ر.س</option>
                      <option value="+10,000,000 SAR">+10,000,000 ر.س (مشاريع كبرى)</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'تفاصيل ومواصفات المشروع' : 'Project Scope & Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder={
                      lang === 'ar'
                        ? 'اذكر مساحة البناء، عدد الطوابق، حالة الأرض، وأي متطلبات معمارية خاصة...'
                        : 'Specify built-up area, number of floors, soil status, or custom design needs...'
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs sm:text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder:text-slate-600 resize-none"
                  />
                </div>

                {/* File Upload Zone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {lang === 'ar' ? 'إرفاق المخططات الهندسية أو جدول الكميات (PDF, DWG, صور)' : 'Upload Blueprints, BOQ or Site Photos (PDF, DWG, Images)'}
                  </label>
                  <label className="border-2 border-dashed border-slate-750 hover:border-cyan-500/60 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer transition-colors bg-slate-900/60">
                    <UploadCloud className="w-6 h-6 text-cyan-400 mb-1" />
                    <span className="text-xs text-slate-300 font-semibold">
                      {lang === 'ar' ? 'اسحب الملفات هنا أو اضغط للاختيار' : 'Drag & drop files or browse'}
                    </span>
                    <span className="text-[10px] text-slate-500 mt-0.5">
                      {lang === 'ar' ? 'مخططات معمارية، إنشائية، ملفات كاد، جداول كميات (حتى 50 ميجابايت)' : 'Architectural/Structural Drawings, CAD, BOQs'}
                    </span>
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.dwg,.dxf,.jpg,.png,.jpeg,.xlsx,.docx"
                    />
                  </label>

                  {/* Uploaded files chips */}
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {uploadedFiles.map((name, fIdx) => (
                        <div
                          key={fIdx}
                          className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs flex items-center gap-1.5"
                        >
                          <FileText className="w-3 h-3" />
                          <span className="truncate max-w-[160px]">{name}</span>
                          <Check className="w-3 h-3 text-emerald-400" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    id="submit-rfq-form-btn"
                    className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 hover:from-teal-400 hover:to-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'إرسال طلب التسعير المباشر' : 'Submit Project Request'}</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${generateWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>{lang === 'ar' ? 'إرسال عبر الواتساب' : 'Send on WhatsApp'}</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
