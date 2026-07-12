export const homeServices = [
  {
    title: "Charlas y talleres",
    description:
      "Charlas para empresas, universidades, colegios, equipos de comunicación y público general.",
    href: "/charlas",
    icon: "Mic"
  },
  {
    title: "Contenido para marcas",
    description:
      "Campañas, series educativas y colaboraciones desarrolladas con rigor científico y transparencia.",
    href: "/colaboraciones",
    icon: "Sparkles"
  },
  {
    title: "Quiri",
    description: "Juego educativo gratuito de ciencia, conocimiento y pensamiento crítico.",
    href: "/quiri",
    icon: "Gamepad2"
  },
  {
    title: "Proyectos audiovisuales",
    description: "Videos, entrevistas, podcast y formatos digitales sobre ciencia y sociedad.",
    href: "/colaboraciones#proyectos-audiovisuales",
    icon: "Video"
  }
] as const;

export const collaborationServices = [
  {
    title: "Campañas en redes sociales",
    items: ["Reels", "Historias", "Carruseles", "Series temáticas", "Cobertura de eventos", "Lanzamientos"],
    icon: "Share2"
  },
  {
    title: "Series educativas patrocinadas",
    description:
      "Contenido desarrollado alrededor de un tema estratégico de la marca, manteniendo transparencia editorial y rigor científico.",
    items: [],
    icon: "BookOpen"
  },
  {
    title: "Proyectos audiovisuales",
    id: "proyectos-audiovisuales",
    items: [
      "Podcast",
      "Entrevistas",
      "Videos largos",
      "Contenido para canales corporativos",
      "Producciones especiales"
    ],
    icon: "Clapperboard"
  },
  {
    title: "Charlas y activaciones",
    items: [
      "Charlas corporativas",
      "Talleres",
      "Moderación de conversaciones",
      "Participación en eventos",
      "Activaciones educativas"
    ],
    icon: "Users"
  },
  {
    title: "Integraciones en Quiri",
    items: [
      "Eventos temáticos patrocinados",
      "Preguntas educativas",
      "Avatares y recompensas",
      "Campañas conjuntas con Física en 1 Minuto",
      "Reportes de participación"
    ],
    icon: "Puzzle"
  }
] as const;

export const collaborationMethod = [
  "Comprensión del objetivo",
  "Propuesta creativa",
  "Investigación y guion",
  "Producción",
  "Publicación",
  "Reporte de resultados"
] as const;

export const quiriFeatures = [
  "Preguntas de distintos niveles",
  "Eventos temáticos",
  "Ranking online",
  "Desafíos entre amigos",
  "Avatares y recompensas",
  "Modo de preguntas tipo feed",
  "Contenido gratuito",
  "Comunidad en crecimiento"
] as const;
