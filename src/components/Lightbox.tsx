import React, { useEffect } from 'react';
import { Language, ProjectImage } from '../types/portfolio';
import { UI_COPY } from '../data/siteContent';
import { ArtworkMedia } from './ArtworkMedia';

interface LightboxProps {
  images: ProjectImage[];
  currentIndex: number | null;
  lang: Language;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  lang,
  onClose,
  onNavigate,
}) => {
  const copy = UI_COPY[lang].project;

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, images.length, onClose, onNavigate]);

  if (currentIndex === null || !images[currentIndex]) return null;

  const activeImage = images[currentIndex];
  const hasMultiple = images.length > 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={activeImage.alt[lang]}
      className="fixed inset-0 z-50 bg-[#F7F7F7]/96 flex flex-col justify-between p-5 sm:p-8 md:p-12"
      onClick={onClose}
    >
      <div
        className="flex items-center justify-between text-[12px] tracking-[0.14em] uppercase font-editorial-serif text-[#141414]"
        onClick={(e) => e.stopPropagation()}
      >
        <span>
          {currentIndex + 1} / {images.length}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="cursor-pointer py-1 px-2 text-[#141414] hover:opacity-60 transition-opacity uppercase tracking-[0.14em]"
        >
          {copy.lightboxClose} ×
        </button>
      </div>

      <div
        className="flex-1 flex items-center justify-center my-4 min-h-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-[960px] max-h-[75vh] flex items-center justify-center">
          {activeImage.src ? (
            <img
              src={activeImage.src}
              alt={activeImage.alt[lang]}
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[74vh] w-auto h-auto object-contain block"
            />
          ) : (
            <div className="w-full max-w-[560px]">
              <ArtworkMedia image={activeImage} lang={lang} priority />
            </div>
          )}
        </div>
      </div>

      <div
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[14px] font-editorial-serif text-[#4A4A4A]"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="italic">
          {activeImage.caption ? activeImage.caption[lang] : activeImage.alt[lang]}
        </p>

        {hasMultiple && (
          <div className="flex items-center gap-6 text-[12px] tracking-[0.14em] uppercase shrink-0">
            <button
              type="button"
              onClick={() =>
                onNavigate((currentIndex - 1 + images.length) % images.length)
              }
              className="cursor-pointer py-1 hover:text-[#141414] transition-colors"
            >
              ← {copy.lightboxPrev}
            </button>
            <button
              type="button"
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              className="cursor-pointer py-1 hover:text-[#141414] transition-colors"
            >
              {copy.lightboxNext} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
