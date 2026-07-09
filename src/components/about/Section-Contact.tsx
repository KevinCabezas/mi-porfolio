// import { Icon } from "@iconify/react";
import CardContact from "./Card-Contact";
import { listCardContact } from "../../data/contact";

export default function SectionContact() {

  const data = listCardContact;
  return (

    <section className="py-5 px-4 lg:px-16 2xl:px-22 lg:space-y-5 space-y-3">
      <div className=" w-full bg-white transition-all duration-200 dark:bg-black/10 border dark:border-gray-200/20 border-gray-200 rounded-xl p-3 lg:p-5 flex flex-col gap-4">
        <div>

          <h3 className="text-sm font-bold text-gray-900 dark:text-gray-200 mb-1">¡Hablemos!</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">Estoy disponible para proyectos freelance, colaboraciones o nuevas  oportunidades laborales. No dudes en escribirme.</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 lg:gap-5 gap-3 grid-cols-1 ">
        {data.map((e, i) => (
          <CardContact
            key={i}
            title={e.title}
            description={e.description}
            icon={e.icon}
            btn={e.btn}
            copi={e.copi}
            link={e.link}
          />

        ))}
      </div>
    </section>
  )
}