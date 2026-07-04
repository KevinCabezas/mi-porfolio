// import { t } from "i18next";
import CommentsPage from "../components/Section-Comments";
import SectionContact from "../components/Section-Contact"
import InfoPage from "../components/Section-Info";
import ProfileSection from "../components/ProfileSection"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
export default function About() {
  // const { state } = useLocation();
  const [searchParams] = useSearchParams();

  const initialTab =
    (searchParams.get("tab") as "info" | "comments" | "contact") ?? "info";

  const [tab, setTab] = useState(initialTab);
  // const [tab, setTab] = useState<"info" | "comments" | "contact">("contact");
  // const [tab, setTab] = useState<"info" | "comments" | "contact">(state?.tab ?? "info");
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
        <button onClick={() => setTab("contact")}
          className={`bg-s border-b-2 px-2 ${tab === "contact" ? "border-sky-400 text-sky-400" : "border-white dark:border-black/0"} pb-2`}>
          {t("nav_contact")}
        </button>
      </div>

      {tab === "info" && <InfoPage />}
      {tab === "comments" && <CommentsPage />}
      {tab === "contact" && <SectionContact />}

    </main>
  )
}