import Card from "../components/Card";
import portada from "../assets/port.png"

export default function Home() {

  const data = [
    { icono: "iconamoon:profile-fill", titulo: "SOBRE MÍ", path: "about", boton: "Saber más" },
    { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "PROYECTOS", path: "proyectos",boton: "Investigar" },
    { icono: "flowbite:brain-solid", titulo: "HABILIDADES", path: "habilidades",boton: "Descubrir" },
    { icono: "tabler:briefcase-filled", titulo: "HISTORIAL", path: "historial",boton: "Verificar" },
    { icono: "tabler:school-filled", titulo: "FORMACION", path: "estudios", boton: "Ver educación"},
    { icono: "famicons:call", titulo: "CONTACTO", path: "contacto", boton: "Contactar"},

  ];

  return (
    <section className="secondary-color flex flex-col lg:items-center min-h-screen px-2.5 lg:px-37.5 gap-5 lg:gap-5 pt-20 lg:pt-25 pb-2.5 lg:pb-8.5">
      <div className="relative  flex flex-col justify-center gap-2 lg:gap-4 items-center w-full h-35 lg:h-50 bg-cover bg-position-[center_top_30%]"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className="absolute inset-0 bg-gray-700/70 pointer-events-none"></div>
        {/* <div className="absolute inset-0  from-black/60 to-black/10"></div> */}
        <h1 className="relative z-10 lg:text-[48px] text-3xl bg-emerald px-2.5 font-semibold  text-orange-300 ">
          KEVIN CABEZAS LAURA
        </h1>
        <p className="relative z-10 lg:text-[20px] lg:text-2xl pl-2.5 pr-5 grid lg:flex w-full items-center justify-center text-white ">
          <span className=" flex-1 flex justify-center lg:justify-end px-1">
            Desarrollador Full Stack Junior
          </span>
          <span className="hidden lg:flex w-fit items-center justify-center">
            -
          </span>
          <span className="flex-1 px-1 flex lg:justify-start justify-center">
            Técnico Superior en Sistemas
          </span>
        </p>
      </div>
      <div className="w-full grid grid-cols-2 grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2.5 lg:gap-5 ">
        {data.map((card, i) => (
          <Card key={i} icono={card.icono} titulo={card.titulo} path={card.path} boton={card.boton} />
        ))}
      </div>
    </section>
  )
}