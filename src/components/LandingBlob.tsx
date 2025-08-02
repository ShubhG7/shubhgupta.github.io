"use client";
import React, { useRef, useEffect, useState } from 'react';

const BLOB_SIZE_DESKTOP = 3600; // px, doubled for a larger blob
const BLOB_SIZE_MOBILE = 1800; // px, smaller on mobile for more visible movement
const COLOR = '#a47551';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const LandingBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  // Initialize with safe defaults
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const scrollOffset = useRef({ x: 0, y: 0 });
  
  // Get current blob size based on device
  const getBlobSize = () => isMobile ? BLOB_SIZE_MOBILE : BLOB_SIZE_DESKTOP;

  useEffect(() => {
    // Set to window center on client and detect mobile
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mobile = window.innerWidth <= 768; // Mobile breakpoint
    setIsMobile(mobile);
    
    pos.current = { ...center };
    target.current = { ...center };
    if (blobRef.current) {
      const blobSize = mobile ? BLOB_SIZE_MOBILE : BLOB_SIZE_DESKTOP;
      blobRef.current.style.left = `${center.x - blobSize / 2}px`;
      blobRef.current.style.top = `${center.y - blobSize / 2}px`;
      blobRef.current.style.width = `${blobSize}px`;
      blobRef.current.style.height = `${blobSize}px`;
    }

    // Handle resize
    const handleResize = () => {
      const newMobile = window.innerWidth <= 768;
      setIsMobile(newMobile);
      if (!newMobile) {
        // Reset scroll offset when switching back to desktop
        scrollOffset.current = { x: 0, y: 0 };
      }
      
      // Update blob size when switching between mobile/desktop
      if (blobRef.current) {
        const blobSize = newMobile ? BLOB_SIZE_MOBILE : BLOB_SIZE_DESKTOP;
        blobRef.current.style.width = `${blobSize}px`;
        blobRef.current.style.height = `${blobSize}px`;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      // Only handle mouse movement on desktop
      if (!isMobile) {
        target.current = { x: e.clientX, y: e.clientY };
      }
    };
    
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isMobile]);

  // Add scroll handling for mobile parallax effect
  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollX = window.scrollX;
      
      // Apply parallax with increased lag (move 21% of scroll distance - 30% more lag)
      const parallaxFactor = 0.21;
      scrollOffset.current = { 
        x: scrollX * parallaxFactor, 
        y: scrollY * parallaxFactor 
      };
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    let running = true;
    function animate() {
      if (isMobile) {
        // On mobile, use initial center position + scroll offset with smooth lerp
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const targetX = centerX + scrollOffset.current.x;
        const targetY = centerY + scrollOffset.current.y;
        
        pos.current.x = lerp(pos.current.x, targetX, 0.05); // Slower lerp for smoother effect
        pos.current.y = lerp(pos.current.y, targetY, 0.05);
      } else {
        // Desktop: follow mouse
        pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
        pos.current.y = lerp(pos.current.y, target.current.y, 0.08);
      }
      
      if (blobRef.current) {
        const blobSize = getBlobSize();
        blobRef.current.style.left = `${pos.current.x - blobSize / 2}px`;
        blobRef.current.style.top = `${pos.current.y - blobSize / 2}px`;
      }
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, [isMobile]);

  return (
    <div
      ref={blobRef}
      style={{
        position: 'fixed',
        width: getBlobSize(),
        height: getBlobSize(),
        borderRadius: '50%',
        background: `radial-gradient(circle, ${COLOR} 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'width 0.3s ease, height 0.3s ease, background 0.2s',
      }}
      aria-hidden
    />
  );
};

export default LandingBlob; 