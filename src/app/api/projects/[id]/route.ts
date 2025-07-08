import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const filePath = path.join(process.cwd(), "src/data/projects.json");
  const data = await fs.readFile(filePath, "utf-8");
  const projects = JSON.parse(data);
  const project = projects.find((p: any) => p.id === params.id);
  if (!project) {
    return NextResponse.json({ error: "Project not found" }, { status: 404 });
  }
  return NextResponse.json(project);
} 