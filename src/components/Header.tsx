import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG, UI_COPY } from '../data/siteContent';

interface HeaderProps {
  showBrand?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showBrand = false }) => {
  const { lang, switchLanguage, localePath } = useLanguage();
  const location = useLocation();
  const copy = UI_COPY[lang];

  const isWorksActive =
    location.pathname === `/${lang}` ||
    location.pathname.startsWith(`/${lang}/works`);
  const isCvActive = location.pathname === `/${lang}/cv`;
  const isContactActive = location.pathname === `/${lang}/contact`;

  return (
    <header className="w-full pt-6 pb-4 md:pt-8 md:pb-6">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between gap-4">
        <div className="min-w-0">
          {showBrand ? (
            <Link
              to={localePath('/')}
              className="font-display-serif text-[12px] sm:text-[14px] tracking-[0.11em] uppercase text-[#141414] hover:opacity-65 transition-opacity block truncate max-w-[160px] sm:max-w-none"
            >
              {SITE_CONFIG.artistName}
            </Link>
          ) : (
            <span className="sr-only">{SITE_CONFIG.artistDisplay}</span>
          )}
        </div>

        <nav
          aria-label={lang === 'es' ? 'Navegación principal' : 'Primary navigation'}
          className="flex items-center justify-end flex-wrap gap-x-2.5 sm:gap-x-4 text-[12px] sm:text-[13px] tracking-[0.12em] uppercase font-editorial-serif text-[#141414]"
        >
          <div className="flex items-center gap-1.5 whitespace-nowrap shrink-0" role="group" aria-label={lang === 'es' ? 'Idioma' : 'Language'}>
            <button
              type="button"
              onClick={() => switchLanguage('es')}
              aria-pressed={lang === 'es'}
              className={`cursor-pointer py-1 px-0.5 transition-opacity ${
                lang === 'es'
                  ? 'text-[#141414] underline underline-offset-4 decoration-[1px]'
                  : 'text-[#6E6E6E] hover:text-[#141414]'
              }`}
            >
              ES
            </button>
            <span className="text-[#9A9A9A]" aria-hidden="true">/</span>
            <button
              type="button"
              onClick={() => switchLanguage('en')}
              aria-pressed={lang === 'en'}
              className={`cursor-pointer py-1 px-0.5 transition-opacity ${
                lang === 'en'
                  ? 'text-[#141414] underline underline-offset-4 decoration-[1px]'
                  : 'text-[#6E6E6E] hover:text-[#141414]'
              }`}
            >
              EN
            </button>
          </div>

          <span className="text-[#B5B5B5]" aria-hidden="true">|</span>

          <Link
            to={localePath('/')}
            className={`py-1 whitespace-nowrap shrink-0 transition-opacity ${
              isWorksActive
                ? 'text-[#141414] underline underline-offset-4 decoration-[1px]'
                : 'text-[#4A4A4A] hover:text-[#141414]'
            }`}
          >
            {copy.nav.works}
          </Link>

          <Link
            to={localePath('/cv')}
            className={`py-1 whitespace-nowrap shrink-0 transition-opacity ${
              isCvActive
                ? 'text-[#141414] underline underline-offset-4 decoration-[1px]'
                : 'text-[#4A4A4A] hover:text-[#141414]'
            }`}
          >
            {copy.nav.cv}
          </Link>

          <Link
            to={localePath('/contact')}
            className={`py-1 whitespace-nowrap shrink-0 transition-opacity ${
              isContactActive
                ? 'text-[#141414] underline underline-offset-4 decoration-[1px]'
                : 'text-[#4A4A4A] hover:text-[#141414]'
            }`}
          >
            {copy.nav.contact}
          </Link>
        </nav>
      </div>
    </header>
  );
};
