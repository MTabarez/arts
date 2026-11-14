import { FilterCategoryId, Language } from '../types/portfolio';

export const SITE_CONFIG = {
  artistName: 'MARIANNE TABAREZ ARISTEGUI',
  artistDisplay: 'Marianne Tabarez Aristegui',
  email: 'contact@mtabarez.com',
  instagramHandle: 'fabricademanchas',
  instagramUrl: 'https://www.instagram.com/fabricademanchas/',
  locations: 'Santiago CL / Bogotá CO / Montevideo UY',
  copyrightYear: '2026',
};

export const UI_COPY: Record<
  Language,
  {
    nav: {
      works: string;
      cv: string;
      contact: string;
      home: string;
      instagram: string;
    };
    home: {
      intro: string;
      filtersToggle: string;
      categoryHeading: string;
      yearHeading: string;
      allCategories: string;
      allYears: string;
      undatedLabel: string;
      resetFilters: string;
      emptyState: string;
      worksCountLabel: (count: number) => string;
    };
    project: {
      backToWorks: string;
      previous: string;
      next: string;
      metadataHeading: string;
      curatorialHeading: string;
      statementHeading: string;
      collaborativeHeading: string;
      collaborativeFields: {
        individual: string;
        collective: string;
        participants: string;
        context: string;
      };
      relatedHeading: string;
      fields: {
        title: string;
        category: string;
        year: string;
        status: string;
        medium: string;
        dimensions: string;
        context: string;
        location: string;
        publication: string;
      };
      notFoundTitle: string;
      notFoundBody: string;
      lightboxClose: string;
      lightboxPrev: string;
      lightboxNext: string;
      inspectImageHint: string;
      placeholderNotice: string;
    };
    contact: {
      pageTitle: string;
      intro: string;
      emailLabel: string;
      socialLabel: string;
      locationLabel: string;
      locationValue: string;
    };
    seo: {
      homeTitle: string;
      homeDescription: string;
      cvTitle: string;
      cvDescription: string;
      contactTitle: string;
      contactDescription: string;
    };
  }
