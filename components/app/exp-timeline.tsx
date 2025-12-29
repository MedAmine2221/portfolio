"use client"
import { useState } from "react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { FaJava } from "react-icons/fa";
import { experiences } from "@/constants";

export default function ProExpTimeLine() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="space-y-16">
      {experiences.map((exp, index) => {
        const Icon = exp.icon
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
                  {exp.badge && (
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/20">
                        <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                        {exp.badge}
                      </span>
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
                  <ul className="space-y-3">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 group/item">
                        <span
                          className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient} flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300 shadow-lg`}
                        ></span>
                        <span className="leading-relaxed text-sm group-hover/item:text-white transition-colors">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-700/50 text-slate-200 border border-slate-600/50 hover:border-slate-500/70 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
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
                {exp.company === "Educanet" ? (
                  <FaJava className="w-7 h-7 text-white" />
                ) : (
                  <Icon className="w-7 h-7 text-white" />
                )}
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
  )
}
