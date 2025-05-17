import { projects  } from '@/data/projects'
import type {Project} from '@/data/projects';

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
    name: 'FullStack',
    projects: projects.filter(project => project.tags.includes('frontend')),
  },
  {
    name: 'Tools',
    projects: projects.filter(project => project.tags.includes('tools')),
  },
  {
    name: 'Games',
    projects: projects.filter(project => project.tags.includes('game')),
  },
]