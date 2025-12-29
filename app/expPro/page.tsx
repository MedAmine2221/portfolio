// "use client";
// import { useState } from "react";
// import {
//   Briefcase,
//   Code,
//   Smartphone,
//   GraduationCap,
//   Laptop,
//   Rocket,
//   MapPin,
//   Calendar,
// } from "lucide-react";
// import Image from "next/image";
// import { FaJava } from "react-icons/fa";

// const experiences = [
//   {
//     date: "09-2025 — Present",
//     title: "Part-time Lecturer",
//     company: "ISSAT SO",
//     location: "Sousse",
//     badge: "CURRENT",
//     icon: GraduationCap,
//     gradient: "from-purple-500 to-indigo-600",
//     items: [
//       "Supervision of practical exercises and student projects (Programming, OOP).",
//       "Facilitation of sessions focused on problem-solving and hands-on application",
//       "Academic monitoring and student support",
//     ],
//     skills: [
//       "JAVA",
//       "POO"
//     ]
//   },
//   {
//     date: "07-2024 — 07-2025",
//     title: "Full Stack Developer",
//     company: "WAIALYS DEV",
//     location: "Sahloul",
//     icon: Code,
//     gradient: "from-pink-500 to-rose-600",
//     items: [
//       "Contributed to the development of SAAS MAI DE, a powerful SaaS platform that streamlines payer assessment analysis and supports clinical trial design and market access strategy across the product lifecycle.",
//       "Participated in the development of components for Educap, an educational mobile application.",
//       "Developed DentalFlow, a medical mobile application for a dental center, focusing on dental prosthetics.",
//       "Developed Waialys Med, a medical mobile application."
//     ],
//     skills: [
//       "NextJS",
//       "NestJS",
//       "React Native",
//       "Git",
//       "Scrum"
//     ]
//   },
//   {
//     date: "02-2024 — 06-2024",
//     title: "Final-year engineering internship full stack developer",
//     company: "WAIALYS DEV",
//     location: "Sahloul",
//     icon: Laptop,
//     gradient: "from-cyan-500 to-blue-600",
//     items: [
//       "Development of a comprehensive business management application.",
//     ],
//     skills: [
//       "NextJS",
//       "NestJS",
//       "Git",
//       "Scrum"
//     ]
//   },
//   {
//     date: "08-2023",
//     title: "Summer internship Mobile Developer",
//     company: "Relead",
//     location: "Technopole Sousse",
//     icon: Smartphone,
//     gradient: "from-amber-500 to-orange-600",
//     items: ["Development of a mobile application for employee management"],
//     skills: [
//       "Flask",
//       "Flutter"
//     ]
//   },
//   {
//     date: "08-2023",
//     title: "Summer internship SpringBoot Developer",
//     company: "Educanet",
//     location: "Sahloul",
//     icon: "",
//     gradient: "from-amber-500 to-orange-600",
//     items: ["Development of a web application for employee and training management."],
//     skills: [
//       "SpringBoot MVC",
//       "HTML",
//       "CSS",
//       "Bootstrap"
//     ]
//   },
//   {
//     date: "02-2021 — 05-2021",
//     title: "Bachelor's Final Project",
//     company: "Enova Robotics",
//     location: "Tunisia",
//     icon: Smartphone,
//     gradient: "from-emerald-500 to-teal-600",
//     items: [
//       "Designed and developed a robot control application.",
//     ],
//     skills: [
//       "Flask",
//       "React Native"
//     ]
//   },
// ];

// export default function ProExp() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <section className="min-h-screen py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-24 space-y-6">
//           <h1 className="text-2xl md:text-4xl font-bold bg-clip-text">
//             Professional Experience
//           </h1>
//         </div>

//         <div className="relative">
//           {/* Timeline vertical line */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-300 to-transparent hidden md:block transform -translate-x-1/2"></div>
//           <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 via-purple-300 to-transparent md:hidden"></div>

//           <div className="space-y-16">
//             {experiences.map((exp, index) => {
//               const Icon = exp.icon;
//               const isLeft = index % 2 === 0;

//               return (
//                 <div
//                   key={index}
//                   className={`relative flex items-center ${
//                     isLeft ? "md:flex-row" : "md:flex-row-reverse"
//                   } flex-row`}
//                   onMouseEnter={() => setHoveredIndex(index)}
//                   onMouseLeave={() => setHoveredIndex(null)}
//                 >
//                   {/* Card contenant les items */}
//                   <div
//                     className={`w-full md:w-7/12 max-w-2xl ml-16 md:ml-0 ${
//                       isLeft ? "md:pr-12" : "md:pl-12"
//                     }`}
//                   >
//                     <div
//                       className={`w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl
//                       transition-all duration-500 transform hover:-translate-y-2
//                       border border-slate-100 overflow-hidden
//                       ${hoveredIndex === index ? "scale-[1.02]" : ""}
//                       md:${isLeft ? "-translate-x-[60%]" : "translate-x-[60%]"}
//                       ${isLeft ? "-translate-x-[30%]" : "translate-x-[2%]"}
//                       `}
//                     >
//                       <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
//                       <div className="flex items-center flex-col p-6">
//                         {exp.badge && (
//                           <div className="flex items-center gap-2">
//                             <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
//                               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
//                               {exp.badge}
//                             </span>
//                           </div>
//                         )}
//                         <div>
//                           <h3 className="text-2xl font-bold text-slate-900 mb-2">
//                             {exp.title}
//                           </h3>
//                         </div>

