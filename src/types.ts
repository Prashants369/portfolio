export type Persona = '3D' | 'AI' | 'BOTH';

export interface ProjectVariant {
  id: string;
  label: string;
  title: string;
  category: string;
  description: string;
  longDescription?: string;
  gallery?: string[];
  sections?: {
    title: string;
    description?: string;
    images: string[];
  }[];
  tools: string[];
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
  sections?: {
    title: string;
    description?: string;
    images: string[];
  }[];
  variants?: ProjectVariant[]; // Support for combined sections
  downloadUrl?: string;
  tools: string[];
  year: string;
  role?: string;
  client?: string;
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
