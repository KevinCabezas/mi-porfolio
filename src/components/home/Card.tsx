import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { useTranslation } from 'react-i18next';

type CardProps = {
  icono: string;
  titulo: string;
  path: string;
  boton: string;
};

export default function Card({ icono, titulo, path, boton }: CardProps) {
  // const { t } = useTranslation();
  return (
    <Link
      to={path}
      className="group dark:bg-black/10 dark:border-gray-200/20 bg-white border grid  border-gray-200  hover:border-sky-300 hover:shadow-sm rounded-xl p-5 2xl:p-7 lg:flex items-start gap-4 2xl:gap-6 transition-all duration-200"
    >
      {/* Icono */}
      <div className="w-10 h-10 2xl:h-14 2xl:w-14 flex items-center justify-center bg-sky-50 group-hover:bg-sky-100 rounded-full transition-all shrink-0">
        <Icon icon={icono} className="text-sky-600 text-lg 2xl:text-2xl" />
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-sm 2xl:text-lg uppercase font-semibold dark:text-gray-200 text-gray-900 group-hover:text-sky-600 transition-all">
          {titulo}
        </span>

        <span className="text-xs 2xl:text-base dark:text-gray-400 text-gray-500">
          {boton}
        </span>
      </div>

      {/* Flecha */}
      <div className="ml-auto text-gray-300 group-hover:text-sky-500 transition-all">
        <Icon icon="mdi:arrow-right" className="text-sm 2xl:text-lg" />
      </div>
    </Link>
  );
}