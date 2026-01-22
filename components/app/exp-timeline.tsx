"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { FaJava } from "react-icons/fa";

import { experiences } from "@/constants";
import { useTranslations } from "next-intl";

export default function ProExpTimeLine() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const t = useTranslations();
  const exp = experiences(t);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));

            setVisibleItems((prev) =>
              prev.includes(index) ? prev : [...prev, index],
            );
          }
        });
      },
      { threshold: 0.2 },
    );

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen flex justify-center bg-slate-900/10 py-12">
      <div className="w-full max-w-5xl space-y-24 px-4">
        {" "}
        {/* Changé de max-w-4xl à max-w-5xl */}
        {exp.map((exp, index) => {
          const Icon = exp.icon;
          const isLeft = index % 2 === 0;
          const isVisible = visibleItems.includes(index);

          return (
            <div
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`relative flex flex-col md:flex-row items-center
                ${!isLeft ? "md:flex-row-reverse" : ""}
                transition-all duration-700 ease-out
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}
              `}
              data-index={index}
            >
              {/* Card */}
              <div className="w-full md:w-6/12 px-4">
                {" "}
                {/* Changé de md:w-5/12 à md:w-6/12 */}
                <div
                  className={`
                    w-full rounded-2xl bg-slate-900/60 backdrop-blur
                    border border-slate-700/40 shadow-2xl
                  `}
                >
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`} />

                  <div className="p-4 md:p-6 space-y-4">
                    {exp.badge && (
                      <span
                        className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold rounded-full
                        bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      >
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                        {exp.badge}
                      </span>
                    )}

                    <h3 className="text-lg md:text-xl font-bold text-white">
                      {exp.title}
                    </h3>

                    <ul className="space-y-3">
                      {exp.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-slate-300 text-sm"
                        >
                          <span
                            className={`mt-2 w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient}`}
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-200 border border-slate-600/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Icon */}
              <div className="relative z-10 my-6 md:my-0 md:mx-8">
                {" "}
                {/* Augmenté md:mx-6 à md:mx-8 */}
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${exp.gradient}
                    border-4 border-slate-900 shadow-xl flex items-center justify-center
                    transition-transform duration-500
                    ${isVisible ? "scale-100 rotate-0" : "scale-75 rotate-12"}
                  `}
                >
                  {exp.company === "Educanet" ? (
                    <FaJava className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  ) : (
                    <Icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-6/12 px-4">
                {" "}
                {/* Changé de md:w-5/12 à md:w-6/12 */}
                <div className="w-full rounded-2xl bg-slate-900/70 backdrop-blur border border-slate-700/50 shadow-lg p-4 space-y-2 text-sm text-slate-300">
                  <div className="flex gap-2 items-center">
                    <Calendar className="w-4 h-4" />
                    {exp.date}
                  </div>
                  <div className="flex gap-2 items-center">
                    <Briefcase className="w-4 h-4" />
                    {exp.company}
                  </div>
                  <div className="flex gap-2 items-center text-slate-400">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {/* End Icon */}
        <div className="relative flex justify-center">
          <div
            className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600
            border-4 border-slate-900 shadow-2xl animate-bounce flex items-center justify-center
          "
          >
            <Briefcase className="w-5 h-5 md:w-7 md:h-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
