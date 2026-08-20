export type Language = 'ar' | 'en';

export type ProjectCategory = 'all' | 'residential' | 'commercial' | 'fitout' | 'infrastructure' | 'renovation';

export interface ProjectItem {
  id: string;
  title: { ar: string; en: string };
  category: 'residential' | 'commercial' | 'fitout' | 'infrastructure' | 'renovation';
  location: { ar: string; en: string };
  area: string;
  duration: { ar: string; en: string };
  year: string;
  client: { ar: string; en: string };
  description: { ar: string; en: string };
  image: string;
  gallery?: string[];
  scope: { ar: string[]; en: string[] };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  title: { ar: string; en: string };
  shortDesc: { ar: string; en: string };
  fullDesc: { ar: string; en: string };
  iconName: string;
  image: string;
  features: { ar: string[]; en: string[] };
  deliverables: { ar: string[]; en: string[] };
}

export interface TestimonialItem {
  id: string;
  name: { ar: string; en: string };
  role: { ar: string; en: string };
  company: { ar: string; en: string };
  content: { ar: string; en: string };
  rating: number;
  avatar: string;
  projectType: { ar: string; en: string };
}

export interface FAQItem {
  question: { ar: string; en: string };
  answer: { ar: string; en: string };
  category: { ar: string; en: string };
}

export interface WorkStepItem {
  step: string;
  title: { ar: string; en: string };
  desc: { ar: string; en: string };
  duration: { ar: string; en: string };
}

export interface CalculatorState {
  projectType: 'residential' | 'commercial' | 'fitout' | 'renovation' | 'industrial';
  buildingType: string;
  finishLevel: 'skeleton_only' | 'skeleton_materials' | 'deluxe_turnkey' | 'super_lux' | 'palace_premium';
  area: number;
  floors: number;
  additions: string[];
}
