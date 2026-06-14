
import { Icon } from "@iconify/react";

export default function Estudios() {

  return (
    <main className="flex-1 min-h-screen dark:bg-black/90 px-4 lg:px-16 2xl:px-22 pt-24 pb-10 2xl:pb-16 duration-300 transition-all  2xl:pt-34">
      <div className="mb-6 2xl:mb-8 ">
        <h2 className="text-2xl 2xl:text-4xl font-semibold  dark:text-gray-200 text-gray-900">Formación</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-xl mt-1 2xl:mt-2">Aplicaciones y trabajos desarrollados</p>
      </div>
      <div className="w-full">

        <div className="bg-white dark:bg-black/10 border dark:border-gray-200/20 border-gray-200 rounded-xl p-6 flex flex-col lg:flex-row gap-5">
          <div className="shrink-0 lg:w-40 flex flex-row lg:flex-col gap-3 items-start">
            <div className="w-10 h-10 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
              <Icon icon={"ri-computer-line"} className=" text-sky-600 text-base"></Icon>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">2020 - 2022</span>
              <span className="text-xs dark:bg-white/10 bg-sky-50 dark:text-gray-200 text-gray-600 px-2 py-0.5 rounded-full font-medium w-fit">Formación Profesional</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div>
              <h3 className="text-sm font-bold dark:text-gray-200 text-gray-900">Técnico Superior en Sistemas Microinformáticos y Redes</h3>
              <p className="text-sky-600 dark:text-sky-400 font-medium text-sm">Instituto de Formación Profesional</p>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Formación en administración de sistemas, redes informáticas, mantenimiento de equipos y soporte técnico.</p>
          </div>
        </div>
      </div>
    </main>
  )
}