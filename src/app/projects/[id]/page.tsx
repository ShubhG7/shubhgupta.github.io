import React from 'react';
import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';

// Color mapping for tech stack tags (same as projects page)
const tagColors: { [key: string]: string } = {
  'Next.js': 'bg-blue-100 text-blue-800 border-blue-200',
  'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'TypeScript': 'bg-blue-100 text-blue-800 border-blue-200',
  'JavaScript': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Tailwind CSS': 'bg-teal-100 text-teal-800 border-teal-200',
  'Node.js': 'bg-green-100 text-green-800 border-green-200',
  'MongoDB': 'bg-green-100 text-green-800 border-green-200',
  'PostgreSQL': 'bg-blue-100 text-blue-800 border-blue-200',
  'Firebase': 'bg-orange-100 text-orange-800 border-orange-200',
  'Stripe': 'bg-purple-100 text-purple-800 border-purple-200',
  'Prisma': 'bg-gray-100 text-gray-800 border-gray-200',
  'NextAuth': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'framer-motion': 'bg-pink-100 text-pink-800 border-pink-200',
  'OpenWeather API': 'bg-sky-100 text-sky-800 border-sky-200',
  'Chart.js': 'bg-red-100 text-red-800 border-red-200',
  'CSS3': 'bg-blue-100 text-blue-800 border-blue-200',
};

interface ProjectPageProps {
  params: { id: string };
}

const ProjectDetailPage = async ({ params }: ProjectPageProps) => {
  const project = projects.find((p: any) => p.id === params.id);
  if (!project) return notFound();

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full h-60 object-cover rounded mb-4" />
      <p className="mb-4 text-gray-700">{project.summary}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech: string) => (
          <span 
            key={tech} 
            className={`px-3 py-1 rounded-full text-sm font-medium border ${tagColors[tech] || 'bg-gray-100 text-gray-800 border-gray-200'}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-6">
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 hover:text-blue-800 underline font-medium"
        >
          View on GitHub
        </a>
        <a 
          href={project.demo} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-green-600 hover:text-green-800 underline font-medium"
        >
          Live Demo
        </a>
        <a
          href={`/projects/${project.id}/blog`}
          className="ml-auto px-4 py-2 rounded bg-[#4b2e13] text-white font-semibold hover:bg-[#2d1e13] transition-colors"
        >
          Read Blog
        </a>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
