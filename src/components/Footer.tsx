import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export default function Footer() {
  const secciones = [
    { icono: "iconamoon:profile-fill", titulo: "Inicio", path: "/", },
    { icono: "iconamoon:profile-fill", titulo: "Sobre mí", path: "about", },
    { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "Proyectos", path: "proyectos", },
    { icono: "flowbite:brain-solid", titulo: "Habilidades", path: "habilidades", },
    { icono: "tabler:briefcase-filled", titulo: "Historial", path: "historial", },
    { icono: "tabler:school-filled", titulo: "Formación", path: "estudios", },
    // { icono: "famicons:call", titulo: "CONTACTO", path: "contacto", },

  ];
  return (
    <footer className="bg-black/90 text-gray-300 mt-auto border-t border-sky-400/20">
      <div className="px-4 lg:px-16 pt-12 pb-8 2xl:px-22">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-10 mb-10">

          {/* Información personal */}
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="text-white font-bold text-lg 2xl:text-2xl tracking-tight">
                Kevin <span className="text-sky-400">Cabezas</span> Laura
              </h2>
              <p className="text-gray-300 text-sm 2xl:text-lg mt-1">
                Desarrollador Full Stack Junior
              </p>
            </div>

            <p className="text-gray-400 text-sm 2xl:text-lg leading-relaxed">
              Apasionado por crear aplicaciones web modernas, funcionales y con buena experiencia de usuario.
            </p>

            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="LinkedIn"
                className="w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center bg-gray-800 hover:bg-sky-400 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Icon icon="mdi:linkedin" className="text-xl 2xl:text-2xl " />

              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="GitHub"
                className="w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center bg-gray-800 hover:bg-sky-400 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Icon icon="mdi:github" className="text-xl 2xl:text-2xl" />
              </a>

              <a
                href="mailto:kevin@example.com"
                aria-label="Email"
                className="w-9 h-9 2xl:w-12 2xl:h-12 flex items-center justify-center bg-gray-800 hover:bg-sky-400 text-gray-400 hover:text-white rounded-full transition-colors"
              >
                <Icon icon="mdi:email-outline" className="text-xl 2xl:text-2xl" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-sm 2xl:text-lg uppercase tracking-wider mb-1">
              Navegación
            </h3>

            {secciones.map((secc, i) => (
              <Link
                key={i}
                to={secc.path}
                className="text-gray-400 hover:text-sky-400 text-sm 2xl:text-lg transition-colors w-fit"
              >
                {secc.titulo}
              </Link>
            ))}
          
          </div>

          {/* Contacto */}
          <div className="flex flex-col  gap-3">
            <h3 className="text-white font-semibold text-sm 2xl:text-lg uppercase tracking-wider mb-1">
              Contacto
            </h3>

            <div className="flex items-center gap-2.5 text-sm 2xl:text-lg text-gray-400">
              <Icon icon="ri:mail-line" className="text-sky-400 text-lg" />
              <a href="mailto:kevin@example.com" className="hover:text-sky-400 transition-colors">
                kevin@example.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-sm 2xl:text-lg text-gray-400">
              <Icon icon="ri:phone-line" className="text-sky-400 text-lg" />
              <span>+34 600 000 000</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm 2xl:text-lg text-gray-400">
              <Icon icon="ri:map-pin-line" className="text-sky-400 text-lg" />
              <span>España</span>
            </div>

            <div className="mt-2">
              <a
                href="/contacto"
                className="inline-flex items-center gap-1.5 px-4 py-2  bg-sky-400/50 hover:bg-sky-400 text-white 2xl:text-lg text-sm font-medium rounded-full transition-colors"
              >
                {/* <i className="ri-send-plane-line text-sm 2xl:text-lg"></i> */}
                Enviar mensaje
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-sky-400/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs 2xl:text-base">
            © 2026 Kevin Cabezas Laura - Todos los derechos reservados
          </p>
          <p className="text-gray-500 text-xs 2xl:text-base">
            Desarrollado con React - TypeScript - Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
} 