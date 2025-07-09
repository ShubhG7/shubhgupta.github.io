"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Résumé" },
];

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <button
      aria-label="Toggle dark mode"
      className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      onClick={() => setDark((d) => !d)}
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Toggle menu clicked, current state:", isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-8 flex items-center justify-between border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 z-50"
    >
      <Link href="/" className="font-bold text-lg tracking-tight">Shubh Gupta</Link>
      
      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-2">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`px-4 py-2 rounded font-medium transition-colors ${
              pathname === link.href
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <DarkModeToggle />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-2">
        <DarkModeToggle />
        <button
          onClick={toggleMenu}
          className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors border border-gray-300 dark:border-gray-600"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="font-bold text-lg">Menu</span>
                  <button
                    onClick={closeMenu}
                    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMenu}
                      className={`px-4 py-3 rounded font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-black text-white dark:bg-white dark:text-black"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
} 