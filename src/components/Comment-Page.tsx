import { useEffect, useState } from "react";
import type { TComment } from "../types/about";
import { getAllComents } from "../service/about.service";
import FormComentario from "./Form-Comentario";
import { Icon } from "@iconify/react";
import { t } from "i18next";


export default function CommentsPage() {
  const [commets, setComments] = useState<TComment[]>([]);

  const loadComments = async () => {
    try {
      const data = await getAllComents();
      setComments(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div className="flex items-center flex-col py-5 px-4 lg:px-16 2xl:px-22 ">
      <div className="dark:bg-black/10 dark:border-gray-200/20 p-5 bg-white border space-y-5 border-gray-200 rounded-xl w-full lg:w-1/2 2xl:w-1/2">
        <div className="flex items-center border-b border-gray-200 dark:border-gray-200/30 justify-between pb-5">
          <h3 className="flex items-center gap-1">
            <Icon icon={"ri-chat-3-line"} className="text-sky-400 dark:text-sky-300"></Icon>
            <span className="text-sm font-semibold dark:text-white">{t("comments_title")}</span>
          </h3>
          <div className="text-xs text-gray-400 flex items-center gap-1">
            <span>{commets.length}</span>
            <span className="">
              {t("comments_count")}
            </span>
          </div>
        </div>
        <FormComentario onCommentCreated={loadComments} />

        <div className="pt-5 space-y-5  bg-r-500">
          {commets.map((c, i) => (
            <div
              key={i}
              className="dark:bg-black/10 dark:border-gray-200/20 bg-gray-100 border border-gray-200 p-5 flex gap-2 flex-col rounded-lg"
            >
              <div className="flex gap-1 items-end">
                <div className="dark:bg-gray-200/20 bg-white rounded-full p-1 border border-gray-200 dark:border-gray-200/40">
                  <Icon icon={'solar:user-linear'} className="dark:text-white text-xs"></Icon>

                </div>
                <span className="text-xs font-semibold dark:text-white">{c.name}</span>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 ">{c.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}