# Portfolio Website - Technical Description

## Overview

A modern, full-stack portfolio website built with Next.js 15, featuring an AI-powered chatbot (ShubhGPT), dynamic project showcase, and interactive blog system. The application demonstrates expertise in software engineering, data science, and machine learning through an elegant, responsive user interface.

## Tech Stack

### Frontend
- **Framework**: Next.js 15.5.7 (App Router)
- **UI Library**: React 19.1.2
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom design system
- **Fonts**: Google Fonts (Geist, Geist Mono, Josefin Sans, League Spartan)
- **Markdown Rendering**: react-markdown with remark-gfm
- **Syntax Highlighting**: react-syntax-highlighter

### Backend & APIs
- **Runtime**: Node.js 18+
- **API Routes**: Next.js API Routes (Serverless Functions)
- **AI Integration**: Google Gemini 2.0 Flash (via @google/generative-ai)
- **Email Service**: EmailJS (@emailjs/browser)
- **Email API**: Resend

### Development Tools
- **Package Manager**: Yarn 1.22+
- **Build Tool**: Next.js built-in bundler
- **Linting**: ESLint with Next.js config
- **Type Checking**: TypeScript compiler
- **Image Optimization**: Next.js Image component with Sharp

## Architecture

### Application Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API endpoints
│   │   ├── chat/          # AI chatbot API
│   │   ├── contact/       # Contact form handler
│   │   ├── projects/      # Project data API
│   │   └── resume/        # Resume download API
│   ├── projects/          # Dynamic project pages
│   │   └── [id]/          # Individual project blog pages
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ChatBot.tsx        # AI chatbot interface
│   ├── ChatSection.tsx    # Chat section wrapper
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx         # Site footer
│   ├── HobbiesCarousel.tsx # Hobbies display
│   ├── ImageUpload.tsx    # Image upload utility
│   ├── LandingBlob.tsx    # Animated background
│   ├── Layout.tsx         # Main layout wrapper
│   └── Navbar.tsx         # Navigation bar
└── data/                  # Static data and content
    ├── blogContent.ts     # Blog content utilities
    ├── blogs/             # Individual blog markdown files
    ├── projects.json      # Project metadata
    ├── shubhKnowledgeBase.ts # AI knowledge base
    └── techStackMapping.ts   # Technology mappings
```

### Key Features

#### 1. AI-Powered Chatbot (ShubhGPT)
- **Technology**: Google Gemini 2.0 Flash API
- **Knowledge Base**: Comprehensive TypeScript-based knowledge base (550+ lines)
- **Features**:
  - Context-aware responses about portfolio owner
  - Automatic project name linking to blog pages
  - Markdown rendering with custom link handling
  - Rate limiting and bot detection
  - Error handling and graceful degradation
  - Real-time streaming UI with loading states

#### 2. Dynamic Project Showcase
- **Filtering**: Multi-tag technology stack filtering
- **Search**: Full-text search across titles, descriptions, and tech stacks
- **Responsive Grid**: Adaptive layout (1/2/3 columns based on screen size)
- **Project Details**: Individual blog pages with markdown content
- **Tech Stack Tags**: Color-coded technology badges

#### 3. Blog System
- **Content Management**: TypeScript-based blog content files
- **Markdown Support**: Full markdown rendering with syntax highlighting
- **Image Handling**: Optimized image loading with Next.js Image
- **Dynamic Routing**: Dynamic blog pages based on project IDs

#### 4. Contact Form
- **Validation**: Client and server-side validation
- **Email Integration**: EmailJS for client-side email sending
- **Error Handling**: Comprehensive error handling and user feedback

#### 5. Security Features
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, Referrer-Policy
- **Content Security Policy**: SVG sandboxing
- **Input Validation**: Message length limits, email validation
- **Bot Detection**: User-agent based bot filtering
- **API Rate Limiting**: Basic rate limiting implementation

## API Endpoints

### `/api/chat` (POST)
- **Purpose**: AI chatbot endpoint
- **Input**: `{ message: string }`
- **Output**: `{ response: string }`
- **Features**:
  - Gemini AI integration
  - Knowledge base context injection
  - Automatic project link generation
  - Error handling and rate limiting

### `/api/contact` (POST)
- **Purpose**: Contact form submission
- **Input**: `{ name: string, email: string, message: string }`
- **Output**: `{ message: string }` or `{ error: string }`
- **Features**: Input validation, email format validation

### `/api/projects` (GET)
- **Purpose**: Retrieve project data
- **Output**: Array of project objects

### `/api/projects/[id]` (GET)
- **Purpose**: Retrieve individual project data
- **Output**: Project object with blog content

### `/api/resume` (GET)
- **Purpose**: Resume download endpoint
- **Output**: PDF file

## Data Management

### Projects Data
- **Format**: JSON file (`projects.json`)
- **Structure**: Array of project objects with:
  - ID, title, summary
  - Image path
  - Technology stack array
  - GitHub, demo, and video links
  - Blog content references

### Blog Content
- **Format**: TypeScript modules
- **Structure**: Individual blog files with markdown content
- **Features**: Type-safe content management

### Knowledge Base
- **Format**: TypeScript file (`shubhKnowledgeBase.ts`)
- **Purpose**: Comprehensive information about portfolio owner
- **Usage**: Injected into AI prompts for context-aware responses

## Styling & Design

### Design System
- **Color Palette**: Custom beige/brown theme
  - Primary: `#f5e9da` (beige)
  - Secondary: `#e2c9a0` (dark beige)
  - Accent: `#4b2e13` (brown)
  - Dark: `#2d1e13` (dark brown)
- **Typography**: League Spartan (primary), Geist (sans), Geist Mono (mono)
- **Responsive Breakpoints**: Mobile-first design with Tailwind breakpoints

### UI Components
- Custom button styles with hover/active states
- Gradient backgrounds and borders
- Smooth transitions and animations
- Touch-optimized interactions for mobile

## Performance Optimizations

1. **Image Optimization**: Next.js Image component with automatic optimization
2. **Code Splitting**: Automatic route-based code splitting
3. **Font Optimization**: Next.js font optimization with `next/font`
4. **Static Generation**: Pre-rendered pages where possible
5. **Lazy Loading**: Dynamic imports for heavy components

## Environment Variables

```bash
GEMINI_API_KEY=your_gemini_api_key_here
```

## Build & Deployment

### Build Commands
```bash
yarn dev          # Development server
yarn build        # Production build
yarn start        # Start production server
yarn lint         # Run ESLint
yarn type-check   # TypeScript type checking
```

### Deployment Platforms
- **Vercel** (Recommended): Zero-config deployment
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

### Build Requirements
- Node.js >= 18.0.0
- Yarn >= 1.22.0

## Security Considerations

1. **API Key Management**: Environment variables for sensitive keys
2. **Input Sanitization**: All user inputs validated and sanitized
3. **CORS**: Configured for production domains
4. **Rate Limiting**: Basic rate limiting on API endpoints
5. **Security Headers**: Comprehensive security headers in Next.js config
6. **Bot Protection**: User-agent filtering for API endpoints

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Progressive enhancement for older browsers

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Future Enhancements

- [ ] Analytics integration
- [ ] Advanced rate limiting
- [ ] Response caching for AI chat
- [ ] Admin panel for content management
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Advanced search with filters
- [ ] Project analytics dashboard

## License

Private project - All rights reserved

---

**Built with ❤️ using Next.js, React, and TypeScript**