//                         <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

//                         <ul className="space-y-3">
//                           {exp.items.map((item, i) => (
//                             <li
//                               key={i}
//                               className="flex items-start gap-3 text-slate-700 group"
//                             >
//                               <span
//                                 className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${exp.gradient} flex-shrink-0 group-hover:scale-125 transition-transform duration-300`}
//                               ></span>
//                               <span className="leading-relaxed text-sm group-hover:text-slate-900 transition-colors">
//                                 {item}
//                               </span>
//                             </li>
//                           ))}
//                         </ul>
//                         <div className="flex flex-wrap gap-2 mt-2">
//                           {exp.skills.map((skill, index) => (
//                             <span
//                               key={index}
//                               className="px-3 py-1 text-xs font-semibold rounded-full bg-neutral-200 text-neutral-600 border border-neutral-300"
//                             >
//                               {skill}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                       <div
//                         className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${exp.gradient} opacity-10 rounded-full blur-2xl pointer-events-none`}
//                       ></div>
//                     </div>
//                   </div>

//                   {/* Icon */}
//                   <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
//                     <div
//                       className={`w-16 h-16 rounded-full bg-gradient-to-br ${exp.gradient} shadow-lg flex items-center justify-center border-4 border-white transition-transform duration-300 ${
//                         hoveredIndex === index ? "scale-125 rotate-12" : ""
//                       }`}
//                     >
//                       {exp.company === "Educanet" ? <FaJava className="w-7 h-7 text-white" /> : <Icon className="w-7 h-7 text-white" />}
//                     </div>
//                   </div>
//                   <div className="flex flex-col gap-1 px-4 py-3 bg-white rounded-2xl shadow-md text-sm font-semibold text-slate-700 border border-slate-100 min-w-[240px] max-w-[420px]">
//                     <div className="flex items-center gap-2">
//                       <Calendar className="w-4 h-4 text-slate-500" />
//                       {exp.date}
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <Briefcase className="w-4 h-4 text-slate-500" />
//                       {exp.company}
//                     </div>
//                     <div className="flex items-center gap-2 text-slate-500">
//                       <MapPin className="w-4 h-4" />
//                       {exp.location}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}

//             {/* Dernier icon flotant */}
//             <div className="relative flex items-center justify-center md:justify-center flex-row">
//               <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10">
//                 <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg flex items-center justify-center border-4 border-white animate-bounce">
//                   <Briefcase className="text-3xl" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"
import { useState } from "react"
import { Briefcase, Code, Smartphone, GraduationCap, Laptop, MapPin, Calendar } from "lucide-react"
import { FaJava } from "react-icons/fa"

const experiences = [
  {
    date: "09-2025 — Present",
    title: "Part-time Lecturer",
    company: "ISSAT SO",
    location: "Sousse",
    badge: "CURRENT",
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-600",
    items: [
      "Supervision of practical exercises and student projects (Programming, OOP).",
      "Facilitation of sessions focused on problem-solving and hands-on application",
      "Academic monitoring and student support",
    ],
    skills: ["JAVA", "POO"],
  },
  {
    date: "07-2024 — 07-2025",
    title: "Full Stack Developer",
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Code,
    gradient: "from-pink-500 to-rose-600",
    items: [
      "Contributed to the development of SAAS MAI DE, a powerful SaaS platform that streamlines payer assessment analysis and supports clinical trial design and market access strategy across the product lifecycle.",
      "Participated in the development of components for Educap, an educational mobile application.",
      "Developed DentalFlow, a medical mobile application for a dental center, focusing on dental prosthetics.",
      "Developed Waialys Med, a medical mobile application.",
    ],
    skills: ["NextJS", "NestJS", "React Native", "Git", "Scrum"],
  },
  {
    date: "02-2024 — 06-2024",
    title: "Final-year engineering internship full stack developer",
    company: "WAIALYS DEV",
    location: "Sahloul",
    icon: Laptop,
    gradient: "from-cyan-500 to-blue-600",
    items: ["Development of a comprehensive business management application."],
    skills: ["NextJS", "NestJS", "Git", "Scrum"],
  },
  {
    date: "08-2023",
    title: "Summer internship Mobile Developer",
    company: "Relead",
    location: "Technopole Sousse",
    icon: Smartphone,
    gradient: "from-amber-500 to-orange-600",
    items: ["Development of a mobile application for employee management"],
    skills: ["Flask", "Flutter"],
  },
  {
    date: "08-2023",
    title: "Summer internship SpringBoot Developer",
    company: "Educanet",
    location: "Sahloul",
    icon: "",
    gradient: "from-amber-500 to-orange-600",
    items: ["Development of a web application for employee and training management."],
    skills: ["SpringBoot MVC", "HTML", "CSS", "Bootstrap"],
  },
  {
    date: "02-2021 — 05-2021",
    title: "Bachelor's Final Project",
    company: "Enova Robotics",
    location: "Tunisia",
    icon: Smartphone,
    gradient: "from-emerald-500 to-teal-600",
    items: ["Designed and developed a robot control application."],
    skills: ["Flask", "React Native"],
  },
]

export default function ProExp() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="min-h-screen py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Professional Experience
          </h1>
        </div>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent hidden md:block transform -translate-x-1/2"></div>
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent md:hidden"></div>

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
        </div>
      </div>
    </section>
  )
}
