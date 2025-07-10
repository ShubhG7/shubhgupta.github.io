import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen flex flex-col bg-[#f5e9da] text-[#2d1e13]">
    <Navbar />
    <main className="flex-1 container mx-auto px-4">{children}</main>
    <Footer />
  </div>
);

export default Layout;
