"use client";

import FormationsTimeLine from "@/components/app/formation-timeline";

export default function About() {
  return (
    <section className="min-h-screen px-4 bg-black relative">
      {/* Title */}
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          About Me
        </h1>
      </div>

      {/* About card */}
      <div className="flex justify-center mb-16">
        <div className="w-full max-w-4xl rounded-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/30 backdrop-blur-sm bg-slate-900/50 shadow-2xl">
          <div className="flex flex-col items-center p-6 relative z-10">
            <h3 className="text-base md:text-lg text-white text-center leading-relaxed">
              As a computer engineer and part-time lecturer, I see myself as a
              professional who is attentive, methodical, and passionate about
              sharing knowledge. My experience in both industry and education
              has allowed me to develop an approach that is both rigorous and
              human-centered, where clarity, patience, and adaptability are at
              the core of my practice. I place great importance on collaborative
              work, effective communication, and personalized guidance, whether
              with students or within project teams. Driven by constant
              curiosity and a problem-solving mindset, I enjoy imparting not
              only technical skills but also work methods and a mindset oriented
              toward continuous learning and innovation.
            </h3>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent md:-translate-x-1/2" />
        <FormationsTimeLine />
      </div>
    </section>
  );
}
