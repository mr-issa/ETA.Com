export type PageView = 'home' | 'services' | 'work' | 'about' | 'contact' | 'privacy' | 'not-found';

export interface ServiceItem {
  id: string;
  code: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  whoItIsFor: string[];
  problemsSolved: string[];
  approach: string[];
  deliverables: string[];
  nextStep: string;
  isCoreService: boolean; // currently offered vs strategic expansion
}

export interface ProjectItem {
  id: string;
  title: string;
  clientOrBrand: string;
  industry: string;
  serviceCategory: string;
  isVerified: boolean; // true = Verified Founder Project, false = Concept / Speculative
  badgeLabel: 'Verified Founder Project' | 'Concept Project' | 'Speculative Campaign';
  summary: string;
  image: string;
  challenge: string;
  objectives: string[];
  strategy: string;
  execution: string[];
  deliverables: string[];
  verifiedResultsOrExpectedImpact: string;
  lessonsLearned: string;
  collaboratorOrReference?: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  company: string;
  website: string;
  country: string;
  service: string;
  budget: string;
  timeline: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization?: string;
  language?: string;
}
