import { NextRequest, NextResponse } from 'next/server';
import projects from '@/data/projects.json';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }>}) {
  const resolvedParams = await params;
  const project = projects.find((p: any) => p.id === resolvedParams.id);
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(project);
}
