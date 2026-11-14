import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArtworkMedia } from '../components/ArtworkMedia';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/projects';
import { CATEGORY_FILTERS, SITE_CONFIG, UI_COPY } from '../data/siteContent';
import { FilterCategoryId } from '../types/portfolio';

export const HomePage: React.FC = () => {
  const { lang, localePath } = useLanguage();
  const copy = UI_COPY[lang];

  const [selectedCategory, setSelectedCategory] = useState<FilterCategoryId>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const confirmedYears = useMemo(() => {
    const years = new Set<string>();
    PROJECTS.forEach((p) => {
      if (p.year) years.add(p.year);
    });
    return Array.from(years).sort((a, b) => {
      const numA = parseInt(a.slice(0, 4), 10);
      const numB = parseInt(b.slice(0, 4), 10);
      return numB - numA;
    });
  }, []);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const categoryMatch =
        selectedCategory === 'all' ||
        project.filterCategories.includes(selectedCategory);

      const yearMatch =
        selectedYear === 'all'
          ? true
          : selectedYear === 'pending'
          ? project.year === null
          : project.year === selectedYear;

      return categoryMatch && yearMatch;
    });
  }, [selectedCategory, selectedYear]);

  const hasActiveFilter = selectedCategory !== 'all' || selectedYear !== 'all';

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedYear('all');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#141414]">
      <SEOHead
        title={copy.seo.homeTitle}
        description={copy.seo.homeDescription}
        lang={lang}
      />

      <Header showBrand={false} />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        {/* Opening Composition: generous whitespace from top, intro + cities + artist name anchored near bottom of first screen */}
        <section className="min-h-[58vh] sm:min-h-[68vh] md:min-h-[calc(100vh-92px)] flex flex-col justify-end pt-28 sm:pt-36 md:pt-44 pb-10 sm:pb-14 md:pb-16">
          <div className="max-w-[60ch] mb-6 sm:mb-8">
            <p className="font-editorial-serif text-[13.5px] sm:text-[14.5px] leading-[1.6] text-[#2F2F2F]">
              {copy.home.intro}
            </p>
            <p className="font-editorial-serif text-[12px] sm:text-[12.5px] tracking-[0.06em] text-[#555555] mt-2.5">
              {copy.home.locations}
            </p>
          </div>

          <h1 className="font-display-serif text-[clamp(1.9rem,5.2vw,5.15rem)] leading-[0.96] tracking-[-0.015em] font-normal uppercase text-[#141414]">
            {SITE_CONFIG.artistName}
          </h1>
        </section>

        {/* Mobile Compact Filter Toggle */}
        <div className="md:hidden mb-8 border-y border-[#141414]/15 py-3">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              aria-expanded={mobileFiltersOpen}
              className="cursor-pointer font-editorial-serif text-[13px] tracking-[0.12em] uppercase text-[#141414] flex items-center gap-2 py-1"
            >
              <span>{copy.home.filtersToggle}</span>
              <span aria-hidden="true">{mobileFiltersOpen ? '−' : '+'}</span>
            </button>

            <span className="font-editorial-serif text-[13px] text-[#4A4A4A] tabular-nums">
              {copy.home.worksCountLabel(filteredProjects.length)}
            </span>
          </div>

          {mobileFiltersOpen && (
            <div className="pt-4 pb-2 space-y-6">
              <div>
                <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-2.5">
                  {copy.home.categoryHeading}
                </h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {CATEGORY_FILTERS.map((cat) => {
                    const active = selectedCategory === cat.id;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          aria-pressed={active}
                          className={`cursor-pointer font-editorial-serif text-[15px] py-0.5 transition-colors ${
                            active
                              ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                              : 'text-[#555555] hover:text-[#141414]'
                          }`}
                        >
                          {cat.label[lang]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-2.5">
                  {copy.home.yearHeading}
                </h2>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  <li>
                    <button
                      type="button"
                      onClick={() => setSelectedYear('all')}
                      aria-pressed={selectedYear === 'all'}
                      className={`cursor-pointer font-editorial-serif text-[15px] py-0.5 transition-colors ${
                        selectedYear === 'all'
                          ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                          : 'text-[#555555] hover:text-[#141414]'
                      }`}
                    >
                      {copy.home.allYears}
                    </button>
                  </li>
                  {confirmedYears.map((yr) => (
                    <li key={yr}>
                      <button
                        type="button"
                        onClick={() => setSelectedYear(yr)}
                        aria-pressed={selectedYear === yr}
                        className={`cursor-pointer font-editorial-serif text-[15px] py-0.5 tabular-nums transition-colors ${
                          selectedYear === yr
                            ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                            : 'text-[#555555] hover:text-[#141414]'
                        }`}
                      >
                        {yr}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => setSelectedYear('pending')}
                      aria-pressed={selectedYear === 'pending'}
                      className={`cursor-pointer font-editorial-serif text-[15px] py-0.5 transition-colors ${
                        selectedYear === 'pending'
                          ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                          : 'text-[#555555] hover:text-[#141414]'
                      }`}
                    >
                      {copy.home.undatedLabel}
                    </button>
                  </li>
                </ul>
              </div>

              {hasActiveFilter && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#141414] underline underline-offset-4"
                >
                  {copy.home.resetFilters}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Main Desktop Split: Permanent Left Sidebar + 3-Column Editorial Grid */}
        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">
          {/* Permanent Left Sidebar on Desktop */}
          <aside
            aria-label={lang === 'es' ? 'Filtros de obras' : 'Artwork filters'}
            className="hidden md:block w-[210px] lg:w-[235px] shrink-0 md:sticky md:top-10"
          >
            <div className="space-y-10">
              <div>
                <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-3.5">
                  {copy.home.categoryHeading}
                </h2>
                <ul className="space-y-1.5">
                  {CATEGORY_FILTERS.map((cat) => {
                    const active = selectedCategory === cat.id;
                    return (
                      <li key={cat.id}>
                        <button
                          type="button"
                          onClick={() => setSelectedCategory(cat.id)}
                          aria-pressed={active}
                          className={`cursor-pointer text-left font-editorial-serif text-[15px] leading-[1.45] transition-colors block w-full py-0.5 ${
                            active
                              ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                              : 'text-[#555555] hover:text-[#141414]'
                          }`}
                        >
                          {cat.label[lang]}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div>
                <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-3.5">
                  {copy.home.yearHeading}
                </h2>
                <ul className="space-y-1.5">
                  <li>
                    <button
                      type="button"
                      onClick={() => setSelectedYear('all')}
                      aria-pressed={selectedYear === 'all'}
                      className={`cursor-pointer text-left font-editorial-serif text-[15px] leading-[1.45] transition-colors block w-full py-0.5 ${
                        selectedYear === 'all'
                          ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                          : 'text-[#555555] hover:text-[#141414]'
                      }`}
                    >
                      {copy.home.allYears}
                    </button>
                  </li>
                  {confirmedYears.map((yr) => (
                    <li key={yr}>
                      <button
                        type="button"
                        onClick={() => setSelectedYear(yr)}
                        aria-pressed={selectedYear === yr}
                        className={`cursor-pointer text-left font-editorial-serif text-[15px] leading-[1.45] tabular-nums transition-colors block w-full py-0.5 ${
                          selectedYear === yr
                            ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                            : 'text-[#555555] hover:text-[#141414]'
                        }`}
                      >
                        {yr}
                      </button>
                    </li>
                  ))}
                  <li>
                    <button
                      type="button"
                      onClick={() => setSelectedYear('pending')}
                      aria-pressed={selectedYear === 'pending'}
                      className={`cursor-pointer text-left font-editorial-serif text-[15px] leading-[1.45] transition-colors block w-full py-0.5 ${
                        selectedYear === 'pending'
                          ? 'text-[#141414] font-medium underline underline-offset-4 decoration-[1px]'
                          : 'text-[#555555] hover:text-[#141414]'
                      }`}
                    >
                      {copy.home.undatedLabel}
                    </button>
                  </li>
                </ul>
              </div>

              {hasActiveFilter && (
                <div className="pt-2 border-t border-[#141414]/12">
                  <button
                    type="button"
                    onClick={resetAllFilters}
                    className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#141414] hover:opacity-65 transition-opacity underline underline-offset-4"
                  >
                    {copy.home.resetFilters}
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* Three-Column Variable-Aspect Artwork Grid */}
          <section
            aria-label={lang === 'es' ? 'Archivo de obras' : 'Works archive'}
            className="flex-1 min-w-0 w-full"
          >
            {filteredProjects.length === 0 ? (
              <div className="py-16 border-t border-[#141414]/12">
                <p className="font-editorial-serif text-[17px] text-[#4A4A4A] mb-4">
                  {copy.home.emptyState}
                </p>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="cursor-pointer font-editorial-serif text-[13px] tracking-[0.12em] uppercase text-[#141414] underline underline-offset-4"
                >
                  {copy.home.resetFilters}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 xl:gap-x-10 gap-y-10 sm:gap-y-14 lg:gap-y-16 items-start">
                {filteredProjects.map((project) => (
                  <article key={project.id} className="group">
                    <Link
                      to={localePath(`/works/${project.slug}`)}
                      className="block focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#141414]"
                    >
                      <ArtworkMedia
                        image={project.mainImage}
                        lang={lang}
                        indexLabel={project.id}
                      />

                      <div className="mt-2.5 sm:mt-3.5">
                        <h3 className="font-editorial-serif font-medium text-[15px] sm:text-[17px] leading-[1.3] text-[#141414] group-hover:underline underline-offset-4 decoration-[1px]">
                          {project.title[lang]}
                        </h3>
                        <p className="font-editorial-serif text-[12.5px] sm:text-[13.5px] leading-[1.4] sm:leading-[1.45] text-[#4A4A4A] mt-1">
                          {project.categoryLabel[lang]}
                        </p>
                        {(project.year || project.statusNote) && (
                          <p className="font-editorial-serif text-[12px] sm:text-[12.5px] leading-[1.45] text-[#595959] mt-0.5 tabular-nums">
                            {project.year ?? project.statusNote?.[lang]}
                          </p>
                        )}
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};
