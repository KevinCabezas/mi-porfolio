import { Icon } from "@iconify/react";
import type { TSkillCard } from "../types/skylls";

export default function CardSkill({ title, icon, color }: TSkillCard) {

  return (
    <div className="group lg:h-30 lg:w-30 h-25 w-25 dark:bg-black/10 dark:border-gray-200/20 bg-white border flex flex-col items-center justify-center  border-gray-200  hover:border-sky-300 hover:shadow-sm rounded-xl p-5 2xl:p-7 lg:flex  gap-4 2xl:gap-6 transition-all duration-200">
      <Icon icon={icon} className={`${color} text-3xl`} />
      <span className="font-semibold text-gray-700 text-sm lg:text-base dark:text-gray-200 whitespace-nowrap">{title}</span>
    </div>
  )
}