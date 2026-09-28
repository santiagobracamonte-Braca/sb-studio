/* ============================================================================
 * SB STUDIO — PANEL DE CONFIGURACIÓN CENTRAL
 * ----------------------------------------------------------------------------
 * Este es el ÚNICO archivo que necesitas editar para personalizar el sitio.
 * Cambia aquí tus datos y todo el sitio se actualizará automáticamente.
 *
 * 👉 Busca los textos entre [CORCHETES] o "[COMPLETAR ...]" y reemplázalos.
 * ==========================================================================*/

import type { ComponentType } from "react";
import {
  Code2,
  Database,
  LifeBuoy,
  Palette,
  GraduationCap,
  Dumbbell,
  Globe,
  Server,
  Boxes,
  Cpu,
  MessageSquare,
  Layers,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/* 1. INFORMACIÓN PERSONAL / MARCA                                            */
/* -------------------------------------------------------------------------- */
export const site = {
  brandName: "SB Studio",
  fullName: "Santiago Bracamonte Suárez",
  role: "Desarrollador de Software & Soluciones Digitales",
  // Se usa en <title>, dominio, etc. Cambia cuando tengas dominio propio.
  domain: "https://santiagobracamonte.com", // [CAMBIAR POR TU DOMINIO REAL]
  location: "Caucasia, Antioquia, Colombia",
  // Foto profesional opcional. Coloca la imagen en /public y pon la ruta aquí,
  // por ejemplo "/santiago.jpg". Déjalo vacío para mostrar un avatar con iniciales.
  photo: "", // [AGREGAR FOTO: "/santiago.jpg"]
  // Descripción corta para SEO y footer:
  tagline:
    "Desarrollo web, software, bases de datos y asesoría tecnológica para llevar tus ideas a la realidad.",
} as const;

/* -------------------------------------------------------------------------- */
/* 2. CONTACTO — ⚠️ COMPLETA ESTOS DATOS                                       */
/* -------------------------------------------------------------------------- */
export const contact = {
  // ⚠️ Número de WhatsApp en formato internacional SIN "+", SIN espacios.
  //    Colombia = 57. Ejemplo: "573001234567". Déjalo vacío para ocultar WhatsApp.
  whatsapp: "", // [COLOCAR NÚMERO DE WHATSAPP AQUÍ, ej: "573001234567"]

  // ⚠️ Correo de contacto:
  email: "", // [AGREGAR CORREO, ej: "santiago@ejemplo.com"]
} as const;

/* -------------------------------------------------------------------------- */
/* 3. REDES SOCIALES                                                          */
/* Deja la URL vacía ("") para OCULTAR automáticamente ese icono.             */
/* -------------------------------------------------------------------------- */
export const socials = {
  instagram: "", // [AGREGAR, ej: "https://instagram.com/tuusuario"]
  facebook: "", // [AGREGAR]
  tiktok: "", // [AGREGAR]
  github: "", // [AGREGAR, ej: "https://github.com/tuusuario"]
  linkedin: "", // [AGREGAR]
} as const;

/* -------------------------------------------------------------------------- */
/* 4. FORMULARIO / BACKEND                                                    */
/* -------------------------------------------------------------------------- */
export const forms = {
  /**
   * Endpoint para recibir los formularios. Opciones recomendadas (sin backend):
   *  - Formspree:  https://formspree.io  →  "https://formspree.io/f/TU_ID"
   *  - Web3Forms:  https://web3forms.com →  "https://api.web3forms.com/submit"
   *  - Getform / Basin / tu propio backend / webhook (Zapier, Make, n8n)
   *
   * Mientras esté vacío, el formulario funciona en "modo demostración":
   * valida los datos y muestra el mensaje de éxito, pero NO envía nada.
   * Pega tu endpoint aquí para activar el envío real.
   */
  endpoint: "", // [PEGAR ENDPOINT DEL FORMULARIO]

  /**
   * Solo para Web3Forms: pega tu Access Key aquí.
   * (No es una contraseña secreta; es una key pública de Web3Forms.)
   */
  web3formsAccessKey: "", // [SOLO SI USAS WEB3FORMS]
} as const;

/* -------------------------------------------------------------------------- */
/* 5. ANALÍTICA (opcional)                                                    */
/* -------------------------------------------------------------------------- */
export const analytics = {
  googleAnalyticsId: "", // [GOOGLE_ANALYTICS_ID] ej: "G-XXXXXXX"
  metaPixelId: "", // [META_PIXEL_ID]
} as const;

/* -------------------------------------------------------------------------- */
/* 6. INDICADORES / STATS (edita libremente, no inventes cifras)              */
/* -------------------------------------------------------------------------- */
export const stats: { value: string; label: string }[] = [
  { value: "[AÑOS]", label: "Años de experiencia" },
  { value: "[N°]", label: "Proyectos realizados" },
  { value: "[N°]", label: "Clientes" },
  { value: "6+", label: "Áreas de servicio" },
];

/* -------------------------------------------------------------------------- */
/* 7. TECNOLOGÍAS (herramientas con las que tienes experiencia/conocimiento)  */
/* -------------------------------------------------------------------------- */
export const technologies: string[] = [
  "Java",
  "Spring Boot",
  "MySQL",
  "SQL",
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "VS Code",
  "NetBeans",
  "Maven",
  "Hibernate",
  "Arduino",
  "ESP32",
  "MongoDB",
  "MongoDB Atlas",
  "MATLAB",
  "JFLAP",
];

/* -------------------------------------------------------------------------- */
/* 8. SERVICIOS TECNOLÓGICOS                                                  */
/* -------------------------------------------------------------------------- */
export type Service = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  solves: string;
  includes: string[];
  ctaLabel: string;
  waMessage: string; // Mensaje precargado de WhatsApp
};

