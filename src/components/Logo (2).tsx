import React from 'react';
import { Language } from '../types';

interface LogoProps {
  lang?: Language;
  variant?: 'full' | 'icon' | 'white' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  lang = 'ar',
  variant = 'full',
  size = 'md',
  showSubtitle = true,
  className = ''
}) => {
  // Size mappings
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const subtitleSizes = {
    sm: 'text-[9px]',
    md: 'text-[11px]',
    lg: 'text-xs',
    xl: 'text-sm'
  };

  // The custom vector SVG matching the uploaded brand icon:
  // 3 ascending pillars (Teal -> Cyan -> Blue) + 1 3D perspective hollow frame (Royal Blue)
  const LogoIcon = (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md`}
    >
      <defs>
        {/* Gradient for Pillar 1 (Leftmost, Mint/Teal) */}
        <linearGradient id="pillar1Grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2dd4bf" />
        </linearGradient>

        {/* Gradient for Pillar 2 (Cyan/Sky) */}
        <linearGradient id="pillar2Grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>

        {/* Gradient for Pillar 3 (Deep Sky / Blue) */}
        <linearGradient id="pillar3Grad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#0284c7" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>

        {/* Gradient for 3D Main Frame (Royal Blue) */}
        <linearGradient id="frameGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>

      {/* Pillar 1 - Shortest, far left */}
      <polygon
        points="14,38 23,34 23,98 14,98"
        fill="url(#pillar1Grad)"
      />

      {/* Pillar 2 - Medium, mid-left */}
      <polygon
        points="29,28 38,24 38,98 29,98"
        fill="url(#pillar2Grad)"
      />

      {/* Pillar 3 - Taller, near frame */}
      <polygon
        points="44,18 53,14 53,98 44,98"
        fill="url(#pillar3Grad)"
      />

      {/* 3D Perspective Outer Square/Frame */}
      <polygon
        points="59,8 106,26 106,98 59,98"
        fill="url(#frameGrad)"
      />

      {/* 3D Perspective Inner Cutout / Window */}
      <polygon
        points="71,28 94,36 94,86 71,86"
        fill="#020617"
        className="fill-slate-950"
      />
    </svg>
  );

  if (variant === 'icon') {
    return <div className={`inline-flex items-center justify-center ${className}`}>{LogoIcon}</div>;
  }

  return (
    <div className={`flex items-center gap-3 group ${className}`}>
      {/* Icon Graphic Container */}
      <div className="flex-shrink-0 flex items-center justify-center p-1 rounded-xl bg-slate-900/80 border border-slate-800/80 shadow-lg shadow-cyan-950/40">
        {LogoIcon}
      </div>

      {/* Typographic Label */}
      <div className="flex flex-col">
        <div className={`font-black tracking-tight flex items-center gap-1.5 leading-none ${titleSizes[size]} text-white`}>
          <span>{lang === 'ar' ? 'تميز الإنجاز' : 'TAMIZ AL-INJAZ'}</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 font-bold">
            {lang === 'ar' ? 'للمقاولات' : 'CONTRACTING'}
          </span>
        </div>
        {showSubtitle && (
          <span className={`text-slate-400 font-medium mt-1 ${subtitleSizes[size]}`}>
            {lang === 'ar' ? 'مؤسسة تميز الإنجاز للمقاولات العامة' : 'General Contracting Establishment'}
          </span>
        )}
      </div>
    </div>
  );
};
