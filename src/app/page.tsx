"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const hobbies = [
  {
    id: "tennis",
    name: "Tennis",
    description: "I love playing tennis and have been playing for several years. It's a great way to stay active and competitive while enjoying the outdoors.",
    image: "https://ui-avatars.com/api/?name=Tennis&background=random&size=256"
  },
  {
    id: "football",
    name: "Football",
    description: "Football has been my passion since childhood. I enjoy both playing and watching matches, especially during major tournaments.",
    image: "https://ui-avatars.com/api/?name=Football&background=random&size=256"
  },
  {
    id: "cricket",
    name: "Cricket",
    description: "Cricket is deeply ingrained in my culture and I love playing it. The teamwork and strategy involved make it incredibly engaging.",
    image: "https://ui-avatars.com/api/?name=Cricket&background=random&size=256"
  },
  {
    id: "table-tennis",
    name: "Table Tennis",
    description: "Table tennis is my go-to indoor sport. I love the fast-paced nature and strategic thinking required in every match.",
    image: "https://ui-avatars.com/api/?name=Table+Tennis&background=random&size=256"
  },
  {
    id: "martial-arts",
    name: "Martial Arts",
    description: "I practice martial arts for self-defense, discipline, and mental focus. It's a great way to stay fit while learning valuable skills.",
    image: "https://ui-avatars.com/api/?name=Martial+Arts&background=random&size=256"
  },
  {
    id: "gym",
    name: "Gym",
    description: "I'm passionate about fitness and strength training. Going to the gym helps me stay healthy and build discipline.",
    image: "https://ui-avatars.com/api/?name=Gym&background=random&size=256"
  },
  {
    id: "running",
    name: "Running",
    description: "Running is my favorite cardio exercise. I enjoy both short sprints and long-distance running for endurance.",
    image: "https://ui-avatars.com/api/?name=Running&background=random&size=256"
  },
  {
    id: "gaming",
    name: "Video Gaming",
    description: "I'm an avid gamer who enjoys both competitive and story-driven games. Gaming helps me relax and think strategically.",
    image: "https://ui-avatars.com/api/?name=Video+Gaming&background=random&size=256"
  }
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollDeltaRef = useRef(0);

  // Handle scroll wheel with reduced sensitivity
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Accumulate scroll delta
    scrollDeltaRef.current += e.deltaY;
    
    // Only trigger scroll if delta is significant enough
    const threshold = 80; // Slightly reduced for smoother feel
    
    if (Math.abs(scrollDeltaRef.current) >= threshold) {
      const cardWidth = 416;
      const gap = 32; // 8 * 4 (gap-8)
      const totalCardWidth = cardWidth + gap;
      const currentScroll = scrollContainer.scrollLeft;
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      
      if (scrollDeltaRef.current > 0 && currentScroll < maxScroll) {
        // Scroll right
        scrollContainer.scrollTo({
          left: Math.min(currentScroll + totalCardWidth, maxScroll),
          behavior: 'smooth'
        });
      } else if (scrollDeltaRef.current < 0 && currentScroll > 0) {
        // Scroll left
        scrollContainer.scrollTo({
          left: Math.max(currentScroll - totalCardWidth, 0),
          behavior: 'smooth'
        });
      }
      
      // Reset delta after scroll
      scrollDeltaRef.current = 0;
      
      // Add debounce to prevent rapid scrolling
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        scrollDeltaRef.current = 0;
      }, 250); // Reduced timeout for smoother feel
    }
  };

  // Update active index based on scroll position
  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 416;
    const gap = 32;
    const totalCardWidth = cardWidth + gap;
    const scrollLeft = scrollContainer.scrollLeft;
    
    // Calculate which card is in the center
    const containerWidth = scrollContainer.clientWidth;
    const centerPosition = scrollLeft + (containerWidth / 2);
    
    // Account for the initial padding and find the card index
    const adjustedPosition = centerPosition - 32; // px-8 padding
    let newActiveIndex = Math.round(adjustedPosition / totalCardWidth);
    
    // Special handling for first and last cards
    if (scrollLeft <= 32) {
      // At the very beginning, first card should be active
      newActiveIndex = 0;
    } else if (scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 32) {
      // At the very end, last card should be active
      newActiveIndex = hobbies.length - 1;
    } else {
      // Normal calculation for middle cards
      newActiveIndex = Math.max(0, Math.min(newActiveIndex, hobbies.length - 1));
    }
    
    if (newActiveIndex !== activeIndex) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
      scrollContainer.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <>
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

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Hobbies & Interests</h2>
        
        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div 
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {hobbies.map((hobby, index) => (
              <motion.div
                key={hobby.id}
                className={`flex-shrink-0 w-[416px] snap-center transition-all duration-700 ease-out ${
                  index === activeIndex 
                    ? 'scale-100 opacity-100 blur-0' 
                    : 'scale-90 opacity-60 blur-sm'
                }`}
                whileHover={{ scale: index === activeIndex ? 1.02 : 0.95 }}
              >
                <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800">
                  <div className="relative w-full h-64">
                    <Image
                      src={hobby.image}
                      alt={hobby.name}
                      fill
                      className="object-cover"
                      sizes="416px"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-center">{hobby.name}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{hobby.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {hobbies.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-black dark:bg-white scale-125' 
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
