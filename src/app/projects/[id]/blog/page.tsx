"use client";

import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import projects from '@/data/projects.json';
import { getBlogContent } from '@/data/blogContent';
import { notFound } from 'next/navigation';

interface BlogPageProps {
  params: Promise<{ id: string }>;
}

const ProjectBlogPage = ({ params }: BlogPageProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(null);
  const [project, setProject] = useState<any>(null);
  const [blogContent, setBlogContent] = useState<any>(null);

  React.useEffect(() => {
    const initPage = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
      const foundProject = projects.find((p: any) => p.id === resolved.id);
      setProject(foundProject);
      
      // Get dynamic blog content based on project ID
      const content = getBlogContent(resolved.id);
      setBlogContent(content);
    };
    initPage();
  }, [params]);

  if (!project || !blogContent) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="py-8 sm:py-12 md:py-16 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Title and GitHub Link */}
        <div className="flex items-center justify-between mb-6 mx-4 sm:mx-6 md:mx-8 relative z-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            {project.title} Blog
          </h1>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#4b2e13] bg-[#4b2e13] text-white hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation"
            style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" className="mr-1">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub
          </a>
        </div>
        
        {/* Mobile Navigation Button */}
        <div className="md:hidden mb-4 mx-4 sm:mx-6 md:mx-8">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-[#4b2e13] bg-[#4b2e13] text-white hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation"
            style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
          >
            <span className="text-lg">{isMobileMenuOpen ? '✕' : '☰'}</span>
            Navigation
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mb-6 mx-4 sm:mx-6 md:mx-8 bg-[#f5e9da] rounded-lg p-4 border-2 border-[#e2c9a0] relative z-20">
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Table of Contents
            </h3>
                          <div className="flex flex-col gap-2">
                {blogContent.sections.map((section: any) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 rounded-lg hover:bg-[#e2c9a0] transition-colors duration-200 text-sm"
                    style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
          </div>
        )}
        
        {/* Desktop Layout */}
        <div className="flex gap-8 min-w-0">
          {/* Desktop Navigation Sidebar */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-[#f5e9da] rounded-3xl p-6 border-2 border-[#e2c9a0] sticky top-8 relative z-20">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                Table of Contents
              </h3>
              <div className="flex flex-col gap-2">
                {blogContent.sections.map((section: any) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="text-left px-3 py-2 rounded-lg hover:bg-[#e2c9a0] transition-colors duration-200 text-sm"
                    style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Block */}
          <div className="flex-1 min-w-0">
            <div className="bg-[#f5e9da] rounded-3xl mx-4 sm:mx-6 md:mx-8 p-8 sm:p-10 md:p-12 relative z-20 overflow-hidden">
              <p className="mb-8 text-base sm:text-lg text-[#2d1e13] leading-relaxed" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                {project.summary}
              </p>
              <article className="prose prose-lg max-w-none overflow-hidden" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                <div className="space-y-8">
                  {blogContent.sections.map((section: any) => (
                    <section key={section.id} id={section.id}>
                      <h2 className="text-xl font-bold mb-4 break-words" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
                        {section.title}
                      </h2>
                      <div className="text-base sm:text-lg leading-relaxed prose prose-lg max-w-none overflow-hidden">
                        <ReactMarkdown 
                          remarkPlugins={[remarkGfm]}
                          components={{
                            h1: ({children}) => <h1 className="text-2xl font-bold mb-4 mt-6 break-words">{children}</h1>,
                            h2: ({children}) => <h2 className="text-xl font-bold mb-3 mt-5 break-words">{children}</h2>,
                            h3: ({children}) => <h3 className="text-lg font-semibold mb-2 mt-4 break-words">{children}</h3>,
                            p: ({children}) => <p className="mb-4 leading-relaxed break-words">{children}</p>,
                            ul: ({children}) => <ul className="list-disc list-inside mb-4 space-y-1 break-words">{children}</ul>,
                            ol: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-1 break-words">{children}</ol>,
                            li: ({children}) => <li className="ml-4 break-words">{children}</li>,
                            code: ({children, className}) => {
                              const match = /language-(\w+)/.exec(className || '');
                              const language = match ? match[1] : '';
                              return !className ? (
                                <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 break-all">{children}</code>
                              ) : (
                                <SyntaxHighlighter
                                  style={tomorrow}
                                  language={language}
                                  PreTag="div"
                                  className="rounded-lg mb-4 overflow-x-auto"
                                >
                                  {String(children).replace(/\n$/, '')}
                                </SyntaxHighlighter>
                              );
                            },
                            blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4 break-words">{children}</blockquote>,
                            strong: ({children}) => <strong className="font-bold break-words">{children}</strong>,
                            em: ({children}) => <em className="italic break-words">{children}</em>,
                          }}
                        >
                          {section.content}
                        </ReactMarkdown>
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlogPage;
