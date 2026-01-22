"use client";

import { Card, CardFooter, CardHeader } from "@heroui/card";
import { Button, Image } from "@heroui/react";
import { useState, useEffect, useRef, useMemo } from "react";
import { FiZoomIn } from "react-icons/fi";
import { useTranslations } from "next-intl";

import { projects } from "@/constants";
import ZoomImage from "@/components/app/zoomImage";

export default function ProjectsList() {
  const t = useTranslations();
  const projectList = projects(t);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [cardScales, setCardScales] = useState<Record<number, number>>({});
  const [currentProject, setCurrentProject] = useState<number | null>(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);

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

  /* Reveal animation */
  useEffect(() => {
    projectList.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, []);

  /* Scale on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const newScales: Record<number, number> = {};

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const cardCenter = rect.top + rect.height / 2;
        const screenCenter = windowHeight / 2;

        const distance = Math.abs(cardCenter - screenCenter);
        const maxDistance = windowHeight / 2;
        const scale = Math.max(
          0.92,
          Math.min(1.08, 1.08 - (distance / maxDistance) * 0.25),
        );

        newScales[index] = scale;
      });

      setCardScales(newScales);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [visibleCards]);

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-14 px-4 sm:px-6">
        {projectList.map((item, index) => {
          const isVisible = visibleCards.includes(index);
          const scale = cardScales[index] || 0.92;

          return (
            <div
              key={item.index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-24 opacity-0"
              }`}
              style={{ transform: `scale(${scale})` }}
            >
              <Card
                isFooterBlurred
                className="
                  w-full
                  h-[480px]
                  sm:h-[560px]
                  md:h-[650px]
                  lg:h-[720px]
                  shadow-2xl
                  hover:shadow-purple-500/50
                  transition-shadow
                "
              >
                {/* HEADER */}
                <CardHeader
                  className="
                    absolute z-10 top-0
                    flex flex-col gap-3
                    items-start
                    bg-gradient-to-b from-black/75 to-transparent
                    p-5 sm:p-7
                  "
                >
                  <h4 className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
                    {item.title}
                  </h4>

                  <div className="flex items-center gap-3">
                    <Button
                      size="sm"
                      onPress={() => setCurrentProject(item.index)}
                    >
                      <FiZoomIn />
                    </Button>

                    {item.encours && (
                      <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-semibold">
                        {t("in_Progress")}
                      </span>
                    )}
                  </div>
                </CardHeader>

                {/* IMAGE */}
                <Image
                  removeWrapper
                  alt={`${item.title} background`}
                  className="z-0 w-full h-full object-center"
                  src={
                    item.img?.[0] ||
                    "https://via.placeholder.com/800x400?text=Project+Image"
                  }
                />

                {/* FOOTER */}
                <CardFooter
                  className="
                    absolute bottom-0 z-10
                    w-full
                    bg-black/65 backdrop-blur-md
                    border-t border-purple-500/40
                    p-6 sm:p-8 md:p-10
                  "
                >
                  <div className="flex flex-col md:flex-row gap-6 w-full">
                    {/* Description + skills */}
                    <div className="flex flex-col gap-4 flex-1">
                      <p className="text-base text-center sm:text-lg text-white/90 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {item.skills.slice(0, 5).map((skill, idx) => (
                          <span
                            key={idx}
                            className="
                              text-xs sm:text-sm
                              bg-purple-500/30
                              text-purple-200
                              px-3 py-1.5
                              rounded-md
                            "
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row md:flex-col gap-3 justify-end">
                      {item.lien && (
                        <Button
                          as="a"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
                          href={item.lien}
                          radius="full"
                          size="md"
                          target="_blank"
                        >
                          View App
                        </Button>
                      )}

                      {item.githubLink && (
                        <Button
                          as="a"
                          className="bg-gray-800 text-white hover:bg-gray-700"
                          href={item.githubLink}
                          radius="full"
                          size="md"
                          target="_blank"
                        >
                          GitHub
                        </Button>
                      )}
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
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
