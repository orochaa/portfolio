import { projects } from '@/lib/data/projects'
import type { Project } from '@/lib/data/projects'

export const groups: {
  name: string
  projects: Project[]
}[] = [
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
]
