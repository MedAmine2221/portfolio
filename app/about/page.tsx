"use client";
import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    index: 2,
    date: "09-2021 — 07-2024",
    title: "National Engineering Diploma in Software Engineering – Specialization: Software Architecture",
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    index: 1,
    date: "09-2018 — 06-2021",
    title: "Applied Bachelor's Degree in Industrial Computing",
    company: "ISSAT SO",
    location: "Sousse",
    gradient: "from-pink-500 to-rose-600",
  },
];

export default function ProExp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            About Me
          </h1>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent hidden md:block transform -translate-x-1/2"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent md:hidden"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-row`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card contenant les items */}
                  <div className={`w-full md:w-7/12 max-w-7xl ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                    <div
                      className={`w-80 rounded-2xl transition-all duration-500 transform hover:-translate-y-2
                      border border-slate-700/30 overflow-hidden backdrop-blur-sm
                      ${hoveredIndex === index ? "scale-[1.02]" : ""}
                      md:${isLeft ? "-translate-x-[60%]" : "translate-x-[60%]"}
                      ${isLeft ? "-translate-x-[30%]" : "translate-x-[2%]"}
                      bg-slate-900/50 shadow-2xl
                      relative group
                      `}
                    >
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${exp.gradient} opacity-20 blur-2xl`}
                        ></div>
                      </div>

                      <div className={`h-2 bg-gradient-to-r ${exp.gradient} shadow-lg shadow-purple-500/50`}></div>

                      <div className="flex items-center flex-col p-6 relative z-10">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                        </div>
                      </div>

                      <div
                        className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${exp.gradient} opacity-5 rounded-full blur-2xl pointer-events-none`}
                      ></div>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} shadow-2xl flex items-center justify-center border-4 border-slate-900 transition-transform duration-300 ${
                        hoveredIndex === index ? "scale-125 rotate-12 shadow-2xl shadow-purple-500/50" : ""
                      }`}
                    >
                      <p className="w-7 h-7 text-white text-2xl">{exp.index}</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1 px-4 py-3 bg-slate-900/70 rounded-2xl shadow-lg border border-slate-700/50 text-sm font-semibold text-slate-300 min-w-[240px] max-w-[420px] backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      {exp.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Dernier icon flotant */}
            <div className="relative flex items-center justify-center md:justify-center flex-row">
              <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-500/50 flex items-center justify-center border-4 border-slate-900 animate-bounce">
                  <Briefcase className="text-3xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
