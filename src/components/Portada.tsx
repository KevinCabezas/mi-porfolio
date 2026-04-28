import portada from "../assets/my2.png";

export default function Portada() {
  return (
    <section className="relative flex-1 w-full flex items-center justify-start overflow-hidden">
      <img
        src={portada}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover object-center "
      />

      {/* Overlay oscuro */}
      {/* <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/45 to-black/65"></div> */}

      {/* Contenido */}
      <div className="relative z-10 flex flex-col text-start gap-2 mx-16">
        {/* <p className="text-amber-400 font-semibold text-xs uppercase tracking-[0.25em]">
          Disponible para trabajar
        </p> */}

        <h1 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight">
          Kevin Cabezas Laura
        </h1>

        <p className="text-sky-300 text-base md:text-lg font-light">
          Desarrollador Full Stack Junior - Técnico Superior en Sistemas
        </p>

        <p className="text-gray-300 text-sm leading-relaxed max-w-xl mt-3">
          Apasionado por crear aplicaciones web modernas y funcionales.
          Busco nuevos retos donde seguir creciendo como desarrollador.
        </p>
      </div>
    </section>
  );
}