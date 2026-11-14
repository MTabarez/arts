import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArtworkMedia } from '../components/ArtworkMedia';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Lightbox } from '../components/Lightbox';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { getAdjacentProjects, getProjectBySlug, PROJECTS } from '../data/projects';
import { SITE_CONFIG, UI_COPY } from '../data/siteContent';

export const ProjectDetailPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { lang, localePath } = useLanguage();
  const copy = UI_COPY[lang];

  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const allImages = useMemo(() => {
    if (!project) return [];
    return [project.mainImage, ...project.gallery];
  }, [project]);

  const relatedProjects = useMemo(() => {
    if (!project?.relatedSlugs) return [];
    return project.relatedSlugs
      .map((relSlug) => PROJECTS.find((p) => p.slug === relSlug))
      .filter((p): p is NonNullable<typeof p> => Boolean(p));
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#141414]">
        <SEOHead
          title={`${copy.project.notFoundTitle} — ${SITE_CONFIG.artistDisplay}`}
          description={copy.project.notFoundBody}
          lang={lang}
        />
        <Header showBrand />
        <main className="flex-1 max-w-[1440px] w-full mx-auto px-5 sm:px-8 md:px-12 py-20">
          <h1 className="font-display-serif text-3xl sm:text-4xl text-[#141414] mb-4">
            {copy.project.notFoundTitle}
          </h1>
          <p className="font-editorial-serif text-[17px] text-[#4A4A4A] mb-8">
            {copy.project.notFoundBody}
          </p>
          <Link
            to={localePath('/')}
            className="font-editorial-serif text-[13px] tracking-[0.14em] uppercase underline underline-offset-4 text-[#141414]"
          >
            ← {copy.project.backToWorks}
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const metadataRows: { label: string; value: string }[] = [
    { label: copy.project.fields.title, value: project.title[lang] },
    { label: copy.project.fields.category, value: project.categoryLabel[lang] },
  ];

  if (project.year) {
    metadataRows.push({
      label: copy.project.fields.year,
      value: project.year,
    });
  }
  if (project.statusNote) {
    metadataRows.push({
      label: copy.project.fields.status,
      value: project.statusNote[lang],
    });
  }

  metadataRows.push({
    label: copy.project.fields.medium,
    value: project.medium[lang],
  });

  if (project.dimensions) {
    metadataRows.push({
      label: copy.project.fields.dimensions,
      value: project.dimensions[lang],
    });
  }
  if (project.developmentContext) {
    metadataRows.push({
      label: copy.project.fields.context,
      value: project.developmentContext[lang],
    });
  }
  if (project.location) {
    metadataRows.push({
      label: copy.project.fields.location,
      value: project.location[lang],
    });
  }
  if (project.publicationOrExhibition) {
    metadataRows.push({
      label: copy.project.fields.publication,
      value: project.publicationOrExhibition[lang],
    });
  }

  const subtitleParts = [project.categoryLabel[lang]];
  if (project.year) subtitleParts.push(project.year);
  else if (project.statusNote) subtitleParts.push(project.statusNote[lang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#141414]">
      <SEOHead
        title={`${project.title[lang]} — ${SITE_CONFIG.artistDisplay}`}
        description={project.shortDescription[lang]}
        lang={lang}
        type="article"
      />

      <Header showBrand />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-4 md:pt-8">
        {/* Back link */}
        <div className="mb-8 md:mb-12">
          <Link
            to={localePath('/')}
            className="inline-flex items-center gap-2 font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#4A4A4A] hover:text-[#141414] transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>{copy.project.backToWorks}</span>
          </Link>
        </div>

        {/* Project Title Header */}
        <header className="mb-10 md:mb-14 max-w-[920px]">
          <p className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-3">
            {subtitleParts.join(' · ')}
          </p>
          <h1 className="font-display-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.015em] text-[#141414] font-normal text-balance">
            {project.title[lang]}
          </h1>
        </header>

        {/* Main Artwork Image */}
        <section aria-label={project.mainImage.alt[lang]} className="mb-14 md:mb-20">
          <div className="max-w-[1040px]">
            <ArtworkMedia
              image={project.mainImage}
              lang={lang}
              indexLabel={project.id}
              priority
              onClick={() => setLightboxIndex(0)}
            />
            {project.mainImage.caption && (
              <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                <p className="font-editorial-serif italic text-[14.5px] text-[#4A4A4A]">
                  {project.mainImage.caption[lang]}
                </p>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(0)}
                  className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#555555] hover:text-[#141414] transition-colors"
                >
                  {copy.project.inspectImageHint}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Metadata & Curatorial Prose Split */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#141414]/12">
          {/* Restrained Metadata */}
          <div className="lg:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-5">
              {copy.project.metadataHeading}
            </h2>
            <dl className="space-y-4">
              {metadataRows.map((row) => (
                <div
                  key={row.label}
                  className="border-t border-[#141414]/10 pt-3"
                >
                  <dt className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-1">
                    {row.label}
                  </dt>
                  <dd className="font-editorial-serif text-[15.5px] leading-[1.5] text-[#141414]">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Curatorial Text, Statement & Collaborative Framework */}
          <div className="lg:col-span-8 max-w-[66ch]">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-5">
              {copy.project.curatorialHeading}
            </h2>
            <div className="space-y-5 font-editorial-serif text-[18px] leading-[1.7] text-[#1F1F1F]">
              {project.curatorialDescription[lang].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {project.artistStatement && (
              <div className="mt-10 pt-8 border-t border-[#141414]/12">
                <h3 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-3">
                  {copy.project.statementHeading}
                </h3>
                <blockquote className="font-editorial-serif italic text-[18px] leading-[1.68] text-[#2C2C2C]">
                  “{project.artistStatement[lang]}”
                </blockquote>
              </div>
            )}

            {project.collaborativeBreakdown && (
              <div className="mt-10 pt-8 border-t border-[#141414]/12">
                <h3 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-5">
                  {copy.project.collaborativeHeading}
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-1">
                      {copy.project.collaborativeFields.individual}
                    </dt>
                    <dd className="font-editorial-serif text-[16px] leading-[1.6] text-[#1F1F1F]">
                      {project.collaborativeBreakdown.individualContribution[lang]}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-1">
                      {copy.project.collaborativeFields.collective}
                    </dt>
                    <dd className="font-editorial-serif text-[16px] leading-[1.6] text-[#1F1F1F]">
                      {project.collaborativeBreakdown.collectiveProcess[lang]}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-1">
                      {copy.project.collaborativeFields.participants}
                    </dt>
                    <dd className="font-editorial-serif text-[16px] leading-[1.6] text-[#1F1F1F]">
                      {project.collaborativeBreakdown.participatingGroups[lang]}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-1">
                      {copy.project.collaborativeFields.context}
                    </dt>
                    <dd className="font-editorial-serif text-[16px] leading-[1.6] text-[#1F1F1F]">
                      {project.collaborativeBreakdown.culturalContext[lang]}
                    </dd>
                  </div>
                </dl>
              </div>
            )}
          </div>
        </section>

        {/* Additional Gallery Images */}
        {project.gallery.length > 0 && (
          <section
            aria-label={lang === 'es' ? 'Galería de imágenes' : 'Image gallery'}
            className="py-16 md:py-20 space-y-14 md:space-y-20 border-b border-[#141414]/12"
          >
            {project.gallery.map((img, index) => (
              <figure key={img.id} className="max-w-[960px]">
                <ArtworkMedia
                  image={img}
                  lang={lang}
                  indexLabel={`${project.id}.${index + 1}`}
                  onClick={() => setLightboxIndex(index + 1)}
                />
                {img.caption && (
                  <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                    <span className="font-editorial-serif italic text-[14.5px] text-[#4A4A4A]">
                      {img.caption[lang]}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(index + 1)}
                      className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#555555] hover:text-[#141414] transition-colors"
                    >
                      {copy.project.inspectImageHint}
                    </button>
                  </figcaption>
                )}
              </figure>
            ))}
          </section>
        )}

        {/* Previous / Next Project Navigation */}
        {(prev || next) && (
          <nav
            aria-label={lang === 'es' ? 'Navegación entre proyectos' : 'Project navigation'}
            className="py-12 md:py-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-[#141414]/12"
          >
            {prev ? (
              <Link
                to={localePath(`/works/${prev.slug}`)}
                className="group inline-flex flex-col items-start"
              >
                <span className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#555555] mb-1">
                  ← {copy.project.previous}
                </span>
                <span className="font-editorial-serif font-medium text-[18px] text-[#141414] group-hover:underline underline-offset-4 decoration-[1px]">
                  {prev.title[lang]}
                </span>
              </Link>
            ) : (
              <span />
            )}

            {next ? (
              <Link
                to={localePath(`/works/${next.slug}`)}
                className="group inline-flex flex-col sm:items-end"
              >
                <span className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#555555] mb-1">
                  {copy.project.next} →
                </span>
                <span className="font-editorial-serif font-medium text-[18px] text-[#141414] group-hover:underline underline-offset-4 decoration-[1px]">
                  {next.title[lang]}
                </span>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}

        {/* Related Works */}
        {relatedProjects.length > 0 && (
          <section className="pt-14 md:pt-16">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-8">
              {copy.project.relatedHeading}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-12 items-start">
              {relatedProjects.map((rel) => (
                <article key={rel.id} className="group">
                  <Link
                    to={localePath(`/works/${rel.slug}`)}
                    className="block"
                  >
                    <ArtworkMedia
                      image={rel.mainImage}
                      lang={lang}
                      indexLabel={rel.id}
                    />
                    <div className="mt-3">
                      <h3 className="font-editorial-serif font-medium text-[16px] text-[#141414] group-hover:underline underline-offset-4 decoration-[1px]">
                        {rel.title[lang]}
                      </h3>
                      <p className="font-editorial-serif text-[13.5px] text-[#4A4A4A] mt-0.5">
                        {rel.categoryLabel[lang]}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>

      <Lightbox
        images={allImages}
        currentIndex={lightboxIndex}
        lang={lang}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(idx) => setLightboxIndex(idx)}
      />

      <Footer />
    </div>
  );
};
