import { Language } from '../types/portfolio';

export interface CVEducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string[];
}

export interface CVSelectedProjectItem {
  title: string;
  year?: string;
  medium: string;
  description: string;
  slug?: string;
}

export interface CVActivityItem {
  year: string;
  title: string;
  institution?: string;
  location?: string;
  description: string;
  status?: string;
  slug?: string;
}

export interface CVTrainingItem {
  year: string;
  title: string;
  institution: string;
  note?: string;
  ongoing?: boolean;
}

export interface CVExperienceItem {
  period: string;
  role: string;
  organization: string;
  description: string;
}

export interface CVLocaleData {
  pageTitle: string;
  role: string;
  sections: {
    biography: string;
    education: string;
    selectedProjects: string;
    collaborative: string;
    research: string;
    training: string;
    otherTraining: string;
    governance: string;
    professional: string;
  };
  ongoingLabel: string;
  biographyParagraphs: string[];
  education: CVEducationItem[];
  selectedProjects: CVSelectedProjectItem[];
  collaborativePractices: CVActivityItem[];
  researchActivities: CVActivityItem[];
  primaryTraining: CVTrainingItem[];
  otherTraining: CVTrainingItem[];
  governance: {
    title: string;
    institution: string;
    description: string;
  };
  professionalIntro: string;
  professionalExperience: CVExperienceItem[];
}