export const services: Service[] = [
  {
    id: "desarrollo-web",
    icon: Globe,
    title: "Desarrollo web",
    description:
      "Sitios web modernos, rápidos y adaptados a móviles para profesionales, emprendimientos y negocios.",
    solves:
      "Tu negocio no aparece en internet o tu página actual se ve desactualizada y no genera clientes.",
    includes: [
      "Páginas web y landing pages",
      "Portafolios profesionales",
      "Sitios para negocios",
      "Diseño responsive y optimizado",
    ],
    ctaLabel: "Quiero una página web",
    waMessage:
      "Hola Santiago, vi tu página web y estoy interesado/a en desarrollo web. Me gustaría solicitar información.",
  },
  {
    id: "software",
    icon: Code2,
    title: "Desarrollo de software",
    description:
      "Aplicaciones y sistemas web a la medida, con funcionalidades personalizadas para tu operación.",
    solves:
      "Tus procesos son manuales o dependes de hojas de cálculo desordenadas.",
    includes: [
      "Aplicaciones y sistemas web",
      "Funcionalidades personalizadas",
      "APIs, backend y frontend",
      "Mantenimiento y actualización",
    ],
    ctaLabel: "Tengo un proyecto de software",
    waMessage:
      "Hola Santiago, vi tu página web y tengo un proyecto de software. Me gustaría solicitar información.",
  },
  {
    id: "bases-de-datos",
    icon: Database,
    title: "Bases de datos",
    description:
      "Diseño, modelado y organización de datos para que tu información sea confiable y fácil de consultar.",
    solves:
      "Tus datos están desorganizados, duplicados o no puedes obtener la información que necesitas.",
    includes: [
      "Diseño y modelado (entidad-relación)",
      "MySQL y MongoDB",
      "Consultas, relaciones y normalización",
      "Optimización básica y migración",
    ],
    ctaLabel: "Necesito organizar mis datos",
    waMessage:
      "Hola Santiago, vi tu página web y necesito ayuda con bases de datos. Me gustaría solicitar información.",
  },
  {
    id: "soporte",
    icon: LifeBuoy,
    title: "Soporte y asesoría tecnológica",
    description:
      "Acompañamiento para configurar entornos, resolver errores y tomar mejores decisiones tecnológicas.",
    solves:
      "No sabes qué herramientas usar o pierdes tiempo resolviendo problemas técnicos.",
    includes: [
      "Configuración de software y entornos",
      "Solución de errores",
      "Git, GitHub y bases de datos",
      "Orientación para proyectos",
    ],
    ctaLabel: "Necesito asesoría",
    waMessage:
      "Hola Santiago, vi tu página web y necesito asesoría tecnológica. Me gustaría solicitar información.",
  },
  {
    id: "diseno-digital",
    icon: Palette,
    title: "Diseño y soluciones digitales",
    description:
      "Presencia digital para tu emprendimiento: landing pages, catálogos, formularios e integración con WhatsApp.",
    solves:
      "Quieres empezar a vender en línea pero no sabes por dónde comenzar.",
    includes: [
      "Landing pages y catálogos digitales",
      "Formularios de contacto",
      "Integración de WhatsApp",
      "Diseño de interfaces",
    ],
    ctaLabel: "Quiero digitalizar mi negocio",
    waMessage:
      "Hola Santiago, vi tu página web y quiero digitalizar mi emprendimiento. Me gustaría solicitar información.",
  },
  {
    id: "formacion",
    icon: GraduationCap,
    title: "Formación y asesorías",
    description:
      "Tutorías y acompañamiento académico en programación, bases de datos, informática y sistemas.",
    solves:
      "Estás aprendiendo a programar o tienes un proyecto académico y necesitas orientación clara.",
    includes: [
      "Tutorías de programación",
      "Asesorías de bases de datos",
      "Clases de informática y sistemas",
      "Acompañamiento en proyectos académicos",
    ],
    ctaLabel: "Quiero una tutoría",
    waMessage:
      "Hola Santiago, vi tu página web y me interesa una tutoría/asesoría académica. Me gustaría solicitar información.",
  },
];

