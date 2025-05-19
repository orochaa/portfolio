import { projects } from '@/lib/data/projects'
import type { Project } from '@/lib/data/projects'

export interface ProjectGroup {
  name: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  {
    name: 'Frontend',
    projects: projects.filter(project => project.tags.includes('frontend')),
  },
  {
    name: 'Backend',
    projects: projects.filter(project => project.tags.includes('backend')),
  },
  {
    name: 'Mobile',
    projects: projects.filter(project => project.tags.includes('mobile')),
  },
  {
    name: 'Tools',
    projects: projects.filter(project => project.tags.includes('tools')),
  },
  {
    name: 'Contributor',
    projects: projects.filter(project => project.tags.includes('contributor')),
  },
]
