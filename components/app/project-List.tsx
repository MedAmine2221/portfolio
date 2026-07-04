/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@heroui/react";
import { useState, useEffect, useMemo, useRef } from "react";
import { FiArrowUpRight, FiGithub, FiMaximize2 } from "react-icons/fi";
import { useTranslations } from "next-intl";

import { projects } from "@/constants";
import ZoomImage from "@/components/app/zoomImage";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default function ProjectsList() {
  const t = useTranslations();
  const projectList = projects(t);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentProject, setCurrentProject] = useState<number | null>(null);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projectSelected = useMemo(() => {
    const currentProj = projectList.find(
      (item) => item.index === currentProject,
    );

    return {
      img: currentProj?.img,
      title: currentProj?.title,
      desc: currentProj?.description,
    };
  }, [currentProject]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(idx) ? prev : [...prev, idx],
            );
          }
        });
      },
      { threshold: 0.1 },
    );

    cardRefs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDescription = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);

      if (next.has(index)) next.delete(index);
      else next.add(index);

      return next;
    });
  };

  return (
    <>
      <div className="">
        <div className="flex flex-col gap-8">
          {projectList.map((item, index) => {
            const isVisible = visibleCards.includes(index);
            const isExpanded = expanded.has(index);
            const fileName = `${slugify(item.title) || "project"}.tsx`;

            return (
              <div
                key={item.index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`
                  transition-all duration-700 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }
                `}
                data-index={index}
              >
                <div
                  className="
                    flex flex-col h-full
                    rounded-lg overflow-hidden
                    bg-[#0d0d12]
                    border border-white/10
                    shadow-xl shadow-black/40
                    hover:border-white/20
                    transition-colors
                  "
                >
                  {/* WINDOW CHROME */}
                  <div
                    className="
                      flex items-center gap-3
                      px-4 py-3
                      bg-white/[0.03]
                      border-b border-white/10
                    "
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>

                    <div
                      className="
                        flex items-center gap-2
                        ml-2 px-3 py-1
                        rounded-t-md
                        bg-white/[0.04]
                        border-t border-x border-white/10
                      "
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span className="font-mono text-xs text-white/60">
                        {fileName}
                      </span>
                    </div>

                    {item.encours && (
                      <span
                        className="
                          ml-auto
                          font-mono text-[10px] uppercase tracking-wide
                          text-amber-300
                          border border-amber-400/30
                          bg-amber-400/10
                          px-2 py-0.5 rounded-full
                        "
                      >
                        {t("in_Progress")}
                      </span>
                    )}
                  </div>

                  {/* BODY: PREVIEW + CONTENT SIDE BY SIDE */}
                  <div className="flex flex-col md:flex-row">
                    {/* PREVIEW / RENDER PANE */}
                    <div className="relative group w-full md:w-[45%] aspect-[16/10] md:aspect-auto shrink-0 bg-black/40 flex items-center justify-center overflow-hidden">
                      <img
                        alt={`${item.title} — aperçu`}
                        className="
                          absolute inset-0 w-full h-full
                          object-contain object-center
                          transition-transform duration-500
                          group-hover:scale-[1.02]
                        "
                        src={
                          item.img?.[0] ||
                          "https://via.placeholder.com/800x500?text=Project"
                        }
                      />

                      <button
                        aria-label="Zoomer"
                        className="
                          absolute bottom-3 right-3
                          flex items-center justify-center
                          w-8 h-8 rounded-md
                          bg-black/70 backdrop-blur-sm
                          text-white/90
                          border border-white/10
                          opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                          hover:bg-black/90
                        "
                        type="button"
                        onClick={() => setCurrentProject(item.index)}
                      >
                        <FiMaximize2 size={14} />
                      </button>
                    </div>

                    {/* CODE / CONTENT PANE */}
                    <div className="flex flex-col gap-3 p-5 sm:p-7 flex-1">
                      <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight">
                        {item.title}
                      </h3>

                      <div className="font-mono text-[13px] leading-relaxed text-emerald-400/80">
                        <span className="text-white/30">{"/**"}</span>
                        <p
                          className={`
                            text-white/55 pl-3 border-l border-white/10 my-1
                            ${isExpanded ? "" : "line-clamp-2"}
                          `}
                        >
                          {item.description}
                        </p>
                        <span className="text-white/30">*/</span>
                      </div>

                      <button
                        className="
                          self-start
                          text-xs font-mono
                          text-sky-400 hover:text-sky-300
                          transition-colors
                        "
                        type="button"
                        onClick={() => toggleDescription(index)}
                      >
                        {isExpanded ? t("moins") : t("plus")}
                      </button>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {item.skills.slice(0, 6).map((skill, idx) => (
                          <span
                            key={idx}
                            className="
                              font-mono text-[11px]
                              text-violet-300
                              bg-violet-500/10
                              border border-violet-400/20
                              px-2 py-1 rounded-md
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 pt-3 mt-auto">
                        {item.lien && (
                          <Button
                            as="a"
                            className="
                              font-mono text-xs
                              bg-white text-black font-semibold
                              hover:bg-white/90
                            "
                            endContent={<FiArrowUpRight size={14} />}
                            href={item.lien}
                            radius="sm"
                            size="sm"
                            target="_blank"
                          >
                            {t("demo")}
                          </Button>
                        )}

                        {item.githubLink && (
                          <Button
                            isIconOnly
                            aria-label="GitHub"
                            as="a"
                            className="
                              bg-transparent
                              border border-white/15
                              text-white/70
                              hover:bg-white/10 hover:text-white
                            "
                            href={item.githubLink}
                            radius="sm"
                            size="sm"
                            target="_blank"
                          >
                            <FiGithub size={15} />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <ZoomImage
        images={projectSelected.img ?? []}
        isOpen={currentProject !== null}
        projectDec={projectSelected.desc ?? ""}
        projectName={projectSelected.title ?? ""}
        onOpenChange={(open) => {
          if (!open) setCurrentProject(null);
        }}
      />
    </>
  );
}
