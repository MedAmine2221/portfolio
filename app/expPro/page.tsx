"use client";;
import ProExpTimeLine from "@/components/app/exp-timeline";

export default function ProExp() {
  return (
    <section className="min-h-screen py-20 px-4 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900 opacity-40 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Professional Experience
          </h1>
        </div>
        <ProExpTimeLine />
      </div>
    </section>
  )
}
