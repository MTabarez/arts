import { Project } from '../types/portfolio';

/**
 * Portfolio works archive for Marianne Tabarez Aristegui.
 *
 * To add real artwork images:
 * Place image files in `/public/works/<slug>/...` and set `src: '/works/<slug>/filename.jpg'`.
 * Images automatically render at their natural aspect ratio without forced cropping.
 */
export const PROJECTS: Project[] = [
  {
    id: '01',
    slug: 'superficies-tomadas',
    title: {
      es: 'Superficies tomadas',
      en: 'Borrowed Surfaces',
    },
    categoryLabel: {
      es: 'Intervención urbana / Collage / Fotografía / Video / Animación digital',
      en: 'Urban Intervention / Collage / Photography / Video / Digital Animation',
    },
    disciplines: {
      es: [
        'Intervención urbana',
        'Collage',
        'Fotografía',
        'Video',
        'Animación digital',
      ],
      en: [
        'Urban Intervention',
        'Collage',
        'Photography',
        'Video',
        'Digital Animation',
      ],
    },
    filterCategories: [
      'artworks',
      'photography',
      'moving-image',
      'collage-mixed-media',
      'artistic-research',
    ],
    year: '2025',
    medium: {
      es: 'Intervención urbana, collage, fotografía, video y animación digital',
      en: 'Urban intervention, collage, photography, video and digital animation',
    },
    location: {
      es: 'Montevideo, Uruguay',
      en: 'Montevideo, Uruguay',
    },
    shortDescription: {
      es: 'Proyecto artístico que investiga la erosión del valor colectivo en el espacio público de Montevideo mediante la extracción, intervención temporal y reconfiguración de sus superficies gráficas.',
      en: "An artistic project investigating the erosion of collective value in Montevideo's public space through the extraction, temporary intervention and reconfiguration of its graphic surfaces.",
    },
    curatorialDescription: {
      es: [
        'Superficies tomadas investiga cómo la saturación gráfica contemporánea de Montevideo —afiches superpuestos, impresos comerciales y restos de papel adheridos en muros y mobiliario urbano— evidencia una erosión progresiva del sentido colectivo del espacio público.',
        'A partir de la recolección de fragmentos gráficos, su sustitución temporal mediante stickers, la construcción de un archivo material en collage, el contrapunto con fotografías históricas de Montevideo, una animación digital y una propuesta de postales en circulación sudamericana, el proyecto articula una práctica crítica que asume su propia contradicción al intervenir sobre aquello mismo que interroga.',
      ],
      en: [
        "Borrowed Surfaces investigates how Montevideo's contemporary graphic saturation—layered posters, commercial prints, and paper remnants affixed to walls and street fixtures—registers a progressive erosion of collective value in public space.",
        'Through the collection of graphic fragments, their temporary substitution with stickers, the construction of a material archive in collage, a counterpoint with historical photographs of Montevideo, a digital animation, and a proposed South American postcard circulation, the project articulates a critical practice that assumes its own contradiction by intervening within the very field it questions.',
      ],
    },
    editorialSections: [
      {
        id: 'context-collection',
        heading: {
          es: 'Contexto y recolección',
          en: 'Context and Collection',
        },
        paragraphs: {
          es: [
            'Superficies tomadas parte de observar el paisaje gráfico cotidiano de Montevideo: muros, columnas y fachadas cubiertos por capas sucesivas de afiches comerciales, impresos efímeros y restos rasgados que compiten por la atención en la vía pública. En esa acumulación persistente se hace visible una disputa desigual sobre lo común y una erosión del valor colectivo del espacio urbano.',
            'El primer movimiento del proyecto consiste en recorrer la ciudad y recolectar fragmentos de papel e impresos desprendidos o extraídos de esas superficies saturadas. Lejos de proponerse como una tarea de limpieza ni de restauración patrimonial, la recolección opera como una toma de muestra material de la visualidad callejera contemporánea.',
          ],
          en: [
            "Borrowed Surfaces begins by observing Montevideo's everyday graphic landscape: walls, columns, and facades covered in successive layers of commercial posters, ephemeral prints, and torn paper remnants competing for attention along public streets. Within this persistent accumulation, an unequal dispute over the commons and an erosion of the collective value of urban space become legible.",
            'The first movement of the project consists of walking the city and gathering paper fragments and printed matter detached or extracted from these saturated surfaces. Rather than acting as urban cleanup or heritage restoration, this collection operates as a material sampling of contemporary street visuality.',
          ],
        },
        media: [],
      },
      {
        id: 'urban-intervention',
        heading: {
          es: 'Intervención urbana',
          en: 'Urban Intervention',
        },
        paragraphs: {
          es: [
            'En los puntos donde los fragmentos gráficos son retirados, la extracción se señala mediante la colocación temporal de stickers sobre la superficie urbana. La pieza asume explícitamente la contradicción que atraviesa este gesto: al mismo tiempo que cuestiona la saturación gráfica del espacio público, participa de sus mismos códigos de inscripción efímera y ocupación visual.',
            'La intervención no busca embellecer el entorno ni celebrar la gráfica callejera como gesto heroico, sino abrir una pausa breve en la lectura habitual del muro mediante registros fotográficos y audiovisuales de colocación, permanencia y desgaste.',
          ],
          en: [
            'At the sites where graphic fragments are removed, their extraction is marked through the temporary placement of stickers on the urban surface. The work explicitly assumes the contradiction embedded in this gesture: while questioning the graphic saturation of public space, it participates in those very codes of ephemeral inscription and visual occupation.',
            'Rather than beautifying the surroundings or celebrating street graphics as a heroic act, the intervention opens a brief pause in the habitual reading of the wall, documented through photographs and audiovisual records of placement, permanence, and wear.',
          ],
        },
        media: [],
      },
      {
        id: 'material-archive',
        heading: {
          es: 'Archivo material',
          en: 'Material Archive',
        },
        paragraphs: {
          es: [
            'Los restos recolectados en la ciudad pasan luego al espacio de taller para conformar un archivo material a través del collage. A partir de cortes, superposiciones y reconfiguraciones sobre soporte bidimensional, los fragmentos pierden su función publicitaria o informativa original para revelar texturas, tipografías truncas, tintas desgastadas y espesores acumulados.',
            'Mediante dos composiciones principales y sus registros de detalle, los papeles callejeros se reorganizan en nuevas relaciones formales que conservan las cicatrices del muro, el pegamento y la intemperie.',
          ],
          en: [
            'The remnants gathered across the city move into the studio to form a material archive through collage. Cut, layered, and reconfigured on two-dimensional supports, the fragments lose their original promotional or informational function, foregrounding textures, truncated typography, weathered inks, and accumulated strata.',
            'Through two primary compositions and detail studies, street papers are reorganized into new formal relationships that retain the physical scars of walls, adhesive, and exposure.',
          ],
        },
        media: [],
      },
      {
        id: 'historical-archive',
        heading: {
          es: 'Archivo histórico',
          en: 'Historical Archive',
        },
        paragraphs: {
          es: [
            'Para situar la saturación actual en una perspectiva temporal más amplia, el proyecto dialoga con fotografías históricas de Montevideo de las décadas de 1930, 1940 y 1950. En contraste con la densidad gráfica contemporánea, estas imágenes permiten interrogar cómo se construyeron históricamente la legibilidad urbana, la proporción de los frentes arquitectónicos y la experiencia compartida de la calle.',
            'El cruce entre el archivo histórico y los collages actuales evita la nostalgia lineal y abre una pregunta sobre qué formas de lo público persisten, se transforman o desaparecen bajo las dinámicas visuales recientes.',
          ],
          en: [
            'To situate contemporary saturation within a broader temporal horizon, the project enters into dialogue with historical photographs of Montevideo from the 1930s, 1940s, and 1950s. In contrast to today’s graphic density, these images prompt inquiry into how urban legibility, architectural proportions, and shared street experience were historically constructed.',
            'Bringing the historical archive alongside the contemporary collages avoids linear nostalgia, opening a question about which forms of public life endure, shift, or erode under recent visual dynamics.',
          ],
        },
        media: [],
      },
      {
        id: 'digital-animation',
        heading: {
          es: 'Animación digital',
          en: 'Digital Animation',
        },
        paragraphs: {
          es: [
            'En una instancia posterior, la intervención física se traslada al plano digital mediante una animación que superpone stickers sobre la imagen de un edificio emblemático de Montevideo. El gesto efímero aplicado previamente en muros cotidianos se desplaza así hacia un símbolo arquitectónico de escala monumental sin alterar físicamente el patrimonio edificado.',
            'Este desplazamiento hacia lo audiovisual tensiona la frontera entre soporte material e imagen en pantalla, preguntando hasta qué punto la apropiación simbólica de la arquitectura ciudadana reproduce o desarma las lógicas de ocupación visual contemporáneas.',
          ],
          en: [
            'At a subsequent stage, the physical intervention shifts into the digital realm through an animation overlaying stickers onto an emblematic building in Montevideo. The ephemeral gesture previously carried out on everyday walls is thus displaced onto an architectural landmark at monumental scale without physically altering the built heritage.',
            'This move into moving image strains the boundary between material support and screen space, asking to what extent the symbolic appropriation of civic architecture reproduces or unsettles contemporary logics of visual occupation.',
          ],
        },
        media: [],
      },
      {
        id: 'expansion-circulation',
        heading: {
          es: 'Una expansión: fragmentos en circulación',
          en: 'An expansion: fragments in circulation',
        },
        paragraphs: {
          es: [
            'Como desdoblamiento del archivo en collage, Superficies tomadas formula una propuesta de edición de postales impresas a partir de los fragmentos reconfigurados. En lugar de clausurar las superficies recolectadas en un objeto único, las postales proyectan un dispositivo portátil capaz de desplazarse fuera de su contexto de origen.',
            'Planteada específicamente como una propuesta en curso y no como un intercambio realizado, esta expansión imagina el envío de fragmentos de Montevideo hacia distintos puntos de América del Sur para poner en relación experiencias locales del espacio público, sus disputas gráficas y las huellas compartidas de lo urbano.',
          ],
          en: [
            'As an offshoot of the collage archive, Borrowed Surfaces formulates a proposal for printed postcards derived from the reconfigured fragments. Rather than sealing the collected surfaces within a single fixed object, the postcards project a portable format capable of traveling beyond its site of origin.',
            'Conceived strictly as an ongoing proposal rather than a completed exchange, this expansion envisions sending fragments of Montevideo across different locations in South America to place local experiences of public space, graphic disputes, and shared urban traces into dialogue.',
          ],
        },
        media: [],
      },
    ],
    mainImage: {
      id: 'st-main',
      aspectRatio: '4/5',
      alt: {
        es: 'Superficies tomadas — intervención sobre superficie gráfica urbana en Montevideo (2025)',
        en: 'Borrowed Surfaces — intervention on an urban graphic surface in Montevideo (2025)',
      },
      caption: {
        es: 'Superficies tomadas — Montevideo, Uruguay (2025).',
        en: 'Borrowed Surfaces — Montevideo, Uruguay (2025).',
      },
      placeholderLabel: {
        es: 'Superficies tomadas · Montevideo, 2025',
        en: 'Borrowed Surfaces · Montevideo, 2025',
      },
      kind: 'image',
    },
    gallery: [],
    relatedSlugs: ['america-invertida', 'migrantes-montevideo', 'paramos'],
  },

  {
    id: '02',
    slug: 'america-invertida',
    title: {
      es: 'América Invertida',
      en: 'América Invertida',
    },
    categoryLabel: {
      es: 'Collage / Obra sobre papel',
      en: 'Collage / Paper Works',
    },
    filterCategories: ['artworks', 'collage-mixed-media'],
    year: null,
    medium: {
      es: 'Collage sobre papel',
      en: 'Paper collage',
    },
    developmentContext: {
      es: 'Obra sobre papel — Material visual original en proceso de incorporación',
      en: 'Paper work — Original visual material pending integration',
    },
    shortDescription: {
      es: 'Proyecto de collage sobre papel que dialoga con la identidad latinoamericana, los imaginarios geográficos y la inversión de las perspectivas visuales establecidas.',
      en: 'A paper collage project engaging Latin American identity, geographical imaginaries, and the inversion of established visual perspectives.',
    },
    curatorialDescription: {
      es: [
        'América Invertida retoma la genealogía crítica de la cartografía y de los imaginarios visuales del Sur para interrogar cómo se construyen las jerarquías de orientación, centro y periferia. Mediante el recorte, la reubicación y el ensamblaje de fragmentos impresos y papeles intervenidos, la obra desestabiliza la lectura convencional del mapa como representación neutral.',
        'La técnica del collage evidencia las costuras de toda construcción identitaria: cada unión visible señala una decisión estética y política sobre qué fragmentos se conservan, cuáles se desplazan y desde qué lugar se enuncia el territorio.',
      ],
      en: [
        'América Invertida engages the critical genealogy of Southern cartography and visual imaginaries to examine how hierarchies of orientation, center, and periphery are constructed. Through cutting, relocation, and assembly of printed fragments and altered papers, the work unsettles the conventional reading of the map as a neutral instrument.',
        'Collage makes visible the seams inherent to any construction of identity: every exposed junction marks an aesthetic and political decision regarding which fragments are retained, which are displaced, and from where territory is articulated.',
      ],
    },
    mainImage: {
      id: 'ai-main',
      aspectRatio: '3/4',
      alt: {
        es: 'América Invertida — collage sobre papel (marcador de posición)',
        en: 'América Invertida — paper collage (placeholder)',
      },
      caption: {
        es: 'América Invertida — Collage sobre papel. Imagen original por incorporar.',
        en: 'América Invertida — Paper collage. Original artwork image to be supplied.',
      },
      placeholderLabel: {
        es: 'Collage sobre papel · Vista principal',
        en: 'Paper collage · Primary view',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'ai-01',
        aspectRatio: '4/3',
        alt: {
          es: 'América Invertida — detalle de recortes y uniones de papel (marcador de posición)',
          en: 'América Invertida — detail of paper cuts and junctions (placeholder)',
        },
        caption: {
          es: 'Detalle de ensamblaje, superposición de papel y cortes.',
          en: 'Detail of assembly, paper layering, and cut edges.',
        },
        placeholderLabel: {
          es: 'Detalle de collage · Papel',
          en: 'Collage detail · Paper',
        },
        kind: 'detail',
      },
    ],
    relatedSlugs: ['superficies-tomadas', 'migrantes', 'migrantes-montevideo'],
  },

  {
    id: '03',
    slug: 'migrantes',
    title: {
      es: 'Migrantes',
      en: 'Migrantes',
    },
    categoryLabel: {
      es: 'Fotografía / Collage digital / Cianotipia · Investigación artística',
      en: 'Photography / Digital Collage / Cyanotype · Artistic Research',
    },
    filterCategories: ['artworks', 'photography', 'collage-mixed-media', 'artistic-research'],
    year: '2020–2021',
    medium: {
      es: 'Fotografía, collage digital y cianotipia',
      en: 'Photography, digital collage and cyanotype',
    },
    developmentContext: {
      es: 'Proyecto final de egreso, Licenciatura en Artes (Facultad de Artes, Udelar) — Aprobado en agosto de 2021',
      en: "Final Degree Project, Bachelor's Degree in Arts (Facultad de Artes, Udelar) — Approved August 2021",
    },
    location: {
      es: 'Uruguay',
      en: 'Uruguay',
    },
    shortDescription: {
      es: 'Investigación y creación artística junto a poblaciones migrantes en Uruguay mediante fotografía, collage digital y cianotipia.',
      en: 'Artistic research and creation involving migrant populations in Uruguay through photography, digital collage, and cyanotype.',
    },
    curatorialDescription: {
      es: [
        'Desarrollado entre 2020 y 2021 como proyecto final de egreso de la Licenciatura en Artes (Facultad de Artes, Universidad de la República), Migrantes articula investigación artística situada y experimentación visual en diálogo con poblaciones migrantes en Uruguay.',
        'La combinación de fotografía, collage digital y cianotipia responde a la necesidad de trabajar entre el registro documental y la fragilidad de la huella: la imagen no busca fijar identidades cerradas, sino construir un espacio visual compartido donde el desplazamiento, el tránsito y la memoria cultural adquieren densidad material.',
      ],
      en: [
        "Developed between 2020 and 2021 as the final degree project for the Bachelor's Degree in Arts (Facultad de Artes, Universidad de la República), Migrantes brings together situated artistic research and visual experimentation in dialogue with migrant populations in Uruguay.",
        'Combining photography, digital collage, and cyanotype addresses the tension between documentary registration and the fragility of the trace: rather than fixing closed identities, the images construct a shared visual space where displacement, transit, and cultural memory take on material density.',
      ],
    },
    collaborativeBreakdown: {
      individualContribution: {
        es: 'Conceptualización de la investigación visual, realización fotográfica, composición en collage digital e impresiones en cianotipia como proyecto final de egreso.',
        en: 'Conceptualization of the visual research, photographic work, digital collage composition, and cyanotype printing as the final degree project.',
      },
      collectiveProcess: {
        es: 'Encuentros situados, escucha e intercambio de relatos e imágenes junto a personas migrantes residentes en Uruguay.',
        en: 'Situated encounters, dialogue, and exchange of stories and imagery with migrant participants living in Uruguay.',
      },
      participatingGroups: {
        es: 'Poblaciones migrantes participantes en Uruguay; acompañamiento académico en Facultad de Artes, Universidad de la República (Udelar).',
        en: 'Participating migrant communities in Uruguay; academic framework at Facultad de Artes, Universidad de la República (Udelar).',
      },
      culturalContext: {
        es: 'Procesos contemporáneos de movilidad regional, reconstrucción de pertenencias y memoria cultural en Uruguay.',
        en: 'Contemporary regional mobility processes, reconstruction of belonging, and cultural memory in Uruguay.',
      },
    },
    mainImage: {
      id: 'mig-main',
      aspectRatio: '4/5',
      alt: {
        es: 'Migrantes (2020–2021) — fotografía y cianotipia (marcador de posición)',
        en: 'Migrantes (2020–2021) — photography and cyanotype (placeholder)',
      },
      caption: {
        es: 'Migrantes (2020–2021) — Proyecto final de egreso en Facultad de Artes, Udelar.',
        en: 'Migrantes (2020–2021) — Final degree project at Facultad de Artes, Udelar.',
      },
      placeholderLabel: {
        es: 'Fotografía / Cianotipia · 2020–2021',
        en: 'Photography / Cyanotype · 2020–2021',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'mig-01',
        aspectRatio: '4/3',
        alt: {
          es: 'Migrantes — estudio en collage digital y cianotipia (marcador de posición)',
          en: 'Migrantes — digital collage and cyanotype study (placeholder)',
        },
        caption: {
          es: 'Proceso de imagen entre archivo fotográfico, collage digital y cianotipia.',
          en: 'Image process bridging photographic archive, digital collage, and cyanotype.',
        },
        placeholderLabel: {
          es: 'Collage digital y cianotipia',
          en: 'Digital collage & cyanotype',
        },
        kind: 'image',
      },
    ],
    relatedSlugs: ['migrantes-montevideo', 'colombia-cyanotypes-and-embroidery', 'uruguay-farewell'],
  },

  {
    id: '04',
    slug: 'migrantes-montevideo',
    title: {
      es: 'Migrantes Montevideo',
      en: 'Migrantes Montevideo',
    },
    categoryLabel: {
      es: 'Arte público / Mosaico / Memoria cultural',
      en: 'Public Art / Mosaic / Cultural Memory',
    },
    filterCategories: ['artworks', 'textile-collaborative', 'artistic-research'],
    year: null,
    medium: {
      es: 'Mosaico y práctica artística en contexto urbano',
      en: 'Mosaic and urban contextual practice',
    },
    location: {
      es: 'Montevideo, Uruguay',
      en: 'Montevideo, Uruguay',
    },
    shortDescription: {
      es: 'Proyecto en mosaico vinculado a interrogantes sobre migración, identidad, pertenencia y memoria colectiva en Montevideo.',
      en: 'A mosaic project addressing migration, identity, belonging, and collective memory in Montevideo.',
    },
    curatorialDescription: {
      es: [
        'Migrantes Montevideo aborda la presencia y la inscripción de trayectorias migrantes en el tejido urbano de la ciudad a través del lenguaje fragmentario del mosaico. La elección de una técnica tradicionalmente asociada a la permanencia arquitectónica contrasta de manera productiva con la fragilidad y movilidad de los desplazamientos contemporáneos.',
        'Cada tesela funciona como una unidad mínima de memoria colectiva: reunidas en una composición mayor, las piezas sugieren formas de pertenencia construidas desde la pluralidad, el tránsito y el encuentro entre historias personales y espacio público.',
      ],
      en: [
        'Migrantes Montevideo addresses the presence and inscription of migrant trajectories within the urban fabric of the city through the fragmentary language of mosaic. Choosing a medium historically tied to architectural permanence creates a productive tension with the fragility and mobility of contemporary displacement.',
        'Each tessera operates as a minimal unit of collective memory: assembled into a broader composition, the fragments propose forms of belonging forged through plurality, transit, and the encounter between personal histories and public space.',
      ],
    },
    mainImage: {
      id: 'mm-main',
      aspectRatio: '16/10',
      alt: {
        es: 'Migrantes Montevideo — vista general del proyecto en mosaico (marcador de posición)',
        en: 'Migrantes Montevideo — general view of mosaic project (placeholder)',
      },
      caption: {
        es: 'Vista general — Mosaico y memoria colectiva en Montevideo.',
        en: 'General view — Mosaic and collective memory in Montevideo.',
      },
      placeholderLabel: {
        es: 'Mosaico / Arte público · Vista general',
        en: 'Mosaic / Public art · General view',
      },
      kind: 'installation',
    },
    gallery: [
      {
        id: 'mm-01',
        aspectRatio: '1/1',
        alt: {
          es: 'Migrantes Montevideo — detalle de teselas y junta (marcador de posición)',
          en: 'Migrantes Montevideo — detail of tesserae and grout (placeholder)',
        },
        caption: {
          es: 'Detalle de superficie cerámica y trama de teselas.',
          en: 'Detail of ceramic surface and tesserae pattern.',
        },
        placeholderLabel: {
          es: 'Detalle de mosaico · Teselas',
          en: 'Mosaic detail · Tesserae',
        },
        kind: 'detail',
      },
      {
        id: 'mm-02',
        aspectRatio: '4/3',
        alt: {
          es: 'Migrantes Montevideo — registro en emplazamiento (marcador de posición)',
          en: 'Migrantes Montevideo — site documentation (placeholder)',
        },
        caption: {
          es: 'Registro contextual en Montevideo.',
          en: 'Contextual documentation in Montevideo.',
        },
        placeholderLabel: {
          es: 'Registro contextual · Montevideo',
          en: 'Site documentation · Montevideo',
        },
        kind: 'installation',
      },
    ],
    relatedSlugs: ['migrantes', 'colombia-cyanotypes-and-embroidery', 'escritoras-tejiendo-paz'],
  },

  {
    id: '05',
    slug: 'colombia-cyanotypes-and-embroidery',
    title: {
      es: 'Colombia: Cyanotypes and Embroidery',
      en: 'Colombia: Cyanotypes and Embroidery',
    },
    categoryLabel: {
      es: 'Cianotipia / Textil / Técnica mixta',
      en: 'Cyanotype / Textile / Mixed Media',
    },
    filterCategories: [
      'artworks',
      'photography',
      'collage-mixed-media',
      'textile-collaborative',
    ],
    year: null,
    medium: {
      es: 'Cianotipia sobre tela, bordado y objeto textil (oso solidario)',
      en: 'Cyanotype on fabric, embroidery, and textile object (solidarity teddy bear)',
    },
    location: {
      es: 'Colombia / Diálogo territorial',
      en: 'Colombia / Territorial inquiry',
    },
    shortDescription: {
      es: 'Proyecto que articula cianotipia y bordado —incluyendo un oso de peluche solidario— para indagar en el vínculo entre imagen, memoria, materialidad y desplazamiento.',
      en: 'An artistic project combining cyanotype and embroidery, including a solidarity teddy bear, examining the relationship between image, memory, materiality, and displacement.',
    },
    curatorialDescription: {
      es: [
        'En Colombia: Cyanotypes and Embroidery, la exposición solar de un proceso fotográfico temprano y la lentitud manual del bordado convergen sobre soportes textiles. La cianotipia fija impresiones en azul de Prusia directamente en la trama del tejido, mientras que el hilo introduce un gesto táctil y reparador que atraviesa físicamente el plano de la imagen.',
        'La presencia de un oso de peluche solidario desplaza el proyecto hacia el registro del objeto afectivo y comunitario. En lugar de ilustrar el desplazamiento de forma literal, la obra trabaja con gestos cotidianos de cuidado, resguardo y transmisión, preguntándose cómo los objetos portátiles y las prácticas textiles sostienen la memoria frente a la ruptura o el desarraigo.',
      ],
      en: [
        'In Colombia: Cyanotypes and Embroidery, the solar exposure of an early photographic process and the slow manual cadence of needlework converge upon textile supports. Cyanotype fixes Prussian blue impressions directly into the weave of cloth, while thread introduces a tactile, reparative gesture that physically pierces the image plane.',
        'The inclusion of a solidarity teddy bear shifts the work toward the register of affective and communal objects. Rather than illustrating displacement literally, the project operates through everyday gestures of care, shelter, and transmission, asking how portable objects and textile practices sustain memory amidst rupture or uprooting.',
      ],
    },
    mainImage: {
      id: 'cce-main',
      aspectRatio: '1/1',
      alt: {
        es: 'Colombia: Cyanotypes and Embroidery — cianotipia textil y bordado (marcador de posición)',
        en: 'Colombia: Cyanotypes and Embroidery — textile cyanotype and embroidery (placeholder)',
      },
      caption: {
        es: 'Cianotipia sobre soporte textil intervenido con bordado.',
        en: 'Cyanotype on textile support intervened with embroidery.',
      },
      placeholderLabel: {
        es: 'Cianotipia y bordado · Vista principal',
        en: 'Cyanotype & embroidery · Primary view',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'cce-01',
        aspectRatio: '4/5',
        alt: {
          es: 'Colombia: Cyanotypes and Embroidery — oso solidario y textil (marcador de posición)',
          en: 'Colombia: Cyanotypes and Embroidery — solidarity teddy bear and textile (placeholder)',
        },
        caption: {
          es: 'Pieza textil con oso solidario y costura.',
          en: 'Textile piece featuring the solidarity teddy bear and stitching.',
        },
        placeholderLabel: {
          es: 'Objeto textil · Oso solidario',
          en: 'Textile object · Solidarity bear',
        },
        kind: 'image',
      },
      {
        id: 'cce-02',
        aspectRatio: '4/3',
        alt: {
          es: 'Colombia: Cyanotypes and Embroidery — detalle de puntada sobre cianotipia (marcador de posición)',
          en: 'Colombia: Cyanotypes and Embroidery — close-up of stitching on cyanotype (placeholder)',
        },
        caption: {
          es: 'Detalle de textura textil, azul de Prusia y bordado.',
          en: 'Close-up of fabric weave, Prussian blue tone, and embroidery.',
        },
        placeholderLabel: {
          es: 'Detalle · Puntada y cianotipia',
          en: 'Detail · Stitching & cyanotype',
        },
        kind: 'detail',
      },
    ],
    relatedSlugs: ['paramos', 'symbolic-drawings', 'escritoras-tejiendo-paz'],
  },

  {
    id: '06',
    slug: 'paramos',
    title: {
      es: 'Páramos',
      en: 'Páramos',
    },
    categoryLabel: {
      es: 'Pintura / Técnica mixta',
      en: 'Painting / Mixed Media',
    },
    filterCategories: ['artworks', 'drawing-painting', 'collage-mixed-media'],
    year: null,
    medium: {
      es: 'Pintura, relieve material y técnica mixta',
      en: 'Painting, material relief, and mixed media',
    },
    shortDescription: {
      es: 'Cuerpo de obra pictórico que aborda los paisajes de páramo andino a través del relieve material y la experimentación sobre la superficie.',
      en: 'A body of work exploring Andean páramo landscapes through material relief and painterly experimentation.',
    },
    curatorialDescription: {
      es: [
        'Páramos aborda los ecosistemas de alta montaña andina no desde la tradición paisajística panorámica, sino desde su densidad física, atmosférica y ecológica. Las obras construyen topografías táctiles mediante acumulaciones de materia, espesores pictóricos y relieves que remiten a la humedad, la niebla y la fragilidad estructural de estos territorios hídricos.',
        'Al convertir el plano pictórico en un campo de relieves y sedimentaciones, el proyecto trata el paisaje como un territorio vivo en disputa: una entidad material que registra tanto procesos geológicos lentos como presiones históricas y ambientales.',
      ],
      en: [
        'Páramos approaches high-altitude Andean ecosystems not through panoramic landscape convention, but through their physical, atmospheric, and ecological density. The works construct tactile topographies via accumulations of matter, dense painterly strata, and reliefs evoking mist, moisture, and the structural fragility of these water-sustaining territories.',
        'By turning the picture plane into a field of relief and sedimentation, the project treats landscape as a contested living territory—a material entity registering both slow geological time and historical or environmental pressures.',
      ],
    },
    mainImage: {
      id: 'par-main',
      aspectRatio: '5/4',
      alt: {
        es: 'Páramos — pintura y relieve material (marcador de posición)',
        en: 'Páramos — painting and material relief (placeholder)',
      },
      caption: {
        es: 'Páramos — Relieve pictórico y experimentación material.',
        en: 'Páramos — Painterly relief and material experimentation.',
      },
      placeholderLabel: {
        es: 'Pintura / Relieve · Vista principal',
        en: 'Painting / Relief · Primary view',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'par-01',
        aspectRatio: '3/4',
        alt: {
          es: 'Páramos — detalle de relieve y densidad matérica (marcador de posición)',
          en: 'Páramos — detail of relief and material density (placeholder)',
        },
        caption: {
          es: 'Detalle rasante del relieve y capas pictóricas.',
          en: 'Raking detail of relief and painterly strata.',
        },
        placeholderLabel: {
          es: 'Detalle de relieve · Técnica mixta',
          en: 'Relief detail · Mixed media',
        },
        kind: 'detail',
      },
    ],
    relatedSlugs: ['symbolic-drawings', 'colombia-cyanotypes-and-embroidery', 'superficies-tomadas'],
  },

  {
    id: '07',
    slug: 'symbolic-drawings',
    title: {
      es: 'Symbolic Drawings',
      en: 'Symbolic Drawings',
    },
    categoryLabel: {
      es: 'Dibujo',
      en: 'Drawing',
    },
    filterCategories: ['artworks', 'drawing-painting'],
    year: null,
    medium: {
      es: 'Dibujo sobre papel',
      en: 'Drawing on paper',
    },
    shortDescription: {
      es: 'Serie de dibujos simbólicos en torno a frailejones, el fuego, el paisaje y la figura de una niña reclutada, abordados desde un lenguaje visual crítico.',
      en: 'A series of symbolic drawings involving frailejones, fire, landscape, and the figure of a recruited girl, approached through critical visual language.',
    },
    curatorialDescription: {
      es: [
        'Symbolic Drawings reúne una serie de trabajos gráficos en los que elementos botánicos, fuerzas de alteración y presencias humanas se articulan en composiciones de densidad conceptual. La recurrencia del frailejón —planta emblemática de los páramos andinos—, el fuego y la figura de una niña reclutada evita la ilustración literal o el tono sensacionalista para situar la violencia histórica en el plano de la alegoría crítica.',
        'Mediante el trazo contenido y la economía de medios propia del dibujo, las obras plantean una tensión entre vulnerabilidad y persistencia: aquello que arde o es arrancado de su entorno permanece como signo que interroga la memoria colectiva del territorio.',
      ],
      en: [
        'Symbolic Drawings brings together a sequence of works on paper where botanical forms, agents of alteration, and human presence converge in conceptually condensed compositions. The recurrence of frailejones—emblematic plants of the Andean páramo—alongside fire and the figure of a recruited girl avoids literal illustration or sensationalist tropes, situating historical violence within critical allegory.',
        'Through restrained linework and the economy of drawing, the series establishes a tension between vulnerability and endurance: what burns or is uprooted from its territory persists as a visual sign interrogating collective memory.',
      ],
    },
    mainImage: {
      id: 'sd-main',
      aspectRatio: '3/4',
      alt: {
        es: 'Symbolic Drawings — dibujo sobre papel (marcador de posición)',
        en: 'Symbolic Drawings — drawing on paper (placeholder)',
      },
      caption: {
        es: 'Symbolic Drawings — Serie sobre papel.',
        en: 'Symbolic Drawings — Series on paper.',
      },
      placeholderLabel: {
        es: 'Dibujo sobre papel · Vista principal',
        en: 'Drawing on paper · Primary view',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'sd-01',
        aspectRatio: '4/5',
        alt: {
          es: 'Symbolic Drawings — estudio de frailejones y fuego (marcador de posición)',
          en: 'Symbolic Drawings — study of frailejones and fire (placeholder)',
        },
        caption: {
          es: 'Pieza de la serie: elementos botánicos y fuego.',
          en: 'Work from the series: botanical elements and fire.',
        },
        placeholderLabel: {
          es: 'Dibujo · Pieza de serie',
          en: 'Drawing · Series piece',
        },
        kind: 'image',
      },
    ],
    relatedSlugs: ['paramos', 'colombia-cyanotypes-and-embroidery', 'escritoras-tejiendo-paz'],
  },

  {
    id: '08',
    slug: 'uruguay-farewell',
    title: {
      es: 'Uruguay: Farewell',
      en: 'Uruguay: Farewell',
    },
    categoryLabel: {
      es: 'Video / Imagen en movimiento',
      en: 'Video / Moving Image',
    },
    filterCategories: ['artworks', 'moving-image'],
    year: null,
    medium: {
      es: 'Video monocanal',
      en: 'Single-channel video',
    },
    location: {
      es: 'Uruguay',
      en: 'Uruguay',
    },
    shortDescription: {
      es: 'Obra audiovisual desarrollada en torno a la partida, la memoria, el territorio y las dimensiones materiales y afectivas de dejar un lugar.',
      en: 'An audiovisual work developed around departure, memory, territory, and the material and emotional dimensions of leaving a place.',
    },
    curatorialDescription: {
      es: [
        'Uruguay: Farewell examina el umbral de la partida como experiencia espacial y temporal. A través del ritmo pausado de la imagen en movimiento y de una atención sostenida a los espacios cotidianos, los gestos de cierre y los fragmentos de paisaje, el video indaga en cómo un territorio comienza a transformarse en recuerdo antes de ser abandonado.',
        'La obra evita el registro confesional para observar los signos materiales de la transición: lo que se empaca, lo que permanece inmóvil y la distancia que se abre entre pertenencia geográfica y movilidad.',
      ],
      en: [
        'Uruguay: Farewell examines the threshold of departure as both a spatial and temporal condition. Through the measured pacing of moving image and sustained attention to everyday spaces, gestures of closure, and fragments of landscape, the video investigates how a territory begins to turn into memory even before it is physically left behind.',
        'Avoiding purely confessional narration, the work attends to the material signs of transition: what is packed, what remains still, and the distance opening between geographical belonging and mobility.',
      ],
    },
    mainImage: {
      id: 'uf-main',
      aspectRatio: '16/9',
      alt: {
        es: 'Uruguay: Farewell — fotograma de video (marcador de posición)',
        en: 'Uruguay: Farewell — video still (placeholder)',
      },
      caption: {
        es: 'Fotograma de referencia — Obra audiovisual.',
        en: 'Reference video still — Audiovisual work.',
      },
      placeholderLabel: {
        es: 'Video · Fotograma 16:9',
        en: 'Video · 16:9 Still',
      },
      kind: 'video-still',
    },
    gallery: [
      {
        id: 'uf-01',
        aspectRatio: '16/9',
        alt: {
          es: 'Uruguay: Farewell — segundo fotograma (marcador de posición)',
          en: 'Uruguay: Farewell — second video still (placeholder)',
        },
        caption: {
          es: 'Secuencia audiovisual — Archivo de video por incorporar.',
          en: 'Audiovisual sequence — Video file pending integration.',
        },
        placeholderLabel: {
          es: 'Video · Secuencia / Fotograma',
          en: 'Video · Sequence still',
        },
        kind: 'video-still',
      },
    ],
    relatedSlugs: ['santa-lucia-del-este', 'tea-project', 'migrantes'],
  },

  {
    id: '09',
    slug: 'santa-lucia-del-este',
    title: {
      es: 'Santa Lucía del Este',
      en: 'Santa Lucía del Este',
    },
    categoryLabel: {
      es: 'Video / Imagen en movimiento',
      en: 'Video / Moving Image',
    },
    filterCategories: ['artworks', 'moving-image'],
    year: '2021',
    medium: {
      es: 'Video monocanal',
      en: 'Single-channel video',
    },
    location: {
      es: 'Santa Lucía del Este, Canelones, Uruguay',
      en: 'Santa Lucía del Este, Canelones, Uruguay',
    },
    shortDescription: {
      es: 'Obra en video realizada en 2021 que observa el paisaje costero, el tiempo y las huellas de habitabilidad en Santa Lucía del Este.',
      en: 'Video work from 2021 observing coastal landscape, duration, and traces of inhabitation in Santa Lucía del Este.',
    },
    curatorialDescription: {
      es: [
        'Realizada en 2021 en el balneario costero de Santa Lucía del Este, esta obra en video propone una escucha visual de la franja atlántica uruguaya fuera de la lógica turística o pintoresca. La cámara registra la interacción entre luz, viento, vegetación costera y arquitectura estacional, subrayando la persistencia de un tiempo lento frente a la ocupación intermitente del territorio.',
        'El lugar aparece como una zona de inscripción entre lo doméstico y lo geográfico, donde la experiencia cotidiana se entrelaza con las transformaciones del paisaje costero contemporáneo.',
      ],
      en: [
        'Produced in 2021 in the coastal locality of Santa Lucía del Este, this video work proposes a visual attunement to the Uruguayan Atlantic littoral outside picturesque or touristic conventions. The camera registers the interplay between light, wind, coastal vegetation, and seasonal architecture, foregrounding slow duration against the intermittent occupation of territory.',
        'The site emerges as a zone of inscription between the domestic and the geographical, where everyday experience intersects with subtle shifts in the contemporary coastal landscape.',
      ],
    },
    mainImage: {
      id: 'sle-main',
      aspectRatio: '16/9',
      alt: {
        es: 'Santa Lucía del Este (2021) — fotograma de video (marcador de posición)',
        en: 'Santa Lucía del Este (2021) — video still (placeholder)',
      },
      caption: {
        es: 'Santa Lucía del Este, 2021 — Fotograma de video.',
        en: 'Santa Lucía del Este, 2021 — Video still.',
      },
      placeholderLabel: {
        es: 'Video 2021 · Fotograma 16:9',
        en: 'Video 2021 · 16:9 Still',
      },
      kind: 'video-still',
    },
    gallery: [
      {
        id: 'sle-01',
        aspectRatio: '16/9',
        alt: {
          es: 'Santa Lucía del Este (2021) — secuencia costera (marcador de posición)',
          en: 'Santa Lucía del Este (2021) — coastal sequence (placeholder)',
        },
        caption: {
          es: 'Fotograma de secuencia — Santa Lucía del Este, 2021.',
          en: 'Sequence still — Santa Lucía del Este, 2021.',
        },
        placeholderLabel: {
          es: 'Video 2021 · Fotograma de secuencia',
          en: 'Video 2021 · Sequence still',
        },
        kind: 'video-still',
      },
    ],
    relatedSlugs: ['uruguay-farewell', 'tea-project'],
  },

  {
    id: '10',
    slug: 'portable-memory-objects',
    title: {
      es: 'Portable Memory Objects',
      en: 'Portable Memory Objects',
    },
    categoryLabel: {
      es: 'Objeto experimental / Exploración conceptual',
      en: 'Experimental Object / Conceptual Exploration',
    },
    filterCategories: ['artworks', 'collage-mixed-media', 'artistic-research'],
    year: null,
    statusNote: {
      es: 'En desarrollo',
      en: 'In development',
    },
    medium: {
      es: 'Objetos cotidianos (lata de guaraná, botella de La Colombiana) y exploración conceptual NFC / vínculo digital',
      en: 'Everyday objects (guaraná can, La Colombiana bottle) and conceptual NFC / digital link exploration',
    },
    developmentContext: {
      es: 'Exploración conceptual en desarrollo — La implementación técnica interactiva es exploratoria y no se presenta como instalación finalizada.',
      en: 'Conceptual exploration in development — Interactive technical implementation is exploratory and not presented as a finalized installation.',
    },
    shortDescription: {
      es: 'Proyecto experimental en torno a una lata de guaraná y una botella de La Colombiana como objetos portátiles de memoria, con exploración conceptual de enlaces digitales o NFC.',
      en: 'An experimental project involving a guaraná can and a La Colombiana bottle as portable memory objects, with a conceptual exploration of NFC or digital linking.',
    },
    curatorialDescription: {
      es: [
        'Portable Memory Objects parte de dos envases cotidianos de circulación popular en Sudamérica —una lata de guaraná y una botella de La Colombiana— para examinar cómo los objetos industriales de consumo masivo devienen contenedores afectivos y marcadores de identidad cultural en contextos de movilidad y distancia geográfica.',
        'Dentro del marco conceptual del proyecto se explora la posibilidad de vincular estas materialidades portátiles con dispositivos digitales o etiquetas NFC que activen archivos sonoros, relatos o registros documentales. Planteado como investigación abierta y obra en proceso, el proyecto interroga la relación entre el objeto físico tangible y la memoria mediada tecnológicamente.',
      ],
      en: [
        'Portable Memory Objects begins with two everyday consumer containers circulating across South America—a guaraná can and a La Colombiana bottle—to examine how mass-produced industrial objects become affective vessels and markers of cultural identity amid mobility and geographical distance.',
        'Within the conceptual scope of the project, an NFC or digital link layer is explored as a potential bridge between physical portability and stored sound, text, or archival fragments. Framed explicitly as an ongoing experimental inquiry rather than a completed installation, the work questions how tangible everyday matter intersects with digitally mediated memory.',
      ],
    },
    mainImage: {
      id: 'pmo-main',
      aspectRatio: '4/5',
      alt: {
        es: 'Portable Memory Objects — estudio de objetos cotidianos (marcador de posición)',
        en: 'Portable Memory Objects — everyday objects study (placeholder)',
      },
      caption: {
        es: 'Estudio conceptual — Lata de guaraná y botella de La Colombiana.',
        en: 'Conceptual study — Guaraná can and La Colombiana bottle.',
      },
      placeholderLabel: {
        es: 'Objeto experimental · En desarrollo',
        en: 'Experimental object · In development',
      },
      kind: 'image',
    },
    gallery: [
      {
        id: 'pmo-01',
        aspectRatio: '1/1',
        alt: {
          es: 'Portable Memory Objects — esquema conceptual de objeto y vínculo digital (marcador de posición)',
          en: 'Portable Memory Objects — conceptual diagram of object and digital link (placeholder)',
        },
        caption: {
          es: 'Exploración conceptual de objeto portátil y archivo digital.',
          en: 'Conceptual exploration of portable object and digital archive.',
        },
        placeholderLabel: {
          es: 'Exploración conceptual · NFC / Archivo',
          en: 'Conceptual exploration · NFC / Archive',
        },
        kind: 'detail',
      },
    ],
    relatedSlugs: ['colombia-cyanotypes-and-embroidery', 'tea-project', 'uruguay-farewell'],
  },

  {
    id: '11',
    slug: 'tea-project',
    title: {
      es: 'Tea Project',
      en: 'Tea Project',
    },
    categoryLabel: {
      es: 'Video / Imagen en movimiento',
      en: 'Video / Moving Image',
    },
    filterCategories: ['artworks', 'moving-image'],
    year: null,
    medium: {
      es: 'Video editado para presentación web',
      en: 'Video edited for web presentation',
    },
    developmentContext: {
      es: 'Edición audiovisual adaptada para visualización web — Archivo de video pendiente de carga.',
      en: 'Audiovisual edit prepared for web presentation — Video file pending upload.',
    },
    shortDescription: {
      es: 'Proyecto audiovisual desarrollado en torno al té, la materialidad y las prácticas culturales cotidianas, con edición específica para web.',
      en: 'An audiovisual project developed around tea, materiality, and everyday cultural practices, edited for web presentation.',
    },
    curatorialDescription: {
      es: [
        'Tea Project concentra su atención en los gestos mínimos, tiempos de preparación y cualidades sensoriales asociados a la infusión del té. A través de encuadres próximos y una edición calibrada para la escala íntima de la pantalla web, la pieza observa cómo una práctica cotidiana articula ritualidad, pausa, intercambio cultural y memoria corporal.',
        'Lejos de una aproximación etnográfica externa, el trabajo trata la materia orgánica —hojas, agua, vapor, cerámica— como un territorio de observación formal y temporal.',
      ],
      en: [
        'Tea Project focuses on minimal gestures, intervals of preparation, and sensory textures surrounding tea infusion. Through close framing and an edit calibrated specifically for the intimate scale of the web screen, the piece observes how an everyday practice articulates ritual, pause, cultural exchange, and embodied memory.',
        'Far from an external ethnographic gaze, the work treats organic matter—leaves, water, steam, ceramic—as a field of formal and temporal observation.',
      ],
    },
    mainImage: {
      id: 'tp-main',
      aspectRatio: '16/9',
      alt: {
        es: 'Tea Project — fotograma de video editado para web (marcador de posición)',
        en: 'Tea Project — still from web-edited video (placeholder)',
      },
      caption: {
        es: 'Tea Project — Edición para presentación web.',
        en: 'Tea Project — Web presentation edit.',
      },
      placeholderLabel: {
        es: 'Video web · Fotograma 16:9',
        en: 'Web video · 16:9 Still',
      },
      kind: 'video-still',
    },
    gallery: [
      {
        id: 'tp-01',
        aspectRatio: '4/3',
        alt: {
          es: 'Tea Project — detalle material de infusión (marcador de posición)',
          en: 'Tea Project — material detail of infusion (placeholder)',
        },
        caption: {
          es: 'Detalle de materia y temporalidad en cuadro.',
          en: 'Detail of materiality and temporality in frame.',
        },
        placeholderLabel: {
          es: 'Fotograma de detalle · Video',
          en: 'Detail frame · Video',
        },
        kind: 'video-still',
      },
    ],
    relatedSlugs: ['uruguay-farewell', 'santa-lucia-del-este', 'portable-memory-objects'],
  },

  {
    id: '12',
    slug: 'escritoras-tejiendo-paz',
    title: {
      es: 'Escritoras Tejiendo Paz',
      en: 'Escritoras Tejiendo Paz',
    },
    categoryLabel: {
      es: 'Práctica colaborativa / Proyecto cultural',
      en: 'Collaborative Practice / Cultural Project',
    },
    filterCategories: ['textile-collaborative', 'cultural-projects'],
    year: '2026',
    medium: {
      es: 'Participación desde las artes visuales en proceso colectivo de memoria y creación',
      en: 'Visual arts contribution within a collective memory and creative process',
    },
    location: {
      es: 'Uruguay',
      en: 'Uruguay',
    },
    developmentContext: {
      es: 'Participación en iniciativa colectiva — No se presenta como obra individual concluida ni como iniciativa fundada o dirigida por la artista.',
      en: 'Participation in a collective initiative — Not presented as a solo completed artwork or an initiative founded or directed by the artist.',
    },
    shortDescription: {
      es: 'Participación en una iniciativa que reúne a mujeres sobrevivientes del conflicto armado colombiano residentes en Uruguay y otros países de América Latina, con aportes desde las artes visuales.',
      en: 'Participation in an initiative involving women survivors of the Colombian armed conflict living in Uruguay and other Latin American countries, with visual arts contributions supporting memory and collective creation.',
    },
    curatorialDescription: {
      es: [
        'En 2026, Marianne Tabarez Aristegui participa en Escritoras Tejiendo Paz, una iniciativa que congrega a mujeres sobrevivientes del conflicto armado colombiano residentes en Uruguay y otros países de América Latina. Su intervención se sitúa desde las artes visuales para acompañar procesos de memoria, expresión y creación colectiva.',
        'Este registro distingue explícitamente el aporte visual de la artista respecto de la autoría colectiva de las participantes y de la iniciativa misma, entendiendo la práctica artística colaborativa como una forma de escucha, transmisión y acompañamiento situado.',
      ],
      en: [
        'In 2026, Marianne Tabarez Aristegui participates in Escritoras Tejiendo Paz, an initiative bringing together women survivors of the Colombian armed conflict living in Uruguay and other Latin American countries. Her contribution unfolds from visual arts practice to support processes of memory, expression, and collective creation.',
        'This entry explicitly distinguishes the artist’s visual contribution from the collective authorship of the participants and the initiative itself, framing collaborative artistic practice as situated listening, transmission, and accompaniment.',
      ],
    },
    collaborativeBreakdown: {
      individualContribution: {
        es: 'Aportes desde las artes visuales para acompañar instancias de memoria, expresión y creación colectiva.',
        en: 'Contributions from visual arts to support processes of memory, expression, and collective creation.',
      },
      collectiveProcess: {
        es: 'Trabajo colaborativo de escritura, encuentro, palabra compartida y construcción colectiva de memoria entre participantes.',
        en: 'Collaborative writing, shared dialogue, and collective memory-building processes among participants.',
      },
      participatingGroups: {
        es: 'Mujeres sobrevivientes del conflicto armado colombiano residentes en Uruguay y otros países de América Latina integrantes de Escritoras Tejiendo Paz.',
        en: 'Women survivors of the Colombian armed conflict living in Uruguay and other Latin American countries participating in Escritoras Tejiendo Paz.',
      },
      culturalContext: {
        es: 'Diáspora colombiana en América Latina, memoria viva, prácticas culturales comunitarias y narrativas de mujeres.',
        en: 'Colombian diaspora in Latin America, living memory, community-based cultural practices, and women’s narratives.',
      },
    },
    mainImage: {
      id: 'etp-main',
      aspectRatio: '4/3',
      alt: {
        es: 'Escritoras Tejiendo Paz (2026) — práctica colaborativa y proyecto cultural (marcador de posición)',
        en: 'Escritoras Tejiendo Paz (2026) — collaborative practice and cultural project (placeholder)',
      },
      caption: {
        es: 'Participación en proceso colectivo de memoria y creación — Uruguay, 2026.',
        en: 'Participation in collective memory and creative process — Uruguay, 2026.',
      },
      placeholderLabel: {
        es: 'Práctica colaborativa · 2026',
        en: 'Collaborative practice · 2026',
      },
      kind: 'image',
    },
    gallery: [],
    relatedSlugs: ['migrantes-montevideo', 'colombia-cyanotypes-and-embroidery', 'migrantes'],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: Project | null;
  next: Project | null;
} {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  const prev = index > 0 ? PROJECTS[index - 1] : PROJECTS[PROJECTS.length - 1];
  const next = index < PROJECTS.length - 1 ? PROJECTS[index + 1] : PROJECTS[0];
  return { prev, next };
}
