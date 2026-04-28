// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import retrato from "../assets/retrato.jpg";
import { useEffect, useState } from "react";


export default function Navbar() {


  // const [menuOpen, setMenuOpen] = useState(false);

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
  // const secciones = [
  //   { icono: "iconamoon:profile-fill", titulo: "Sobre mí", path: "about", },
  //   { icono: "material-symbols:dashboard-2-gear-rounded", titulo: "Proyectos", path: "proyectos", },
  //   { icono: "flowbite:brain-solid", titulo: "Habilidades", path: "habilidades", },
  //   { icono: "tabler:briefcase-filled", titulo: "Historial", path: "historial", },
  //   { icono: "tabler:school-filled", titulo: "Formación", path: "estudios", },
  //   // { icono: "famicons:call", titulo: "CONTACTO", path: "contacto", },

  // ];

  return (
    <header className="bg-sky-200/30 backdrop-blur-md border-b border-sky-300/10 items-center lg:h-16 fixed z-50 lg:grid top-0  left-0 right-0 px-16">
      <nav className="  flex justify-between gap-2.5 bg--300 items-center ">

        <button
          // onClick={() => setMenuOpen(true)}
          className=" primary-color lg:hidden text-white w-12.5 rounded-full flex justify-center items-center">
          <Icon icon={"material-symbols:menu-rounded"} className="text-[25px]"></Icon>
        </button>

        <div className=" lg:flex gap-2.5 hidden items-center">
          <button className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={retrato}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </button>
          
          <button className="flex items-center justify-center gap-1.5 text-white borde hover:bg-sky-400 bg-sky-400/20 rounded-md py-2 px-2 duration-300">
            <Icon icon={"ep:document"} className="text-xl"></Icon>
            <span className="text-sm">descargar cv</span>
          </button>

          <button className="flex items-center justify-center text-white p-2 bg-sky-400/20 hover:bg-sky-400 rounded-md duration-300">
            <Icon icon={"uil:linkedin"} className="text-xl"></Icon>

          </button>
          <button className=" flex items-center justify-center text-white bg-sky-400/20 hover:bg-sky-400 p-2 rounded-md duration-300">
            <Icon icon={"ri:mail-line"} className="text-xl"></Icon>

          </button>
          <button className=" flex items-center justify-center text-white bg-sky-400/20 hover:bg-sky-400 p-2 rounded-md duration-300">
            <Icon icon={"mingcute:whatsapp-line"} className="text-xl"></Icon>

          </button>
        </div>

        <div className=""> 

        </div>
        <div className="flex gap-2.5 bg-en-400 items-center ">

          <button
            className="flex items-center  justify-center gap-1 text-white  bg-sky-400/20 hover:bg-sky-400 p-2 rounded-md duration-300"
            onClick={() => setDark(prev => !prev)}
          >
            <Icon icon={"line-md:moon-filled-to-sunny-filled-loop-transition"} className="text-xl "></Icon>
          </button>
          <button
            className="flex items-center justify-center gap-1  text-white   bg-sky-400/20 hover:bg-sky-400 p-2 rounded-md duration-300"

          >
            <Icon icon={"mingcute:world-2-fill"} className="text-xl"></Icon>
            <span className="text-sm">Español</span>
          </button>
        </div>

      </nav>

{/* 
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
      )} */}

    </header>
  );

} 