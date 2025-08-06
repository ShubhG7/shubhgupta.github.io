# Portfolio Images Directory

This directory contains all images used in the portfolio website.

## Directory Structure

```
public/images/
├── projects/          # Project screenshots and images
├── profile/           # Profile photos and personal images
├── backgrounds/       # Background images and textures
└── icons/            # Custom icons (already exists in public/icons/)
```

## Usage Guidelines

### Projects Directory (`/projects/`)
- Add project screenshots, demos, and related images
- Use descriptive filenames: `project-name-screenshot.png`
- Recommended formats: PNG, JPG, WebP
- Recommended sizes: 1200x800px for screenshots

### Profile Directory (`/profile/`)
- Profile photos, headshots, and personal images
- Use: `profile-photo.jpg`, `headshot.png`, etc.
- Recommended formats: JPG, PNG
- Recommended sizes: 400x400px for profile photos

### Backgrounds Directory (`/backgrounds/`)
- Background textures, patterns, and decorative images
- Use: `texture.jpg`, `pattern.png`, etc.
- Recommended formats: JPG, PNG, WebP

### Icons Directory (`/icons/`)
- Custom icons and graphics
- Already exists in `public/icons/`
- Use SVG format for scalability

## How to Add Images

1. **Place images in the appropriate directory**
2. **Reference them in your code**:
   ```jsx
   // For project images
   <img src="/images/projects/project-name-screenshot.png" alt="Project Screenshot" />
   
   // For profile images
   <img src="/images/profile/profile-photo.jpg" alt="Profile Photo" />
   
   // For background images
   <div style={{ backgroundImage: 'url(/images/backgrounds/texture.jpg)' }} />
   ```

## Image Optimization

- Use WebP format when possible for better compression
- Optimize images before adding them
- Consider using Next.js Image component for automatic optimization:
  ```jsx
  import Image from 'next/image'
  
  <Image 
    src="/images/projects/project.png" 
    alt="Project" 
    width={800} 
    height={600} 
  />
  ```

## File Naming Convention

- Use lowercase letters and hyphens
- Be descriptive: `resume-ai-screenshot.png`
- Include dimensions if needed: `profile-photo-400x400.jpg` 