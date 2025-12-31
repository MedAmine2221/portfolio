"use client";
import ProjectsList from "@/components/app/project-List";

export default function Projects() {
  return (
    <div className="min-h-screen px-4">
      <div className="text-center mb-24 space-y-6">
        <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
          Projects
        </h1>
      </div>
      <ProjectsList />
    </div>
  );
}