/**
 * Nota académica: la formación se ofrece como asesoría, tutoría y
 * acompañamiento — no como realización de trabajos o exámenes por el estudiante.
 */
export const academicNote =
  "Ofrezco asesoría, tutoría y acompañamiento académico para que aprendas y avances en tus proyectos. No realizo trabajos ni exámenes en nombre de terceros.";

/* -------------------------------------------------------------------------- */
/* 9. FORMACIÓN DEPORTIVA (área independiente)                                */
/* -------------------------------------------------------------------------- */
export const sports = {
  icon: Dumbbell,
  title: "Formación deportiva",
  description:
    "Además de la tecnología, ofrezco formación deportiva y entrenamiento de fútbol con enfoque en disciplina y aprendizaje.",
  items: [
    "Entrenamiento de fútbol",
    "Formación para niños",
    "Acompañamiento deportivo",
    "Planificación de actividades deportivas",
  ],
  ctaLabel: "Consultar formación deportiva",
  waMessage:
    "Hola Santiago, vi tu página web y me interesa la formación deportiva. Me gustaría solicitar información.",
};

/* -------------------------------------------------------------------------- */
/* 10. "¿QUÉ PUEDO HACER POR TI?" (problemas reales)                          */
/* -------------------------------------------------------------------------- */
export const problems: { icon: ComponentType<{ className?: string }>; text: string }[] = [
  { icon: Globe, text: "¿Necesitas una página web para tu negocio?" },
  { icon: Layers, text: "¿Quieres digitalizar tu emprendimiento?" },
  { icon: Database, text: "¿Necesitas organizar una base de datos?" },
  { icon: Code2, text: "¿Tienes un proyecto de software?" },
  { icon: LifeBuoy, text: "¿Necesitas asesoría tecnológica?" },
  { icon: MessageSquare, text: "¿Quieres mejorar tu presencia digital?" },
];

/* -------------------------------------------------------------------------- */
/* 11. PORTAFOLIO — ⚠️ NO inventes proyectos. Reemplaza los placeholders.      */
/* -------------------------------------------------------------------------- */
export type ProjectCategory =
  | "Desarrollo web"
  | "Software"
  | "Bases de datos"
  | "IoT"
  | "Académico"
  | "Otros";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tech: string[];
  problem: string;
  result: string;
  image?: string; // ruta en /public, ej: "/proyectos/uno.jpg"
  liveUrl?: string;
  githubUrl?: string;
  placeholder?: boolean; // true = tarjeta de ejemplo editable
};

