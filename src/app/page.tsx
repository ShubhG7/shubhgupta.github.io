"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HobbiesCarousel from '@/components/HobbiesCarousel';
import ContactSection from '@/components/ContactSection';
import ChatSection from '@/components/ChatSection';

export default function Home() {
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  // Ensure page scrolls to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const profileImages = [
    {src: '/images/profile/DSC08855-removebg-preview.png', alt: 'Shubh Gupta'},
  ]

  const [activeImage, setActiveImage] = useState(0);
  const handleImageClick = () => {
    setActiveImage((prev) => (prev + 1) % profileImages.length);
  }

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 sm:px-8 md:px-16 py-12 sm:py-16 md:py-20 w-full z-5">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-full max-w-7xl gap-8 lg:gap-12">
          <div className="relative z-10 flex flex-col items-start justify-start flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 text-left" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Hi, I&apos;m Shubh 👋
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 sm:mb-8 text-left leading-tight" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">a</span> <span 
                className="transition-colors duration-300 cursor-pointer select-none active:scale-95" 
                style={{ color: activeTitle === 'engineer' ? '#800000' : 'var(--text-main)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = activeTitle === 'engineer' ? '#800000' : 'var(--text-main)'}
                onTouchStart={() => setActiveTitle(activeTitle === 'engineer' ? null : 'engineer')}
                onClick={() => setActiveTitle(activeTitle === 'engineer' ? null : 'engineer')}
              >
                Software Engineer
              </span>
              <br/>
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">&</span> <span 
                className="transition-colors duration-300 cursor-pointer select-none active:scale-95" 
                style={{ color: activeTitle === 'scientist' ? '#800000' : 'var(--text-main)' }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#800000'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.color = activeTitle === 'scientist' ? '#800000' : 'var(--text-main)'}
                onTouchStart={() => setActiveTitle(activeTitle === 'scientist' ? null : 'scientist')}
                onClick={() => setActiveTitle(activeTitle === 'scientist' ? null : 'scientist')}
              >
                Data Scientist
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl text-left leading-relaxed" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              I have a passion for building intelligent systems and solving complex problems. From ML pipelines to full-stack applications, I&apos;m ready to bring my skills to your team.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16 text-lg sm:text-xl md:text-2xl justify-start" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              <a href="https://github.com/ShubhG7" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/shubhngupta/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>LinkedIn</a>
              <a href="https://www.instagram.com/shubhguptaaa/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>Instagram</a>
              <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:underline active:underline transition-all duration-200 active:scale-95 touch-manipulation" style={{ color: 'var(--text-main)' }}>
                Scholar
              </a>
            </div>
          </div>
          
          {/* Image positioned below text on mobile, beside on desktop */}
          <div className="relative z-10 flex items-center justify-center lg:justify-end lg:items-center mt-8 lg:mt-0">
            <Image 
              src={profileImages[activeImage].src} 
              onClick={handleImageClick}
              width={563}
              height={563}
              className="w-[24rem] h-[24rem] sm:w-60 sm:h-60 md:w-[17rem] md:h-[17rem] lg:w-[21rem] lg:h-[21rem] xl:w-[26rem] xl:h-[26rem] opacity-80 hover:opacity-100 transition-opacity duration-300 hover:scale-110 active:scale-95 touch-manipulation cursor-pointer object-contain" 
              alt={profileImages[activeImage].alt}
            />
          </div>
        </div>
      </section>
      
      {/* Chat Section */}
      <ChatSection />
      
      {/* Projects Banner */}
      <section className="w-full py-8 sm:py-12 md:py-16 relative z-10 max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="bg-gradient-to-r from-[#f5e9da] to-[#e2c9a0] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 right-4 w-32 h-32 border-4 border-[#a47551] rounded-full"></div>
            <div className="absolute bottom-8 left-8 w-24 h-24 border-4 border-[#a47551] rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-[#a47551] rounded-full"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8" style={{ color: '#2d1e13', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Checkout my projects! 🚀
            </h2>
            
            <div className="flex items-center justify-center mb-8">
              {/* Projects Button */}
              <Link
                href="/projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#4b2e13] text-white rounded-full font-bold text-lg sm:text-xl shadow-lg hover:bg-[#a47551] hover:shadow-xl active:bg-[#a47551] active:scale-95 transition-all duration-300 touch-manipulation border-2 border-[#4b2e13] hover:border-[#a47551]"
                style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}
              >
                <span>View Projects</span>
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                  className="transform group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14M12 5l7 7-7"/>
                </svg>
              </Link>
            </div>
            
            <p className="text-lg sm:text-xl text-[#2d1e13] max-w-2xl mx-auto opacity-90" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
              Explore my portfolio of machine learning, web development, and data science projects
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
    </>
  );
}
