import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Define tus traducciones directamente aquí
const resources = {
  en: {
    translation: {
      welcome: "Welcome to our app",
      change_theme: "Change theme",

      nav_home: "Home",
      nav_about: "About Me",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_history: "Work History",
      nav_education: "Education",
      nav_contact: "Contact",

      btn_about: "Who I am and what motivates me",
      btn_projects: "Projects and applications developed",
      btn_skills: "Technologies and tools I master",
      btn_history: "Work experience and career path",
      btn_education: "Studies and certifications obtained",
      btn_contact: "Let's talk about your next project",


      profile_title: "Junior Full Stack Developer - Higher Technician in Information Systems",
      profile_description: "Passionate about building modern and functional web applications. Seeking new challenges where I can continue growing as a developer.",
      cv_download: "Download CV",


      footer_navigation: "Navigation",
      footer_dev: "Developed with React - TypeScript - Tailwind CSS",
      footer_copy: "All rights reserved",
      send_message: "Send Message",
      footer_title: "Junior Full Stack Developer",
      footer_description: "Passionate about creating modern, functional web applications with a great user experience.",


      info_title: "Information",

      job_title: "Junior Full Stack Developer",
      degree_title: "Higher Technician in Information Systems",

      personal_data: "Personal Information",

      full_name_label: "FULL NAME",

      residence_label: "RESIDENCE",

      nationality_label: "NATIONALITY",

      languages_label: "LANGUAGES",
      languages_value: "Native Spanish - Basic English",

      work_mode_label: "WORK MODE",
      work_mode_value: "On-site / Remote",


      about_title: "Presentation",

      about_description:
        "I am a Junior Full Stack Developer with a Higher Technician degree in Information Systems. I am passionate about building modern, functional web applications with a great user experience. I have experience working with technologies on both the client and server sides. I consider myself a proactive person, always eager to learn and continuously improve. I enjoy working in teams and taking on new technological challenges that allow me to grow professionally.",
      contact_me: "Contact Me",


      comments_title: "Comments Wall",
      comments_count: "comments",

      comments_subtitle: "Share your opinion about this portfolio",

      name_placeholder: "Your name",
      comment_placeholder: "Write your comment...",

      publish_comment: "Post",
      comment: "Comment"
    }
  },

  es: {
    translation: {
      welcome: "Bienvenido a nuestra app",
      change_theme: "Cambiar tema",

      nav_home: "Inicio",
      nav_about: "Sobre mí",
      nav_projects: "Proyectos",
      nav_skills: "Habilidades",
      nav_history: "Historial",
      nav_education: "Formación",
      nav_contact: "Contacto",

      btn_about: "Quién soy y qué me motiva",
      btn_projects: "Trabajos y aplicaciones desarrolladas",
      btn_skills: "Tecnologías y herramientas que domino",
      btn_history: "Experiencia laboral y trayectoria",
      btn_education: "Estudios y certificaciones obtenidas",
      btn_contact: "Hablemos de tu próximo proyecto",

      profile_title: "Desarrollador Full Stack Junior - Técnico Superior en Sistemas",
      profile_description: "Apasionado por crear aplicaciones web modernas y funcionales. Busco nuevos retos donde seguir creciendo como desarrollador.",
      cv_download: "Descargar CV",

      footer_navigation: "Navegación",
      footer_dev: "Desarrollado con React - TypeScript - Tailwind CSS",
      footer_copy: "Todos los derechos reservados",
      send_message: "Enviar mensaje",
      footer_title: "Desarrollador Full Stack Junior",
      footer_description: "Apasionado por crear aplicaciones web modernas, funcionales y con buena experiencia de usuario.",



      info_title: "Información",

      job_title: "Desarrollador Full Stack Junior",
      degree_title: "Técnico Superior en Sistemas",

      personal_data: "Datos personales",

      full_name_label: "NOMBRE COMPLETO",

      residence_label: "RESIDENCIA",

      nationality_label: "NACIONALIDAD",

      languages_label: "IDIOMAS",
      languages_value: "Español Nativo - Inglés Básico",

      work_mode_label: "MODALIDAD",
      work_mode_value: "Presencial / Remoto",
      about_title: "Presentación",

      about_description:
        "Soy un Desarrollador Full Stack Junior con formación como Técnico Superior en Sistemas. Me apasiona crear aplicaciones web modernas, funcionales y con buena experiencia de usuario. Tengo experiencia trabajando con tecnologías tanto del lado del cliente como del servidor. Me caracterizo por ser una persona proactiva, con ganas de aprender y mejorar constantemente. Disfruto trabajar en equipo y enfrentar nuevos desafíos tecnológicos que me permitan crecer profesionalmente.",


      contact_me: "Contáctame",

      comments_title: "Muro de comentarios",
      comments_count: "comentarios",

      comments_subtitle: "Deja tu opinión sobre este portfolio",

      name_placeholder: "Tu nombre",
      comment_placeholder: "Escribe tu comentario...",

      publish_comment: "Publicar",
      comment: "Comentar",
    }
  }
};

i18n
  .use(LanguageDetector) // Detecta el idioma del navegador automáticamente
  .use(initReactI18next) // Pasa i18n a react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto si no detecta ninguno
    interpolation: {
      escapeValue: false // React ya protege contra ataques XSS
    }
  });

export default i18n;
