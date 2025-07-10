import React from 'react';
import HobbiesCarousel from '@/components/HobbiesCarousel';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] py-12">
      <img
        src="https://ui-avatars.com/api/?name=Shubh+Gupta&size=128"
        alt="Shubh Gupta"
        className="rounded-full w-32 h-32 mb-4"
      />
      <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-main)' }}>Shubh Gupta</h1>
      <h2 className="text-xl mb-4" style={{ color: 'var(--text-main)' }}>Developer, Designer, Creator</h2>
      <p className="max-w-xl text-center mb-6" style={{ color: 'var(--text-main)' }}>
        Welcome to my portfolio! I build modern web apps with Next.js, TypeScript, and Tailwind CSS. Explore my projects, resume, and hobbies below.
      </p>
      <div className="flex space-x-4 mb-8">
        <a href="https://github.com/username" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-main)' }}>GitHub</a>
        <a href="https://linkedin.com/in/username" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-main)' }}>LinkedIn</a>
        <a href="https://instagram.com/username" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-main)' }}>Instagram</a>
        <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: 'var(--text-main)' }}>
          Scholar
        </a>
      </div>
      <HobbiesCarousel />
    </section>
  );
}
