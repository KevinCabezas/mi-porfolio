// import { Link } from "react-router-dom"
import { Icon } from "@iconify/react";
import type { Props } from "../../types/projects";
export default function CardProyect({ title, icon, description, stack, frontpage, onOpen}: Props) {

  // const handlerModal = () => {
  //   console.log('hola')
  // }
  return ( 
    <div
      onClick={onOpen}
      className="relative bg-white dark:bg-black/10 border dark:border-gray-200/20 border-gray-200 dark:hover:border-sky-300/50 hover:border-sky-300 rounded-xl overflow-hidden flex flex-col transition-all duration-300 group cursor-pointer min-h-55">

      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        // style={{ backgroundImage:"url('https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/hero.webp')"}}
        style={{ backgroundImage: `url(${frontpage})`, }}
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Contenido */}
      <div className="relative z-10 p-5 2xl:p-8 flex flex-col gap-4 flex-1">

        <div className="flex items-start justify-between  gap-3">

          {/* Icono principal */}
          <div className="w-10 h-10 2xl:w-12 2xl:h-12 flex items-center justify-center bg-sky-50 border border-transparent group-hover:bg-sky-500/30 group-hover:border-sky-400/50 rounded-full transition-all duration-300 shrink-0">
            <Icon
              icon={icon}
              className="text-sky-600 group-hover:text-sky-300 text-lg 2xl:text-2xl transition-colors duration-300"
            />
          </div>

          {/* Icono externo */}
          <div className="w-8 h-8 flex 2xl:w-10 2xl:h-10 items-center justify-center text-gray-400 dark:text-gray-300 group-hover:text-sky-300 group-hover:bg-white/10 rounded-full transition-colors cursor-pointer">
            <Icon icon="ri-external-link-line" className="text-sm 2xl:text-lg" />
          </div>
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-1.5 flex-1 2xl:mb-10">
          <h3 className="text-sm 2xl:text-xl font-bold dark:text-gray-200 text-gray-900 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-200 text-xs 2xl:text-base leading-relaxed transition-colors duration-300">
            {description}
          </p>
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech, index) => (
            <span
              key={index}
              className="text-xs 2xl:text-base dark:bg-white/10 bg-sky-50 group-hover:bg-sky-500/30 group-hover:text-white dark:text-gray-200 text-gray-600 px-2.5 py-1 rounded-full font-medium transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}