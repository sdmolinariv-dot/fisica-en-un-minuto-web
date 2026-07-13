export const siteConfig = {
  name: "Física en 1 Minuto",
  domain: "fisicaenunminuto.com",
  url: "https://fisicaenunminuto.com",
  description:
    "Charlas, talleres, campañas y proyectos de comunicación científica con Sebastián Molina, físico y creador de Física en 1 Minuto.",
  author: {
    name: "Sebastián Molina",
    role: "Físico y comunicador científico chileno",
    shortBio:
      "Físico y creador de Física en 1 Minuto, proyecto de divulgación científica enfocado en ciencia clara, pensamiento crítico y comunicación responsable."
  },
  contact: {
    email: "contacto@fisicaenunminuto.com",
    emailLabel: "contacto@fisicaenunminuto.com"
  },
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Charlas", href: "/charlas" },
    { label: "Colaboraciones", href: "/colaboraciones" },
    { label: "Quiri", href: "/quiri" },
    { label: "Sobre mí", href: "/sobre-mi" },
    { label: "Contacto", href: "/contacto" }
  ],
  socialLinks: [
    { label: "Instagram", href: "https://www.instagram.com/fisica.en.1.minuto/" },
    { label: "TikTok", href: "https://www.tiktok.com/@fisica.en.1.minuto?_r=1&_t=ZS-980BGmcA3Qj" },
    { label: "YouTube", href: "https://www.youtube.com/@Fisica.en.1.minuto" }
  ],
  imageSlots: {
    hero: {
      src: "/fisica-hero-prism.png",
      fileName: "/public/fisica-hero-prism.png",
      alt: "Prisma de vidrio, péndulo y rayos de luz como metáfora visual de la física"
    },
    speaking: {
      src: "/sebastian-molina.jpg",
      fileName: "/public/sebastian-molina.jpg",
      alt: "Retrato de Sebastián Molina, físico y creador de Física en 1 Minuto"
    },
    quiriCharacter: {
      src: "/quiri-mascot.png",
      fileName: "/public/quiri-mascot.png",
      alt: "Quiri, el pudú protagonista del juego educativo Quiri"
    },
    quiriScreenshotOne: {
      src: "/quiri-feed.jpg",
      fileName: "/public/quiri-feed.jpg",
      alt: "Pantalla de Quiri Feed con una pregunta de biología sobre resistencia a antibióticos"
    },
    quiriScreenshotTwo: {
      src: "/quiri-mundialero.jpg",
      fileName: "/public/quiri-mundialero.jpg",
      alt: "Pantalla del evento especial Quiri Mundialero con preguntas sobre ciencia del fútbol"
    }
  }
} as const;

export const impactMetrics = [
  {
    value: "Más de 400.000",
    label: "seguidores",
    detail: "Comunidad de divulgación científica y pensamiento crítico."
  },
  {
    value: "Millones",
    label: "de visualizaciones mensuales",
    detail: "Contenido científico diseñado para redes y audiencias amplias."
  },
  {
    value: "Orgánica",
    label: "comunidad construida",
    detail: "Crecimiento sostenido a partir de contenido educativo y conversación pública."
  },
  {
    value: "Experiencia",
    label: "en ciencia y comunicación",
    detail: "Campañas, educación, charlas y proyectos audiovisuales."
  }
] as const;

export const logoCollaborations: Array<{
  name: string;
  image: string;
  href?: string;
}> = [];

export const budgetRanges = [
  "Menos de $300.000",
  "Entre $300.000 y $600.000",
  "Entre $600.000 y $1.000.000",
  "Más de $1.000.000",
  "Aún no está definido"
] as const;

export const contactReasons = [
  "Cotizar una charla",
  "Proponer una colaboración",
  "Auspiciar Quiri",
  "Invitación de prensa",
  "Proyecto audiovisual",
  "Consulta general"
] as const;

export const aboutIntroParagraphs = [
  "Soy físico, Licenciado en Física por la Pontificia Universidad Católica de Chile, y creador de Física en 1 Minuto. Mi trabajo nace de una convicción sencilla: la ciencia no debería sentirse reservada para quienes ya saben de ciencia.",
  "Antes de dedicarme a la divulgación a gran escala, me formé entre investigación experimental, docencia universitaria y análisis cuantitativo. Esa mezcla marca mi forma de comunicar: explicar desde primeros principios, cuidar el rigor y traducir ideas complejas sin convertirlas en humo.",
  "Desde 2023 desarrollo Física en 1 Minuto, una plataforma de comunicación científica que combina videos breves, conversación con la comunidad, corrección de desinformación y proyectos educativos. También desarrollo Quiri, una aplicación gratuita de aprendizaje científico, y trabajo en un libro con Editorial Planeta."
] as const;

export const profileHighlights = [
  {
    value: "PUC",
    label: "Licenciado en Física"
  },
  {
    value: "2023",
    label: "Inicio de Física en 1 Minuto"
  },
  {
    value: "400.000+",
    label: "seguidores en la comunidad"
  },
  {
    value: "8M+",
    label: "visualizaciones en 30 días, mayo-junio 2026"
  },
  {
    value: "2013-2019",
    label: "docencia y ayudantías universitarias"
  },
  {
    value: "2",
    label: "publicaciones científicas revisadas por pares"
  }
] as const;

