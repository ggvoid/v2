export interface NavigationLink { label: string; sectionId: string }

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  focus?: string;
  highlights: string[];
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  /** Path under /public, e.g. "/projects/mousai.png". Leave empty to show a placeholder. */
  imageSrc?: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export interface SkillCategory { name: string; skills: string[] }
export interface Stat { value: string; label: string }
