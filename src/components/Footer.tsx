import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG, UI_COPY } from '../data/siteContent';

export const Footer: React.FC = () => {
  const { lang, localePath } = useLanguage();
  const copy = UI_COPY[lang];

  return (
    <footer className="w-full mt-24 md:mt-36 pt-12 pb-10 border-t border-[#141414]/12">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 text-[12px] tracking-[0.14em] uppercase font-editorial-serif">
          <nav
            aria-label={lang === 'es' ? 'Navegación de pie de página' : 'Footer navigation'}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[#3D3D3D]"
          >
            <Link
              to={localePath('/')}
              className="hover:text-[#141414] transition-colors whitespace-nowrap"
            >
              {copy.nav.home}
            </Link>
            <Link
              to={localePath('/works')}
              className="hover:text-[#141414] transition-colors whitespace-nowrap"
            >
              {copy.nav.works}
            </Link>
            <Link
              to={localePath('/cv')}
              className="hover:text-[#141414] transition-colors whitespace-nowrap"
            >
              {copy.nav.cv}
            </Link>
            <Link
              to={localePath('/contact')}
              className="hover:text-[#141414] transition-colors whitespace-nowrap"
            >
              {copy.nav.contact}
            </Link>
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#141414] transition-colors whitespace-nowrap"
            >
              {copy.nav.instagram}
            </a>
          </nav>

          <p className="text-[#595959] tracking-[0.06em] normal-case text-[14px]">
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.artistDisplay}
          </p>
        </div>

        <div className="mt-12 md:mt-16 overflow-hidden">
          <Link
            to={localePath('/')}
            className="block font-display-serif text-[clamp(1.75rem,5.1vw,5.05rem)] leading-[0.96] tracking-[-0.015em] text-[#141414] uppercase select-none hover:opacity-80 transition-opacity"
          >
            {SITE_CONFIG.artistName}
          </Link>
        </div>
      </div>
    </footer>
  );
};
