"use client";;
import ProExpTimeLine from "@/components/app/exp-timeline";

export default function ProExp() {
  return (
    <div className="w-full justify-center flex items-center flex-col">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          Professional Experience
        </h1>
      </div>
      <ProExpTimeLine />
    </div>
  );
}
