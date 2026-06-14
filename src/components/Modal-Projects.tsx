import { Icon } from "@iconify/react"
type key = {
  img: string
}
type Props = key & {
  onClose: () => void;
}
export default function ModalProject({ onClose }: Props) {

  const url = "https://shxmmbwfmloumeouxyhm.supabase.co/storage/v1/object/public/portfolio/projects/1778128082330-habitacion.webp"
  return (
    <div className="bg-gray-300/30 dark:bg-black/50 h-screen w-screen backdrop-blur-md px-4 lg:px-62.5 2xl:px-62.5 fixed py-10 left-0 top-0 z-50 ">
      <div className="bg-white dark:bg-black/80 h-full border border-gray-200 dark:border-gray-200/20 rounded-xl overflow-y-auto space-y-5 ">
        <div className="flex justify-between p-6 border-b border-gray-100 dark:border-gray-200/20">
          <div className="flex items-center gap-2 ">
            <div className="bg-sky-50  rounded-full h-10 w-10 items-center justify-center flex ">
              <Icon icon={"hugeicons:closed-caption-alt"} className="text-xl text-sky-600 "></Icon>
            </div>
            <div className="space-y-0.5">
              <h2 className="font-bold text-xl text-gray-900 dark:text-white ">API REST Node.js</h2>
              <div className="text-xs space-x-2">
                <span className="bg-gray-200 px-2 py-0.5 rounded-full ">En producción</span>
                <span className="text-gray-400">2023</span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="flex items-center justify-center h-9 w-9 rounded-full group hover:bg-gray-100 duration-300 transition-all " >
            <Icon icon={"ic:round-close"} className="text-xl text-gray-400 group-hover:text-gray-700 duration-300 transition-all" ></Icon>
          </button>
        </div>
        <div className="px-6 space-y-6 pb-6">
          <div className="w-full h-74 bg-amber-300 rounded-xl ">
            <img src={url} alt="" className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 rounded-lg bg-red-400"><img src={url} alt="" className="h-full w-full object-cover rounded-lg" /></div>
            <div className="h-16 rounded-lg bg-red-400"><img src={url} alt="" className="h-full w-full object-cover rounded-lg" /></div>
            <div className="h-16 rounded-lg bg-red-400"><img src={url} alt="" className="h-full w-full object-cover rounded-lg" /></div>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400 ">
              DESCRIPCIÓN
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-200">
              Aplicación web completa para gestión de proyectos y tareas al estilo Jira/Trello. Incluye tablero Kanban con drag & drop, asignación de tareas a miembros del equipo, seguimiento de tiempo, reportes con gráficos interactivos, notificaciones en tiempo real y exportación de datos a Excel/PDF. Soporta múltiples workspaces y roles de usuario.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-400">
              STACK TECNOLÓGICO
            </h3>

            <div className="flex flex-wrap gap-2">

              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200 bg-gray-50  border border-gray-200 dark:bg-white/10 dark:border-gray-200/20 rounded-lg px-3 py-2">
                <Icon icon={"mdi:package-variant-closed"} className="text-base" ></Icon>
                <span className="text-sm font-medium " >Node.js</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <Icon icon={"mdi:package-variant-closed"} className="text-base" ></Icon>
                <span className="text-sm font-medium text-gray-700" >Node.js</span>
              </div>

              <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
                <Icon icon={"mdi:package-variant-closed"} className="text-base" ></Icon>
                <span className="text-sm font-medium text-gray-700" >Node.js</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-gray-200/20">
            <a className="flex items-center gap-2 px-4 py-2.5 bg-gray-900 hover:bg-gray-700 text-white dark:bg-white dark:text-gray-900 text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap">
              <Icon icon={"ri-github-fill"} className="text-base" />
              <span>Ver repositorio</span>
            </a>
            <a className="flex items-center gap-2 px-4 py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-full transition-colors cursor-pointer whitespace-nowrap">
              <Icon icon={"ri-external-link-line"} className="text-base" />
              <span>Sin demo pública</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}