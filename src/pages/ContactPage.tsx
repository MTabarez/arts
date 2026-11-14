import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { SITE_CONFIG, UI_COPY } from '../data/siteContent';

export const ContactPage: React.FC = () => {
  const { lang } = useLanguage();
  const copy = UI_COPY[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#141414]">
      <SEOHead
        title={copy.seo.contactTitle}
        description={copy.seo.contactDescription}
        lang={lang}
      />

      <Header showBrand />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-5 sm:px-8 md:px-12 pt-12 md:pt-24 pb-16">
        <div className="max-w-[54ch]">
          <h1 className="font-display-serif text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] tracking-[-0.015em] uppercase font-normal text-[#141414] mb-10">
            {copy.contact.pageTitle}
          </h1>

          <p className="font-editorial-serif text-[18px] sm:text-[19px] leading-[1.68] text-[#2A2A2A] mb-12">
            {copy.contact.intro}
          </p>

          <dl className="space-y-8 border-t border-[#141414]/12 pt-8">
            <div>
              <dt className="font-editorial-serif text-[11px] tracking-[0.16em] uppercase text-[#555555] mb-2">
                {copy.contact.emailLabel}
              </dt>
              <dd>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="font-editorial-serif text-[20px] sm:text-[22px] text-[#141414] underline underline-offset-6 decoration-[1px] hover:opacity-65 transition-opacity break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-editorial-serif text-[11px] tracking-[0.16em] uppercase text-[#555555] mb-2">
                {copy.contact.socialLabel}
              </dt>
              <dd>
                <a
                  href={SITE_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-editorial-serif text-[17px] text-[#141414] hover:underline underline-offset-4 decoration-[1px]"
                >
                  {SITE_CONFIG.instagramHandle}
                </a>
              </dd>
            </div>

            <div>
              <dt className="font-editorial-serif text-[11px] tracking-[0.16em] uppercase text-[#555555] mb-1.5">
                {copy.contact.locationLabel}
              </dt>
              <dd className="font-editorial-serif text-[17px] text-[#333333]">
                {copy.contact.locationValue}
              </dd>
            </div>
          </dl>
        </div>
      </main>

      <Footer />
    </div>
  );
};
