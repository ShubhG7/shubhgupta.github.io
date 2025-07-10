import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between p-2.5 text-[#2d1e13] bg-[#f5e9da]">
      <div
        className="font-extrabold"
        style={{ fontFamily: 'var(--font-josefin), Arial, Helvetica, sans-serif', fontSize: '2.1rem', fontWeight: 800 }}
      >
        Shubh Gupta
      </div>
      <div className="flex items-center space-x-4">
        <div className="space-x-4 hidden md:block">
          <a href="/" className="hover:text-[#4b2e13] hover:underline">Home</a>
          <a href="/projects" className="hover:text-[#4b2e13] hover:underline">Projects</a>
          <a href="/resume" className="hover:text-[#4b2e13] hover:underline">Resume</a>
        </div>
        <button aria-label="Toggle dark mode" className="ml-4">🌙</button>
        <button aria-label="Open menu" className="md:hidden ml-4">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
