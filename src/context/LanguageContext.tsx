import React, { createContext, useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Language } from '../types/portfolio';

const STORAGE_KEY = 'marianne_tabarez_lang';

interface LanguageContextValue {
  lang: Language;
  switchLanguage: (nextLang: Language) => void;
  localePath: (subPath?: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function getSavedLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'es') {
      return saved;
    }
  } catch {
    // Ignore storage errors in restricted environments
  }
  return 'es';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathSegment = location.pathname.split('/')[1];
  const lang: Language = pathSegment === 'en' ? 'en' : 'es';

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const switchLanguage = (nextLang: Language) => {
    if (nextLang === lang) return;
    try {
      localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // Ignore storage errors
    }

    const segments = location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'es' || segments[0] === 'en') {
      segments[0] = nextLang;
      navigate(`/${segments.join('/')}${location.search}${location.hash}`);
    } else {
      navigate(`/${nextLang}${location.pathname === '/' ? '' : location.pathname}${location.search}`);
    }
  };

  const localePath = (subPath = '') => {
    const cleaned = subPath.startsWith('/') ? subPath : `/${subPath}`;
    if (cleaned === '/') return `/${lang}`;
    return `/${lang}${cleaned}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, switchLanguage, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
