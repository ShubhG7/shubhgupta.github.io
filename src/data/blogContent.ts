import { blogContents } from './blogs/index';

export interface BlogSection {
  id: string;
  title: string;
  content: string;
}

export interface BlogContent {
  sections: BlogSection[];
}

export function getBlogContent(projectId: string): BlogContent | null {
  // Use static import from the new blog structure
  return (blogContents as Record<string, BlogContent>)[projectId] || null;
} 