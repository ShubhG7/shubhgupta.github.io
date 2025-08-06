"use client";

import React, { useState } from 'react';

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
  category: 'projects' | 'profile' | 'backgrounds';
}

const ImageUpload = ({ onImageUpload, category }: ImageUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setUploadStatus('error');
      return;
    }

    setUploadStatus('uploading');
    
    // In a real implementation, you would upload to your server
    // For now, we'll just simulate the upload
    setTimeout(() => {
      setUploadStatus('success');
      onImageUpload?.(file);
      
      // Reset status after 2 seconds
      setTimeout(() => setUploadStatus('idle'), 2000);
    }, 1000);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${
          dragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-600'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          <div>
            <p className="text-lg font-medium text-gray-900 dark:text-white">
              Upload {category} image
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Drag and drop an image here, or click to select
            </p>
          </div>
          
          <input
            type="file"
            accept="image/*"
            onChange={handleFileInput}
            className="hidden"
            id={`file-upload-${category}`}
          />
          <label
            htmlFor={`file-upload-${category}`}
            className="inline-flex items-center px-4 py-2 bg-[#4b2e13] text-white rounded-md hover:bg-[#3a2410] cursor-pointer transition-colors duration-200"
          >
            Choose File
          </label>
          
          {uploadStatus === 'uploading' && (
            <div className="text-blue-600 dark:text-blue-400">
              Uploading...
            </div>
          )}
          
          {uploadStatus === 'success' && (
            <div className="text-green-600 dark:text-green-400">
              Upload successful!
            </div>
          )}
          
          {uploadStatus === 'error' && (
            <div className="text-red-600 dark:text-red-400">
              Please select a valid image file.
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        <p>Supported formats: JPG, PNG, WebP</p>
        <p>Recommended size: {category === 'profile' ? '400x400px' : category === 'projects' ? '1200x800px' : 'Any size'}</p>
      </div>
    </div>
  );
};

export default ImageUpload; 