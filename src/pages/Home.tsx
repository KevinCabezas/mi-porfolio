import Card from "../components/Card";
import Portada from "../components/Portada";
import { useTranslation } from 'react-i18next';
import { sections } from "../data/sections";


export default function Home() {
const { t } = useTranslation();

const data =  sections.filter(item => item.path !== "/");

return (
  <div className="lg:h-[calc(100vh)] flex flex-col">
    <Portada />
    
    <main className="bg-white dark:bg-black/90 py-4 lg:py-8 2xl:py-12 shrink-0 px-4 2xl:px-22 lg:px-16 transition-all duration-200">
      <section>
        <h2 className="text-sm 2xl:text-lg font-semibold text-gray-400 uppercase  tracking-widest mb-5">
          Explorar
        </h2>

        <div className="w-full grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2.5  lg:gap-5 2xl:gap-7">
          {data.map((card, i) => (
            <Card
              key={i}
              icono={card.icono}
              titulo={t(card.titulo)}
              path={card.path}
              boton={t(card.boton)}
            />
          ))}
        </div>
      </section>
    </main>
  </div>
);
}