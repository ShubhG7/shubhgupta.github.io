"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-100/60 via-transparent to-pink-100/60 dark:from-blue-900/40 dark:to-pink-900/40" />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg mb-2">
          <Image src="/profile.jpg" alt="Shubh Gupta" width={112} height={112} className="object-cover w-full h-full" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Shubh Gupta</h1>
        <h2 className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">Software & ML Engineer</h2>
        <p className="max-w-xl text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-6">
          I build full-stack products that blend data-driven ML, scalable APIs, and beautiful UIs. Explore my journey from ML pipelines and LLMs to blockchain dApps and classical algorithms.
        </p>
        <Link
          href="/projects"
          className="inline-block px-8 py-3 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-200 mb-4"
        >
          Explore Projects
        </Link>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/shubh" target="_blank" rel="noopener" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="currentColor" className="text-gray-700 dark:text-gray-200" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.046.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.104.823 2.226v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z"/></svg>
          </a>
          <a href="https://linkedin.com/in/shubhgupta" target="_blank" rel="noopener" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <svg width="28" height="28" fill="currentColor" className="text-blue-700 dark:text-blue-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.966 0-1.75-.79-1.75-1.76 0-.97.784-1.76 1.75-1.76s1.75.79 1.75 1.76c0 .97-.784 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
