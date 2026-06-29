// import { t } from "i18next";
import CommentsPage from "../components/Comment-Page";
import InfoPage from "../components/Info-Page";
import ProfileSection from "../components/ProfileSection"
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const [tab, setTab] = useState<"info" | "comments">("comments");
  const { t } = useTranslation();

  return (
    <main className=" bg-gray-100 dark:bg-black/90">

      <ProfileSection></ProfileSection>

      <div className="flex bg-white px-4 lg:px-16 2xl:px-22 font-semibold dark:bg-black/10 text-gray-500 dark:text-gray-300 text-sm  gap-3 ">
        <button onClick={() => setTab("info")}
          className={`bg-s border-b-2 px-2 ${tab === "info" ? "border-sky-400 text-sky-400" : "border-white dark:border-black/0"} pb-2`}>

          {t("info_title")}
        </button>
        <button onClick={() => setTab("comments")}
          className={`bg-s border-b-2 px-2 ${tab === "comments" ? "border-sky-400 text-sky-400" : "border-white dark:border-black/0"} pb-2`}>
          {t("comment")}
        </button>
      </div>

      {tab === "info" && <InfoPage />}
      {tab === "comments" && <CommentsPage />}

    </main>
  )
}