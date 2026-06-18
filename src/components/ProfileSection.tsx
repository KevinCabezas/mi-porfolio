import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormComentario from "./Form-Comentario";
import { useTranslation } from 'react-i18next';


export default function ProfileSection() {
  const { t } = useTranslation();

  const [secc, setSecc] = useState(true);


  return (
    <div className="pt-16">
      {/* Portada */}
      <div className="relative w-full h-65  md:h-90 bg-gray-300 overflow-hidden">
        <img
          alt="Portada"
          className="w-full h-full object-cover object-center"
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20professional%20developer%20workspace%20with%20code%20on%20screens%2C%20dark%20moody%20atmosphere%2C%20cinematic%20wide%20shot%2C%20deep%20shadows%2C%20amber%20and%20dark%20tones%2C%20ultra%20wide%20banner%20format%2C%20high%20quality%20digital%20art&width=1200&height=400&seq=cover-about-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Card principal */}
      <div className="bg-white ">
        <div className=" bg-whit px-4 lg:px-16 2xl:px-22 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 pb-4">

            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                alt="Kevin Cabezas Laura"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white shadow-md"
                src="https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/retrato.jpg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-1">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Kevin Cabezas Laura
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">
                {t("job_title")} · Argentina
              </p>

            </div>

            {/* Botones */}
            <div className="flex items-center gap-2 pb-1">
              <button
                className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                {t("cv_download")}
              </button>
              <Link to={"/contact"}

                className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                {t("contact_me")}
              </Link>
            </div>
          </div>
          <div className="flex px-3 font-semibold text-gray-500 text-sm gap-3 ">
            <button onClick={() => setSecc(true)} className={`bg-s border-b-2 px-2 ${secc ? "border-sky-400 text-sky-400" : "border-white"} pb-2`}>

              {t("info_title")}
            </button>
            <button onClick={() => setSecc(false)} className={`bg-s border-b-2 px-2 ${!secc ? "border-sky-400 text-sky-400" : "border-white"} pb-2`}>
              {t("comment")}
            </button>
          </div>

        </div>


        {secc &&
          <div className="bg-gray-100 py-5 px-4 lg:px-16 2xl:px-22 ">
            <div className=" gap-10 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2" >
              <div className=" p-5 w-full 2xl:w-fit bg-white border border-gray-200 rounded-xl ">
                <div className="border-b space-y-2 pb-5 border-gray-200">
                  <h3 className="font-semibold pb-3 ">{t("info_title")}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                      <Icon icon={"ri-briefcase-line"} className="text-sky-500"></Icon>
                    </div>
                    <span className="text-sm text-gray-700">{t("job_title")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                      <Icon icon={"ri-graduation-cap-line"} className="text-sky-500"></Icon>
                    </div>
                    <span className="text-sm text-gray-700">{t("degree_title")}</span>
                  </div>
                </div>
                <div className="pt-5 space-y-5">
                  <h3 className="font-semibold">{t("personal_data")}</h3>
                  <div className="grid grid-cols-2  grid-rows-3 space-y-2 space-x-10">
                    <div className="flex flex-col w-full">
                      <span className="text-data">{t("full_name_label")}</span>
                      <span className="text-label">Kevin Cabezas</span>
                    </div>
                    <div className="flex flex-col w-full ">
                      <span className="text-data">{t("residence_label")}</span>
                      <span className="text-label">Argentina</span>
                    </div>
                    <div className="flex flex-col w-full ">
                      <span className="text-data">{t("nationality_label")}</span>
                      <span className="text-label">Bolivia</span>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-data">{t("languages_label")}</span>
                      <span className="text-label">{t("languages_value")}</span>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-data">{t("work_mode_label")}</span>
                      <span className="text-label">{t("work_mode_value")}</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-xl flex-1 gap-5 flex flex-col p-5 border border-gray-200">
                <h3 className="font-semibold">{t("about_title")}</h3>
                <p className="max-w-prse text-justif leading-relaxed text-sm text-gray-700">
                  {t("about_description")}
                </p>
              </div>
            </div>
          </div>
        }
        {!secc &&
          <div className="bg-gray-100 flex items-center flex-col py-5 px-4 lg:px-16 2xl:px-22 ">
            <div className="p-5 bg-white border space-y-5 border-gray-200 rounded-xl w-full lg:w-1/2 2xl:w-1/2">
              <div className="flex items-center border-b border-gray-200 justify-between pb-5">
                <h3 className="flex items-center gap-1">
                  <Icon icon={"ri-chat-3-line"} className="text-sky-400"></Icon>
                  <span className="text-sm font-semibold">{t("comments_title")}</span>
                </h3>
                <span className="text-xs text-gray-400">
                  0 {t("comments_count")}
                </span>
              </div>
              <FormComentario />
            </div>
          </div>
        }
      </div>
    </div>
  );
}