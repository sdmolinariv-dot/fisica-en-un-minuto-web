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
    email: "",
    emailLabel: "Correo configurable"
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
    { label: "Instagram", href: "" },
    { label: "YouTube", href: "" },
    { label: "TikTok", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "Spotify", href: "" },
    { label: "Correo", href: "" }
  ],
  imageSlots: {
    hero: {
      src: "",
      fileName: "/public/images/sebastian-hero.webp",
      alt: "Fotografía o video vertical de Sebastián Molina"
    },
    speaking: {
      src: "",
      fileName: "/public/images/sebastian-speaking.webp",
      alt: "Fotografía profesional de Sebastián Molina en una charla"
    },
    quiriCharacter: {
      src: "",
      fileName: "/public/images/quiri-character.webp",
      alt: "Imagen del pudú protagonista de Quiri"
    },
    quiriScreenshotOne: {
      src: "",
      fileName: "/public/images/quiri-screenshot-01.webp",
      alt: "Captura real de la aplicación Quiri"
    },
    quiriScreenshotTwo: {
      src: "",
      fileName: "/public/images/quiri-screenshot-02.webp",
      alt: "Captura real de una actividad dentro de Quiri"
    },
    quiriQr: {
      src: "",
      fileName: "/public/images/quiri-qr.webp",
      alt: "Código QR de descarga de Quiri"
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

export const profileSections = [
  {
    title: "Formación académica",
    text: "Espacio reservado para añadir información académica verificada."
  },
  {
    title: "Experiencia",
    text: "Espacio reservado para describir experiencia profesional confirmada."
  },
  {
    title: "Hitos",
    text: "Espacio reservado para hitos del proyecto, sin cifras ni reconocimientos inventados."
  },
  {
    title: "Apariciones en medios",
    text: "Espacio reservado para medios reales cuando estén disponibles."
  },
  {
    title: "Charlas destacadas",
    text: "Espacio reservado para charlas verificadas y autorizadas para publicar."
  },
  {
    title: "Proyectos",
    text: "Espacio reservado para proyectos editoriales, audiovisuales y educativos confirmados."
  }
] as const;

export const quiriStats = [
  { value: "Editable", label: "descargas" },
  { value: "Editable", label: "eventos temáticos" },
  { value: "Editable", label: "participación" }
] as const;

export const quiriDownloadLinks = [
  { label: "Android", href: "" },
  { label: "iOS", href: "" }
] as const;
