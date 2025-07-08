import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-black">
    <Navbar />
    <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>
    <Footer />
  </div>
);

export default Layout; 