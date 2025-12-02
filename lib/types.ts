export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  website?: string;
  field?: string;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  mode: string;
  description?: string;
}

export interface LanguageSkill {
  language: string;
  level: string;
  listening?: string;
  reading?: string;
  writing?: string;
  spokenProduction?: string;
  spokenInteraction?: string;
}

export interface NewsEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  category?: string;
  link?: string;
}
