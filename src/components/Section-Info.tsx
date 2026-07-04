import { Icon } from "@iconify/react";
import { t } from "i18next";


export default function InfoPage() {


  return (
    <section className="py-5 px-4 lg:px-16 2xl:px-22 ">
      <div className=" gap-10 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2" >
        <div className=" p-5 w-full 2xl:w-fit bg-white border border-gray-200 rounded-xl dark:bg-black/10 dark:border-gray-200/20 ">
          <div className="border-b space-y-2 pb-5 border-gray-200 dark:border-gray-200/20">
            <h3 className="font-semibold pb-3 dark:text-gray-200 text-gray-700 ">{t("info_title")}</h3>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                <Icon icon={"ri-briefcase-line"} className="text-sky-500"></Icon>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t("job_title")}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                <Icon icon={"ri-graduation-cap-line"} className="text-sky-500"></Icon>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{t("degree_title")}</span>
            </div>
          </div>
          <div className="pt-5 space-y-5">
            <h3 className="font-semibold dark:text-gray-200 text-gray-700">{t("personal_data")}</h3>
            <div className="grid grid-cols-2  grid-rows-3 space-y-2 space-x-10">
              <div className="flex flex-col w-full">
                <span className="text-data dark:text-gray-500">{t("full_name_label")}</span>
                <span className="text-label dark:text-gray-300">Kevin Cabezas</span>
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-data dark:text-gray-500">{t("residence_label")}</span>
                <span className="text-label dark:text-gray-300">Argentina</span>
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-data dark:text-gray-500">{t("nationality_label")}</span>
                <span className="text-label dark:text-gray-300">Bolivia</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-data dark:text-gray-500">{t("languages_label")}</span>
                <span className="text-label dark:text-gray-300">{t("languages_value")}</span>
              </div>
              <div className="flex flex-col w-full">
                <span className="text-data dark:text-gray-500">{t("work_mode_label")}</span>
                <span className="text-label dark:text-gray-300">{t("work_mode_value")}</span>
              </div>

            </div>
          </div>
        </div>
        <div className="rounded-xl flex-1 gap-5 flex flex-col p-5 border bg-white  border-gray-200 dark:bg-black/10 dark:border-gray-200/20 ">
          <h3 className="font-semibold dark:text-gray-200 text-gray-700">{t("about_title")}</h3>
          <p className="max-w-prse text-justif leading-relaxed text-sm text-gray-500 dark:text-gray-400">
            {t("about_description")}
          </p>
        </div>
      </div>
    </section>
  )
}