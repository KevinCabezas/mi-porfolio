import { t } from "i18next";
import { Icon } from "@iconify/react";


export default function ProfileSection() {

  return (
    <div className="pt-16">
      {/* Portada */}
      <div className="relative w-full h-65  md:h-90 bg-gray-300 overflow-hidden">
        <img
          alt="Portada"
          className="w-full h-full object-cover object-center"
          src="https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/image_e150e9b5.webp"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Card principal */}
      <div className="bg-white dark:bg-black/10 ">
        <div className=" bg-whit px-4 lg:px-16 2xl:px-22 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 pb-4">

            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                alt="Kevin Cabezas Laura"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white dark:border-black/0 shadow-md"
                src="https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/image_cb56ee4c.webp"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-1">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-200">
                Kevin Cabezas Laura
              </h1>
              <p className="text-gray-500 dark:text-gray-300 text-sm mt-0.5">
                {t("job_title")} · Argentina
              </p>

            </div>

            {/* Botones */}
            <div className="flex items-center gap-2 pb-1">
              <a
                href="/pdf/CV_KEVIN_CABEZAS.pdf" download
                className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                <Icon icon={"ep:document"} className="text-xl"></Icon>
                {t("cv_download")}
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/kevin-cabezas-8b8a472a8"
                className="flex items-center gap-1.5 px-4 py-2 dark:hover:text-gray-700 dark:text-gray-200 dark:bg-black/10 bg-gray-100 dark:border dark:border-gray-200/20 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                <Icon icon={"circum:linkedin"} className="text-xl"></Icon>
                Echar un vistaso
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}