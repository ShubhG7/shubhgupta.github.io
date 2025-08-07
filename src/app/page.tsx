"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import HobbiesCarousel from '@/components/HobbiesCarousel';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [filter, setFilter] = useState('programming');
  const [activeTitle, setActiveTitle] = useState<string | null>(null);
  const [expandedTimeline, setExpandedTimeline] = useState<number | null>(null);

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

  const profileImages = [
    {src: '/favicon.svg', alt: 'Shubh Gupta'},
    {src: '/file.svg', alt: 'Shubh Gupta'},
  ]

  const [activeImage, setActiveImage] = useState(0);
  const handleImageClick = () => {
    setActiveImage((prev) => (prev + 1) % profileImages.length);
  }

  return (
    <>
      <section className="relative flex flex-col items-start justify-center min-h-screen overflow-hidden px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 w-full z-5">
        <div className="flex flex-col lg:flex-row items-start justify-between w-full max-w-7xl gap-8 lg:gap-12">
          <div className="relative z-10 flex flex-col items-start justify-start flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-left" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Hi, I&apos;m Shubh 👋
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-left leading-tight" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              a <span 
                className="transition-colors duration-300 cursor-pointer select-none active:scale-95" 
                style={{ color: activeTitle === 'engineer' ? '#800000' : 'var(--text-main)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = activeTitle === 'engineer' ? '#800000' : 'var(--text-main)'}
                onTouchStart={() => setActiveTitle(activeTitle === 'engineer' ? null : 'engineer')}
                onClick={() => setActiveTitle(activeTitle === 'engineer' ? null : 'engineer')}
              >
                Software Engineer
              </span><br/>
              & <span 
                className="transition-colors duration-300 cursor-pointer select-none active:scale-95" 
                style={{ color: activeTitle === 'scientist' ? '#800000' : 'var(--text-main)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = activeTitle === 'scientist' ? '#800000' : 'var(--text-main)'}
                onTouchStart={() => setActiveTitle(activeTitle === 'scientist' ? null : 'scientist')}
                onClick={() => setActiveTitle(activeTitle === 'scientist' ? null : 'scientist')}
              >
                Data Scientist
              </span><br/>
              based in Boston
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl text-left leading-relaxed" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              I have a passion for building intelligent systems and solving complex problems. From ML pipelines to full-stack applications, I&apos;m ready to bring my skills to your team.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              <a href="https://github.com/ShubhG7" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/shubhngupta/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>LinkedIn</a>
              <a href="https://www.instagram.com/shubhguptaaa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>Instagram</a>
              <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>
                Scholar
              </a>
            </div>
          </div>
          
          {/* Image positioned beside text */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end lg:items-start pt-16 lg:pt-40">
            <Image 
              src={profileImages[activeImage].src} 
              onClick={handleImageClick}
              width={160}
              height={160}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 active:scale-95 touch-manipulation cursor-pointer" 
              alt={profileImages[activeImage].alt}
            />
          </div>
        </div>
      </section>
      <section className="w-full bg-[#f5e9da] min-h-[80vh] py-8 sm:py-12 md:py-16 relative z-10 rounded-3xl mx-4 sm:mx-6 md:mx-8">
        <div className="max-w-3xl mx-auto px-8 sm:px-12 md:px-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8" style={{ color: '#2d1e13' }}>Highlights</h2>
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8">
            <button
              className={`px-3 sm:px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-sm sm:text-base touch-manipulation active:scale-95 ${filter === 'programming' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white active:bg-[#a47551] active:text-white'}`}
              onClick={() => setFilter('programming')}
            >
              Programming
            </button>
            <button
              className={`px-3 sm:px-4 py-2 rounded-full font-semibold border-2 transition-all duration-200 text-sm sm:text-base touch-manipulation active:scale-95 ${filter === 'life' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white active:bg-[#a47551] active:text-white'}`}
              onClick={() => setFilter('life')}
            >
              Life
            </button>
          </div>
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-[#a47551] w-full">
            {timelineData.filter(e => filter === e.type).map((event, idx) => (
              <div key={idx} className="mb-8 group relative">
                {/* Dot: only visible when not hovered/expanded */}
                <div className={`absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#a47551] rounded-full border-2 border-white dark:border-gray-900 z-10 transition-opacity duration-200 ${expandedTimeline === idx ? 'opacity-0' : 'opacity-100'} group-hover:opacity-0`} />
                {/* Event Tile */}
                <div 
                  className="transition-all duration-300 cursor-pointer max-w-full text-[#2d1e13] touch-manipulation"
                  onClick={() => setExpandedTimeline(expandedTimeline === idx ? null : idx)}
                >
                  <div className={`text-lg font-semibold transition-all duration-300 inline-block text-[#2d1e13] ${expandedTimeline === idx ? 'scale-110 bg-[#f5e9da] shadow-lg rounded-xl px-6 py-4 border-2 border-[#a47551]' : ''} group-hover:scale-110 group-hover:bg-[#f5e9da] group-hover:shadow-lg group-hover:rounded-xl group-hover:px-6 group-hover:py-4 group-hover:border-2 group-hover:border-[#a47551]`}>
                    {event.title}
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ${expandedTimeline === idx ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'} group-hover:max-h-40 group-hover:mt-2 group-hover:opacity-100`}>
                    <div className="text-base mt-2 text-[#2d1e13]">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
