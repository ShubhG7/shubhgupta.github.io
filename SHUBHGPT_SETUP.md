# ShubhGPT Chat Feature Setup Guide

## Overview
ShubhGPT is an AI-powered chat assistant that can answer questions about Shubh Gupta's background, experience, projects, and skills. It uses Google's Gemini AI model and is integrated seamlessly into the portfolio website.

## Features
- 🤖 AI-powered responses using Google Gemini
- 💬 Real-time chat interface
- 📚 Comprehensive knowledge base about Shubh
- 🎨 Beautiful UI matching the website's design theme
- 📱 Responsive design for mobile and desktop
- ⚡ Fast and efficient API responses

## Setup Instructions

### 1. Get Your Gemini API Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the generated API key

### 2. Configure Environment Variables
1. Create a `.env.local` file in the project root
2. Add your Gemini API key:
```bash
GEMINI_API_KEY=your_actual_api_key_here
```

### 3. Install Dependencies
The required dependencies are already installed:
- `@google/generative-ai` - Google's Generative AI SDK

### 4. Test the Feature
1. Start your development server: `yarn dev`
2. Visit your website
3. Click the chat button (💬) in the bottom-right corner
4. Try asking questions like:
   - "Tell me about Shubh's experience"
   - "What projects has Shubh worked on?"
   - "What are Shubh's technical skills?"

## File Structure
```
src/
├── components/
│   └── ChatBot.tsx              # Main chat component
├── app/api/
│   └── chat/
│       └── route.ts             # API endpoint for Gemini integration
└── data/
    └── shubhKnowledgeBase.ts    # Knowledge base about Shubh
```

## How It Works
1. **User Interface**: The `ChatBot` component provides a floating chat button and modal
2. **API Integration**: Messages are sent to `/api/chat` endpoint
3. **AI Processing**: The API uses Gemini AI with the knowledge base as context
4. **Response**: AI-generated responses are displayed in the chat interface

## Customization
- **Knowledge Base**: Update `src/data/shubhKnowledgeBase.ts` to modify information
- **Styling**: The chat UI uses your existing color scheme and fonts
- **Personality**: Adjust the AI prompt in `src/app/api/chat/route.ts`

## Security Notes
- API key is stored securely in environment variables
- All API calls are server-side to protect the key
- Rate limiting can be added if needed

## Troubleshooting
- **"API key not configured"**: Make sure `.env.local` exists with `GEMINI_API_KEY`
- **No responses**: Check your API key is valid and has quota remaining
- **Styling issues**: Ensure Tailwind CSS is properly configured

## Future Enhancements
- Add conversation memory
- Implement typing indicators
- Add voice input/output
- Create admin panel for knowledge base updates
- Add analytics for chat interactions
