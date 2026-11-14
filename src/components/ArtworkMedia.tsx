import React, { useState } from 'react';
import { Language, ProjectImage } from '../types/portfolio';
import { resolvePublicAsset } from '../utils/assets';

interface ArtworkMediaProps {
  image: ProjectImage;
  lang: Language;
  indexLabel?: string;
  priority?: boolean;
  onClick?: () => void;
  className?: string;
}

export const ArtworkMedia: React.FC<ArtworkMediaProps> = ({
  image,
  lang,
  indexLabel,
  priority = false,
  onClick,
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);
  const resolvedSrc = resolvePublicAsset(image.src);
  const showImage = Boolean(resolvedSrc) && !hasError;

  const content = showImage ? (
    <img
      src={resolvedSrc}
      alt={image.alt[lang]}
      loading={priority ? 'eager' : 'lazy'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className="w-full h-auto block transition-opacity duration-300 group-hover:opacity-90"
    />
  ) : (
    <div
      style={{ aspectRatio: image.aspectRatio }}
      role="img"
      aria-label={image.alt[lang]}
      className="w-full bg-[#EAEAEA] flex flex-col justify-between p-3 sm:p-5 select-none transition-colors duration-200 group-hover:bg-[#E2E2E2]"
    >
      <div className="flex items-center justify-between text-[10px] sm:text-[11px] tracking-[0.12em] uppercase text-[#6E6E6E] font-editorial-serif">
        <span>{indexLabel || ''}</span>
        <span>{image.aspectRatio.replace('/', ' : ')}</span>
      </div>

      <div className="my-auto py-2 sm:py-4 text-center">
        <p className="font-editorial-serif italic text-[12.5px] sm:text-[15px] text-[#555555] leading-snug max-w-[24ch] mx-auto">
          {image.placeholderLabel[lang]}
        </p>
      </div>

      <div className="h-[1px] w-5 sm:w-6 bg-[#141414]/15 mx-auto" aria-hidden="true" />
    </div>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`group block w-full text-left cursor-zoom-in focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#141414] ${className}`}
        aria-label={image.alt[lang]}
      >
        {content}
      </button>
    );
  }

  return <div className={`w-full ${className}`}>{content}</div>;
};
