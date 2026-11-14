export type Language = 'es' | 'en';

export type FilterCategoryId =
  | 'all'
  | 'artworks'
  | 'photography'
  | 'moving-image'
  | 'collage-mixed-media'
  | 'drawing-painting'
  | 'textile-collaborative'
  | 'artistic-research'
  | 'cultural-projects';

export interface LocalizedText {
  es: string;
  en: string;
}

export interface ProjectImage {
  id: string;
  src?: string;
  aspectRatio: string; // e.g. '4/5', '3/2', '1/1', '16/9'
  alt: LocalizedText;
  caption?: LocalizedText;
  placeholderLabel: LocalizedText;
  kind?: 'image' | 'video-still' | 'detail' | 'installation';
}

export interface CollaborativeBreakdown {
  individualContribution: LocalizedText;
  collectiveProcess: LocalizedText;
  participatingGroups: LocalizedText;
  culturalContext: LocalizedText;
}

export interface Project {
  id: string;
  slug: string;
  title: LocalizedText;
  categoryLabel: LocalizedText;
  filterCategories: FilterCategoryId[];
  year: string | null; // Confirmed year or range (e.g., '2021', '2020–2021', '2026'); null if unconfirmed
  statusNote?: LocalizedText; // e.g., 'In development' / 'En desarrollo'
  medium: LocalizedText;
  dimensions?: LocalizedText;
  developmentContext?: LocalizedText;
  location?: LocalizedText;
  shortDescription: LocalizedText;
  curatorialDescription: {
    es: string[];
    en: string[];
  };
  artistStatement?: LocalizedText;
  collaborativeBreakdown?: CollaborativeBreakdown;
  publicationOrExhibition?: LocalizedText;
  mainImage: ProjectImage;
  gallery: ProjectImage[];
  relatedSlugs?: string[];
  videoUrl?: string;
}
