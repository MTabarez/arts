import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { SEOHead } from '../components/SEOHead';
import { useLanguage } from '../context/LanguageContext';
import { CV_CONTENT } from '../data/cvContent';
import { SITE_CONFIG, UI_COPY } from '../data/siteContent';

export const CVPage: React.FC = () => {
  const { lang, localePath } = useLanguage();
  const seoCopy = UI_COPY[lang].seo;
  const cv = CV_CONTENT[lang];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F7] text-[#141414]">
      <SEOHead
        title={seoCopy.cvTitle}
        description={seoCopy.cvDescription}
        lang={lang}
      />

      <Header showBrand />

      <main className="flex-1 w-full max-w-[1120px] mx-auto px-5 sm:px-8 md:px-12 pt-8 md:pt-14">
        {/* Title & Role */}
        <header className="pb-12 md:pb-16 border-b border-[#141414]/12">
          <h1 className="font-display-serif text-[clamp(1.85rem,4.4vw,3.75rem)] leading-[1.02] tracking-[-0.015em] uppercase font-normal text-[#141414]">
            {SITE_CONFIG.artistName}
          </h1>
          <p className="font-editorial-serif text-[16px] sm:text-[18px] text-[#4A4A4A] mt-3">
            {cv.role}
          </p>
        </header>

        {/* Biography */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.biography}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 font-editorial-serif text-[17px] sm:text-[18px] leading-[1.7] text-[#1F1F1F]">
            {cv.biographyParagraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </section>

        {/* A. Education */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.education}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {cv.education.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 font-editorial-serif"
              >
                <div className="sm:col-span-2 text-[16px] text-[#4A4A4A] tabular-nums">
                  {item.year}
                </div>
                <div className="sm:col-span-10">
                  <p className="text-[18px] font-medium leading-[1.45] text-[#141414]">
                    {item.degree}
                  </p>
                  <p className="text-[16px] leading-[1.55] text-[#333333] mt-1">
                    {item.institution}
                  </p>
                  <div className="mt-2.5 space-y-1 text-[15px] leading-[1.55] text-[#4A4A4A]">
                    {item.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* B. Selected Artistic Projects */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.selectedProjects}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {cv.selectedProjects.map((project, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif pb-5 border-b border-[#141414]/8 last:border-b-0 last:pb-0"
              >
                <div className="sm:col-span-3 text-[14.5px] text-[#4A4A4A] tabular-nums pt-0.5">
                  {project.year || ''}
                </div>
                <div className="sm:col-span-9">
                  {project.slug ? (
                    <Link
                      to={localePath(`/works/${project.slug}`)}
                      className="text-[17px] font-medium text-[#141414] hover:underline underline-offset-4 decoration-[1px]"
                    >
                      {project.title}
                    </Link>
                  ) : (
                    <span className="text-[17px] font-medium text-[#141414]">
                      {project.title}
                    </span>
                  )}
                  <p className="text-[14px] text-[#555555] mt-0.5">
                    {project.medium}
                  </p>
                  <p className="text-[15.5px] leading-[1.58] text-[#333333] mt-1.5">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* C. Collaborative & Community-Based Practices */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.collaborative}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-7">
            {cv.collaborativePractices.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif pb-6 border-b border-[#141414]/8 last:border-b-0 last:pb-0"
              >
                <div className="sm:col-span-3 text-[14.5px] text-[#4A4A4A] tabular-nums pt-0.5">
                  {item.year}
                </div>
                <div className="sm:col-span-9">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    {item.slug ? (
                      <Link
                        to={localePath(`/works/${item.slug}`)}
                        className="text-[17px] font-medium text-[#141414] hover:underline underline-offset-4 decoration-[1px]"
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <h3 className="text-[17px] font-medium text-[#141414]">
                        {item.title}
                      </h3>
                    )}
                    {item.status && (
                      <span className="text-[13px] italic text-[#555555]">
                        — {item.status}
                      </span>
                    )}
                  </div>
                  {(item.institution || item.location) && (
                    <p className="text-[14.5px] text-[#555555] mt-1">
                      {item.institution || item.location}
                    </p>
                  )}
                  <p className="text-[15.5px] leading-[1.6] text-[#2B2B2B] mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* D. Artistic Research & Documented Creative Activities */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.research}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            {cv.researchActivities.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif pb-5 border-b border-[#141414]/8 last:border-b-0 last:pb-0"
              >
                <div className="sm:col-span-3 text-[14.5px] text-[#4A4A4A] tabular-nums pt-0.5">
                  {item.year}
                </div>
                <div className="sm:col-span-9">
                  {item.slug ? (
                    <Link
                      to={localePath(`/works/${item.slug}`)}
                      className="text-[17px] font-medium text-[#141414] hover:underline underline-offset-4 decoration-[1px]"
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <h3 className="text-[17px] font-medium text-[#141414]">
                      {item.title}
                    </h3>
                  )}
                  {item.location && (
                    <p className="text-[14px] text-[#555555] mt-0.5">
                      {item.location}
                    </p>
                  )}
                  <p className="text-[15.5px] leading-[1.6] text-[#2B2B2B] mt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* E. Selected Training & Continuing Education (Tiered) */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.training}
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-4">
              {cv.primaryTraining.map((course, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif"
                >
                  <div className="sm:col-span-3 text-[14px] text-[#4A4A4A] tabular-nums pt-0.5">
                    {course.year}
                  </div>
                  <div className="sm:col-span-9">
                    <p className="text-[16px] leading-[1.5] text-[#141414]">
                      {course.title}
                      {course.ongoing && (
                        <span className="italic text-[#555555]">
                          {' '}
                          — {cv.ongoingLabel}
                        </span>
                      )}
                    </p>
                    <p className="text-[14.5px] text-[#4A4A4A] mt-0.5">
                      {course.institution}
                      {course.note ? ` · ${course.note}` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Visually secondary training list */}
            <div className="mt-10 pt-8 border-t border-[#141414]/10">
              <h3 className="font-editorial-serif text-[11px] tracking-[0.14em] uppercase text-[#666666] mb-4">
                {cv.sections.otherTraining}
              </h3>
              <div className="space-y-2.5">
                {cv.otherTraining.map((course, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif text-[14.5px] text-[#4A4A4A]"
                  >
                    <div className="sm:col-span-3 tabular-nums text-[#595959]">
                      {course.year}
                    </div>
                    <div className="sm:col-span-9">
                      <span>{course.title}</span>
                      <span className="text-[#595959]">
                        {' '}
                        — {course.institution}
                      </span>
                      {course.ongoing && (
                        <span className="italic text-[#595959]">
                          {' '}
                          ({cv.ongoingLabel})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* F. Participation in University Governance */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 border-b border-[#141414]/12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#555555]">
              {cv.sections.governance}
            </h2>
          </div>
          <div className="md:col-span-8 font-editorial-serif">
            <p className="text-[17px] font-medium text-[#141414]">
              {cv.governance.title}
            </p>
            <p className="text-[15px] text-[#4A4A4A] mt-1">
              {cv.governance.institution}
            </p>
            <p className="text-[15.5px] leading-[1.6] text-[#2B2B2B] mt-2">
              {cv.governance.description}
            </p>
          </div>
        </section>

        {/* G. Professional Experience (Visually Secondary) */}
        <section className="py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          <div className="md:col-span-4">
            <h2 className="font-editorial-serif text-[12px] tracking-[0.14em] uppercase text-[#666666]">
              {cv.sections.professional}
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="font-editorial-serif text-[15px] leading-[1.6] text-[#555555] mb-7">
              {cv.professionalIntro}
            </p>
            <div className="space-y-5">
              {cv.professionalExperience.map((job, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-6 font-editorial-serif pb-4 border-b border-[#141414]/8 last:border-b-0 last:pb-0"
                >
                  <div className="sm:col-span-3 text-[13.5px] text-[#595959] tabular-nums pt-0.5">
                    {job.period}
                  </div>
                  <div className="sm:col-span-9">
                    <p className="text-[15.5px] text-[#2B2B2B]">
                      {job.role}
                      <span className="text-[#595959]">
                        {' '}
                        — {job.organization}
                      </span>
                    </p>
                    <p className="text-[14.5px] leading-[1.55] text-[#555555] mt-1">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
