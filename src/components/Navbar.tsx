"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100); // Change to "sg" after 100px scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className="w-full flex items-center justify-between p-2.5 transition-colors duration-300 z-[9998] relative"
        style={{ 
          color: 'var(--text-main)'
        }}
      >
        <div
          className="font-extrabold pt-4 sm:pt-6 md:pt-8 pl-2 sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300"
          style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif', fontWeight: 900 }}
        >
          {isScrolled ? 'sg' : 'Shubh Gupta'}
        </div>
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <div className="space-x-4 hidden md:block">
            <Link href="/" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Home</Link>
            <Link href="/projects" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Projects</Link>
            <Link href="/resume" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Resume</Link>
          </div>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 active:bg-gray-300 dark:active:bg-gray-600 transition-all duration-200 active:scale-95 touch-manipulation"
          >
            🌓
          </button>
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu" 
            className="md:hidden ml-4 p-3 rounded-full bg-[#f5e9da] border-2 border-[#a47551] hover:bg-[#e2c9a0] active:bg-[#e2c9a0] touch-manipulation active:scale-95 transition-all duration-200"
          >
            <div className="w-5 h-5 relative">
              <span 
                className={`absolute left-0 top-0 w-5 h-0.5 bg-[#2d1e13] transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span 
                className={`absolute left-0 top-2 w-5 h-0.5 bg-[#2d1e13] transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span 
                className={`absolute left-0 top-4 w-5 h-0.5 bg-[#2d1e13] transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      <div className={`md:hidden fixed inset-0 z-[9999] backdrop-blur-sm flex items-center justify-center p-4 transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`} onClick={closeMobileMenu}>
        <div 
          className={`bg-[#f5e9da] rounded-3xl shadow-2xl border-4 border-[#a47551] max-w-sm w-full transform transition-all duration-300 ease-in-out z-[10000] ${
            isMobileMenuOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
          }`}
          style={{ 
            color: 'var(--text-main)',
            transformOrigin: 'top right'
          }}
          onClick={(e) => e.stopPropagation()}
        >
            <div className="p-8">

              <div className="flex flex-col space-y-4">
                <Link 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block rounded-2xl font-semibold border-2 px-6 py-4 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation shadow-lg"
                >
                  🏠 Home
                </Link>
                <Link 
                  href="/projects" 
                  onClick={closeMobileMenu}
                  className="block rounded-2xl font-semibold border-2 px-6 py-4 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation shadow-lg"
                >
                  💼 Projects
                </Link>
                <Link 
                  href="/resume" 
                  onClick={closeMobileMenu}
                  className="block rounded-2xl font-semibold border-2 px-6 py-4 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] transition-all duration-200 active:scale-95 touch-manipulation shadow-lg"
                >
                  📄 Resume
                </Link>
              </div>
              <div className="text-center mt-6">
                <button 
                  onClick={closeMobileMenu}
                  className="text-[#a47551] hover:text-[#4b2e13] transition-colors duration-200 font-medium"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Navbar;
