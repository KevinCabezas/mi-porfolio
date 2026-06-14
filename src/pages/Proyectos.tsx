import { useEffect, useState } from "react";
import CardProyect from "../components/Card-Project"
import type { Project } from "../types/projects";
import { getAllProjects } from "../service/projects.service";
import ModalProject from "../components/Modal-Projects";


export default function Proyectos() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
   const open = () => {
    setOpenModal(true);
  }

  const close = () => {
    setOpenModal(false);
  }

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getAllProjects();
        setProjects(data);
        console.log("datas", data)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  if (loading) return <p>Cargando...</p>;

  return (
    <main className="flex-1 min-h-screen dark:bg-black/90 px-4 lg:px-16 2xl:px-22 pt-24 pb-10 2xl:pb-16 duration-300 transition-all  2xl:pt-34">
      <div className="mb-6 2xl:mb-8 ">
        <h2 className="text-2xl 2xl:text-4xl font-semibold  dark:text-gray-200 text-gray-900">Proyectos</h2>
        <p className="text-gray-500 dark:text-gray-400 text-sm 2xl:text-xl mt-1 2xl:mt-2">Aplicaciones y trabajos desarrollados</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 2xl:gap-6">
        {projects.map((e, i) => (
          <CardProyect

            key={i}
            id={e.id}
            title={e.title}
            icon={e.icon}
            description={e.description}
            frontpage={e.frontpage}
            image={e.image}
            stack={e.stack}
            onOpen={open}
          />
        ))}
      </div>
        {openModal && <ModalProject onClose={close} img={projects[1]['frontpage']} />}
    </main>
  )
}