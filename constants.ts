import { Activity, ActivityCategory, PricingTier } from './types';

export const ACTIVITIES: Activity[] = [
  {
    id: '1',
    name: 'Esquí y Snowboard',
    category: ActivityCategory.SNOW,
    season: 'Dic - Abril',
    description: 'Clases técnicas, freeride y salidas guiadas en Sierra Nevada. Desde principiantes hasta perfeccionamiento.',
    image: 'https://picsum.photos/id/1036/400/300' 
  },
  {
    id: '2',
    name: 'Surf y Surfskate',
    category: ActivityCategory.WATER,
    season: 'Todo el Año',
    description: 'Cursos de iniciación y perfeccionamiento en la Costa Tropical. Incluye sesiones de surfskate para mejorar técnica.',
    image: 'https://picsum.photos/id/1041/400/300'
  },
  {
    id: '3',
    name: 'Barranquismo (Río Verde)',
    category: ActivityCategory.EARTH,
    season: 'Abril - Oct',
    description: 'Desciende el espectacular Río Verde. Saltos, toboganes y rápeles en aguas cristalinas.',
    image: 'https://picsum.photos/id/1039/400/300'
  },
  {
    id: '4',
    name: 'Parapente Biplaza',
    category: ActivityCategory.AIR,
    season: 'Todo el Año',
    description: 'Sobrevuela Cenes de la Vega y la Alhambra con pilotos certificados. Vídeo GoPro incluido.',
    image: 'https://picsum.photos/id/1015/400/300'
  },
  {
    id: '5',
    name: 'Kitesurf y Wing Foil',
    category: ActivityCategory.WATER,
    season: 'Con Viento',
    description: 'Aprovecha los vientos térmicos de la costa. Cursos privados y alquiler de material de última generación.',
    image: 'https://picsum.photos/id/1026/400/300'
  },
  {
    id: '6',
    name: 'Coasteering',
    category: ActivityCategory.WATER,
    season: 'Verano',
    description: 'Exploración costera, saltos al mar y escalada fácil. La aventura acuática más dinámica.',
    image: 'https://picsum.photos/id/1068/400/300'
  },
  {
    id: '7',
    name: 'Vía Ferrata',
    category: ActivityCategory.EARTH,
    season: 'Todo el Año',
    description: 'Rutas verticales equipadas (K3-K6) en Moclín y Los Vados. Adrenalina con total seguridad.',
    image: 'https://picsum.photos/id/1000/400/300'
  },
  {
    id: '8',
    name: 'Pack Urbano/Motor',
    category: ActivityCategory.EARTH,
    season: 'Todo el Año',
    description: 'Paintball, Karting y rutas en Quad/Buggy para grupos y despedidas. Diversión garantizada.',
    image: 'https://picsum.photos/id/1071/400/300'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Pack Bautismo",
    price: "45€",
    description: "Tu primera toma de contacto. Ideal para probar una nueva actividad.",
    recommended: false,
    features: [
      "Clase de Iniciación (2-3h)",
      "Material Técnico Completo",
      "Seguros RC y Accidentes",
      "Monitor Titulado",
      "Reportaje Fotográfico Básico"
    ]
  },
  {
    name: "Pack Multi-Aventura",
    price: "185€",
    description: "Combina Mar y Montaña en un fin de semana inolvidable.",
    recommended: true,
    features: [
      "2 Actividades a elegir (ej. Snow + Surf)",
      "Transporte desde Granada Centro",
      "Alojamiento 1 Noche",
      "Garantía Meteo (Plan B garantizado)",
      "Video Go-Pro del viaje"
    ]
  },
  {
    name: "Semana Pro Experience",
    price: "650€",
    description: "Progresión técnica intensiva de lunes a viernes.",
    recommended: false,
    features: [
      "Curso Técnico de 5 Días",
      "Alojamiento y Desayuno",
      "Videoanálisis y Corrección Técnica",
      "Transporte diario a spots",
      "Visita a taller de reparación",
      "Certificado de Nivel"
    ]
  }
];