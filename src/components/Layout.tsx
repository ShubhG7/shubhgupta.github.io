"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import LandingBlob from './LandingBlob';
// import CursorGradient from './CursorGradient';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('darkMode');
      if (stored === 'true') return true;
      if (stored === 'false') return false;
    }
    return false;
  });
  const [hasMounted, setHasMounted] = useState(false);
  
  // Show blob on all pages except resume
  const showBlob = pathname !== '/resume';

  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored === 'true') setDarkMode(true);
    if (stored === 'false') setDarkMode(false);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  if (!hasMounted) return null;

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-300"
      style={{ backgroundColor: 'var(--bg-main)', color: 'var(--text-main)' }}
    >
      {/* <CursorGradient /> */}
      {showBlob && <LandingBlob />}
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-1 container mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
