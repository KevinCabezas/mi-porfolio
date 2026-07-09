// import portada from "../assets/portada.png";
import { useTranslation } from 'react-i18next';

import { useTheme } from "../../service/theme.service";

export default function Portada() {
const { t } = useTranslation();

  const { theme } = useTheme();
  const heroImage =
    theme === "dark"
      ? "https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/night.webp"
      : "https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/hero.webp";
  return (
    <section className="relative flex-1 w-full flex items-end lg:items-center transition-all duration-200 lg:py-0 pb-8 pt-40 justify-start overflow-hidden">
      <img
        src={heroImage}
        alt="Hero background"
        // className="absolute inset-0  w-full h-full object-cover object-center "
        className={`absolute inset-0  w-full h-full object-cover object-center ${ theme === "dark" ? "pt-[4.5px]" : "pt-0"}`}
      />

      {/* Overlay oscuro */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/45 to-black/65"></div> */}

      {/* Contenido */}
      <div className="relative z-10 flex flex-col text-start gap-2 mx-4 lg:mx-16 2xl:mx-22">
        {/* <p className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">
          Disponible para trabajar
        </p> */}

        <h1 className="text-4xl md:text-5xl 2xl:text-7xl font-normal text-sky-300 lg:text-white tracking-tight leading-tight">
          Kevin Cabezas Laura
        </h1>

        <p className="lg:text-sky-300 text-white text-base lg:text-lg 2xl:text-2xl font-light ">
          {t("profile_title")}
        </p>

        <p className="text-gray-300 text-sm 2xl:text-lg leading-relaxed 2xl:max-w-xl mt-3 lg:max-w-md lg:flex hidden">
          {t("profile_description")}
        </p>
      </div>
    </section>
  );
}

