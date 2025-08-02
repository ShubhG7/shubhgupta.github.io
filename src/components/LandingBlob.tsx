"use client";
import React, { useRef, useEffect } from 'react';

const BLOB_SIZE = 3600; // px, doubled for a larger blob
const COLOR = '#a47551';

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const LandingBlob = () => {
  const blobRef = useRef<HTMLDivElement>(null);
  // Initialize with safe defaults
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set to window center on client
    const center = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    pos.current = { ...center };
    target.current = { ...center };
    if (blobRef.current) {
      blobRef.current.style.left = `${center.x - BLOB_SIZE / 2}px`;
      blobRef.current.style.top = `${center.y - BLOB_SIZE / 2}px`;
    }
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    let running = true;
    function animate() {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.08);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.08);
      if (blobRef.current) {
        blobRef.current.style.left = `${pos.current.x - BLOB_SIZE / 2}px`;
        blobRef.current.style.top = `${pos.current.y - BLOB_SIZE / 2}px`;
      }
      if (running) requestAnimationFrame(animate);
    }
    animate();
    return () => { running = false; };
  }, []);

  return (
    <div
      ref={blobRef}
      style={{
        position: 'fixed',
        width: BLOB_SIZE,
        height: BLOB_SIZE,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${COLOR} 0%, transparent 70%)`,
        pointerEvents: 'none',
        zIndex: 1,
        transition: 'background 0.2s',
      }}
      aria-hidden
    />
  );
};

export default LandingBlob; 