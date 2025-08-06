"use client";

import React, { useState } from 'react';
import ImageUpload from '@/components/ImageUpload';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'upload' | 'manage'>('upload');

  const handleImageUpload = (file: File) => {
    console.log('Image uploaded:', file.name);
    // In a real implementation, you would upload to your server
    // For now, we'll just log the file info
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--text-main)' }}>
          Portfolio Image Manager
        </h1>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === 'upload'
                  ? 'bg-[#4b2e13] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Upload Images
            </button>
            <button
              onClick={() => setActiveTab('manage')}
              className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                activeTab === 'manage'
                  ? 'bg-[#4b2e13] text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Manage Images
            </button>
          </div>
        </div>

        {activeTab === 'upload' && (
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                Upload Project Images
              </h2>
              <ImageUpload category="projects" onImageUpload={handleImageUpload} />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                Upload Profile Images
              </h2>
              <ImageUpload category="profile" onImageUpload={handleImageUpload} />
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                Upload Background Images
              </h2>
              <ImageUpload category="backgrounds" onImageUpload={handleImageUpload} />
            </div>
          </div>
        )}

        {activeTab === 'manage' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                Image Directory Structure
              </h3>
              <div className="space-y-2 text-sm" style={{ color: 'var(--text-main)' }}>
                <p><strong>Project Images:</strong> <code>/public/images/projects/</code></p>
                <p><strong>Profile Images:</strong> <code>/public/images/profile/</code></p>
                <p><strong>Background Images:</strong> <code>/public/images/backgrounds/</code></p>
                <p><strong>Icons:</strong> <code>/public/icons/</code></p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                How to Use Images
              </h3>
              <div className="space-y-3 text-sm" style={{ color: 'var(--text-main)' }}>
                <p>1. <strong>Add images</strong> to the appropriate directory</p>
                <p>2. <strong>Reference them</strong> in your components:</p>
                <pre className="bg-gray-100 dark:bg-gray-700 p-3 rounded text-xs overflow-x-auto">
{`// For project images
<img src="/images/projects/project-name.png" alt="Project" />

// For profile images  
<img src="/images/profile/profile-photo.jpg" alt="Profile" />

// Using Next.js Image component
import Image from 'next/image'
<Image src="/images/projects/project.png" width={800} height={600} alt="Project" />`}
                </pre>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-main)' }}>
                Image Guidelines
              </h3>
              <ul className="space-y-2 text-sm" style={{ color: 'var(--text-main)' }}>
                <li>• Use descriptive filenames (e.g., <code>resume-ai-screenshot.png</code>)</li>
                <li>• Optimize images for web (compress before uploading)</li>
                <li>• Use WebP format when possible for better compression</li>
                <li>• Recommended sizes: Projects (1200x800px), Profile (400x400px)</li>
                <li>• Include alt text for accessibility</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 