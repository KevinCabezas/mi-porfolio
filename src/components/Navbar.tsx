import { Icon } from "@iconify/react";
import { Link, useLocation, NavLink } from "react-router-dom";
import { useTheme } from "../service/theme.service";
import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { sections } from "../data/sections";


export default function Navbar() {
  const { t } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const { i18n } = useTranslation();

  const alternarIdioma = () => {
    // Si está en español cambia a inglés, de lo contrario cambia a español
    const nuevoIdioma = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(nuevoIdioma);
  };

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <header className={` ${isHome ? "bg-sky-400/30" : "bg-sky-900"} backdrop-blur-md border-b border-sky-300/40 items-center  fixed z-50 lg:grid top-0  left-0 right-0 lg:px-16 px-4 2xl:px-22`}>
      <nav className={` h-16  2xl:h-22 flex justify-between gap-2.5 bg--300 items-center`}>

        <button
          onClick={() => setMenuOpen(true)}
          className=" primary-color lg:hidden text-white w-fit  flex justify-start items-center">
          <Icon icon={"material-symbols:menu-rounded"} className="text-[25px]"></Icon>
        </button>


        <div className=" lg:flex gap-2.5 hidden items-center">
          <Link to={"/about"} className="w-10 h-10 2xl:w-11 2xl:h-11 rounded-full overflow-hidden">
            <img
              src={"https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/home/retrato.jpg"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </Link>
          {isHome && <>
            <button className="flex items-center justify-center gap-1.5 text-sky-900 hover:text-white borde hover:bg-sky-400 bg-white rounded-full py-2 px-4 duration-300">
              <Icon icon={"ep:document"} className="text-xl 2xl:text-2xl"></Icon>
              <span className="text-sm 2xl:text-base  ">{t("cv_download")}</span>
            </button>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kevin-cabezas-8b8a472a8"
              className="flex items-center justify-center text-sky-900 hover:text-white p-2 bg-white hover:bg-sky-400 rounded-full duration-300">

              <Icon icon={"uil:linkedin"} className="text-xl  2xl:text-2xl"></Icon>

            </a>
            <button className=" flex items-center justify-center text-sky-900 hover:text-white bg-white hover:bg-sky-400 p-2 rounded-full duration-300">
              <Icon icon={"ri:mail-line"} className="text-xl  2xl:text-2xl"></Icon>

            </button>
            <button className=" flex items-center justify-center text-sky-900 hover:text-white bg-white hover:bg-sky-400 p-2 rounded-full duration-300">
              <Icon icon={"mingcute:whatsapp-line"} className="text-xl  2xl:text-2xl"></Icon>

            </button>
          </>}

        </div>

        {!isHome &&
          <div className="flex-1 space-x-1 hidden lg:block 2xl:space-x-5">
            {sections
            .filter((e) => e.titulo !== "nav_contact")
            .map((e, i) => (
              <NavLink
                key={i}
                to={e.path}
                className={({ isActive }) =>
                  `2xl:text-lg text-sm px-4 py-2 rounded-full font-semibold duration-300 transition-all ${isActive
                    ? "bg-white text-sky-900"
                    : "text-white hover:bg-white hover:text-sky-900"
                  }`
                }
              >
                {t(e.titulo)}
              </NavLink>

            ))}
          </div>
        }


        <div className="flex gap-2.5 bg-en-400 items-center ">

          <Link
            to={'/about?tab=contact'}
            // state={{ tab: "info" }}
            className="btn-navbar py-2 px-3 hidden lg:flex bg-sky-300 font-semibold gap-3 2xl:text-lg text-sm text-sky-900 hover:bg-sky-500 hover:text-white">
            <span>{t("contact_me")}</span>
            <Icon icon={'maki:arrow'} className=""></Icon>
          </Link>
          <button
            className="btn-navbar p-2"
            onClick={toggleTheme}
          >
            {/* {theme} */}
            {/* {theme === "light" } */}
            <Icon icon={theme === "light" ? "solar:moon-linear" : "ri:sun-line"} className="text-xl  2xl:text-2xl"></Icon>
          </button>

          <button
            className="btn-navbar py-2 pl-2 pr-3"
            onClick={alternarIdioma}
          >
            <Icon icon={"mingcute:world-2-fill"} className="text-xl  2xl:text-2xl"></Icon>
            {/* <span className="text-sm 2xl:text-base">Español</span> */}
            <samp className="font-extrabold text-sm">
              {i18n.language === 'es' ? 'EN' : 'ES'}

            </samp>

          </button>
        </div>

      </nav>


      {menuOpen && (
        <div className="fixed inset-0 h-dvh  flex lg:hidden">
          <div className="w-2/3 max-w-75  dark:bg-[#121212] border-r dark:border-gray-100/10 bg-white p-4 flex flex-col gap-4 shadow-lg animate-slide-in-left ">
            <div className="flex justify-end">
              <button
                // className="bg-sky-50  rounded-full h-10 w-10 items-center justify-center flex "
                onClick={() => setMenuOpen(false)}
              >
                <Icon icon={"ic:round-close"} className="text-xl dark:text-white text-gray-900"></Icon>
              </button>
            </div>

            <div className="space-y-3 flex-1 border-y pt-4 border-gray-200 dark:border-gray-200/20">
              {sections.map((secc, i) => (
                <NavLink
                  key={i}
                  to={secc.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center  gap-3 text-base  rounded-full px-3 py-1   ${isActive
                      ? "bg-sky-900 text-white dark:bg-gray-200 dark:text-gray-700"
                      : "bg-gray-200/30 dark:bg-gray-200/10 dark:text-white"
                    }`
                  }

                >
                  <Icon icon={secc.icono} className={`text-sky-300`}></Icon>
                  <span className=" font-semibold">{t(secc.titulo)}</span>
                </NavLink>
              ))}
            </div>

            <div className="mt-auto justify-between flex">
              <button className="flex items-center justify-center gap-1.5 bg-sky-900 dark:bg-sky-700 text-white rounded-full py-1.5 px-3 duration-300">
                <Icon icon={"ep:document"} className="text-s"></Icon>
                <span className="text-xs">{t("cv_download")}</span>
              </button>

              <button className="flex items-center justify-center bg-sky-900 dark:bg-sky-700 text-white p-1.5  rounded-full duration-300">
                <Icon icon={"uil:linkedin"} className="text-"></Icon>

              </button>
              <button className=" flex items-center justify-center bg-sky-900 dark:bg-sky-700 text-white p-1.5  rounded-full duration-300">
                <Icon icon={"ri:mail-line"} className="texsm"></Icon>

              </button>
              <Link
                to={"/contact"}
                onClick={() => setMenuOpen(false)}
                className=" flex items-center justify-center bg-sky-900 dark:bg-sky-700 text-white p-1.5  rounded-full duration-300">
                <Icon icon={"mingcute:whatsapp-line"} className="textm"></Icon>
              </Link>
            </div>
          </div>
          <div className="flex-1 dark:bg-gray-200/30 bg-black/80" onClick={() => setMenuOpen(false)} />

        </div>
      )}

    </header>
  );

} 