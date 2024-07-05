import React from "react";
import { ProjectScroll } from "@/components/ProjectScroll";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      <header className="py-16 sm:py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            My Projects
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300 mx-auto">
            Explore a collection of my latest web development projects. Each one
            represents a unique challenge and showcases different technologies
            and skills.
          </p>
        </div>
      </header>

      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ProjectScroll />
        </div>
      </section>
    </div>
  );
}
