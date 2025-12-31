"use client";

import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

import { formations } from "@/constants";

export default function FormationsTimeLine() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative py-8">
      {/* Vertical timeline line - hidden on mobile, visible on md+ */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-pink-500 -translate-x-1/2" />

      {/* Mobile timeline line - visible on mobile only */}
      <div className="md:hidden absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-pink-500" />

      <div className="space-y-12 md:space-y-16">
        {formations.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card - Left/Right on desktop, full width on mobile */}
              <div
                className={`w-full md:w-5/12 ${isLeft ? "md:text-right" : "md:text-left"} pl-20 md:pl-0`}
              >
                <div
                  className={`
                    w-full max-w-md ${isLeft ? "md:ml-auto" : "md:mr-auto"}
                    rounded-2xl transition-all duration-500 transform
                    hover:-translate-y-2
                    border border-slate-700/30 overflow-hidden backdrop-blur-sm
                    bg-slate-900/50 shadow-2xl relative group
                    ${hoveredIndex === index ? "scale-[1.02] shadow-purple-500/30" : ""}
                  `}
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-20 blur-2xl`}
                    />
                  </div>

                  {/* Top gradient bar */}
                  <div className={`h-2 bg-gradient-to-r ${exp.gradient}`} />

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <h3 className="text-lg md:text-xl font-bold text-white leading-tight text-center">
                      {exp.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Timeline Icon - Fixed position */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${exp.gradient} shadow-2xl flex items-center justify-center border-4 border-slate-900 transition-all duration-300 ${
                    hoveredIndex === index
                      ? "scale-125 rotate-12 shadow-purple-500/50"
                      : ""
                  }`}
                >
                  <span className="text-white text-xl md:text-2xl font-bold">
                    {exp.index}
                  </span>
                </div>
              </div>

              {/* Info panel - Right/Left on desktop, below card on mobile */}
              <div
                className={`w-full md:w-5/12 ${isLeft ? "ml-auto md:text-left" : "mr-auto md:text-right"} pl-20 md:pl-0`}
              >
                <div
                  className={`inline-flex flex-col gap-2 px-4 py-3 bg-slate-900/70 rounded-xl shadow-lg border border-slate-700/50 backdrop-blur-sm ${isLeft ? "" : "md:ml-auto"}`}
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Calendar className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{exp.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
                    <Briefcase className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Final icon at the bottom */}
        <div className="relative pt-8">
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/50 flex items-center justify-center border-4 border-slate-900 animate-bounce">
              <Briefcase className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
