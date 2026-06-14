import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FormComentario from "./Form-Comentario";


export default function ProfileSection() {
  const [secc, setSecc] = useState(false);
  return (
    <div className="pt-16">
      {/* Portada */}
      <div className="relative w-full h-65  md:h-90 bg-gray-300 overflow-hidden">
        <img
          alt="Portada"
          className="w-full h-full object-cover object-center"
          src="https://readdy.ai/api/search-image?query=abstract%20dark%20professional%20developer%20workspace%20with%20code%20on%20screens%2C%20dark%20moody%20atmosphere%2C%20cinematic%20wide%20shot%2C%20deep%20shadows%2C%20amber%20and%20dark%20tones%2C%20ultra%20wide%20banner%20format%2C%20high%20quality%20digital%20art&width=1200&height=400&seq=cover-about-01&orientation=landscape"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
      </div>

      {/* Card principal */}
      <div className="bg-white ">
        <div className=" bg-whit px-4 lg:px-16 2xl:px-22 ">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 -mt-16 pb-4">

            {/* Avatar */}
            <div className="relative shrink-0">
              <img
                alt="Kevin Cabezas Laura"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover object-top border-4 border-white shadow-md"
                src="https://mi-porfolio-rswh.vercel.app/assets/retrato-BrBK2kIF.jpg"
              />
            </div>

            {/* Info */}
            <div className="flex-1 pb-1">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
                Kevin Cabezas Laura
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">
                Desarrollador Full Stack Junior · Argentina
              </p>

            </div>

            {/* Botones */}
            <div className="flex items-center gap-2 pb-1">
              <button
                className="flex items-center gap-1.5 px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                Descargar CV
              </button>
              <Link to={"/contacto"}

                className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-medium rounded-full transition-colors whitespace-nowrap"
              >
                Contactar
              </Link>
            </div>
          </div>
          <div className="flex px-3 font-semibold text-gray-500 text-sm gap-3 ">
            <button onClick={() => setSecc(true)} className={`bg-s border-b-2 px-2 ${secc ? "border-sky-400 text-sky-400" : "border-white"} pb-2`}>

              Información
            </button>
            <button onClick={() => setSecc(false)} className={`bg-s border-b-2 px-2 ${!secc ? "border-sky-400 text-sky-400" : "border-white"} pb-2`}>
              Comentar
            </button>
          </div>

        </div>


        {secc &&
          <div className="bg-gray-100 py-5 px-4 lg:px-16 2xl:px-22 ">
            <div className=" gap-10 w-full grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-2" >
              <div className=" p-5 w-full 2xl:w-fit bg-white border border-gray-200 rounded-xl ">
                <div className="border-b space-y-2 pb-5 border-gray-200">
                  <h3 className="font-semibold pb-3 ">Información</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                      <Icon icon={"ri-briefcase-line"} className="text-sky-500"></Icon>
                    </div>
                    <span className="text-sm text-gray-700">Desarrollador Full Stack Junior</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 flex items-center justify-center bg-sky-50 rounded-full shrink-0">
                      <Icon icon={"ri-graduation-cap-line"} className="text-sky-500"></Icon>
                    </div>
                    <span className="text-sm text-gray-700">Técnico Superior en Sistemas</span>
                  </div>
                </div>
                <div className="pt-5 space-y-5">
                  <h3 className="font-semibold">Datos personales</h3>
                  <div className="grid grid-cols-2  grid-rows-3 space-y-2 space-x-10">
                    <div className="flex flex-col w-full">
                      <span className="text-data">NOMBRE COMPLETO</span>
                      <span className="text-label">Kevin Cabezas</span>
                    </div>
                    <div className="flex flex-col w-full ">
                      <span className="text-data">RESIDENCIA</span>
                      <span className="text-label">Argentina</span>
                    </div>
                    <div className="flex flex-col w-full ">
                      <span className="text-data">NACIONALIDAD</span>
                      <span className="text-label">Bolivia</span>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-data">IDIOMAS</span>
                      <span className="text-label">Español Nativo - Inglés Básico</span>
                    </div>
                    <div className="flex flex-col w-full">
                      <span className="text-data">MODALIDAD</span>
                      <span className="text-label">Presencial / Remoto</span>
                    </div>

                  </div>
                </div>
              </div>
              <div className=" bg-white rounded-xl flex-1 gap-5 flex flex-col p-5 border border-gray-200">
                <h3 className="font-semibold">Presentación</h3>
                <p className="max-w-prse text-justif leading-relaxed text-sm text-gray-700">
                  Soy un Desarrollador Full Stack Junior con formación como Técnico Superior en Sistemas. Me apasiona crear aplicaciones
                  web modernas, funcionales y con buena experiencia de usuario. Tengo experiencia trabajando con tecnologías tanto del lado
                  del cliente como del servidor.
                  Me caracterizo por ser una persona proactiva, con ganas de aprender y mejorar constantemente. Disfruto trabajar en equipo y
                  enfrentar nuevos desafíos tecnológicos que me permitan crecer profesionalmente.
                </p>
              </div>
            </div>
          </div>
        }
        {!secc &&
          <div className="bg-gray-100 flex items-center flex-col py-5 px-4 lg:px-16 2xl:px-22 ">
            <div className="p-5 bg-white border space-y-5 border-gray-200 rounded-xl w-full lg:w-1/2 2xl:w-1/2">
              <div className="flex items-center border-b border-gray-200 justify-between pb-5">
                <h3 className="flex items-center gap-1">
                  <Icon icon={"ri-chat-3-line"} className="text-sky-400"></Icon>
                  <span className="text-sm font-semibold">Muro de comentarios</span>
                </h3>
                <span className="text-xs text-gray-400">
                  0 comentarios
                </span>
              </div>
              <FormComentario />

            </div>
          </div>
        }


      </div>

    </div>
  );
}