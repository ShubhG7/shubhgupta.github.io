"use client";

import React, { useState } from 'react';
import HobbiesCarousel from '@/components/HobbiesCarousel';

export default function Home() {
  const [filter, setFilter] = useState('programming');

  const timelineData = [
    // Education
    { type: 'life', title: '2017 – 2021', description: '🎓 Bachelor of Engineering in Information Technology at Thadomal Shahani Engineering College, Mumbai University. Developed foundational skills in software engineering, data structures, and algorithms.' },
    { type: 'life', title: '2023 – 2025', description: '🎓 Master of Science in Computer Science at Boston University. Specialized in distributed systems, AI, and scalable application development. Graduated January 2025.' },
    // Career Journey
    { type: 'programming', title: '2020', description: '🛠 Intern at Ernst & Young (EY). Worked with deployment team to optimize fraud detection models using PySpark and helped automate AWS-based ML model deployments, reducing infrastructure costs.' },
    { type: 'programming', title: '2021 – 2022', description: '💼 Software Engineer at Kings Expomedia. Migrated flagship website from legacy PHP to modern stack (Next.js/Node.js). Built automated proofreading and fact-checking pipelines. Led efforts during expo season launches and helped implement CI/CD post-event.' },
    { type: 'programming', title: '2024', description: '🚀 Capstone Project – ResumeAI. Built an AI-powered ATS using React, Fastify, PostgreSQL, and Claude API. Implemented Keycloak for RBAC, used Redis for caching, and deployed on AWS ECS.' },
    { type: 'programming', title: 'Jan 2025 – Present', description: '🧑‍💻 Web Scraper Developer (Part-time) at Changing the Present. Built a scalable scraper to collect university student body data across the U.S. Automated outreach and analytics for the nonprofit\'s campaigns.' },
    { type: 'programming', title: '2025', description: '📜 Certified Azure AI Engineer Associate. Gained credentials in deploying AI models in production environments using Azure tools.' },
  ];

  return (
    <>
      <section className="relative flex flex-col items-start justify-center min-h-screen overflow-hidden px-16 py-20 w-full">
        <div className="relative z-10 flex flex-col items-start justify-start w-full max-w-7xl">
          <h2 className="text-2xl mb-6 text-left" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            Hi, I&apos;m Shubh Gupta 👋
          </h2>
          <h1 className="text-8xl font-bold mb-8 text-left leading-tight" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            a <span 
              className="transition-colors duration-300 hover:cursor-pointer" 
              style={{ color: 'var(--text-main)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-main)'}
            >
              Software Engineer
            </span><br/>
            & <span 
              className="transition-colors duration-300 hover:cursor-pointer" 
              style={{ color: 'var(--text-main)' }}
              onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'var(--text-main)'}
            >
              Data Scientist
            </span><br/>
            based in Boston
          </h1>
          <p className="text-xl mb-12 max-w-3xl text-left leading-relaxed" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            I have a passion for building intelligent systems and solving complex problems. From ML pipelines to full-stack applications, I&apos;m ready to bring my skills to your team.
          </p>
          <div className="flex space-x-8 mb-16 text-2xl" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            <a href="https://github.com/username" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>GitHub</a>
            <a href="https://linkedin.com/in/username" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>LinkedIn</a>
            <a href="https://instagram.com/username" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>Instagram</a>
            <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>
              Scholar
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-16 flex items-center space-x-2" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
          <span className="text-sm">scroll</span>
          <div className="w-12 h-0.5 bg-current"></div>
        </div>
      </section>
      {/* Full-width border between landing and highlights */}
      <div className="w-full h-0.5 bg-[#a47551] dark:bg-gray-600 m-0 p-0" style={{margin:0,padding:0}} />
      <section className="w-full bg-[#f5e9da] min-h-[80vh] py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#2d1e13' }}>Highlights</h2>
          {/* Filter Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full font-semibold border-2 transition-colors duration-200 ${filter === 'programming' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white'}`}
              onClick={() => setFilter('programming')}
            >
              Programming
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold border-2 transition-colors duration-200 ${filter === 'life' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white'}`}
              onClick={() => setFilter('life')}
            >
              Life
            </button>
          </div>
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-[#a47551]">
            {timelineData.filter(e => filter === e.type).map((event, idx) => (
              <div key={idx} className="mb-8 group relative">
                {/* Dot: only visible when not hovered/expanded */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#a47551] rounded-full border-2 border-white dark:border-gray-900 z-10 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                {/* Event Tile */}
                <div className="transition-all duration-300 cursor-pointer max-w-xl text-[#2d1e13]">
                  <div className="text-lg font-semibold group-hover:scale-110 group-hover:bg-[#f5e9da] group-hover:shadow-lg group-hover:rounded-xl group-hover:px-6 group-hover:py-4 group-hover:border-2 group-hover:border-[#a47551] transition-all duration-300 inline-block text-[#2d1e13]">
                    {event.title}
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-hover:mt-2 group-hover:opacity-100 opacity-0 transition-all duration-300">
                    <div className="text-base mt-2 text-[#2d1e13]">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
