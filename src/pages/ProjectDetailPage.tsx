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
import { ProjectImage } from '../types/portfolio';
import { resolvePublicAsset } from '../utils/assets';

export const ProjectDetailPage: React.FC = () => {
  const { slug = '' } = useParams<{ slug: string }>();
  const { lang, localePath } = useLanguage();
  const copy = UI_COPY[lang];

  const project = getProjectBySlug(slug);
  const { prev, next } = getAdjacentProjects(slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasEditorialSections = Boolean(project?.editorialSections?.length);

  const { allImages, mediaLightboxIndexMap } = useMemo(() => {
    if (!project) {
      return { allImages: [] as ProjectImage[], mediaLightboxIndexMap: new Map<string, number>() };
    }

    if (!project.editorialSections?.length) {
      return {
        allImages: [project.mainImage, ...project.gallery],
        mediaLightboxIndexMap: new Map<string, number>(),
      };
    }

    const collected: ProjectImage[] = [];
    const indexMap = new Map<string, number>();

    if (project.mainImage.src) {
      indexMap.set(project.mainImage.id, collected.length);
      collected.push(project.mainImage);
    }

    project.editorialSections.forEach((section) => {
      section.media?.forEach((item) => {
        if (item.type === 'image' && item.src) {
          indexMap.set(item.id, collected.length);
          collected.push({
            id: item.id,
            src: item.src,
            aspectRatio: item.aspectRatio || '4/3',
            alt: item.alt,
            caption: item.caption,
            placeholderLabel: item.alt,
            kind: 'image',
          });
        }
      });
    });

    return { allImages: collected, mediaLightboxIndexMap: indexMap };
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
    {
      label: project.disciplines
        ? copy.project.fields.disciplines
        : copy.project.fields.category,
      value: project.disciplines
        ? project.disciplines[lang].join(' · ')
        : project.categoryLabel[lang],
    },
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

  const subtitleParts: string[] = [];
  if (hasEditorialSections) {
    if (project.location) subtitleParts.push(project.location[lang]);
    if (project.year) subtitleParts.push(project.year);
  } else {
    subtitleParts.push(project.categoryLabel[lang]);
    if (project.year) subtitleParts.push(project.year);
    else if (project.statusNote) subtitleParts.push(project.statusNote[lang]);
  }

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

        {/* Section A: Project Header */}
        <header className="mb-10 md:mb-14 max-w-[960px]">
          {subtitleParts.length > 0 && (
            <p className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555] mb-3">
              {subtitleParts.join(' · ')}
            </p>
          )}
          <h1 className="font-display-serif text-[clamp(2rem,4.6vw,4rem)] leading-[1.04] tracking-[-0.015em] text-[#141414] font-normal text-balance">
            {project.title[lang]}
          </h1>
          {hasEditorialSections && project.disciplines && (
            <p className="font-editorial-serif text-[14.5px] sm:text-[15.5px] text-[#4A4A4A] mt-4">
              {project.disciplines[lang].join(' · ')}
            </p>
          )}
        </header>

        {/* Main Opening Image: for structured editorial projects, only render if an original file exists */}
        {(!hasEditorialSections || project.mainImage.src) && (
          <section aria-label={project.mainImage.alt[lang]} className="mb-14 md:mb-20">
            <div className="max-w-[1040px]">
              <ArtworkMedia
                image={project.mainImage}
                lang={lang}
                indexLabel={project.id}
                priority
                onClick={() => {
                  const idx = hasEditorialSections
                    ? mediaLightboxIndexMap.get(project.mainImage.id)
                    : 0;
                  if (idx !== undefined) setLightboxIndex(idx);
                }}
              />
              {project.mainImage.caption && (
                <div className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                  <p className="font-editorial-serif italic text-[14.5px] text-[#4A4A4A]">
                    {project.mainImage.caption[lang]}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const idx = hasEditorialSections
                        ? mediaLightboxIndexMap.get(project.mainImage.id)
                        : 0;
                      if (idx !== undefined) setLightboxIndex(idx);
                    }}
                    className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#555555] hover:text-[#141414] transition-colors"
                  >
                    {copy.project.inspectImageHint}
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {hasEditorialSections && project.editorialSections ? (
          <>
            {/* Metadata & Summary Overview */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 md:pb-16 border-t border-[#141414]/12 pt-10 md:pt-12">
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

              <div className="lg:col-span-8 max-w-[66ch] flex items-start">
                <p className="font-editorial-serif text-[18px] sm:text-[19px] leading-[1.68] text-[#1F1F1F]">
                  {project.shortDescription[lang]}
                </p>
              </div>
            </section>

            {/* Sections B–G */}
            <div className="divide-y divide-[#141414]/12 border-b border-[#141414]/12">
              {project.editorialSections.map((section) => {
                const suppliedMedia = (section.media || []).filter((item) =>
                  Boolean(item.src)
                );

                return (
                  <section
                    key={section.id}
                    aria-labelledby={`section-${section.id}`}
                    className="py-12 md:py-16"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                      <div className="lg:col-span-4">
                        <h2
                          id={`section-${section.id}`}
                          className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]"
                        >
                          {section.heading[lang]}
                        </h2>
                      </div>

                      <div className="lg:col-span-8 space-y-10">
                        <div className="max-w-[66ch] space-y-5 font-editorial-serif text-[17.5px] sm:text-[18px] leading-[1.72] text-[#1F1F1F]">
                          {section.paragraphs[lang].map((paragraph, pIdx) => (
                            <p key={pIdx}>{paragraph}</p>
                          ))}
                        </div>

                        {suppliedMedia.length > 0 && (
                          <div className="space-y-10 max-w-[960px] pt-2">
                            {suppliedMedia.map((item) => {
                              const resolved = resolvePublicAsset(item.src);
                              if (!resolved) return null;

                              if (item.type === 'video') {
                                return (
                                  <figure key={item.id} className="w-full">
                                    <video
                                      src={resolved}
                                      poster={
                                        item.poster
                                          ? resolvePublicAsset(item.poster)
                                          : undefined
                                      }
                                      controls
                                      playsInline
                                      preload="metadata"
                                      aria-label={item.alt[lang]}
                                      className="w-full h-auto block bg-[#EAEAEA]"
                                    />
                                    {item.caption && (
                                      <figcaption className="mt-3 font-editorial-serif italic text-[14.5px] text-[#4A4A4A]">
                                        {item.caption[lang]}
                                      </figcaption>
                                    )}
                                  </figure>
                                );
                              }

                              const lbIndex = mediaLightboxIndexMap.get(item.id);
                              return (
                                <figure key={item.id} className="w-full">
                                  <button
                                    type="button"
                                    onClick={() => {
                                      if (lbIndex !== undefined) {
                                        setLightboxIndex(lbIndex);
                                      }
                                    }}
                                    aria-label={item.alt[lang]}
                                    className="group block w-full text-left cursor-zoom-in focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#141414]"
                                  >
                                    <img
                                      src={resolved}
                                      alt={item.alt[lang]}
                                      loading="lazy"
                                      referrerPolicy="no-referrer"
                                      className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-90"
                                    />
                                  </button>
                                  {item.caption && (
                                    <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-4">
                                      <span className="font-editorial-serif italic text-[14.5px] text-[#4A4A4A]">
                                        {item.caption[lang]}
                                      </span>
                                      {lbIndex !== undefined && (
                                        <button
                                          type="button"
                                          onClick={() => setLightboxIndex(lbIndex)}
                                          className="cursor-pointer font-editorial-serif text-[12px] tracking-[0.12em] uppercase text-[#555555] hover:text-[#141414] transition-colors"
                                        >
                                          {copy.project.inspectImageHint}
                                        </button>
                                      )}
                                    </figcaption>
                                  )}
                                </figure>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          </>
        ) : (
          <>
            {/* Standard Metadata & Curatorial Prose Split */}
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
          </>
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
