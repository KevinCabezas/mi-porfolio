// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import retrato from "../assets/retrato.jpg";
// import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../service/theme.service";
import { useState } from "react";

export default function Navbar() {

  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const secciones = [
    { icono: "iconamoon:profile-fill", titulo: "Inicio", path: "/", },
    { icono: "iconamoon:profile-fill", titulo: "Sobre mí", path: "about", },
    { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "Proyectos", path: "proyectos", },
    { icono: "flowbite:brain-solid", titulo: "Habilidades", path: "habilidades", },
    { icono: "tabler:briefcase-filled", titulo: "Historial", path: "historial", },
    { icono: "tabler:school-filled", titulo: "Formación", path: "estudios", },
    { icono: "famicons:call", titulo: "Contacto", path: "contacto", },

  ];



  return (
    <header className={` ${isHome ? "bg-sky-400/30" : "bg-sky-900"} backdrop-blur-md border-b border-sky-300/40 items-center  fixed z-50 lg:grid top-0  left-0 right-0 lg:px-16 px-4 2xl:px-22`}>
      <nav className={` h-16  2xl:h-22 flex justify-between gap-2.5 bg--300 items-center`}>

        <button
          onClick={() => setMenuOpen(true)}
          className=" primary-color lg:hidden text-white w-fit  flex justify-start items-center">
          <Icon icon={"material-symbols:menu-rounded"} className="text-[25px]"></Icon>
        </button>


        <div className=" lg:flex gap-2.5 hidden items-center">
          <button className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-full overflow-hidden">
            <img
              src={retrato}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>
          {isHome && <>
            <button className="flex items-center justify-center gap-1.5 text-sky-900 hover:text-white borde hover:bg-sky-400 bg-white rounded-full py-2 px-4 duration-300">
              <Icon icon={"ep:document"} className="text-xl 2xl:text-2xl"></Icon>
              <span className="text-sm 2xl:text-base  ">descargar cv</span>
            </button>

            <button className="flex items-center justify-center text-sky-900 hover:text-white p-2 bg-white hover:bg-sky-400 rounded-full duration-300">
              <Icon icon={"uil:linkedin"} className="text-xl  2xl:text-2xl"></Icon>

            </button>
            <button className=" flex items-center justify-center text-sky-900 hover:text-white bg-white hover:bg-sky-400 p-2 rounded-full duration-300">
              <Icon icon={"ri:mail-line"} className="text-xl  2xl:text-2xl"></Icon>

            </button>
            <button className=" flex items-center justify-center text-sky-900 hover:text-white bg-white hover:bg-sky-400 p-2 rounded-full duration-300">
              <Icon icon={"mingcute:whatsapp-line"} className="text-xl  2xl:text-2xl"></Icon>

            </button>
          </>}

        </div>

        {!isHome &&
          <div className="flex-1 space-x-1 hidden 2xl:block 2xl:space-x-5">
            {secciones.map((e, i) => (
              <Link to={e.path} key={i}
                className=" 2xl:text-lg text-sm px-4 py-2  rounded-full text-white hover:bg-white hover:text-sky-900 font-semibold duration-300 transition-all">
                {e.titulo}
              </Link>

            ))}
          </div>
        }

    
        <div className="flex gap-2.5 bg-en-400 items-center ">

          <button
            className="flex items-center  justify-center gap-1 text-sky-900 hover:text-white  bg-white hover:bg-sky-400 p-2 rounded-full duration-300"
            onClick={toggleTheme}
          >
            {/* {theme} */}
            <Icon icon={"line-md:moon-filled-to-sunny-filled-loop-transition"} className="text-xl  2xl:text-2xl"></Icon>
          </button>

          <button
            className="flex items-center justify-center gap-1 text-sky-900 hover:text-white   bg-white hover:bg-sky-400 py-2 px-2  rounded-full duration-300"

          >
            <Icon icon={"mingcute:world-2-fill"} className="text-xl  2xl:text-2xl"></Icon>
            {/* <span className="text-sm 2xl:text-base">Español</span> */}
          </button>
        </div>

      </nav>


      {menuOpen && (
        <div className="fixed inset-0  flex lg:hidden">
          <div className="w-2/3 max-w-75 h-screen dark:bg-black bg-white  p-6 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button
                className="bg-sky-50  rounded-full h-10 w-10 items-center justify-center flex "
                onClick={() => setMenuOpen(false)}
              >
                {/* <Icon icon={"hugeicons:closed-caption-alt"} className="text-xl text-sky-600 "></Icon> */}
                X
              </button>
            </div>
            {secciones.map((secc, i) => (
              <Link
                key={i}
                to={secc.path}
                className="flex items-center gap-3 text-sm dark:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {secc.titulo}
              </Link>
            ))}
          </div>
          <div className="flex-1 h-screen  bg-black/60" onClick={() => setMenuOpen(false)} />

        </div>
      )}

    </header>
  );

} 