export const CV_CONTENT: Record<Language, CVLocaleData> = {
  es: {
    pageTitle: 'Currículum Vitae',
    role: 'Artista Visual — Licenciada en Artes · Uruguay',
    sections: {
      biography: 'Biografía',
      education: 'Formación académica',
      selectedProjects: 'Proyectos artísticos seleccionados',
      collaborative: 'Prácticas colaborativas y comunitarias',
      research: 'Investigación artística y actividades creativas documentadas',
      training: 'Formación complementaria y actualización',
      otherTraining: 'Otra formación profesional',
      governance: 'Participación universitaria',
      professional: 'Experiencia profesional',
    },
    ongoingLabel: 'En curso',
    biographyParagraphs: [
      'Marianne Tabarez Aristegui es una artista visual uruguaya cuya práctica articula investigación artística, experimentación material y procesos culturales colaborativos. A través de la fotografía, el collage, el video, el dibujo y diversos procedimientos alternativos de producción de imágenes, explora las relaciones entre memoria, identidad, territorio y transmisión cultural, con especial atención a las formas en que las historias individuales y colectivas se construyen, preservan y transforman.',
      'Su trabajo trasciende la producción de imágenes y objetos para involucrarse también en prácticas artísticas comunitarias, procesos colaborativos e investigaciones situadas. A partir del encuentro con comunidades migrantes, prácticas textiles tradicionales e iniciativas culturales colectivas, indaga en las formas en que los saberes, la memoria y la identidad se articulan mediante gestos cotidianos, culturas materiales y experiencias compartidas.',
      'Su práctica aborda cuestiones vinculadas al desplazamiento, el patrimonio cultural y la construcción de narrativas históricas en América Latina, entendiendo la memoria como un proceso vivo y en disputa, antes que como un archivo fijo. Le interesan particularmente las relaciones entre creación artística, participación colectiva y transmisión de conocimientos culturales entre generaciones y territorios.',
      'Entre la producción artística individual y las formas colaborativas de intervención cultural, su trabajo reúne experimentación visual y reflexión crítica para explorar cómo las imágenes, los objetos, las prácticas y las experiencias comunitarias pueden constituirse en espacios de preservación, reinterpretación y reconfiguración de la memoria colectiva.',
    ],
    education: [
      {
        year: '2021',
        degree: 'Licenciatura en Artes, opción Artes Plásticas y Visuales',
        institution: 'Facultad de Artes, Universidad de la República (Udelar), Uruguay.',
        details: [
          'Proyecto final de egreso: «Migrantes». Fecha de aprobación: agosto de 2021.',
          'Estudios de grado iniciados en 2011; cursado completado en 2018, con aprobación del proyecto final de egreso en agosto de 2021.',
        ],
      },
    ],
    selectedProjects: [
      {
        title: 'Migrantes',
        year: '2020–2021',
        medium: 'Fotografía, collage digital y cianotipia',
        description:
          'Proyecto final de egreso e investigación artística junto a poblaciones migrantes en Uruguay.',
        slug: 'migrantes',
      },
      {
        title: 'Santa Lucía del Este',
        year: '2021',
        medium: 'Video monocanal',
        description:
          'Obra audiovisual en torno al paisaje costero, el tiempo y las huellas de habitabilidad en Uruguay.',
        slug: 'santa-lucia-del-este',
      },
      {
        title: 'Superficies tomadas',
        year: '2025',
        medium: 'Intervención urbana, collage, fotografía, video y animación digital',
        description:
          'Proyecto artístico que investiga la erosión del valor colectivo en el espacio público de Montevideo mediante la extracción, intervención temporal y reconfiguración de sus superficies gráficas.',
        slug: 'superficies-tomadas',
      },
      {
        title: 'América invertida',
        medium: 'Collage / Obra sobre papel',
        description:
          'Ensamblajes en papel que cuestionan imaginarios geográficos y perspectivas visuales establecidas en América Latina.',
        slug: 'america-invertida',
      },
      {
        title: 'Páramos',
        medium: 'Pintura / Relieve material / Técnica mixta',
        description:
          'Cuerpo de obra sobre ecosistemas de páramo andino a través del espesor pictórico y el relieve.',
        slug: 'paramos',
      },
      {
        title: 'Colombia: Cyanotypes and Embroidery',
        medium: 'Cianotipia sobre tela, bordado y objeto textil',
        description:
          'Cruce entre impresión solar y bordado —incluyendo un oso solidario— sobre memoria, cuidado y desplazamiento.',
        slug: 'colombia-cyanotypes-and-embroidery',
      },
      {
        title: 'Migrantes Montevideo',
        medium: 'Arte público / Mosaico / Memoria cultural',
        description:
          'Proyecto en mosaico vinculado a preguntas sobre migración, pertenencia y memoria colectiva en Montevideo.',
        slug: 'migrantes-montevideo',
      },
      {
        title: 'Uruguay: Farewell',
        medium: 'Video / Imagen en movimiento',
        description:
          'Ensayo audiovisual sobre la partida, el tránsito y la relación material con el territorio.',
        slug: 'uruguay-farewell',
      },
      {
        title: 'Portable Memory Objects',
        medium: 'Objeto experimental / Exploración conceptual NFC (en desarrollo)',
        description:
          'Indagación abierta sobre objetos cotidianos de consumo popular como soportes portátiles de memoria cultural.',
        slug: 'portable-memory-objects',
      },
      {
        title: 'Tea Project',
        medium: 'Video editado para presentación web',
        description:
          'Observación audiovisual de la infusión de té, la materia orgánica y los ritmos cotidianos.',
        slug: 'tea-project',
      },
    ],
    collaborativePractices: [
      {
        year: '2026',
        title: 'Escritoras Tejiendo Paz',
        location: 'Uruguay',
        description:
          'Participación en una iniciativa que reúne a mujeres sobrevivientes del conflicto armado colombiano residentes en Uruguay y otros países de América Latina. Aportes desde las artes visuales para acompañar procesos de memoria, expresión y creación colectiva.',
        slug: 'escritoras-tejiendo-paz',
      },
      {
        year: '2026',
        title: '3.er Ciclo de Talleres de Bordado de Banderas: Bestiario de Malvín Norte',
        institution:
          'NaSoArte, grupo de investigación-acción de la Universidad de la República / Dirección Nacional de Cultura, Uruguay.',
        description:
          'Actividad de extensión universitaria centrada en la creación textil colectiva mediante el bordado de estandartes, promoviendo la participación comunitaria y expresiones artísticas vinculadas al territorio.',
        status: 'En curso',
      },
      {
        year: '2025',
        title: 'Proyecto comunitario en Barrio Atahualpa',
        institution:
          'Taller López de la Torre, Facultad de Artes, Universidad de la República, Uruguay.',
        description:
          'Proyecto de extensión universitaria desarrollado junto a estudiantes, docentes y vecinos de la comunidad. Actividades artísticas colaborativas orientadas a la celebración comunitaria y la participación de infancias y adolescencias.',
      },
      {
        year: '2025',
        title: 'Laboratorio Manos a la Obra: Al amparo de los libros',
        institution:
          'Taller López de la Torre, Facultad de Artes, Universidad de la República, Uruguay.',
        description:
          'Proyecto colaborativo entre estudiantes, docentes y bibliotecarios, centrado en el libro de artista como dispositivo de memoria y hospitalidad mediante técnicas artesanales y materiales de bajo impacto ambiental.',
      },
    ],
    researchActivities: [
      {
        year: '2023',
        title: 'Documentación fotográfica de prácticas textiles tradicionales',
        location: 'Perú',
        description:
          'Registro fotográfico de procesos de tejido e hilado desarrollados por mujeres tejedoras, con énfasis en las prácticas textiles tradicionales y la transmisión de saberes vinculados al territorio y la memoria cultural.',
      },
      {
        year: '2020–2021',
        title: 'Migrantes',
        location: 'Uruguay',
        description:
          'Investigación y creación artística junto a poblaciones migrantes en Uruguay mediante fotografía, collage digital y cianotipia.',
        slug: 'migrantes',
      },
      {
        year: '2021–Actualidad',
        title: 'The Koko Experiment',
        location: 'Uruguay / Argentina',
        description:
          'Proyecto autogestionado de fotografía y video vinculado a experiencias gastronómicas y culturales.',
      },
    ],
    primaryTraining: [
      {
        year: '2026',
        title: 'Herramientas para la elaboración de proyectos culturales y artísticos',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Introducción a las prácticas curatoriales contemporáneas',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Quillapi de la memoria: Entretejiendo territorio y raíces ancestrales. Un encuentro con Nuestra Historia Viva',
        institution: 'Centro Universitario Regional del Este, Uruguay',
      },
      {
        year: '2026',
        title: 'Deconstruyendo el arte hegemónico sobre los Pueblos Originarios',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Introducción a los indicadores de derechos económicos, sociales, culturales y ambientales',
        institution: 'Institución Nacional de Derechos Humanos y Defensoría del Pueblo, Uruguay',
        ongoing: true,
      },
      {
        year: '2026',
        title: 'Diplomado Impactos culturales de la transformación digital',
        institution: 'OEI / Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
        ongoing: true,
      },
      {
        year: '2026',
        title: 'Patrimonio vivo y derechos culturales',
        institution: 'CRESPIAL / Universidad Pedagógica y Tecnológica de Colombia, Colombia',
      },
      {
        year: '2026',
        title: '2.º Seminario Internacional: Una Escuela Latinoamericana de Políticas Culturales',
        institution: 'Instituto Latinoamericano de Cultura Viva Comunitaria, Brasil',
      },
      {
        year: '2026',
        title: 'Introducción al Patrimonio Cultural',
        institution: 'Servicio Nacional del Patrimonio Cultural, Chile',
      },
      {
        year: '2025–2026',
        title: 'Escuela de Futuros – Exploratorio Digital',
        institution: 'Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
        ongoing: true,
      },
      {
        year: '2025',
        title: 'Escuela de Futuros – Plan de Cultura de Bogotá 2038. Encuentro sobre políticas culturales',
        institution: 'Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
      },
      {
        year: '2025',
        title: 'Consideraciones generales para la gestión de riesgos',
        institution: 'Centro de Fotografía de Montevideo, Uruguay',
      },
      {
        year: '2025',
        title: 'XIII Simposio de Historia del Arte: Identidades disputadas en el arte americano: la idea de Latinx vista desde América Latina',
        institution: 'Universidad de los Andes, Colombia',
        note: 'Participación como asistente',
      },
      {
        year: '2025',
        title: 'Taller de Curaduría',
        institution: 'Museo de Bogotá, Colombia',
      },
      {
        year: '2025',
        title: 'LAB 04 – Territorios espectrales',
        institution: 'Espacio de Arte Contemporáneo, Uruguay',
      },
      {
        year: '2019',
        title: 'Procesos fotográficos alternativos',
        institution: 'Espacio de Arte Contemporáneo, Uruguay',
      },
    ],
    otherTraining: [
      {
        year: '2026',
        title: 'English B2 Advanced',
        institution: 'The English Coach, Uruguay',
        ongoing: true,
      },
      {
        year: '2025',
        title: 'Python y Análisis de Datos',
        institution: 'Guayerd / IBM, Argentina',
      },
      {
        year: '2021',
        title: 'Carrera de UX/UI',
        institution: 'Coderhouse, Argentina',
      },
      {
        year: '2021',
        title: 'Curso Audiovisual',
        institution: 'Casa Arbus, Uruguay',
      },
      {
        year: '2018',
        title: 'Desarrollo Web',
        institution: 'Plan Ceibal, Uruguay',
      },
    ],
    governance: {
      title: 'Participación en cogobierno universitario',
      institution: 'Facultad de Artes, Universidad de la República, Uruguay',
      description:
        'Participación en instancias y actividades deliberativas de la Asamblea de Egresados.',
    },
    professionalIntro:
      'La experiencia profesional en diseño digital, desarrollo web y fotografía forma parte de su recorrido visual y técnico complementario.',
    professionalExperience: [
      {
        period: '2020–2025',
        role: 'Senior Web UX/UI Designer',
        organization: 'Tavano Team, Uruguay / Estados Unidos',
        description:
          'Diseño de experiencias y productos digitales, investigación con usuarios, arquitectura de la información, diseño de interfaces, sistemas visuales y accesibilidad. Desarrollo de soluciones digitales para clientes internacionales.',
      },
      {
        period: '2021–2023',
        role: 'Fotógrafa de Backstage',
        organization: 'Pseudo Producciones, Uruguay',
        description:
          'Fotografía de backstage para producciones audiovisuales y clientes locales.',
      },
      {
        period: '2018–2020',
        role: 'Diseñadora UX/UI y Web',
        organization: 'Cincomedios, Uruguay',
        description:
          'Diseño y desarrollo de experiencias digitales para clientes regionales, materiales gráficos y campañas de comunicación.',
      },
      {
        period: '2016–2018',
        role: 'Diseñadora Gráfica y Web',
        organization: 'Impulso Web, Uruguay',
        description:
          'Desarrollo de identidad visual, sitios web y materiales gráficos para empresas.',
      },
      {
        period: '2016–2018',
        role: 'Diseñadora Gráfica',
        organization: 'Zero – Cloud Communications, Estados Unidos',
        description:
          'Diseño de materiales gráficos y digitales para campañas de comunicación y marketing.',
      },
      {
        period: '2015–Actualidad',
        role: 'Fotógrafa Freelance',
        organization: 'Uruguay',
        description: 'Práctica fotográfica independiente.',
      },
    ],
  },

  en: {
    pageTitle: 'Curriculum Vitae',
    role: "Visual Artist — Bachelor's Degree in Arts · Uruguay",
    sections: {
      biography: 'Biography',
      education: 'Education',
      selectedProjects: 'Selected Artistic Projects',
      collaborative: 'Collaborative & Community-Based Practices',
      research: 'Artistic Research & Documented Creative Activities',
      training: 'Selected Training & Continuing Education',
      otherTraining: 'Other Professional Training',
      governance: 'University Participation',
      professional: 'Professional Experience',
    },
    ongoingLabel: 'Ongoing',
    biographyParagraphs: [
      'Marianne Tabarez Aristegui is a Uruguayan visual artist whose practice brings together artistic research, material experimentation and collaborative cultural processes. Working across photography, collage, video, drawing and alternative image-making techniques, she explores the intersections of memory, identity, territory and cultural transmission, with particular attention to the ways individual and collective histories are constructed, preserved and transformed.',
      'Her work extends beyond the production of images and objects into community-based artistic practices, collaborative processes and situated research. Through encounters with migrant communities, traditional textile practices and collective cultural initiatives, she investigates how knowledge, memory and identity are articulated through everyday gestures, material cultures and shared experiences.',
      'Engaging with questions of displacement, cultural heritage and the construction of historical narratives in Latin America, her practice approaches memory as a living and contested process rather than a fixed archive. She is particularly interested in the relationships between artistic creation, collective participation and the transmission of cultural knowledge across generations and territories.',
      "Moving between individual artistic production and collaborative forms of cultural engagement, Tabarez's work brings together visual experimentation and critical inquiry to explore how images, objects, practices and community experiences can become spaces for the preservation, reinterpretation and reimagining of collective memory.",
    ],
    education: [
      {
        year: '2021',
        degree: "Bachelor's Degree in Arts – Visual and Plastic Arts",
        institution: 'Facultad de Artes, Universidad de la República (Udelar), Uruguay.',
        details: [
          'Final Degree Project: "Migrantes". Approval date: August 2021.',
          'Undergraduate studies began in 2011; coursework completed in 2018, with the final degree project approved in August 2021.',
        ],
      },
    ],
    selectedProjects: [
      {
        title: 'Migrantes',
        year: '2020–2021',
        medium: 'Photography, digital collage and cyanotype',
        description:
          'Final degree project and artistic research with migrant populations in Uruguay.',
        slug: 'migrantes',
      },
      {
        title: 'Santa Lucía del Este',
        year: '2021',
        medium: 'Single-channel video',
        description:
          'Audiovisual work observing coastal landscape, duration and traces of inhabitation in Uruguay.',
        slug: 'santa-lucia-del-este',
      },
      {
        title: 'Borrowed Surfaces',
        year: '2025',
        medium: 'Urban intervention, collage, photography, video and digital animation',
        description:
          "An artistic project investigating the erosion of collective value in Montevideo's public space through the extraction, temporary intervention and reconfiguration of its graphic surfaces.",
        slug: 'superficies-tomadas',
      },
      {
        title: 'América invertida',
        medium: 'Paper collage',
        description:
          'Paper collage works engaging Latin American identity, geographical imaginaries and inverted visual perspectives.',
        slug: 'america-invertida',
      },
      {
        title: 'Páramos',
        medium: 'Painting / Material relief / Mixed media',
        description:
          'Body of work exploring Andean páramo landscapes through material relief and painterly experimentation.',
        slug: 'paramos',
      },
      {
        title: 'Colombia: Cyanotypes and Embroidery',
        medium: 'Cyanotype on fabric, embroidery and textile object',
        description:
          'Solar printing combined with embroidery—including a solidarity teddy bear—exploring materiality, care and displacement.',
        slug: 'colombia-cyanotypes-and-embroidery',
      },
      {
        title: 'Migrantes Montevideo',
        medium: 'Public art / Mosaic / Cultural memory',
        description:
          'Mosaic project addressing migration, identity, belonging and collective memory in Montevideo.',
        slug: 'migrantes-montevideo',
      },
      {
        title: 'Uruguay: Farewell',
        medium: 'Video / Moving image',
        description:
          'Audiovisual work structured around departure, territory and the material dimensions of leaving a place.',
        slug: 'uruguay-farewell',
      },
      {
        title: 'Portable Memory Objects',
        medium: 'Experimental object / Conceptual NFC exploration (in development)',
        description:
          'Ongoing inquiry examining everyday consumer containers as portable carriers of cultural memory.',
        slug: 'portable-memory-objects',
      },
      {
        title: 'Tea Project',
        medium: 'Video edited for web presentation',
        description:
          'Audiovisual observation centered on tea infusion, organic materiality and everyday cultural gestures.',
        slug: 'tea-project',
      },
    ],
    collaborativePractices: [
      {
        year: '2026',
        title: 'Escritoras Tejiendo Paz',
        location: 'Uruguay',
        description:
          'Participation in an initiative involving women survivors of the Colombian armed conflict living in Uruguay and other Latin American countries. Contributions from visual arts to support processes of memory, expression and collective creation.',
        slug: 'escritoras-tejiendo-paz',
      },
      {
        year: '2026',
        title: '3rd Cycle of Flag Embroidery Workshops: Bestiario de Malvín Norte',
        institution:
          'NaSoArte, research-action group at Universidad de la República / Dirección Nacional de Cultura, Uruguay.',
        description:
          'University extension activity focused on collective textile creation through the embroidery of banners, promoting community participation and artistic expressions connected to territory.',
        status: 'Ongoing',
      },
      {
        year: '2025',
        title: 'Community Project in Barrio Atahualpa',
        institution:
          'Taller López de la Torre, Facultad de Artes, Universidad de la República, Uruguay.',
        description:
          'University extension project developed with students, teachers and the local community. Collaborative artistic activities focused on community celebration and the participation of children and adolescents.',
      },
      {
        year: '2025',
        title: 'Laboratorio Manos a la Obra: Al amparo de los libros',
        institution:
          'Taller López de la Torre, Facultad de Artes, Universidad de la República, Uruguay.',
        description:
          "Collaborative project involving students, teachers and librarians, focused on the artist's book as a device for memory and hospitality, using handcrafted production techniques and low-environmental-impact materials.",
      },
    ],
    researchActivities: [
      {
        year: '2023',
        title: 'Photographic Documentation of Traditional Textile Practices',
        location: 'Peru',
        description:
          'Photographic documentation of weaving and spinning processes developed by women textile practitioners, with an emphasis on traditional textile practices and the transmission of knowledge connected to territory and cultural memory.',
      },
      {
        year: '2020–2021',
        title: 'Migrantes',
        location: 'Uruguay',
        description:
          'Artistic research and creation involving migrant populations in Uruguay through photography, digital collage and cyanotype.',
        slug: 'migrantes',
      },
      {
        year: '2021–Present',
        title: 'The Koko Experiment',
        location: 'Uruguay / Argentina',
        description:
          'Self-managed photography and videography project connected to gastronomic and cultural experiences.',
      },
    ],
    primaryTraining: [
      {
        year: '2026',
        title: 'Herramientas para la elaboración de proyectos culturales y artísticos',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Introducción a las prácticas curatoriales contemporáneas',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Quillapi de la memoria: Entretejiendo territorio y raíces ancestrales. Un encuentro con Nuestra Historia Viva',
        institution: 'Centro Universitario Regional del Este, Uruguay',
      },
      {
        year: '2026',
        title: 'Deconstruyendo el arte hegemónico sobre los Pueblos Originarios',
        institution: 'Universidad de la República, Uruguay',
      },
      {
        year: '2026',
        title: 'Introducción a los indicadores de derechos económicos, sociales, culturales y ambientales',
        institution: 'Institución Nacional de Derechos Humanos y Defensoría del Pueblo, Uruguay',
        ongoing: true,
      },
      {
        year: '2026',
        title: 'Diplomado Impactos culturales de la transformación digital',
        institution: 'OEI / Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
        ongoing: true,
      },
      {
        year: '2026',
        title: 'Patrimonio vivo y derechos culturales',
        institution: 'CRESPIAL / Universidad Pedagógica y Tecnológica de Colombia, Colombia',
      },
      {
        year: '2026',
        title: '2.º Seminario Internacional: Una Escuela Latinoamericana de Políticas Culturales',
        institution: 'Instituto Latinoamericano de Cultura Viva Comunitaria, Brazil',
      },
      {
        year: '2026',
        title: 'Introducción al Patrimonio Cultural',
        institution: 'Servicio Nacional del Patrimonio Cultural, Chile',
      },
      {
        year: '2025–2026',
        title: 'Escuela de Futuros – Exploratorio Digital',
        institution: 'Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
        ongoing: true,
      },
      {
        year: '2025',
        title: 'Escuela de Futuros – Plan de Cultura de Bogotá 2038. Encuentro sobre políticas culturales',
        institution: 'Secretaría de Cultura, Recreación y Deporte de Bogotá, Colombia',
      },
      {
        year: '2025',
        title: 'Consideraciones generales para la gestión de riesgos',
        institution: 'Centro de Fotografía de Montevideo, Uruguay',
      },
      {
        year: '2025',
        title: 'XIII Simposio de Historia del Arte: Identidades disputadas en el arte americano: la idea de Latinx vista desde América Latina',
        institution: 'Universidad de los Andes, Colombia',
        note: 'Participation as attendee',
      },
      {
        year: '2025',
        title: 'Taller de Curaduría',
        institution: 'Museo de Bogotá, Colombia',
      },
      {
        year: '2025',
        title: 'LAB 04 – Territorios espectrales',
        institution: 'Espacio de Arte Contemporáneo, Uruguay',
      },
      {
        year: '2019',
        title: 'Procesos fotográficos alternativos',
        institution: 'Espacio de Arte Contemporáneo, Uruguay',
      },
    ],
    otherTraining: [
      {
        year: '2026',
        title: 'English B2 Advanced',
        institution: 'The English Coach, Uruguay',
        ongoing: true,
      },
      {
        year: '2025',
        title: 'Python and Data Analysis',
        institution: 'Guayerd / IBM, Argentina',
      },
      {
        year: '2021',
        title: 'UX/UI Career Program',
        institution: 'Coderhouse, Argentina',
      },
      {
        year: '2021',
        title: 'Audiovisual Course',
        institution: 'Casa Arbus, Uruguay',
      },
      {
        year: '2018',
        title: 'Web Development',
        institution: 'Plan Ceibal, Uruguay',
      },
    ],
    governance: {
      title: 'Participation in University Governance',
      institution: 'Facultad de Artes, Universidad de la República, Uruguay',
      description:
        "Participation in meetings and deliberative activities of the Graduates' Assembly.",
    },
    professionalIntro:
      'Professional experience in digital design, web development and photography forms part of her broader visual background.',
    professionalExperience: [
      {
        period: '2020–2025',
        role: 'Senior Web UX/UI Designer',
        organization: 'Tavano Team, Uruguay / United States',
        description:
          'Design of digital experiences and products, user research, information architecture, interface design, visual systems and accessibility. Development of digital solutions for international clients.',
      },
      {
        period: '2021–2023',
        role: 'Backstage Photographer',
        organization: 'Pseudo Producciones, Uruguay',
        description:
          'Backstage photography for audiovisual productions and local clients.',
      },
      {
        period: '2018–2020',
        role: 'UX/UI and Web Designer',
        organization: 'Cincomedios, Uruguay',
        description:
          'Design and development of digital experiences for regional clients, graphic materials and communication campaigns.',
      },
      {
        period: '2016–2018',
        role: 'Graphic and Web Designer',
        organization: 'Impulso Web, Uruguay',
        description:
          'Visual identity development, websites and graphic materials for companies.',
      },
      {
        period: '2016–2018',
        role: 'Graphic Designer',
        organization: 'Zero – Cloud Communications, United States',
        description:
          'Design of graphic and digital materials for communication and marketing campaigns.',
      },
      {
        period: '2015–Present',
        role: 'Freelance Photographer',
        organization: 'Uruguay',
        description: 'Independent photography practice.',
      },
    ],
  },
};
