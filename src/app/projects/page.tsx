'use client';

import React, { useState, useMemo } from 'react';
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
  'Python': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'Flask': 'bg-gray-100 text-gray-800 border-gray-200',
  'Express': 'bg-green-100 text-green-800 border-green-200',
  'Socket.io': 'bg-purple-100 text-purple-800 border-purple-200',
  'JWT': 'bg-orange-100 text-orange-800 border-orange-200',
  'Three.js': 'bg-indigo-100 text-indigo-800 border-indigo-200',
  'WebGL': 'bg-pink-100 text-pink-800 border-pink-200',
  'Redux': 'bg-purple-100 text-purple-800 border-purple-200',
  'Firebase': 'bg-orange-100 text-orange-800 border-orange-200',
  'Chart.js': 'bg-green-100 text-green-800 border-green-200',
  'CSS3': 'bg-blue-100 text-blue-800 border-blue-200',
  'HTML': 'bg-orange-100 text-orange-800 border-orange-200',
  'Braintree': 'bg-green-100 text-green-800 border-green-200',
  'NextAuth': 'bg-blue-100 text-blue-800 border-blue-200',
  'OpenWeather API': 'bg-cyan-100 text-cyan-800 border-cyan-200',
  'framer-motion': 'bg-pink-100 text-pink-800 border-pink-200',
};

const ProjectsPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter projects based on selected tags and search term
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((project: any) => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.techStack.some((tech: string) => 
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    // Filter by selected tags
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project: any) => 
        selectedTags.every(tag => project.techStack.includes(tag))
      );
    }
    
    return filtered;
  }, [selectedTags, searchTerm]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div className="py-8 relative z-10">
      <h1 className="text-3xl font-bold mb-6" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>Projects</h1>
      
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search projects, technologies, or descriptions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border-2 border-[#e2c9a0] rounded-lg bg-[#f5e9da] text-[#2d1e13] placeholder-[#a47551] focus:outline-none focus:border-[#a47551] transition-colors duration-200 text-lg"
          style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
        />
      </div>
      
      {/* Filter UI */}
      <div className="mb-8 relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>Filter by Technology</h2>
          {selectedTags.length > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm underline"
              style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
            >
              Clear all filters
            </button>
          )}
        </div>
        
        <div className="w-full flex flex-wrap gap-2 justify-start mb-4" style={{ fontSize: '0.924rem' }}>
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
                  fontSize: '0.924rem',
                  fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif',
                  boxShadow: isSelected ? '0 2px 8px 0 rgba(75,46,19,0.15)' : undefined,
                }}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {(selectedTags.length > 0 || searchTerm) && (
          <div className="mt-4 p-3 bg-[#f5e9da] rounded-lg border border-[#e2c9a0]">
            <div className="text-sm font-semibold mb-2" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
            {searchTerm && (
              <div className="text-xs mb-1" style={{ color: 'var(--text-main)' }}>
                Search: "{searchTerm}"
              </div>
            )}
            {selectedTags.length > 0 && (
              <div className="text-xs" style={{ color: 'var(--text-main)' }}>
                Active filters: {selectedTags.join(', ')}
              </div>
            )}
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
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-full border-2 border-[#e2c9a0] bg-[#f5e9da] text-[#2d1e13] text-xs font-semibold shadow-sm hover:bg-[#e2c9a0] transition-colors"
                style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem' }}
              >
                GitHub
              </a>
              <a
                href={`/projects/${project.id}`}
                className="px-3 py-1 rounded-full border-2 border-[#e2c9a0] bg-[#f5e9da] text-[#2d1e13] text-xs font-semibold shadow-sm hover:bg-[#e2c9a0] transition-colors"
                style={{ fontSize: '0.7rem', padding: '0.35rem 0.9rem' }}
              >
                View Details
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