export const profileSections = [
  {
    title: "Formación académica",
    text: "Formación científica y cuantitativa en la Pontificia Universidad Católica de Chile, complementada con estudios de estadística y física médica.",
    items: [
      "Licenciatura en Física, Pontificia Universidad Católica de Chile, 2014-2018.",
      "Diplomado de posgrado en Estadística, PUC, 2019.",
      "Estudios de pregrado en Matemática y Estadística, PUC, 2012-2013.",
      "Escuela de verano Medical Physics for Radiotherapy, Heidelberg Center for Latin America, Universität Heidelberg, 2015."
    ]
  },
  {
    title: "Docencia universitaria",
    text: "Experiencia explicando física y razonamiento cuantitativo en cursos universitarios, laboratorios y tutorías.",
    items: [
      "Ayudante y tutor en las facultades de Física y Matemáticas de la PUC, 2013-2019.",
      "Apoyo docente en Física Experimental Avanzada, Física Moderna, Ondas y Óptica, Termodinámica, Electricidad y Magnetismo.",
      "Tutor en el programa de inclusión PIANE-UC y ayudante en cursos de razonamiento matemático y cuantitativo."
    ]
  },
  {
    title: "Investigación científica",
    text: "Trabajo de investigación de pregrado en física de superficies, materia blanda, biofísica y materiales.",
    items: [
      "Investigador de pregrado en Surface Physics & Soft Matter Laboratory (SurfLab), PUC, 2015-2018.",
      "Fabricación y caracterización de bicapas lipídicas y membranas celulares artificiales en sustratos de silicio y silicio poroso.",
      "Coautor de publicaciones en International Journal of Molecular Sciences (2020) y Materials Letters (2019).",
      "Coautor de presentaciones en encuentros como SOCHIFI, MRS Fall Meeting, DPG Spring Meeting y congresos chilenos de nanociencia y nanotecnología."
    ]
  },
  {
    title: "Divulgación científica",
    text: "Física en 1 Minuto traduce conceptos científicos desde primeros principios para audiencias no especialistas, con foco en claridad, rigor y pensamiento crítico.",
    items: [
      "Fundador y creador de Física en 1 Minuto, 2023-presente.",
      "Comunidad de más de 400.000 seguidores y más de 8 millones de visualizaciones en un periodo de 30 días, según dashboard profesional de Instagram de mayo-junio de 2026.",
      "Contenido creado de forma orgánica, muchas veces en respuesta directa a preguntas de la comunidad o a casos de desinformación pública."
    ]
  },
  {
    title: "Medios y charlas",
    text: "Participación como comunicador científico en medios, ferias del libro, clases abiertas y conversaciones públicas sobre ciencia.",
    items: [
      "Clase magistral online sobre Relatividad General de Einstein, Academia Into Space, agosto de 2024.",
      "Panelista en La Furia del Libro, Santiago, en la conversación sobre financiamiento público de la ciencia, mayo de 2026.",
      "Apariciones o entrevistas en Radio ADN, NTV/TVN, Meteored, Radio Bío-Bío/BioBioChile, Radio UFRO, CNN Chile y el podcast Let's Get Physical / TXS Plus.",
      "Cobertura y perfiles en medios como El Mostrador, BioBioChile, OhMyGeek, El Ciudadano, Agenda Transparencia, Central Noticia, Canal Local y El Reporte Diario."
    ]
  },
  {
    title: "Proyectos",
    text: "Desarrollo de productos educativos y editoriales que conectan ciencia, cultura digital y aprendizaje continuo.",
    items: [
      "Autor de Física en 1 Minuto, libro en desarrollo con Editorial Planeta; entrega de manuscrito prevista para septiembre de 2026.",
      "Fundador y desarrollador de Quiri, aplicación gratuita de aprendizaje científico tipo quiz, disponible en Google Play.",
      "Quiri registró cerca de 3.500 usuarios activos entre febrero y junio de 2026, con usuarios en Chile, España, México y Estados Unidos."
    ]
  },
  {
    title: "Experiencia profesional",
    text: "Trabajo cuantitativo en riesgo financiero y cumplimiento, desarrollado en paralelo e independientemente de la comunicación científica.",
    items: [
      "Analista de Riesgo Financiero en Falabella Corporativo, 2025-presente.",
      "Experiencia en Banco Santander, 2019-2024, en roles vinculados a cumplimiento, riesgo fiduciario y trading.",
      "Trayectoria profesional enfocada en análisis cuantitativo, gestión de riesgos, cumplimiento normativo y protección al consumidor."
    ]
  }
] as const;

export const quiriDownloadLinks = [
  {
    label: "Android",
    href: "https://play.google.com/store/apps/details?id=com.sebamr.quiri"
  },
  { label: "Apple", href: "", availability: "Próximamente" }
] as const;
