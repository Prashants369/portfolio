export type Persona = '3D' | 'AI' | 'BOTH';

export interface ProjectSection {
  title: string;
  description?: string;
  images: string[];
}

export interface ProjectVariant {
  id: string;
  label: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  gallery?: string[];
  sections?: ProjectSection[];
  tools: string[];
  highlights?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  persona: Persona;
  thumbnail: string;
  description: string;
  longDescription?: string;
  gallery?: string[];
  sections?: ProjectSection[];
  variants?: ProjectVariant[];
  downloadUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  tools: string[];
  year: string;
  role?: string;
  client?: string;
  highlights?: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  persona: Persona;
}

export interface Skill {
  category: string;
  items: string[];
  persona: Persona;
}
