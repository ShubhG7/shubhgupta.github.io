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
          <a href="/" className="hover:underline">Home</a>
          <a href="/projects" className="hover:underline">Projects</a>
          <a href="/resume" className="hover:underline">Resume</a>
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
