"use client";

import React, { useState } from 'react';
import HobbiesCarousel from '@/components/HobbiesCarousel';

export default function Home() {
  const [filter, setFilter] = useState('programming');

  const timelineData = [
    // Life events
    { type: 'life', title: '2013–2016', description: 'At Thakur International School, I juggled football, tennis, and ICSE exams — learning early how to multitask (and how to fake understanding Shakespeare).' },
    { type: 'life', title: '2016–2018', description: 'Joined Pace Junior Science College for HSC. It was all physics, chemistry, and caffeine. This is where I realized that solving problems felt more natural than memorizing them — a clue that engineering was the right path.' },
    { type: 'life', title: '2018–2019', description: 'Took a dedicated gap year to prepare for JEE. It was one of the hardest, most formative years of my life. I learned not just math and coding basics, but also focus, failure, and persistence — the real kind that doesn\'t come with a progress bar.' },
    // Programming events
    { type: 'programming', title: 'Aug 2019', description: 'Entered Thadomal Shahani Engineering College (TSEC) with barely any coding experience, just curiosity and stubbornness. That changed quickly.' },
    { type: 'programming', title: '2019–2023', description: 'My BE in Information Technology became a four-year bootcamp in classical ML and full-stack development. I built everything from stroke prediction models and ASL interpreters to a full-on e-commerce platform for artists (C(ART)). Along the way, I dove into neural networks, time series forecasting, and even published a research paper on crude oil price prediction using RNN, SVM, ARIMA, and GARCH-GED. I started as a noob. I left as an engineer.' },
    { type: 'programming', title: 'Dec 2019 – Apr 2021', description: 'At Kings Expomedia, I built three magazine websites with React, Redux, and WebGL. I optimized page load times, automated content workflows, and got my first taste of production chaos — and loved it.' },
    { type: 'programming', title: 'Jul – Sep 2022', description: 'Joined Ernst & Young LLP as an ML Intern. I optimized fraud detection models using PySpark, deployed them on AWS SageMaker, and actually saw my models used in the real world. That was a rush.' },
    { type: 'programming', title: 'Aug 2023', description: 'Started my MS in Computer Science at Boston University. From advanced machine learning to distributed systems with Apache Spark, I got to work at the intersection of intelligent systems and engineering. As a TA, I mentored 300+ students in DSA and Python, which was its own kind of debugging challenge.' },
    { type: 'programming', title: 'Aug – Dec 2024', description: 'Led the ResumeAI capstone — a full-stack AI-driven ATS. I worked on clean architecture, async queues, Keycloak auth, CI/CD, and API design. We cut recruiter workflow time by 35% and API latency by more than half. Felt like shipping a real startup.' },
    { type: 'programming', title: '2024 – Present', description: 'Alongside school, I built a low-latency LLM inference stack, trained a credit risk model with ROC AUC 0.702, and deployed a flight delay prediction pipeline on 65M+ records. Oh, and I helped build a decentralized casino game on Substrate and Rust at a Polkadot hackathon, because... why not?' },
    { type: 'programming', title: 'Jan 2025 (expected)', description: 'I’ll wrap up my MSCS at BU as a sharper, calmer, and more complete engineer. Comfortable in backend code, ML pipelines, cloud infra, and sometimes even CSS.' },
  ];

  return (
    <>
      <section className="relative flex flex-col items-start justify-center min-h-screen overflow-hidden px-16 py-20 w-full">
        <div className="relative z-10 flex flex-col items-start justify-start w-full max-w-7xl">
          <h2 className="text-2xl mb-6 text-left" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            Hi, I'm Shubh Gupta 👋
          </h2>
          <h1 className="text-8xl font-bold mb-8 text-left leading-tight" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            a <span 
              className="transition-colors duration-300 hover:cursor-pointer" 
              style={{ color: 'var(--text-main)' }}
              onMouseEnter={(e) => e.target.style.color = '#800000'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
            >
              Software Engineer
            </span><br/>
            & <span 
              className="transition-colors duration-300 hover:cursor-pointer" 
              style={{ color: 'var(--text-main)' }}
              onMouseEnter={(e) => e.target.style.color = '#800000'}
              onMouseLeave={(e) => e.target.style.color = 'var(--text-main)'}
            >
              Data Scientist
            </span><br/>
            based in Boston
          </h1>
          <p className="text-xl mb-12 max-w-3xl text-left leading-relaxed" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            I have a passion for building intelligent systems and solving complex problems. From ML pipelines to full-stack applications, I'm ready to bring my skills to your team.
          </p>
          <div className="flex space-x-8 mb-16 text-2xl" style={{ fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
            <a href="https://github.com/username" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>GitHub</a>
            <a href="https://linkedin.com/in/username" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>LinkedIn</a>
            <a href="https://instagram.com/username" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>Instagram</a>
            <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AOv-ny9OrQpfkCveHE6Ky1FrVJFS0YskbX6_iYiwv-DbUvbyrcWFfT3Nj-smbNtZaTrn14FKVi2tqyaskTdiXw&user=gh_thNwAAAAJ" aria-label="Google Scholar" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors" style={{ color: 'var(--text-main)' }}>
              Scholar
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-16 flex items-center space-x-2" style={{ color: 'var(--text-main)', fontFamily: 'var(--font-league-spartan), Arial, Helvetica, sans-serif' }}>
          <span className="text-sm">scroll</span>
          <div className="w-12 h-0.5 bg-current"></div>
        </div>
      </section>
      {/* Full-width border between landing and highlights */}
      <div className="w-full h-0.5 bg-[#a47551] dark:bg-gray-600 m-0 p-0" style={{margin:0,padding:0}} />
      <section className="w-full bg-[#f5e9da] min-h-[80vh] py-16 relative z-10">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-2xl font-bold mb-8" style={{ color: '#2d1e13' }}>Highlights</h2>
          {/* Filter Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              className={`px-4 py-2 rounded-full font-semibold border-2 transition-colors duration-200 ${filter === 'programming' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white'}`}
              onClick={() => setFilter('programming')}
            >
              Programming
            </button>
            <button
              className={`px-4 py-2 rounded-full font-semibold border-2 transition-colors duration-200 ${filter === 'life' ? 'bg-[#4b2e13] text-white border-[#4b2e13]' : 'bg-transparent text-[#4b2e13] border-[#4b2e13] hover:bg-[#a47551] hover:text-white'}`}
              onClick={() => setFilter('life')}
            >
              Life
            </button>
          </div>
          {/* Timeline */}
          <div className="relative pl-8 border-l-2 border-[#a47551]">
            {timelineData.filter(e => filter === e.type).map((event, idx) => (
              <div key={idx} className="mb-8 group relative">
                {/* Dot: only visible when not hovered/expanded */}
                <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#a47551] rounded-full border-2 border-white dark:border-gray-900 z-10 transition-opacity duration-200 opacity-100 group-hover:opacity-0" />
                {/* Event Tile */}
                <div className="transition-all duration-300 cursor-pointer max-w-xl text-[#2d1e13]">
                  <div className="text-lg font-semibold group-hover:scale-110 group-hover:bg-[#f5e9da] group-hover:shadow-lg group-hover:rounded-xl group-hover:px-6 group-hover:py-4 group-hover:border-2 group-hover:border-[#a47551] transition-all duration-300 inline-block text-[#2d1e13]">
                    {event.title}
                  </div>
                  <div className="max-h-0 overflow-hidden group-hover:max-h-40 group-hover:mt-2 group-hover:opacity-100 opacity-0 transition-all duration-300">
                    <div className="text-base mt-2 text-[#2d1e13]">{event.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
