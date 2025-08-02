'use client';

import React, { useState, useMemo, useEffect } from 'react';
import projects from '@/data/projects.json';

// Get all unique tech stack tags
const allTechStack = Array.from(
  new Set(projects.flatMap((project: any) => project.techStack))
).sort();

// Color mapping for tech stack tags
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

const ProjectsPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setDarkMode(document.documentElement.classList.contains('dark'));
    }
  }, []);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) return projects;
    
    return projects.filter((project: any) => 
      selectedTags.every(tag => project.techStack.includes(tag))
    );
  }, [selectedTags]);

  const toggleTag = (tag: string) => {
    console.log('Toggling tag:', tag, 'Current selectedTags:', selectedTags);
    setSelectedTags(prev => {
      const newTags = prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag];
      console.log('New selectedTags:', newTags);
      return newTags;
    });
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="py-8 relative z-10">
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-main)' }}>Projects</h1>
      
      {/* Filter UI */}
      <div className="mb-8 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-main)' }}>Filter by Technology</h2>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm underline"
              style={{ color: 'var(--text-main)' }}
            >
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="w-full flex flex-wrap gap-2 justify-start mb-4" style={{ fontSize: '0.84rem' }}>
          {allTechStack.map((tag) => {
            const isSelected = selectedTags.includes(tag);
            const isHovered = hoveredTag === tag;
            let backgroundColor = isSelected ? '#4b2e13' : '#f5e9da';
            let color = isSelected ? '#fff' : '#2d1e13';
            let borderColor = isSelected ? '#4b2e13' : '#e2c9a0';
            if (isHovered) {
              if (isSelected) {
                backgroundColor = '#2d1e13';
                borderColor = '#2d1e13';
              } else {
                backgroundColor = '#e2c9a0';
                borderColor = '#a47551';
              }
            }
            return (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                onMouseEnter={() => setHoveredTag(tag)}
                onMouseLeave={() => setHoveredTag(null)}
                className="transition-colors duration-150 text-center mr-1 mb-1 font-semibold rounded-full border-2"
                style={{
                  backgroundColor,
                  color,
                  borderColor,
                  padding: '0.42rem 1.08rem',
                  fontSize: '0.84rem',
                  boxShadow: isSelected ? '0 2px 8px 0 rgba(75,46,19,0.15)' : undefined,
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>
        
        {selectedTags.length > 0 && (
          <div className="mt-3 text-sm" style={{ color: 'var(--text-main)' }}>
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        )}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project: any) => (
          <div key={project.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow bg-white relative z-10">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-40 object-cover rounded mb-4" 
            />
            <h2 className="text-xl font-semibold mb-4 mt-2" style={{ color: '#2d1e13' }}>{project.title}</h2>
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">{project.summary}</p>
            <div className="flex flex-wrap gap-2 mb-4 mt-2">
              {project.techStack.map((tech: string) => (
                <span 
                  key={tech} 
                  className={`px-2 py-1 rounded text-xs font-medium border ${tagColors[tech] || 'bg-gray-100 text-gray-800 border-gray-200'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4 justify-between">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-[#e2c9a0] bg-[#f5e9da] text-[#2d1e13] text-xs font-semibold shadow-sm hover:bg-[#e2c9a0] transition-all"
                style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem' }}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-[#e2c9a0] bg-[#f5e9da] text-[#2d1e13] text-xs font-semibold shadow-sm hover:bg-[#e2c9a0] transition-all"
                style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem' }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M14 3h7v7"/><path d="M5 19l16-16"/><path d="M21 21H3V3"/></svg>
                Demo
              </a>
              <a
                href={`/projects/${project.id}/blog`}
                className="flex items-center gap-1 px-3 py-1 rounded-full border-2 border-[#e2c9a0] bg-[#f5e9da] text-[#2d1e13] text-xs font-semibold shadow-sm hover:bg-[#e2c9a0] transition-all"
                style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem' }}
              >
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="mr-1"><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22h11a2.5 2.5 0 0 0 2.5-2.5v-15A2.5 2.5 0 0 0 17.5 2h-11A2.5 2.5 0 0 0 4 4.5v15z"/><path d="M8 6h8M8 10h8M8 14h6"/></svg>
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p style={{ color: 'var(--text-main)' }}>No projects match the selected filters.</p>
          <button
            onClick={clearFilters}
            className="mt-2 underline"
            style={{ color: 'var(--text-main)' }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
