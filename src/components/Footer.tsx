import React from 'react';

const Footer = () => (
  <footer className="w-full text-center p-4 border-t border-[#4b2e13] bg-[#f5e9da] text-[#2d1e13] text-sm">
    <div>© {new Date().getFullYear()} Shubh Gupta</div>
    <div className="space-x-2 mt-2">
      <a href="https://github.com/username" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline">GitHub</a>
      <a href="https://linkedin.com/in/username" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline">LinkedIn</a>
      <a href="https://instagram.com/username" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-[#4b2e13] hover:underline">Instagram</a>
    </div>
  </footer>
);

export default Footer;