> = {
  es: {
    nav: {
      works: 'OBRAS',
      cv: 'CV',
      contact: 'CONTACTO',
      home: 'INICIO',
      instagram: 'INSTAGRAM',
    },
    home: {
      intro:
        'Prácticas visuales que articulan investigación artística, experimentación material y procesos culturales colaborativos en torno a la memoria, la identidad y el territorio.',
      filtersToggle: 'Filtros',
      categoryHeading: 'CATEGORÍA',
      yearHeading: 'AÑO',
      allCategories: 'Todas',
      allYears: 'Todos',
      undatedLabel: 'Sin fecha confirmada / En proceso',
      resetFilters: 'Restablecer filtros',
      emptyState: 'No hay obras que coincidan con los filtros seleccionados.',
      worksCountLabel: (count: number) =>
        count === 1 ? '1 proyecto' : `${count} proyectos`,
    },
    project: {
      backToWorks: 'Volver a obras',
      previous: 'Anterior',
      next: 'Siguiente',
      metadataHeading: 'Ficha técnica',
      curatorialHeading: 'Nota del proyecto',
      statementHeading: 'Declaración de artista',
      collaborativeHeading: 'Marco colaborativo y situado',
      collaborativeFields: {
        individual: 'Aporte artístico individual',
        collective: 'Proceso colectivo',
        participants: 'Grupos / Instituciones participantes',
        context: 'Contexto cultural',
      },
      relatedHeading: 'Obras y proyectos relacionados',
      fields: {
        title: 'Título',
        category: 'Categoría',
        year: 'Año',
        status: 'Estado',
        medium: 'Medio / Técnica',
        dimensions: 'Dimensiones',
        context: 'Contexto / Investigación',
        location: 'Ubicación',
        publication: 'Publicación / Exhibición',
      },
      notFoundTitle: 'Proyecto no encontrado',
      notFoundBody:
        'El proyecto solicitado no figura en el archivo actual.',
      lightboxClose: 'Cerrar',
      lightboxPrev: 'Imagen anterior',
      lightboxNext: 'Imagen siguiente',
      inspectImageHint: 'Ampliar imagen',
      placeholderNotice: 'Espacio reservado para fotografía original de obra',
    },
    contact: {
      pageTitle: 'Contacto',
      intro:
        'Para consultas sobre proyectos, colaboraciones, exposiciones u otras comunicaciones profesionales, puedes contactarme por correo electrónico.',
      emailLabel: 'Correo electrónico',
      socialLabel: 'Instagram',
      locationLabel: 'Ubicación',
      locationValue: SITE_CONFIG.locations,
    },
    seo: {
      homeTitle: 'Marianne Tabarez Aristegui — Artista Visual',
      homeDescription:
        'Portafolio de Marianne Tabarez Aristegui, artista visual uruguaya. Investigación artística, experimentación material y prácticas culturales colaborativas sobre memoria, identidad y territorio.',
      cvTitle: 'CV — Marianne Tabarez Aristegui',
      cvDescription:
        'Biografía, formación en Facultad de Artes (Udelar), proyectos artísticos, prácticas colaborativas e investigación de Marianne Tabarez Aristegui.',
      contactTitle: 'Contacto — Marianne Tabarez Aristegui',
      contactDescription:
        'Información de contacto profesional de Marianne Tabarez Aristegui, artista visual.',
    },
  },
  en: {
    nav: {
      works: 'WORKS',
      cv: 'CV',
      contact: 'CONTACT',
      home: 'HOME',
      instagram: 'INSTAGRAM',
    },
    home: {
      intro:
        'Visual practices bringing together artistic research, material experimentation and collaborative cultural processes around memory, identity and territory.',
      filtersToggle: 'Filters',
      categoryHeading: 'CATEGORY',
      yearHeading: 'YEAR',
      allCategories: 'All',
      allYears: 'All',
      undatedLabel: 'Date pending / Ongoing',
      resetFilters: 'Reset filters',
      emptyState: 'No works match the selected filters.',
      worksCountLabel: (count: number) =>
        count === 1 ? '1 project' : `${count} projects`,
    },
    project: {
      backToWorks: 'Back to works',
      previous: 'Previous',
      next: 'Next',
      metadataHeading: 'Project Data',
      curatorialHeading: 'Project Note',
      statementHeading: 'Artist Statement',
      collaborativeHeading: 'Collaborative & Situated Framework',
      collaborativeFields: {
        individual: 'Individual artistic contribution',
        collective: 'Collective process',
        participants: 'Participating groups / institutions',
        context: 'Cultural context',
      },
      relatedHeading: 'Related Works & Research',
      fields: {
        title: 'Title',
        category: 'Category',
        year: 'Year',
        status: 'Status',
        medium: 'Medium / Technique',
        dimensions: 'Dimensions',
        context: 'Context / Research',
        location: 'Location',
        publication: 'Publication / Exhibition',
      },
      notFoundTitle: 'Project not found',
      notFoundBody:
        'The requested project could not be located in the current archive.',
      lightboxClose: 'Close',
      lightboxPrev: 'Previous image',
      lightboxNext: 'Next image',
      inspectImageHint: 'Inspect image',
      placeholderNotice: 'Placeholder reserved for original artwork photograph',
    },
    contact: {
      pageTitle: 'Contact',
      intro:
        'For project inquiries, collaborations, exhibitions or other professional messages, please contact me by email.',
      emailLabel: 'Email',
      socialLabel: 'Instagram',
      locationLabel: 'Location',
      locationValue: SITE_CONFIG.locations,
    },
    seo: {
      homeTitle: 'Marianne Tabarez Aristegui — Visual Artist',
      homeDescription:
        'Portfolio of Uruguayan visual artist Marianne Tabarez Aristegui. Artistic research, material experimentation and collaborative cultural practices exploring memory, identity and territory.',
      cvTitle: 'CV — Marianne Tabarez Aristegui',
      cvDescription:
        'Biography, education at Facultad de Artes (Udelar), selected artistic projects, collaborative practices and research of Marianne Tabarez Aristegui.',
      contactTitle: 'Contact — Marianne Tabarez Aristegui',
      contactDescription:
        'Professional contact information for visual artist Marianne Tabarez Aristegui.',
    },
  },
};

export const CATEGORY_FILTERS: {
  id: FilterCategoryId;
  label: Record<Language, string>;
}[] = [
  { id: 'all', label: { es: 'Todas', en: 'All' } },
  { id: 'artworks', label: { es: 'Obras', en: 'Artworks' } },
  { id: 'photography', label: { es: 'Fotografía', en: 'Photography' } },
  {
    id: 'moving-image',
    label: { es: 'Imagen en movimiento / Video', en: 'Moving Image / Video' },
  },
  {
    id: 'collage-mixed-media',
    label: { es: 'Collage y técnica mixta', en: 'Collage & Mixed Media' },
  },
  {
    id: 'drawing-painting',
    label: { es: 'Dibujo y pintura', en: 'Drawing & Painting' },
  },
  {
    id: 'textile-collaborative',
    label: {
      es: 'Textil y prácticas colaborativas',
      en: 'Textile & Collaborative Practices',
    },
  },
  {
    id: 'artistic-research',
    label: { es: 'Investigación artística', en: 'Artistic Research' },
  },
  {
    id: 'cultural-projects',
    label: { es: 'Proyectos culturales', en: 'Cultural Projects' },
  },
];
