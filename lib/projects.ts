import { getAllProjects, getProjectBySlug, NotionProject } from './notion';

export type Project = NotionProject;

export async function getProjects(): Promise<Project[]> {
  return getAllProjects();
}

export async function getProject(slug: string): Promise<Project | null> {
  return getProjectBySlug(slug);
}