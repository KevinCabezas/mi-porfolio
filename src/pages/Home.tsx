import Card from "../components/Card";
import Portada from "../components/Portada";

export default function Home() {

  const data = [
    { icono: "iconamoon:profile-fill", titulo: "SOBRE MÍ", path: "about", boton: "Quién soy y qué me motiva" },
    { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "PROYECTOS", path: "proyectos", boton: "Trabajos y aplicaciones desarrolladas" },
    { icono: "flowbite:brain-solid", titulo: "HABILIDADES", path: "habilidades", boton: "Tecnologías y herramientas que domino" },
    { icono: "tabler:briefcase-filled", titulo: "HISTORIAL", path: "historial", boton: "Experiencia laboral y trayectoria" },
    { icono: "tabler:school-filled", titulo: "FORMACION", path: "estudios", boton: "Estudios y certificaciones obtenidas" },
    { icono: "famicons:call", titulo: "CONTACTO", path: "contacto", boton: "Hablemos de tu próximo proyecto" },

  ];

return (
  <div className="lg:h-[calc(100vh)] flex flex-col">
    <Portada />
    
    <main className="bg-white dark:bg-black/90 py-4 lg:py-8 2xl:py-12 shrink-0 px-4 2xl:px-22 lg:px-16 transition-colors duration-300">
      <section>
        <h2 className="text-sm 2xl:text-lg font-semibold text-gray-400 uppercase  tracking-widest mb-5">
          Explorar
        </h2>

        <div className="w-full grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2.5  lg:gap-5 2xl:gap-7">
          {data.map((card, i) => (
            <Card
              key={i}
              icono={card.icono}
              titulo={card.titulo}
              path={card.path}
              boton={card.boton}
            />
          ))}
        </div>
      </section>
    </main>
  </div>
);
}