import { Icon } from "@iconify/react"
import { useEffect, useState } from "react";
import { getDetailProject } from "../../service/projects.service";
import type { TDetailsProject } from "../../types/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


type Props = {
  id: number;
  onClose: () => void;
}
export default function ModalProject({ onClose, id }: Props) {

  const [dataProject, setDataProject] = useState<TDetailsProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const loadProjectDetails = async () => {
      try {
        const data = await getDetailProject(id);
        // await new Promise(resolve => setTimeout(resolve, 2000));

        setDataProject(data);

      } catch (err) {
        console.error(err)

      } finally {
        setLoading(false);
      }
    }
    loadProjectDetails();
  }, [id]);


  // const url = "https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/projects/1778128082330-habitacion.webp"

  return (
    <div className="bg-gray-300/30 dark:bg-[#121212] h-dvh w-screen backdrop-blur-md px-4 lg:px-62.5 2xl:px-62.5 fixed py-10 left-0 top-0 z-50 ">
      {/* {loading &&
        <div className="flex flex-col h-full items-center bg-amber-30 text-gray-600 dark:text-gray-300 justify-center">
          <Icon icon={"ph:spinner-bold"} className="fa-solid fa-spinner animate-spin text-3xl  [animation-duration:1.5s]"></Icon>
          <span className="font-semibold">Cargando</span>
        </div>
      } */}
      {!loading &&
        <div className="bg-white dark:bg-black/80 h-full border border-gray-200 dark:border-gray-200/20 rounded-xl overflow-y-auto 2xl:space-y-7 space-y-5 ">
          <div className="flex justify-between lg:p-6 p-4 border-b border-gray-100 dark:border-gray-200/20">
            <div className="flex items-center gap-2 ">
              <div className="bg-sky-50  rounded-full 2xl:p-5 p-3 items-center justify-center flex ">
                <Icon icon={dataProject?.icon ?? ""} className="text-xl 2xl:text-3xl text-sky-600 "></Icon>
              </div>
              <div className="space-y-0.5">
                <h2 className="font-bold text-base lg:text-xl 2xl:text-2xl text-gray-900 dark:text-white ">{dataProject?.title}</h2>
                <div className="text-xs 2xl:text-base space-x-2">
                  <span className="bg-gray-200 px-2 py-0.5 rounded-full ">{dataProject?.state}</span>
                  <span className="text-gray-400">{dataProject?.age}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="flex items-center justify-center h-9 w-9 rounded-full group hover:bg-gray-100 duration-300 transition-all " >
              <Icon icon={"ic:round-close"} className="text-xl 2xl:text-2xl text-gray-400 group-hover:text-gray-700 duration-300 transition-all" ></Icon>
            </button>
          </div>
          <div className="lg:px-6 px-4 space-y-4 pb-4 lg:space-y-6 lg:pb-6">
            <div className="w-full h-74 2xl:h-125  rounded-xl">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full h-full rounded-xl"
              >
                {dataProject?.image.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`Imagen ${i + 1}`}
                      className="w-full h-full object-cover rounded-x"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className="grid grid-cols-3 gap-2">
            {dataProject?.image.map((e, i) => (
              <div key={i} className="h-16 2xl:h-24 rounded-lg bg-red-400">
                <img src={e} alt="" className="h-full w-full object-cover rounded-lg" />
              </div>
            ))}
          </div> */}
            <div className="space-y-2">
              <h3 className="text-sm 2xl:text-lg lg:text-base font-semibold text-gray-700 dark:text-gray-400 ">
                DESCRIPCIÓN
              </h3>
              <p className="text-sm 2xl:text-lg lg:text-base text-gray-600 dark:text-gray-200">
                {dataProject?.description_details}
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm 2xl:text-lg lg:text-base font-semibold text-gray-700 dark:text-gray-400">
                STACK TECNOLÓGICO
              </h3>

              <div className="flex flex-wrap gap-2">
                {dataProject?.stack_details.map((e, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-gray-50  border border-gray-200 dark:bg-white/10 dark:border-gray-200/20 rounded-lg px-3 py-2">
                    <Icon icon={e.icon} className="text-base 2xl:text-lg" ></Icon>
                    <span className="text-sm 2xl:text-base font-medium " >{e.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex gap-3 pt-4 lg:pt-6 border-t border-gray-100 dark:border-gray-200/20">
              <a
                href={dataProject?.repository}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-700 text-white dark:bg-white dark:text-gray-900 text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap">
                <Icon icon={"ri-github-fill"} className="text-base 2xl:text-lg" />
                <span className="2xl:text-lg">Ver repositorio</span>
              </a>
              {dataProject?.link === null &&
                <div
                  className="flex items-center gap-2 px-4 py-2.5 dark:bg-white/10 dark:text-gray-200 bg-gray-100 text-gray-400 text-sm font-medium rounded-full whitespace-nowrap">
                  <Icon icon={"ri-eye-off-line"} className="text-base" />
                  <span>Sin demo pública</span>
                </div>
              }
              {dataProject?.link !== null &&
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={dataProject?.link}
                  className="flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap">
                  <Icon icon={"ri-external-link-line"} className="text-base 2xl:text-lg" />
                  <span className="2xl:text-lg">Ver proyecto en vivo</span>
                </a>
              }
            </div>
          </div>
        </div>
      }
    </div>
  )
}