import { Icon } from "@iconify/react";
import CardSkill from "../components/skills/Card-Skill";
import { languajesSkills } from "../data/skills";

export default function Habilidades() {


  return (
    <main className="flex flex-col min-h-screen dark:bg-black/90 px-4 lg:px-16 2xl:px-22 pt-24 pb-10 2xl:pb-16 duration-200 transition-all  2xl:pt-34">
      <div className="mb-6 2xl:mb-8 ">
        <h2 className="text-2xl 2xl:text-4xl font-semibold  dark:text-gray-200 text-gray-900">Habilidades</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-xl mt-1 2xl:mt-2">Tecnologías y herramientas que manejo</p>
      </div>

      <div className="space-y-5">

        {languajesSkills.map((e, i) => (

          <div key={i} className="space-y-5 pb-5 border-b dark:border-gray-200/20 border-gray-200">
            <div className="flex items-center gap-1">
              <div className="p-2 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                <Icon icon={e.icon} className=" text-sky-600 text-base"></Icon>
              </div>
              <h3 className="text-lg font-semibold dark:text-gray-200">{e.title}</h3>
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 duration-200 transition-all w-25 lg:w-30 -fit py-1 rounded-full gap-2 flex items-center justify-center">
              <span className="text-white text-xs lg:text-sm font-semibold">Saber más</span>
              <Icon icon={"maki:arrow"} className="text-white text-xs" />
            </button>
            <div className=" bg-ambe00  w-full grid grid-cols-3 lg:flex lg:flex-wrap gap-5">

              {e.secctions.map((s, i) => (
                <CardSkill key={i} title={s.title} icon={s.icon} color={s.color} />

              ))}
            </div>

          </div>
        ))}
      </div>

    </main>
  )
}