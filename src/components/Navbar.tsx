"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  isScrolled?: boolean;
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
        <Link href="/" className="font-extrabold pt-4 sm:pt-6 md:pt-8 pl-2 sm:pl-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer touch-manipulation" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif', fontWeight: 900 }}>
          {isScrolled ? 'sg' : 'Shubh Gupta'}
        </Link>
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
          {/* Mobile Menu Button - Transitions to FAB when scrolled */}
          <button 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu" 
            className={`md:hidden transition-all duration-700 ease-in-out touch-manipulation ${
              isScrolled 
                ? 'fixed bottom-6 right-6 z-[10002] p-4 rounded-full shadow-xl transform hover:scale-110 active:scale-95' 
                : 'relative ml-4 p-3 z-[10002] rounded-full transform hover:scale-105 active:scale-95'
            } ${
              isMobileMenuOpen 
                ? 'bg-gradient-to-br from-[#e2c9a0] to-[#d4b895] border-2 border-[#8b5f3f] shadow-2xl scale-110 rotate-90' 
                : 'bg-gradient-to-br from-[#f5e9da] to-[#e2c9a0] border-2 border-[#a47551] hover:from-[#e2c9a0] hover:to-[#d4b895] hover:border-[#8b5f3f]'
            }`}
          >
            <div className="w-5 h-5 relative overflow-hidden">
              <span 
                className={`absolute left-0 w-5 h-0.5 bg-[#2d1e13] transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
                }`}
              />
              <span 
                className={`absolute left-0 top-2 w-5 h-0.5 bg-[#2d1e13] transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`}
              />
              <span 
                className={`absolute left-0 w-5 h-0.5 bg-[#2d1e13] transition-all duration-500 ease-out ${
                  isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* FAB Menu Options */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed z-[9999] pointer-events-none">
          {/* Transparent background overlay for closing */}
          <div 
            className="fixed inset-0 pointer-events-auto"
            onClick={closeMobileMenu}
          />
          
          {/* FAB Menu Items - Each positioned independently */}
          
          {/* Resume Option - Closest to FAB */}
          <div 
            className={`fixed transition-all duration-[1200ms] ease-out pointer-events-auto ${
              isMobileMenuOpen 
                ? `${isScrolled ? 'bottom-28 right-6' : 'top-20 right-6'} opacity-100 scale-100 transform translate-y-0` 
                : `${isScrolled ? 'bottom-6 right-6 transform translate-y-0' : 'top-20 right-6 transform translate-y-8'} opacity-0 scale-0`
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '150ms' : '0ms'
            }}
          >
            <Link 
              href="/resume" 
              onClick={closeMobileMenu}
              className="flex items-center bg-gradient-to-r from-[#f5e9da] to-[#e2c9a0] text-[#2d1e13] px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-150 touch-manipulation border-2 border-[#a47551]"
            >
              <span className="text-lg mr-2">📄</span>
              <span className="font-semibold text-sm whitespace-nowrap">Resume</span>
            </Link>
          </div>

          {/* Projects Option - Middle */}
          <div 
            className={`fixed transition-all duration-[1200ms] ease-out pointer-events-auto ${
              isMobileMenuOpen 
                ? `${isScrolled ? 'bottom-44 right-6' : 'top-36 right-6'} opacity-100 scale-100 transform translate-y-0` 
                : `${isScrolled ? 'bottom-6 right-6 transform translate-y-0' : 'top-20 right-6 transform translate-y-16'} opacity-0 scale-0`
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '300ms' : '0ms'
            }}
          >
            <Link 
              href="/projects" 
              onClick={closeMobileMenu}
              className="flex items-center bg-gradient-to-r from-[#f5e9da] to-[#e2c9a0] text-[#2d1e13] px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-150 touch-manipulation border-2 border-[#a47551]"
            >
              <span className="text-lg mr-2">💼</span>
              <span className="font-semibold text-sm whitespace-nowrap">Projects</span>
            </Link>
          </div>

          {/* Home Option - Farthest from FAB */}
          <div 
            className={`fixed transition-all duration-[1200ms] ease-out pointer-events-auto ${
              isMobileMenuOpen 
                ? `${isScrolled ? 'bottom-60 right-6' : 'top-52 right-6'} opacity-100 scale-100 transform translate-y-0` 
                : `${isScrolled ? 'bottom-6 right-6 transform translate-y-0' : 'top-20 right-6 transform translate-y-32'} opacity-0 scale-0`
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '450ms' : '0ms'
            }}
          >
            <Link 
              href="/" 
              onClick={closeMobileMenu}
              className="flex items-center bg-gradient-to-r from-[#f5e9da] to-[#e2c9a0] text-[#2d1e13] px-4 py-2 rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all duration-150 touch-manipulation border-2 border-[#a47551]"
            >
              <span className="text-lg mr-2">🏠</span>
              <span className="font-semibold text-sm whitespace-nowrap">Home</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
