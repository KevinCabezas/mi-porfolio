import { Icon } from "@iconify/react";

export default function FormComentario() {

  return (

    <form className="bor rounded-xl bg-gray-100  space-y-5 p-5 ">
      <p className="text-xs text-gray-600 font-semibold">Deja tu opinión sobre este portfolio</p>
      <div className="flex-col flex gap-3">
        <input type="text" placeholder="Tu nombre" className="bg-white text-sm px-2 rounded-md py-1" />
        <textarea name="" id="" placeholder="Escribe tu comentario..." className="bg-white text-sm px-2 rounded-md py-1"></textarea>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-400">0/500</span>
        <button className="px-3 py-1 text-white flex items-center gap-1 rounded-full bg-sky-400">
          <Icon icon={"ri-send-plane-line"} ></Icon>
          <span className="text-sm">Publicar</span>
        </button>
      </div>
    </form>
  )
}