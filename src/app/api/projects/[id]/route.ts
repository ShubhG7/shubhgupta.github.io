import { NextRequest, NextResponse } from 'next/server';
import projects from '@/data/projects.json';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const project = projects.find((p: any) => p.id === params.id);
  if (!project) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  return NextResponse.json(project);
}
