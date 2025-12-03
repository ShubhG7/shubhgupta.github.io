import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';
import { shubhKnowledgeBase } from '@/data/shubhKnowledgeBase';
import projects from '@/data/projects.json';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// Create project name to URL mapping
const projectNameMap: { [key: string]: string } = {};
projects.forEach((project: any) => {
  // Map various name variations to the project URL
  const projectUrl = `/projects/${project.id}/blog`;
  const title = project.title.toLowerCase();
  
  // Add main title
  projectNameMap[project.title.toLowerCase()] = projectUrl;
  
  // Add variations (e.g., "ResumAI" -> "resumai", "ResumAI - AI powered ATS" -> "resumai")
  const shortName = title.split(' - ')[0].split(' (')[0].trim();
  projectNameMap[shortName] = projectUrl;
  
  // Add common variations
  if (title.includes('resumai') || title.includes('resum ai')) {
    projectNameMap['resumai'] = projectUrl;
    projectNameMap['resum ai'] = projectUrl;
  }
  if (title.includes('flight delay')) {
    projectNameMap['flight delay prediction'] = projectUrl;
    projectNameMap['flight delay'] = projectUrl;
  }
  if (title.includes('research paper') || title.includes('crude oil')) {
    projectNameMap['research paper'] = projectUrl;
    projectNameMap['crude oil price prediction'] = projectUrl;
  }
  if (title.includes('llm inference')) {
    projectNameMap['llm inference optimization'] = projectUrl;
    projectNameMap['llm inference'] = projectUrl;
  }
  if (title.includes('stock price')) {
    projectNameMap['stock price prediction'] = projectUrl;
    projectNameMap['stock prediction'] = projectUrl;
  }
  if (title.includes('cart') || title.includes('ecommerce')) {
    projectNameMap['cart'] = projectUrl;
    projectNameMap['c(art)'] = projectUrl;
    projectNameMap['ecommerce'] = projectUrl;
  }
  if (title.includes('asl') || title.includes('sign language')) {
    projectNameMap['asl interpreter'] = projectUrl;
    projectNameMap['american sign language'] = projectUrl;
    projectNameMap['sign language interpreter'] = projectUrl;
  }
  if (title.includes('car price') || title.includes('automobile')) {
    projectNameMap['car price prediction'] = projectUrl;
    projectNameMap['automobile price prediction'] = projectUrl;
  }
  if (title.includes('stroke')) {
    projectNameMap['stroke prediction'] = projectUrl;
  }
  if (title.includes('house price') || title.includes('mumbai')) {
    projectNameMap['mumbai house price prediction'] = projectUrl;
    projectNameMap['house price prediction'] = projectUrl;
  }
  if (title.includes('ant colony')) {
    projectNameMap['ant colony optimization'] = projectUrl;
    projectNameMap['aco'] = projectUrl;
  }
  if (title.includes('coffee') || title.includes('etl') || title.includes('airflow')) {
    projectNameMap['coffee sales analytics'] = projectUrl;
    projectNameMap['etl pipeline'] = projectUrl;
    projectNameMap['apache airflow'] = projectUrl;
  }
  if (title.includes('orion')) {
    projectNameMap['orion'] = projectUrl;
    projectNameMap['virtual assistant'] = projectUrl;
  }
  if (title.includes('all in') || title.includes('gaming')) {
    projectNameMap['all in gaming'] = projectUrl;
    projectNameMap['gaming platform'] = projectUrl;
  }
  if (title.includes('budget tracker')) {
    projectNameMap['budget tracker'] = projectUrl;
    projectNameMap['personal finance'] = projectUrl;
  }
});

