"use client";

import React from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar = ({ darkMode, toggleDarkMode }: NavbarProps) => {
  return (
    <nav
      className="w-full flex items-center justify-between p-2.5 transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      <div
        className="font-extrabold pt-8 pl-16"
        style={{ fontFamily: 'var(--font-josefin), Arial, Helvetica, sans-serif', fontSize: '2.1rem', fontWeight: 800 }}
      >
        Shubh Gupta
      </div>
      <div className="flex items-center space-x-4">
        <div className="space-x-4 hidden md:block">
          <a href="/" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] transition-colors">Home</a>
          <a href="/projects" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] transition-colors">Projects</a>
          <a href="/resume" className="rounded-full font-semibold border-2 px-4 py-1 bg-[#4b2e13] text-white border-[#4b2e13] hover:bg-[#a47551] hover:border-[#a47551] dark:bg-[#f5e9da] dark:text-[#4b2e13] dark:border-[#f5e9da] dark:hover:bg-[#e2c9a0] dark:hover:border-[#e2c9a0] transition-colors">Resume</a>
        </div>
        <button
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="ml-4 p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          🌓
        </button>
        <button aria-label="Open menu" className="md:hidden ml-4">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
