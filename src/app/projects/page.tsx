"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Project = {
  id: string;
  title: string;
  summary: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [allTechs, setAllTechs] = useState<string[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        // Collect all unique techs
        const techSet = new Set<string>();
        data.forEach((p: Project) => p.techStack.forEach((t) => techSet.add(t)));
        setAllTechs(Array.from(techSet).sort());
      });
  }, []);

  const toggleTech = (tech: string) => {
    setSelectedTechs(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSelectedTechs([]);
  };

  const filteredProjects = selectedTechs.length > 0
    ? projects.filter((p) => selectedTechs.every(tech => p.techStack.includes(tech)))
    : projects;

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-center">Projects Gallery</h1>
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        <button
          className={`px-4 py-2 rounded-full border font-medium transition-colors ${
            selectedTechs.length === 0
              ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          }`}
          onClick={clearFilters}
        >
          All
        </button>
        {allTechs.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 rounded-full border font-medium transition-colors ${
              selectedTechs.includes(tech)
                ? "bg-black text-white dark:bg-white dark:text-black border-black dark:border-white"
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            }`}
            onClick={() => toggleTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>
      {selectedTechs.length > 0 && (
        <div className="text-center mb-6">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Showing projects with: <span className="font-medium">{selectedTechs.join(", ")}</span>
          </p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors"
          >
            <div className="relative w-full h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i < 3}
              />
            </div>
            <div className="p-5">
              <Link href={`/projects/${project.id}`} className="block">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">{project.summary}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
              <div className="flex items-center gap-2 mt-2">
                <a
                  href={project.githubUrl || "https://github.com/placeholder"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
                  className="inline-flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="text-gray-700 dark:text-gray-200">
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.226v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 