// Function to add hyperlinks to project names in text
function addProjectLinks(text: string): string {
  let result = text;
  
  // First, find all existing markdown links and mark their positions
  const existingLinks: Array<{ start: number; end: number }> = [];
  const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let linkMatch;
  while ((linkMatch = linkPattern.exec(text)) !== null) {
    existingLinks.push({
      start: linkMatch.index,
      end: linkMatch.index + linkMatch[0].length
    });
  }
  
  // Sort by length (longest first) to match longer names first
  const sortedNames = Object.keys(projectNameMap).sort((a, b) => b.length - a.length);
  
  // Process matches in reverse order to avoid offset issues
  const matches: Array<{ name: string; url: string; index: number; length: number }> = [];
  
  for (const projectName of sortedNames) {
    const url = projectNameMap[projectName];
    const regex = new RegExp(`\\b${projectName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    let match;
    
    while ((match = regex.exec(result)) !== null) {
      const matchIndex = match.index;
      const matchLength = match[0].length;
      
      // Check if this match is inside an existing link
      const isInsideLink = existingLinks.some(
        link => matchIndex >= link.start && matchIndex + matchLength <= link.end
      );
      
      if (!isInsideLink) {
        matches.push({
          name: projectName,
          url: url,
          index: matchIndex,
          length: matchLength
        });
      }
    }
  }
  
  // Sort matches by index in reverse order and replace
  matches.sort((a, b) => b.index - a.index);
  
  for (const match of matches) {
    const beforeText = result.substring(0, match.index);
    const matchText = result.substring(match.index, match.index + match.length);
    const afterText = result.substring(match.index + match.length);
    
    // Check if we're creating a duplicate
    if (!beforeText.includes(`](${match.url})`) && !afterText.includes(`](${match.url})`)) {
      result = beforeText + `[${matchText}](${match.url})` + afterText;
    }
  }
  
  return result;
}

export async function POST(request: NextRequest) {
  try {
    // Basic rate limiting check (you can enhance this with a proper rate limiter)
    const userAgent = request.headers.get('user-agent') || '';
    if (userAgent.includes('bot') || userAgent.includes('crawler')) {
      return NextResponse.json(
        { error: 'Access denied' },
        { status: 403 }
      );
    }

    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Valid message is required' },
        { status: 400 }
      );
    }

    // Message length validation
    if (message.length > 1000) {
      return NextResponse.json(
        { error: 'Message too long. Please keep it under 1000 characters.' },
        { status: 400 }
      );
    }

    if (!process.env.GEMINI_API_KEY) {
      console.error('Gemini API key not configured');
      return NextResponse.json(
        { error: 'Service temporarily unavailable' },
        { status: 503 }
      );
    }

    // Get the generative model
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Create the prompt with context about Shubh
    const prompt = `
You are ShubhGPT, an AI assistant that represents Shubh Gupta. You have access to comprehensive information about Shubh's background, experience, and projects. 

Your personality should be:
- Friendly and conversational
- Professional but approachable
- Knowledgeable about Shubh's work and experience
- Helpful in answering questions about his background, skills, and projects
- Enthusiastic about technology and problem-solving

IMPORTANT FORMATTING RULES:
- Keep responses concise and to the point (2-3 sentences max for initial answers)
- DO NOT use markdown formatting like **bold** or *italic* - use plain text only
- When mentioning project names, use the exact project name as it appears (e.g., "ResumAI", "Flight Delay Prediction", "C(ART)")
- At the end of shorter responses, add: "Would you like me to tell you more about this?"
- If user asks for more details or says "tell me more", then provide a longer, detailed response
- Use bullet points with simple dashes (-) instead of asterisks (*) if listing items
- Use clear, readable plain text formatting

Here is the knowledge base about Shubh Gupta:

${shubhKnowledgeBase}

User's question: ${message}

Please respond as ShubhGPT, providing helpful and accurate information about Shubh Gupta based on the knowledge base above. Keep your initial response brief and offer to provide more details. If the question is outside the scope of what you know about Shubh, politely redirect the conversation back to topics related to his background, experience, or projects.
`;

    // Generate response
    const result = await model.generateContent(prompt);
    const geminiResponse = await result.response;
    let text = geminiResponse.text();

    // Add hyperlinks to project names
    text = addProjectLinks(text);

    // Add security headers
    const apiResponse = NextResponse.json({ response: text });
    apiResponse.headers.set('X-Content-Type-Options', 'nosniff');
    apiResponse.headers.set('X-Frame-Options', 'DENY');
    apiResponse.headers.set('X-XSS-Protection', '1; mode=block');
    
    return apiResponse;

  } catch (error) {
    console.error('Chat API error:', error);
    
    // Don't expose internal error details in production
    const isDevelopment = process.env.NODE_ENV === 'development';
    const errorMessage = isDevelopment 
      ? `Failed to generate response: ${error instanceof Error ? error.message : 'Unknown error'}`
      : 'Failed to generate response. Please try again later.';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
