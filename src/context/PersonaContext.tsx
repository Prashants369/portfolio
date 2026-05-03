import React, { createContext, useContext, useState, useEffect } from 'react';
import { Persona } from '../types';

interface PersonaContextType {
  persona: Persona;
  setPersona: (p: Persona) => void;
  themeColor: string;
  is3D: boolean;
  isAI: boolean;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export const PersonaProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to BOTH or check localStorage
  const [persona, setPersonaState] = useState<Persona>(() => {
    const saved = localStorage.getItem('portfolio-persona');
    return (saved as Persona) || '3D';
  });

  const setPersona = (p: Persona) => {
    setPersonaState(p);
    localStorage.setItem('portfolio-persona', p);
  };

  const themeColor = persona === '3D' ? '#ff4d4d' : persona === 'AI' ? '#00f2ff' : '#ffffff';
  const themeRGB = persona === '3D' ? '255, 77, 77' : persona === 'AI' ? '0, 242, 255' : '255, 255, 255';
  const is3D = persona === '3D' || persona === 'BOTH';
  const isAI = persona === 'AI' || persona === 'BOTH';

  // Apply theme to document body or a CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty('--brand-color', themeColor);
    document.documentElement.style.setProperty('--brand-rgb', themeRGB);
    if (persona === '3D') {
      document.body.classList.add('theme-3d');
      document.body.classList.remove('theme-ai');
    } else if (persona === 'AI') {
      document.body.classList.add('theme-ai');
      document.body.classList.remove('theme-3d');
    } else {
      document.body.classList.remove('theme-3d', 'theme-ai');
    }
  }, [persona, themeColor]);

  return (
    <PersonaContext.Provider value={{ persona, setPersona, themeColor, is3D, isAI }}>
      {children}
    </PersonaContext.Provider>
  );
};

export const usePersona = () => {
  const context = useContext(PersonaContext);
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider');
  }
  return context;
};
