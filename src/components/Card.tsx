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
    <div className="bg-white flex flex-col items-center h-fit gap-5 p-5 rounded-lg shadow-md">
      <Icon icon={icono} className="text-[50px] text-gray-700 "></Icon>
      <span className="text-xl font-bold text-gray-700 ">{titulo}</span>

      <Link
        className="flex items-center justify-center font-semibold p-2.5 bg-orange-400/70 w-full rounded-lg text-white"
        to={path}
      >
        {boton}
      </Link>
    </div>
  );
}