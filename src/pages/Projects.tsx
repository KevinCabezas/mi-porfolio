import { useEffect, useState } from "react";
import CardProyect from "../components/projects/Card-Project"
import type { Project } from "../types/projects";
import { getAllProjects } from "../service/projects.service";
import ModalProject from "../components/projects/Modal-Projects";
import { Icon } from "@iconify/react";


export default function Proyectos() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const [idCard, setIdCard] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  const open = (id: number) => {
    setIdCard(id);
    setOpenModal(true);
  };

  const close = () => {
    setOpenModal(false);
    setIdCard(null);
  };
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", openModal);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openModal]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getAllProjects();

        // await new Promise(resolve => setTimeout(resolve, 2000));
        setProjects(data);
        console.log("datas", data)
        console.log("loading:", loading);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        console.log("loading:", loading);
      }
    };

    loadProjects();
  }, []);


  return (
    <main className="flex flex-col min-h-screen dark:bg-black/90 px-4 lg:px-16 2xl:px-22 pt-24 pb-10 2xl:pb-16 duration-300 transition-all  2xl:pt-34">
      <div className="mb-6 2xl:mb-8 ">
        <h2 className="text-2xl 2xl:text-4xl font-semibold  dark:text-gray-200 text-gray-900">Proyectos</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-xl mt-1 2xl:mt-2">Aplicaciones y trabajos desarrollados</p>
      </div>

      {loading &&
        <div className="flex flex-col flex-1 items-center bg-amber-30 text-gray-500 dark:text-gray-400 justify-center">
          <Icon icon={"ph:spinner-bold"} className="fa-solid fa-spinner animate-spin text-3xl  [animation-duration:1.5s]"></Icon>
          <span className="font-semibold">Cargando</span>
        </div>
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
        {projects.map((e, i) => (
          <CardProyect

            key={i}
            id={e.id}
            title={e.title}
            icon={e.icon}
            description={e.description}
            frontpage={e.frontpage}
            stack={e.stack}
            onOpen={() => open(e.id)}
          />
        ))}
      </div>
      {openModal && idCard !== null && (
        <ModalProject
          onClose={close}
          id={idCard}
        />
      )}
    </main>
  )
}