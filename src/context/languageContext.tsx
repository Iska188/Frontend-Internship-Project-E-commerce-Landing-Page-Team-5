import { createContext, useContext, type ReactNode } from 'react';
import { TRANSLATIONS } from '../constants/translations';

interface LanguageContextType {
  language: 'en';
  setLanguage: (lang: 'en') => void;
  t: typeof TRANSLATIONS;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: TRANSLATIONS,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  return (
    <LanguageContext.Provider value={{ language: 'en', setLanguage: () => {}, t: TRANSLATIONS }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  return useContext(LanguageContext);
}
