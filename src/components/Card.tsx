import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

type CardProps = {
  icono: string;
  titulo: string;
  path: string;
  boton: string;
};

export default function Card({ icono, titulo, path, boton }: CardProps) {
  return (
    <Link
      to={path}
      className="group bg-white border border-gray-200 hover:border-sky-300 hover:shadow-sm rounded-xl p-5 flex items-start gap-4 transition-all duration-200"
    >
      {/* Icono */}
      <div className="w-10 h-10 flex items-center justify-center bg-sky-50 group-hover:bg-sky-100 rounded-lg transition-colors shrink-0">
        <Icon icon={icono} className="text-sky-600 text-lg" />
      </div>

      {/* Texto */}
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-sm font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
          {titulo}
        </span>

        <span className="text-xs text-gray-500">
          {boton}
        </span>
      </div>

      {/* Flecha */}
      <div className="ml-auto text-gray-300 group-hover:text-sky-500 transition-colors">
        <Icon icon="mdi:arrow-right" className="text-sm" />
      </div>
    </Link>
  );
}