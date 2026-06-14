import { Icon } from "@iconify/react";


export default function CardContact() {


  return (
    <div className="lg:w-1/2 2xl:w-1/2 w-full bg-white transition-all duration-200 dark:bg-black/10 border dark:border-gray-200/20 border-gray-200 rounded-xl p-6 flex flex-col gap-4">
      <div>

        <h3 className="text-sm font-bold text-gray-900 mb-1">¡Hablemos!</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Estoy disponible para proyectos freelance, colaboraciones o nuevas  oportunidades laborales. No dudes en escribirme.</p>
      </div>
      <div className="flex flex-col gap-3 border-t transition-all duration-200 border-gray-100 dark:border-gray-200/20 pt-4">
        <div className="flex items-center gap-3 bg-white dark:bg-black/0 transition-all duration-200">
          <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
            <Icon icon={"ri-mail-line"} className="text-sky-600 text-sm" ></Icon>
          </div>
          <div className="flex flex-col ">
            <span className="text-xs text-gray-400 ">Email</span>
            <span className="text-sm text-gray-700 dark:text-gray-300 font-medium hover:text-sky-600 transition-all duration-200 cursor-pointer truncate block">cabezaslaurakevin@gmail.com</span>
          </div>
        </div>
        <div className="flex bg-white  dark:bg-black/10 transition-all duration-200 items-center gap-3 ">
          <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
            <Icon icon={"ri-phone-line"} className="text-sky-600 text-sm"></Icon>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Teléfono</span>
            <span className="text-sm text-gray-700 font-medium hover:text-sky-600 transition-all duration-200 cursor-pointer truncate block">+549 1132179663</span></div>
        </div>
        <div className="flex bg-white  dark:bg-black/10 items-center gap-3 transition-all duration-200 ">
          <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
            <Icon icon={"ri-linkedin-fill"} className="text-sky-600 text-sm"></Icon>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">LinkedIn</span>
            <span className="text-sm text-gray-700 font-medium hover:text-sky-600 transition-all duration-200 cursor-pointer truncate block">sdfsdf</span>
          </div>
        </div>
        <div className="flex bg-white  dark:bg-black/10 items-center gap-3 transition-all duration-200">
          <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
            <Icon icon={"ri-map-pin-line"} className="text-sky-600 text-sm"></Icon>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-400">Ubicación</span>
            <span className="text-sm text-gray-700 font-medium hover:text-sky-600 transition-all duration-200 cursor-pointer truncate block">Argentina</span></div>
        </div>
      </div>
    </div>
  )
}