"use client";
import { useTranslations } from "next-intl";

import ProjectsList from "@/components/app/project-List";

export default function Projects() {
  const t = useTranslations("navbar");

  return (
    <div className="min-h-screen px-4 flex flex-col justify-center items-center ">
      <div className="mb-10" />
      <div className="text-center mb-5 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          {t("projects")}
        </h1>
      </div>
      <ProjectsList />
    </div>
  );
}
