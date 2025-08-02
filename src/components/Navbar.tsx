"use client";

import React, { useState, useEffect } from 'react';

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
            <a href="/" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Home</a>
            <a href="/projects" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Projects</a>
            <a href="/resume" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation">Resume</a>
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
            className="md:hidden ml-4 p-2 text-2xl touch-manipulation active:scale-95 transition-transform duration-150"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999] bg-black bg-opacity-30" onClick={closeMobileMenu}>
          <div 
            className="fixed top-0 right-0 h-full w-64 shadow-xl border-l-2 border-gray-300 dark:border-gray-600 transform transition-transform duration-300 ease-in-out z-[10000]"
            style={{ 
              backgroundColor: darkMode ? '#18181b' : '#f5e9da',
              color: 'var(--text-main)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 pt-20">
              <div className="flex flex-col space-y-4">
                <a 
                  href="/" 
                  onClick={closeMobileMenu}
                  className="block rounded-full font-semibold border-2 px-4 py-3 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation"
                >
                  Home
                </a>
                <a 
                  href="/projects" 
                  onClick={closeMobileMenu}
                  className="block rounded-full font-semibold border-2 px-4 py-3 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation"
                >
                  Projects
                </a>
                <a 
                  href="/resume" 
                  onClick={closeMobileMenu}
                  className="block rounded-full font-semibold border-2 px-4 py-3 text-center bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] active:bg-[#a47551] active:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] dark:active:bg-[#e2c9a0] dark:active:border-[#e2c9a0] transition-all duration-200 active:scale-95 touch-manipulation"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
