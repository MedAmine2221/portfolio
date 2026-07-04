"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { mesServices } from "@/constants";

export default function ServicesSection() {
  const t = useTranslations();
  const services = mesServices(t);

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* HEADER */}
      <div className="flex flex-col items-center text-center gap-3 mb-12 md:mb-16">
        <span className="font-mono text-xs text-violet-400 tracking-widest uppercase">
          {t("services")}
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
          {t("service-quest")}
        </h2>
        <p className="text-white/55 max-w-lg text-sm sm:text-base">
          {t("service-desc")}
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              group flex flex-col gap-4
              rounded-lg p-6
              bg-[#0d0d12]
              border border-white/10
              hover:border-violet-400/30
              transition-colors
            "
          >
            <div
              className="
                w-11 h-11 flex items-center justify-center
                rounded-md
                bg-violet-500/10
                border border-violet-400/20
                text-violet-300
              "
            >
              {service.icon}
            </div>

            <span className="font-mono text-xs text-white/40 tracking-wide">
              {service.eyebrow}
            </span>

            <h3 className="text-lg font-bold text-white leading-snug">
              {service.title}
            </h3>

            <p className="text-sm text-white/60 leading-relaxed flex-1">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {service.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="
                    font-mono text-[11px]
                    text-violet-300
                    bg-violet-500/10
                    border border-violet-400/20
                    px-2 py-1 rounded-md
                  "
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              className="
                flex items-center gap-1
                text-sm font-mono text-sky-400
                hover:text-sky-300
                transition-colors
                pt-1
              "
              href="/contact"
            >
              {t("contact-me")}
              <FiArrowUpRight
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                size={14}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
