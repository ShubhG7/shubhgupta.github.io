import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

async function getProject(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/projects/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const project = await getProject(params.id);
  if (!project) return notFound();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-4">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((tech: string) => (
          <span key={tech} className="bg-gray-100 dark:bg-gray-800 text-xs px-3 py-1 rounded-full font-medium">
            {tech}
          </span>
        ))}
      </div>
      <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">{project.description}</p>
      <div className="flex gap-4">
        <Link href={project.githubUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded bg-black text-white dark:bg-white dark:text-black font-semibold hover:underline">GitHub Repo</Link>
        {project.demoUrl && (
          <Link href={project.demoUrl} target="_blank" rel="noopener" className="px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Live Demo</Link>
        )}
      </div>
    </motion.section>
  );
} 