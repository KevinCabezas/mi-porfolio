import { Icon } from "@iconify/react";
import type { TContact } from "../../types/about";
import { useState } from "react";

export default function CardContact({ title, description, icon, btn, link, copi }: TContact) {


  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!copi) return;

    try {
      await navigator.clipboard.writeText(copi);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Error al copiar:", error);
    }
  };
  return (


    <div
      className=" dark:bg-black/10 dark:border-gray-200/20 bg-white border flex justify-between  border-gray-200 rounded-xl p-3 lg:p-5 2xl:p-7 lg:flex-row items-start gap-4 2xl:gap-6 transition-all duration-200"
    >
      <div className="flex flex-col flex-1 gap-3 w-full justify-between h-full">
        <div className="flex items-center gap-2">
          <div className="p-1 flex items-center justify-center bg-sky-50 rounded-full transition-all shrink-0">
            <Icon icon={icon} className="text-sky-600 text-lg 2xl:text-2xl" />
          </div>
          <span className="text-sm 2xl:text-lg  font-semibold dark:text-gray-200 text-gray-900 transition-all">
            {title}
          </span>
        </div>

        <div className="flex flex-col gap-1 w-full bg-yellow- ">

          <span className="text-xs 2xl:text-base dark:text-gray-400 text-gray-500">
            {description}
          </span>
        </div>
      </div>

      <div

        className="text-xs w-fit flex flex-col gap-2 text-gray-300 bg-red- h-full items-end justify-around lg:justify-end  font-semibold transition-all">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={link}
          className="h-6 w-15   flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white rounded-full transition-colors">
          {btn}
        </a>
        <button
          onClick={handleCopy}
          className="h-6 w-15 group  flex items-center justify-center dark:hover:text-gray-700 dark:text-gray-200 dark:bg-black/10 bg-gray-200 dark:border dark:border-gray-200/20 hover:bg-gray-200 text-gray-600  rounded-full transition-colors"
        >
          {copied ? (<Icon icon="mdi:check"  className="dark:text-white text-gray-700 group-hover:text-gray-900 text-lg" />) : (<>Copiar</>)}
        </button>
      </div>
    </div>
  )
}