export const projects: Project[] = [
  {
    id: "proyecto-1",
    title: "[PROYECTO REAL — AGREGAR INFORMACIÓN]",
    category: "Desarrollo web",
    description: "[Describe brevemente el proyecto y qué construiste.]",
    tech: ["HTML", "CSS", "JavaScript"],
    problem: "[¿Qué necesidad resolvía?]",
    result: "[¿Qué resultado se logró?]",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
  {
    id: "proyecto-2",
    title: "[PROYECTO REAL — AGREGAR INFORMACIÓN]",
    category: "Software",
    description: "[Describe brevemente el proyecto y qué construiste.]",
    tech: ["Java", "Spring Boot", "MySQL"],
    problem: "[¿Qué necesidad resolvía?]",
    result: "[¿Qué resultado se logró?]",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
  {
    id: "proyecto-3",
    title: "[PROYECTO REAL — AGREGAR INFORMACIÓN]",
    category: "IoT",
    description: "[Describe brevemente el proyecto y qué construiste.]",
    tech: ["Arduino", "ESP32"],
    problem: "[¿Qué necesidad resolvía?]",
    result: "[¿Qué resultado se logró?]",
    liveUrl: "",
    githubUrl: "",
    placeholder: true,
  },
];

export const portfolioFilters: (ProjectCategory | "Todos")[] = [
  "Todos",
  "Desarrollo web",
  "Software",
  "Bases de datos",
  "IoT",
  "Académico",
  "Otros",
];

/* -------------------------------------------------------------------------- */
/* 12. PROCESO DE TRABAJO                                                     */
/* -------------------------------------------------------------------------- */
export const process: { icon: ComponentType<{ className?: string }>; title: string; text: string }[] = [
  { icon: MessageSquare, title: "Me cuentas qué necesitas", text: "Conversamos sobre tu idea, problema u objetivo." },
  { icon: Layers, title: "Analizamos el problema", text: "Reviso el alcance y defino la mejor solución posible." },
  { icon: Boxes, title: "Te presento una propuesta", text: "Recibes una propuesta clara con tiempos y condiciones." },
  { icon: Code2, title: "Desarrollo la solución", text: "Construyo la solución con seguimiento durante el proceso." },
  { icon: Server, title: "Entrego y doy soporte", text: "Entrego el resultado y acompaño con soporte posterior." },
];

/* -------------------------------------------------------------------------- */
/* 13. PLANES / PAQUETES — ⚠️ NO inventes precios. Ajusta cuando los definas.  */
/* -------------------------------------------------------------------------- */
export type Plan = {
  id: string;
  name: string;
  audience: string;
  price: string;
  features: string[];
  featured?: boolean;
  ctaLabel: string;
  waMessage: string;
};

export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    audience: "Para personas que necesitan una solución sencilla.",
    price: "[CONSULTAR]",
    features: ["Landing page de una sección", "Diseño responsive", "Integración de WhatsApp", "Entrega lista para publicar"],
    ctaLabel: "Solicitar cotización",
    waMessage: "Hola Santiago, me interesa el plan Básico. Me gustaría solicitar una cotización.",
  },
  {
    id: "profesional",
    name: "Profesional",
    audience: "Para negocios que necesitan una solución más completa.",
    price: "[CONSULTAR]",
    features: ["Sitio web de varias secciones", "Formulario de contacto", "SEO básico", "Optimización de rendimiento", "Soporte inicial"],
    featured: true,
    ctaLabel: "Solicitar cotización",
    waMessage: "Hola Santiago, me interesa el plan Profesional. Me gustaría solicitar una cotización.",
  },
  {
    id: "personalizado",
    name: "Personalizado",
    audience: "Para proyectos específicos de software o sistemas.",
    price: "Cotización personalizada",
    features: ["Software o sistema a la medida", "Bases de datos", "Funcionalidades personalizadas", "Alcance definido contigo"],
    ctaLabel: "Solicitar cotización",
    waMessage: "Hola Santiago, tengo un proyecto personalizado. Me gustaría solicitar una cotización.",
  },
];

// Servicio recurrente (monetización mensual)
export const maintenancePlan = {
  name: "Mantenimiento Web",
  description: "Actualizaciones, cambios de contenido, soporte y mantenimiento de tu sitio.",
  price: "[PRECIO MENSUAL]",
  ctaLabel: "Contratar mantenimiento",
  waMessage: "Hola Santiago, me interesa el plan de Mantenimiento Web mensual. Me gustaría solicitar información.",
};

