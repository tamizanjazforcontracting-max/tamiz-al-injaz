import React, { useState } from 'react';
import { PROJECTS } from '../data/companyData';
import { Language, ProjectItem } from '../types';
import {
  Building2,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const isRtl = lang === 'ar';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const categories = [
    { id: 'all', labelAr: 'جميع المشاريع', labelEn: 'All Projects' },
    { id: 'residential', labelAr: 'الفلل والقصور السكنية', labelEn: 'Residential & Villas' },
    { id: 'commercial', labelAr: 'المجمعات والمباني التجارية', labelEn: 'Commercial & Towers' },
    { id: 'finishing', labelAr: 'التشطيبات المعمارية', labelEn: 'Architectural Fit-out' },
    { id: 'infrastructure', labelAr: 'البنية التحتية والهياكل', labelEn: 'Civil & Infra' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'سابقة أعمالنا وإنجازاتنا' : 'Our Projects Portfolio'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              {lang === 'ar'
                ? 'مشاريع هندسية متفوقة تعكس جودة التنفيذ'
                : 'Pinnacle Contracting Works Built with Distinction'}
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              {lang === 'ar'
                ? 'نستعرض جانباً من الصروح العمرانية والمشاريع التي نفذتها وأشرفت عليها كوادر مؤسسة تميز الإنجاز في الأحساء ومختلف مناطق المملكة.'
                : 'A curated selection of landmark residential, commercial, fit-out and civil projects delivered across Saudi Arabia.'}
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="hidden md:flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
            <span>{lang === 'ar' ? 'أكثر من ٢٨٠ مشروع منجز بنجاح' : '280+ Successfully Delivered Projects'}</span>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-thin scrollbar-thumb-slate-800">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-teal-500 via-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-850 border border-slate-800'
              }`}
            >
              <span>{lang === 'ar' ? cat.labelAr : cat.labelEn}</span>
              {activeCategory === cat.id && (
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer rounded-2xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-950/40 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title[lang]}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                {/* Location Badge */}
                <div className="absolute top-4 right-4 rtl:right-4 rtl:left-auto ltr:left-4 ltr:right-auto px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-700 text-[11px] font-semibold text-slate-200 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.location[lang]}</span>
                </div>

                {/* Featured Badge if any */}
                {project.featured && (
                  <div className="absolute top-4 left-4 rtl:left-4 rtl:right-auto ltr:right-4 ltr:left-auto px-2.5 py-1 rounded-md bg-gradient-to-r from-teal-500 to-blue-600 text-white text-[10px] font-extrabold tracking-wide uppercase shadow">
                    {lang === 'ar' ? 'مشروع مميز' : 'Featured'}
                  </div>
                )}

                {/* Quick Area Metric Overlay */}
                <div className="absolute bottom-3 left-4 rtl:left-4 rtl:right-auto ltr:right-4 ltr:left-auto text-xs text-cyan-300 font-bold bg-slate-900/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                  {project.area}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors leading-snug">
                    {project.title[lang]}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-4">
                    {project.description[lang]}
                  </p>

                  {/* Scope bullets */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-800/80 mb-4">
                    {project.scope[lang].slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-400 flex-shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{project.duration[lang]}</span>
                  </div>

                  <span className="text-cyan-400 font-bold flex items-center gap-1 group-hover:underline">
                    <span>{lang === 'ar' ? 'استعراض التفاصيل' : 'View Project'}</span>
                    <ArrowIcon className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
