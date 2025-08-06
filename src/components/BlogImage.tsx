"use client";

import React from 'react';
import Image from 'next/image';

interface BlogImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

const BlogImage: React.FC<BlogImageProps> = ({
  src,
  alt,
  caption,
  width = 800,
  height = 600,
  className = '',
  priority = false
}) => {
  return (
    <figure className={`my-8 ${className}`}>
      <div className="relative w-full max-w-4xl mx-auto">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
          priority={priority}
          style={{
            maxWidth: '100%',
            height: 'auto'
          }}
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default BlogImage; 