/* -------------------------------------------------------------------------- */
/* 14. OPCIONES DE SERVICIO PARA FORMULARIOS                                  */
/* -------------------------------------------------------------------------- */
export const serviceOptions: string[] = [
  "Desarrollo web",
  "Desarrollo de software",
  "Bases de datos",
  "Soporte y asesoría tecnológica",
  "Diseño y soluciones digitales",
  "Formación y asesorías",
  "Formación deportiva",
  "Otro",
];

export const budgetOptions: string[] = [
  "Aún no lo sé",
  "Menos de $500.000 COP",
  "$500.000 – $1.500.000 COP",
  "$1.500.000 – $3.000.000 COP",
  "Más de $3.000.000 COP",
];

export const contactMethodOptions: string[] = ["WhatsApp", "Correo electrónico", "Llamada"];

/* -------------------------------------------------------------------------- */
/* 15. TESTIMONIOS — ⚠️ NO inventes. Agrega solo testimonios reales.           */
/* -------------------------------------------------------------------------- */
export type Testimonial = {
  name: string;
  service: string;
  text: string;
  photo?: string;
  placeholder?: boolean;
};

export const testimonials: Testimonial[] = [
  { name: "[AGREGAR NOMBRE]", service: "[Servicio contratado]", text: "[AGREGAR TESTIMONIO REAL]", placeholder: true },
  { name: "[AGREGAR NOMBRE]", service: "[Servicio contratado]", text: "[AGREGAR TESTIMONIO REAL]", placeholder: true },
  { name: "[AGREGAR NOMBRE]", service: "[Servicio contratado]", text: "[AGREGAR TESTIMONIO REAL]", placeholder: true },
];

/* -------------------------------------------------------------------------- */
/* 16. PREGUNTAS FRECUENTES                                                   */
/* -------------------------------------------------------------------------- */
export const faqs: { q: string; a: string }[] = [
  {
    q: "¿Qué servicios ofreces?",
    a: "Desarrollo web y de software, diseño y organización de bases de datos, soporte y asesoría tecnológica, soluciones digitales, y formación/tutorías. También ofrezco formación deportiva de fútbol.",
  },
  {
    q: "¿Trabajas con personas y con negocios?",
    a: "Sí. Trabajo con personas, estudiantes, emprendedores, pequeñas empresas, negocios locales y organizaciones que necesiten soluciones tecnológicas, educativas o digitales.",
  },
  {
    q: "¿Puedes desarrollar una página web personalizada?",
    a: "Sí. Desarrollo páginas y sitios web a la medida de lo que necesitas, con diseño responsive y optimizado para celulares.",
  },
  {
    q: "¿Cuánto cuesta una página web?",
    a: "Depende del alcance y las funcionalidades. Cuéntame qué necesitas y te preparo una cotización personalizada, sin compromiso.",
  },
  {
    q: "¿Cuánto demora un proyecto?",
    a: "Varía según la complejidad. Después de conocer los detalles te doy un tiempo estimado dentro de la propuesta.",
  },
  {
    q: "¿Trabajas de manera remota?",
    a: "Sí, trabajo de forma remota. Estoy ubicado en Caucasia, Antioquia, y puedo atender proyectos desde otras ciudades.",
  },
  {
    q: "¿Cómo puedo solicitar una cotización?",
    a: "Puedes escribirme por WhatsApp o llenar el formulario de cotización de esta página con los detalles de tu proyecto.",
  },
  {
    q: "¿Ofreces mantenimiento?",
    a: "Sí. Ofrezco mantenimiento y actualización de sitios web, incluyendo un plan mensual para cambios y soporte continuo.",
  },
  {
    q: "¿Puedo contratar solamente una asesoría?",
    a: "Claro. Puedes contratar únicamente una asesoría o tutoría puntual, sin necesidad de un proyecto completo.",
  },
];

/* -------------------------------------------------------------------------- */
/* 17. NAVEGACIÓN                                                             */
/* -------------------------------------------------------------------------- */
export const navLinks: { label: string; href: string }[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Cómo trabajo", href: "#como-trabajo" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

/* -------------------------------------------------------------------------- */
/* 18. ICONO DE TECNOLOGÍA GENÉRICO (reutilizable)                            */
/* -------------------------------------------------------------------------- */
export const techIcon = Cpu;
