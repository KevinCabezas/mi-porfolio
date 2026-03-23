import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import retrato from "../assets/retrato.jpg";
import { useEffect, useState } from "react";


export default function Navbar() {


  const [menuOpen, setMenuOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    // Eliminado el hack de repaint
  }, [dark]);
  const secciones = [
    { icono: "iconamoon:profile-fill", titulo: "Sobre mí", path: "about", },
    { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "Proyectos", path: "proyectos", },
    { icono: "flowbite:brain-solid", titulo: "Habilidades", path: "habilidades", },
    { icono: "tabler:briefcase-filled", titulo: "Historial", path: "historial", },
    { icono: "tabler:school-filled", titulo: "Formación", path: "estudios", },
    // { icono: "famicons:call", titulo: "CONTACTO", path: "contacto", },

  ];

  return (
    <header className="secondary-color lg:h-20 fixed z-50 lg:grid lg:items-end top-0 pt-2.5 left-2.5 lg:left-37.5 right-2.5 lg:right-37.5">
      <div className="h-12.5 flex justify-between gap-2.5 bg--300 ">
        {/* <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4">
  Modo oscuro: {dark ? "activado" : "desactivado"}
</div> */}
        <button
          onClick={() => setMenuOpen(true)}
          className=" primary-color lg:hidden text-white w-12.5 rounded-lg flex justify-center items-center">
          <Icon icon={"material-symbols:menu-rounded"} className="text-[30px]"></Icon>
        </button>

        <div className="h-12.5 lg:flex gap-2.5 hidden">
          <button className="w-12.5 h-full rounded-lg overflow-hidden border-2 border-gray-700">
            <img
              src={retrato}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>

          <button className="flex items-center justify-center gap-1 h-full text-white primary-color p-2.5 rounded-lg">
            <Icon icon={"academicons:cv-square"} className="text-[24px] "></Icon>
            <span>descargar</span>
          </button>
          <button className="flex items-center justify-center w-12.5 h-full text-white primary-color p-2.5 rounded-lg">
            <Icon icon={"uil:linkedin"} className="text-[24px]"></Icon>

          </button>
          <button className="w-12.5 h-full flex items-center justify-center text-white primary-color p-2.5 rounded-lg">
            <Icon icon={"material-symbols:mail-rounded"} className="text-[24px]"></Icon>

          </button>
          <button className="w-12.5 h-full flex items-center justify-center text-white primary-color p-2.5 rounded-lg">
            <Icon icon={"mingcute:whatsapp-fill"} className="text-[24px]"></Icon>

          </button>
        </div>

        <div className="flex-1 justify-between text-white flex px-5 gap-5 primary-color rounded-lg ">
          {/* {secciones.map((secc, i) => (
            <Link
              key={i}
              to={secc.path}
              className="flex items-center gap-3 text-lg hover:text-orange-400"
              onClick={() => setMenuOpen(false)}
            >
              {secc.titulo}
            </Link>
          ))} */}
        </div>
        {/* {!menuOpen && ( */}
        <div className="flex gap-2.5 bg-en-400">

          <button
            className="flex items-center w-12.5 justify-center h-full gap-1 text-white primary-color p-2.5 rounded-lg cursor-pointer"
            onClick={() => setDark(prev => !prev)}
          >
            <Icon icon={"line-md:moon-filled-to-sunny-filled-loop-transition"} className="text-[24px]"></Icon>
            {/* <span>tema</span> */}
          </button>
          {/* <div className="bg-white dark:bg-red-500 text-black dark:text-white p-10">
            TEST DARK MODE
          </div> */}
          <button
            className="flex items-center justify-center gap-1 h-full text-white primary-color p-2.5 rounded-lg"

          >
            <Icon icon={"mingcute:world-2-fill"} className="text-[24px]"></Icon>
            <span>ES</span>
          </button>
        </div>

        {/* )} */}
      </div>


      {menuOpen && (
        <div className="fixed inset-0 z-40 flex lg:hidden">
          <div className="w-2/3 max-w-75 bg-white h-full p-6 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button
                className="bg-black text-white px-2 py-1"
                onClick={() => setMenuOpen(false)}
              >
                Cerrar
              </button>
            </div>
            {secciones.map((secc, i) => (
              <Link
                key={i}
                to={secc.path}
                className="flex items-center gap-3 text-lg hover:text-orange-400"
                onClick={() => setMenuOpen(false)}
              >
                {secc.titulo}
              </Link>
            ))}
          </div>
          <div className="flex-1 bg-black/60" onClick={() => setMenuOpen(false)} />

        </div>
      )}

    </header>
  );

} 