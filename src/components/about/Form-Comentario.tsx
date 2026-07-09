import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import type { TComment } from "../../types/about";
import { loadComent } from "../../service/about.service";

type Props = {
  onCommentCreated: () => void;
};
export default function FormComentario({ onCommentCreated }: Props) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { isValid },

  } = useForm<TComment>({ mode: "onChange" });

  const comment = watch("comment", "");

  const onSubmit = async (dataForm: TComment) => {

    try {
      const data = await loadComent(dataForm);
      console.log(data);
      reset();
      onCommentCreated(); // Recarga los comentarios

    } catch (err) {
      console.error(err)
    }
    // await createComment(data);

  };



  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-xl bg-gray-100 dark:bg-black/10 dark:border-gray-200/20 border-gray-200 border p-5 space-y-5"
    >
      <p className="text-xs font-semibold text-gray-600 dark:text-gray-200">
        {t("comments_subtitle")}
      </p>

      <div className="flex flex-col gap-3">
        <input
          {...register("name", {
            required: true,
            maxLength: 50,
          })}
          placeholder={t("name_placeholder")}
          className="rounded-md bg-white dark:text-white dark:bg-black/0 border border-gray-200/20   px-2 py-2 text-sm outline-none"
        />

        <textarea
          {...register("comment", {
            required: true,
            maxLength: 500,
          })}
          placeholder={t("comment_placeholder")}
          className="min-h-28 resize-none rounded-md dark:text-white dark:bg-black/0 border border-gray-200/20  bg-white px-2 py-2 text-sm outline-none"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">
          {comment.length}/500
        </span>

        <button
          type="submit"
          disabled={!isValid}
          className="flex items-center gap-1 rounded-full bg-sky-400 px-3 py-1 text-white disabled:cursor-not-allowed dark:disabled:opacity-70 disabled:opacity-50"
        >
          <Icon icon="ri-send-plane-line" />
          <span className="text-sm">
            {t("publish_comment")}
          </span>
        </button>
      </div>
    </form>
  );
}