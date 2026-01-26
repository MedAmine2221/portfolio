"use client";
import { useTranslations } from "next-intl";

import FormationsTimeLine from "@/components/app/formation-timeline";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="min-h-screen px-4 bg-black relative">
      <div className="text-center mb-10 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          {t("title")}
        </h1>
      </div>

      {/* About card */}
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-4xl rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/30 backdrop-blur-sm bg-slate-900/50 shadow-2xl">
          <div className="flex flex-col items-center p-6 relative z-10">
            <h3 className="text-base md:text-lg text-white text-center leading-relaxed">
              {t("desc")}
            </h3>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <FormationsTimeLine />
      </div>
    </section>
  );
}
